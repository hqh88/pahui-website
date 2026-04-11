import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { env } from 'cloudflare:workers';
import keystaticConfig from '../../../../keystatic.config';
import { parseString } from 'set-cookie-parser';

export const prerender = false;

export const ALL: import('astro').APIRoute = async (context) => {
  const handler = makeGenericAPIRouteHandler(
    {
      config: keystaticConfig,
      clientId: env.KEYSTATIC_GITHUB_CLIENT_ID as string,
      clientSecret: env.KEYSTATIC_GITHUB_CLIENT_SECRET as string,
      secret: env.KEYSTATIC_SECRET as string,
    },
    { slugEnvName: 'PUBLIC_KEYSTATIC_GITHUB_APP_SLUG' }
  );

  const { body, headers, status } = await handler(context.request);

  // Process headers and cookies (adapted from @keystatic/astro source)
  const headersMap = new Map<string, string[]>();
  if (headers) {
    if (Array.isArray(headers)) {
      for (const [key, value] of headers) {
        if (!headersMap.has(key.toLowerCase())) headersMap.set(key.toLowerCase(), []);
        headersMap.get(key.toLowerCase())!.push(value);
      }
    } else if (typeof (headers as Headers).entries === 'function') {
      for (const [key, value] of (headers as Headers).entries()) {
        headersMap.set(key.toLowerCase(), [value]);
      }
      if ('getSetCookie' in headers && typeof (headers as Headers).getSetCookie === 'function') {
        const setCookieHeaders = (headers as Headers).getSetCookie();
        if (setCookieHeaders?.length) headersMap.set('set-cookie', setCookieHeaders);
      }
    } else {
      for (const [key, value] of Object.entries(headers)) {
        headersMap.set(key.toLowerCase(), [value as string]);
      }
    }
  }

  const setCookieHeaders = headersMap.get('set-cookie');
  headersMap.delete('set-cookie');

  if (setCookieHeaders) {
    for (const setCookieValue of setCookieHeaders) {
      const { name, value, ...options } = parseString(setCookieValue);
      const sameSite = options.sameSite?.toLowerCase() as 'lax' | 'strict' | 'none' | undefined;
      context.cookies.set(name, value, {
        domain: options.domain,
        expires: options.expires,
        httpOnly: options.httpOnly,
        maxAge: options.maxAge,
        path: options.path,
        sameSite: sameSite === 'lax' || sameSite === 'strict' || sameSite === 'none' ? sameSite : undefined,
      });
    }
  }

  return new Response(body, {
    status,
    headers: [...headersMap.entries()].flatMap(([key, val]) => val.map((x) => [key, x])),
  });
};

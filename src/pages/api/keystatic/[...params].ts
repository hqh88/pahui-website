import { makeHandler } from '@keystatic/astro/api';
import keystaticConfig from '../../../../keystatic.config';

export const prerender = false;

export const ALL: import('astro').APIRoute = (context) => {
  // Read env vars from Cloudflare runtime bindings
  const env = (context.locals as any)?.runtime?.env ?? {};

  const handler = makeHandler({
    config: keystaticConfig,
    clientId: env.KEYSTATIC_GITHUB_CLIENT_ID ?? import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID,
    clientSecret: env.KEYSTATIC_GITHUB_CLIENT_SECRET ?? import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
    secret: env.KEYSTATIC_SECRET ?? import.meta.env.KEYSTATIC_SECRET,
  });

  return handler(context);
};

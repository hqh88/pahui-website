import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname.startsWith('/admin')) {
    const token = context.cookies.get('keystatic-gh-access-token')?.value;
    if (!token) {
      return context.redirect('/keystatic');
    }
  }
  return next();
});

import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
  locales,
  defaultLocale: 'ja'
});

export const config = {
  // matcher: ['/((?!api|_next|.*\\..*).*)']
  matcher: ['/', '/(en|ja|ya):path*']
};

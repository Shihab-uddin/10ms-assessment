import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip if already localized
  if (pathname.startsWith('/en') || pathname.startsWith('/bn')) {
    return;
  }

  const acceptLang = request.headers.get('accept-language');
  const defaultLang = acceptLang?.startsWith('bn') ? 'bn' : 'en';

  return NextResponse.redirect(new URL(`/${defaultLang}`, request.url));
}

export const config = {
  matcher: ['/'], // Apply middleware only on root
};

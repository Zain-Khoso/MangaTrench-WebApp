// Lib Imports.
import { type NextRequest, NextResponse } from 'next/server';

// Local Imports.
import { isProtectedRoute, isGuestOnlyRoute } from './utils';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (isProtectedRoute(pathname)) {
    const verifyUrl = `${request.nextUrl.origin}/api/cookies/session-verify`;

    const response = await fetch(verifyUrl, {
      method: 'GET',
      headers: { cookie: request.headers.get('cookie') || '' },
    });

    const serverResponse = await response.json();

    if (response.status !== 200 || serverResponse.isValid === false) {
      const redirectUrl = new URL('/sign-in', request.url);
      redirectUrl.searchParams.set('redirect', pathname + request.nextUrl.search);
      return NextResponse.redirect(redirectUrl);
    }
  }

  if (isGuestOnlyRoute(pathname)) {
    const verifyUrl = `${request.nextUrl.origin}/api/cookies/session-verify`;

    const response = await fetch(verifyUrl, {
      method: 'GET',
      headers: { cookie: request.headers.get('cookie') || '' },
    });
    const serverResponse = await response.json();

    if (
      response.status === 200 &&
      serverResponse.success === true &&
      serverResponse.isValid === true
    ) {
      return NextResponse.redirect(new URL('/browse', request.url));
    }
  }

  return NextResponse.next();
}

// Configuring middleware to run on all paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

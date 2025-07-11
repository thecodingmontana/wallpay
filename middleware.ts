import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const userCookie = request.cookies.get('user');
    const authenticatedCookie = request.cookies.get('authenticated');

    const isUserCookieNull = !userCookie || userCookie.value === null || userCookie.value === 'null';
    const isAuthenticatedCookieNull = !authenticatedCookie || authenticatedCookie.value === null || authenticatedCookie.value === 'null';

    // If user is accessing root path and not authenticated, redirect to signin
    if (request.nextUrl.pathname === '/' && isUserCookieNull && isAuthenticatedCookieNull) {
        const signinUrl = new URL('/auth/signin', request.url);
        return NextResponse.redirect(signinUrl);
    }

    if (isUserCookieNull && isAuthenticatedCookieNull) {
        if (request.nextUrl.pathname === '/auth/signin') {
            return NextResponse.next();
        }

        const signinUrl = new URL('/auth/signin', request.url);
        return NextResponse.redirect(signinUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - auth/signin (signin page itself)
         * - public files (images, etc.)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|auth/signin|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)$).*)',
    ],
};
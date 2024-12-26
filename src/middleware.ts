import { NextRequest, NextResponse } from "next/server";

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const authToken = request.cookies.get('auth-token');

    if (pathname === '/sign-up') {
        if (authToken && uuidPattern.test(authToken.value)) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    if (pathname === "/dashboard/:path*") {
        if (!authToken || !uuidPattern.test(authToken.value)) {
            return NextResponse.redirect(new URL('/sign-up', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/sign-up',
        '/dashboard/:path*',
    ],
};
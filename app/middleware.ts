// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('token')?.value;
//   const city = request.cookies.get('city')?.value;

//   const { pathname } = request.nextUrl;

//   // Protect admin routes
//   if (pathname.startsWith('/admin') && !token) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // Force city selection (like Zepto location popup)
//   if (!city && pathname !== '/select-location') {
//     return NextResponse.redirect(new URL('/select-location', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/admin/:path*', '/((?!_next|api|favicon.ico).*)'],
// };

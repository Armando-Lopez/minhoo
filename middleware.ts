import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// const protectedRoutes = ["app"];
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const auth_token = cookies().get("auth_token");
  const isProtectedRoute = pathname.startsWith("/app");

  if (isProtectedRoute && !auth_token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!isProtectedRoute && auth_token) {
    return NextResponse.redirect(new URL("/app/news", request.url));
  }
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

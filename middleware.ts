import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("auth"); // 쿠키에서 인증 토큰 확인
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");
  const isPublicPage = request.nextUrl.pathname === "/";

  // 인증되지 않은 사용자가 보호된 페이지에 접근하려 할 때
  if (!isLoggedIn && !isAuthPage && !isPublicPage) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // 이미 인증된 사용자가 로그인/회원가입 페이지에 접근하려 할 때
  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// 미들웨어가 적용될 경로 설정
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

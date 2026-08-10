import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "@/shared/constants";

const PUBLIC_ROUTES: string[] = [
  ROUTES.LANDING,
  ROUTES.LOGIN,
  ROUTES.REGISTER,
];

const AUTH_ROUTES: string[] = [
  ROUTES.LOGIN,
  ROUTES.REGISTER,
];

export function proxy(request: NextRequest) {   
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("access_token")?.value;


  if (pathname === ROUTES.HOME) {
    return NextResponse.redirect(new URL(ROUTES.LANDING, request.url));
  }

  if (AUTH_ROUTES.includes(pathname) && token) {
    return NextResponse.redirect(new URL(ROUTES.LANDING, request.url));
  }

  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
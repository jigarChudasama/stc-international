import { NextResponse } from "next/server";

const STATIC_PREFIXES = ["/_next", "/images"];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/collection/")) {
    return NextResponse.redirect(new URL("/collection", request.url));
  }

  if (
    pathname === "/" ||
    pathname === "/collection" ||
    pathname === "/about-us" ||
    pathname === "/quality-sourcing" ||
    pathname === "/terms-and-conditions" ||
    pathname === "/faqs" ||
    pathname === "/privacy-policy" ||
    pathname === "/contact-us" ||
    pathname === "/sustainability" ||
    pathname === "/infrastructure"
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (STATIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

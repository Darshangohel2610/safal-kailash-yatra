import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || "safal-kailash-yatra-admin-secret-key-2026"
);

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip the login page itself
  if (pathname === "/sanchalak/login") {
    return NextResponse.next();
  }

  // Protect all /sanchalak routes
  if (pathname.startsWith("/sanchalak")) {
    const token = request.cookies.get("admin_session")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/sanchalak/login", request.url));
    }

    try {
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/sanchalak/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sanchalak/:path*"],
};

import type { NextRequest } from "next/server";
import { MiddlewareConfig } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.nextUrl));
}

export const config = {
  matcher: [
    "/about",
    "/about/:path*",
    "/about/(.*)",
    {
      source: "/dashboard",
      has: [{ type: "header", key: "x-custom-header" }],
    },
    {
      source: "/users",
      missing: [{ type: "header", key: "purpose" }],
    },
  ],
} satisfies MiddlewareConfig;

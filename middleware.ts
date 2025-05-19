import { authConfig } from "auth";
import NextAuth from "next-auth";
import { MiddlewareConfig } from "next/server";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
} satisfies MiddlewareConfig;

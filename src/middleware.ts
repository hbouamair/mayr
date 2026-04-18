import { NextResponse } from "next/server";

/**
 * This app is Next.js (`/_next/`), not Nuxt (`/_nuxt/`). Cached clients or bots may
 * still request `/_nuxt/*.js` — return minimal JS with 200 so you don’t get 404 noise.
 */
export function middleware() {
  return new NextResponse("/*! legacy _nuxt request — this site is Next.js */\n", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

export const config = {
  matcher: ["/_nuxt", "/_nuxt/:path*"],
};

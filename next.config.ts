import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Lockfiles or tooling above this folder can make Turbopack treat the wrong directory as root,
// so `@import "tailwindcss"` resolves from e.g. `C:\Users\SQMV0257` and fails. Pin to this app.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    /** Allowed `quality` values for `next/image` (Next 16 defaults to [75] only). */
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

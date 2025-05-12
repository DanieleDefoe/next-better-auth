import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    dirs: ["app"],
    ignoreDuringBuilds: false,
  },
  experimental: {
    dynamicIO: true,
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
        pathname: "/**",
      },
    ],
  },
} satisfies NextConfig;

export default nextConfig;

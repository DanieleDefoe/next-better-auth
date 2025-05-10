import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    dirs: ["app"],
    ignoreDuringBuilds: false,
  },
} satisfies NextConfig;

export default nextConfig;

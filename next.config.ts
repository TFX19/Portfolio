import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.imgur.com','imgur.com'], 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

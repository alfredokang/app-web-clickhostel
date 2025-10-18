import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "datehouse.com.br",
      },
      {
        protocol: "https",
        hostname: "www.datehouse.com.br",
      },
    ],
  },
};

export default nextConfig;

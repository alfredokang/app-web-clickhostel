import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "datehouse.com.br",
      "www.datehouse.com.br",
    ],
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
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

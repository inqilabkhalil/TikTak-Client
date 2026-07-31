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
        hostname: "api.sarkhanrahimli.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "uploads.sarkhanrahimli.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
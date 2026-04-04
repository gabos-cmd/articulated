import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.artic.edu",
        pathname: "/iiif/2/**"
      }
    ]
  }
};

export default nextConfig;

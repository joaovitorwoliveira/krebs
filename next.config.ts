import type { NextConfig } from "next";

import { redirects } from "./redirects";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "8vncue4ikz.ufs.sh",
        pathname: "/f/**",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    formats: ["image/avif", "image/webp"],
    qualities: [40, 75, 80],
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;

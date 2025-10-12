import type { NextConfig } from "next";

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
  },
};

export default nextConfig;

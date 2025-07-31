import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://www.alibaba.com/')],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: 'd3g07f5oxrfvni.cloudfront.net',
      },
      {
      protocol: "https",
      hostname: "baitalnokhada-landing-media.s3.us-east-1.amazonaws.com",
    },
    ],
  },
};

export default nextConfig;
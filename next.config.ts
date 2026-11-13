import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: '**',
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
    {
        protocol: 'https',
        hostname: 'baitalnokhada.com',
      },
    ],
  },

async redirects() {
    return [
      {
        source: "/about",
        destination: "/about-us/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us/",
        permanent: true,
      },
      {
        source: "/ar/about",
        destination: "/ar/about-us/",
        permanent: true,
      },
      {
        source: "/ar/contact",
        destination: "/ar/contact-us/",
        permanent: true,
      },
    ];
  },
};        

export default nextConfig;
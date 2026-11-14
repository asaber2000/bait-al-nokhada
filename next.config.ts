import type { NextConfig } from "next";

const legacyEnArticles = [
  "tent-rental",
  "tent-companies-in-uae",
  "aircraft-hangar-for-rent",
  "rental-tents-in-dubai",
  "tent-rental-in-abu-dhabi",
  "tent-rental-dubai",
  "warehouse-tent-rental",
  "tent-supplier-in-uae",
  "tents-for-rental",
  "tent-manufacturers-in-dubai",
  "tent-rental-in-dubai",
  "majlis-tents",
  "rent-a-tent-dubai",
  "tent-supplier-in-gcc",
  "tents-rental-in-dubai",
  "tent-rentals-in-riyadh",
  "tent-rental-suppliers",
  "arabic-majlis-tents-in-uae",
  "tents-supplier",
  "tent-rental-for-event",
  "wedding-tent-rentals",
  "tents-for-sale",
  "tent-rental-services-in-uae-ksa",
  "event-tent-rental",
  "looking-for-the-best-events-tent",
  "custom-ramadan-tent",
  "tent-rental-guide-uae",
];

const legacyArArticles = [
  "tent-rental",
  "tent-rental-khobar",
  "tent-suppliers-dammam",
  "tent-manufacturing-dammam",
  "tents-for-sale-riyadh",
  "tent-supplier-installation-riyadh",
  "event-tents-uae",
  "tents-for-rent-dubai",
  "tent-rental-ajman",
  "funeral-tent-rental-uae-saudi",
  "arabic-tent-rental",
  "tent-rental-uae-saudi-arabia",
  "tent-suppliers-ksa",
  "european-tent-rental",
  "tents-for-sale-abu-dhabi",
  "european-tent-rental-dubai-abu-dhabi",
  "event-tents-rental",
  "tent-rental-uae",
  "best-tent-prices-uae",
  "majlis-tent-rental",
  "tent-rental-guide-uae",
];

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
    // تحويلات المقالات الإنجليزية القديمة (/slug و /ar/slug -> /news/slug/)
      ...legacyEnArticles.flatMap((slug) => [
        {
          source: `/${slug}`,
          destination: `/news/${slug}/`,
          permanent: true,
        },
        ...(!legacyArArticles.includes(slug)
          ? [
              {
                source: `/ar/${slug}`,
                destination: `/news/${slug}/`,
                permanent: true,
              },
            ]
          : []),
      ]),

      // تحويلات المقالات العربية القديمة (/ar/slug و /slug -> /ar/news/slug/)
      ...legacyArArticles.flatMap((slug) => [
        {
          source: `/ar/${slug}`,
          destination: `/ar/news/${slug}/`,
          permanent: true,
        },
        ...(!legacyEnArticles.includes(slug)
          ? [
              {
                source: `/${slug}`,
                destination: `/ar/news/${slug}/`,
                permanent: true,
              },
            ]
          : []),
      ]),
      // تحويل روابط الحلول بصيغة الجمع (-tents) إلى المفرد (-tent)
      ...[
        "warehouse-tents",
        "wedding-tents",
        "event-tents",
        "exhibition-tents",
        "sports-tents",
        "ramadan-tents",
        "aircraft-hangar-tents",
      ].flatMap((pluralSlug) => {
        const singularSlug = pluralSlug.replace(/-tents$/, "-tent");
        return [
          {
            source: `/solutions/${pluralSlug}`,
            destination: `/solutions/${singularSlug}/`,
            permanent: true,
          },
          {
            source: `/ar/solutions/${pluralSlug}`,
            destination: `/ar/solutions/${singularSlug}/`,
            permanent: true,
          },
        ];
      }),
      // تحويل روابط المنتجات القديمة بصيغة الجمع (-tents) إلى المفرد (-tent)
      ...[
        "arabic-majlis-tents",
        "arch-tents",
        "capsule-tents",
        "dome-tents",
        "double-decker-tents",
        "geodesic-tents",
        "panoramic-tents",
        "polygon-tents",
        "pyramid-dome-tents",
        "pyramid-tents",
        "revolution-tents",
        "wave-tents",
      ].flatMap((pluralSlug) => {
        const singularSlug = pluralSlug.replace(/-tents$/, "-tent");
        return [
          {
            source: `/products/${pluralSlug}`,
            destination: `/products/${singularSlug}/`,
            permanent: true,
          },
          {
            source: `/ar/products/${pluralSlug}`,
            destination: `/ar/products/${singularSlug}/`,
            permanent: true,
          },
        ];
      }),
      // تحويلات صفحات قديمة ظهرت في page-sitemap القديم
      { source: "/privacy-policy", destination: "/privacy/", permanent: true },
      { source: "/ar/privacy-policy", destination: "/ar/privacy/", permanent: true },
      { source: "/about-us-2", destination: "/about-us/", permanent: true },
      { source: "/shop", destination: "/products/", permanent: true },
      { source: "/ar/shop", destination: "/ar/products/", permanent: true },
    ];
  },
};      

export default nextConfig;
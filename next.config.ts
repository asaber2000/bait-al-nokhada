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
  "funeral-tent-rental-uae-saudi",
  "arabic-tent-rental",
  "tent-rental-uae-saudi-arabia",
  "european-tent-rental",
  "european-tent-rental-dubai-abu-dhabi",
  "tent-rental-uae",
  "majlis-tent-rental",
  "tent-rental-guide-uae",
  "tent-rental-dammam",
  "tent-installation",
  "tent-rental-events-dubai-riyadh"
];

const arabicLegacyRedirects: Array<[string, string]> = [
  ["شركة-مظلات", "/ar/"],
  ["محل-تاجير-خيام", "/ar/"],
  ["خيمة-القبة", "/ar/products/dome-tent/"],
  ["خيمة-هرميه", "/ar/products/pyramid-tent/"],
  ["خيمة-المجلس", "/ar/products/arabic-majlis-tent/"],
  ["الخيمة-المضلعة", "/ar/products/polygon-tent/"],
  ["هل-تبحث-عن-خيام-اوروبية-للإيجار-؟", "/ar/products/"],
  ["المنتجات-بيت-النوخذة-للخيام-والمظلات", "/ar/products/"],
  ["خيام-معارض", "/ar/solutions/exhibition-tent/"],
  ["الخيمة-رمضانية", "/ar/solutions/ramadan-tent/"],
  ["خيام-رمضانيه", "/ar/solutions/ramadan-tent/"],
  ["خيمة-المناسبات", "/ar/solutions/event-tent/"],
  ["خيام-المنحني", "/ar/solutions/"],
  ["خيمة-ملكية", "/ar/solutions/"],
  ["خيام-العزاء", "/ar/news/funeral-tent-rental-uae-saudi/"],
  ["تأجير-خيام-العزاء-في-الإمارات", "/ar/news/funeral-tent-rental-uae-saudi/"],
  ["تاجير-الخيام", "/ar/news/tent-rental/"],
  ["خيام-للايجار-اليومي", "/ar/news/tent-rental/"],
  ["تاجير-خيام-الخبر", "/ar/news/tent-rental-khobar/"],
  ["محلات-خيام-الدمام", "/ar/news/tent-suppliers-dammam/"],
  ["تفصيل-خيام-الدمام", "/ar/news/tent-manufacturing-dammam/"],
  ["خيام-للبيع-بالرياض", "/ar/news/tents-for-sale-riyadh/"],
  ["تركيب-خيام-الرياض", "/ar/news/tent-supplier-installation-riyadh/"],
  ["خيام-المناسبات", "/ar/news/event-tents-uae/"],
  ["خيام-للايجار-في-دبي", "/ar/news/tents-for-rent-dubai/"],
  ["خيام-للايجار-في-عجمان", "/ar/news/tent-rental-ajman/"],
  ["موردين-الخيام-في-السعودية", "/ar/news/tent-suppliers-ksa/"],
  ["خيام-للبيع-في-أبو-ظبي-تجربة-فريدة-لمناس", "/ar/news/tents-for-sale-abu-dhabi/"],
  ["تأجير-خيم-المناسبات", "/ar/news/event-tents-rental/"],
  ["أفضل-أسعار-الخيام-في-الإمارات", "/ar/news/best-tent-prices-uae/"],
  ["هل-تبحث-عن-تأجير-خيام-اوروبية؟", "/ar/news/european-tent-rental-dubai-abu-dhabi/"],
  ["تأجير-خيام-الدمام", "/ar/news/tent-rental-dammam/"],
  ["تركيب-خيام", "/ar/news/tent-installation/"],
  ["هل-تبحث-عن-تأجير-الخيام؟", "/ar/news/tent-rental-events-dubai-riyadh/"],
  ["تأجير-الخيام-2", "/ar/news/tent-rental-uae-saudi-arabia/"],
  ["الخيمة-العربية", "/ar/news/arabic-tent-rental/"],
  ["هل-تبحث-عن-خيام-رمضانية-للإيجار؟", "/ar/solutions/ramadan-tent/"],
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
    const rawRedirects = [
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      ...arabicLegacyRedirects.flatMap(([slug, destination]) => [
        { source: `/ar/${slug}/`, destination, permanent: true },
        { source: `/${slug}/`, destination, permanent: true },
      ]),
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

      ...[
        // قائمة الحلول (Solutions)
        "aircraft-hangar-tent",
        "warehouse-tent",
        "sports-tent",
        "exhibition-tent",
        "wedding-tent",
        "event-tent",
        "ramadan-tent",
      ].flatMap((slug) => [
        // 1. تحويل المسارات العربية المباشرة القديمة إلى /ar/solutions/slug/
        { source: `/ar/${slug}/`, destination: `/ar/solutions/${slug}/`, permanent: true },
        { source: `/ar/${slug}`, destination: `/ar/solutions/${slug}/`, permanent: true },
        // 2. تحويل المسارات الإنجليزية المباشرة القديمة إلى /solutions/slug/
        { source: `/${slug}/`, destination: `/solutions/${slug}/`, permanent: true },
        { source: `/${slug}`, destination: `/solutions/${slug}/`, permanent: true },
        // 3. تحويل المسارات الفرنسية القديمة إلى /solutions/slug/
        { source: `/fr/${slug}/`, destination: `/solutions/${slug}/`, permanent: true },
      ]),

      ...[
        // قائمة المنتجات (Products)
        "pyramid-dome-tent",
        "pyramid-dome-tent-2",
        "double-decker-tent",
        "luxury-arabic-majlis-tent",
        "wave-tent",
        "geodesic-tent",
        "panoramic-tent",
        "arch-tent",
        "polygon-tent",
        "revolution-tent",
        "dome-tent",
        "pyramid-tent",
        "arabic-majlis-tent",
      ].flatMap((slug) => [
        // 1. تحويل المسارات العربية المباشرة القديمة إلى /ar/products/slug/
        { source: `/ar/${slug}/`, destination: `/ar/products/${slug}/`, permanent: true },
        { source: `/ar/${slug}`, destination: `/ar/products/${slug}/`, permanent: true },
        // 2. تحويل المسارات الإنجليزية المباشرة القديمة إلى /products/slug/
        { source: `/${slug}/`, destination: `/products/${slug}/`, permanent: true },
        { source: `/${slug}`, destination: `/products/${slug}/`, permanent: true },
        // 3. تحويل المسارات الفرنسية القديمة إلى /products/slug/
        { source: `/fr/${slug}/`, destination: `/products/${slug}/`, permanent: true },
        { source: `/fr/produits/${slug}/`, destination: `/products/${slug}/`, permanent: true },
      ]),
      // تحويلات صفحات قديمة ظهرت في page-sitemap القديم
      { source: "/labor-tent", destination: "/solutions/labour-break-time-tent/", permanent: true },
      { source: "/about-us-2", destination: "/about-us/", permanent: true },
      { source: "/shop", destination: "/products/", permanent: true },
      { source: "/ar/shop", destination: "/ar/products/", permanent: true },
      { source: "/ar/industries-we-serve/", destination: "/ar/solutions/", permanent: true },
      { source: "/fr/industries-we-serve/", destination: "/solutions/", permanent: true },
      { source: "/industries-we-serve/", destination: "/solutions/", permanent: true },
      {
        source: "/fr/produits/",
        destination: "/products/",
        permanent: true,
      },
      {
        source: "/fr/solutions/",
        destination: "/solutions/",
        permanent: true,
      },
      {
        source: "/fr/projects/",
        destination: "/projects/",
        permanent: true,
      },
      {
        source: "/fr/news/:slug/",
        destination: "/news/:slug/",
        permanent: true,
      },
      {
        source: "/fr/nouvelles/:slug/",
        destination: "/news/:slug/",
        permanent: true,
      },
      {
        source: "/fr/category/news/:slug/",
        destination: "/news/:slug/",
        permanent: true,
      },
      {
        source: "/fr/news/",
        destination: "/news/",
        permanent: true,
      },
      {
        source: "/fr/nouvelles/",
        destination: "/news/",
        permanent: true,
      },
      {
        source: "/fr/contactez-nous/",
        destination: "/contact-us/",
        permanent: true,
      },
      {
        source: "/fr/a-propos-de-nous/",
        destination: "/about-us/",
        permanent: true,
      },
      {
        source: "/fr/page-d-accueil/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/fr/products/:slug/",
        destination: "/products/:slug/",
        permanent: true,
      },
      {
        source: "/fr/solutions/:slug/",
        destination: "/solutions/:slug/",
        permanent: true,
      },
      {
        source: "/fr/produits/:slug/",
        destination: "/products/:slug/",
        permanent: true,
      },
      {
        source: "/fr/:slug/",
        destination: "/products/:slug/",
        permanent: true,
      },
      {
        source: "/fr/:path*",
        destination: "/",
        permanent: true,
      }, // توجيه أي رابط فرنسي قديم للصفحة الرئيسية بأمان
      { source: "/category/خيام/", destination: "/ar/news/", permanent: true },
      { source: "/ar/category/خيام/", destination: "/ar/news/", permanent: true },
      { source: "/fr/category/خيام/", destination: "/ar/news/", permanent: true },
      { source: "/category/tents/", destination: "/news/", permanent: true },
      { source: "/ar/category/tents/", destination: "/ar/news/", permanent: true },
      { source: "/fr/category/tents/", destination: "/news/", permanent: true },
      { source: "/fr/tents/", destination: "/", permanent: true },
      { source: "/ar/tents/", destination: "/ar/", permanent: true },
      { source: "/tents/", destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/news/", permanent: true },
      { source: "/ar/author/:path*", destination: "/ar/news/", permanent: true },
      { source: "/fr/author/:path*", destination: "/news/", permanent: true },
      { source: "/news/page/:page/", destination: "/news/", permanent: true },
      { source: "/ar/news/page/:page/", destination: "/ar/news/", permanent: true },
      { source: "/fr/news/page/:page/", destination: "/news/", permanent: true },
      { source: "/--/", destination: "/", permanent: true },
      { source: "/ar/-/", destination: "/ar/", permanent: true },
      { source: "/fr/-/", destination: "/", permanent: true },
      { source: "/ar/car-parkings/", destination: "/ar/products/", permanent: true },
      { source: "/fr/car-parkings/", destination: "/products/", permanent: true },
      { source: "/car-parkings/", destination: "/products/", permanent: true },
      { source: "/ar/tensile-shade/", destination: "/ar/solutions/", permanent: true },
      { source: "/fr/tensile-shade/", destination: "/solutions/", permanent: true },
      { source: "/tensile-shade/", destination: "/solutions/", permanent: true },
      { source: "/ar/warehouse-tents/", destination: "/ar/solutions/warehouse-tent/", permanent: true },
      { source: "/warehouse-tents/", destination: "/solutions/warehouse-tent/", permanent: true },
      { source: "/ar/exhibition-tents/", destination: "/ar/solutions/exhibition-tent/", permanent: true },
      { source: "/exhibition-tents/", destination: "/solutions/exhibition-tent/", permanent: true },
      { source: "/ar/curve-tent/", destination: "/ar/products/", permanent: true },
      { source: "/curve-tent/", destination: "/products/", permanent: true },
      { source: "/fr/curve-tent/", destination: "/products/", permanent: true },
      { source: "/fr/arabic-tent/", destination: "/products/arabic-majlis-tent/", permanent: true },
      { source: "/arabic-tent/", destination: "/products/arabic-majlis-tent/", permanent: true },
      { source: "/ar/arabic-tent/", destination: "/ar/products/arabic-majlis-tent/", permanent: true },
      { source: "/fr/exhibition-tents-for-sale/", destination: "/solutions/exhibition-tent/", permanent: true },
      { source: "/exhibition-tents-for-sale/", destination: "/solutions/exhibition-tent/", permanent: true },
      { source: "/ar/exhibition-tents-for-sale/", destination: "/ar/solutions/exhibition-tent/", permanent: true },
      { source: "/services/", destination: "/solutions/", permanent: true },
      { source: "/ar/services/", destination: "/ar/solutions/", permanent: true },
      { source: "/ar/royal-tent/", destination: "/ar/solutions/", permanent: true },
      { source: "/royal-tent/", destination: "/solutions/", permanent: true },
      { source: "/fr/royal-tent/", destination: "/solutions/", permanent: true },
      { source: "/fr/combo-pyramid-tent/", destination: "/products/pyramid-dome-tent/", permanent: true },
      { source: "/combo-pyramid-tent/", destination: "/products/pyramid-dome-tent/", permanent: true },
      { source: "/ar/combo-pyramid-tent/", destination: "/ar/products/pyramid-dome-tent/", permanent: true },
      { source: "/tent-rentals-for-event/", destination: "/news/event-tent-rental/", permanent: true },
      { source: "/ar/tent-rentals-for-event/", destination: "/ar/news/event-tent-rental/", permanent: true },
      { source: "/fr/tent-rentals-for-event/", destination: "/news/event-tent-rental/", permanent: true },
      { source: "/tent-rental-looking-for-one/", destination: "/news/tent-rental-dubai/", permanent: true },
      { source: "/ar/tent-rental-looking-for-one/", destination: "/ar/news/tent-rental-dubai/", permanent: true },
      { source: "/fr/tent-rental-looking-for-one/", destination: "/news/tent-rental-dubai/", permanent: true },
      { source: "/tent-and-table-rentals/", destination: "/news/tent-rental/", permanent: true },
      { source: "/ar/tent-and-table-rentals/", destination: "/ar/news/tent-rental/", permanent: true },
      { source: "/fr/tent-and-table-rentals/", destination: "/news/tent-rental/", permanent: true },
      { source: "/marquee-for-sale/", destination: "/news/tents-for-sale/", permanent: true },
      { source: "/ar/marquee-for-sale/", destination: "/ar/news/tents-for-sale/", permanent: true },
      { source: "/fr/marquee-for-sale/", destination: "/news/tents-for-sale/", permanent: true },
      { source: "/best-tent-rentals-in-riyadh/", destination: "/news/tent-rental/", permanent: true },
      { source: "/ar/best-tent-rentals-in-riyadh/", destination: "/ar/news/tent-rental/", permanent: true },
      { source: "/fr/best-tent-rentals-in-riyadh/", destination: "/news/tent-rental/", permanent: true },
      { source: "/fr/tents-rental/", destination: "/news/tent-rental/", permanent: true },
      { source: "/tents-rental/", destination: "/news/tent-rental/", permanent: true },
      { source: "/ar/tents-rental/", destination: "/ar/news/tent-rental/", permanent: true },
      { source: "/ar/looking-for-tents-for-sale/", destination: "/ar/news/tents-for-sale/", permanent: true },
      { source: "/fr/looking-for-tents-for-sale/", destination: "/news/tents-for-sale/", permanent: true },
      { source: "/looking-for-tents-for-sale/", destination: "/news/tents-for-sale/", permanent: true },
      { source: "/fr/tent-rental-2/", destination: "/news/tent-rental/", permanent: true },
      { source: "/ar/tent-rental-2/", destination: "/ar/news/tent-rental/", permanent: true },
      { source: "/tent-rental-2/", destination: "/news/tent-rental/", permanent: true },
      { source: "/fr/luxury-arabic-majlis-tent/", destination: "/products/arabic-majlis-tent/", permanent: true },
      { source: "/luxury-arabic-majlis-tent/", destination: "/products/arabic-majlis-tent/", permanent: true },
      { source: "/ar/luxury-arabic-majlis-tent/", destination: "/ar/products/arabic-majlis-tent/", permanent: true },
      { source: "/ar/ar-tent-rental-in-dubai/", destination: "/ar/news/tents-for-rent-dubai/", permanent: true },
      { source: "/fr/ar-tent-rental-in-dubai/", destination: "/ar/news/tents-for-rent-dubai/", permanent: true },
      { source: "/ar-tent-rental-in-dubai/", destination: "/news/tents-for-rent-dubai/", permanent: true },
      { source: "/ar/wedding-tent-for-rent/", destination: "/ar/news/wedding-tent-rentals/", permanent: true },
      { source: "/fr/wedding-tent-for-rent/", destination: "/news/wedding-tent-rentals/", permanent: true },
      { source: "/wedding-tent-for-rent/", destination: "/news/wedding-tent-rentals/", permanent: true },
      { source: "/ar/tent-for-rent-in-dubai/", destination: "/ar/news/tent-rental-dubai/", permanent: true },
      { source: "/fr/tent-for-rent-in-dubai/", destination: "/news/tent-rental-dubai/", permanent: true },
      { source: "/tent-for-rent-in-dubai/", destination: "/news/tent-rental-dubai/", permanent: true },
      { source: "/ar/tent-for-sale/", destination: "/ar/news/tents-for-sale/", permanent: true },
      { source: "/fr/tent-for-sale/", destination: "/news/tents-for-sale/", permanent: true },
      { source: "/tent-for-sale/", destination: "/news/tents-for-sale/", permanent: true },
      { source: "/ar/event-tents/", destination: "/ar/solutions/event-tent/", permanent: true },
      { source: "/event-tents/", destination: "/solutions/event-tent/", permanent: true },
      { source: "/ar/tents-in-uae/", destination: "/ar/news/tent-rental/", permanent: true },
      { source: "/fr/tents-in-uae/", destination: "/news/tent-rental/", permanent: true },
      { source: "/tents-in-uae/", destination: "/news/tent-rental/", permanent: true },
      { source: "/ar/tents-on-rent/", destination: "/ar/news/tent-rental/", permanent: true },
      { source: "/fr/tents-on-rent/", destination: "/news/tent-rental/", permanent: true },
      { source: "/tents-on-rent/", destination: "/news/tent-rental/", permanent: true },
      { source: "/ar/tent-rental-services/", destination: "/ar/news/tent-rental/", permanent: true },
      { source: "/fr/tent-rental-services/", destination: "/news/tent-rental/", permanent: true },
      { source: "/tent-rental-services/", destination: "/news/tent-rental/", permanent: true },
      { source: "/ar/arabic-majlis-tents-2/", destination: "/ar/products/arabic-majlis-tent/", permanent: true },
      { source: "/fr/arabic-majlis-tents-2/", destination: "/products/arabic-majlis-tent/", permanent: true },
      { source: "/arabic-majlis-tents-2/", destination: "/products/arabic-majlis-tent/", permanent: true },
      { source: "/ar/event-tent-for-rent/", destination: "/ar/solutions/event-tent/", permanent: true },
      { source: "/fr/event-tent-for-rent/", destination: "/solutions/event-tent/", permanent: true },
      { source: "/event-tent-for-rent/", destination: "/solutions/event-tent/", permanent: true },
      { source: "/ar/event-tent-rental-2/", destination: "/ar/solutions/event-tent/", permanent: true },
      { source: "/fr/event-tent-rental-2/", destination: "/solutions/event-tent/", permanent: true },
      { source: "/event-tent-rental-2/", destination: "/solutions/event-tent/", permanent: true },
      { source: "/ar/index/", destination: "/ar/", permanent: true },
      { source: "/privacy/", destination: "/privacy-policy/", permanent: true },
      { source: "/wp-content/uploads/:path*", destination: "https://baitalnokhada.com/", permanent: true },

    ];
    return rawRedirects.flatMap((rule) => {
      const encodedSource = encodeURI(rule.source);
      if (encodedSource !== rule.source) {
        return [
          rule,
          { ...rule, source: encodedSource },
        ];
      }
      return [rule];
    });
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https:;",
          },
        ],
      },
    ];
  },
};



export default nextConfig;
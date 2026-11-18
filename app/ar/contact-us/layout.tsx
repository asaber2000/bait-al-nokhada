import type { Metadata } from "next";

const BASE_URL = "https://baitalnokhada.com";

export const metadata: Metadata = {
  title: "اتصل بنا | مصنع بيت النوخذة للخيام (الإمارات والسعودية)",
  description: "تواصل مع خبراء الخيام في دبي، أبوظبي، والرياض. اطلب عرض سعر فوري واحصل على استشارات هندسية للمنشآت والخيام الكبرى.",
  alternates: {
    canonical: `${BASE_URL}/ar/contact-us/`,
    languages: {
      "en-AE": `${BASE_URL}/contact-us/`,
      "ar-AE": `${BASE_URL}/ar/contact-us/`,
      "x-default": `${BASE_URL}/contact-us/`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_AE",
    alternateLocale: ["en_AE"],
    url: `${BASE_URL}/ar/contact-us/`,
    siteName: "مصنع بيت النوخذة للخيام",
    title: "اتصل بنا | مصنع بيت النوخذة للخيام (الإمارات والسعودية)",
    description: "تواصل مع خبراء الخيام في دبي، أبوظبي، والرياض.",
  },
};

export default function ArabicContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
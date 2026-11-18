import type { Metadata } from "next";

const BASE_URL = "https://baitalnokhada.com";

export const metadata: Metadata = {
  title: "Contact Us | Bait Al Nokhada Tents Factory (UAE & KSA)",
  description: "Get in touch with Bait Al Nokhada tent specialists in Dubai, Abu Dhabi, and Riyadh. Request instant factory quotes and industrial structure consultations.",
  alternates: {
    canonical: `${BASE_URL}/contact-us/`,
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
    locale: "en_AE",
    alternateLocale: ["ar_AE"],
    url: `${BASE_URL}/contact-us/`,
    siteName: "Bait Al Nokhada Tents Factory",
    title: "Contact Us | Bait Al Nokhada Tents Factory (UAE & KSA)",
    description: "Get in touch with Bait Al Nokhada tent specialists in Dubai, Abu Dhabi, and Riyadh.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
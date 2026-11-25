import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import { fontHeadingEn, fontBodyEn, fontHeadingAr, fontBodyAr } from "./fonts";

const SpeedInsights = dynamic(() =>
  import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights)
);


export const metadata: Metadata = {
  title: "Bait Al Nokhada Tents Factory",
  description: "Premier manufacturer & supplier of bespoke luxury event tents, heavy-duty industrial warehouses, and architectural fabric shades across the UAE & GCC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://d3g07f5oxrfvni.cloudfront.net"
          crossOrigin="anonymous"
        />
      </head>
      <body
      suppressHydrationWarning
        className={`${fontHeadingEn.variable} ${fontBodyEn.variable} ${fontHeadingAr.variable} ${fontBodyAr.variable} antialiased bg-[#070B14] text-white`}
      >
          {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
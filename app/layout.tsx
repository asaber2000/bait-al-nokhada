import type { Metadata } from "next";
import "./globals.css";
import { fontHeadingEn, fontBodyEn, fontHeadingAr, fontBodyAr } from "./fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";


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
      <body
        className={`${fontHeadingEn.variable} ${fontBodyEn.variable} ${fontHeadingAr.variable} ${fontBodyAr.variable} antialiased bg-[#070B14] text-white`}
      >
          {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
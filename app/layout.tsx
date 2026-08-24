import type { Metadata } from "next";
import "./globals.css";
import { fontHeadingEn, fontBodyEn, fontHeadingAr, fontBodyAr } from "./fonts";

export const metadata: Metadata = {
  title: "Bait Al Nokhada Tents & Fabric Structures",
  description: "Leader in Luxury Tents and High-Span Industrial Structures",
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
      </body>
    </html>
  );
}
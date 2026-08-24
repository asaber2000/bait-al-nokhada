import { Cinzel, Montserrat, Cairo, Alexandria } from "next/font/google";

export const fontHeadingEn = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-heading-en",
  display: "swap",
});

export const fontBodyEn = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body-en",
  display: "swap",
});

export const fontHeadingAr = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-heading-ar",
  display: "swap",
});

export const fontBodyAr = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body-ar",
  display: "swap",
});
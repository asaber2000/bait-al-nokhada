"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "نتفليكس", logo: "/images/netflix.svg", filterType: "normal", scale: 2 },
  { name: "جزيرة ياس", logo: "/images/yas-island-logo.avif", filterType: "invert", scale: 1.20 },
  { name: "أدنوك", logo: "/images/adnoc-logo-updated.svg", filterType: "normal", scale: 1.40 },
  { name: "القرية العالمية", logo: "/images/global-village-logoo.png", filterType: "normal", scale: 1.52 },
  { name: "إعمار", logo: "/images/emaar-logoooo.svg", filterType: "normal", scale: 1 },
  { name: "مدينة إكسبو دبي", logo: "/images/expo.svg", filterType: "normal", scale: 1.55 },
  { name: "مركز دبي التجاري العالمي", logo: "/images/hq-dwtc-logo.png", filterType: "invert", scale: 1.25 },
  { name: "دي بي ورلد", logo: "/images/db-world-new.svg", filterType: "invert", scale: 1 },
  { name: "شرطة دبي", logo: "/images/dubai-police-logo.svg", filterType: "normal", scale: 1.20 },
  { name: "جيتكس جلوبال", logo: "/images/gitex_global.png", filterType: "normal", scale: 1.20, mobileOnly: true },
  { name: "حكومة الشارقة", logo: "/images/Government-of-Sharjah-Agriculture-Livestock-Department.svg", filterType: "normal", scale: 1.20 },
  { name: "قطارات الاتحاد", logo: "/images/Etihad-Rail-UAE (1).svg", filterType: "normal", scale: 1.20 },
  { name: "أبوظبي للإعلام", logo: "/images/ADM-logo.svg", filterType: "normal", scale: 1.20 },
  { name: "تسلا", logo: "/images/Tesla-Logo (1).svg", filterType: "normal", scale: 1.80 },
];

export default function ClientsTickerAr() {
  return (
    <section dir="rtl" className="relative py-16 lg:py-20 bg-[#FDFCF7] border-t border-slate-200/60 overflow-hidden font-sans">

      {/* توهج خلفي محيطي خفيف */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[250px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-full px-6 mb-12 text-center">
        <span className="text-xs font-bold text-[#df9d17] bg-[#df9d17]/10 border border-[#df9d17]/30 px-5 py-2 rounded-full shadow-xs tracking-normal">
          تحظى بثقة كبرى المؤسسات العالمية والجهات الحكومية
        </span>
      </div>

      {/* شريط شعارات انسيابي عائم بدون كروت بيضاء */}
      <div className="flex overflow-hidden select-none w-full [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex items-center gap-14 sm:gap-20 whitespace-nowrap shrink-0 py-4"
        >
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="relative flex items-center justify-center w-[160px] sm:w-[190px] h-[60px] shrink-0 transition-all duration-300 group opacity-75 hover:opacity-100 hover:scale-105"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="200px"
                style={{ transform: `scale(${client.scale || 1})` }}
                className={`object-contain transition-all duration-300 ${
                  client.filterType === "invert"
                    ? "invert"
                    : client.name === "Emaar" || client.name === "إعمار" || client.logo.includes("-w")
                    ? "brightness-0"
                    : ""
                }`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
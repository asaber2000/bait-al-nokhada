"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Netflix", logo: "/images/netflix.svg", filterType: "normal", scale: 2 },
  { name: "Yas Island", logo: "/images/yas-island-logo.avif", filterType: "invert", scale: 1.20 },
  { name: "ADNOC", logo: "/images/adnoc-logo-updated.svg", filterType: "normal", scale: 1.40 },
  { name: "Global Village", logo: "/images/global-village-logoo.png", filterType: "normal", scale: 1.52 },
  { name: "Emaar", logo: "/images/emaar-logoooo.svg", filterType: "normal", scale: 1 },
  { name: "Expo City Dubai", logo: "/images/expo.svg", filterType: "normal", scale: 1.55 },
  { name: "Dubai World Trade Centre", logo: "/images/hq-dwtc-logo.png", filterType: "invert", scale: 1.25 },
  { name: "DB World", logo: "/images/db-world-new.svg", filterType: "invert", scale: 1 },
  { name: "Dubai Police", logo: "/images/dubai-police-logo.svg", filterType: "normal", scale: 1.20 },
  { name: "GITEX GLOBAL", logo: "/images/gitex_global.png", filterType: "normal", scale: 1.20, mobileOnly: true },
  { name: "Sharjah Gov", logo: "/images/Government-of-Sharjah-Agriculture-Livestock-Department.svg", filterType: "normal", scale: 1.20 },
  { name: "Etihad Rail", logo: "/images/Etihad-Rail-UAE (1).svg", filterType: "normal", scale: 1.20 },
  { name: "Dubai Media", logo: "/images/ADM-logo.svg", filterType: "normal", scale: 1.20 },
  { name: "Tesla", logo: "/images/Tesla-Logo (1).svg", filterType: "normal", scale: 1.80 },
];

export default function ClientsTicker() {
  return (
    <section className="relative py-20 bg-[#FDFCF7] border-t border-slate-200/60 overflow-hidden">

      {/* توهج خلفي محيطي خفيف */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[250px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-full px-6 mb-12 text-center">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#df9d17] bg-[#df9d17]/10 border border-[#df9d17]/30 px-5 py-2 rounded-full shadow-xs">
          Trusted by Global Enterprises & Government Entities
        </span>
      </div>

      {/* شريط السكرول المتواصل بحجم أكبر وأوضح */}
      <div className="flex overflow-hidden select-none w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          className="flex items-center gap-8 whitespace-nowrap shrink-0"
        >
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center w-[220px] h-[110px] px-7 rounded-2xl bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-300 group shrink-0 shadow-xs hover:shadow-md"
            >
              {/* حاوية اللوجو - تكبير المساحة لـ h-[65px] وبروز ممتاز */}
              <div className="relative w-full h-[65px] flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name} 
                  fill
                  sizes="200px"
                  style={{ transform: `scale(${client.scale || 1})` }}   
                  className={`object-contain transition-all duration-300 group-hover:scale-105 ${client.filterType === "invert"
                      ? "invert opacity-80 group-hover:opacity-100"
                      : client.name === "Emaar" || client.name === "إعمار" || client.logo.includes("-w")
                        ? "brightness-0 opacity-80 group-hover:opacity-100"
                        : "opacity-90 group-hover:opacity-100"
                    }`}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Tesla", logo: "/images/Tesla-Logo (1).svg", filterType: "normal" },
  { name: "Dubai Media", logo: "/images/ADM-logo.svg", filterType: "invert" },
  { name: "ADNOC", logo: "/images/adnoc-logo-updated (1).svg", filterType: "normal" },
  { name: "Emaar", logo: "/images/emaar-logo-w (1).svg", filterType: "normal" },
  { name: "Etihad Rail", logo: "/images/Etihad-Rail-UAE (1).svg", filterType: "invert" },
  { name: "Fairmont", logo: "/images/Fairmont-Hotel-Logo-Vector.svg- (1).svg", filterType: "invert" },
  { name: "Sharjah Gov", logo: "/images/Government-of-Sharjah-Agriculture-Livestock-Department.svg", filterType: "invert" },
  { name: "Grandiose", logo: "/images/Grandiose-Logo_Sept2_637446820117728624 (1).svg", filterType: "normal" },
  { name: "HeaderLogo", logo: "/images/HeaderLogo (1).svg", filterType: "invert" },
  { name: "Unicef", logo: "/images/logo (1).svg", filterType: "invert" },
  { name: "Mubadala", logo: "/images/mubadala-investment-company-vector-logo (1).svg", filterType: "mubadala" },
];

export default function ClientsTicker() {
  return (
    <section className="relative py-20 bg-white border-t border-slate-100 overflow-hidden">

      {/* توهج خلفي محيطي خفيف */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[250px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-full px-6 mb-12 text-center">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#b87d0e] bg-[#df9d17]/10 border border-[#df9d17]/30 px-5 py-2 rounded-full shadow-xs">
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
              className="flex items-center justify-center w-[220px] h-[110px] px-7 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-[#df9d17]/50 hover:bg-white transition-all duration-300 group shrink-0 shadow-xs hover:shadow-md"
            >
              {/* حاوية اللوجو - تكبير المساحة لـ h-[65px] وبروز ممتاز */}
              <div className="relative w-full h-[65px] flex items-center justify-center">
                <Image
  src={client.logo}
  alt={client.name}
  fill
  sizes="200px"
  className={`object-contain transition-all duration-300 group-hover:scale-105 ${
    client.name === "Emaar" || client.name === "إعمار" || client.logo.includes("-w")
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
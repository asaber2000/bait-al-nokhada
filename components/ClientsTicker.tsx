"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Tesla", logo: "/images/Tesla-Logo (1).svg" },
  { name: "Dubai Police", logo: "/images/ADM-logo.svg" },
  { name: "Emaar", logo: "/images/adnoc-logo-updated (1).svg" },
  { name: "Abu Dhabi Airports", logo: "/images/emaar-logo-w (1).svg" },
  { name: "Hilton", logo: "/images/Etihad-Rail-UAE (1).svg" },
  { name: "Etihad Rail", logo: "/images/Fairmont-Hotel-Logo-Vector.svg- (1).svg"},
  { name: "DP World", logo: "/images/Government-of-Sharjah-Agriculture-Livestock-Department.svg" },
  { name: "Expo City Dubai", logo: "/images/Grandiose-Logo_Sept2_637446820117728624 (1).svg" },
  { name: "Mubadala", logo: "/images/HeaderLogo (1).svg" },
  { name: "Unicef", logo: "/images/logo (1).svg" },
  { name: "Fairmont", logo: "/images/mubadala-investment-company-vector-logo (1).svg"},
];

export default function ClientsTicker() {
  return (
    <section className="relative py-24 bg-[#070B14] border-t border-white/10 overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-[#D4AF37]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-full px-12 sm:px-16 lg:px-32 mb-14 text-center">
        <span className="text-xs uppercase tracking-[0.35em] font-bold text-slate-400">
          Trusted by Global Enterprises & Government Entities
        </span>
      </div>

      {/* Infinite Horizontal Marquee for Large Logos */}
      <div className="flex overflow-hidden select-none w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex items-center gap-16 whitespace-nowrap shrink-0"
        >
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center w-[220px] h-[190px] px-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/40 hover:bg-white/[0.05] transition-all duration-300 group shrink-0 backdrop-blur-sm shadow-xl"
            >
              {/* حاوية اللوجو بحجم كبير وواضح */}
              <div className="relative w-35 h-50 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="176px"
                  className="object-contain filter brightness-95 contrast-125 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
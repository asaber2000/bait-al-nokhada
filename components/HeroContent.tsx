"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Building2 } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-20 w-full h-full flex flex-col justify-between items-center px-6 sm:px-12 lg:px-20 pt-36 pb-12 pointer-events-none select-none">
      {/* 1. Top Bar: Luxury Pill with Ambient Shimmer */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <span className="flex h-2 w-2 rounded-full bg-[#df9d17] animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/80">
            EST. 1997 • ARCHITECTURAL MEMBRANES & EVENT VENUES
          </span>
        </div>
      </motion.div>

      {/* 2. Center: Editorial Luxury Title */}
      <div className="max-w-4xl mx-auto text-center space-y-6 my-auto pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <span className="block text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-[#df9d17]">
            Pioneering Spatial Engineering
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white uppercase font-heading leading-[1.08] drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            Engineering Space, <br />
            <span className="font-serif italic font-normal tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#df9d17] to-amber-300">
              Crafting Prestige.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="max-w-xl mx-auto text-xs sm:text-sm text-white/75 font-light tracking-wide leading-relaxed drop-shadow-md"
        >
          Turnkey monumental structures, bespoke royal pavilions, and high-performance architectural tensile membranes across the UAE & GCC.
        </motion.p>

        {/* 3. Floating Glass CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="inline-flex items-center gap-3 p-1.5 rounded-full bg-black/50 backdrop-blur-2xl border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#df9d17] hover:bg-white text-[#0B1220] font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-md"
          >
            <span>Request Proposal</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full hover:bg-white/10 text-white/90 hover:text-white font-medium text-xs uppercase tracking-widest transition-all duration-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#df9d17]" />
            <span>Iconic Works</span>
          </Link>
        </motion.div>
      </div>

      {/* 4. Bottom Metrics Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.45 }}
        className="w-full max-w-5xl flex items-center justify-between text-[11px] font-mono tracking-widest text-white/50 border-t border-white/10 pt-4 pointer-events-auto"
      >
        <span className="hidden sm:inline-block">ABU DHABI • DUBAI • RIYADH</span>

        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Building2 className="w-3.5 h-3.5 text-[#df9d17]" />
          <span>IN-HOUSE MANUFACTURING & ENGINEERING</span>
        </div>

        <span className="hidden sm:inline-block">30+ YEARS OF LEADERSHIP</span>
      </motion.div>
    </div>
  );
}
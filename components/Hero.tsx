"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
      {/* 1. Background Video Layer (Crystal Clear & Full Screen) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="w-full h-full object-cover opacity-90 filter brightness-110 will-change-transform pointer-events-none"
        >
          <source src="/Dubai Harbor Short Video.mp4" type="video/mp4" />
        </video>

        {/* تظليل خفيف جداً وشفاف لضمان وضوح النصوص وبقاء الفيديو ساطعاً */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* 2. Hero Content (Optimized, Balanced & Clean Layout) */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-6 px-6 pt-12">
        
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.2] drop-shadow-2xl"
        >
          Architectural Mastery <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
            In Luxury Structures
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-xl mx-auto font-light drop-shadow-lg"
        >
          Engineering iconic royal marquees and smart tensile structures across the Middle East.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#070B14] bg-gradient-to-r from-[#D4AF37] to-[#C5A880] hover:brightness-110 shadow-xl shadow-[#D4AF37]/25 transition-all duration-300 hover:scale-105"
          >
            <span>Explore Showcase</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-black/40 border border-white/20 hover:bg-white/10 hover:border-white/40 backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <Play className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            <span>Watch Showreel</span>
          </a>
        </motion.div>
      </div>

    </section>
  );
}
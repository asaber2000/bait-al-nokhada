"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function ArabicHero() {
  return (
    <section 
      dir="rtl" 
      className="relative w-full min-h-[100dvh] flex items-center justify-center pt-28 pb-12 px-6 overflow-hidden bg-[#070B14] text-center transform-gpu"
    >
      
      {/* خلفية الفيديو - تم تثبيتها بـ fixed لمنع أي اهتزاز أثناء السكرول على الموبايل */}
      <div className="fixed inset-0 w-full h-[100dvh] z-0 overflow-hidden pointer-events-none transform-gpu">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-75 filter brightness-105 transform-gpu"
        >
          <source src="/Dubai Harbor Short Video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-linear-to-b from-[#070B14]/80 via-transparent to-[#070B14]/90" />
      </div>


    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center pt-28 pb-12 px-6 overflow-hidden bg-[#070B14] text-center transform-gpu">

      {/* 1. Background Video Layer (Crystal Clear & Full Screen without mobile bar jumps) */}
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

      </div>

    </section>
  );
} 
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroContentAr from "@/components-ar/components/HeroContentAr";

export default function ArabicHero() {
  const containerRef = useRef<HTMLElement>(null);

  // تتبع سكرول الهيرو الطبيعي أثناء خروجه من الشاشة
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // تلاشي الشفافية بنعومة وصعود هادئ
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -30]);

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-28 sm:pt-32 pb-8 sm:pb-12 bg-[#FDFCF7] flex flex-col items-center justify-center overflow-hidden"
      dir="rtl"
    >
      {/* النقاط الهندسية الخلفية المتطابقة */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* حاوية الموقع الأساسية - تطابق كامل مع هوامش وحواف سكشنات الموقع */}
      <div className="site-container max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* الحاوية المعمارية العائمة بنسبة أبعاد مريحة للعين */}
        <div className="relative w-full h-[620px] sm:h-[680px] lg:h-[720px] max-h-[82dvh] rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] overflow-hidden bg-[#070B14] border border-slate-900/[0.08] shadow-[0_15px_45px_-15px_rgba(0,0,0,0.12)] transform-gpu flex items-center justify-center">
          
          {/* 1. طبقة الفيديو والخلفية */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              poster="https://d3g07f5oxrfvni.cloudfront.net/media-videos/bait-al-nokhadaa-poster.webp"
              className="w-full h-full object-cover opacity-90 filter brightness-105 pointer-events-none"
            >
              <source
                src="https://d3g07f5oxrfvni.cloudfront.net/media-videos/Webpage-Home-new-video.webm"
                type="video/webm"
              />
            </video>

            {/* تظليل سينمائي ناعم لوضوح النصوص العربية */}
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>

          {/* 2. طبقة المحتوى العربي مع التلاشي الناعم أثناء السكرول */}
          <motion.div
            style={{ opacity, y }}
            className="relative z-20 w-full h-full flex items-center justify-center pointer-events-none will-change-transform px-4 sm:px-8"
          >
            <HeroContentAr />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
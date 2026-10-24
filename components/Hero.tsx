"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroContent from "@/components/HeroContent";

export default function Hero() {
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
  className="relative w-full h-[100dvh] min-h-[100dvh] bg-[#FDFCF7] p-3 sm:p-5 lg:p-6 flex items-center justify-center overflow-hidden"
>
  {/* النقاط الهندسية الخلفية */}
  <div
    className="absolute inset-0 opacity-[0.035] pointer-events-none"
    style={{
      backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }}
  />

  {/* الحاوية المعمارية العائمة بهوامش متطابقة من كل الجهات */}
  <div className="relative w-full h-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden bg-[#070B14] border border-slate-900/[0.08] shadow-[0_12px_40px_-15px_rgba(0,0,0,0.12)] transform-gpu flex items-center justify-center">
    
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

      {/* تظليل سينمائي خفيف لضمان وضوح النصوص */}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>

    {/* 2. طبقة المحتوى مع التلاشي الناعم أثناء السكرول */}
    <motion.div
      style={{ opacity, y }}
      className="relative z-20 w-full h-full flex items-center justify-center pointer-events-none will-change-transform"
    >
      <HeroContent />
    </motion.div>
  </div>
</section>
  );
}
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

  // تلاشي الشفافية بنعومة من 1 إلى 0 في أول 60% من سكرول الهيرو
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // صعود خفيف جداً وهادئ للأعلى أثناء النزول
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -40]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100dvh] min-h-[100dvh] overflow-hidden bg-[#070B14] flex items-center justify-center transform-gpu"
    >
      {/* 1. Background Video Layer */}
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
        <div className="absolute inset-0 bg-black/35 z-10" />
      </div>

      {/* 2. Hero Content Layer مع تلاشي وصعود هادئ فقط */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-20 w-full h-full flex items-center justify-center pointer-events-none will-change-transform"
      >
        <HeroContent />
      </motion.div>
    </section>
  );
}
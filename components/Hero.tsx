"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // مراقبة سكرول الهيرو بدقة
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // الفيديو يتحرك للأسفل ببطء أثناء النزول بنسبة 35% لإعطاء عمق الـ Parallax
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  // المحتوى يصعد للأعلى بسرعة أكبر مع تلاشي الشفافية بنعومة
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex items-center justify-center pt-28 pb-12 px-6 overflow-hidden bg-[#070B14] text-center transform-gpu"
    >

      {/* 1. Background Video Layer (Crystal Clear & Full Screen without mobile bar jumps) */}
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-x-0 -top-[10%] w-full h-[125%] z-0 overflow-hidden pointer-events-none will-change-transform"
      >
        <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            disablePictureInPicture
            poster="https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/hero-poster.webp"
            className="w-full h-full object-cover opacity-90 filter brightness-110 pointer-events-none"
          >
            <source
              src="https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/videos/Hero-Video-For-Bait-Al-Nokhada-Tents.mp4"
              type="video/mp4"
            />
          </video>

        {/* تظليل خفيف جداً وشفاف لضمان وضوح النصوص وبقاء الفيديو ساطعاً */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </motion.div>

      {/* 2. Hero Content (Floating & Fading on Scroll) */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-6 px-6 pt-12 will-change-transform"
      >
        {/* أضف نصوص وأزرار الهيرو هنا */}
      </motion.div>

    </section>
  );
}
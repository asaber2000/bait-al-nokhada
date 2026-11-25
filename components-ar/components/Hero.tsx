"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeroContentAr from "@/components-ar/components/HeroContentAr";

export default function Hero({ sanityData }: { sanityData?: any }) {
  const videoUrl =
    sanityData?.videoUrl ||
    "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Hero-Video-tents.webm";
  const posterUrl =
    sanityData?.posterUrl ||
    "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Poster-hero-video-tents.webp";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startVideo = () => {
      if (!video.src) {
        video.src = videoUrl;
        video.load();
        video.play().catch(() => { });
      }
    };

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (isDesktop) {
      startVideo();
      return;
    }

    // على الموبايل: يرسم البوستر المحسّن أولاً ثم يبدأ الفيديو بعد 1.5 ثانية أو عند أول لمسة/سكرول
    const timer = setTimeout(startVideo, 1500);
    window.addEventListener("touchstart", startVideo, { once: true, passive: true });
    window.addEventListener("scroll", startVideo, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("touchstart", startVideo);
      window.removeEventListener("scroll", startVideo);
    };
  }, [videoUrl]);

  return (
    <section
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

        <div className="relative w-full h-[620px] sm:h-[680px] lg:h-[720px] max-h-[82dvh] rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] overflow-hidden bg-[#070B14] border border-slate-900/[0.08] shadow-[0_15px_45px_-15px_rgba(0,0,0,0.12)] transform-gpu flex items-center justify-center">

          {/* 1. طبقة الفيديو */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            {/* صورة البوستر المحسّنة بـ Next.js Image كعنصر LCP فوري */}
            <Image
              src={posterUrl}
              alt="Bait Al Nokhada Luxury Event & Exhibition Tents"
              fill
              priority
              quality={75}
              sizes="(max-width: 768px) 100vw, 1280px"
              className={`object-cover brightness-105 transition-opacity duration-300 z-0 ${videoPlaying ? "opacity-0" : "opacity-100"
                }`}
            />
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              disablePictureInPicture
              onPlaying={() => setVideoPlaying(true)}
              className="relative z-10 w-full h-full object-cover brightness-105 pointer-events-none"
            />

          {/* تظليل سينمائي ناعم لوضوح النصوص العربية */}
          <div className="absolute inset-0 bg-black/40 z-20" />

          {/* طبقة المحتوى العربي مع التلاشي الناعم أثناء السكرول */}
          <div className="relative z-30 w-full h-full flex items-center justify-center pointer-events-none px-4 sm:px-8">
            <HeroContentAr data={sanityData} />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
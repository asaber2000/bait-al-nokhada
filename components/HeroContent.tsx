"use client";

import Link from "next/link";
import { ArrowDown, Sparkles, ChevronRight } from "lucide-react";

interface HeroContentProps {
  lang?: "ar" | "en";
}

export default function HeroContent({ lang = "ar" }: HeroContentProps) {
  const isAr = lang === "ar";

  return (
    <div 
      dir={isAr ? "rtl" : "ltr"}
      className="absolute inset-0 z-20 flex flex-col justify-between items-center px-6 pt-36 pb-12 pointer-events-none select-none"
    >
      {/* 1. بادج خفيفة جداً في الأعلى (Luxury Tagline) */}
      <div className="pointer-events-auto animate-fade-in-down transition-all duration-700">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 shadow-2xl">
          <span className="w-2 h-2 rounded-full bg-[#df9d17] animate-ping" />
          <span className="text-[11px] sm:text-xs font-mono font-medium tracking-widest uppercase text-slate-200">
            {isAr ? "منذ عام 1997 • رواد صناعة وتأجير الهياكل الإنشائية" : "EST. 1997 • LEADERS IN TENSILE & EVENT STRUCTURES"}
          </span>
        </div>
      </div>

      {/* 2. العنوان الرئيسي الفخم بأسلوب مقتضب (Minimal Typography) */}
      <div className="max-w-4xl text-center space-y-6 my-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.15] font-heading drop-shadow-2xl">
          {isAr ? (
            <>
              نبتكر الفخامة، <br />
              <span className="bg-gradient-to-r from-amber-200 via-[#df9d17] to-yellow-500 bg-clip-text text-transparent">
                لنشيّد بها فعالياتكم
              </span>
            </>
          ) : (
            <>
              ENGINEERING SPACE, <br />
              <span className="bg-gradient-to-r from-amber-200 via-[#df9d17] to-yellow-500 bg-clip-text text-transparent">
                CRAFTING PRESTIGE
              </span>
            </>
          )}
        </h1>

        <p className="max-w-xl mx-auto text-xs sm:text-base text-slate-300/90 font-normal leading-relaxed drop-shadow-md">
          {isAr
            ? "تصميم وهندسة خيام المعارض والقصور والمشاريع الكبرى في الإمارات والخليج بأعلى المعايير العالمية."
            : "Architectural tensile fabrics, royal event structures, and custom rapid halls across the UAE & GCC."}
        </p>

        {/* أزرار الـ CTA الخفيفة والأنيقة */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 pointer-events-auto">
          <Link
            href={isAr ? "/ar/contact" : "/contact"}
            className="group relative px-7 py-3.5 rounded-2xl bg-[#df9d17] hover:bg-white text-[#0B1220] font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-900/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>{isAr ? "طلب دراسة مشروع" : "Request Proposal"}</span>
            <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
          </Link>

          <Link
            href={isAr ? "/ar/projects" : "/projects"}
            className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium text-xs uppercase tracking-wider hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>{isAr ? "معرض الإنجازات" : "Explore Portfolio"}</span>
          </Link>
        </div>
      </div>

      {/* 3. مؤشر التمرير السفلي التفاعلي المقتبس من تصاميم الطائرات والمواقع الفاخرة */}
      <div className="pointer-events-auto flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 cursor-pointer">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em]">
          {isAr ? "اكتشف المزيد" : "SCROLL TO EXPLORE"}
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#df9d17] animate-bounce" />
        </div>
      </div>
    </div>
  );
}
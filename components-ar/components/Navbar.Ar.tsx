"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe, Menu, X, PhoneCall, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { productsDatabase } from "@/app/data/products.Ar";
import { solutionsDatabase } from "@/app/data/solutions.Ar";

export default function ArabicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const pathname = usePathname() || "/";
  const isArabic = pathname.startsWith("/ar");

  const targetLanguageUrl = isArabic
    ? pathname.replace(/^\/ar/, "") || "/"
    : `/ar${pathname === "/" ? "" : pathname}`;

  return (
    <>
      <header dir="rtl" className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 h-24 flex items-center justify-between pointer-events-none">
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="pointer-events-auto flex items-center gap-2.5 text-white group cursor-pointer p-2 rounded-xl hover:bg-white/10 transition backdrop-blur-sm"
          aria-label="فتح القائمة"
        >
          <Menu className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline text-xs font-bold tracking-widest uppercase text-slate-200">القائمة</span>
        </button>

        <Link href="/ar" className="pointer-events-auto flex flex-col text-center">
          <span className="text-base sm:text-xl font-black tracking-wider text-white font-heading drop-shadow-md">
            بيت النوخذة
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.2em] text-[#D4AF37] uppercase -mt-0.5 font-semibold drop-shadow">
            للخيام والهياكل النسيجية
          </span>
        </Link>

        <div className="pointer-events-auto flex items-center gap-3">
          <Link
            href="/ar/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="hidden sm:inline">طلب عرض سعر</span>
          </Link>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            dir="rtl"
            data-lenis-prevent="true"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-[#070B14]/98 backdrop-blur-3xl px-4 sm:px-16 py-4 h-screen overflow-hidden flex flex-col justify-between text-right"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between max-w-7xl mx-auto w-full shrink-0">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">دليل تصفح الموقع</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="pointer-events-auto p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer flex items-center gap-2 group"
                aria-label="إغلاق القائمة"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Middle Content Links (Accordion with compact scroll if needed) */}
            <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-auto py-2 items-start">
              
              {/* Main Links Column */}
              <div className="space-y-2 text-lg sm:text-3xl font-bold text-white font-heading">
                <Link href="/ar" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors py-0.5">
                  الرئيسية
                </Link>
                <Link href="/ar/about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors py-0.5">
                  من نحن
                </Link>
                <Link href="/ar/projects" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors py-0.5">
                  المشاريع
                </Link>
                <Link href="/ar/news" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors py-0.5">
                  الأخبار والمقالات
                </Link>
                <Link href="/ar/contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors py-0.5">
                  تواصل معنا
                </Link>
              </div>

              {/* Accordion Databases Column with internal scroll */}
              <div className="space-y-2.5 text-sm text-slate-300 border-r border-white/10 pr-3 sm:pr-8 pl-1 max-h-[50vh] overflow-y-auto custom-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style jsx>{`
                  .custom-scroll::-webkit-scrollbar {
                    display: none !important;
                  }
                `}</style>
                
                {/* Products Section */}
                {/* Products Section */}
<div className="space-y-1 bg-white/5 p-2.5 sm:p-3 rounded-xl border border-white/10">
  <button 
    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
    className="flex items-center justify-between w-full text-sm sm:text-base font-bold text-[#D4AF37] cursor-pointer"
  >
    {/* عكسنا: النص الأول وبعدين السهم */}
    <span>المنتجات ({productsDatabase.length})</span>
    <ChevronDown className={`w-4 h-4 transition-transform duration-305 ${mobileProductsOpen ? "rotate-180" : ""}`} />
  </button>
  
  {mobileProductsOpen && (
    <div className="grid grid-cols-1 gap-1 pt-2 border-t border-white/10 mt-1">
      {productsDatabase.map((item) => (
        <Link
          key={item.slug}
          href={`/ar/products/${item.slug}`}
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center justify-between py-1 px-2 text-[11px] text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition group"
        >
          {/* عكسنا: اسم المنتج الأول وبعدين السهم */}
          <span>{item.ar ? item.ar.name : item.name}</span>
          <ArrowUpRight className="w-3 h-3 text-[#D4AF37] group-hover:-translate-x-0.5 transition-transform" />
        </Link>
      ))}
    </div>
  )}
</div>

{/* Solutions Section */}
<div className="space-y-1 bg-white/5 p-2.5 sm:p-3 rounded-xl border border-white/10">
  <button 
    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
    className="flex items-center justify-between w-full text-sm sm:text-base font-bold text-[#D4AF37] cursor-pointer"
  >
    {/* عكسنا: النص الأول وبعدين السهم */}
    <span>الحلول والخدمات ({solutionsDatabase.length})</span>
    <ChevronDown className={`w-4 h-4 transition-transform duration-305 ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
  </button>
  
  {mobileSolutionsOpen && (
    <div className="grid grid-cols-1 gap-1 pt-2 border-t border-white/10 mt-1">
      {solutionsDatabase.map((item) => (
        <Link
          key={item.slug}
          href={`/ar/solutions/${item.slug}`}
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center justify-between py-1 px-2 text-[11px] text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition group"
        >
          {/* عكسنا: اسم الحل الأول وبعدين السهم */}
          <span>{item.name}</span>
          <ArrowUpRight className="w-3 h-3 text-[#D4AF37] group-hover:-translate-x-0.5 transition-transform" />
        </Link>
      ))}
    </div>
  )}
</div>

              </div>
            </div>

            {/* Bottom Footer - Perfectly locked at the bottom matching original design */}
            <div className="max-w-7xl mx-auto w-full pt-3 pb-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 shrink-0">
              <Link
                href={targetLanguageUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1 font-bold text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition shadow-sm"
              >
                <Globe className="w-3 h-3 text-[#D4AF37]" />
                <span>ENGLISH (EN)</span>
              </Link>
              <p className="text-[10px] sm:text-xs">© 2026 بيت النوخذة. جميع الحقوق محفوظة.</p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
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
          <div 
            data-lenis-prevent="true"
            className="fixed inset-0 z-[99999] h-[100dvh] overflow-y-auto bg-[#070B14]/98 backdrop-blur-3xl no-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <style jsx global>{`
              ::-webkit-scrollbar {
                display: none !important;
              }
            `}</style>

            <motion.div 
              dir="rtl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-full px-6 sm:px-16 py-8 flex flex-col justify-between text-right"
            >
              <div className="max-w-7xl mx-auto w-full flex flex-col min-h-full justify-between">
                
                {/* Top Bar */}
                <div className="flex items-center justify-between w-full shrink-0 mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold">دليل تصفح الموقع</span>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer flex items-center gap-2 group"
                    aria-label="إغلاق القائمة"
                  >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>

                {/* Content Body */}
                <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8 items-start">
                  
                  {/* Main Links */}
                  <div className="space-y-4 text-2xl sm:text-4xl font-extrabold text-white font-heading">
                    <Link href="/ar" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors">
                      الرئيسية
                    </Link>
                    <Link href="/ar/about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors">
                      من نحن
                    </Link>
                    <Link href="/ar/projects" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors">
                      المشاريع
                    </Link>
                    <Link href="/ar/news" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors">
                      الأخبار والمقالات
                    </Link>
                    <Link href="/ar/contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors">
                      تواصل معنا
                    </Link>
                  </div>

                  {/* Databases Column */}
                  <div className="space-y-6 text-sm text-slate-300 border-r border-white/10 pr-6 sm:pr-10 pl-2 pb-16">
                    
                    {/* Products Section */}
                    <div className="space-y-2">
                      <button 
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="flex items-center justify-between w-full text-lg font-bold text-[#D4AF37] py-2 border-b border-white/10 cursor-pointer"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                        <span>المنتجات ({productsDatabase.length})</span>
                      </button>
                      
                      {mobileProductsOpen && (
                        <div className="grid grid-cols-1 gap-2 pt-2 pb-2">
                          {productsDatabase.map((item) => (
                            <Link
                              key={item.slug}
                              href={`/ar/products/${item.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between py-1.5 px-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition group"
                            >
                              <ArrowUpRight className="w-3 h-3 text-[#D4AF37] group-hover:-translate-x-0.5 transition-transform" />
                              <span>{item.ar ? item.ar.name : item.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Solutions Section */}
                    <div className="space-y-2">
                      <button 
                        onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                        className="flex items-center justify-between w-full text-lg font-bold text-[#D4AF37] py-2 border-b border-white/10 cursor-pointer"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                        <span>الحلول والخدمات ({solutionsDatabase.length})</span>
                      </button>
                      
                      {mobileSolutionsOpen && (
                        <div className="grid grid-cols-1 gap-2 pt-2 pb-2">
                          {solutionsDatabase.map((item) => (
                            <Link
                              key={item.slug}
                              href={`/ar/solutions/${item.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between py-1.5 px-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition group"
                            >
                              <ArrowUpRight className="w-3 h-3 text-[#D4AF37] group-hover:-translate-x-0.5 transition-transform" />
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Bottom Footer */}
                <div className="w-full pt-6 pb-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 shrink-0 mt-8">
                  <p>© 2026 بيت النوخذة. جميع الحقوق محفوظة.</p>
                  
                  <Link
                    href={targetLanguageUrl}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-1.5 text-xs font-bold text-white px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition shadow-sm"
                  >
                    <Globe className="w-4 h-4 text-[#D4AF37]" />
                    <span>ENGLISH (EN)</span>
                  </Link>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
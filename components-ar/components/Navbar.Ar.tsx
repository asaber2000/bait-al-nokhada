"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe, X, ArrowUpRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { productsDatabase } from "@/app/data/products.Ar";
import { solutionsDatabase } from "@/app/data/solutions.Ar";

export default function ArabicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname() || "/";
  const isArabic = pathname.startsWith("/ar");

  const targetLanguageUrl = isArabic
    ? pathname.replace(/^\/ar/, "") || "/"
    : `/ar${pathname === "/" ? "" : pathname}`;

  const navLinks = [
    { title: "الرئيسية", href: "/ar" },
    { title: "من نحن", href: "/ar/about" },
    { title: "المشاريع", href: "/ar/projects" },
    { title: "الأخبار والمقالات", href: "/ar/news" },
    { title: "تواصل معنا", href: "/ar/contact" },
  ];

  return (
    <>
      <header
        dir="rtl"
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-center transition-all duration-300 transform-gpu px-6 sm:px-10 ${
          isScrolled
            ? "bg-[#070B14]/90 backdrop-blur-md shadow-xl py-3 border-b border-white/5"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* اللوجو العربي بحجم ووزن مطابق تماماً للنسخة الإنجليزية */}
          <Link href="/ar" className="flex flex-col text-right group">
            <span
              className={`font-black text-white font-heading drop-shadow-md group-hover:text-[#D4AF37] transition-all duration-300 leading-none ${
                isScrolled ? "text-base sm:text-lg" : "text-xl sm:text-3xl md:text-4xl"
              }`}
            >
            بيت
            </span>
            <span
              className={`text-[#D4AF37] font-bold drop-shadow transition-all duration-300 pt-1 leading-none ${
                isScrolled ? "text-[8px] sm:text-[9px]" : "text-xs sm:text-sm"
              }`}
            >
              النوخذة
            </span>
          </Link>

          {/* الأزرار العلوية بنفس القياس والأبعاد والارتفاع */}
          <div className="flex items-center gap-3">
            <Link
              href={targetLanguageUrl}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white/[0.05] hover:bg-[#D4AF37] text-white hover:text-[#070B14] border border-white/10 hover:border-[#D4AF37] transition-all duration-300 shadow-md group"
            >
              <Globe className="w-4 h-4 text-[#D4AF37] group-hover:text-[#070B14] transition-colors" />
              <span className="text-xs font-black tracking-wider uppercase">EN</span>
            </Link>

            {/* زر القائمة العربي بنفس قياس وارتفاع زر MENU الإنجليزي */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`flex items-center gap-3 text-white group cursor-pointer rounded-2xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl ${
                isScrolled ? "py-2 px-5 h-9 sm:h-10" : "py-2.5 px-6 h-11 sm:h-12"
              }`}
              aria-label="فتح القائمة"
            >
              <div className="flex flex-col gap-1.5 items-start">
                <span className="w-5 h-0.5 bg-[#D4AF37] rounded-full group-hover:w-3 transition-all duration-300" />
                <span className="w-3 h-0.5 bg-[#D4AF37] rounded-full group-hover:w-5 transition-all duration-300" />
              </div>
              <span className="font-extrabold text-xs sm:text-base text-white group-hover:text-[#D4AF37] transition-colors">
                القائمة
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* المنيو السريع والفخم للنسخة العربية */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            dir="rtl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-[99999] bg-[#070B14]/98 backdrop-blur-xl px-6 sm:px-16 py-6 h-screen flex flex-col justify-between text-right will-change-transform overflow-hidden font-sans"
          >
            {/* إضاءة خلفية ذهبية ناعمة */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

            {/* الهيدر العلوي للمنيو */}
            <div className="flex items-center justify-between max-w-7xl mx-auto w-full shrink-0 relative z-10 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
                  دليل تصفح الموقع
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#070B14] border border-white/10 transition-all cursor-pointer group"
                aria-label="إغلاق القائمة"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* محتوى المنيو */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-4 items-start relative z-10">
              
              {/* العمود الأول: الروابط الرئيسية */}
              <div className="lg:col-span-4 space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between py-2 text-2xl sm:text-4xl font-extrabold text-white hover:text-[#D4AF37] transition-all"
                    >
                      <span className="group-hover:-translate-x-2 transition-transform duration-200">{link.title}</span>
                      <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 text-[#D4AF37] transition-all translate-x-2 group-hover:translate-x-0 rotate-[-90deg]" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* العمود الثاني: السكرول المستقل المحمي */}
              <div
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                className="lg:col-span-4 space-y-3 text-sm text-slate-300 border-r border-white/10 pr-4 sm:pr-6 max-h-[55vh] overflow-y-scroll overscroll-contain select-none"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none !important;
                    width: 0 !important;
                    height: 0 !important;
                  }
                `}</style>

                {/* المنتجات */}
                <div className="space-y-2 bg-white/[0.04] p-3.5 rounded-2xl border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between w-full">
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="flex items-center gap-2 text-base font-extrabold text-[#D4AF37] cursor-pointer"
                    >
                      <span>المنتجات ({productsDatabase.length})</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <Link
                      href="/ar/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-slate-400 hover:text-[#D4AF37] underline flex items-center gap-1 font-semibold"
                    >
                      عرض الكل <ArrowUpRight className="w-3.5 h-3.5 rotate-[-90deg]" />
                    </Link>
                  </div>
                  {mobileProductsOpen && (
                    <div className="grid grid-cols-1 gap-1.5 pt-3 border-t border-white/10 mt-2">
                      {productsDatabase.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/ar/products/${item.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-1.5 px-3 text-xs text-slate-200 hover:text-[#D4AF37] bg-white/[0.02] hover:bg-[#D4AF37]/10 border border-white/5 rounded-xl transition-all"
                        >
                          <span>{item.ar ? item.ar.name : item.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] rotate-[-90deg]" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* الحلول والخدمات */}
                <div className="space-y-2 bg-white/[0.04] p-3.5 rounded-2xl border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between w-full">
                    <button
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className="flex items-center gap-2 text-base font-extrabold text-[#D4AF37] cursor-pointer"
                    >
                      <span>الحلول والخدمات ({solutionsDatabase.length})</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <Link
                      href="/ar/solutions"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-slate-400 hover:text-[#D4AF37] underline flex items-center gap-1 font-semibold"
                    >
                      عرض الكل <ArrowUpRight className="w-3.5 h-3.5 rotate-[-90deg]" />
                    </Link>
                  </div>
                  {mobileSolutionsOpen && (
                    <div className="grid grid-cols-1 gap-1.5 pt-3 border-t border-white/10 mt-2">
                      {solutionsDatabase.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/ar/solutions/${item.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-1.5 px-3 text-xs text-slate-200 hover:text-[#D4AF37] bg-white/[0.02] hover:bg-[#D4AF37]/10 border border-white/5 rounded-xl transition-all"
                        >
                          <span>{item.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] rotate-[-90deg]" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* العمود الثالث: معلومات التواصل */}
              <div className="lg:col-span-4 space-y-5 text-sm text-slate-300 border-r border-white/10 pr-6 sm:pr-8 bg-white/[0.03] p-6 sm:p-7 rounded-3xl border border-white/10 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37] mb-3">
                  معلومات التواصل والفروع
                </h4>

                <div className="space-y-3.5">
                  <a href="tel:+97143444091" className="flex items-center gap-3.5 hover:text-[#D4AF37] transition group">
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#D4AF37]/20 transition">
                      <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    </div>
                    <span className="font-bold text-base text-white">+971 4 344 4091</span>
                  </a>

                  <a
                    href="mailto:info@baitalnokhada.com"
                    className="flex items-center gap-3.5 hover:text-[#D4AF37] transition group truncate"
                  >
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#D4AF37]/20 transition">
                      <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    </div>
                    <span className="font-medium text-xs sm:text-sm truncate text-slate-200">
                      info@baitalnokhada.com
                    </span>
                  </a>

                  <a
                    href="mailto:info.Ksa@baitalnokhada.com"
                    className="flex items-center gap-3.5 hover:text-[#D4AF37] transition group truncate"
                  >
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#D4AF37]/20 transition">
                      <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    </div>
                    <span className="font-medium text-xs sm:text-sm truncate text-slate-200">
                      info.Ksa@baitalnokhada.com
                    </span>
                  </a>

                  <div className="flex items-start gap-3.5 pt-1">
                    <div className="p-2 rounded-xl bg-white/5 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    </div>
                    <span className="text-slate-300 leading-relaxed text-xs font-medium">
                      رقم الأرض TP 010102 - تكنوبارك - ميناء جبل علي - حديقة الصناعات الوطنية - دبي
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 mb-3 font-bold">
                    تابعنا على منصات التواصل
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-white/5 hover:bg-[#D4AF37] hover:text-[#070B14] text-white transition shadow-md"
                      aria-label="Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-white/5 hover:bg-[#D4AF37] hover:text-[#070B14] text-white transition shadow-md"
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-white/5 hover:bg-[#D4AF37] hover:text-[#070B14] text-white transition shadow-md"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* الشريط السفلي للتبديل للإنجليزية */}
            <div className="max-w-7xl mx-auto w-full pt-3 pb-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 shrink-0 relative z-10">
              <p className="text-[10px] sm:text-xs">© 2026 بيت النوخذة. جميع الحقوق محفوظة.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
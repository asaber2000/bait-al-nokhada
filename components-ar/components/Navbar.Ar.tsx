"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Globe, 
  X, 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles,
  MessageCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { productsDatabase } from "@/app/data/products.Ar";
import { solutionsDatabase } from "@/app/data/solutions.Ar";

export default function ArabicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
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
          {/* اللوجو العربي */}
          {/* اللوجو العربي بجانب بعض */}
          <Link href="/ar" className="flex items-center gap-2 group">
            <span
              className={`font-black text-white font-heading drop-shadow-md group-hover:text-[#D4AF37] transition-all duration-300 leading-none ${
                isScrolled ? "text-base sm:text-lg" : "text-xl sm:text-2xl md:text-3xl"
              }`}
            >
              بيت
            </span>
            <span
              className={`text-[#D4AF37] font-black drop-shadow transition-all duration-300 leading-none ${
                isScrolled ? "text-base sm:text-lg" : "text-xl sm:text-2xl md:text-3xl"
              }`}
            >
              النوخذة
            </span>
          </Link>

          {/* الأزرار العلوية */}
          <div className="flex items-center gap-3">
            <Link
              href={targetLanguageUrl}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white/[0.05] hover:bg-[#D4AF37] text-white hover:text-[#070B14] border border-white/10 hover:border-[#D4AF37] transition-all duration-300 shadow-md group"
            >
              <Globe className="w-4 h-4 text-[#D4AF37] group-hover:text-[#070B14] transition-colors" />
              <span className="text-xs font-black tracking-wider uppercase">EN</span>
            </Link>

            {/* زر القائمة العربي */}
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
            className="fixed inset-0 z-[99999] bg-[#070B14]/98 backdrop-blur-xl px-6 sm:px-16 py-6 h-[100dvh] overflow-y-auto overscroll-y-contain flex flex-col text-right will-change-transform font-sans"
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
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 py-6 pb-12 items-start relative z-10 flex-1">
              
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

              {/* العمود الثالث - معلومات التواصل المباشر ومواقع التواصل */}
              <div className="lg:col-span-4 space-y-5 text-sm text-slate-300 border-r border-white/10 pr-6 sm:pr-8 bg-white/[0.03] p-6 sm:p-7 rounded-3xl border border-white/10 shadow-2xl text-right">
                <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37] mb-3">
                  التواصل المباشر والمعلومات
                </h4>

                <div className="space-y-3.5">
                  {/* رقم الاتصال المباشر (Call) */}
                  <a 
                    href="tel:+971558850631" 
                    className="flex items-center gap-3.5 hover:text-[#D4AF37] transition group justify-start"
                  >
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#D4AF37]/20 transition">
                      <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    </div>
                    <span className="font-bold text-base text-white group-hover:text-[#D4AF37] transition-colors" dir="ltr">
                      +971 4 344 4091
                    </span>
                  </a>

                  {/* رقم الواتساب المباشر (WhatsApp) */}
                  <a 
                    href="https://wa.me/97143444091" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3.5 hover:text-[#D4AF37] transition group justify-start"
                  >
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#D4AF37]/20 transition">
                      <MessageCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    </div>
                    <span className="font-bold text-base text-white group-hover:text-[#D4AF37] transition-colors" dir="ltr">
                      +971 4 344 4091
                    </span>
                  </a>

                  {/* البريد الإلكتروني العام */}
                  <a
                    href="mailto:info@baitalnokhada.com"
                    className="flex items-center gap-3.5 hover:text-[#D4AF37] transition group truncate justify-start"
                  >
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#D4AF37]/20 transition">
                      <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    </div>
                    <span className="font-medium text-xs sm:text-sm truncate text-slate-200" dir="ltr">
                      info@baitalnokhada.com
                    </span>
                  </a>

                  {/* بريد فرع السعودية */}
                  <a
                    href="mailto:info.Ksa@baitalnokhada.com"
                    className="flex items-center gap-3.5 hover:text-[#D4AF37] transition group truncate justify-start"
                  >
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#D4AF37]/20 transition">
                      <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    </div>
                    <span className="font-medium text-xs sm:text-sm truncate text-slate-200" dir="ltr">
                      info.Ksa@baitalnokhada.com
                    </span>
                  </a>

                  {/* عنوان المقر الرئيسي مع رابط خرائط جوجل */}
                  <div className="pt-1">
                    <a
                      href="https://www.google.com/maps/place/%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D9%86%D9%88%D8%AE%D8%B0%D8%A9+-+BAITALNOKHADA+TENTS+FACTORY+-HEAD+OFFICE+DUBAI%E2%80%AD/@24.934106,55.065001,10z/data=!4m6!3m5!1s0x3e5f0da58ab6364d:0xb668e74c8c5b934b!8m2!3d24.9341063!4d55.065001!16s%2Fg%2F11k3_kdvx5?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3.5 pt-1 hover:text-[#D4AF37] transition group cursor-pointer justify-start"
                    >
                      <div className="p-2 rounded-xl bg-white/5 mt-0.5 group-hover:bg-[#D4AF37]/20 transition">
                        <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      </div>
                      <span className="text-slate-300 leading-relaxed text-xs font-medium group-hover:text-white transition-colors text-right">
                        قطعة رقم TP 010102 - تكنوبارك - ميناء جبل علي - مجمع الصناعات الوطنية - دبي، الإمارات
                      </span>
                    </a>
                  </div>
                </div>

                {/* Social Media Icons (8 Platforms - Matches Arabic exactly) */}
  <div className="pt-4 border-t border-white/10">
    <p className="text-[11px] uppercase tracking-wider text-slate-400 mb-3 font-bold">تابعنا علي </p>
    <div className="flex items-center gap-2 flex-nowrap overflow-x-auto select-none">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37] hover:text-[#070B14] text-white transition shadow-md shrink-0"
        aria-label="Facebook"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37] hover:text-[#070B14] text-white transition shadow-md shrink-0"
        aria-label="LinkedIn"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37] hover:text-[#070B14] text-white transition shadow-md shrink-0"
        aria-label="Instagram"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37] hover:text-[#070B14] text-white transition shadow-md shrink-0"
        aria-label="TikTok"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37] hover:text-[#070B14] text-white transition shadow-md shrink-0"
        aria-label="YouTube"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37] hover:text-[#070B14] text-white transition shadow-md shrink-0"
        aria-label="X"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* Pinterest */}
      <a
        href="https://pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37] hover:text-[#070B14] text-white transition shadow-md shrink-0"
        aria-label="Pinterest"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.63-.13-1.6.03-2.29l1.1-4.66s-.28-.56-.28-1.39c0-1.3.75-2.27 1.7-2.27.8 0 1.19.6 1.19 1.32 0 .81-.51 2.01-.78 3.13-.22.94.47 1.71 1.4 1.71 1.68 0 2.97-1.77 2.97-4.32 0-2.26-1.62-3.84-3.94-3.84-2.69 0-4.26 2.02-4.26 4.1 0 .81.31 1.68.7 2.16.08.1.09.18.06.3-.08.33-.26 1.06-.3 1.2-.05.2-.16.24-.37.15-1.38-.64-2.24-2.65-2.24-4.27 0-3.48 2.53-6.67 7.29-6.67 3.83 0 6.8 2.73 6.8 6.38 0 3.8-2.4 6.87-5.73 6.87-1.12 0-2.17-.58-2.53-1.27l-.69 2.63c-.25.96-.92 2.16-1.37 2.89A12 12 0 1 0 12 0z" />
        </svg>
      </a>

      {/* Behance */}
      <a
        href="https://behance.net"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37] hover:text-[#070B14] text-white transition shadow-md shrink-0"
        aria-label="Behance"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.171 3-3.405 0-5.555-2.162-5.555-5.38 0-3.329 2.37-5.62 5.4-5.62 3.224 0 4.956 2.18 4.956 5.299 0 .533-.075 1.056-.075 1.056h-7.854c.114 1.822 1.306 2.85 2.899 2.85 1.196 0 2.053-.525 2.541-1.205h2.859zm-2.964-3.646c-.053-1.424-.925-2.314-2.256-2.314-1.341 0-2.21.89-2.367 2.314h4.623zm-14.762 3.646h-3v-12h3c2.757 0 4.5 1.449 4.5 3.5 0 1.456-.837 2.607-2.115 3.097 1.605.429 2.615 1.777 2.615 3.403 0 2.348-1.893 4-5 4zm-1-7h1c1.242 0 2-.636 2-1.5s-.758-1.5-2-1.5h-1v3zm0 5h1c1.381 0 2.5-.724 2.5-1.75s-1.119-1.75-2.5-1.75h-1v3.5z" />
        </svg>
      </a>
    </div>
  </div>
              </div>

            {/* إغلاق الحاوية الرئيسية للشبكة (هذا هو الوسم الذي كان ناقصاً) */}
            </div>

            {/* الشريط السفلي للتبديل للإنجليزية */}
            <div className="max-w-7xl mx-auto w-full pt-4 pb-6 mt-auto border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 shrink-0 relative z-10">
              <p className="text-[10px] sm:text-xs">© 2026 بيت النوخذة. جميع الحقوق محفوظة.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
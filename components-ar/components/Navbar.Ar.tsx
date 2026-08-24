"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe, Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { productsDatabase } from "@/app/data/products.Ar";
import { solutionsDatabase } from "@/app/data/solutions.Ar";

export default function ArabicNavbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname() || "/";
  const isArabic = pathname.startsWith("/ar");

  const targetLanguageUrl = isArabic
    ? pathname.replace(/^\/ar/, "") || "/"
    : `/ar${pathname === "/" ? "" : pathname}`;

  return (
    <header dir="rtl" className="fixed top-0 left-0 w-full z-50 bg-[#070B14]/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300 text-right">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/ar" className="flex flex-col">
          <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-heading">
            بيت النوخذة
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase -mt-1 font-semibold">
            للخيام والهياكل النسيجية
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 space-x-reverse text-sm font-medium text-slate-300">
          <Link href="/ar" className="hover:text-[#D4AF37] transition-colors">
            الرئيسية
          </Link>
          <Link href="/ar/about" className="hover:text-[#D4AF37] transition-colors">
            من نحن
          </Link>
          
          {/* Products Mega Menu Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <div className="flex items-center gap-1 py-2">
              <Link 
                href="/ar/products" 
                className="hover:text-[#D4AF37] transition-colors"
              >
                المنتجات
              </Link>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProductsOpen(!isProductsOpen);
                }}
                className="hover:text-[#D4AF37] transition-colors p-0.5 cursor-pointer"
                aria-label="Toggle Products Menu"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? "rotate-180 text-[#D4AF37]" : ""}`} />
              </button>
            </div>

            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-1/2 translate-x-1/2 w-205 bg-[#0B1120]/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-3 text-right"
                >
                  {productsDatabase.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/ar/products/${item.slug}`}
                      className="p-3 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-[#D4AF37]/30 group"
                    >
                      <div className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors text-xs sm:text-sm font-heading">
                        {item.ar ? item.ar.name : item.name}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {item.ar ? item.ar.tagline : item.tagline}
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions Dropdown Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <div className="flex items-center gap-1 py-2">
              <Link 
                href="/ar/solutions" 
                className="hover:text-[#D4AF37] transition-colors"
              >
                الحلول والخدمات
              </Link>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSolutionsOpen(!isSolutionsOpen);
                }}
                className="hover:text-[#D4AF37] transition-colors p-0.5 cursor-pointer"
                aria-label="Toggle Solutions Menu"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? "rotate-180 text-[#D4AF37]" : ""}`} />
              </button>
            </div>

            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-1/2 translate-x-1/2 w-170 bg-[#0B1120]/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-3 text-right"
                >
                  {solutionsDatabase.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/ar/solutions/${item.slug}`}
                      className="p-3 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-[#D4AF37]/30 group"
                    >
                      <div className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors text-xs sm:text-sm font-heading">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {item.tagline}
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/ar/projects" className="hover:text-[#D4AF37] transition-colors">
            المشاريع
          </Link>
          <Link href="/ar/news" className="hover:text-[#D4AF37] transition-colors">
            الأخبار والمقالات
          </Link>
          <Link href="/ar/contact" className="hover:text-[#D4AF37] transition-colors">
            تواصل معنا
          </Link>
        </nav>

        {/* Direct Language Switcher & Quote Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={targetLanguageUrl}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition shadow-sm"
          >
            <Globe className="w-4 h-4 text-[#D4AF37]" />
            <span>ENGLISH</span>
          </Link>

          <Link
            href="/ar/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-bold text-sm transition hover:brightness-110 shadow-lg shadow-[#D4AF37]/20"
          >
            <PhoneCall className="w-4 h-4" />
            <span>طلب عرض سعر</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#D4AF37]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070B14] border-b border-white/10 px-6 py-6 space-y-4 text-slate-300 text-right">
          <Link href="/ar" className="block py-2">
            الرئيسية
          </Link>
          <Link href="/ar/products" className="block py-2 text-[#D4AF37]">
            المنتجات
          </Link>
          <Link href="/ar/solutions" className="block py-2">
            الحلول والخدمات
          </Link>
          <Link href="/ar/projects" className="block py-2">
            المشاريع
          </Link>
          <Link href="/ar/contact" className="block py-2">
            تواصل معنا
          </Link>
          <Link
            href={targetLanguageUrl}
            className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] pt-2 justify-start"
          >
            <Globe className="w-4 h-4" />
            <span>Switch to English</span>
          </Link>
        </div>
      )}
    </header>
  );
}
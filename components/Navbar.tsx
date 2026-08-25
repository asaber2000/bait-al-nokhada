"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe, Menu, X, PhoneCall, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { productsDatabase } from "@/app/data/products.En";
import { solutionsDatabase } from "@/app/data/solutions.En";

export default function Navbar() {
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
      {/* Transparent Header Layout (Logo Center, Menu Left, CTA Right) */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 h-24 flex items-center justify-between pointer-events-none">
        
        {/* 1. Left: Hamburger Menu Trigger (Transparent & Clean) */}
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="pointer-events-auto flex items-center gap-2.5 text-white group cursor-pointer p-2 rounded-xl hover:bg-white/10 transition backdrop-blur-sm"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline text-xs font-bold tracking-widest uppercase text-slate-200">Menu</span>
        </button>

        {/* 2. Center: Brand Logo */}
        <Link href="/" className="pointer-events-auto flex flex-col text-center">
          <span className="text-base sm:text-xl font-black tracking-wider text-white font-heading drop-shadow-md">
            BAIT AL NOKHADA
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase -mt-0.5 font-semibold drop-shadow">
            Tents & Fabric Structures
          </span>
        </Link>

        {/* 3. Right: Get a Quote Button */}
        <div className="pointer-events-auto flex items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="hidden sm:inline">Get a Quote</span>
          </Link>
        </div>
      </header>

      {/* Fullscreen Cinematic Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            data-lenis-prevent="true"
            initial={{ opacity: 0, clipPath: "circle(0% at 0% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 0% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 0% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] h-full overflow-y-auto bg-[#070B14]/98 backdrop-blur-3xl px-6 sm:px-16 py-6 flex flex-col justify-between text-left touch-pan-y"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between max-w-7xl mx-auto w-full shrink-0">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold">Navigation Directory</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer flex items-center gap-2 group"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Middle Content Links (All Pages & Dynamic Databases) - Constrained Height */}
            <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-auto py-4 items-start overflow-hidden">
              
              {/* Main Links Column */}
              <div className="space-y-4 text-2xl sm:text-4xl font-extrabold text-white">
                <Link 
                  href="/" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block hover:text-[#D4AF37] transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block hover:text-[#D4AF37] transition-colors"
                >
                  About Us
                </Link>
                <Link 
                  href="/projects" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block hover:text-[#D4AF37] transition-colors"
                >
                  Projects
                </Link>
                <Link 
                  href="/news" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block hover:text-[#D4AF37] transition-colors"
                >
                  News
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block hover:text-[#D4AF37] transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Dynamic Databases Column (Products & Solutions) - Internal Scroll Only */}
              <div 
                className="space-y-6 text-sm text-slate-300 border-l border-white/10 pl-6 sm:pl-10 max-h-[60vh] overflow-y-auto pr-2 custom-scroll"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <style jsx>{`
                  .custom-scroll::-webkit-scrollbar {
                    display: none !important;
                  }
                `}</style>
                
                {/* Products Section */}
                <div className="space-y-2">
                  <button 
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="flex items-center justify-between w-full text-lg font-bold text-[#D4AF37] py-2 border-b border-white/10 cursor-pointer"
                  >
                    <span>Products ({productsDatabase.length})</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {mobileProductsOpen && (
                    <div className="grid grid-cols-1 gap-2 pt-2 pb-2">
                      {productsDatabase.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/products/${item.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-1.5 px-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition group"
                        >
                          <span>{item.name}</span>
                          <ArrowUpRight className="w-3 h-3 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
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
                    <span>Solutions ({solutionsDatabase.length})</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {mobileSolutionsOpen && (
                    <div className="grid grid-cols-1 gap-2 pt-2 pb-2">
                      {solutionsDatabase.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/solutions/${item.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-1.5 px-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition group"
                        >
                          <span>{item.name}</span>
                          <ArrowUpRight className="w-3 h-3 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Bottom Footer inside Overlay */}
            <div className="max-w-7xl mx-auto w-full pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 shrink-0">
              <Link
                href={targetLanguageUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 text-xs font-bold text-white px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition shadow-sm"
              >
                <Globe className="w-4 h-4 text-[#D4AF37]" />
                <span>العربية (AR)</span>
              </Link>

              <p>© 2026 Bait Al Nokhada. All Rights Reserved.</p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
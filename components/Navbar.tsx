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
      <header className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 h-24 flex items-center justify-between pointer-events-none">
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="pointer-events-auto flex items-center gap-2.5 text-white group cursor-pointer p-2 rounded-xl hover:bg-white/10 transition backdrop-blur-sm"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline text-xs font-bold tracking-widest uppercase text-slate-200">Menu</span>
        </button>

        <Link href="/" className="pointer-events-auto flex flex-col text-center">
          <span className="text-base sm:text-xl font-black tracking-wider text-white font-heading drop-shadow-md">
            BAIT AL NOKHADA
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase -mt-0.5 font-semibold drop-shadow">
            Tents & Fabric Structures
          </span>
        </Link>

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
            className="fixed inset-0 z-[99999] bg-[#070B14]/98 backdrop-blur-3xl px-4 sm:px-16 py-4 h-screen overflow-hidden flex flex-col justify-between text-left"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between max-w-7xl mx-auto w-full shrink-0">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">Navigation Directory</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="pointer-events-auto p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer flex items-center gap-2 group"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Middle Content Links (Compact spacing, small fonts, and internal scroll for databases) */}
            <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-auto py-2 items-start">
              
              {/* Main Links Column */}
              <div className="space-y-2 text-lg sm:text-3xl font-bold text-white font-heading">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors py-0.5">
                  Home
                </Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors py-0.5">
                  About Us
                </Link>
                <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors py-0.5">
                  Projects
                </Link>
                <Link href="/news" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors py-0.5">
                  News
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#D4AF37] transition-colors py-0.5">
                  Contact
                </Link>
              </div>

              {/* Accordion Databases Column with internal scroll */}
              <div className="space-y-2.5 text-sm text-slate-300 border-l border-white/10 pl-3 sm:pl-8 pr-1 max-h-[50vh] overflow-y-auto custom-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style jsx>{`
                  .custom-scroll::-webkit-scrollbar {
                    display: none !important;
                  }
                `}</style>
                
{/* Products Section */}
                <div className="space-y-2 bg-white/[0.04] p-3.5 sm:p-4 rounded-2xl border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between w-full">
                    <button 
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="flex items-center gap-2 text-base sm:text-lg font-extrabold text-[#D4AF37] cursor-pointer"
                    >
                      <span>Products ({productsDatabase.length})</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`} />
                    </button>
                    <Link 
                      href="/products" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-slate-400 hover:text-[#D4AF37] underline flex items-center gap-1 font-semibold"
                    >
                      View All <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  
                  {mobileProductsOpen && (
                    <div className="grid grid-cols-1 gap-1.5 pt-3 border-t border-white/10 mt-2">
                      {productsDatabase.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/products/${item.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-3 text-xs sm:text-sm text-slate-200 hover:text-[#D4AF37] bg-white/[0.02] hover:bg-[#D4AF37]/10 border border-white/5 hover:border-[#D4AF37]/30 rounded-xl transition-all duration-200 group active:scale-[0.98]"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Solutions Section */}
                <div className="space-y-2 bg-white/[0.04] p-3.5 sm:p-4 rounded-2xl border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between w-full">
                    <button 
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className="flex items-center gap-2 text-base sm:text-lg font-extrabold text-[#D4AF37] cursor-pointer"
                    >
                      <span>Solutions ({solutionsDatabase.length})</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                    </button>
                    <Link 
                      href="/solutions" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-slate-400 hover:text-[#D4AF37] underline flex items-center gap-1 font-semibold"
                    >
                      View All <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  
                  {mobileSolutionsOpen && (
                    <div className="grid grid-cols-1 gap-1.5 pt-3 border-t border-white/10 mt-2">
                      {solutionsDatabase.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/solutions/${item.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-3 text-xs sm:text-sm text-slate-200 hover:text-[#D4AF37] bg-white/[0.02] hover:bg-[#D4AF37]/10 border border-white/5 hover:border-[#D4AF37]/30 rounded-xl transition-all duration-200 group active:scale-[0.98]"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Bottom Footer - Perfectly locked at the bottom */}
            <div className="max-w-7xl mx-auto w-full pt-3 pb-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 shrink-0">
              <Link
                href={targetLanguageUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1 font-bold text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition shadow-sm"
              >
                <Globe className="w-3 h-3 text-[#D4AF37]" />
                <span>العربية (AR)</span>
              </Link>
              <p className="text-[10px] sm:text-xs">© 2026 Bait Al Nokhada. All Rights Reserved.</p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
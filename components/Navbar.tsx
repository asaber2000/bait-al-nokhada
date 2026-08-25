"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe, Menu, X, PhoneCall, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { productsDatabase } from "@/app/data/products.En";
import { solutionsDatabase } from "@/app/data/solutions.En";

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const pathname = usePathname() || "/";
  const isArabic = pathname.startsWith("/ar");

  const targetLanguageUrl = isArabic
    ? pathname.replace(/^\/ar/, "") || "/"
    : `/ar${pathname === "/" ? "" : pathname}`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#070B14]/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-heading">
            BAIT AL NOKHADA
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase -mt-1 font-semibold">
            Tents & Fabric Structures
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
            About Us
          </Link>
          
          {/* Products Mega Menu Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <div className="flex items-center gap-1 py-2">
              <Link 
                href="/products" 
                className="hover:text-[#D4AF37] transition-colors"
              >
                Products
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
                  className="absolute top-full left-1/2 -translate-x-1/2 w-205 bg-[#0B1120]/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-3"
                >
                  {productsDatabase.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/products/${item.slug}`}
                      className="p-3 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-[#D4AF37]/30 group text-left"
                    >
                      <div className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors text-xs sm:text-sm">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {item.tagline}
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
                href="/solutions" 
                className="hover:text-[#D4AF37] transition-colors"
              >
                Solutions
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
                  className="absolute top-full left-1/2 -translate-x-1/2 w-170 bg-[#0B1120]/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-3"
                >
                  {solutionsDatabase.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/solutions/${item.slug}`}
                      className="p-3 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-[#D4AF37]/30 group text-left"
                    >
                      <div className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors text-xs sm:text-sm">
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

          <Link href="/projects" className="hover:text-[#D4AF37] transition-colors">
            Projects
          </Link>
          <Link href="/news" className="hover:text-[#D4AF37] transition-colors">
            News
          </Link>
          <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Direct Language Switcher & Quote Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={targetLanguageUrl}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition shadow-sm"
          >
            <Globe className="w-4 h-4 text-[#D4AF37]" />
            <span>العربية (AR)</span>
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-bold text-sm transition hover:brightness-110 shadow-lg shadow-[#D4AF37]/20"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Get a Quote</span>
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

      {/* Mobile Drawer - Modern & Luxury UI */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#070B14]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-2 text-slate-200 text-left max-h-[80vh] overflow-y-auto"
        >
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg hover:bg-white/5 transition">Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg hover:bg-white/5 transition">About Us</Link>
          
          {/* Mobile Products Accordion */}
          <div>
            <div className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-white/5 transition text-[#D4AF37]">
              <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="font-semibold flex-1">
                Products
              </Link>
              <button 
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="p-1 cursor-pointer"
                aria-label="Toggle Products Submenu"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180 text-[#D4AF37]" : "text-slate-400"}`} />
              </button>
            </div>
            
            <AnimatePresence>
              {mobileProductsOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-1 gap-1.5 py-2 px-2 my-1 bg-white/[0.02] rounded-xl border border-white/5"
                >
                  {productsDatabase.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/products/${item.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 px-3 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition rounded-lg group"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#D4AF37] transition-colors" />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Solutions Accordion */}
          <div>
            <div className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-white/5 transition">
              <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="font-semibold flex-1 text-slate-200">
                Solutions
              </Link>
              <button 
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="p-1 cursor-pointer"
                aria-label="Toggle Solutions Submenu"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180 text-[#D4AF37]" : "text-slate-400"}`} />
              </button>
            </div>
            
            <AnimatePresence>
              {mobileSolutionsOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-1 gap-1.5 py-2 px-2 my-1 bg-white/[0.02] rounded-xl border border-white/5"
                >
                  {solutionsDatabase.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/solutions/${item.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 px-3 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition rounded-lg group"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#D4AF37] transition-colors" />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg hover:bg-white/5 transition">Projects</Link>
          <Link href="/news" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg hover:bg-white/5 transition">News</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg hover:bg-white/5 transition">Contact</Link>
          
          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
            <Link
              href={targetLanguageUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-xs font-bold text-white py-3 rounded-xl bg-white/5 border border-white/10 transition"
            >
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span>العربية (AR)</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-bold text-sm shadow-lg shadow-[#D4AF37]/20"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Get a Quote</span>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Globe,
  X,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Building,
  Layers,
  ChevronDown,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { client } from "@/app/lib/sanity";
import { productsDatabase } from "@/app/data/products.En";
import { solutionsDatabase } from "@/app/data/solutions.En";

// إعدادات حركة العناصر المتسلسلة (Stagger Animation)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"products" | "solutions">("products");
  const [mobileAccordion, setMobileAccordion] = useState<"products" | "solutions" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const [solutionsList, setSolutionsList] = useState(solutionsDatabase);
  const [productsList, setProductsList] = useState(productsDatabase);

  useEffect(() => {
    async function fetchLiveNavData() {
      try {
        const sanitySolutions: any[] = await client.fetch(
          `*[_type == "solutionEn" && defined(slug.current)]{
            "name": titleEn,
            "slug": slug.current,
            "image": mainImage.asset->url
          }`
        );

        if (sanitySolutions && sanitySolutions.length > 0) {
          const sanitySlugs = new Set(sanitySolutions.map((s) => s.slug));
          const remainingLocal = solutionsDatabase.filter((l) => !sanitySlugs.has(l.slug));
          setSolutionsList([...sanitySolutions, ...remainingLocal]);
        }

        const sanityProducts: any[] = await client.fetch(
          `*[_type in ["productsEn", "productEn"] && defined(slug.current)]{
            "name": titleEn,
            "slug": slug.current,
            "image": mainImage.asset->url
          }`
        );

        if (sanityProducts && sanityProducts.length > 0) {
          const sanityProductSlugs = new Set(sanityProducts.map((p) => p.slug));
          const remainingLocalProducts = productsDatabase.filter((lp) => !sanityProductSlugs.has(lp.slug));
          setProductsList([...sanityProducts, ...remainingLocalProducts]);
        }
      } catch (err) {
        // Fallback to local DB silently
      }
    }

    fetchLiveNavData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      setActiveTab("products");
      setMobileAccordion(null);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const pathname = usePathname() || "/";
  const isArabic = pathname.startsWith("/ar");

  const targetLanguageUrl = isArabic
    ? pathname.replace(/^\/ar/, "") || "/"
    : `/ar${pathname === "/" ? "" : pathname}`;

  return (
    <>
      {/* الترويسة الرئيسية للموقع */}
      <header
        dir="ltr"
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-center transition-all duration-300 transform-gpu px-5 sm:px-8 lg:px-12 ${
          isScrolled
            ? "bg-[#FDFCF7]/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] py-3.5"
            : "bg-transparent py-6 sm:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
            <div
              className={`relative transition-all duration-300 ${
                isScrolled ? "h-8 w-32 sm:h-9 sm:w-38" : "h-10 w-40 sm:h-12 sm:w-48"
              }`}
            >
              <Image
                src="/bait-alnokhada-final-g.svg"
                alt="Bait Al Nokhada"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          <div className="flex items-center p-1 rounded-full bg-white/80 backdrop-blur-xl border border-slate-900/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300">
            <Link
              href={targetLanguageUrl}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold text-slate-700 hover:text-[#df9d17] transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#df9d17] transition-colors" />
              <span className="tracking-wide transition-colors">AR</span>
            </Link>

            <span className="w-[1px] h-4 bg-slate-200 shrink-0" />

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-2.5 pl-3 pr-4 py-1.5 rounded-full text-slate-900 hover:text-[#df9d17] transition-colors cursor-pointer group"
              aria-label="Open Menu"
            >
              <div className="flex flex-col gap-[3px] items-end justify-center w-3.5">
                <span className="w-3.5 h-[1.5px] bg-slate-900 group-hover:bg-[#df9d17] rounded-full transition-all duration-300 group-hover:w-2" />
                <span className="w-2 h-[1.5px] bg-[#df9d17] rounded-full transition-all duration-300 group-hover:w-3.5" />
              </div>
              <span className="font-extrabold text-[11px] tracking-[0.2em] uppercase leading-none">
                MENU
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* المنيو الشامل المحسن بتصميم معماري حديث وتفاعلي */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99999] bg-[#FDFCF7] text-[#0B1220] flex flex-col justify-between overflow-y-auto"
          >
            {/* الخلفية الهندسية الخافتة */}
            <div
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#df9d17]/5 blur-[200px] rounded-full pointer-events-none" />

            {/* الهيدر العلوي في وضع المنيو */}
            <div className="w-full px-5 sm:px-10 lg:px-16 pt-5 pb-4 border-b border-slate-200/80 flex items-center justify-between shrink-0 relative z-20">
              <div className="relative h-8 w-32 sm:h-9 sm:w-40">
                <Image
                  src="/bait-alnokhada-final-g.svg"
                  alt="Bait Al Nokhada"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#df9d17] text-slate-800 hover:text-[#0B1220] transition-all cursor-pointer border border-slate-200/90 shadow-2xs hover:shadow-sm group"
                aria-label="Close Menu"
              >
                <span className="text-[11px] font-mono font-bold tracking-wider">ESC</span>
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* مساحة العرض الرئيسية */}
            <div className="w-full flex-1 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-6 lg:py-8 relative z-10 flex flex-col justify-center">

              {/* 1. تجربة الموبايل (Native Mobile Accordion) */}
              <div className="lg:hidden flex flex-col space-y-2 py-4">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-slate-200/70 text-2xl font-black font-heading uppercase text-slate-900"
                >
                  <span>Home</span>
                  <span className="text-xs font-mono text-slate-400">01</span>
                </Link>

                {/* اكورديون المنتجات على الموبايل */}
                <div className="border-b border-slate-200/70 pb-2">
                  <button
                    onClick={() =>
                      setMobileAccordion(mobileAccordion === "products" ? null : "products")
                    }
                    className="w-full flex items-center justify-between py-2.5 text-2xl font-black font-heading uppercase text-slate-900"
                  >
                    <span className="flex items-center gap-2">
                      <span>Products</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/20">
                        {productsList.length}
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                        mobileAccordion === "products" ? "rotate-180 text-[#df9d17]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileAccordion === "products" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pt-2 space-y-2"
                      >
                        {productsList.map((item, idx) => {
                          const itemImg = (item as any).image;
                          return (
                            <Link
                              key={item.slug}
                              href={`/products/${item.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-200/80 hover:border-[#df9d17]/50 transition-colors"
                            >
                              <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                                {itemImg ? (
                                  <Image src={itemImg} alt={item.name} fill className="object-cover" />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-[#df9d17]">
                                    <Building className="w-4 h-4" />
                                  </div>
                                )}
                              </div>
                              <span className="text-xs font-bold text-slate-800 truncate flex-1">{item.name}</span>
                              <span className="text-[10px] font-mono text-slate-400">#{String(idx + 1).padStart(2, "0")}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* اكورديون الحلول على الموبايل */}
                <div className="border-b border-slate-200/70 pb-2">
                  <button
                    onClick={() =>
                      setMobileAccordion(mobileAccordion === "solutions" ? null : "solutions")
                    }
                    className="w-full flex items-center justify-between py-2.5 text-2xl font-black font-heading uppercase text-slate-900"
                  >
                    <span className="flex items-center gap-2">
                      <span>Solutions</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/20">
                        {solutionsList.length}
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                        mobileAccordion === "solutions" ? "rotate-180 text-[#df9d17]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileAccordion === "solutions" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pt-2 space-y-2"
                      >
                        {solutionsList.map((item, idx) => {
                          const itemImg = (item as any).image;
                          return (
                            <Link
                              key={item.slug}
                              href={`/solutions/${item.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-200/80 hover:border-[#df9d17]/50 transition-colors"
                            >
                              <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                                {itemImg ? (
                                  <Image src={itemImg} alt={item.name} fill className="object-cover" />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-[#df9d17]">
                                    <Layers className="w-4 h-4" />
                                  </div>
                                )}
                              </div>
                              <span className="text-xs font-bold text-slate-800 truncate flex-1">{item.name}</span>
                              <span className="text-[10px] font-mono text-slate-400">#{String(idx + 1).padStart(2, "0")}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-slate-200/70 text-2xl font-black font-heading uppercase text-slate-900"
                >
                  <span>Projects</span>
                  <span className="text-xs font-mono text-slate-400">04</span>
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-slate-200/70 text-2xl font-black font-heading uppercase text-slate-900"
                >
                  <span>About Us</span>
                  <span className="text-xs font-mono text-slate-400">05</span>
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-slate-200/70 text-2xl font-black font-heading uppercase text-slate-900"
                >
                  <span>Contact</span>
                  <span className="text-xs font-mono text-slate-400">06</span>
                </Link>
              </div>

              {/* 2. تجربة الديسكتوب (Architectural Split with Enhanced Visual Cards & Motion) */}
              <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-14 items-center min-h-[480px]">

                {/* العمود الأيسر (4 أعمدة): الروابط الرئيسية مع مؤشر تفاعلي */}
                <div className="col-span-4 flex flex-col justify-center space-y-2 border-r border-slate-200/80 pr-10">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-2 text-3xl xl:text-4xl font-black tracking-tight text-[#0B1220]/75 hover:text-[#df9d17] transition-all font-heading uppercase"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-200">Home</span>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17]">01</span>
                  </Link>

                  {/* تفعيل المنتجات بمجرد وقوف الماوس (Hover) */}
                  <div
                    onMouseEnter={() => setActiveTab("products")}
                    className="cursor-pointer"
                  >
                    <Link
                      href="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center justify-between py-2 text-3xl xl:text-4xl font-black tracking-tight transition-all font-heading uppercase ${
                        activeTab === "products"
                          ? "text-[#df9d17] translate-x-2"
                          : "text-[#0B1220]/75 hover:text-[#df9d17]"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        Products
                        <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-amber-500/10 text-[#df9d17] border border-[#df9d17]/25">
                          {productsList.length}
                        </span>
                      </span>
                      <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17]">02</span>
                    </Link>
                  </div>

                  {/* تفعيل الحلول بمجرد وقوف الماوس (Hover) */}
                  <div
                    onMouseEnter={() => setActiveTab("solutions")}
                    className="cursor-pointer"
                  >
                    <Link
                      href="/solutions"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center justify-between py-2 text-3xl xl:text-4xl font-black tracking-tight transition-all font-heading uppercase ${
                        activeTab === "solutions"
                          ? "text-[#df9d17] translate-x-2"
                          : "text-[#0B1220]/75 hover:text-[#df9d17]"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        Solutions
                        <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-amber-500/10 text-[#df9d17] border border-[#df9d17]/25">
                          {solutionsList.length}
                        </span>
                      </span>
                      <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17]">03</span>
                    </Link>
                  </div>

                  <Link
                    href="/projects"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-2 text-3xl xl:text-4xl font-black tracking-tight text-[#0B1220]/75 hover:text-[#df9d17] transition-all font-heading uppercase"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-200">Projects</span>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17]">04</span>
                  </Link>

                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-2 text-3xl xl:text-4xl font-black tracking-tight text-[#0B1220]/75 hover:text-[#df9d17] transition-all font-heading uppercase"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-200">About Us</span>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17]">05</span>
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-2 text-3xl xl:text-4xl font-black tracking-tight text-[#0B1220]/75 hover:text-[#df9d17] transition-all font-heading uppercase"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-200">Contact</span>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17]">06</span>
                  </Link>
                </div>

                {/* العمود الأيمن (8 أعمدة): شبكة الكروت التفاعلية مع أنيميشن متسلسل وأيقونات صور متناسقة */}
                <div className="col-span-8 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {activeTab === "products" && (
                      <motion.div
                        key="products-canvas"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between border-b border-slate-200/90 pb-2.5">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#df9d17] uppercase">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>ALL TENT PRODUCTS CATALOG ({productsList.length})</span>
                          </div>
                          <Link
                            href="/products"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs font-mono font-bold text-slate-500 hover:text-[#df9d17] transition-colors"
                          >
                            VIEW ALL PRODUCTS →
                          </Link>
                        </div>

                        {/* شبكة المنتجات مع أيقونة صورة حقيقية بدقة 48px لكل منتج */}
                        <div className="overflow-y-auto no-scrollbar max-h-[400px] grid grid-cols-2 gap-3 pr-2">
                          {productsList.map((item, idx) => {
                            const itemImg = (item as any).image;
                            return (
                              <motion.div key={item.slug} variants={itemVariants}>
                                <Link
                                  href={`/products/${item.slug}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="group relative flex items-center gap-3.5 p-2.5 rounded-2xl border border-slate-200/80 bg-white/60 hover:bg-white hover:border-[#df9d17]/50 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(223,157,23,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                                >
                                  {/* صورة المنتج المصغرة والمعدة معمارياً */}
                                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200/90">
                                    {itemImg ? (
                                      <Image
                                        src={itemImg}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                      />
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center bg-amber-50 text-[#df9d17]">
                                        <Building className="w-5 h-5" />
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold text-slate-900 group-hover:text-[#df9d17] truncate transition-colors font-heading tracking-tight">
                                      {item.name}
                                    </p>
                                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mt-0.5">
                                      SPEC #{String(idx + 1).padStart(2, "0")}
                                    </span>
                                  </div>

                                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#df9d17] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "solutions" && (
                      <motion.div
                        key="solutions-canvas"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between border-b border-slate-200/90 pb-2.5">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#df9d17] uppercase">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>ALL TURNKEY DIVISIONS ({solutionsList.length})</span>
                          </div>
                          <Link
                            href="/solutions"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs font-mono font-bold text-slate-500 hover:text-[#df9d17] transition-colors"
                          >
                            VIEW ALL SOLUTIONS →
                          </Link>
                        </div>

                        {/* شبكة الحلول مع أيقونة صورة حقيقية بدقة 48px لكل حل */}
                        <div className="overflow-y-auto no-scrollbar max-h-[400px] grid grid-cols-2 gap-3 pr-2">
                          {solutionsList.map((item, idx) => {
                            const itemImg = (item as any).image;
                            return (
                              <motion.div key={item.slug} variants={itemVariants}>
                                <Link
                                  href={`/solutions/${item.slug}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="group relative flex items-center gap-3.5 p-2.5 rounded-2xl border border-slate-200/80 bg-white/60 hover:bg-white hover:border-[#df9d17]/50 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(223,157,23,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                                >
                                  {/* صورة الحل المصغرة */}
                                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200/90">
                                    {itemImg ? (
                                      <Image
                                        src={itemImg}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                      />
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center bg-amber-50 text-[#df9d17]">
                                        <Layers className="w-5 h-5" />
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold text-slate-900 group-hover:text-[#df9d17] truncate transition-colors font-heading tracking-tight">
                                      {item.name}
                                    </p>
                                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mt-0.5">
                                      DIVISION #{String(idx + 1).padStart(2, "0")}
                                    </span>
                                  </div>

                                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#df9d17] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

            </div>

            {/* الشريط السفلي المتناسق */}
            <div className="w-full px-5 sm:px-10 lg:px-16 pt-4 pb-6 border-t border-slate-200/80 bg-[#FDFCF7] shrink-0 space-y-3 relative z-20">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex flex-wrap items-center gap-6">
                  <a href="tel:+971558850631" className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#df9d17] transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#df9d17]" />
                    <span>+971 55 885 0631</span>
                  </a>

                  <a href="https://wa.me/97143444091" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#df9d17] transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 text-[#df9d17]" />
                    <span>+971 4 344 4091</span>
                  </a>

                  <a href="mailto:info@baitalnokhada.com" className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#df9d17] transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#df9d17]" />
                    <span>info@baitalnokhada.com</span>
                  </a>

                  <a href="mailto:info.Ksa@baitalnokhada.com" className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#df9d17] transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#df9d17]" />
                    <span>info.Ksa@baitalnokhada.com</span>
                  </a>
                </div>

                <a
                  href="https://www.google.com/maps/place/%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D9%86%D9%88%D8%AE%D8%B0%D8%A9+-+BAITALNOKHADA+TENTS+FACTORY+-HEAD+OFFICE+DUBAI%E2%80%AD/@24.934106,55.065001,10z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#df9d17] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#df9d17] shrink-0" />
                  <span>Technopark, Mina Jebel Ali, Dubai, UAE</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2.5 border-t border-slate-200/60 text-[11px] text-slate-500">
                <p className="font-mono text-slate-600">
                  © 2026 Bait Al Nokhada Tents Factory. All rights reserved.
                </p>

                <div className="flex items-center gap-2">
                  {[
                    { label: "Facebook", href: "https://facebook.com", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                    { label: "Instagram", href: "https://instagram.com", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                    { label: "LinkedIn", href: "https://linkedin.com", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white border border-slate-200/90 flex items-center justify-center text-slate-700 hover:bg-[#df9d17] hover:border-[#df9d17] hover:text-white transition-all duration-300 shadow-2xs hover:scale-105"
                      aria-label={s.label}
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d={s.path} /></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
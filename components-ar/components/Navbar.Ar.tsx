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
  Sparkles,
  MessageCircle,
  Building,
  Layers,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { client } from "@/app/lib/sanity";
import { productsDatabase } from "@/app/data/products.Ar";
import { solutionsDatabase } from "@/app/data/solutions.Ar";

// صور معمارية افتراضية بديلة
const DEFAULT_PRODUCT_FALLBACK = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80";
const DEFAULT_SOLUTION_FALLBACK = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=300&q=80";

// حركة ستائر الأعمدة المتتالية (Curtain Shutter Animation)
const shutterVariants: Variants = {
  initial: { y: "-100%" },
  animate: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.55,
      delay: i * 0.05,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  }),
  exit: (i: number) => ({
    y: "-100%",
    transition: {
      duration: 0.45,
      delay: (4 - i) * 0.04,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  }),
};

// حركة تسلسل كروت المنتجات والحلول
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

export default function ArabicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"products" | "solutions">("products");
  const [mobileAccordion, setMobileAccordion] = useState<"products" | "solutions" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const [solutionsList, setSolutionsList] = useState<any[]>(solutionsDatabase);
  const [productsList, setProductsList] = useState<any[]>(productsDatabase);

  useEffect(() => {
    async function fetchLiveNavDataAr() {
      try {
        // جلب الحلول العربية فقط من سانتي
        const sanitySolutions: any[] = await client.fetch(
          `*[_type in ["solution", "solutionAr"] && defined(titleAr) && defined(slug.current)]{
            "name": titleAr,
            "slug": slug.current,
            "image": coalesce(catalogImage.asset->url, coverImage.asset->url, image.asset->url)
          }`
        );

        if (sanitySolutions && sanitySolutions.length > 0) {
          const sanitySlugs = new Set(sanitySolutions.map((s) => s.slug));
          const remainingLocal = solutionsDatabase.filter((l: any) => !sanitySlugs.has(l.slug));
          setSolutionsList([...sanitySolutions, ...remainingLocal]);
        }

        // جلب المنتجات العربية فقط من سانتي
        const sanityProducts: any[] = await client.fetch(
          `*[_type in ["product", "productAr", "productsAr"] && defined(slug.current)]{
            "name": coalesce(titleAr, nameAr, name),
            "slug": slug.current,
            "image": coalesce(catalogImage.asset->url, coverImage.asset->url, image.asset->url, heroImage.asset->url)
          }`
        );

        if (sanityProducts && sanityProducts.length > 0) {
          const sanityProductSlugs = new Set(sanityProducts.map((p) => p.slug));
          const remainingLocalProducts = productsDatabase.filter((lp: any) => !sanityProductSlugs.has(lp.slug));
          setProductsList([...sanityProducts, ...remainingLocalProducts]);
        }
      } catch (err) {
        // Fallback silently to local database
      }
    }

    fetchLiveNavDataAr();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // تحميل مسبق صامت لصور المنيو في الخلفية بعد استقرار الصفحة
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window === "undefined") return;
      [...productsList, ...solutionsList].forEach((item) => {
        const src = item?.catalogImage || item?.image || item?.coverImage || item?.heroImage;
        if (typeof src === "string" && (src.startsWith("https://") || src.startsWith("/"))) {
          const img = new window.Image();
          img.src = src;
        }
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [productsList, solutionsList]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      setActiveTab("products");
      setMobileAccordion(null);
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
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
        dir="rtl"
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-center transition-all duration-300 transform-gpu px-4 sm:px-6 lg:px-8 ${isScrolled
          ? "bg-[#FDFCF7]/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] py-3"
          : "bg-transparent py-6 sm:py-8"
          }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* اللوجو العربي */}
          <Link href="/ar" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative overflow-visible flex items-center justify-start">
              <Image
                src="/icons/bait-al-nokhada-final-arabic-logo.svg"
                alt="بيت النوخذة"
                width={280}
                height={80}
                priority
                className={`w-auto object-contain transition-all duration-300 origin-right scale-[2.0] sm:scale-[2.4] ${isScrolled ? "h-11" : "h-14"
                  }`}
              />
            </div>
          </Link>

          {/* الأزرار العلوية */}
          <div className="flex items-center p-1 rounded-full bg-white/80 backdrop-blur-xl border border-slate-900/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300">
            {/* زر التحويل للإنجليزية EN */}
            <Link
              href={targetLanguageUrl}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold text-slate-700 hover:text-[#df9d17] transition-colors group"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#df9d17] transition-colors" />
              <span className="tracking-wide font-sans">EN</span>
            </Link>

            <span className="w-[1px] h-4 bg-slate-200 shrink-0" />

            {/* زر القائمة العربي */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-2 pr-3 pl-4 py-1.5 rounded-full text-slate-900 hover:text-[#df9d17] transition-colors cursor-pointer group"
              aria-label="فتح القائمة"
            >
              <div className="flex flex-col gap-[3px] items-start justify-center w-3.5">
                <span className="w-3.5 h-[1.5px] bg-slate-900 group-hover:bg-[#df9d17] rounded-full transition-all duration-300 group-hover:w-2" />
                <span className="w-2 h-[1.5px] bg-[#df9d17] rounded-full transition-all duration-300 group-hover:w-3.5" />
              </div>
              <span className="font-extrabold text-[12px] tracking-wider leading-none">
                القائمة
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* المنيو الشامل باللغة العربية مع أنيميشن ستائر Portfi */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            data-lenis-prevent
            dir="rtl"
            className="fixed inset-0 z-[99999] overflow-hidden select-none"
          >
            {/* الأعمدة الستارية الخمسة المتتالية المتداخلة بدون أي خطوط باقية */}
            <div className="absolute inset-0 flex pointer-events-none z-10">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={shutterVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-[20.1%] -ml-[1px] h-full bg-[#f4f2e8]"
                />
              ))}
            </div>

            {/* حاوية المنيو: تظهر بخلفية موحدة ناصعة تغطي أثر حركة الأعمدة فور استقرارها */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.25 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="relative z-20 w-full h-full bg-[#FDFCF7] flex flex-col justify-between overflow-y-auto"
            >
              {/* الخلفية الهندسية الخافتة */}
              <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#df9d17]/5 blur-[200px] rounded-full pointer-events-none" />

              {/* الهيدر العلوي في وضع المنيو */}
              <div className="w-full border-b border-slate-200/80 shrink-0 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-4 flex items-center justify-between w-full">
                  <Link
                    href="/ar"
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative block h-8 w-32 sm:h-9 sm:w-40 transition-transform duration-300 hover:scale-[1.02]"
                    aria-label="بيت النوخذة - الرئيسية"
                  >
                  <Image
                    src="/icons/bait-al-nokhada-final-arabic-logo.svg"
                    alt="بيت النوخذة"
                    width={240}
                    height={70}
                    priority
                    className="w-auto h-12 object-contain origin-right scale-[2.0]"
                    />
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#df9d17] text-slate-800 hover:text-white transition-all cursor-pointer border border-slate-200/90 shadow-2xs hover:shadow-sm group"
                  aria-label="إغلاق القائمة"
                >
                  <span className="text-xs font-bold tracking-wide">إغلاق</span>
                  <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
                </button>
              </div>
          </div>

              {/* مساحة العرض الرئيسية */}
        <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 relative z-10 flex flex-col justify-center">

          {/* تجربة الموبايل (Native Mobile Accordion العربي) */}
          <div className="lg:hidden flex flex-col space-y-2 py-4">
            <Link
              href="/ar"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-slate-200/70 text-2xl font-black font-heading text-slate-900"
            >
              <span>الرئيسية</span>
              <span className="text-xs font-mono text-slate-400">01</span>
            </Link>

            <Link
              href="/ar/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-slate-200/70 text-2xl font-black font-heading text-slate-900"
            >
              <span>من نحن</span>
              <span className="text-xs font-mono text-slate-400">02</span>
            </Link>

            {/* أكورديون المنتجات على الموبايل */}
            <div className="border-b border-slate-200/70 pb-2">
              <button
                onClick={() =>
                  setMobileAccordion(mobileAccordion === "products" ? null : "products")
                }
                className="w-full flex items-center justify-between py-2.5 text-2xl font-black font-heading text-slate-900"
              >
                <span className="flex items-center gap-2">
                  <span>المنتجات</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/20">
                    {productsList.length}
                  </span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${mobileAccordion === "products" ? "rotate-180 text-[#df9d17]" : ""
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
                    {productsList.map((item) => {
                      const itemName = item.ar ? item.ar.name : item.name;
                      const itemImg = (item as any).image || (item as any).coverImage || (item as any).catalogImage || (item as any).heroImage || DEFAULT_PRODUCT_FALLBACK;
                      return (
                        <Link
                          key={item.slug}
                          href={`/ar/products/${item.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-[#df9d17]/50 transition-colors"
                        >
                          <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                            <Image src={itemImg} alt={itemName} fill className="object-cover" />
                          </div>
                          <span className="text-xs font-bold text-slate-800 truncate flex-1">{itemName}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 shrink-0 rotate-[-90deg]" />
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* أكورديون الحلول والخدمات على الموبايل */}
            <div className="border-b border-slate-200/70 pb-2">
              <button
                onClick={() =>
                  setMobileAccordion(mobileAccordion === "solutions" ? null : "solutions")
                }
                className="w-full flex items-center justify-between py-2.5 text-2xl font-black font-heading text-slate-900"
              >
                <span className="flex items-center gap-2">
                  <span>الحلول والخدمات</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/20">
                    {solutionsList.length}
                  </span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${mobileAccordion === "solutions" ? "rotate-180 text-[#df9d17]" : ""
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
                    {solutionsList.map((item) => {
                      const itemName = item.name;
                      const itemImg = (item as any).image || (item as any).catalogImage || (item as any).coverImage || (item as any).heroImage || DEFAULT_SOLUTION_FALLBACK;
                      return (
                        <Link
                          key={item.slug}
                          href={`/ar/solutions/${item.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-[#df9d17]/50 transition-colors"
                        >
                          <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                            <Image src={itemImg} alt={itemName} fill className="object-cover" />
                          </div>
                          <span className="text-xs font-bold text-slate-800 truncate flex-1">{itemName}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 shrink-0 rotate-[-90deg]" />
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/ar/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-slate-200/70 text-2xl font-black font-heading text-slate-900"
            >
              <span>المشاريع</span>
              <span className="text-xs font-mono text-slate-400">04</span>
            </Link>

            <Link
              href="/ar/news"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-slate-200/70 text-2xl font-black font-heading text-slate-900"
            >
              <span>المقالات والأخبار</span>
              <span className="text-xs font-mono text-slate-400">06</span>
            </Link>

            <Link
              href="/ar/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-slate-200/70 text-2xl font-black font-heading text-slate-900"
            >
              <span>تواصل معنا</span>
              <span className="text-xs font-mono text-slate-400">06</span>
            </Link>
          </div>

          {/* تجربة الديسكتوب العربية (Split Architectural Canvas) */}
          <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-14 items-center min-h-[480px]">

            {/* العمود الأيمن: الروابط الرئيسية العربية */}
            <div className="col-span-4 flex flex-col justify-center space-y-2 border-l border-slate-200/80 pl-10">
              {/* الرئيسية */}
              <Link
                href="/ar"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between py-2 text-3xl xl:text-4xl font-black tracking-tight text-[#0B1220]/80 hover:text-[#df9d17] transition-all font-heading"
              >
                <span className="group-hover:-translate-x-2 transition-transform duration-200">الرئيسية</span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17]">01</span>
              </Link>

              {/* من نحن */}
              <Link
                href="/ar/about"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between py-2 text-3xl xl:text-4xl font-black tracking-tight text-[#0B1220]/80 hover:text-[#df9d17] transition-all font-heading"
              >
                <span className="group-hover:-translate-x-2 transition-transform duration-200">من نحن</span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17]">02</span>
              </Link>

              {/*  المنتجات */}
              <div
                onMouseEnter={() => setActiveTab("products")}
                className="cursor-pointer"
              >
                <Link
                  href="/ar/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center justify-between py-2 text-3xl xl:text-4xl font-black tracking-tight transition-all font-heading ${activeTab === "products"
                    ? "text-[#df9d17] -translate-x-2"
                    : "text-[#0B1220]/80 hover:text-[#df9d17]"
                    }`}
                >
                  <span className="flex items-center gap-3">
                    المنتجات
                    <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-amber-500/10 text-[#df9d17] border border-[#df9d17]/25">
                      {productsList.length}
                    </span>
                  </span>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17]">03</span>
                </Link>
              </div>

              {/*  الحلول والخدمات */}
              <div
                onMouseEnter={() => setActiveTab("solutions")}
                className="cursor-pointer"
              >
                <Link
                  href="/ar/solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center justify-between py-2 text-3xl xl:text-4xl font-black tracking-tight transition-all font-heading ${activeTab === "solutions"
                    ? "text-[#df9d17] -translate-x-2"
                    : "text-[#0B1220]/80 hover:text-[#df9d17]"
                    }`}
                >
                  <span className="flex items-center gap-3">
                    الحلول والخدمات
                    <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-amber-500/10 text-[#df9d17] border border-[#df9d17]/25">
                      {solutionsList.length}
                    </span>
                  </span>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17]">04</span>
                </Link>
              </div>

              {/*  المشاريع */}
              <Link
                href="/ar/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between py-2 text-3xl xl:text-4xl font-black tracking-tight text-[#0B1220]/80 hover:text-[#df9d17] transition-all font-heading"
              >
                <span className="group-hover:-translate-x-2 transition-transform duration-200">المشاريع</span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17]">05</span>
              </Link>

              {/*  المقالات والأخبار */}
              <Link
                href="/ar/news"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between py-2 text-3xl xl:text-4xl font-black tracking-tight text-[#0B1220]/80 hover:text-[#df9d17] transition-all font-heading"
              >
                <span className="group-hover:-translate-x-2 transition-transform duration-200">المقالات والأخبار</span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17]">06</span>
              </Link>

              {/*  تواصل معنا */}
              <Link
                href="/ar/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between py-2 text-3xl xl:text-4xl font-black tracking-tight text-[#0B1220]/80 hover:text-[#df9d17] transition-all font-heading"
              >
                <span className="group-hover:-translate-x-2 transition-transform duration-200">تواصل معنا</span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17]">07</span>
              </Link>
            </div>

            {/* العمود الأيسر (8 أعمدة): شبكة الكروت البصرية العريضة (3 أعمدة) بالصور النقية */}
            <div className="col-span-8 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeTab === "products" && (
                  <motion.div
                    key="products-canvas-ar"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-200/90 pb-2.5">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#df9d17]">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>دليل منتجات الخيام ({productsList.length})</span>
                      </div>
                      <Link
                        href="/ar/products"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs font-semibold text-slate-500 hover:text-[#df9d17] transition-colors"
                      >
                        عرض الكتالوج بالكامل ←
                      </Link>
                    </div>

                    {/* شبكة 3 أعمدة بكروت بصرية عريضة للنسخة العربية */}
                    <div className="overflow-y-auto no-scrollbar max-h-[56vh] grid grid-cols-3 gap-3.5 pl-2 pb-16">
                      {productsList.map((item) => {
                        const itemName = item.ar ? item.ar.name : item.name;
                        const itemImg =
                          (item as any).image ||
                          (item as any).coverImage ||
                          (item as any).catalogImage ||
                          (item as any).heroImage ||
                          DEFAULT_PRODUCT_FALLBACK;

                        return (
                          <motion.div key={item.slug} variants={itemVariants}>
                            <Link
                              href={`/ar/products/${item.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="group relative block aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200/90 bg-[#F4F6F9] shadow-xs hover:shadow-lg hover:border-[#df9d17] transition-all duration-300"
                            >
                              <Image
                                src={itemImg}
                                alt={itemName}
                                fill
                                priority
                                sizes="(max-width: 1280px) 240px, 280px"
                                className="object-contain p-3 pb-8 group-hover:scale-105 transition-transform duration-500"
                              />

                              {/* العنوان والسهم داخل الكرت من الأسفل بنفس ارتفاع الـ Solutions */}
                              <div className="absolute inset-x-0 bottom-0 p-3.5 flex items-end justify-between gap-2 text-right bg-gradient-to-t from-white/95 via-white/70 to-transparent">
                                <p className="text-[13px] font-bold text-[#0B1220] group-hover:text-[#df9d17] leading-snug transition-colors font-heading">
                                  {itemName}
                                </p>
                                <span className="w-6 h-6 rounded-full bg-slate-900/5 flex items-center justify-center text-slate-700 group-hover:bg-[#df9d17] group-hover:text-white transition-all shrink-0">
                                  <ArrowUpRight className="w-3.5 h-3.5 rotate-[-90deg]" />
                                </span>
                              </div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {activeTab === "solutions" && (
                  <motion.div
                    key="solutions-canvas-ar"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-200/90 pb-2.5">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#df9d17]">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>كافة الحلول والخدمات الإنشائية ({solutionsList.length})</span>
                      </div>
                      <Link
                        href="/ar/solutions"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs font-semibold text-slate-500 hover:text-[#df9d17] transition-colors"
                      >
                        عرض كافة الحلول ←
                      </Link>
                    </div>

                    {/* شبكة 3 أعمدة بكروت بصرية عريضة للحلول العربية */}
                    <div className="overflow-y-auto no-scrollbar max-h-[56vh] grid grid-cols-3 gap-3.5 pl-2 pb-16">
                      {solutionsList.map((item) => {
                        const itemName = item.name;
                        const itemImg =
                          (item as any).image ||
                          (item as any).catalogImage ||
                          (item as any).coverImage ||
                          (item as any).heroImage ||
                          DEFAULT_SOLUTION_FALLBACK;

                        return (
                          <motion.div key={item.slug} variants={itemVariants}>
                            <Link
                              href={`/ar/solutions/${item.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="group relative block aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-xs hover:shadow-xl hover:border-[#df9d17] transition-all duration-300"
                            >
                              <Image
                                src={itemImg}
                                alt={itemName}
                                fill
                                priority
                                sizes="(max-width: 1280px) 240px, 280px"
                                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                              />
                              {/* تدرج سفلي لإبراز النص العربي */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                              <div className="absolute inset-x-0 bottom-0 p-3.5 flex items-end justify-between gap-2 text-right">
                                <p className="text-[13px] font-bold text-white group-hover:text-[#df9d17] leading-snug transition-colors font-heading">
                                  {itemName}
                                </p>
                                <span className="w-6 h-6 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#df9d17] group-hover:text-black transition-all shrink-0">
                                  <ArrowUpRight className="w-3.5 h-3.5 rotate-[-90deg]" />
                                </span>
                              </div>
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
        <div className="w-full border-t border-slate-200/80 bg-[#FDFCF7] shrink-0 relative z-20">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 pb-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-6">
                <a href="tel:+971558850631" className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#df9d17] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#df9d17]" />
                  <span dir="ltr">+971 55 885 0631</span>
                </a>

                <a href="https://wa.me/97143444091" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#df9d17] transition-colors">
                  <MessageCircle className="w-3.5 h-3.5 text-[#df9d17]" />
                  <span dir="ltr">+971 4 344 4091</span>
                </a>

                <a href="mailto:info@baitalnokhada.com" className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#df9d17] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#df9d17]" />
                  <span dir="ltr">info@baitalnokhada.com</span>
                </a>

                <a href="mailto:info.Ksa@baitalnokhada.com" className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#df9d17] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#df9d17]" />
                  <span dir="ltr">info.Ksa@baitalnokhada.com</span>
                </a>
              </div>

              <a
                href="https://www.google.com/maps/place/%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D9%86%D9%88%D8%AE%D8%B0%D8%A9+-+BAITALNOKHADA+TENTS+FACTORY+-HEAD+OFFICE+DUBAI%E2%80%AD/@24.934106,55.065001,10z/data=!4m6!3m5!1s0x3e5f0da58ab6364d:0xb668e74c8c5b934b!8m2!3d24.9341063!4d55.065001!16s%2Fg%2F11k3_kdvx5?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#df9d17] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#df9d17]" />
                <span>تكنوبارك، ميناء جبل علي، دبي، الإمارات</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2.5 border-t border-slate-200/60 text-[11px] text-slate-500">
              <p className="font-semibold text-slate-600">
                © 2026 مصنع بيت النوخذة للخيام. جميع الحقوق محفوظة.
              </p>

              <div className="flex items-center gap-2">
                {[
                  { label: "Facebook", href: "https://facebook.com", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { label: "Instagram", href: "https://instagram.com", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                  { label: "LinkedIn", href: "https://linkedin.com", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                  { label: "TikTok", href: "https://tiktok.com", path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
                  { label: "YouTube", href: "https://youtube.com", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                  { label: "X", href: "https://x.com", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { label: "Pinterest", href: "https://www.pinterest.com/baitalnokhada1/", path: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" },
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
        </div>

      </motion.div>
    </div >
        )
}
      </AnimatePresence >
    </>
  );
}
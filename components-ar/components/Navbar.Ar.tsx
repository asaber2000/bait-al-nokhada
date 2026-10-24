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
  ChevronLeft,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/app/lib/sanity";
import { productsDatabase } from "@/app/data/products.Ar";
import { solutionsDatabase } from "@/app/data/solutions.Ar";

export default function ArabicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuView, setMenuView] = useState<"main" | "products" | "solutions">("main");
  const [isScrolled, setIsScrolled] = useState(false);

  const [solutionsList, setSolutionsList] = useState<any[]>(solutionsDatabase);
  const [productsList, setProductsList] = useState<any[]>(productsDatabase);

  // صورة المعاينة السينمائية الافتراضية
  const defaultPreview = {
    title: "بيت النوخذة للخيام والمظلات",
    subtitle: "ريادة الصناعات الإنشائية والخيام المعمارية منذ 1997",
    category: "هياكل معمارية وخيام ملكية فاخرة",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Exhibition-tent-gulfood.webp",
  };

  const [preview, setPreview] = useState(defaultPreview);

  useEffect(() => {
    async function fetchLiveNavDataAr() {
      try {
        const sanitySolutions: any[] = await client.fetch(
          `*[_type in ["solution", "solutionAr"] && defined(titleAr) && defined(slug.current)]{
            "name": titleAr,
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
          `*[_type in ["product", "productAr", "productsAr"] && defined(slug.current)]{
            "name": coalesce(titleAr, name),
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
        // Fallback silently to local database
      }
    }

    fetchLiveNavDataAr();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      setMenuView("main");
      setPreview(defaultPreview);
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

  const navLinks = [
    { title: "الرئيسية", href: "/ar" },
    { title: "من نحن", href: "/ar/about" },
    { title: "المشاريع", href: "/ar/projects" },
    { title: "الأخبار والمقالات", href: "/ar/news" },
    { title: "تواصل معنا", href: "/ar/contact" },
  ];

  return (
    <>
      {/* الترويسة الرئيسية للموقع */}
      <header
        dir="rtl"
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-center transition-all duration-300 transform-gpu px-6 sm:px-10 ${
          isScrolled
            ? "bg-[#FDFCF7]/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] py-3"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* اللوجو العربي */}
          <Link href="/ar" className="flex items-center group transition-transform duration-300">
            <div className="relative overflow-visible flex items-center justify-end">
              <Image
                src="/icons/bait-al-nokhada-final-arabic-logo.svg"
                alt="بيت النوخذة"
                width={280}
                height={80}
                priority
                className={`w-auto object-contain transition-all duration-300 origin-right scale-[2.2] sm:scale-[2.6] ${
                  isScrolled ? "h-12" : "h-15"
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

            {/* فاصل معماري ناعم */}
            <span className="w-[1px] h-4 bg-slate-200 shrink-0" />

            {/* زر القائمة العربي */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-2 pr-3 pl-4 py-1.5 rounded-full text-slate-900 hover:text-[#df9d17] transition-colors cursor-pointer group"
              aria-label="فتح القائمة"
            >
              <div className="flex flex-col gap-[3px] items-start justify-center w-3.5">
                <span className="w-3.5 h-[1.5px] bg-slate-900 group-hover:bg-[#df9d17] rounded-full transition-all duration-300 group-hover:w-2" />
                <span className="w-2 h-[1.5px] bg-[#e6b224] rounded-full transition-all duration-300 group-hover:w-3.5" />
              </div>
              <span className="font-extrabold text-[12px] tracking-wider leading-none">
                القائمة
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* المنيو السينمائي الفاخر للشاشة الكاملة (النسخة العربية) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            data-lenis-prevent
            dir="rtl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] bg-[#FDFCF7]/98 backdrop-blur-2xl text-[#0B1220] flex flex-col justify-between overflow-y-auto lg:overflow-hidden select-none"
          >
            {/* خطوط شبكية هندسية خافتة في الخلفية */}
            <div
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#df9d17]/5 blur-[200px] rounded-full pointer-events-none" />

            {/* الهيدر العلوي للمنيو */}
            <div className="w-full px-6 sm:px-12 lg:px-16 pt-7 pb-5 border-b border-slate-200/80 flex items-center justify-between shrink-0 relative z-20">
              <div className="flex items-center gap-3">
                <div className="relative overflow-visible flex items-center justify-end">
                  <Image
                    src="/icons/bait-al-nokhada-final-arabic-logo.svg"
                    alt="بيت النوخذة"
                    width={280}
                height={80}
                priority
                className={`w-auto object-contain transition-all duration-300 origin-right scale-[2.2] sm:scale-[2.6]`}
                  />
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#df9d17] text-slate-800 hover:text-white transition-all cursor-pointer border border-slate-200 shadow-xs group"
                aria-label="إغلاق القائمة"
              >
                <span className="text-xs font-mono font-bold tracking-widest uppercase">ESC</span>
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* المسرح الرئيسي: تقسيم 50% / 50% متناسق */}
            <div className="w-full flex-1 px-6 sm:px-12 lg:px-16 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10 overflow-hidden">
              
              {/* النصف الأيمن: الروابط المعمارية بالعربية */}
              <div className="lg:col-span-6 flex flex-col justify-center h-full max-h-[540px] border-b lg:border-b-0 lg:border-l border-slate-200/80 pl-0 lg:pl-12">
                <AnimatePresence mode="wait">
                  {menuView === "main" && (
                    <motion.div
                      key="main-nav-ar"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-1.5 sm:space-y-2.5 divide-y divide-slate-200/60"
                    >
                      {/* الرئيسية */}
                      <div className="pt-2">
                        <Link
                          href="/ar"
                          onClick={() => setMobileMenuOpen(false)}
                          onMouseEnter={() =>
                            setPreview({
                              title: "المقر الرئيسي للمصنع",
                              subtitle: "مجمع صناعي متكامل في دبي وأبوظبي بمساحة 40,000 متر مربع",
                              category: "دليل بيت النوخذة",
                              image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Exhibition-tent-gulfood.webp",
                            })
                          }
                          className="group flex items-center justify-between py-2.5 text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0B1220] hover:text-[#df9d17] transition-all font-heading"
                        >
                          <span className="group-hover:-translate-x-3 transition-transform duration-200">
                            الرئيسية
                          </span>
                          <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17] tracking-widest">
                            01
                          </span>
                        </Link>
                      </div>

                      {/* المنتجات */}
                      <div className="pt-2">
                        <button
                          onClick={() => setMenuView("products")}
                          onMouseEnter={() =>
                            setPreview({
                              title: "خيام وهياكل ألمنيوم حديثة",
                              subtitle: "معتمدة وفق معايير الجودة والسلامة الألمانية DIN",
                              category: "14 فئة منتجات متخصصة",
                              image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/Luxury-Tents-for-Events.webp",
                            })
                          }
                          className="w-full group flex items-center justify-between py-2.5 text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0B1220] hover:text-[#df9d17] transition-all font-heading text-right cursor-pointer"
                        >
                          <span className="group-hover:-translate-x-3 transition-transform duration-200 flex items-center gap-3">
                            المنتجات
                            <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-slate-200/80 text-[#df9d17]">
                              {productsList.length}
                            </span>
                          </span>
                          <ChevronLeft className="w-6 h-6 text-[#0B1220]/30 group-hover:text-[#df9d17] group-hover:-translate-x-1 transition-all" />
                        </button>
                      </div>

                      {/* الحلول والخدمات */}
                      <div className="pt-2">
                        <button
                          onClick={() => setMenuView("solutions")}
                          onMouseEnter={() =>
                            setPreview({
                              title: "حلول إنشائية وهندسية متكاملة",
                              subtitle: "قاعات معارض مؤقتة ومستودعات ومشاريع ضخمة تسليم مفتاح",
                              category: "12 قطاع حلول هندسية",
                              image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/exhibition-tents-UAE.webp",
                            })
                          }
                          className="w-full group flex items-center justify-between py-2.5 text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0B1220] hover:text-[#df9d17] transition-all font-heading text-right cursor-pointer"
                        >
                          <span className="group-hover:-translate-x-3 transition-transform duration-200 flex items-center gap-3">
                            الحلول والخدمات
                            <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-slate-200/80 text-[#df9d17]">
                              {solutionsList.length}
                            </span>
                          </span>
                          <ChevronLeft className="w-6 h-6 text-[#0B1220]/30 group-hover:text-[#df9d17] group-hover:-translate-x-1 transition-all" />
                        </button>
                      </div>

                      {/* المشاريع */}
                      <div className="pt-2">
                        <Link
                          href="/ar/projects"
                          onClick={() => setMobileMenuOpen(false)}
                          onMouseEnter={() =>
                            setPreview({
                              title: "مشاريع ودراسات حالة بارزة",
                              subtitle: "قمم حكومية، معارض دولية، وفعاليات كبرى في الإمارات ودول الخليج",
                              category: "أكثر من 5,000 مشروع منجز",
                              image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/Luxury-Tents-for-Events.webp",
                            })
                          }
                          className="group flex items-center justify-between py-2.5 text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0B1220] hover:text-[#df9d17] transition-all font-heading"
                        >
                          <span className="group-hover:-translate-x-3 transition-transform duration-200">
                            المشاريع
                          </span>
                          <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17] tracking-widest">
                            04
                          </span>
                        </Link>
                      </div>

                      {/* من نحن */}
                      <div className="pt-2">
                        <Link
                          href="/ar/about"
                          onClick={() => setMobileMenuOpen(false)}
                          onMouseEnter={() =>
                            setPreview({
                              title: "إرثنا الهندسي وتاريخنا",
                              subtitle: "أكثر من 27 عاماً من الريادة في تصنيع وتركيب الخيام والمنشآت المشدودة",
                              category: "مصنع معتمد بمساحات هائلة",
                              image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Exhibition-tent-gulfood.webp",
                            })
                          }
                          className="group flex items-center justify-between py-2.5 text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0B1220] hover:text-[#df9d17] transition-all font-heading"
                        >
                          <span className="group-hover:-translate-x-3 transition-transform duration-200">
                            من نحن
                          </span>
                          <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17] tracking-widest">
                            05
                          </span>
                        </Link>
                      </div>

                      {/* تواصل معنا */}
                      <div className="pt-2">
                        <Link
                          href="/ar/contact"
                          onClick={() => setMobileMenuOpen(false)}
                          className="group flex items-center justify-between py-2.5 text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0B1220] hover:text-[#df9d17] transition-all font-heading"
                        >
                          <span className="group-hover:-translate-x-3 transition-transform duration-200">
                            تواصل معنا
                          </span>
                          <span className="text-xs font-mono text-slate-400 group-hover:text-[#df9d17] tracking-widest">
                            06
                          </span>
                        </Link>
                      </div>
                    </motion.div>
                  )}

                  {/* قائمة المنتجات الفرعية الشاملة بالعربية */}
                  {menuView === "products" && (
                    <motion.div
                      key="products-nav-ar"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <button
                        onClick={() => setMenuView("main")}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#df9d17] hover:text-[#0B1220] tracking-wider mb-2 cursor-pointer transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span>الرجوع للقائمة الرئيسية</span>
                      </button>

                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1220] flex items-center gap-2">
                          <Building className="w-5 h-5 text-[#df9d17]" />
                          <span>كافة منتجات الخيام ({productsList.length})</span>
                        </h3>
                        <Link
                          href="/ar/products"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-xs font-semibold text-[#df9d17] hover:underline"
                        >
                          عرض الكتالوج بالكامل
                        </Link>
                      </div>

                      <div className="overflow-y-auto no-scrollbar max-h-[380px] grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1 pl-2">
                        {productsList.map((item, idx) => {
                          const itemName = item.ar ? item.ar.name : item.name;
                          return (
                            <Link
                              key={item.slug}
                              href={`/ar/products/${item.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              onMouseEnter={() =>
                                setPreview({
                                  title: itemName,
                                  subtitle: "هياكل خيام معمارية فائقة الجودة والمتانة",
                                  category: "مواصفات وتفاصيل المنتج",
                                  image:
                                    (item as any).image ||
                                    "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/Luxury-Tents-for-Events.webp",
                                })
                              }
                              className="group flex items-center justify-between py-2 border-b border-slate-200/50 hover:border-[#df9d17] text-slate-800 hover:text-[#df9d17] transition-all"
                            >
                              <div className="flex items-center gap-3 truncate">
                                <span className="text-[11px] font-mono text-slate-400 group-hover:text-[#df9d17]">
                                  {String(idx + 1).padStart(2, "0")}
                                </span>
                                <span className="text-sm font-semibold truncate tracking-tight">
                                  {itemName}
                                </span>
                              </div>
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#df9d17] transition-all rotate-[-90deg]" />
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* قائمة الحلول الفرعية الشاملة بالعربية */}
                  {menuView === "solutions" && (
                    <motion.div
                      key="solutions-nav-ar"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <button
                        onClick={() => setMenuView("main")}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#df9d17] hover:text-[#0B1220] tracking-wider mb-2 cursor-pointer transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span>الرجوع للقائمة الرئيسية</span>
                      </button>

                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1220] flex items-center gap-2">
                          <Layers className="w-5 h-5 text-[#df9d17]" />
                          <span>الحلول والخدمات الإنشائية ({solutionsList.length})</span>
                        </h3>
                        <Link
                          href="/ar/solutions"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-xs font-semibold text-[#df9d17] hover:underline"
                        >
                          عرض كافة الحلول
                        </Link>
                      </div>

                      <div className="overflow-y-auto no-scrollbar max-h-[380px] grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1 pl-2">
                        {solutionsList.map((item, idx) => (
                          <Link
                            key={item.slug}
                            href={`/ar/solutions/${item.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            onMouseEnter={() =>
                              setPreview({
                                title: item.name,
                                subtitle: "حلول تسليم مفتاح وأنظمة تكييف وتجهيز متكاملة",
                                category: "حلول هندسية متخصصة",
                                image:
                                  (item as any).image ||
                                  "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Exhibition-tent-gulfood.webp",
                              })
                            }
                            className="group flex items-center justify-between py-2 border-b border-slate-200/50 hover:border-[#df9d17] text-slate-800 hover:text-[#df9d17] transition-all"
                          >
                            <div className="flex items-center gap-3 truncate">
                              <span className="text-[11px] font-mono text-slate-400 group-hover:text-[#df9d17]">
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              <span className="text-sm font-semibold truncate tracking-tight">
                                {item.name}
                              </span>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#df9d17] transition-all rotate-[-90deg]" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* النصف الأيسر: الشاشة السينمائية بكامل العرض والارتفاع */}
              <div className="hidden lg:flex lg:col-span-6 w-full h-full items-center justify-center min-w-0">
                <div className="relative w-full h-[460px] xl:h-[500px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-[#0B1220]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={preview.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.12, ease: "linear" }}
                      className="relative w-full h-full will-change-opacity"
                    >
                      <Image
                        src={preview.image}
                        alt={preview.title}
                        fill
                        loading="lazy"
                        unoptimized
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />

                      {/* تدرج خافت في الأسفل لإبراز العنوان */}
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* عنوان نقي وواضح فقط */}
                      <div className="absolute bottom-6 right-8 left-8 z-10 text-right">
                        <h4 className="text-xl xl:text-2xl font-black text-white drop-shadow-md tracking-tight truncate">
                          {preview.title}
                        </h4>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>

            {/* الشريط السفلي: متوازن وفخم */}
            <div className="w-full px-6 sm:px-12 lg:px-16 pt-4 pb-7 border-t border-slate-200/80 bg-[#FDFCF7] shrink-0 space-y-3.5 relative z-20">

              {/* السطر الأول: قنوات التواصل والعنوان الرسمي */}
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

                {/* العنوان */}
                <a
                  href="https://www.google.com/maps/place/%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D9%86%D9%88%D8%AE%D8%B0%D8%A9+-+BAITALNOKHADA+TENTS+FACTORY+-HEAD+OFFICE+DUBAI%E2%80%AD/@24.934106,55.065001,10z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#df9d17] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#df9d17] shrink-0" />
                  <span>قطعة رقم TP 010102 - تكنوبارك، ميناء جبل علي، دبي، الإمارات</span>
                </a>
              </div>

              {/* السطر الثاني: الحقوق + أزرار السوشيال ميديا */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500">
                <p className="font-semibold text-slate-600">
                  © 2026 مصنع بيت النوخذة للخيام. جميع الحقوق محفوظة.
                </p>

                {/* أيقونات السوشيال ميديا (8 منصات كاملة) */}
                <div className="flex items-center gap-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-slate-200/90 flex items-center justify-center text-slate-700 hover:bg-[#df9d17] hover:border-[#df9d17] hover:text-white transition-all duration-300 shadow-2xs hover:scale-105"
                    aria-label="Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-slate-200/90 flex items-center justify-center text-slate-700 hover:bg-[#df9d17] hover:border-[#df9d17] hover:text-white transition-all duration-300 shadow-2xs hover:scale-105"
                    aria-label="Instagram"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-slate-200/90 flex items-center justify-center text-slate-700 hover:bg-[#df9d17] hover:border-[#df9d17] hover:text-white transition-all duration-300 shadow-2xs hover:scale-105"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>

                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-slate-200/90 flex items-center justify-center text-slate-700 hover:bg-[#df9d17] hover:border-[#df9d17] hover:text-white transition-all duration-300 shadow-2xs hover:scale-105"
                    aria-label="TikTok"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-slate-200/90 flex items-center justify-center text-slate-700 hover:bg-[#df9d17] hover:border-[#df9d17] hover:text-white transition-all duration-300 shadow-2xs hover:scale-105"
                    aria-label="YouTube"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  </a>

                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-slate-200/90 flex items-center justify-center text-slate-700 hover:bg-[#df9d17] hover:border-[#df9d17] hover:text-white transition-all duration-300 shadow-2xs hover:scale-105"
                    aria-label="X"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>

                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-slate-200/90 flex items-center justify-center text-slate-700 hover:bg-[#df9d17] hover:border-[#df9d17] hover:text-white transition-all duration-300 shadow-2xs hover:scale-105"
                    aria-label="Pinterest"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.63-.13-1.6.03-2.29l1.1-4.66s-.28-.56-.28-1.39c0-1.3.75-2.27 1.7-2.27.8 0 1.19.6 1.19 1.32 0 .81-.51 2.01-.78 3.13-.22.94.47 1.71 1.4 1.71 1.68 0 2.97-1.77 2.97-4.32 0-2.26-1.62-3.84-3.94-3.84-2.69 0-4.26 2.02-4.26 4.1 0 .81.31 1.68.7 2.16.08.1.09.18.06.3-.08.33-.26 1.06-.3 1.2-.05.2-.16.24-.37.15-1.38-.64-2.24-2.65-2.24-4.27 0-3.48 2.53-6.67 7.29-6.67 3.83 0 6.8 2.73 6.8 6.38 0 3.8-2.4 6.87-5.73 6.87-1.12 0-2.17-.58-2.53-1.27l-.69 2.63c-.25.96-.92 2.16-1.37 2.89A12 12 0 1 0 12 0z" /></svg>
                  </a>

                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-slate-200/90 flex items-center justify-center text-slate-700 hover:bg-[#df9d17] hover:border-[#df9d17] hover:text-white transition-all duration-300 shadow-2xs hover:scale-105"
                    aria-label="Behance"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.171 3-3.405 0-5.555-2.162-5.555-5.38 0-3.329 2.37-5.62 5.4-5.62 3.224 0 4.956 2.18 4.956 5.299 0 .533-.075 1.056-.075 1.056h-7.854c.114 1.822 1.306 2.85 2.899 2.85 1.196 0 2.053-.525 2.541-1.205h2.859zm-2.964-3.646c-.053-1.424-.925-2.314-2.256-2.314-1.341 0-2.21.89-2.367 2.314h4.623zm-14.762 3.646h-3v-12h3c2.757 0 4.5 1.449 4.5 3.5 0 1.456-.837 2.607-2.115 3.097 1.605.429 2.615 1.777 2.615 3.403 0 2.348-1.893 4-5 4zm-1-7h1c1.242 0 2-.636 2-1.5s-.758-1.5-2-1.5h-1v3zm0 5h1c1.381 0 2.5-.724 2.5-1.75s-1.119-1.75-2.5-1.75h-1v3.5z" /></svg>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
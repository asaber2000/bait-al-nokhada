"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    id: "01",
    title: "Exhibition Tents",
    desc: "Discover premium exhibition tents for events, trade shows, and promotions. Sale & rental available across UAE & KSA. Trusted tent supplier since 1997.",
    specs: "Up to 60m Clear-Span • High Wind Load",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Exhibition-tent-gulfood.webp",
    href: "/solutions/exhibition-tents",
  },
  {
    id: "02",
    title: "Event Tents",
    desc: "Discover our premium event tents for rent across the UAE, KSA, and GCC—featuring complete branding capabilities, elegant customization, and professional on-site setup services tailored to your event's needs.",
    specs: "Multi-Tiered Staging • Heavy-Duty HVAC Integration",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/Luxury-Tents-for-Events.webp",
    href: "/solutions/event-tents",
  },
  {
    id: "03",
    title: "Wedding Tents",
    desc: "Bait Al Nokhada provides elegant, customized wedding tent rental for outdoor ceremonies in UAE & KSA. Partner with leading outdoor tent experts for your unforgettable celebration in Dubai & Riyadh.",
    specs: "Acoustic Glass Walls • Royal Drapery & Chandeliers",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wedding/Wedding-tent-for-rent-Dubai.webp",
    href: "/solutions/wedding-tents",
  },
  {
    id: "04",
    title: "Sales Center Tents",
    desc: "Custom-built temporary sales center tents designed for real estate developers and commercial launches, featuring premium glass walls, luxury interiors, and full climate control.",
    specs: "Panoramic Glass Façades • Luxury Interior Fit-Out",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/AL%20MARWAN3.webp",
    href: "/solutions/sales-center-tents",
  },
  {
    id: "05",
    title: "Warehouse Tents",
    desc: "Bait Al Nokhada offers secure, efficient warehouse & storage tents for rent & sale in UAE & KSA. 30+ years in tent manufacturing ensure durable, weatherproof solutions for your goods.",
    specs: "Rapid Deployment • German DIN Safety Standards",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/warehouse/warehouse.webp",
    href: "/solutions/warehouse-tents",
  },
  {
    id: "06",
    title: "Labour Break Time Tents",
    desc: "Heavy-duty, insulated labour rest tents engineered for construction sites and industrial facilities, fully compliant with UAE and regional worker welfare regulations.",
    specs: "Thermal Shield PVC • Civil Defense Compliant",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/labour/labour-tent-for-sale.webp",
    href: "/solutions/labour-break-time-tents",
  },
  {
    id: "07",
    title: "Sports Tents",
    desc: "Our sports tents are specifically designed to provide robust shelter and optimal functionality for athletes, enthusiastic spectators, and essential staff in any sporting environment.",
    specs: "Thermal Roof Insulation • FIFA / Sports Specs",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Sports/2.webp",
    href: "/solutions/sports-tents",
  },
  {
    id: "08",
    title: "Ramadan Tents",
    desc: "Discover luxurious, fully customized Ramadan tents across the UAE and KSA—perfect for Iftar events, suhoor nights, and cultural gatherings. Our traditional and modern tents combine authentic Arab aesthetics with premium comfort and dedicated service.",
    specs: "Custom Interior Majlis • Fire Retardant Class A",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Ramadan/large-ramadan-tents-UAE.webp",
    href: "/solutions/ramadan-tents",
  },
  {
    id: "09",
    title: "Mosque Tents",
    desc: "Discover spacious and fully equipped temporary mosque tents for daily prayers, Friday gatherings, and Ramadan. Designed with climate control, premium carpeting, and dedicated ablution areas across UAE & KSA.",
    specs: "Anti-Bacterial Carpeting • Complete Climate Control",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Mosque+Tents/mosque-img2.webp",
    href: "/solutions/mosque-tents",
  },
  {
    id: "10",
    title: "Funeral Tents",
    desc: "Bait Al Nokhada provides dignified, fully equipped funeral tents with 24/7 rapid setup and installation across UAE & KSA. Complete with comfortable seating, powerful air conditioning, and respectful lighting.",
    specs: "24/7 Fast Setup • Full Climate & Seating Setup",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Funeral+Tents/Funeral-Tents.webp",
    href: "/solutions/funeral-tents",
  },
];

export default function SolutionsSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeItem = solutions[selectedIdx];

  // تحميل مسبق صامت لصور الحلول في الخلفية لمنع ظهور أي فراغ أسود
  useEffect(() => {
    const timer = setTimeout(() => {
      solutions.slice(1).forEach((item) => {
        const img = new window.Image();
        img.src = item.image;
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-10 lg:py-14 bg-[#FDFCF7] border-t border-slate-200/60 overflow-hidden">
      {/* خلفية هندسية خافتة */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#e6b224 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#df9d17]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* الهيدر العلوي */}
      <div className="site-container mb-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200/80 pb-6">
          <div className="space-y-2.5 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PREMIER TENT SOLUTIONS</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1220] tracking-tight leading-tight">
              Our Solutions,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
                For Every Event
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:pt-4">
            <p className="text-slate-600 text-sm max-w-sm font-normal leading-relaxed">
              Explore our comprehensive range of clear-span modular tents, warehouse structures, and custom event halls.
            </p>

            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#df9d17] text-slate-800 hover:text-white border border-slate-200 hover:border-[#df9d17] shadow-xs hover:shadow-md transition-all text-xs font-bold uppercase tracking-widest shrink-0"
            >
              <span>ALL STRUCTURAL SOLUTIONS</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="site-container relative z-10 space-y-5">
        {/*  شريط اختيار الحلول بالكامل بدون سكرول داخلي */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {solutions.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={item.id}
                onMouseEnter={() => setSelectedIdx(idx)}
                onClick={() => setSelectedIdx(idx)}
                className={`relative px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 cursor-pointer flex items-center gap-2 border ${isSelected
                    ? "text-white border-[#df9d17]"
                    : "bg-white text-slate-700 border-slate-200/90 hover:border-[#df9d17]/50 hover:text-[#0B1220]"
                  }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeSolutionPill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-[#df9d17] shadow-md shadow-[#df9d17]/25"
                  />
                )}
                <span className={`relative z-10 font-mono text-[11px] ${isSelected ? "text-white/90" : "text-[#df9d17]"}`}>
                  {item.id}
                </span>
                <span className="relative z-10">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* 2. مسرح العرض المعماري العريض */}
        <div className="rounded-3xl bg-white border border-slate-200/80 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* الجانب الأيسر: الصورة العريضة (7 أعمدة) */}
            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] lg:min-h-[440px] bg-slate-900 overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    priority
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </motion.div>
              </AnimatePresence>

              {/* تدرج خفيف لإبراز الشارات */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* العداد العلوي */}
              <div className="absolute top-5 left-5 z-20">
                <span className="font-mono text-xs font-bold tracking-widest text-[#0B1220] bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                  {activeItem.id} / {solutions.length}
                </span>
              </div>

              {/* شريط المواصفات الهندسية أسفل الصورة */}
              <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 text-white text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#fbc200] shrink-0" />
                  <span>{activeItem.specs}</span>
                </div>
              </div>
            </div>

            {/* الجانب الأيمن: بطاقة التفاصيل الهندسية (5 أعمدة) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative bg-white">
              {/* رقم مائي هندسي كبير في الخلفية */}
              <span className="absolute top-4 right-6 font-mono text-7xl sm:text-8xl font-black text-slate-100 select-none pointer-events-none">
                {activeItem.id}
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="space-y-5 relative z-10"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FDFCF7] border border-[#df9d17]/30 text-[#df9d17] text-[11px] font-mono font-bold uppercase tracking-wider">
                    <span>ARCHITECTURAL SOLUTION • {activeItem.id}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#0B1220] tracking-tight leading-tight">
                    {activeItem.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {activeItem.desc}
                  </p>

                  {/* إبراز المواصفة الفنية داخل البطاقة */}
                  <div className="p-3.5 rounded-2xl bg-[#FDFCF7] border border-slate-200/80 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#df9d17]/15 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#df9d17]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                        KEY SPECIFICATION
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#0B1220]">
                        {activeItem.specs}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* أزرار الإجراء في الأسفل */}
              <div className="pt-8 mt-6 border-t border-slate-100 flex flex-wrap items-center gap-3 relative z-10">
                <Link
                  href={activeItem.href}
                  className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B1220] hover:bg-[#df9d17] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <span>Explore Solution</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
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
    desc: "Bait Al Nokhada provides dignified, fully equipped funeral tents with 24/7 rapid setup and installation across UAE & KSA[cite: 14]. Complete with comfortable seating, powerful air conditioning, and respectful lighting[cite: 14].",
    specs: "24/7 Fast Setup • Full Climate & Seating Setup",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Funeral+Tents/Funeral-Tents.webp",
    href: "/solutions/funeral-tents",
  },
];

export default function SolutionsSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeItem = solutions[selectedIdx];

  return (
    <section className="relative py-20 lg:py-24 bg-[#FDFCF7] border-t border-slate-200/60 overflow-hidden">
      {/* خلفية هندسية خافتة */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#e6b224 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#df9d17]/5 blur-[160px] rounded-full pointer-events-none" />
      {/* الهيدر العلوي */}
      <div className="site-container mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
              PREMIER TENT SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1220] tracking-tight leading-snug">
                 Our Solutions,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
                 For Every Event
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-slate-600 text-sm max-w-md font-light leading-relaxed">
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

      {/* شاشة العرض التفاعلية المنقسمة */}
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* الجانب الأيسر: شاشة عرض الصورة السينمائية */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-slate-900 group">

              <AnimatePresence initial={false}>
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, ease: "linear" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center scale-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* شريط معلومات فوق الصورة */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20 pointer-events-none">
                <span className="font-mono text-xs tracking-widest text-slate-800 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 shadow-xs">
                  {activeItem.id} / 11
                </span>
              </div>

              {/* زر Explore فقط */}
              <div className="absolute bottom-5 right-5 z-20">
                <Link
                  href={activeItem.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 hover:bg-[#df9d17] backdrop-blur-md border border-slate-200 hover:border-[#df9d17] text-slate-900 hover:text-white transition-all text-xs font-bold uppercase tracking-widest shadow-md"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

          {/* الجانب الأيمن: قائمة الحلول الستة */}
          <div
            data-lenis-prevent
            className="lg:col-span-6 flex flex-col p-3 sm:p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs max-h-[540px] overflow-y-auto no-scrollbar divide-y divide-slate-100">
            {solutions.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setSelectedIdx(idx)}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group py-4 transition-all duration-300 cursor-pointer flex flex-col justify-center px-4 rounded-xl ${isSelected ? "bg-white border border-[#df9d17]/40 shadow-sm" : "hover:bg-white/60"}
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className={`font-mono text-sm font-bold transition-colors ${isSelected ? "text-[#df9d17]" : "text-slate-400 group-hover:text-slate-600"}
                        }`}>
                        {item.id}
                      </span>
                      <h3 className={`text-lg sm:text-xl font-bold tracking-wide transition-colors ${isSelected ? "text-[#0B1220] font-black" : "text-slate-600 group-hover:text-[#0B1220]"}
                        }`}>
                        {item.title}
                      </h3>
                    </div>

                    <div className={`p-1.5 rounded-full border transition-all ${isSelected
                      ? "border-[#df9d17] bg-[#df9d17]/15 text-[#df9d17] rotate-45"
                      : "border-slate-200 bg-white text-slate-400 group-hover:text-slate-600"
                      }`}>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300" />
                    </div>
                  </div>

                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-8 pt-2"
                    >
                      <p className="text-slate-600 font-normal text-xs sm:text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
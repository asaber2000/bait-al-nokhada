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
    desc: "Custom large-scale pavilions for international expos, trade fairs, and airshows across the GCC region.",
    specs: "Up to 60m Clear-Span • High Wind Load",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Exhibitions/Exhibition-tent-gulfood.webp",
    href: "/solutions/exhibition-tents",
  },
  {
    id: "02",
    title: "Event Tents",
    desc: "Iconic corporate venues and summits setups featuring smart lighting, acoustic insulation, and full HVAC.",
    specs: "Multi-Tiered Staging • Heavy-Duty HVAC Integration",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/Luxury-Tents-for-Events.webp",
    href: "/solutions/event-tents",
  },
  {
    id: "03",
    title: "Wedding Tents",
    desc: "Bespoke royal marquees crafted for outdoor ceremonies in UAE & KSA, offering customized luxury ambiance.",
    specs: "Acoustic Glass Walls • Royal Drapery & Chandeliers",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Wedding/Wedding-tent-for-rent-Dubai.webp",
    href: "/solutions/wedding-tents",
  },
  {
    id: "04",
    title: "Sales Center Tents",
    desc: "Architectural semi-permanent structures customized for prime real estate launches and immersive client lounges.",
    specs: "Panoramic Glass Façades • Luxury Interior Fit-Out",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AL%20MARWAN3.webp",
    href: "/solutions/sales-center-tents",
  },
  {
    id: "05",
    title: "Warehouse Tents",
    desc: "Heavy-duty clear-span temporary and permanent storage tents engineered for logistics and industrial operations.",
    specs: "Rapid Deployment • German DIN Safety Standards",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/warehouse/warehouse.webp",
    href: "/solutions/warehouse-tents",
  },
  {
    id: "06",
    title: "Labour Break Time Tents",
    desc: "Compliant shaded rest pavilions with heavy-duty cooling systems designed for workforce welfare in extreme heat.",
    specs: "Thermal Shield PVC • Civil Defense Compliant",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/labour/labour-tent-for-sale.webp",
    href: "/solutions/labour-break-tents",
  },
  {
    id: "07",
    title: "Sports Tents",
    desc: "Engineered high-span structures providing climate control and certified safety for stadiums, padel courts, and academies.",
    specs: "Thermal Roof Insulation • FIFA / Sports Specs",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Sports/2.webp",
    href: "/solutions/sports-tents",
  },
  {
    id: "08",
    title: "Ramadan Tents",
    desc: "Authentic Arabic heritage marquees merged with modern luxury for corporate Iftar banquets and royal majlis gatherings.",
    specs: "Custom Interior Majlis • Fire Retardant Class A",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Ramadan/large-ramadan-tents-UAE.webp",
    href: "/solutions/ramadan-tents",
  },
  {
    id: "09",
    title: "Mosque Tents",
    desc: "Spacious temporary prayer structures featuring acoustic balance, dedicated ablution annexes, and mihrab orientation.",
    specs: "Anti-Bacterial Carpeting • High-Volume Climate Flow",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Mosque+Tents/mosque-img2.webp",
    href: "/solutions/mosque-tents",
  },
  {
    id: "10",
    title: "Funeral Tents",
    desc: "Dignified, fully equipped temporary mourning halls deployed promptly with complete climate control and catering setup.",
    specs: "24/7 Rapid Installation • Acoustic & Thermal Comfort",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Funeral+Tents/Funeral-Tents.webp",
    href: "/solutions/funeral-tents",
  },
];

export default function SolutionsSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeItem = solutions[selectedIdx];

  return (
    <section className="relative pt-12 pb-24 bg-[#FDFCF7] border-t border-slate-200/60 overflow-hidden">
      {/* خلفية هندسية خافتة */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#e6b224 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#df9d17]/5 blur-[160px] rounded-full pointer-events-none" />
      {/* الهيدر العلوي */}
      <div className="w-full px-6 sm:px-12 lg:px-24 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
              Turnkey Architectural Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B1220] tracking-tight leading-tight">
              Bespoke Structures <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
                Tailored For Every Vision
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-slate-600 text-sm max-w-md font-light leading-relaxed">
              Explore our comprehensive range of high-span modular tents, tensioned fabric membranes, and custom event halls.
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
      <div className="w-full px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* الجانب الأيسر: شاشة عرض الصورة السينمائية */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">

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
                    className="object-cover object-center"
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
            className="lg:col-span-6 flex flex-col p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs max-h-[520px] overflow-y-auto divide-y divide-slate-100 pr-3">
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
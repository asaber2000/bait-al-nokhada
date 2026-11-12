"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  Wrench,
  Coins,
  ShieldCheck as ShieldIcon,
  PhoneCall,
  Mail,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: "01",
    title: "PROFESSIONALISM",
    desc: "We are professional tent solution experts delivering the highest levels of German DIN engineering safety benchmarks with decades of elite craftsmanship.",
    icon: Wrench,
    statLabel: "Engineering Legacy",
    statValue: "30+ Years",
  },
  {
    num: "02",
    title: "AFFORDABILITY & VALUE",
    desc: "Affordability is the core of our business; we provide direct-from-factory pricing, flexible leasing options, and high-ROI tent structures from our mega UAE manufacturing complex.",
    icon: Coins,
    statLabel: "Industrial Facility",
    statValue: "40,000 m²",
  },
  {
    num: "03",
    title: "PROVEN RELIABILITY",
    desc: "We offer sustainable, certified tent structures and royal pavilions deployed across landmark government summits, exhibitions, and corporate events.",
    icon: ShieldIcon,
    statLabel: "Projects Deployed",
    statValue: "5,000+ Units",
  },
];

export default function FeatureShowcase({ sanityData }: { sanityData?: any }) {
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const badgeText = sanityData?.badgeText || "SINCE 1997 – LEADING TENT MANUFACTURER";
  const mainHeadingBlack = sanityData?.mainHeadingBlack || "Tent Rental, Supplier & Manufacturing";
  const mainHeadingGradient = sanityData?.mainHeadingGradient || " Experts in UAE & KSA";
  const description =
    sanityData?.description ||
    `Looking for tent rental or tents for sale in UAE or Saudi Arabia? Bait Al Nokhada is a leading tent manufacturing company with over 30 years of experience.

We provide premium modular structures, event tents, and tensile shading solutions tailored for exhibitions, private events, and commercial projects across the GCC.

Contact Bait Al Nokhada for reliable tent solutions—manufactured in the UAE, delivered worldwide.`;
  const sideImageUrl =
    sanityData?.sideImageUrl ||
    "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/exhibition-tents-UAE.webp";

  const defaultIcons = [Wrench, Coins, ShieldIcon];
  const activePillars =
    sanityData?.pillarsList && sanityData.pillarsList.length > 0
      ? sanityData.pillarsList.map((item: any, i: number) => ({
          ...item,
          statValue: item.statValue
            ? `${Number(item.statValue).toLocaleString()}${item.statSuffix || ""}`
            : pillars[i]?.statValue,
          icon: defaultIcons[i % defaultIcons.length],
        }))
      : pillars;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. حركة النص العملاق في الخلفية بالعرض مع السكرول (Monumental Scrub)
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { xPercent: 8 },
          {
            xPercent: -18,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      // 2. ظهور العناصر بتتابع أنيق وناعم
      gsap.fromTo(
        ".editorial-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 bg-[#FDFCF7] py-16 lg:py-24 overflow-hidden"
    >
      {/* تايبوجرافي معماري عملاق في الخلفية يتحرك بالعرض مع السكرول */}
      <div
        ref={watermarkRef}
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap font-heading font-black text-[90px] sm:text-[150px] lg:text-[210px] leading-none text-[#0B1220]/[0.025] tracking-tighter absolute top-6 left-0 z-0"
      >
        BAIT AL NOKHADA
      </div>

      <div className="site-container relative z-10 space-y-14 lg:space-y-16">
        {/* 1. البيان الافتتاحي بنمط المجلات المعمارية الفاخرة (Editorial Statement) */}
        <div className="max-w-5xl space-y-6">
          <div className="editorial-reveal inline-flex items-center gap-2.5 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#b87d0e]">
            <span className="w-8 h-[1.5px] bg-[#df9d17]" />
            <span>{badgeText}</span>
          </div>

          <h1 className="editorial-reveal text-3xl sm:text-5xl lg:text-[52px] font-black text-[#0B1220] font-heading tracking-tight leading-[1.1]">
            {mainHeadingBlack}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              {mainHeadingGradient}
            </span>
          </h1>

          <div className="editorial-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2 items-start">
            <p className="lg:col-span-7 text-slate-600 text-sm sm:text-base font-normal leading-relaxed whitespace-pre-line">
              {description}
            </p>

            {/* أزرار الـ CTA بتصميم نظيف وراقي */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3">
              <a
                href="https://wa.me/97143444091"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  track("whatsAPP Click", { location: "Homepage Hero" });
                }}
                className="group inline-flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#0B1220] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-md"
              >
                <span className="inline-flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-[#25D366] group-hover:fill-white transition-colors shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>GET A QUOTE ON WhatsApp</span>
                </span>
                <ArrowUpRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+971558850631"
                  className="group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white hover:bg-[#df9d17] border border-slate-200 hover:border-[#df9d17] text-[#0B1220] hover:text-white font-bold text-xs sm:text-sm transition-all duration-300"
                >
                  <PhoneCall className="w-4 h-4 text-[#df9d17] group-hover:text-white transition-colors shrink-0" />
                  <span>Call Now</span>
                </a>

                <a
                  href="mailto:dm@baitalnokhada.com?subject=Inquiry%20from%20Homepage"
                  onClick={() => {
                    track("Email Inquiry Click", {
                      recipient: "dm@baitalnokhada.com",
                      source: "Homepage Hero CTA",
                    });
                  }}
                  className="group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white hover:bg-[#0B1220] border border-slate-200 hover:border-[#0B1220] text-[#0B1220] hover:text-white font-bold text-xs sm:text-sm transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-sky-500 group-hover:text-white transition-colors shrink-0" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. المسرح التفاعلي المزدوج: قائمة الأرقام التفاعلية + الصورة الكبيرة */}
        <div className="editorial-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pt-4 border-t border-slate-200/80">
          {/* العمود الأيسر: الأرقام التفاعلية الثلاثة (Interactive Index List) */}
          <div className="lg:col-span-5 flex flex-col justify-between divide-y divide-slate-200/80">
            {activePillars.map((pillar: any, idx: number) => {
              const isSelected = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className="py-5 first:pt-2 last:pb-2 cursor-pointer group transition-all"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-mono text-xs font-bold transition-colors ${
                          isSelected ? "text-[#df9d17]" : "text-slate-400"
                        }`}
                      >
                        {pillar.num}
                      </span>
                      <h2
                        className={`text-base sm:text-lg font-black font-heading uppercase tracking-wide transition-colors ${
                          isSelected
                            ? "text-[#0B1220]"
                            : "text-slate-400 group-hover:text-slate-700"
                        }`}
                      >
                        {pillar.title}
                      </h2>
                    </div>

                    <span
                      className={`text-xl sm:text-2xl font-black font-mono tracking-tight transition-all duration-300 ${
                        isSelected
                          ? "text-[#df9d17] scale-105"
                          : "text-slate-300 group-hover:text-slate-500"
                      }`}
                    >
                      {pillar.statValue}
                    </span>
                  </div>

                  {/* الوصف يفتح بنعومة للركيزة النشطة فقط */}
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isSelected
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden pl-7">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                      <span className="inline-block mt-2 text-[10px] font-mono uppercase tracking-widest text-[#b87d0e] font-bold">
                        {pillar.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* العمود الأيمن: الصورة البانورامية الكبيرة بدون أي تشتيت */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] rounded-3xl overflow-hidden bg-slate-900 shadow-xl group">
            <Image
              src={sideImageUrl}
              alt="Bait Al Nokhada Exhibition Tents"
              fill
              priority
              quality={95}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className={`object-cover object-center transition-all duration-700 ease-out ${
                activeIdx === 0
                  ? "scale-100 object-center"
                  : activeIdx === 1
                  ? "scale-105 object-left"
                  : "scale-105 object-right"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-xs font-mono">
              <span className="px-3.5 py-1.5 rounded-full bg-black/55 backdrop-blur-md">
                {activePillars[activeIdx]?.statLabel} • {activePillars[activeIdx]?.statValue}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
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
  ArrowUpLeft,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: "01",
    title: "الاحترافية الهندسية",
    desc: "هندسة تصنيع متقدمة تخضع لمعايير الأمان الألمانية DIN وخبرة عريقة تمتد لأكثر من 29 عاماً.",
    icon: Wrench,
    statLabel: "الخبرة الهندسية",
    statValue: "30+ عاماً",
  },
  {
    num: "02",
    title: "أفضل قيمة وأسعار المصنع",
    desc: "أسعار تنافسية مباشرة من المصنع، مع حلول تأجير متكاملة وعائد استثماري مرتفع للشركات.",
    icon: Coins,
    statLabel: "المجمع الصناعي",
    statValue: "40,000 m²",
  },
  {
    num: "03",
    title: "موثوقية وسجل إنجازات معتمد",
    desc: "هياكل شد إنشائية مستدامة تم تركيبها في أكثر من 5,000 مشروع ضخم في الإمارات ودول الخليج.",
    icon: ShieldIcon,
    statLabel: "المشاريع المنفذة",
    statValue: "5,000+ مشروع",
  },
];

export default function FeatureShowcaseAr({ sanityData }: { sanityData?: any }) {
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const badgeText =
    sanityData?.badgeText || "رواد تصنيع وتأجير الخيام في الإمارات والسعودية — منذ عام 1997";
  const mainHeadingBlack = sanityData?.mainHeadingBlack || "خبراء تصنيع وتوريد وتأجير";
  const mainHeadingGradient =
    sanityData?.mainHeadingGradient || "الخيام والقاعات الإنشائية الكبرى";
  const description =
    sanityData?.description ||
    "تُعد شركة بيت النوخذة رائدة صناعة الخيام والهياكل النسيجية في دبي، أبوظبي، وكافة مناطق الإمارات والمملكة العربية السعودية. نصمم وننفذ خيام الفعاليات الكبرى، المستودعات التخزينية الصناعية، والتجهيزات المتطورة المعتمدة لأعلى معايير السلامة العالمية.";
  const sideImageUrl =
    sanityData?.sideImageUrl ||
    "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/exhibition-tents-UAE.webp";

  const defaultIcons = [Wrench, Coins, ShieldIcon];
  const activePillars =
    sanityData?.pillarsList && sanityData.pillarsList.length > 0
      ? sanityData.pillarsList.map((item: any, i: number) => ({
          ...item,
          statValue: item.statValue
            ? `${Number(item.statValue).toLocaleString("en-US")}${item.statSuffix || ""}`
            : pillars[i]?.statValue,
          icon: defaultIcons[i % defaultIcons.length],
        }))
      : pillars;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. حركة النص العملاق في الخلفية بالعرض مع السكرول (معكوسة لاتجاه RTL)
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { xPercent: -8 },
          {
            xPercent: 18,
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
        ".editorial-reveal-ar",
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
      dir="rtl"
      className="relative z-20 bg-[#FDFCF7] py-16 lg:py-24 overflow-hidden text-right font-sans"
    >
      {/* تايبوجرافي معماري عملاق في الخلفية يتحرك بالعرض مع السكرول */}
      <div
        ref={watermarkRef}
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap font-heading font-black text-[85px] sm:text-[140px] lg:text-[190px] leading-none text-[#0B1220]/[0.025] tracking-normal absolute top-6 right-0 z-0"
      >
        بيت النوخذة • مصنع الخيام منذ 1997
      </div>

      <div className="site-container relative z-10 space-y-14 lg:space-y-16">
        {/* 1. البيان الافتتاحي بنمط المجلات المعمارية الفاخرة */}
        <div className="max-w-5xl space-y-6">
          <div className="editorial-reveal-ar inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-extrabold tracking-normal text-[#b87d0e]">
            <span className="w-8 h-[1.5px] bg-[#df9d17]" />
            <span>{badgeText}</span>
          </div>

          <h1 className="editorial-reveal-ar text-3xl sm:text-5xl lg:text-[50px] font-black text-[#0B1220] font-heading tracking-tight leading-[1.15]">
            {mainHeadingBlack}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              {mainHeadingGradient}
            </span>
          </h1>

          <div className="editorial-reveal-ar grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2 items-start">
            <p className="lg:col-span-7 text-slate-600 text-sm sm:text-base font-normal leading-relaxed whitespace-pre-line">
              {description}
            </p>

            {/* أزرار الـ CTA بتصميم نظيف وراقي مع ضبط RTL */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3">
              <a
                href="https://wa.me/97143444091"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  track("WhatsApp Click", { location: "Arabic Homepage Hero" });
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
                  <span>طلب تسعير عبر واتساب</span>
                </span>
                <ArrowUpLeft className="w-4 h-4 opacity-75 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+971558850631"
                  onClick={() => {
                    track("Phone Call Click", { location: "Arabic Homepage Hero" });
                  }}
                  className="group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white hover:bg-[#df9d17] border border-slate-200 hover:border-[#df9d17] text-[#0B1220] hover:text-white font-bold text-xs sm:text-sm transition-all duration-300"
                >
                  <PhoneCall className="w-4 h-4 text-[#df9d17] group-hover:text-white transition-colors shrink-0" />
                  <span>اتصل بنا الآن</span>
                </a>

                <a
                  href="mailto:dm@baitalnokhada.com?subject=Inquiry%20from%20Arabic%20Homepage"
                  onClick={() => {
                    track("Email Inquiry Click", {
                      recipient: "dm@baitalnokhada.com",
                      source: "Arabic Homepage Hero CTA",
                    });
                  }}
                  className="group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white hover:bg-[#0B1220] border border-slate-200 hover:border-[#0B1220] text-[#0B1220] hover:text-white font-bold text-xs sm:text-sm transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-sky-500 group-hover:text-white transition-colors shrink-0" />
                  <span>راسلنا عبر الإيميل</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. المسرح التفاعلي المزدوج: قائمة الأرقام التفاعلية + الصورة الكبيرة */}
        <div className="editorial-reveal-ar grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pt-4 border-t border-slate-200/80">
          {/* العمود الأيمن في RTL: الأرقام التفاعلية الثلاثة */}
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
                        className={`text-base sm:text-lg font-black font-heading tracking-normal transition-colors ${
                          isSelected
                            ? "text-[#0B1220]"
                            : "text-slate-400 group-hover:text-slate-700"
                        }`}
                      >
                        {pillar.title}
                      </h2>
                    </div>

                    <span
                      dir="ltr"
                      className={`text-xl sm:text-2xl font-black font-mono tracking-tight transition-all duration-300 shrink-0 ${
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
                    <div className="overflow-hidden pr-7">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                      <span className="inline-block mt-2 text-[11px] font-bold tracking-normal text-[#b87d0e]">
                        {pillar.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* العمود الأيسر في RTL: الصورة البانورامية الكبيرة */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] rounded-3xl overflow-hidden bg-slate-900 shadow-xl group">
            <Image
              src={sideImageUrl}
              alt="خيام المعارض والفعاليات - بيت النوخذة"
              fill
              priority
              quality={95}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className={`object-cover transition-all duration-700 ease-out ${
                activeIdx === 0
                  ? "scale-100 object-center"
                  : activeIdx === 1
                  ? "scale-105 object-right"
                  : "scale-105 object-left"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 right-5 left-5 flex items-center justify-between text-white text-xs font-bold">
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
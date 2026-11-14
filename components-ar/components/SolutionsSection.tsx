"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpLeft, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    id: "01",
    title: "خيام المعارض",
    desc: "خيام المعارض للإيجار بجودة عالية تناسب الفعاليات والمعارض والمؤتمرات في السعودية والإمارات، مصممة لتحمل الظروف الجوية، وتوفر مساحة عرض أنيقة وعملية منذ عام 1997.",
    specs: "بحور مفتوحة تصل إلى 60 متراً • مقاومة عالية للرياح",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Exhibition-tent-gulfood.webp",
    href: "/ar/solutions/exhibition-tent",
  },
  {
    id: "02",
    title: "خيام الفعاليات والمناسبات",
    desc: "نوفر خيمة مناسبات فاخرة للإيجار والبيع في الإمارات والسعودية ودول الخليج، تجمع بين التصميم الأنيق والجودة العالية، مع خدمات تركيب احترافية وتخصيص كامل يناسب كل مناسباتك.",
    specs: "منصات متعددة المستويات • أنظمة تكييف فائقة القدرة",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/Luxury-Tents-for-Events.webp",
    href: "/ar/solutions/event-tent",
  },
  {
    id: "03",
    title: "خيام الزفاف والأعراس",
    desc: "توفر شركة بيت النوخذة خدمات تأجير خيام أفراح في دبي بتصاميم أنيقة ومخصصة لتناسب حفلات الزفاف الخارجية في الإمارات والسعودية. اختر خيمة زفافك من نخبة الخبراء في خيام المناسبات، واحتفل بلحظة لا تُنسى في أجواء فاخرة سواء في دبي أو الرياض.",
    specs: "واجهات زجاجية عازلة للصوت • أقمشة وديكورات مخصصة وثريات",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wedding/Wedding-tent-for-rent-Dubai.webp",
    href: "/ar/solutions/wedding-tent",
  },
  {
    id: "04",
    title: "خيام مراكز المبيعات",
    desc: "خيام ومقرات مبيعات مؤقتة مجهزة للشركات العقارية والمشاريع الكبرى، مزودة بواجهات زجاجية وتشطيبات داخلية فاخرة وأنظمة تكييف متكاملة لتوفير بيئة استقبال أعمال استثنائية.",
    specs: "واجهات زجاجية بانورامية • تشطيب داخلي فاخر",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/AL%20MARWAN3.webp",
    href: "/ar/solutions/sales-center-tent",
  },
  {
    id: "05",
    title: "خيام المستودعات",
    desc: "توفر بيت النوخذة خيام المستودعات المتينة والمقاومة للعوامل الجوية للإيجار والبيع في الإمارات والسعودية، ما يضمن حماية مثالية لبضائعك، تتميز هذه الخيام بسهولة التركيب والمرونة، مما يجعلها الحل الأمثل للتخزين الآمن والمستدام.",
    specs: "سرعة في التوريد والتركيب • معايير السلامة الألمانية DIN",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/warehouse/warehouse.webp",
    href: "/ar/solutions/warehouse-tent",
  },
  {
    id: "06",
    title: "خيام استراحة العمال",
    desc: "خيام استراحة معزولة ومتينة مخصصة لمواقع الإنشاءات والمنشآت الصناعية في الإمارات والسعودية، مطابقة لأعلى معايير الأمن والسلامة ورفاهية العمال.",
    specs: "أنسجة PVC عازلة للحرارة • معتمدة من الدفاع المدني",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/labour/labour-tent-for-sale.webp",
    href: "/ar/solutions/labour-break-time-tent",
  },
  {
    id: "07",
    title: "خيام رياضية",
    desc: "نوفر خيام رياضية عالية الجودة توفر حماية قوية ومساحة مريحة للرياضيين والمشجعين، تتحمل الظروف الجوية المختلفة، وتناسب جميع الفعاليات الرياضية في الملاعب أو المناطق المفتوحة.",
    specs: "أسقف عازلة حرارياً • مطابقة لمعايير FIFA الرياضية",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Sports/2.webp",
    href: "/ar/solutions/sports-tent",
  },
  {
    id: "08",
    title: "خيام رمضانية",
    desc: "خيمة رمضانية فاخرة بتصميم تقليدي أو عصري، مثالية لأمسيات الإفطار والسحور في الإمارات والسعودية، توفر راحة استثنائية، وجواً روحانياً دافئاً يجمع بين الفخامة والضيافة العربية الأصيلة.",
    specs: "فرش داخلي ومجالس تفصيل • مقاومة للحريق Class A",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Ramadan/large-ramadan-tents-UAE.webp",
    href: "/ar/solutions/ramadan-tent",
  },
  {
    id: "09",
    title: "خيام المساجد",
    desc: "خيام ومصليات مؤقتة مجهزة بالكامل للصلوات اليومية وصلاة الجمعة وشهر رمضان المبارك، مزودة بسجاد عالي الجودة وتكييف هواء مركزي ومرافق مخصصة للوضوء.",
    specs: "سجاد مضاد للبكتيريا • تدفق هواء مكيف عالي السعة",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Mosque+Tents/mosque-img2.webp",
    href: "/ar/solutions/mosque-tent",
  },
  {
    id: "10",
    title: "خيام العزاء",
    desc: "خدمة توفير وتجهيز خيام العزاء الفاخرة على مدار الساعة (24/7) في الإمارات والسعودية، مجهزة بالكامل بكافة متطلبات الضيافة، التكييف، المقاعد المريحة، والإنارة الهادئة.",
    specs: "جاهزية وتركيب على مدار الساعة • عزل صوتي وحراري تام",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Funeral+Tents/Funeral-Tents.webp",
    href: "/ar/solutions/funeral-tent",
  },
];

export default function ArabicSolutionsSection() {
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
    <section dir="rtl" className="relative py-10 lg:py-14 bg-[#FDFCF7] border-t border-slate-200/60 overflow-hidden text-right">
      {/* خلفية هندسية خافتة */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#df9d17]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* الهيدر العلوي */}
      <div className="site-container mb-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200/80 pb-5">
          <div className="space-y-2.5 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-normal bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>حلول الخيام الرائدة</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1220] tracking-tight leading-tight">
              حلولنا،{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
                لكافة الفعاليات والمشاريع
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:pt-4">
            <p className="text-slate-600 text-sm max-w-sm font-normal leading-relaxed">
              استكشف مجموعتنا المتكاملة من خيام القاعات الكبرى، خيام المستودعات، والخيام المخصصة للمعارض والمناسبات.
            </p>

            <Link
              href="/ar/solutions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#df9d17] text-slate-800 hover:text-white border border-slate-200 hover:border-[#df9d17] shadow-xs hover:shadow-md transition-all text-xs font-bold tracking-normal shrink-0"
            >
              <span>جميع حلول الخيام</span>
              <ArrowUpLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="site-container relative z-10 space-y-5">
        {/* 1. شريط اختيار الحلول بالكامل بدون سكرول داخلي */}
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
                    layoutId="activeSolutionPillAr"
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
            {/* الجانب الأيمن في RTL: الصورة العريضة (7 أعمدة) */}
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
              <div className="absolute top-5 right-5 z-20">
                <span className="font-mono text-xs font-bold tracking-widest text-[#0B1220] bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                  {activeItem.id} / {solutions.length}
                </span>
              </div>

              {/* شريط المواصفات الهندسية أسفل الصورة */}
              <div className="absolute bottom-5 right-5 left-5 z-20 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 text-white text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#fbc200] shrink-0" />
                  <span>{activeItem.specs}</span>
                </div>
              </div>
            </div>

            {/* الجانب الأيسر في RTL: بطاقة التفاصيل الهندسية (5 أعمدة) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative bg-white">
              {/* رقم مائي هندسي كبير في الخلفية */}
              <span className="absolute top-4 left-6 font-mono text-7xl sm:text-8xl font-black text-slate-100 select-none pointer-events-none">
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FDFCF7] border border-[#df9d17]/30 text-[#df9d17] text-[11px] font-bold tracking-normal">
                    <span>حل معماري متكامل • {activeItem.id}</span>
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
                      <span className="text-[10px] font-bold tracking-normal text-slate-400 block">
                        المواصفات الهندسية الرئيسية
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
                  className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B1220] hover:bg-[#df9d17] text-white font-bold text-xs tracking-normal transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <span>استكشف الحل الهندسي</span>
                  <ArrowUpLeft className="w-4 h-4 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
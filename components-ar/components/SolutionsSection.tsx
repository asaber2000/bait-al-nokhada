"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    id: "01",
    title: "خيام وصالات المعارض",
    desc: "أجنحة وهياكل ضخمة مخصصة للمعارض الدولية، الفعاليات التجارية، وعروض الطيران الكبرى عبر دول الخليج.",
    specs: "بحور مفتوحة تصل إلى 60 متراً • مقاومة عالية للرياح",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Exhibitions/Exhibition-tent-gulfood.webp",
    href: "/ar/solutions/exhibition-tents",
  },
  {
    id: "02",
    title: "خيام الفعاليات والمؤتمرات",
    desc: "قاعات مؤتمرات وقمم حكومية مجهزة بأحدث تقنيات الإضاءة الذكية، العزل الصوتي، والتكييف المركزي المتكامل.",
    specs: "منصات متعددة المستويات • أنظمة تكييف فائقة القدرة",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/Luxury-Tents-for-Events.webp",
    href: "/ar/solutions/event-tents",
  },
  {
    id: "03",
    title: "خيام الأعراس الملكية",
    desc: "قاعات ملكية فخمة مصممة لحفلات الزفاف الخارجية في الإمارات والسعودية، توفر أجواء راقية وخاصة.",
    specs: "واجهات زجاجية عازلة للصوت • أقمشة وديكورات مخصصة وثريات",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Wedding/Wedding-tent-for-rent-Dubai.webp",
    href: "/ar/solutions/wedding-tents",
  },
  {
    id: "04",
    title: "خيام مراكز المبيعات",
    desc: "هياكل معمارية شبه دائمة مخصصة لإطلاق المشاريع العقارية الكبرى وتوفير صالات استقبال فخمة للمستثمرين.",
    specs: "واجهات زجاجية بانورامية • تشطيب داخلي فاخر",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AL%20MARWAN3.webp",
    href: "/ar/solutions/sales-center-tents",
  },
  {
    id: "05",
    title: "المستودعات والخيام الصناعية",
    desc: "مستودعات تخزين مؤقتة ودائمة ذات بحور مفتوحة عالية التحمل ومصممة للعمليات اللوجستية والمواقع الصناعية.",
    specs: "سرعة في التوريد والتركيب • معايير السلامة الألمانية DIN",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/warehouse/warehouse.webp",
    href: "/ar/solutions/warehouse-tents",
  },
  {
    id: "06",
    title: "خيام استراحة العمال",
    desc: "مظلات واستراحات مجهزة بأنظمة تبريد عالية الكفاءة لتأمين راحة الكوادر الميدانية وفق اشتراطات السلامة والرفاهية.",
    specs: "أنسجة PVC عازلة للحرارة • معتمدة من الدفاع المدني",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/labour/labour-tent-for-sale.webp",
    href: "/ar/solutions/labour-break-tents",
  },
  {
    id: "07",
    title: "الخيام والملاعب الرياضية",
    desc: "هياكل بحور واسعة توفر عزلاً حرارياً متطوراً للملاعب الرياضية، ملاعب البادل، والصالات الأكاديمية الأولمبية.",
    specs: "أسقف عازلة حرارياً • مطابقة لمعايير FIFA الرياضية",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Sports/2.webp",
    href: "/ar/solutions/sports-tents",
  },
  {
    id: "08",
    title: "الخيام والمجالس الرمضانية",
    desc: "أجواء تراثية عربية أصيلة مدمجة باللمسات المعمارية الحديثة لبوفيهات الإفطار المؤسسية والمجالس الملكية.",
    specs: "فرش داخلي ومجالس تفصيل • مقاومة للحريق Class A",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Ramadan/large-ramadan-tents-UAE.webp",
    href: "/ar/solutions/ramadan-tents",
  },
  {
    id: "09",
    title: "خيام المصليات والمساجد",
    desc: "مصليات مؤقتة واسعة مجهزة بفرش معقم، عزل صوتي نقي، مناطق وضوء ملحقة، ومحاريب دقيقة التوجيه.",
    specs: "سجاد مضاد للبكتيريا • تدفق هواء مكيف عالي السعة",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Mosque+Tents/mosque-img2.webp",
    href: "/ar/solutions/mosque-tents",
  },
  {
    id: "10",
    title: "خيام العزاء والمناسبات",
    desc: "قاعات مؤقتة مجهزة بالكامل تُشيد بسرعة فائقة وتوفر تكييفاً وخدمات لوجستية متكاملة لراحة الحضور.",
    specs: "جاهزية وتركيب على مدار الساعة • عزل صوتي وحراري تام",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Funeral+Tents/Funeral-Tents.webp",
    href: "/ar/solutions/funeral-tents",
  },
];

export default function ArabicSolutionsSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeItem = solutions[selectedIdx];

  return (
    <section dir="rtl" className="relative pt-12 pb-24 bg-[#040811] border-t border-white/5 overflow-hidden text-right">
      {/* خلفية هندسية خافتة */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* الهيدر العلوي */}
      <div className="w-full px-6 sm:px-12 lg:px-24 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20">
              حلول معمارية وهندسية متكاملة
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              هياكل ومظلات مخصصة <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
                صُممت لتجسيد أدق تطلعاتك
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-slate-400 text-sm max-w-md font-light leading-relaxed">
              استكشف باقتنا المتكاملة من الخيام المعيارية ذات البحور الواسعة، الهياكل النسيجية المشدودة، وقاعات المؤتمرات والفعاليات.
            </p>

            <Link
              href="/ar/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#070B14] border border-white/10 hover:border-[#D4AF37] transition-all text-xs font-bold uppercase tracking-widest shrink-0"
            >
              <span>عرض كل الحلول الـ ١٠</span>
              <ArrowUpLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* شاشة العرض التفاعلية المنقسمة */}
      <div className="w-full px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* الجانب الأيمن في RTL: شاشة عرض الصورة السينمائية */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#070B14]">

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
                <span className="font-mono text-xs tracking-widest text-white/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg">
                  {activeItem.id} / 10
                </span>
              </div>
              
              {/* زر استكشف فقط مطابق للإنجليزية */}
              <div className="absolute bottom-5 left-5 z-20">
                <Link
                  href={activeItem.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#070B14]/85 hover:bg-[#D4AF37] backdrop-blur-md border border-white/10 hover:border-[#D4AF37] text-[#D4AF37] hover:text-[#070B14] transition-all text-xs font-bold uppercase tracking-widest shadow-lg"
                >
                  <span>استكشف المزيد</span>
                  <ArrowUpLeft className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

          {/* الجانب الأيسر في RTL: قائمة الحلول */}
          <div
            data-lenis-prevent
            className="lg:col-span-6 flex flex-col divide-y divide-white/10 max-h-[520px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#D4AF37]/30 pl-2">
            {solutions.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setSelectedIdx(idx)}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group py-4 transition-all duration-300 cursor-pointer flex flex-col justify-center px-4 rounded-xl ${
                    isSelected ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className={`font-mono text-sm font-bold transition-colors ${
                        isSelected ? "text-[#D4AF37]" : "text-slate-600 group-hover:text-slate-400"
                      }`}>
                        {item.id}
                      </span>
                      <h3 className={`text-lg sm:text-xl font-bold tracking-wide transition-colors ${
                        isSelected ? "text-white" : "text-slate-400 group-hover:text-white"
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    <div className={`p-1.5 rounded-full border transition-all ${
                      isSelected
                        ? "border-[#D4AF37] bg-[#D4AF37] text-[#070B14] -rotate-45"
                        : "border-white/10 text-slate-500 group-hover:border-white/30 group-hover:text-white"
                    }`}>
                      <ArrowUpLeft className="w-3.5 h-3.5 transition-transform duration-300" />
                    </div>
                  </div>

                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pr-8 pt-2"
                    >
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
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
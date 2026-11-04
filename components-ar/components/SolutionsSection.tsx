"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    id: "01",
    title: "خيام المعارض",
    desc: "خيام المعارض للإيجار بجودة عالية تناسب الفعاليات والمعارض والمؤتمرات في السعودية والإمارات، مصممة لتحمل الظروف الجوية، وتوفر مساحة عرض أنيقة وعملية منذ عام 1997.",
    specs: "بحور مفتوحة تصل إلى 60 متراً • مقاومة عالية للرياح",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Exhibition-tent-gulfood.webp",
    href: "/ar/solutions/exhibition-tents",
  },
  {
    id: "02",
    title: "خيام الفعاليات والمناسبات",
    desc: "نوفر خيمة مناسبات فاخرة للإيجار والبيع في الإمارات والسعودية ودول الخليج، تجمع بين التصميم الأنيق والجودة العالية، مع خدمات تركيب احترافية وتخصيص كامل يناسب كل مناسباتك.",
    specs: "منصات متعددة المستويات • أنظمة تكييف فائقة القدرة",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/Luxury-Tents-for-Events.webp",
    href: "/ar/solutions/event-tents",
  },
  {
    id: "03",
    title: "خيام الزفاف والأعراس",
    desc: "توفر شركة بيت النوخذة خدمات تأجير خيام أفراح في دبي بتصاميم أنيقة ومخصصة لتناسب حفلات الزفاف الخارجية في الإمارات والسعودية. اختر خيمة زفافك من نخبة الخبراء في خيام المناسبات، واحتفل بلحظة لا تُنسى في أجواء فاخرة سواء في دبي أو الرياض.",
    specs: "واجهات زجاجية عازلة للصوت • أقمشة وديكورات مخصصة وثريات",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wedding/Wedding-tent-for-rent-Dubai.webp",
    href: "/ar/solutions/wedding-tents",
  },
  {
    id: "04",
    title: "خيام مراكز المبيعات",
    desc: "خيام ومقرات مبيعات مؤقتة مجهزة للشركات العقارية والمشاريع الكبرى، مزودة بواجهات زجاجية وتشطيبات داخلية فاخرة وأنظمة تكييف متكاملة لتوفير بيئة استقبال أعمال استثنائية.",
    specs: "واجهات زجاجية بانورامية • تشطيب داخلي فاخر",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/AL%20MARWAN3.webp",
    href: "/ar/solutions/sales-center-tents",
  },
  {
    id: "05",
    title: "خيام المستودعات",
    desc: "توفر بيت النوخذة خيام المستودعات المتينة والمقاومة للعوامل الجوية للإيجار والبيع في الإمارات والسعودية، ما يضمن حماية مثالية لبضائعك، تتميز هذه الخيام بسهولة التركيب والمرونة، مما يجعلها الحل الأمثل للتخزين الآمن والمستدام.",
    specs: "سرعة في التوريد والتركيب • معايير السلامة الألمانية DIN",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/warehouse/warehouse.webp",
    href: "/ar/solutions/warehouse-tents",
  },
  {
    id: "06",
    title: "خيام استراحة العمال",
    desc: "خيام استراحة معزولة ومتينة مخصصة لمواقع الإنشاءات والمنشآت الصناعية في الإمارات والسعودية، مطابقة لأعلى معايير الأمن والسلامة ورفاهية العمال.",
    specs: "أنسجة PVC عازلة للحرارة • معتمدة من الدفاع المدني",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/labour/labour-tent-for-sale.webp",
    href: "/ar/solutions/labour-break-time-tents",
  },
  {
    id: "07",
    title: "خيام رياضية",
    desc: "نوفر خيام رياضية عالية الجودة توفر حماية قوية ومساحة مريحة للرياضيين والمشجعين، تتحمل الظروف الجوية المختلفة، وتناسب جميع الفعاليات الرياضية في الملاعب أو المناطق المفتوحة.",
    specs: "أسقف عازلة حرارياً • مطابقة لمعايير FIFA الرياضية",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Sports/2.webp",
    href: "/ar/solutions/sports-tents",
  },
  {
    id: "08",
    title: "خيام رمضانية",
    desc: "خيمة رمضانية فاخرة بتصميم تقليدي أو عصري، مثالية لأمسيات الإفطار والسحور في الإمارات والسعودية، توفر راحة استثنائية، وجواً روحانياً دافئاً يجمع بين الفخامة والضيافة العربية الأصيلة.",
    specs: "فرش داخلي ومجالس تفصيل • مقاومة للحريق Class A",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Ramadan/large-ramadan-tents-UAE.webp",
    href: "/ar/solutions/ramadan-tents",
  },
  {
    id: "09",
    title: "خيام المساجد",
    desc: "خيام ومصليات مؤقتة مجهزة بالكامل للصلوات اليومية وصلاة الجمعة وشهر رمضان المبارك، مزودة بسجاد عالي الجودة وتكييف هواء مركزي ومرافق مخصصة للوضوء.",
    specs: "سجاد مضاد للبكتيريا • تدفق هواء مكيف عالي السعة",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Mosque+Tents/mosque-img2.webp",
    href: "/ar/solutions/mosque-tents",
  },
  {
    id: "10",
    title: "خيام العزاء",
    desc: "خدمة توفير وتجهيز خيام العزاء الفاخرة على مدار الساعة (24/7) في الإمارات والسعودية، مجهزة بالكامل بكافة متطلبات الضيافة، التكييف، المقاعد المريحة، والإنارة الهادئة.",
    specs: "جاهزية وتركيب على مدار الساعة • عزل صوتي وحراري تام",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Funeral+Tents/Funeral-Tents.webp",
    href: "/ar/solutions/funeral-tents",
  },
];

export default function ArabicSolutionsSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeItem = solutions[selectedIdx];

  return (
    <section dir="rtl" className="relative py-20 lg:py-24 bg-[#FDFCF7] border-t border-slate-200/60 overflow-hidden text-right">
      {/* خلفية هندسية خافتة */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#df9d17]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* الهيدر العلوي */}
      <div className="site-container mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
              حلول الخيام الرائدة 
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1220] tracking-tight leading-snug">
               حلولنا،{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
                لكافة الفعاليات والمشاريع 
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-slate-600 text-sm max-w-md font-normal leading-relaxed">
             استكشف مجموعتنا المتكاملة من خيام القاعات الكبرى، خيام المستودعات، والخيام المخصصة للمعارض والمناسبات.
            </p>

            <Link
              href="/ar/solutions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#df9d17] text-slate-800 hover:text-white border border-slate-200 hover:border-[#df9d17] shadow-xs hover:shadow-md transition-all text-xs font-bold uppercase tracking-wider shrink-0"
            >
              <span>جميع حلول الخيام</span>
              <ArrowUpLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* شاشة العرض التفاعلية المنقسمة */}
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* الجانب الأيمن في RTL: شاشة عرض الصورة السينمائية */}
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
                  {activeItem.id} / 10
                </span>
              </div>

              {/* زر استكشف فقط مطابق للإنجليزية */}
              <div className="absolute bottom-5 left-5 z-20">
                <Link
                  href={activeItem.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 hover:bg-[#df9d17] backdrop-blur-md border border-slate-200 hover:border-[#df9d17] text-slate-900 hover:text-white transition-all text-xs font-bold uppercase tracking-widest shadow-md"
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
            className="lg:col-span-6 flex flex-col p-3 sm:p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs max-h-[540px] overflow-y-auto no-scrollbar divide-y divide-slate-100">            {solutions.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setSelectedIdx(idx)}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group py-4 transition-all duration-300 cursor-pointer flex flex-col justify-center px-4 rounded-xl ${isSelected ? "bg-white border border-[#df9d17]/40 shadow-sm" : "hover:bg-slate-50/80"}
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className={`font-mono text-sm font-bold transition-colors ${isSelected ? "text-[#df9d17]" : "text-slate-400 group-hover:text-slate-600"
                        }`}>
                        {item.id}
                      </span>
                      <h3 className={`text-lg sm:text-xl font-bold tracking-wide transition-colors ${isSelected ? "text-[#0B1220] font-black" : "text-slate-600 group-hover:text-[#0B1220]"
                        }`}>
                        {item.title}
                      </h3>
                    </div>

                    <div className={`p-1.5 rounded-full border transition-all ${isSelected
                      ? "border-[#df9d17] bg-[#df9d17]/15 text-[#df9d17] -rotate-45"
                      : "border-slate-200 bg-white text-slate-400 group-hover:text-slate-600"
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
                      <p className="text-slate-600 font-normal text-xs sm:text-sm leading-relaxed">
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
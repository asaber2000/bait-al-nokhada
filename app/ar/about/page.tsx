"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Target,
  Compass,
  Quote,
  CheckCircle2,
  Award,
  Users,
  Building,
  Calendar,
  Layers,
  ShieldCheck,
  Cpu,
  ArrowUpLeft
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";

const journeyMilestones = [
  {
    year: "1997",
    badge: "مرحلة التأسيس",
    title: "التأسيس في أبوظبي",
    tagline: "أكثر من 30 عاماً من الإرث الهندسي العريق",
    desc: "تأسست شركة بيت النوخذة في أبوظبي كشركة رائدة في تصنيع خيام المجالس العربية التقليدية ومظلات الشد الإنشائي الفاخرة لسوق دولة الإمارات.",
    highlight: "إنشاء أول مجمع صناعي متكامل في أبوظبي.",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/About+Page/Bait-Al-Nokhada-2005.webp",
  },
  {
    year: "2005",
    badge: "التوسع الصناعي (ICAD-1)",
    title: "التوسع الصناعي والمصانع الكبرى",
    tagline: "طاقة إنتاجية تتجاوز 40,000 م² معتمدة بشهادات ISO",
    desc: "توسيع خطوط الإنتاج ونقل المصانع إلى مدينة أبوظبي الصناعية (ICAD-1) على مساحة تفوق 40,000 متر مربع مع إدخال ماكينات القص الليزري CNC واللحام عالي التردد HF.",
    highlight: "الحصول على شهادات الجودة العالمية ISO 9001:2015 واعتمادات DIN للسلامة.",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/About+Page/Bait-al-nokhada-old-logo.webp",
    imagePosition: "object-[center_60%]",
  },
  {
    year: "2015",
    badge: "الفعاليات والمعارض العالمية",
    title: "هياكل عملاقة للقمم والفعاليات الدولية",
    tagline: "ريادة هندسية معتمدة عبر كبرى فعاليات الإمارات",
    desc: "أصبح بيت النوخذة المقاول الرئيسي للهياكل مسبقة الصنع لكبرى المعارض العالمية مثل IDEX، NAVDEX، معرض دبي للطيران، والاحتفالات والقمم الرسمية.",
    highlight: "تنفيذ وتركيب أكثر من 3,000 هيكل عملاق بنجاح عبر الإمارات.",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/About+Page/Bait-Al-Nokhada-old.webp",
  },
  {
    year: "2022",
    badge: "التوسع الإقليمي في الخليج",
    title: "مشاريع استراتيجية عبر السعودية ودول الخليج",
    tagline: "تغطية كبرى مشاريع البنية التحتية والترفيه",
    desc: "توسيع العمليات المباشرة والمكاتب الميدانية في الرياض وجدة بالمملكة العربية السعودية لتلبية متطلبات مواسم الترفيه الكبرى والمناطق اللوجستية.",
    highlight: "تنفيذ موثوق لمستودعات البحور الواسعة والخيام الملكية في المملكة والخليج.",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/About+Page/Bait-Al-Nokhada-New-Front.webp",
    imagePosition: "object-[75%_center]",
  },
  {
    year: "2026",
    badge: "الجيل القادم من الابتكار",
    title: "هياكل معيارية وأنظمة خيام مستدامة",
    tagline: "+6,000 مشروع منجز بنجاح عبر دول الخليج",
    desc: "دمج أغشية الشد الإنشائي المهيأة للطاقة الشمسية، الألواح العازلة للصوت، والقاعات المكونة من طابقين للمشاريع الخليجية المستقبلية.",
    highlight: "إنجاز أكثر من 6,000 مشروع مع قدرات تسليم مفتاح متكاملة بنسبة 100%.",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Tents-for-sale-north-star-exhibition.webp",
    imagePosition: "object-[95%_center]",
  },
];

const expertiseList = [
  {
    title: "التصميم، الهندسة والتصنيع",
    desc: "تفصيل وتصنيع أنظمة الهياكل مسبقة الصنع التي تدمج الابتكار الهندسي بالفخامة، باستخدام خامات أوروبية مطابقة للمواصفات الألمانية DIN.",
    icon: Cpu,
  },
  {
    title: "تأجير وتوريد الخيام تسليم مفتاح",
    desc: "مخزون ضخم ومتاح للتركيب السريع الفوري في دبي وأبوظبي والرياض وجدة للقمم الدبلوماسية، المعارض التجارية، والاحتفالات الخاصة.",
    icon: Layers,
  },
  {
    title: "التجهيز الفاخر والديكورات الملكية",
    desc: "بطانات مجالس عربية مطرزة، ثريات كريستال، واجهات زجاجية بانورامية، بوابات أوتوماتيكية، وأرضيات كاسيت مجهزة لكبار الشخصيات VIP.",
    icon: Sparkles,
  },
  {
    title: "أنظمة التكييف المركزي HVAC عالية القدرة",
    desc: "وحدات تكييف صامتة ومصممة خصيصاً لضمان ثبات درجة الحرارة عند 21° مئوية داخل الخيمة حتى في درجات حرارة الصيف التي تتجاوز 50° مئوية.",
    icon: ShieldCheck,
  },
];

export default function ArabicAboutPage() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const active = journeyMilestones[activeMilestone];

  return (
    <main dir="rtl" className="min-h-screen bg-white text-slate-800 selection:bg-[#df9d17] selection:text-white text-right font-sans">
      <Navbar />

      {/* 1. Hero Banner */}
      <section className="relative pt-36 pb-14 px-6 sm:px-12 lg:px-24 border-b border-slate-100 overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>تأسست عام 1997 • إرث هندسي متواصل</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading"
          >
            رواد صناعة الخيام العملاقة و <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              مظلات الشد الإنشائي المعمارية
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto font-normal leading-relaxed"
          >
            لأكثر من ثلاثة عقود، تواصل صناعات بيت النوخذة مكانتها كأكبر مصنع ومورد موثوق للخيام والهياكل النسيجية في الإمارات، السعودية، وكافة دول الخليج، مقدمة حلولاً متينة تجمع بين الفخامة الهندسية والقدرة على مواجهة أقسى التحديات المناخية.
          </motion.p>
        </div>
      </section>

      {/* 2. Company Journey Interactive Timeline */}
      <section className="pt-10 pb-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-slate-100 relative overflow-hidden bg-white">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>أصالة التراث ومحطات الإنجاز</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1220] font-heading tracking-tight">
            مسيرة الشركة عبر <span className="text-[#df9d17]">العقود</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-md mx-auto leading-relaxed">
            نتتبع مسار تطورنا المستمر من صناعة الخيام الحرفية التراثية إلى صرح صناعي وهندسي عالمي متعدد الفروع.
          </p>
        </div>

        {/* أوتار الشد والسنوات */}
        <div className="relative w-full max-w-7xl mx-auto">
          <div className="relative pt-6 pb-2">
            <div className="absolute top-[38px] left-4 right-4 h-[2px] bg-slate-200 pointer-events-none" />

            <motion.div
              className="absolute top-[38px] h-[2px] bg-[#df9d17] pointer-events-none"
              animate={{
                right: `${(activeMilestone / (journeyMilestones.length - 1)) * 80}%`,
                width: "20%",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />

            <div className="relative flex justify-between items-center px-4 sm:px-12">
              {journeyMilestones.map((item, idx) => {
                const isSelected = activeMilestone === idx;
                return (
                  <div key={item.year} className="flex flex-col items-center relative z-20">
                    <button
                      onClick={() => setActiveMilestone(idx)}
                      className="group relative flex flex-col items-center focus:outline-none cursor-pointer"
                      aria-label={`المحطة ${item.year}`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 relative ${
                          isSelected
                            ? "bg-white border-[#df9d17] shadow-[0_0_15px_rgba(223,157,23,0.35)] scale-110"
                            : "bg-white border-slate-300 group-hover:border-slate-400"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isSelected ? "bg-[#df9d17] scale-125" : "bg-slate-300 group-hover:bg-slate-400"
                          }`}
                        />

                        {isSelected && (
                          <motion.div
                            layoutId="nodeRadarAr"
                            className="absolute -inset-1.5 rounded-full border border-[#df9d17]/40 animate-ping pointer-events-none"
                          />
                        )}
                      </div>

                      <div
                        className={`mt-3 px-4 py-1.5 rounded-xl border text-xs sm:text-sm font-mono font-bold transition-all duration-300 ${
                          isSelected
                            ? "bg-[#df9d17] text-white border-[#df9d17] shadow-md shadow-[#df9d17]/25 -translate-y-0.5 font-black"
                            : "bg-slate-50 text-slate-600 border-slate-200 group-hover:bg-slate-100 group-hover:text-slate-900"
                        }`}
                      >
                        {item.year}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* خط التوصيل الليزري المنقط للـ RTL */}
          <div className="relative h-16 w-full pointer-events-none hidden sm:block overflow-visible -mt-1">
            <svg className="w-full h-full overflow-visible">
              <motion.line
                animate={{
                  x1: `${[
                    "calc(100% - 3rem - 26px)",
                    "calc(75% - 1.5rem)",
                    "50%",
                    "calc(25% + 1.5rem)",
                    "calc(3rem + 26px)"
                  ][activeMilestone]}`,
                  y1: "0px",
                  x2: "50%",
                  y2: "100%",
                }}
                stroke="#df9d17"
                strokeWidth="2"
                strokeDasharray="5 5"
                className="opacity-80 filter drop-shadow-[0_0_6px_#df9d17]"
                transition={{ duration: 0.15, ease: "easeOut" }}
              />
              <motion.circle
                animate={{
                  cx: `${[
                    "calc(100% - 3rem - 26px)",
                    "calc(75% - 1.5rem)",
                    "50%",
                    "calc(25% + 1.5rem)",
                    "calc(3rem + 26px)"
                  ][activeMilestone]}`,
                  cy: "0px",
                }}
                r="3.5"
                fill="#df9d17"
                className="filter drop-shadow-[0_0_8px_#df9d17]"
                transition={{ duration: 0.15 }}
              />
              <circle
                cx="50%"
                cy="100%"
                r="4"
                fill="#df9d17"
                className="filter drop-shadow-[0_0_8px_#df9d17]"
              />
            </svg>
          </div>

          {/* مسرح الكرت المعماري الموسع بتصميم مطابق تماماً للنسخة الإنجليزية */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-50/70 p-6 sm:p-10 lg:p-12 min-h-[480px] flex items-center shadow-xs mt-6">
            <div className="absolute left-6 bottom-0 select-none pointer-events-none text-[120px] sm:text-[200px] lg:text-[240px] font-black font-mono text-slate-200/50 leading-none z-0">
              {active.year}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full relative z-10">
              {/* بوكس الصورة */}
              <div className="lg:col-span-7 relative h-[320px] sm:h-[355px] shadow-md p-2 bg-white rounded-2xl group border border-slate-200/80 order-2 lg:order-1">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    key={active.image}
                    src={active.image}
                    alt={active.title}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
                    className={`object-cover ${active.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-700 ease-out`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* جانب النصوص */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.year}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.12, ease: "easeOut" }}
                  className="lg:col-span-5 space-y-5 text-right order-1 lg:order-2"
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#df9d17]/10 border border-[#df9d17]/30 text-[#df9d17] text-[11px] font-mono font-bold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{active.badge}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1220] font-heading tracking-tight leading-tight">
                      {active.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-mono text-[#df9d17] font-semibold tracking-wide">
                      // {active.tagline}
                    </p>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                    {active.desc}
                  </p>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#df9d17] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {active.highlight}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* التحميل المسبق للصور */}
            <div className="hidden pointer-events-none" aria-hidden="true">
              {journeyMilestones.map((item) => (
                <Image key={item.year} src={item.image} alt="preload" width={20} height={20} priority />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-slate-100 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-[#df9d17]/50 hover:bg-white transition-all duration-300 space-y-4 relative overflow-hidden shadow-xs hover:shadow-md group">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#df9d17] flex items-center justify-center border border-slate-200/90 shadow-xs group-hover:scale-110 group-hover:border-[#df9d17] transition-all">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-[#0B1220] font-heading">رؤيتنا</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              نهدف إلى إرساء معايير جديدة في الكفاءة والصلابة والتصميم المعماري من خلال حلول الخيام والهياكل المتقدمة. كمزود رئيسي في الإمارات والسعودية، نسعى لنكون الخيار الأول للمنشآت المؤقتة والدائمة في دول الخليج العربي وخارجها.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-[#df9d17]/50 hover:bg-white transition-all duration-300 space-y-4 relative overflow-hidden shadow-xs hover:shadow-md group">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#df9d17] flex items-center justify-center border border-slate-200/90 shadow-xs group-hover:scale-110 group-hover:border-[#df9d17] transition-all">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-[#0B1220] font-heading">رسالتنا</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              إعادة تعريف التميز كشريك موثوق ومبتكر في تقديم الخيام والهياكل مسبقة الصنع في دبي وأبوظبي والمملكة العربية السعودية، مع الجمع بين سرعة الإنجاز، الاستدامة، والموثوقية المطلقة لتمكين عملائنا من تحقيق نجاحاتهم بثقة وأمان.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities */}
      <section className="py-28 px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto border-b border-slate-100 relative bg-white">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <span>خدمات متكاملة تسليم مفتاح</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1220] font-heading tracking-tight">
            قدراتنا الهندسية والتصنيعية الشاملة
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            تصنيع داخلي متكامل، تحليلات إنشائية معتمدة، وقدرات تركيب ميداني سريع على أوسع نطاق عبر الإمارات والسعودية.
          </p>
        </div>

        <div className="relative flex flex-col items-center gap-4">
          {expertiseList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="w-full sticky top-28 rounded-2xl p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-[#df9d17]/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] transition-all duration-300 group antialiased"
              style={{
                top: `calc(100px + ${idx * 25}px)`,
                zIndex: idx + 1,
              }}
            >
              <div className="flex items-start sm:items-center justify-between gap-6">
                <div className="flex items-start sm:items-center gap-5 sm:gap-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-[#df9d17] group-hover:bg-[#df9d17] group-hover:text-white group-hover:border-[#df9d17] transition-all shadow-xs">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1.5 text-right">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono text-[#df9d17] font-bold">.٠{idx + 1}</span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0B1220] font-heading group-hover:text-[#df9d17] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed max-w-2xl antialiased">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 text-slate-400 group-hover:border-[#df9d17] group-hover:text-[#df9d17] transition-all shrink-0">
                  <ArrowUpLeft className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Executive Message Banner */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-6xl mx-auto bg-white">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-slate-50/80 p-8 sm:p-14 shadow-sm">
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3.5 justify-start">
              <div className="p-3 rounded-2xl bg-white text-[#df9d17] border border-slate-200 shadow-xs">
                <Quote className="w-6 h-6 rotate-180" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">رسالة الإدارة العليا</span>
                <h4 className="text-lg font-black text-[#0B1220] font-heading">تحية القيادة والتطوير</h4>
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed italic">
              {`"في بيت النوخذة، نفتخر بدمج الحداثة المعمارية بأصالة تقاليدنا العريقة. كل مشروع نصنعه مستلهم من تراثنا، ليعكس التزامنا بأعلى معايير الجودة والخيام الفاخرة التي شكلت معياراً يُحتذى به في الصناعة. رسالتنا واضحة: تقديم خيام ومظلات إنشائية تجمع بين الأناقة والصلابة والابتكار الهندسي، ونتطلع بحماس لخوض تحديات وإنجازات كبرى جديدة عبر الإمارات والسعودية والخليج العربي."`}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200 text-xs font-mono text-slate-500">
              <span>الإدارة التنفيذية • بيت النوخذة للخيام والمظلات الإنشائية</span>
              <div className="flex items-center gap-1.5 text-[#df9d17] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>معايير هندسية معتمدة دولياً</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Historical Numbers Strip */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 border-t border-slate-100 bg-slate-50/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#df9d17]">
              <Award className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-[#0B1220] font-mono">+30</span>
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">عاماً من الريادة</p>
            <p className="text-xs text-slate-600 font-normal">تأسست منذ أكثر من ثلاثة عقود رائدة في السوق الخليجي.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#df9d17]">
              <Users className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-[#0B1220] font-mono">+3,000</span>
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">شريك نجاح مؤسسي وحكومي</p>
            <p className="text-xs text-slate-600 font-normal">شراكات استراتيجية ممتدة مع كبرى الوزارات والهيئات المنظمة.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#df9d17]">
              <Building className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-[#0B1220] font-mono">+6,000</span>
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">مشروع إنشائي منجز</p>
            <p className="text-xs text-slate-600 font-normal">خيام بحور واسعة وهياكل مشدودة تم تسليمها بنجاح واقتدار.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
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
    tagline: "بداية الحرفية والجودة الصناعية",
    desc: "تأسست شركة بيت النوخذة في إمارة أبوظبي كشركة رائدة في تصنيع خيام المجالس العربية التقليدية ومظلات الشد الإنشائي الفاخرة لسوق دولة الإمارات.",
    highlight: "إنشاء أول مجمع صناعي متكامل في أبوظبي.",
    stats: { label: "مساحة المنشأة الأولى", value: "٢,٥٠٠ م²" },
    image: "https://baitalnokhada.com/wp-content/uploads/2025/08/exhibition-tents-UAE.webp",
  },
  {
    year: "2005",
    badge: "التوسع الصناعي",
    title: "التوسع الصناعي والمصانع الكبرى",
    tagline: "معايير هندسية ألمانية متطورة",
    desc: "توسيع خطوط الإنتاج ونقل المصانع إلى مدينة أبوظبي الصناعية (ICAD-1) على مساحة تفوق 40,000 متر مربع مع إدخال ماكينات القص الليزري CNC واللحام عالي التردد HF.",
    highlight: "الحصول على شهادات الجودة العالمية ISO 9001:2015 واعتمادات DIN للسلامة.",
    stats: { label: "المجمع الصناعي", value: "٤٠,٠٠٠ م²" },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    year: "2015",
    badge: "القمم العالمية",
    title: "عصر القمم والمعارض الدولية الكبرى",
    tagline: "الريادة في تغطية الفعاليات الدبلوماسية والدفاعية",
    desc: "أصبح بيت النوخذة المقاول الرئيسي للهياكل المؤقتة لكبرى المعارض العالمية مثل IDEX، NAVDEX، معرض دبي للطيران، والاحتفالات الرسمية.",
    highlight: "تركيب أكثر من 3,000 هيكل عملاق بنجاح في أنحاء الإمارات.",
    stats: { label: "الهياكل المنفذة", value: "+٣,٠٠٠ وحدة" },
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=85",
  },
  {
    year: "2022",
    badge: "التوسع الإقليمي",
    title: "التوسع الإقليمي في السعودية والخليج",
    tagline: "مشاريع معمارية عابرة للحدود",
    desc: "تأسيس مكاتب وعمليات تشغيلية مباشرة في الرياض وجدة بالمملكة العربية السعودية لتلبية متطلبات مواسم الترفيه الكبرى والمناطق اللوجستية.",
    highlight: "تنفيذ أجنحة ملكية ومستودعات بحور مفتوحة عملاقة في المملكة.",
    stats: { label: "المقرات التشغيلية", value: "الإمارات والسعودية" },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    year: "2026",
    badge: "عمارة المستقبل المستدامة",
    title: "الجيل القادم من العمارة المستدامة",
    tagline: "هندسة معيارية مستقبلية",
    desc: "دمج أغشية الشد الإنشائي المهيأة للطاقة الشمسية، الألواح الصوتية المعزولة، والقاعات المكونة من طابقين للمشاريع الخليجية المستقبلية.",
    highlight: "إنجاز أكثر من 6,000 مشروع مع قدرات تنفيذ تسليم مفتاح بنسبة 100%.",
    stats: { label: "إجمالي المشاريع", value: "+٦,٠٠٠ مشروع" },
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/wedding-tents-rental.webp",
  },
];

const expertiseList = [
  {
    title: "التصميم، الهندسة والتصنيع",
    desc: "تفصيل وتصنيع أنظمة الهياكل مسبقة الصنع التي تدمج الابتكار الهندسي بالفخامة، باستخدام خامات أوروبية مطابقة للمواصفات الألمانية DIN.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    icon: Cpu,
  },
  {
    title: "تأجير وتوريد الخيام تسليم مفتاح",
    desc: "مخزون ضخم ومتاح للتركيب السريع الفوري في دبي وأبوظبي والرياض وجدة للقمم الدبلوماسية، المعارض التجارية، والاحتفالات الخاصة.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    icon: Layers,
  },
  {
    title: "التجهيز الفاخر والديكورات الملكية",
    desc: "بطانات مجالس عربية مطرزة، ثريات كريستال، واجهات زجاجية بانورامية، بوابات أوتوماتيكية، وأرضيات كاسيت مجهزة لكبار الشخصيات VIP.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    icon: Sparkles,
  },
  {
    title: "أنظمة التكييف المركزي HVAC عالية القدرة",
    desc: "وحدات تكييف صامتة ومصممة خصيصاً لضمان ثبات درجة الحرارة عند 21° مئوية داخل الخيمة حتى في درجات حرارة الصيف التي تتجاوز 50° مئوية.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    icon: ShieldCheck,
  },
];

export default function ArabicAboutPage() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const active = journeyMilestones[activeMilestone];

  return (
    <main dir="rtl" className="min-h-screen bg-[#040811] text-white selection:bg-[#D4AF37] selection:text-[#070B14] text-right font-sans">
      <Navbar />

      {/* 1. Hero Banner */}
      <section className="relative pt-36 pb-8 px-6 sm:px-12 lg:px-24 border-b border-white/5 overflow-hidden">
        {/* خلفية الإضاءة الهندسية */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30 shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>تأسست عام 1997 • إرث هندسي متواصل</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.2] font-heading"
          >
            رواد صناعة الخيام العملاقة و <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              مظلات الشد الإنشائي المعمارية
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed"
          >
            لأكثر من ثلاثة عقود، تواصل صناعات بيت النوخذة مكانتها كأكبر مصنع ومورد موثوق للخيام والهياكل النسيجية في الإمارات، السعودية، وكافة دول الخليج، مقدمة حلولاً متينة تجمع بين الفخامة الهند سية والقدرة على مواجهة أقسى التحديات المناخية.
          </motion.p>
        </div>
      </section>

      {/* 2. Company Journey Interactive Timeline (أوتار الشد المعماري وكابلات الربط) */}
      <section className="pt-10 pb-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-white/5 relative overflow-hidden">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
            <Compass className="w-3.5 h-3.5" />
            <span>أصالة التراث ومحطات الإنجاز</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
            مسيرة الشركة عبر <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">العقود</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md mx-auto leading-relaxed">
            نتتبع مسار تطورنا المستمر من صناعة الخيام الحرفية التراثية إلى صرح صناعي وهندسي عالمي متعدد الفروع.
          </p>
        </div>

        {/* منظومة أوتار الشد والسنوات مع كابلات الربط الحية للـ RTL */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* كابل الشد الأفقي الرئيسي */}
          <div className="relative py-8 mb-6">
            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-[1px] bg-white/10 pointer-events-none" />
            
            {/* خط الطاقة المتوهج المشدود - ينزلق وفق اتجاه اليمين RTL */}
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent pointer-events-none filter drop-shadow-[0_0_8px_#D4AF37]"
              animate={{ 
                right: `${(activeMilestone / (journeyMilestones.length - 1)) * 80}%`,
                width: "20%" 
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* محطات الأعوام الخمسة */}
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
                      {/* بكرة التثبيت (Rigging Node) */}
                      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-500 relative ${
                        isSelected 
                          ? "bg-[#070B14] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,1)] scale-110" 
                          : "bg-[#040811] border-white/20 group-hover:border-white/50"
                      }`}>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isSelected ? "bg-[#D4AF37] scale-125" : "bg-white/20 group-hover:bg-white/60"
                        }`} />
                        
                        {/* هالة رادارية تدور حول المحطة النشطة */}
                        {isSelected && (
                          <motion.div 
                            layoutId="nodeRadarAr"
                            className="absolute -inset-1.5 rounded-full border border-[#D4AF37]/40 animate-ping pointer-events-none"
                          />
                        )}
                      </div>

                      {/* شارة السنة */}
                      <div className={`mt-3 px-4 py-1.5 rounded-xl border text-xs sm:text-sm font-mono font-bold transition-all duration-300 ${
                        isSelected
                          ? "bg-[#D4AF37] text-[#070B14] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/25 -translate-y-1 font-black"
                          : "bg-[#090F1C]/80 text-slate-400 border-white/10 group-hover:text-white group-hover:border-white/30"
                      }`}>
                        {item.year}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* خط التوصيل الليزري المائل المتجه مباشرة إلى كرت المواصفات (متوافق مع RTL) */}
          <div className="relative h-12 w-full overflow-visible pointer-events-none hidden sm:block">
            <svg className="w-full h-full">
              <motion.line
                x1={`${90 - (activeMilestone / (journeyMilestones.length - 1)) * 80}%`}
                y1="0"
                x2="50%"
                y2="100%"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-60"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.circle
                cx="50%"
                cy="100%"
                r="3"
                fill="#D4AF37"
                transition={{ duration: 0.5 }}
              />
            </svg>
          </div>

          {/* مسرح الكرت المعماري المطور */}
          <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 bg-[#070B14]/90 backdrop-blur-2xl shadow-2xl p-6 sm:p-12 min-h-[460px] flex items-center">
            
            {/* مؤشرات الزوايا الهندسية التقنية */}
            <div className="absolute top-4 right-4 font-mono text-[9px] text-[#D4AF37]/60 flex items-center gap-1 select-none">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]/60 rounded-full" />
              <span>نقطة شد هيكلي // كود-{(activeMilestone + 1) * 102}</span>
            </div>
            <div className="absolute top-4 left-4 font-mono text-[9px] text-slate-500 select-none">
              كفاءة التحمل الإنشائي: ٩٤.٨٪
            </div>

            {/* رقم السنة كعلامة مائية متحركة وضخمة */}
            <div className="absolute left-6 bottom-0 select-none pointer-events-none text-[120px] sm:text-[210px] font-black font-mono text-white/[0.025] leading-none z-0">
              {active.year}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.year}
                initial={{ opacity: 0, scale: 0.97, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full relative z-10"
              >
                {/* الجانب الأيمن: البيانات وقصة التطور */}
                <div className="lg:col-span-7 space-y-5 text-right order-2 lg:order-1">
                  
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[#D4AF37] text-[11px] font-mono font-bold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{active.badge}</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-black text-white font-heading tracking-wide">
                      {active.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm font-mono text-[#D4AF37] font-medium">
                      // {active.tagline}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                    {active.desc}
                  </p>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-200 font-light">
                      {active.highlight}
                    </p>
                  </div>
                </div>

                {/* الجانب الأيسر: الصورة المعمارية مع حدود ليزرية */}
                <div className="lg:col-span-5 relative h-[260px] sm:h-[340px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group bg-[#090F1C] order-1 lg:order-2">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent pointer-events-none" />
                  
                  {/* شريط الإحصائية السفلي */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-slate-400">{active.stats.label}</span>
                    <span className="text-[#D4AF37] font-bold text-sm tracking-wider">{active.stats.value}</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </section>

      {/* 3. Vision & Mission (شبكة الرؤية والرسالة المتطورة) */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-[#090F1C]/80 border border-white/10 hover:border-[#D4AF37]/30 transition-colors space-y-4 relative overflow-hidden backdrop-blur-md group">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/20 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white font-heading">رؤيتنا</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              نهدف إلى إرساء معايير جديدة في الكفاءة والصلابة والتصميم المعماري من خلال حلول الخيام والهياكل المتقدمة. كمزود رئيسي في الإمارات والسعودية، نسعى لنكون الخيار الأول للمنشآت المؤقتة والدائمة في دول الخليج العربي وخارجها.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#090F1C]/80 border border-white/10 hover:border-[#D4AF37]/30 transition-colors space-y-4 relative overflow-hidden backdrop-blur-md group">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/20 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white font-heading">رسالتنا</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              إعادة تعريف التميز كشريك موثوق ومبتكر في تقديم الخيام والهياكل مسبقة الصنع في دبي وأبوظبي والمملكة العربية السعودية، مع الجمع بين سرعة الإنجاز، الاستدامة، والموثوقية المطلقة لتمكين عملائنا من تحقيق نجاحاتهم بثقة وأمان.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Core Capabilities (القدرات الهندسية والتصنيعية الشاملة) */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-white/5 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
            خدمات متكاملة تسليم مفتاح
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
            قدراتنا الهندسية والتصنيعية الشاملة
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            تصنيع داخلي متكامل، تحليلات إنشائية معتمدة، وقدرات تركيب ميداني سريع على أوسع نطاق.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseList.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl overflow-hidden bg-[#090F1C] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden bg-[#070B14]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090F1C] via-[#090F1C]/30 to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[#D4AF37]">
                  <item.icon className="w-5 h-5" />
                </div>
              </div>

              <div className="p-8 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors font-heading">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Executive Message Banner */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 bg-gradient-to-br from-[#090F1C] via-[#070B14] to-[#090F1C] p-8 sm:p-14 shadow-2xl">
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3.5 justify-start">
              <div className="p-3 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/25">
                <Quote className="w-6 h-6 rotate-180" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">رسالة الإدارة العليا</span>
                <h4 className="text-lg font-black text-white font-heading">تحية القيادة والتطوير</h4>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed italic">
              {`"في بيت النوخذة، نفتخر بدمج الحداثة المعمارية بأصالة تقاليدنا العريقة. كل مشروع نصنعه مستلهم من تراثنا، ليعكس التزامنا بأعلى معايير الجودة والخيام الفاخرة التي شكلت معياراً يُحتذى به في الصناعة. رسالتنا واضحة: تقديم خيام ومظلات إنشائية تجمع بين الأناقة والصلابة والابتكار الهندسي، ونتطلع بحماس لخوض تحديات وإنجازات كبرى جديدة عبر الإمارات والسعودية والخليج العربي."`}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 text-xs font-mono text-slate-400">
              <span>الإدارة التنفيذية • بيت النوخذة للخيام والمظلات الإنشائية</span>
              <div className="flex items-center gap-1.5 text-[#D4AF37] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>معايير هندسية معتمدة دولياً</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Historical Numbers Strip */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 border-t border-white/10 bg-[#070B14]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
              <Award className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-white font-mono">+٣٠</span>
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">عاماً من الريادة</p>
            <p className="text-xs text-slate-400 font-light">تأسست منذ أكثر من ثلاثة عقود رائدة في السوق الخليجي.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
              <Users className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-white font-mono">+٣,٠٠٠</span>
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">شريك نجاح مؤسسي وحكومي</p>
            <p className="text-xs text-slate-400 font-light">شراكات استراتيجية ممتدة مع كبرى الوزارات والهيئات المنظمة.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
              <Building className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-white font-mono">+٦,٠٠٠</span>
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">مشروع إنشائي منجز</p>
            <p className="text-xs text-slate-400 font-light">خيام بحور واسعة وهياكل مشدودة تم تسليمها بنجاح واقتدار.</p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
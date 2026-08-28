"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

const megaProjects = [
  {
    title: "جناح جيتكس جلوبال العملاق",
    category: "هيكل معرض ضخم",
    location: "مركز دبي التجاري العالمي",
    desc: "تم تنفيذ هيكل مضلع فاخر لواحدة من أكبر معارض التقنية في الشرق الأوسط، مع دمج كامل لأنظمة التكييف وهوية العلامة التجارية المخصصة.",
    video: "/Final Comp 01.mp4",
    slug: "gitex-global",
  },
  {
    title: "صالة كبار الشخصيات بمعرض دبي للطيران",
    category: "منصة طيران وفعاليات حكومية",
    location: "موقع معرض دبي للطيران، دبي",
    desc: "تركيب هيكل شد إنشائي عالي الأداء لقمة الفضاء والطيران الدولية، متضمناً بطانات داخلية فاخرة وحماية صوتية للأسقف.",
    video: "/Test.mp4",
    slug: "dubai-airshow",
  },
  {
    title: "معرض أديبك للطاقة",
    category: "معرض الطاقة والصناعة الدولي",
    location: "أدنيك، أبوظبي",
    desc: "جناح فعاليات صناعي ثقيل مصمم خصيصاً لأكبر معرض طاقة في العالم، مهندس خصيصاً لتحمل حركة الزوار الكثيفة والشاشات الرقمية الضخمة.",
    video: "/Final Comp 01.mp4",
    slug: "adipec-exhibition",
  },
  {
    title: "قاعات جلفود للضيافة والطهي",
    category: "تجارة الأغذية والضيافة",
    location: "دبي، الإمارات",
    desc: "خيام وهياكل ضخمة تحمل الهوية البصرية لأكبر تجمع للأغذية والمشروبات عالمياً، مجهزة بأجنحة ضيافة متخصصة ومتحكم بها مناخياً.",
    video: "/Test.mp4",
    slug: "gulfood",
  },
];

export default function FeaturedProjects() {
  return (
    <section dir="rtl" className="relative py-28 bg-[#0B1120]/70 border-t border-white/10 overflow-hidden text-right">
      
      {/* Glow Effect */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[180px] rounded-full pointer-events-none" />

      {/* الهيدر العلوي بمسافات جانبية واسعة ومتطابقة */}
      <div className="w-full px-12 sm:px-16 lg:px-32 mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20 shadow-inner">
              محفظة المشاريع الكبرى
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-heading leading-tight">
              أبرز المشاريع العملاقة <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
                والمعالم البارزة
              </span>
            </h2>
          </div>
          <Link
            href="/ar/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#070B14] border border-white/10 hover:border-[#D4AF37] transition-all duration-300 text-xs font-bold uppercase tracking-widest shadow-xl shrink-0"
          >
            <span>عرض كافة المشاريع المنفذة</span>
            <ArrowUpRight className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>

      {/* نظام الصفوف المتبادلة (نص وفيديو عريض) */}
      <div className="w-full px-12 sm:px-16 lg:px-32 space-y-24 mb-16">
        {megaProjects.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* قسم النص */}
              <div className="w-full lg:w-5/12 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-md shadow-sm">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-300 backdrop-blur-md bg-white/5 px-3.5 py-1.5 rounded-xl border border-white/10">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-wide font-heading">
                    {project.title}
                  </h3>
                  <p className="text-base text-slate-300/90 leading-relaxed font-light">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/ar/projects/${project.slug}`}
                    className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors pt-2 group"
                  >
                    <span>استكشاف دراسة المشروع</span>
                    <ArrowUpRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* قسم الفيديو (شغال تلقائي وثابت بدون أي زوم أو تأثيرات ماوس) */}
              <div className="w-full lg:w-7/12">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-[#070B14] border border-white/10 h-[380px] sm:h-[460px] shadow-2xl backdrop-blur-xl">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent z-10 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Flame, Clock, Award, Sparkles, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "الاحترافية والخبرة الميدانية",
    desc: "قسم هندسي متخصص بخبرة تفوق 28 عاماً من الحرفية الصناعية الملتزمة بمعايير السلامة الألمانية DIN.",
  },
  {
    num: "02",
    title: "أفضل قيمة وعائد استثماري",
    desc: "أسعار مباشرة من المصنع مع مرونة كاملة في خيارات التأجير التشغيلي وتسليم المفتاح والتصنيع المخصص.",
  },
  {
    num: "03",
    title: "موثوقية مثبتة على أرض الواقع",
    desc: "هياكل نسيجية مستدامة وعالية الجودة تم نشرها بنجاح واقتدار في أكثر من 5,000 مشروع عملاق في الإمارات والخليج.",
  },
];

const badges = [
  { icon: Award, label: "+5,000 مشروع منجز" },
  { icon: ShieldCheck, label: "معتمدون ISO 9001:2015" },
  { icon: CheckCircle2, label: "تغطية شاملة لكافة الإمارات" },
  { icon: Clock, label: "دعم ميداني 24/7" },
  { icon: Flame, label: "أقمشة PVC مقاومة للحريق" },
];

export default function ArabicWhyUsSection() {
  return (
    <section dir="rtl" className="relative py-28 px-6 bg-[#070B14] border-t border-white/10 overflow-hidden text-right">
      
      {/* خلفية محيطية مضيئة متدرجة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>المعيار الذهبي منذ عام 1997</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-heading">
            لماذا يثق كبار رواد الصناعة <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              في شركة بيت النوخذة؟
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            نقدم هندسة متناهية الدقة، اعتمادات سلامة معتمدة، وتركيبات سريعة لتسليم المفتاح مصممة خصيصاً للمواقع الملكية، معارض الدفاع، والقمم المؤسسية.
          </p>
        </div>

        {/* 3 Strategic Pillars بتصميم كروت فخمة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative p-8 sm:p-10 rounded-[2rem] bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 group flex flex-col justify-between shadow-2xl overflow-hidden backdrop-blur-xl"
            >
              {/* إضاءة خلفية خفيفة عند المرور */}
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all duration-500 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-white/80 to-white/10 opacity-80 group-hover:opacity-100 transition-opacity">
                    {pillar.num}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] group-hover:scale-150 transition-all shadow-[0_0_10px_#D4AF37]" />
                </div>
                
                <h3 className="text-xl font-extrabold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors font-heading">
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>

              {/* خط ذهبي سفلي متوهج */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/0 group-hover:via-[#D4AF37] to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Strip بتصميم أنيق ومتحرك */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6"
        >
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/40 hover:bg-white/[0.05] transition-all text-center space-y-3.5 group shadow-lg cursor-pointer"
            >
              <div className="p-3.5 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#070B14] transition-all duration-300 shadow-md">
                <badge.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 group-hover:text-white transition-colors">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
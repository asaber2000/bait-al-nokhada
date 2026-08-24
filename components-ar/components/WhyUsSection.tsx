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

export default function WhyUsSection() {
  return (
    <section dir="rtl" className="relative py-24 px-6 bg-[#070B14] border-t border-white/10 overflow-hidden text-right">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>المعيار الذهبي منذ عام 1997</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            لماذا يثق كبار رواد الصناعة <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] to-[#C5A880]">
              في شركة بيت النوخذة؟
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            نقدم هندسة متناهية الدقة، اعتمادات سلامة معتمدة، وتركيبات سريعة لتسليم المفتاح مصممة خصيصاً للمواقع الملكية، معارض الدفاع، والقمم المؤسسية.
          </p>
        </div>

        {/* 3 Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-8 rounded-3xl bg-linear-to-b from-white/5 to-white/1 border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-[#D4AF37] to-white/20">
                  {pillar.num}
                </span>
                <h3 className="text-lg font-bold tracking-wide text-white group-hover:text-[#D4AF37] transition-colors font-heading">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6"
        >
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/30 hover:bg-white/[0.04] transition-all text-center space-y-3 group"
            >
              <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:scale-110 transition-transform">
                <badge.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles, Building2, Plane, ShieldAlert } from "lucide-react";

const testimonials = [
  {
    client: "إدارة عمليات نافدكس وآيدكس",
    role: "فريق إدارة الفعاليات الحكومية",
    quote: "قدمت بيت النواخذة هياكل مؤقتة فائقة التميز في الموعد المحدد وبدون أي عوائق. بدت القاعات الرئيسية عالية الامتداد مبهرة للغاية، ووجد فريقهم الهندسي حلولاً سريعة ومتقنة لكافة التحديات الميدانية في الموقع.",
    icon: Building2,
  },
  {
    client: "قمة معرض دبي للطيران",
    role: "لجنة البنية التحتية لقطاع الطيران",
    quote: "فاقت صالات الضيافة الملكية وحظائر المعارض المخصصة كافة المعايير الدولية المعتمدة، مع أداء استثنائي لأنظمة التحكم المناخي والتكييف تحت درجات حرارة الشرق الأوسط المرتفعة.",
    icon: Plane,
  },
  {
    client: "معرض ومؤتمر أديبك للطاقة",
    role: "وفد البنية التحتية لقطاع الطاقة",
    quote: "دقة هندسية عالية، وسرعة فائقة في التسليم الجاهز، والتزام صارم ودقيق بمعايير DIN الألمانية للهياكل الثقيلة عبر كافة قاعات العرض المؤقتة.",
    icon: ShieldAlert,
  },
];

// مضاعفة الكروت 4 مرات لضمان اتصال لا نهائي بدون أي فراغ على جميع الشاشات
const repeatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function TestimonialsSectionAr() {
  return (
    <section dir="rtl" className="relative py-16 bg-[#FDFCF7] border-t border-slate-200/60 overflow-hidden font-sans text-right">

      {/* توهج خفيف في الخلفية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[220px] bg-[#e6b224]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Header مصغر وفخم */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-normal uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>آراء العملاء والشركاء</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0B1220] tracking-tight">
          خلف كل هيكل وقبة صرح{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
            تاريخ طويل من الثقة المشتركة
          </span>
        </h2>
      </div>

      {/* شريط السكرول المتصل بدون انقطاع متوجهاً نحو اليسار */}
      <div className="relative w-full overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "50%"] }}
          transition={{
            ease: "linear",
            duration: 55, // حركة هادئة وانسيابية خفيفة
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex items-center gap-6 whitespace-normal shrink-0 will-change-transform"
          style={{ width: "max-content" }}
        >
          {repeatedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[360px] sm:w-[420px] h-[205px] p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-300 flex flex-col justify-between shrink-0 shadow-xs hover:shadow-md group text-right"
            >
              <div className="space-y-3">
                <Quote className="w-5 h-5 text-[#df9d17] group-hover:text-[#b87d0e] transition-colors shrink-0 rotate-180" />
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-3 italic">
                  «{item.quote}»
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-200/80">
                <div className="p-2 rounded-xl bg-white border border-slate-200/90 text-[#df9d17] group-hover:bg-[#df9d17] group-hover:text-white group-hover:border-[#df9d17] shadow-xs transition-all duration-300 shrink-0">
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="truncate text-right">
                  <h4 className="text-sm font-bold text-[#0B1220] group-hover:text-[#df9d17] transition-colors truncate">
                    {item.client}
                  </h4>
                  <p className="text-[11px] text-[#df9d17] font-bold tracking-wide uppercase truncate">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Award } from "lucide-react";

export default function ArabicFeatureShowcase() {
  return (
    <section dir="rtl" className="relative z-20 bg-[#070B14] py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* المحتوى النصي العربي مع حركة الظهور من اليمين */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-7 space-y-6 text-right"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
            <Award className="w-4 h-4" />
            <span>خبراء في الإمارات والسعودية – منذ عام 1997</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white font-heading tracking-tight leading-[1.2]">
            خبراء في تأجير الخيام وتوريدها وتصنيعها في الإمارات العربية المتحدة والمملكة العربية السعودية – <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">منذ عام 1997</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            هل تبحث عن تأجير خيام أو خيام للبيع في الإمارات أو السعودية؟ شركة بيت النوخذة هي واحدة من الشركات الرائدة في تصنيع الخيام، مع أكثر من 30 عامًا من الخبرة في خدمة دبي، أبوظبي، الإمارات، المملكة العربية السعودية، ومنطقة الشرق الأوسط. نقدم خيام فاخرة للمناسبات، وخيام أعراس، وخيام سكن عمال، وخيام مستودعات، وخيام رمضانية، بالإضافة إلى هياكل خيام متخصصة للقطاعات العسكرية والطيران والفعاليات الرياضية.
          </p>

          <div className="pt-2 text-sm text-slate-400 space-y-3 border-t border-white/10">
            <p className="leading-relaxed">
              خيامنا عالية الجودة مصنوعة من خامات PVC الألمانية والألمنيوم الثقيل، ومصممة لتحمّل الظروف المناخية القاسية في المنطقة، ومعتمدة وفقًا للمعايير الدولية للسلامة. نحظى بثقة الجهات الحكومية، والسفارات، وشركات الفعاليات العالمية، ونوفر تسليمًا سريعًا، وتصاميم مخصصة، وتركيبًا احترافيًا. سواء كنت تحتاج إلى خيمة للإيجار مؤقتًا أو هيكل خيمة دائم، فنحن خيارك الموثوق كمورّد خيام في الإمارات والسعودية.
            </p>
            <p className="text-[#D4AF37] font-medium pt-1">
              تواصل مع بيت النوخذة للحصول على حلول خيام موثوقة — مصنّعة في الإمارات ومُرسلة إلى جميع أنحاء العالم.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-4">
            <a
              href="/ar/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#070B14] bg-gradient-to-r from-[#D4AF37] to-[#C5A880] hover:brightness-110 shadow-xl shadow-[#D4AF37]/20 transition-all hover:scale-105"
            >
              <span>احصل على استشارة</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* الصورة مع تأثير الـ Hover السلس */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-5 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl group bg-gradient-to-br from-white/[0.05] to-transparent p-2"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src="https://baitalnokhada.com/wp-content/uploads/2025/08/exhibition-tents-UAE.webp"
              alt="بيت النوخذة للخيام"
              fill
              unoptimized
              className="object-cover group-hover:scale-110 group-hover:-rotate-1 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 right-6 left-6 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-3.5 rounded-2xl flex items-center gap-3.5 shadow-xl">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-bold text-white">معتمدة وفقاً للمعايير الدولية</p>
                <p className="text-[11px] text-slate-400">خامات PVC ألمانية وألمنيوم ثقيل</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
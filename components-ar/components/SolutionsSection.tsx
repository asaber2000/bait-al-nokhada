"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: "خيام الأعراس والمناسبات",
    desc: "قاعات ملكية مخصصة للفعاليات الخارجية في الإمارات والسعودية، توفر أجواء فخمة ومصممة حسب الطلب.",
    tag: "مواقع فاخرة",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    href: "/ar/solutions/wedding-tents",
  },
  {
    title: "الخيام والملاعب الرياضية",
    desc: "هياكل هندسية توفر تحكماً مناخياً وسلامة معتمدة للملاعب، الأكاديميات، والفعاليات الرياضية الكبرى.",
    tag: "بحور واسعة",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    href: "/ar/solutions/sports-tents",
  },
  {
    title: "المستودعات والخيام الصناعية",
    desc: "خيام تخزين مؤقتة ودائمة ذات بحور مفتوحة عالية التحمل للعمليات اللوجستية والمشاريع الصناعية.",
    tag: "صناعي ولوجستي",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    href: "/ar/solutions/warehouse-tents",
  },
  {
    title: "خيام الفعاليات والقمم العملاقة",
    desc: "قاعات مؤتمرات وقمم دولية مجهزة بإضاءة ذكية، عزل صوتي، وأنظمة تكييف مركزي متكاملة.",
    tag: "قمم عالمية",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    href: "/ar/solutions/event-tents",
  },
  {
    title: "الخيام والـمجالس الرمضانية",
    desc: "هياكل تراثية عربية أصيلة مدمجة بالأناقة الحديثة لتجمعات الإفطار والمجالس الملكية.",
    tag: "تراث وعراقة",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
    href: "/ar/solutions/ramadan-tents",
  },
  {
    title: "صالات المعارض التجارية",
    desc: "أجنحة وصالات ضخمة مخصصة للمعارض الدولية، الفعاليات التجارية، وعروض الطيران عبر منطقة الخليج.",
    tag: "تجاري ومعارض",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    href: "/ar/solutions/exhibition-tents",
  },
];

export default function SolutionsSection() {
  return (
    <section dir="rtl" className="relative py-24 px-6 bg-[#070B14] border-t border-white/10 text-right">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20">
              حلول معمارية تسليم مفتاح
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
              هياكل ومظلات مصممة خصيصاً <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] to-[#C5A880]">
                لتلائم رؤيتك وتطلعاتك
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            نقدم هياكل نسيجية من الألومنيوم وأقمشة PVC المطابقة للمواصفات الألمانية، والمصممة لمواجهة قسوة مناخ الشرق الأوسط.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#0D1527]/60 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0D1527] via-transparent to-black/30 z-10 pointer-events-none" />
                
                <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                  {item.tag}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] group-hover:text-white transition-colors pt-2"
                >
                  <span>استكشاف الحلول</span>
                  <ArrowUpRight className="w-4 h-4 rotate-180 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
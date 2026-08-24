"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "أبواب الألمنيوم المتينة للخيام: تجمع بين الأمان، الأناقة والكفاءة",
    date: "14 أغسطس 2026",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    slug: "durable-tent-doors",
  },
  {
    title: "أحزمة ربط الخيام: العنصر الأساسي لضمان السلامة الإنشائية",
    date: "11 أغسطس 2026",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    slug: "tent-ratchet-straps",
  },
  {
    title: "خيام الهياكل الفولاذية مقابل الألمنيوم: أي هيكل يناسب مشروعك؟",
    date: "7 أغسطس 2026",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    slug: "steel-vs-aluminum-tents",
  },
];

export default function BlogSection() {
  return (
    <section dir="rtl" className="relative py-24 px-6 bg-[#0B1120]/60 border-t border-white/10 text-right">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
              مركز المعرفة والرؤى الهندسية
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
              أحدث رؤى وابتكارات <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] to-[#C5A880]">
                قطاع الهياكل والخيام
              </span>
            </h2>
          </div>
          <Link
            href="/ar/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:border-[#D4AF37] bg-white/5 hover:bg-[#D4AF37]/10 text-slate-200 hover:text-[#D4AF37] text-sm font-semibold transition-all"
          >
            <span>عرض كافة المقالات</span>
            <ArrowUpRight className="w-4 h-4 rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group rounded-2xl overflow-hidden bg-[#070B14] border border-white/10 hover:border-[#D4AF37]/40 transition-all flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#D4AF37]">{blog.date}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug font-heading">
                    {blog.title}
                  </h3>
                </div>

                <Link
                  href={`/ar/news/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors pt-2"
                >
                  <span>قراءة المقال بالكامل</span>
                  <ArrowUpRight className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
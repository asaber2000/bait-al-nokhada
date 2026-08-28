"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "أبواب الخيام المصنوعة من الألومنيوم المتين: تجمع بين الأمان، الأناقة والفعالية",
    date: "14 أغسطس 2026",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    slug: "durable-tent-doors",
  },
  {
    title: "أحزمة ربط الخيام: العنصر الأساسي لضمان السلامة الهيكلية",
    date: "11 أغسطس 2026",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    slug: "tent-ratchet-straps",
  },
  {
    title: "خيام الهياكل الفولاذية مقابل الهياكل المصنوعة من الألومنيوم: أيها يناسب مشروعك؟",
    date: "7 أغسطس 2026",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    slug: "steel-vs-aluminum-tents",
  },
];

export default function ArabicBlogSection() {
  return (
    <section dir="rtl" className="relative py-28 bg-[#070B14] border-t border-white/10 overflow-hidden text-right">
      
      {/* Background Glow Effect الفخم */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#D4AF37]/5 blur-[180px] rounded-full pointer-events-none" />

      {/* الحاوية الرئيسية بنفس المسافات الواسعة المطابقة لباقي الصفحة */}
      <div className="w-full px-12 sm:px-16 lg:px-32">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20 shadow-inner">
              مركز المعرفة والرؤى
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
              أحدث رؤى الابتكار <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
                والصناعة الهندسية
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/ar/news"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border border-white/15 hover:border-[#D4AF37] bg-white/5 hover:bg-[#D4AF37] text-slate-200 hover:text-[#070B14] text-sm font-bold transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>عرض كافة المقالات</span>
              <ArrowUpRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Blogs Grid بالحركات والتفاعل الفخم */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[2rem] overflow-hidden bg-[#0D1527] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col shadow-2xl hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1527] via-transparent to-transparent opacity-80" />
                
                {/* Date Badge مدمج على الصورة لشكل أشيك */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-[#D4AF37]">
                  {blog.date}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 leading-snug font-heading">
                    {blog.title}
                  </h3>
                </div>

                <Link
                  href={`/ar/news/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D4AF37] group-hover:text-white transition-colors pt-2"
                >
                  <span>قراءة المقال كاملاً</span>
                  <ArrowUpRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>

              {/* إطار مضيء خفيف عند الهوفر */}
              <div className="absolute inset-0 rounded-[2rem] border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/20 pointer-events-none transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
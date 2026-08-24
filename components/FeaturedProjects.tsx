"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AwesomeButton from '@/components/AwesomeButton';

const megaProjects = [
  {
    title: "GITEX GLOBAL Pavilion",
    category: "Mega Exhibition Structure",
    location: "Dubai World Trade Centre",
    desc: "Delivered a striking polygon pavilion structure for one of the Middle East's largest tech exhibitions, with full HVAC integration and custom branding setups.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    slug: "gitex-global",
  },
  {
    title: "Dubai Airshow VIP Arena",
    category: "Aviation & Government Venue",
    location: "DWC, Dubai Airshow Site",
    desc: "High-performance tensile structure installation for an international aerospace summit, featuring advanced luxury VIP interior lining and acoustic ceiling protection.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    slug: "dubai-airshow",
  },
  {
    title: "ADIPEC Energy Exhibition",
    category: "Industrial & Energy Expo",
    location: "ADNEC, Abu Dhabi",
    desc: "Custom heavy-duty event pavilion for the world's largest energy expo, engineered for heavy foot traffic and massive high-load digital displays.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    slug: "adipec-exhibition",
  },
  {
    title: "Gulfood Culinary Arenas",
    category: "Hospitality & Food Trade",
    location: "Dubai, UAE",
    desc: "Massive branded marquee structures delivered for the world's leading food & beverage gathering, equipped with specialized climate-controlled hospitality suites.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    slug: "gulfood",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative py-24 px-6 bg-[#0B1120]/70 border-t border-white/10 overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20">
              Landmark Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Featured Mega <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C5A880]">
                Iconic Projects
              </span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:border-[#D4AF37] bg-white/5 hover:bg-[#D4AF37]/10 text-slate-200 hover:text-[#D4AF37] text-sm font-semibold transition-all"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2x2 Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {megaProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl overflow-hidden bg-[#070B14] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col justify-end min-h-[420px] p-8 shadow-2xl"
            >
              {/* Background Next.js Optimized Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.55] group-hover:brightness-[0.45]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/70 to-transparent z-10 pointer-events-none" />

              {/* Card Meta Content */}
              <div className="relative z-20 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-md">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 backdrop-blur-sm bg-black/40 px-3 py-1 rounded-full border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{project.location}</span>
                  </div>
                </div>
                

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300/90 line-clamp-2 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] group-hover:text-white transition-colors pt-2"
                >
                
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
       <div className="flex justify-center items-center my-10">
        <AwesomeButton text="Explore Solutions" href="/solutions" />
      </div>
      
    </section>
  );
}
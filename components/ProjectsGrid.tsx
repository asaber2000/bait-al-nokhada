"use client";

import { useState } from "react";
import { MapPin, Calendar, Play, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectsGridProps {
  initialProjects: any[];
  filterTabs: string[];
  isArabic?: boolean;
}

export default function ProjectsGrid({ initialProjects, filterTabs, isArabic = false }: ProjectsGridProps) {
  const [activeTab, setActiveTab] = useState(filterTabs[0]);
  const [searchQuery] = useState("");

  const filteredProjects = initialProjects.filter((proj) => {
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === filterTabs[0]) return matchesSearch;
    return matchesSearch && proj.category === activeTab;
  });

  return (
    <>
      {/* Filter Tabs */}
      <div className="pt-6 flex flex-wrap items-center justify-center gap-2.5">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? "bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] shadow-lg shadow-[#D4AF37]/25 font-black scale-105"
                : "bg-[#0D1527] text-slate-300 border border-white/10 hover:bg-white/5"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.slug || idx}
              className="group rounded-3xl overflow-hidden bg-[#0D1527]/80 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between shadow-2xl"
            >
              <Link href={`/projects/${project.slug}`} className="relative h-80 w-full overflow-hidden block bg-black">
                <Image
                  src={project.coverImage}
                  alt={project.title || "Engineering Project"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#070B14] via-black/20 to-transparent pointer-events-none" />

                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                  {project.category}
                </span>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#070B14] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/40 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </Link>

              <div className="p-7 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1 text-[#D4AF37]">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.city}, {project.country}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.year}
                  </span>
                </div>

                <Link href={`/projects/${project.slug}`} className="block">
                  <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {project.title}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-slate-300 font-light line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-[#D4AF37] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:underline"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>WATCH VIDEO & CASE STUDY</span>
                  </Link>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-slate-400 hover:text-white font-medium flex items-center gap-1"
                  >
                    <span>Full Case Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
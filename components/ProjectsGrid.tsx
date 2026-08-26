"use client";

import { useState } from "react";
import { MapPin, Calendar, Play, ArrowUpRight, X } from "lucide-react";
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
  
  // State عشان نعرف إيه الفيديو اللي شغال حالياً جوه الكارت أو المودال
  const [playingVideoSlug, setPlayingVideoSlug] = useState<string | null>(null);

  const filteredProjects = initialProjects.filter((proj) => {
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === filterTabs[0]) return matchesSearch;
    return matchesSearch && proj.category?.trim().toUpperCase() === activeTab.trim().toUpperCase();
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

      {/* Projects Grid - تم تعديل العرض ليصبح عمود واحد (فيديو واحد في السطر) */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          {filteredProjects.map((project, idx) => {
            const videoUrl = project.videoUrl || project.video || project.videoFile || project.url;
            const isPlaying = playingVideoSlug === project.slug;

            return (
              <div
                key={project.slug || idx}
                className="group rounded-3xl overflow-hidden bg-[#0D1527]/90 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between shadow-2xl"
              >
                {/* Media Container: لو المستخدم ضغط تشغيل والفيديو موجود، هيشتغل مباشرة جوه الكارت */}
                <div className="relative h-96 sm:h-[450px] w-full overflow-hidden block bg-black">
                  {isPlaying && videoUrl ? (
                    <div className="relative w-full h-full">
                      <video
                        src={videoUrl}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      {/* زر لإغلاق الفيديو العودة للصورة */}
                      <button 
                        onClick={() => setPlayingVideoSlug(null)}
                        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div 
                      onClick={() => videoUrl && setPlayingVideoSlug(project.slug)}
                      className="relative w-full h-full cursor-pointer group"
                    >
                      <Image
                        src={project.coverImage}
                        alt={project.title || "Engineering Project"}
                        fill
                        sizes="100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#070B14] via-black/20 to-transparent pointer-events-none" />

                      <span className="absolute top-5 left-5 z-10 px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                        {project.category}
                      </span>

                      {/* زر التشغيل اللي لما تدوس عليه الفيديو يشتغل فوري */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#070B14] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/40 group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-current ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Information Body */}
                <div className="p-8 sm:p-10 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 text-[#D4AF37]">
                      <MapPin className="w-4 h-4" />
                      {project.city}, {project.country}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>

                  <Link href={`/projects/${project.slug}`} className="block">
                    <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {project.title}
                    </h2>
                  </Link>

                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="pt-5 border-t border-white/10 flex items-center justify-between text-sm">
                    <button
                      onClick={() => videoUrl && setPlayingVideoSlug(project.slug)}
                      className="text-[#D4AF37] font-bold uppercase tracking-wider flex items-center gap-2 hover:underline cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>WATCH VIDEO DIRECTLY</span>
                    </button>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-slate-400 hover:text-white font-medium flex items-center gap-1.5"
                    >
                      <span>Full Case Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
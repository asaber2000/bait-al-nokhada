"use client";

import { useState } from "react";
import { MapPin, Calendar, Play, ArrowUpLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectsGridArProps {
  initialProjects: any[];
  filterTabs: string[];
}

export default function ProjectsGridAr({ initialProjects, filterTabs }: ProjectsGridArProps) {
  const [activeTab, setActiveTab] = useState(filterTabs[0]);
  const [searchQuery] = useState("");
  const [playingVideoSlug, setPlayingVideoSlug] = useState<string | null>(null);

  const filteredProjects = initialProjects.filter((proj) => {
    const title = proj.title || proj.ar?.title || "";
    const city = proj.city || proj.ar?.city || "";
    const client = proj.client || proj.ar?.client || "";
    const category = proj.category || proj.ar?.category || "";

    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === filterTabs[0] || activeTab === "ALL PROJECTS" || activeTab === "جميع المشاريع") {
      return matchesSearch;
    }

    return matchesSearch && (category.trim() === activeTab.trim());
  });

  return (
    <>
      {/* أزرار الفلترة - نفس تصميم الإنجليزي */}
      <div className="pt-6 flex flex-wrap items-center justify-center gap-2.5">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? "bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] shadow-lg shadow-[#D4AF37]/25 font-black scale-105"
                : "bg-[#0D1527] text-slate-300 border border-white/10 hover:bg-white/5"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Grid - عمود واحد عريض ومطابق للإنجليزي بالضبط grid-cols-1 max-w-7xl */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-14">
          {filteredProjects.map((project, idx) => {
            const youtubeId = project.youtubeVideoId || (project.videoUrl && project.videoUrl.includes("v=") ? project.videoUrl.split("v=")[1] : null);
            const isPlaying = playingVideoSlug === project.slug;
            const arData = project.ar || project;

            return (
              <div
                key={project.slug || idx}
                className="group rounded-3xl overflow-hidden bg-[#0D1527]/90 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between shadow-2xl text-right"
              >
                {/* Media Container: نفس الأبعاد العريضة ومشغل الفيديو التفاعلي المدمج */}
                <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[350px] w-full overflow-hidden bg-black">
                  {isPlaying && youtubeId ? (
                    <div className="relative w-full h-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                        title={arData.title || project.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      {/* زر إغلاق الفيديو */}
                      <button 
                        onClick={() => setPlayingVideoSlug(null)}
                        className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-black/80 text-white hover:bg-[#D4AF37] hover:text-[#070B14] transition-all shadow-xl cursor-pointer"
                        aria-label="إغلاق الفيديو"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div 
                      onClick={() => setPlayingVideoSlug(project.slug)}
                      className="relative w-full h-full cursor-pointer group"
                    >
                      <Image
                        src={project.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87"}
                        alt={arData.title || project.title || "مشروع هندسي"}
                        fill
                        unoptimized
                        sizes="(max-width: 1280px) 100vw, 1400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-black/20 to-transparent pointer-events-none" />

                      {/* شارة التصنيف على اليمين */}
                      <span className="absolute top-5 right-5 z-10 px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                        {arData.category || project.category}
                      </span>

                      {/* زر التشغيل الذهبي الكبير بنفس حجم وموضع الإنجليزي */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-[#D4AF37] hover:bg-white text-[#070B14] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 fill-current -translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* تفاصيل المشروع بنفس المسافات الفخمة p-8 sm:p-10 */}
                <div className="p-8 sm:p-10 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 text-[#D4AF37]">
                      <MapPin className="w-4 h-4" />
                      {arData.city || project.city}، {arData.country || project.country}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 font-mono">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>

                  <Link href={`/ar/projects/${project.slug}`} className="block">
                    <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {arData.title || project.title}
                    </h2>
                  </Link>

                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-4xl">
                    {arData.summary || project.summary || arData.desc || project.desc}
                  </p>

                  <div className="pt-5 border-t border-white/10 flex items-center justify-between text-sm">
                    <button
                      onClick={() => setPlayingVideoSlug(project.slug)}
                      className="text-[#D4AF37] font-bold uppercase tracking-wider flex items-center gap-2 hover:underline cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>مشاهدة الفيديو ودراسة المشروع مباشرة</span>
                    </button>

                    <Link
                      href={`/ar/projects/${project.slug}`}
                      className="text-slate-400 hover:text-white font-medium flex items-center gap-1.5 transition-colors group/link"
                    >
                      <span>التفاصيل الهندسية الكاملة</span>
                      <ArrowUpLeft className="w-4 h-4 group-hover/link:-translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
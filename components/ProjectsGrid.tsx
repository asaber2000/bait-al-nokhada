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

export default function ProjectsGrid({ initialProjects, filterTabs }: ProjectsGridProps) {
  const [activeTab, setActiveTab] = useState(filterTabs[0]);
  const [searchQuery] = useState("");
  const [playingVideoSlug, setPlayingVideoSlug] = useState<string | null>(null);

  const filteredProjects = initialProjects.filter((proj) => {
    const matchesSearch =
      proj.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client?.toLowerCase().includes(searchQuery.toLowerCase());

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
                ? "bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] shadow-lg shadow-[#D4AF37]/25 font-black scale-105"
                : "bg-[#0D1527] text-slate-300 border border-white/10 hover:bg-white/5"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-14">
          {filteredProjects.map((project, idx) => {
            const isPlaying = playingVideoSlug === project.slug;
            
            // رابط الفيديو السحابي (أو رابط افتراضي للفحص إن كان قادماً من Sanity بدون فيديو)
            const videoSource =
              project.videoUrl ||
              "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Hero-video-for-bait-al-nokhada-tents.mp4";

            return (
              <div
                key={project.slug || idx}
                className="group rounded-3xl overflow-hidden bg-[#0D1527]/90 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between shadow-2xl"
              >
                {/* Media Box - Full Cover & Instant Launch */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  {isPlaying ? (
                    <div className="relative w-full h-full bg-black">
                      <video
                        src={videoSource}
                        controls
                        autoPlay
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      >
                        <source src={videoSource} type="video/webm" />
                        Your browser does not support video playback.
                      </video>

                      {/* زر إغلاق الفيديو والعودة للصورة */}
                      <button
                        onClick={() => setPlayingVideoSlug(null)}
                        className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/80 text-white hover:bg-[#D4AF37] hover:text-[#070B14] transition-all shadow-xl cursor-pointer"
                        aria-label="Close Video"
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
                        src={project.coverImage}
                        alt={project.title || "Engineering Project"}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 1280px) 100vw, 1400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-black/20 to-transparent pointer-events-none" />

                      <span className="absolute top-5 left-5 z-10 px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                        {project.category}
                      </span>

                      {/* زر التشغيل الذهبي المتطابق في كل الكروت */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-[#D4AF37] hover:bg-white text-[#070B14] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 fill-current ml-1" />
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

                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-4xl">
                    {project.summary}
                  </p>

                  <div className="pt-5 border-t border-white/10 flex items-center justify-between text-sm">
                    <button
                      onClick={() => setPlayingVideoSlug(project.slug)}
                      className="text-[#D4AF37] font-bold uppercase tracking-wider flex items-center gap-2 hover:underline cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Watch Video Directly</span>
                    </button>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-slate-400 hover:text-white font-medium flex items-center gap-1.5 transition-colors"
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
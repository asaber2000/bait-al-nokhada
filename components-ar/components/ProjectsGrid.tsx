"use client";

import { useState } from "react";
import { MapPin, Calendar, Play, ArrowUpLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectAutoVideo from "@/components/ProjectAutoVideo";


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
      {/* أزرار الفلترة - بتصميم الأوف وايت المعتمد */}
      <div className="pt-6 flex flex-wrap items-center justify-center gap-2.5">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeTab === tab
              ? "bg-[#df9d17] text-white shadow-md shadow-[#df9d17]/25 font-black scale-105"
              : "bg-white text-slate-700 border border-slate-200/80 hover:border-[#df9d17]/50 hover:bg-slate-50 shadow-xs"
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
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md text-right"
              >
                {/* Media Container: تشغيل ذكي تلقائي مع الحفاظ على التصميم العربي */}
                <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[350px] w-full overflow-hidden bg-black">
                  {project.videoUrl ? (
                    <ProjectAutoVideo
                      videoUrl={project.videoUrl}
                      poster={project.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87"}
                      title={arData.title || project.title}
                    />
                  ) : (
                    <Image
                      src={project.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87"}
                      alt={arData.title || project.title || "مشروع هندسي"}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 1280px) 100vw, 1400px"
                      className="object-cover"
                    />
                  )}

                  {/* شارة التصنيف على اليمين للغة العربية */}
                  <span className="absolute top-5 right-5 z-10 px-4 py-1.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#df9d17] border border-slate-200/80 shadow-xs pointer-events-none">
                    {arData.category || project.category}
                  </span>
                </div>

                {/* تفاصيل المشروع بنفس المسافات الفخمة p-8 sm:p-10 */}
                <div className="p-8 sm:p-10 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5 text-[#df9d17] font-semibold">
                      <MapPin className="w-4 h-4" />
                      {arData.city || project.city}، {arData.country || project.country}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1.5 font-mono">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>

                  <Link href={`/ar/projects/${project.slug}`} className="block">
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0B1220] group-hover:text-[#df9d17] transition-colors leading-snug font-heading tracking-tight">
                      {arData.title || project.title}
                    </h2>
                  </Link>

                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-4xl">
                    {arData.summary || project.summary || arData.desc || project.desc}
                  </p>

                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-sm">
                    <Link
                      href={`/ar/projects/${project.slug}#project-video`}
                      className="text-[#df9d17] hover:text-black font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>مشاهدة التغطية الميدانية الكاملة</span>
                    </Link>

                    <Link
                      href={`/ar/projects/${project.slug}`}
                      className="text-slate-600 hover:text-[#df9d17] font-semibold flex items-center gap-1.5 transition-colors group/link"
                    >
                      <span>التفاصيل الهندسية الكاملة</span>
                      <ArrowUpLeft className="w-4 h-4 group-hover/link:-translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div >
      </section >
    </>
  );
}
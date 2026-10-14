"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  ArrowRight,
  Send,
  Video,
  Eye,
  Boxes,
  ArrowLeft
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { projectsDatabase } from "@/app/data/projects.En";
import Footer from "../../../components/Footer";
import { client } from "@/app/lib/sanity";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  useEffect(() => {
    if (!slug) return;

    const fetchProject = async () => {
      try {
        const query = `*[_type == "projectEn" && slug.current == $slug][0]{
          titleEn,
          clientEn,
          locationEn,
          year,
          coveredArea,
          categoryEn,
          scopeOfWorkEn,
          engineeringChallengeEn,
          tentsUsedEn,
          specs {
            netArea,
            wallSystem,
            roofFinish,
            acSystem
          },
          "coverImage": image.asset->url,
          videoUrl,
          "galleryImages": projectGallery[]{
            "url": asset->url,
            "caption": "Field Documentation",
            "type": "Structural VENUE"
          },
          comparison {
            "before": beforeImage.asset->url,
            "after": afterImage.asset->url
          }
        }`;

        const data = await client.fetch(query, { slug });

        if (data) {
          setProject(data);
        } else {
          // البحث في الملف المحلي كـ Fallback
          const localMatch = projectsDatabase.find(
            (p) => p.slug.toLowerCase().trim() === slug.toLowerCase().trim()
          );

          if (localMatch) {
            setProject({
              titleEn: localMatch.title,
              clientEn: localMatch.client,
              locationEn: `${localMatch.city}, ${localMatch.country}`,
              year: localMatch.year,
              coveredArea: localMatch.area,
              categoryEn: localMatch.category,
              scopeOfWorkEn: localMatch.description,
              engineeringChallengeEn: localMatch.challengeAndSolution,
              tentsUsedEn: localMatch.relatedProducts.map(p => p.name),
              specs: {
                netArea: localMatch.area,
                wallSystem: "Modular Aluminum Frame & Wall Panels",
                roofFinish: "Dual-Layer Insulated PVC Membrane",
                acSystem: "High-Capacity Centralized HVAC"
              },
              coverImage: localMatch.coverImage,
              videoUrl: `https://www.youtube.com/watch?v=${localMatch.videoUrl}`,
              galleryImages: localMatch.galleryImages,
              comparison: localMatch.beforeAfter ? {
                before: localMatch.beforeAfter.before,
                after: localMatch.beforeAfter.after
              } : null
            });
          }
        }
      } catch (error) {
        console.error("Error fetching project details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] flex flex-col justify-between">
        <Navbar />
        <div className="text-center space-y-4 py-32">
          <p className="text-[#df9d17] font-semibold animate-pulse">Loading project details from control panel...</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] flex flex-col justify-between">
        <Navbar />
        <div className="text-center space-y-4 py-32">
          <h1 className="text-2xl font-black text-[#0B1220] font-heading">Project Not Found</h1>
          <Link href="/projects" className="text-[#df9d17] hover:underline font-bold">Back to All Projects</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
      <Navbar />

      {/* 1. Hero Banner */}
      <section className="relative pt-44 pb-20 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87"}
            alt={project.titleEn || "Project"}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-10 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF7]/60 via-[#FDFCF7]/90 to-[#FDFCF7]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-6xl mx-auto space-y-6 relative z-10 text-left">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#df9d17] hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Executed Projects</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 justify-start">
              {project.categoryEn && (
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
                  {project.categoryEn}
                </span>
              )}
              {project.locationEn && (
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200/80 text-slate-700 shadow-xs">
                  {project.locationEn}
                </span>
              )}
              {project.year && (
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200/80 text-slate-700 shadow-xs">
                  Completed {project.year}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B1220] leading-tight font-heading">
              {project.titleEn}
            </h1>
          </div>

          {/* 2. Modern Engineering HUD Dashboard */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs max-w-6xl text-left">
            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200/70 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">Client</span>
              <p className="text-xs sm:text-sm font-bold text-[#0B1220] truncate">{project.clientEn}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200/70 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">Location</span>
              <p className="text-xs sm:text-sm font-bold text-[#df9d17] truncate">{project.locationEn}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200/70 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">Year</span>
              <p className="text-xs sm:text-sm font-bold text-[#0B1220]">{project.year}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200/70 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">Covered Area</span>
              <p className="text-xs sm:text-sm font-black text-[#df9d17]">{project.coveredArea}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200/70 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">Category</span>
              <p className="text-xs sm:text-sm font-bold text-[#df9d17] truncate">{project.categoryEn}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Project Overview & Challenge */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">Scope & Execution</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1220] font-heading">Project Delivery Phases</h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {project.scopeOfWorkEn}
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <h3 className="text-sm font-bold tracking-wider text-[#df9d17]">
                Engineering Challenge & Field Solution
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {project.engineeringChallengeEn}
              </p>
            </div>

            {/* Related Tents / Structures Used */}
            {project.tentsUsedEn && project.tentsUsedEn.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Structures Implemented</h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.tentsUsedEn.map((tentName: string, idx: number) => (
                    <div
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-white text-slate-800 text-xs font-bold border border-slate-200/80 shadow-xs flex items-center gap-2 hover:border-[#df9d17]/50 transition-all"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#df9d17]" />
                      <span>{tentName}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B1220] flex items-center gap-2 justify-start">
                <Boxes className="w-4 h-4 text-[#df9d17]" />
                <span>Technical Specifications</span>
              </h3>
              <div className="divide-y divide-slate-100 text-xs">
                {project.specs?.netArea && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">Net Area</span>
                    <span className="text-[#0B1220] font-bold text-right">{project.specs.netArea}</span>
                  </div>
                )}
                {project.specs?.wallSystem && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">Wall System</span>
                    <span className="text-[#0B1220] font-bold text-right">{project.specs.wallSystem}</span>
                  </div>
                )}
                {project.specs?.roofFinish && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">Roof Finish</span>
                    <span className="text-[#0B1220] font-bold text-right">{project.specs.roofFinish}</span>
                  </div>
                )}
                {project.specs?.acSystem && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">AC System</span>
                    <span className="text-[#0B1220] font-bold text-right">{project.specs.acSystem}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Rich Media & Video Gallery */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto space-y-12 border-b border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">Visual & Field Documentation</span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1220] font-heading tracking-tight">Project Gallery & Video</h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Click on any image to zoom in and examine structure details.
          </p>
        </div>

        {/* Video Tour */}
        {project.videoUrl && (
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#df9d17] justify-start">
              <Video className="w-4 h-4" />
              <span>Operational Video & Timelapse Tour</span>
            </div>
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-black">
              <iframe
                className="w-full h-full"
                src={project.videoUrl.replace("watch?v=", "embed/")}
                title={project.titleEn}
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Photo Grid */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {project.galleryImages.map((img: any, idx: number) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img.url)}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-slate-200/80 hover:border-[#df9d17] transition-all shadow-xs hover:shadow-md bg-slate-100"
              >
                <Image
                  src={img.url}
                  alt={img.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-[#df9d17] border border-slate-200/80 shadow-xs">
                    {img.type}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <p className="text-xs font-semibold text-white leading-snug">{img.caption}</p>
                  <div className="w-8 h-8 rounded-full bg-[#df9d17] text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-black transition-colors">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Before / After Slider */}
        {project.comparison?.before && project.comparison?.after && (
          <div className="pt-10 space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">Site Transformation</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1220] font-heading">Before and After Rapid Deployment</h3>
            </div>

            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200/80 select-none shadow-md">
              <Image
                src={project.comparison.after}
                alt="After Delivery"
                fill
                className="object-cover"
              />
              <span className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-white/95 text-xs font-mono font-bold text-[#df9d17] border border-slate-200/80 shadow-xs z-10">
                After Completion
              </span>

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <Image
                  src={project.comparison.before}
                  alt="Before Construction"
                  fill
                  className="object-cover max-w-none"
                  style={{ width: "100%" }}
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/80 text-xs font-mono font-bold text-white z-10">
                  Bare Site Ground
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
              />

              <div
                className="absolute top-0 bottom-0 w-1 bg-[#df9d17] pointer-events-none z-20 shadow-[0_0_10px_#df9d17]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#df9d17] text-white font-bold text-xs flex items-center justify-center shadow-lg">
                  ↔
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Expanded view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="pb-24 pt-6 px-6 max-w-5xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-slate-200/90 text-center space-y-5 shadow-xs">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
              Turnkey Engineering Consultation
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading tracking-tight">
              Planning a Similar Engineering Project?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
              Contact our engineering management in Abu Dhabi & Dubai for custom site layouts, 3D CAD studies, and direct factory pricing.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider hover:scale-105 shadow-md shadow-[#df9d17]/20 transition-all flex items-center gap-2"
            >
              <span>Request Technical Consultation</span>
              <Send className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
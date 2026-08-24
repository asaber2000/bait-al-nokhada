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
              videoUrl: `https://www.youtube.com/watch?v=${localMatch.youtubeVideoId}`,
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
      <main className="min-h-screen bg-[#070B14] text-white flex flex-col justify-between">
        <Navbar />
        <div className="text-center space-y-4 py-32">
          <p className="text-[#D4AF37] animate-pulse">Loading project details from control panel...</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-[#070B14] text-white flex flex-col justify-between">
        <Navbar />
        <div className="text-center space-y-4 py-32">
          <h1 className="text-2xl font-bold">Project Not Found</h1>
          <Link href="/projects" className="text-[#D4AF37] underline">Back to All Projects</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      {/* 1. Hero Banner */}
      <section className="relative pt-44 pb-20 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87"}
            alt={project.titleEn || "Project"}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#070B14] via-[#070B14]/90 to-[#070B14]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-200 h-87.5 bg-[#D4AF37]/15 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-6xl mx-auto space-y-6 relative z-10 text-left">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#D4AF37] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Executed Projects</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 justify-start">
              {project.categoryEn && (
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                  {project.categoryEn}
                </span>
              )}
              {project.locationEn && (
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300">
                  {project.locationEn}
                </span>
              )}
              {project.year && (
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300">
                  Completed {project.year}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-heading">
              {project.titleEn}
            </h1>

            <p className="text-sm sm:text-base text-[#C5A880] font-semibold tracking-wide">
              Client / Authority: {project.clientEn}
            </p>
          </div>

          {/* 2. Modern Engineering HUD Dashboard */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-5 rounded-3xl bg-[#0D1527]/90 border border-white/10 shadow-2xl backdrop-blur-xl max-w-6xl text-left">
            <div className="p-4 rounded-2xl bg-white/3 border border-white/5 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Client</span>
              <p className="text-xs sm:text-sm font-bold text-white truncate">{project.clientEn}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/3 border border-white/5 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Location</span>
              <p className="text-xs sm:text-sm font-bold text-[#D4AF37] truncate">{project.locationEn}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/3 border border-white/5 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Year</span>
              <p className="text-xs sm:text-sm font-bold text-white">{project.year}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/3 border border-white/5 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Covered Area</span>
              <p className="text-xs sm:text-sm font-black text-[#D4AF37]">{project.coveredArea}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/3 border border-white/5 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Category</span>
              <p className="text-xs sm:text-sm font-bold text-[#D4AF37] truncate">{project.categoryEn}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Project Overview & Challenge */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Scope & Execution</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">Project Delivery Phases</h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {project.scopeOfWorkEn}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0D1527] border border-[#D4AF37]/30 space-y-3">
              <h3 className="text-sm font-bold tracking-wider text-[#D4AF37]">
                Engineering Challenge & Field Solution
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {project.engineeringChallengeEn}
              </p>
            </div>

            {/* Related Tents / Structures Used */}
            {project.tentsUsedEn && project.tentsUsedEn.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Structures Implemented</h4>
                <div className="flex flex-wrap gap-3">
                  {project.tentsUsedEn.map((tentName: string, idx: number) => (
                    <div
                      key={idx}
                      className="px-4 py-2.5 rounded-xl bg-white/5 text-white text-xs font-bold border border-white/10 flex items-center gap-2"
                    >
                      <span>{tentName}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#0D1527] border border-white/10 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 justify-start">
                <Boxes className="w-4 h-4 text-[#D4AF37]" />
                <span>Technical Specifications</span>
              </h3>
              <div className="divide-y divide-white/10 text-xs">
                {project.specs?.netArea && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-400 font-medium">Net Area</span>
                    <span className="text-white font-bold text-right">{project.specs.netArea}</span>
                  </div>
                )}
                {project.specs?.wallSystem && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-400 font-medium">Wall System</span>
                    <span className="text-white font-bold text-right">{project.specs.wallSystem}</span>
                  </div>
                )}
                {project.specs?.roofFinish && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-400 font-medium">Roof Finish</span>
                    <span className="text-white font-bold text-right">{project.specs.roofFinish}</span>
                  </div>
                )}
                {project.specs?.acSystem && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-400 font-medium">AC System</span>
                    <span className="text-white font-bold text-right">{project.specs.acSystem}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Rich Media & Video Gallery */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12 border-b border-white/10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Visual & Field Documentation</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">Project Gallery & Video</h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Click on any image to zoom in and examine structure details.
          </p>
        </div>

        {/* Video Tour */}
        {project.videoUrl && (
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] justify-start">
              <Video className="w-4 h-4" />
              <span>Operational Video & Timelapse Tour</span>
            </div>
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-black">
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
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#D4AF37]/60 transition-all shadow-xl bg-black"
              >
                <Image
                  src={img.url}
                  alt={img.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-black/80 text-[#D4AF37] border border-[#D4AF37]/30">
                    {img.type}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <p className="text-xs font-semibold text-white leading-snug">{img.caption}</p>
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#070B14] flex items-center justify-center shrink-0">
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Site Transformation</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">Before and After Rapid Deployment</h3>
            </div>

            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-white/15 select-none shadow-2xl">
              <Image
                src={project.comparison.after}
                alt="After Delivery"
                fill
                className="object-cover"
              />
              <span className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-black/80 text-xs font-bold text-[#D4AF37] z-10">
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
                <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/80 text-xs font-bold text-white z-10">
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
                className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] pointer-events-none z-20 shadow-[0_0_10px_#D4AF37]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#D4AF37] text-[#070B14] font-bold text-xs flex items-center justify-center shadow-lg">
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
      <section className="py-20 px-6 max-w-5xl mx-auto text-center space-y-6">
        <h3 className="text-2xl sm:text-4xl font-black text-white font-heading">Planning a Similar Engineering Project?</h3>
        <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto">
          Contact our engineering management in Abu Dhabi & Dubai for custom site layouts, 3D CAD studies, and direct factory pricing.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl shadow-[#D4AF37]/20"
        >
          <span>Request Technical Consultation</span>
          <Send className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
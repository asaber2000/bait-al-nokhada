import type { Metadata } from "next";
import { ArrowLeft, Video, Boxes, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsDatabase } from "@/app/data/projects.En";
import { client } from "@/app/lib/sanity";
import ProjectInteractiveMedia from "@/components/ProjectInteractiveMedia";

export const revalidate = 60; // Instant Cache & ISR

async function getProjectData(slug: string) {
  try {
    const query = `*[_type in ["projectEn", "projectsEn"] && slug.current == $slug][0]{
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
      "coverImage": coalesce(heroImageUrl, image.asset->url),
      videoUrl,
      "galleryImages": projectGallery[]{
        "url": asset->url,
        "caption": coalesce(caption, "Field Documentation"),
        "type": coalesce(type, "Structural Venue")
      },
      comparison {
        "before": beforeImage.asset->url,
        "after": afterImage.asset->url
      },
      seo {
        metaTitle,
        metaDescription,
        breadcrumbTitle,
        canonicalUrl,
        robots {
          noIndex,
          noFollow
        }
      }
    }`;

    const sanityItem = await client.fetch(query, { slug }, { next: { revalidate: 60 } });

    if (sanityItem) {
      return {
        titleEn: sanityItem.titleEn,
        clientEn: sanityItem.clientEn || "Official Authority",
        locationEn: sanityItem.locationEn || "UAE",
        year: sanityItem.year || "2026",
        coveredArea: sanityItem.coveredArea || "Custom Area",
        categoryEn: sanityItem.categoryEn || "Landmark Venues",
        scopeOfWorkEn: sanityItem.scopeOfWorkEn || "Turnkey engineering design, fabrication, and rapid on-site erection.",
        engineeringChallengeEn: sanityItem.engineeringChallengeEn || "Engineered to withstand harsh desert weather conditions while maintaining rapid deployment standards.",
        tentsUsedEn: sanityItem.tentsUsedEn || [],
        specs: {
          netArea: sanityItem.specs?.netArea || sanityItem.coveredArea || "As Specified",
          wallSystem: sanityItem.specs?.wallSystem || "Modular Aluminum Frame & Wall Panels",
          roofFinish: sanityItem.specs?.roofFinish || "Dual-Layer Insulated PVC Membrane",
          acSystem: sanityItem.specs?.acSystem || "High-Capacity Centralized HVAC"
        },
        coverImage: sanityItem.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        videoUrl: sanityItem.videoUrl || "",
        galleryImages: sanityItem.galleryImages || [],
        comparison: sanityItem.comparison?.before && sanityItem.comparison?.after ? sanityItem.comparison : null,
        seo: sanityItem.seo || null
      };
    }
  } catch (error) {
    console.error("Error fetching English project from Sanity:", error);
  }

  // Fallback to local dataset
  const cleanSlug = slug.toLowerCase().trim();
  const localMatch = projectsDatabase.find((p) => p.slug.toLowerCase().trim() === cleanSlug);

  if (localMatch) {
    return {
      titleEn: localMatch.title,
      clientEn: localMatch.client,
      locationEn: `${localMatch.city}, ${localMatch.country}`,
      year: localMatch.year,
      coveredArea: localMatch.area,
      categoryEn: localMatch.category,
      scopeOfWorkEn: localMatch.description,
      engineeringChallengeEn: localMatch.challengeAndSolution,
      tentsUsedEn: localMatch.relatedProducts ? localMatch.relatedProducts.map((p: any) => p.name) : [],
      specs: {
        netArea: localMatch.area,
        wallSystem: "Modular Aluminum Frame & Wall Panels",
        roofFinish: "Dual-Layer Insulated PVC Membrane",
        acSystem: "High-Capacity Centralized HVAC"
      },
      coverImage: localMatch.coverImage,
      videoUrl: localMatch.videoUrl ? (localMatch.videoUrl.startsWith("http") ? localMatch.videoUrl : `https://www.youtube.com/watch?v=${localMatch.videoUrl}`) : "",
      galleryImages: localMatch.galleryImages || [],
      comparison: localMatch.beforeAfter ? {
        before: localMatch.beforeAfter.before,
        after: localMatch.beforeAfter.after
      } : null,
      seo: null
    };
  }

  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) {
    return { title: "Project Not Found | Bait Al Nokhada" };
  }

  const metaTitle = project.seo?.metaTitle || `${project.titleEn} | Engineering Case Study | Bait Al Nokhada`;
  const metaDescription = project.seo?.metaDescription || project.scopeOfWorkEn?.slice(0, 160) || "Explore engineering landmark case studies and turnkey deployment by Bait Al Nokhada.";
  const canonicalUrl = project.seo?.canonicalUrl || `https://baitalnokhada.com/projects/${slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !project.seo?.robots?.noIndex,
      follow: !project.seo?.robots?.noFollow,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] flex flex-col justify-between">
        <Navbar />
        <div className="text-center space-y-4 py-44">
          <h1 className="text-2xl font-black text-[#0B1220] font-heading">Project Not Found</h1>
          <Link href="/projects" className="text-[#df9d17] hover:underline font-bold">Back to All Projects</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const currentUrl = `https://baitalnokhada.com/projects/${slug}`;
  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://baitalnokhada.com/#organization",
        "name": "Bait Al Nokhada Tents & Fabric Structures",
        "url": "https://baitalnokhada.com",
        "logo": "https://baitalnokhada.com/icons/bait-al-nokhada-final-arabic-logo.svg"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${currentUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://baitalnokhada.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://baitalnokhada.com/projects"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.seo?.breadcrumbTitle || project.titleEn,
            "item": currentUrl
          }
        ]
      },
      {
        "@type": "Article",
        "@id": `${currentUrl}#article`,
        "headline": project.seo?.metaTitle || project.titleEn,
        "description": project.seo?.metaDescription || project.scopeOfWorkEn,
        "image": [project.coverImage],
        "inLanguage": "en-US",
        "mainEntityOfPage": currentUrl,
        "publisher": {
          "@id": "https://baitalnokhada.com/#organization"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <Navbar />

      {/* 1. Hero Banner */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage}
            alt={project.titleEn}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-10 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF7]/60 via-[#FDFCF7]/90 to-[#FDFCF7]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="site-container max-w-7xl mx-auto w-full space-y-8 relative z-10 text-left">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#df9d17] hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Executed Projects</span>
          </Link>

          {/* البادجات والعنوان بعرض الحاوية الكامل المتناسق */}
          <div className="space-y-4 w-full">
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

            <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading uppercase">
              {project.titleEn}
            </h1>
          </div>

          {/* 2. Modern Engineering HUD Dashboard - بعرض الحاوية الكامل لنفس خط المشاريع */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs w-full text-left">
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200/60 bg-[#FDFCF7]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">  
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

      {/* 4. Rich Media & Universal Video Player */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-b border-slate-200/60 bg-[#FDFCF7]">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">Visual & Field Documentation</span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1220] font-heading tracking-tight">Project Gallery & Video</h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Click on any image to zoom in and examine structure details.
          </p>
        </div>

        {/* Universal Video Player: S3 & YouTube */}
        {project.videoUrl && (
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#df9d17] justify-start">
              <Video className="w-4 h-4" />
              <span>Operational Video & Timelapse Tour</span>
            </div>
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-black">
              {project.videoUrl.includes("youtube.com") || project.videoUrl.includes("youtu.be") ? (
                <iframe
                  className="w-full h-full"
                  src={
                    project.videoUrl.includes("embed/")
                      ? project.videoUrl
                      : `https://www.youtube.com/embed/${project.videoUrl.split("v=")[1]?.split("&")[0] ||
                      project.videoUrl.split("/").pop()?.split("?")[0]
                      }?rel=0&modestbranding=1`
                  }
                  title={project.titleEn}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source
                    src={project.videoUrl}
                    type={project.videoUrl.toLowerCase().includes(".webm") ? "video/webm" : "video/mp4"}
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        )}

        {/* Interactive Gallery & Comparison Slider */}
        <ProjectInteractiveMedia
          galleryImages={project.galleryImages}
          comparison={project.comparison}
        />
      </section>

      {/* Bottom CTA */}
      <section className="pb-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
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
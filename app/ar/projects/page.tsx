import { Sparkles } from "lucide-react";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { projectsDatabase } from "../../data/projects.Ar";
import { client } from "@/app/lib/sanity";
import ProjectsGridAr from "@/components-ar/components/ProjectsGrid";
import type { Metadata } from "next";

// نفس مصفوفة التصنيفات المسطحة لتتطابق حركة أزرار الفلترة بالملي
const filterTabs = [
  "جميع المشاريع",
  "المعارض والقمم الدولية",
  "المنشآت والملاعب الرياضية",
  "المجالس الملكية وVIP"
];

export const revalidate = 60; // تفعيل الكاش اللحظي فائق السرعة

async function getSanityArabicProjects() {
  try {
    const query = `*[_type in ["project", "projectAr", "projectsAr"] && defined(titleAr)] | order(_createdAt desc){
      titleAr,
      clientAr,
      locationAr,
      year,
      coveredArea,
      categoryAr,
      scopeOfWorkAr,
      "slug": slug.current,
      "coverImage": image.asset->url,
      videoUrl
    }`;

    const sanityData = await client.fetch(query, {}, { next: { revalidate: 60 } });

    return (sanityData || []).map((item: any) => {
      const locationParts = (item.locationAr || "دبي، الإمارات").split("،");
      const city = locationParts[0]?.trim() || "دبي";
      const country = locationParts[1]?.trim() || "الإمارات";

      return {
        slug: item.slug,
        coverImage: item.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        videoUrl: item.videoUrl || null, // <--- أضف هذا السطر هنا
        year: item.year || "2026",
        category: item.categoryAr || "المجالس الملكية وVIP",
        title: item.titleAr,
        summary: item.scopeOfWorkAr,
        city: city,
        country: country,
        client: item.clientAr
      };
    });
  } catch (error) {
    console.error("Error fetching Arabic projects from Sanity:", error);
    return [];
  }
}

const BASE_URL = "https://baitalnokhada.com";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "ريادة هندسية في تنفيذ المشاريع الكبرى والفعاليات العالمية | بيت النوخذة",
    description: "نوثق هنا نخبة من مشاريعنا الميدانية المنجزة؛ من قاعات المعارض الدولية والمنشآت اللوجستية إلى مجالس الاستقبال الفاخرة في الإمارات والمنطقة.",
    alternates: {
      canonical: `${BASE_URL}/ar/projects/`,
      languages: {
        "en-AE": `${BASE_URL}/projects/`,
        "ar-AE": `${BASE_URL}/ar/projects/`,
        "x-default": `${BASE_URL}/projects/`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-video-preview": -1,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      type: "website",
      locale: "ar_AE",
      alternateLocale: ["en_AE"],
      url: `${BASE_URL}/ar/projects/`,
      siteName: "مصنع بيت النوخذة للخيام",
      title: "ريادة هندسية في تنفيذ المشاريع الكبرى والفعاليات العالمية | بيت النوخذة",
      description: "نوثق هنا نخبة من مشاريعنا الميدانية المنجزة؛ من قاعات المعارض الدولية والمنشآت اللوجستية إلى مجالس الاستقبال الفاخرة في الإمارات والمنطقة.",
    },
  };
}

export default async function ArabicProjectsCatalogPage() {
  const sanityProjects = await getSanityArabicProjects();
  
  // فلترة المحلي لمنع تكرار الكروت مع مشاريع سانتي
  const sanitySlugs = new Set(sanityProjects.map((p: any) => p.slug));
  const remainingLocal = projectsDatabase.filter((lp: any) => !sanitySlugs.has(lp.slug));
  const allProjects = [...sanityProjects, ...remainingLocal];

  const arabicProjectsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${BASE_URL}/ar/#organization`,
        "name": "مصنع بيت النوخذة للخيام",
        "url": `${BASE_URL}/ar/`,
        "logo": `${BASE_URL}/logo.png`
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/ar/#website`,
        "url": `${BASE_URL}/ar/`,
        "name": "مصنع بيت النوخذة للخيام",
        "publisher": { "@id": `${BASE_URL}/ar/#organization` },
        "inLanguage": "ar-AE"
      },
      {
        "@type": "CollectionPage",
        "@id": `${BASE_URL}/ar/projects/#webpage`,
        "url": `${BASE_URL}/ar/projects/`,
        "name": "ريادة هندسية في تنفيذ المشاريع الكبرى والفعاليات العالمية | بيت النوخذة",
        "description": "استعرض نخبة مشاريعنا الهندسية المنجزة من المعارض الكبرى والمنشآت في الإمارات.",
        "inLanguage": "ar-AE",
        "isPartOf": {
          "@id": `${BASE_URL}/ar/#website`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/ar/projects/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": `${BASE_URL}/ar/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "المشاريع",
            "item": `${BASE_URL}/ar/projects/`
          }
        ]
      },
      {
        "@type": "ItemList",
        "url": `${BASE_URL}/ar/projects/`,
        "numberOfItems": allProjects.length,
        "itemListElement": allProjects.map((project: any, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.summary || project.category,
            "image": project.coverImage,
            "url": `${BASE_URL}/ar/projects/${project.slug}`
          }
        }))
      }
    ]
  };

  return (
    <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(arabicProjectsSchema) }}
      />
      <Navbar />

      {/* Hero Banner المعماري الفاخر */}
      <section className="relative pt-44 pb-16 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>سجل إنجازات معتمد • تميز هندسي موثق</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0B1220] leading-tight font-heading">
            ريادة هندسية في تنفيذ المشاريع الكبرى<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
               والفعاليات العالمية
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            نوثق هنا نخبة من مشاريعنا الميدانية المنجزة؛ من قاعات المعارض الدولية والمنشآت اللوجستية، إلى مجالس الاستقبال الفاخرة المصنعة محلياً وفق أعلى المعايير الهندسية في الإمارات والمنطقة.
          </p>
        </div>
      </section>

      {/* شبكة المشاريع العربية الموحدة */}
      <ProjectsGridAr initialProjects={allProjects} filterTabs={filterTabs} />

      <Footer />
    </main>
  );
}
  "use client";

  import { useState, useEffect } from "react";
  import { Sparkles, MapPin, Calendar, Play, ArrowUpLeft } from "lucide-react";
  import Image from "next/image";
  import Link from "next/link";
  import Navbar from "@/components-ar/components/Navbar.Ar";
  import Footer from "@/components-ar/components/Footer.Ar";
  import { projectsDatabase } from "../../data/projects.Ar";
  import { client } from "@/app/lib/sanity";

  const filterTabs = [
    { en: "ALL PROJECTS", ar: "جميع المشاريع" },
    { en: "EXHIBITIONS & SUMMITS", ar: "المعارض والقمم الدولية" },
    { en: "SPORTS & ARENAS", ar: "المنشآت والملاعب الرياضية" },
    { en: "VIP & ROYAL MAJLIS", ar: "المجالس الملكية وVIP" }
  ];

  export default function ArabicProjectsCatalogPage() {
    const [activeTab, setActiveTab] = useState("ALL PROJECTS");
  const [searchQuery, setSearchQuery] = useState("");
  
  // 1. التعديل هنا: نخلي القيمة الابتدائية للداتا هي الداتا المحلية مباشرة عشان تظهر فوراً
  const [allProjects, setAllProjects] = useState<any[]>(projectsDatabase);
  const [loading, setLoading] = useState(false); // مش هنحتاج تحميل وهمي

  // جلب ودمج المشاريع في الخلفية بدون ما نوقف عرض الصفحة
  useEffect(() => {
    const fetchSanityProjects = async () => {
      try {
        const query = `*[_type == "project" && defined(titleAr)] | order(_createdAt desc){
          titleAr,
          clientAr,
          locationAr,
          year,
          coveredArea,
          categoryAr,
          scopeOfWorkAr,
          "slug": slug.current,
          "coverImage": image.asset->url
        }`;

        const sanityData = await client.fetch(query, {}, { cache: 'no-store' });

        const formattedSanityProjects = (sanityData || []).map((item: any) => ({
          slug: item.slug,
          coverImage: item.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
          year: item.year || "2026",
          category: "VIP & Royal Majlis",
          ar: {
            title: item.titleAr,
            summary: item.scopeOfWorkAr,
            city: item.locationAr || "دبي",
            country: "الإمارات",
            category: item.categoryAr || "المجالس الملكية وVIP",
            client: item.clientAr
          }
        }));

        // دمج داتا سانتي مع الداتا المحلية أول ما ترجع
        if (formattedSanityProjects.length > 0) {
          setAllProjects([...formattedSanityProjects, ...projectsDatabase]);
        }
      } catch (error) {
        console.error("Error fetching projects from Sanity:", error);
      }
    };

    fetchSanityProjects();
  }, []);

    const filteredProjects = allProjects.filter((proj: any) => {
      const projTitle = proj.ar?.title || proj.title || "";
      const projCity = proj.ar?.city || proj.city || "";
      const projClient = proj.ar?.client || proj.client || "";

      const matchesSearch =
        projTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        projCity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        projClient.toLowerCase().includes(searchQuery.toLowerCase());

      if (activeTab === "ALL PROJECTS") return matchesSearch;
      if (activeTab === "EXHIBITIONS & SUMMITS") return matchesSearch && proj.category === "Exhibitions & Summits";
      if (activeTab === "SPORTS & ARENAS") return matchesSearch && proj.category === "Sports & Arenas";
      if (activeTab === "VIP & ROYAL MAJLIS") return matchesSearch && proj.category === "VIP & Royal Majlis";
      return matchesSearch;
    });

    return (
      <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
        <Navbar />

        {/* Hero Header */}
        <section className="relative pt-44 pb-16 px-6 border-b border-white/10 overflow-hidden">
          <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-187.5 h-87.5 bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>سجل إنجازات هندسية موثقة • أكثر من 6,000 مشروع منجز</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-heading">
              قمم عالمية ومشاريع كبرى <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
                تم تنفيذها تسليم مفتاح
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              استكشف قاعات المعارض العملاقة، الصالات الرياضية المغطاة، وخيام الفعاليات والقصور الملكية المنجزة في الإمارات ودول الخليج.
            </p>

            {/* Filter Tabs */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-2.5">
              {filterTabs.map((tab) => (
                <button
                  key={tab.en}
                  onClick={() => setActiveTab(tab.en)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                    activeTab === tab.en
                      ? "bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] shadow-lg shadow-[#D4AF37]/25 font-black scale-105"
                      : "bg-[#0D1527] text-slate-300 border border-white/10 hover:bg-white/5"
                  }`}
                >
                  {tab.ar}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects 2-Column Grid */}
          <section className="py-16 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project: any, idx: number) => {
                const arData = project.ar || {
                  title: project.title,
                  summary: project.summary,
                  city: project.city,
                  country: project.country,
                  category: project.category,
                };

                return (
                  <div
                    key={project.slug || idx}
                    className="group rounded-3xl overflow-hidden bg-[#0D1527]/80 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between shadow-2xl"
                  >
                    {/* Media Image Container */}
                    <Link href={`/ar/projects/${project.slug}`} className="relative h-80 w-full overflow-hidden block bg-black">
                      <Image
                        src={project.coverImage}
                        alt={arData.title || "مشروع هندسي"}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#070B14] via-black/20 to-transparent pointer-events-none" />

                      <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                        {arData.category}
                      </span>

                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#070B14] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/40 group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-current mr-1 rotate-180" />
                        </div>
                      </div>
                    </Link>

                    {/* Information Body */}
                    <div className="p-7 space-y-4 text-right">
                      <div className="flex items-center gap-3 text-xs text-slate-400 font-medium justify-start">
                        <span className="flex items-center gap-1 text-[#D4AF37]">
                          <MapPin className="w-3.5 h-3.5" />
                          {arData.city}، {arData.country}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {project.year}
                        </span>
                      </div>

                      <Link href={`/ar/projects/${project.slug}`} className="block">
                        <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#D4AF37] transition-colors leading-snug font-heading">
                          {arData.title}
                        </h2>
                      </Link>

                      <p className="text-xs sm:text-sm text-slate-300 font-light line-clamp-2 leading-relaxed">
                        {arData.summary}
                      </p>

                      {/* Action Link Bottom Bar */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                        <Link
                          href={`/ar/projects/${project.slug}`}
                          className="text-[#D4AF37] font-bold tracking-wider flex items-center gap-1.5 hover:underline"
                        >
                          <Play className="w-3.5 h-3.5 fill-current rotate-180" />
                          <span>مشاهدة الفيديو ودراسة المشروع</span>
                        </Link>

                        <Link
                          href={`/ar/projects/${project.slug}`}
                          className="text-slate-400 hover:text-white font-medium flex items-center gap-1"
                        >
                          <span>التفاصيل الهندسية الكاملة</span>
                          <ArrowUpLeft className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        <Footer />
      </main>
    );
  }
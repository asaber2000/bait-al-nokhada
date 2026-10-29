import {
  Sparkles,
  ArrowLeft,
  Send,
  CheckCircle2,
  Maximize2,
  PhoneCall,
  Boxes,
  ShieldCheck,
  FileText,
  Clock,
  Layers,
  Award
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { productsDatabase } from "@/app/data/products.En";
import { client } from "@/app/lib/sanity";
import ProductGalleryLightbox from "@/components/ProductGalleryLightbox";

async function getProduct(slug: string) {
  try {
    const query = `*[_type in ["productsEn", "productEn"] && slug.current == $slug][0]{
      titleEn,
      summaryEn,
      summaryAr,
      overviewTitleEn,
      overviewDescEn,
      engineeredAdvantages,
      topBadges,
      availableProfiles[]{
        sizeName,
        dimensions,
        capacity
      },
      engineeringDataSheet{
        mainFrame,
        steelComponents,
        windLoad,
        operatingTemp,
        fabricFire,
        roofCovering,
        wallOptions,
        standardSpans
      },
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      productGallery[]{
        "imageUrl": asset->url,
        alt,
        title
      }
    }`;

    const sanityItem = await client.fetch(query, { slug }, { cache: 'no-store' });

    if (sanityItem) {
      return {
        slug: sanityItem.slug,
        name: sanityItem.titleEn,
        tagline: sanityItem.summaryEn || sanityItem.summaryAr || "Engineered architectural tent solution.",
        descriptionTitle: sanityItem.overviewTitleEn || "Structural Design & Material Standards",
        badges: sanityItem.topBadges || ["DIN 4102 B1 • High Wind Resistance"],
        description: sanityItem.overviewDescEn || "Engineered with high-frequency welded PVC membranes and aerospace aluminum frames designed to withstand extreme GCC climates.",
        heroImage: sanityItem.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        features: sanityItem.engineeredAdvantages || [
          "German DIN EN 13782 structural safety certification",
          "High-frequency welded translucent or opaque PVC fabric",
          "Modular bay spacing allowing infinite expansion",
          "Corrosion-resistant anodized aluminum alloy frame"
        ],
        models: sanityItem.availableProfiles?.length > 0
          ? sanityItem.availableProfiles.map((p: any) => ({
            name: p.sizeName || "Profile Model",
            size: p.dimensions || "Custom Span",
            capacity: p.capacity || "High Capacity"
          }))
          : [{ name: "Model Standard", size: "Custom Span", capacity: "High Capacity" }],
        specs: [
          { label: "Main Frame Structure", value: sanityItem.engineeringDataSheet?.mainFrame || "Hard pressed extruded aluminum 6061/T6" },
          { label: "Steel Components", value: sanityItem.engineeringDataSheet?.steelComponents || "Hot-dip galvanized steel" },
          { label: "Wind Load Tolerance", value: sanityItem.engineeringDataSheet?.windLoad || "120 km/h (0.5 kN/m²)" },
          { label: "Operating Temperature", value: sanityItem.engineeringDataSheet?.operatingTemp || "-30°C to +70°C" },
          { label: "Fabric Fire Retardancy", value: sanityItem.engineeringDataSheet?.fabricFire || "DIN 4102 B1, M2" },
          { label: "Roof Covering", value: sanityItem.engineeringDataSheet?.roofCovering || "Translucent / Opaque PVC" },
          { label: "Side Wall Options", value: sanityItem.engineeringDataSheet?.wallOptions || "Glass, ABS, Sandwich Panel, PVC" },
          { label: "Available Spans", value: sanityItem.engineeringDataSheet?.standardSpans || "3m to 60m clear span" }
        ],
        gallery: sanityItem.productGallery?.length > 0
          ? sanityItem.productGallery.map((g: any) => g.imageUrl)
          : null
      };
    }
  } catch (error) {
    console.error("Error fetching product detail from Sanity:", error);
  }
  const localMatch = productsDatabase.find((p) => p.slug === slug);
  if (localMatch) return localMatch;

  return productsDatabase[0];
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  const productGallery = (product as any)?.gallery;
  const galleryImages: string[] = Array.isArray(productGallery) && productGallery.length > 0
    ? productGallery
    : [
      product.heroImage,
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    ];

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
      <Navbar />

      {/* 1. Grand Hero Section: معدل بشبكة متناسقة وصورة بارزة في اليمين */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div className="absolute inset-0 z-0">
          <Image
            src={product.heroImage}
            alt={product.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-10 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF7]/60 via-[#FDFCF7]/90 to-[#FDFCF7]" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-[#df9d17]/5 blur-[160px] rounded-full pointer-events-none" />
        </div>

        <div className="site-container max-w-7xl mx-auto w-full relative z-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17] hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* جهة النصوص والأزرار */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap gap-2">
                {((product as any).badges || [(product as any).badge]).map((b: string, idx: number) => (
                  <div key={idx} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading uppercase">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                {product.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider hover:scale-105 shadow-md shadow-[#df9d17]/20 transition-all flex items-center gap-2"
                >
                  <span>Request Structural Quotation</span>
                  <Send className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/971505932598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-[#df9d17] font-bold text-xs uppercase tracking-wider border border-slate-200/80 shadow-xs transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#df9d17]" />
                  <span>Engineering WhatsApp Desk</span>
                </a>
              </div>
            </div>

            {/* جهة الصورة البارزة لملء الفراغ العلوي الذي حددته */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group">
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center text-xs pointer-events-none">
                  <span className="text-white/80 font-sans tracking-wider text-[11px]">Bait Al Nokhada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Engineering Specifications */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 bg-[#FDFCF7]">
        <div className="site-container max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* الجانب الأيسر (7 أعمدة): النصوص والمميزات والجودة */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
                  Technical Overview
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1220] font-heading tracking-tight leading-[1.2]">
                  {(product as any).descriptionTitle || "Structural Design & Material Standards"}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* بطاقة المميزات الهندسية */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-xs">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#df9d17] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Engineered Advantages & Climate Certifications</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {product.features.map((feat: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#df9d17] shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* بطاقة الجودة والاعتمادات */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-[#df9d17]" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B1220]">
                      GCC Deployment & Quality Assurance
                    </h4>
                  </div>
                  <span className="text-[10px] text-[#df9d17] font-mono font-bold uppercase bg-[#df9d17]/10 px-2.5 py-1 rounded-md border border-[#df9d17]/30">
                    ISO 9001:2015
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FDFCF7] border border-slate-200/70">
                    <Clock className="w-4 h-4 text-[#df9d17] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0B1220] font-bold mb-0.5">Rapid Turnkey Setup</strong>
                      <span className="text-slate-600 leading-normal">Fast modular assembly engineered for strict event and commercial timelines.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FDFCF7] border border-slate-200/70">
                    <Layers className="w-4 h-4 text-[#df9d17] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0B1220] font-bold mb-0.5">Thermal Multi-Layering</strong>
                      <span className="text-slate-600 leading-normal">Optimized HVAC efficiency ensuring stable internal climate control up to 55°C.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-100">
                  <span className="text-slate-500 font-normal">Need custom structural calculations for this profile?</span>
                  <Link
                    href="/contact"
                    className="text-[#df9d17] hover:underline font-bold flex items-center gap-1"
                  >
                    Consult Structural Engineer <FileText className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* الجانب الأيمن (5 أعمدة): المقاسات والداتا شيت */}
            <div className="lg:col-span-5 space-y-6">
              {/* كرت المقاسات */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200/80 space-y-5 shadow-xs">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B1220] flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#df9d17]" />
                  <span>Available Profiles & Guest Capacities</span>
                </h3>
                <div className="space-y-2.5">
                  {product.models.map((mod: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl border transition-all flex items-center justify-between bg-[#FDFCF7] border-slate-200/70 text-slate-600 hover:border-[#df9d17]/50"
                    >
                      <div>
                        <strong className="block text-sm font-bold text-[#0B1220]">{mod.name}</strong>
                        <span className="text-xs text-[#df9d17] font-semibold">{mod.size}</span>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white text-slate-700 border border-slate-200/80 shadow-xs">
                        {mod.capacity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* كرت الداتا شيت */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-xs">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <Boxes className="w-4 h-4 text-[#df9d17]" />
                  <span>Official Engineering Data Sheet</span>
                </h3>
                <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {product.specs.map((spec: any, idx: number) => (
                    <div key={idx} className="py-3 flex justify-between gap-4">
                      <span className="text-slate-500 font-medium">{spec.label}</span>
                      <span className="text-[#0B1220] font-bold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
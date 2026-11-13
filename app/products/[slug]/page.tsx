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
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { productsDatabase } from "@/app/data/products.En";
import { client } from "@/app/lib/sanity";
import ProductGalleryLightbox from "@/components/ProductGalleryLightbox";

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const localSlugs = (productsDatabase || []).map((item) => ({ slug: item.slug }));
    const query = `*[_type in ["productsEn", "productEn"] && defined(slug.current)]{ "slug": slug.current }`;
    const sanitySlugs = await client.fetch(query).catch(() => []);

    const combined = [
      ...localSlugs,
      ...(sanitySlugs || []).map((item: any) => ({ slug: item.slug })),
    ];

    const uniqueSlugs = Array.from(new Set(combined.map((item) => item.slug)))
      .filter(Boolean)
      .map((slug) => ({ slug }));

    return uniqueSlugs;
  } catch (error) {
    return (productsDatabase || []).map((item) => ({ slug: item.slug }));
  }
}

async function getSanityProductBySlug(slug: string) {
  try {
    const query = `*[_type in ["productsEn", "productEn"] && slug.current == $slug][0]{
      titleEn,
      summaryEn,
      summaryAr,
      topBadges,
      "slug": slug.current,
      "catalogImage": catalogImage.asset->url,
      "coverImage": coverImage.asset->url,
      overviewTitleEn,
      overviewDescEn,
      engineeredAdvantages,
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
      productGallery[]{
        "imageUrl": asset->url
      }
    }`;
    return await client.fetch(query, { slug }, { cache: "no-store" });
  } catch (error) {
    return null;
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let sanityProduct = null;
  try {
    sanityProduct = await getSanityProductBySlug(slug);
  } catch (e) {
    sanityProduct = null;
  }

  // 1. جلب العنصر المحلي الواحد والـ Fallback بنفس أسلوب الملف العربي النظيف
  const localMatch = productsDatabase.find((p) => p.slug === slug);
  const fallbackProduct = productsDatabase[0] || ({} as any);
  const activeProduct = localMatch || fallbackProduct;

  let product: any = null;
  let enData: any = null;

  if (sanityProduct) {
    product = {
      slug: sanityProduct.slug || slug,
      catalogImage:
        sanityProduct.catalogImage ||
        (activeProduct as any)?.catalogImage ||
        sanityProduct.coverImage ||
        activeProduct?.heroImage,
      heroImage:
        sanityProduct.coverImage ||
        activeProduct?.heroImage ||
        sanityProduct.catalogImage ||
        (activeProduct as any)?.catalogImage ||
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    };
    enData = {
      name: sanityProduct.titleEn || activeProduct?.name || "Architectural Structure",
      badge: sanityProduct.topBadges?.[0] || (activeProduct as any)?.badge || "DIN 4102 B1",
      tagline:
        sanityProduct.summaryEn ||
        sanityProduct.summaryAr ||
        activeProduct?.tagline ||
        "Engineered architectural tent solution.",
      overviewTitle:
        sanityProduct.overviewTitleEn ||
        (activeProduct as any)?.overviewTitle ||
        "Structural Design & Material Standards",
      description:
        sanityProduct.overviewDescEn ||
        sanityProduct.summaryEn ||
        activeProduct?.description ||
        "Engineered with aerospace-grade aluminum frames and high-frequency welded PVC membranes.",
      features: sanityProduct.engineeredAdvantages || activeProduct?.features || [
        "German DIN EN 13782 structural safety certification",
        "Corrosion-resistant anodized aluminum alloy frame",
        "High-frequency welded translucent or opaque PVC fabric",
        "Modular bay spacing allowing infinite expansion",
      ],
      models:
        sanityProduct.availableProfiles?.length > 0
          ? sanityProduct.availableProfiles.map((prof: any) => ({
              name: prof.sizeName || "Standard Profile",
              size: prof.dimensions || "Custom Span",
              capacity: prof.capacity || "High Capacity",
            }))
          : activeProduct?.models || [
              { name: "Standard Model", size: "Custom Span", capacity: "High Capacity" },
            ],
      specs: [
        {
          label: "Main Frame Structure",
          value:
            sanityProduct.engineeringDataSheet?.mainFrame ||
            activeProduct?.specs?.[0]?.value ||
            "Hard pressed extruded aluminum 6061/T6",
        },
        {
          label: "Steel Components",
          value:
            sanityProduct.engineeringDataSheet?.steelComponents ||
            activeProduct?.specs?.[1]?.value ||
            "Hot-dip galvanized steel",
        },
        {
          label: "Wind Load Tolerance",
          value:
            sanityProduct.engineeringDataSheet?.windLoad ||
            activeProduct?.specs?.[2]?.value ||
            "120 km/h (0.5 kN/m²)",
        },
        {
          label: "Operating Temperature",
          value:
            sanityProduct.engineeringDataSheet?.operatingTemp ||
            activeProduct?.specs?.[3]?.value ||
            "-30°C to +70°C",
        },
        {
          label: "Fabric Fire Retardancy",
          value:
            sanityProduct.engineeringDataSheet?.fabricFire ||
            activeProduct?.specs?.[4]?.value ||
            "DIN 4102 B1, M2",
        },
        {
          label: "Roof Covering",
          value:
            sanityProduct.engineeringDataSheet?.roofCovering ||
            activeProduct?.specs?.[5]?.value ||
            "Translucent / Opaque PVC",
        },
        {
          label: "Side Wall Options",
          value:
            sanityProduct.engineeringDataSheet?.wallOptions ||
            activeProduct?.specs?.[6]?.value ||
            "Glass, ABS, Sandwich Panel, PVC",
        },
        {
          label: "Available Spans",
          value:
            sanityProduct.engineeringDataSheet?.standardSpans ||
            activeProduct?.specs?.[7]?.value ||
            "3m to 60m clear span",
        },
      ],
    };
  } else {
    product = activeProduct;
    enData = activeProduct;
  }

  if (!product || !enData) {
    product = productsDatabase[0] || {};
    enData = product;
  }

  // 2. إدارة صور المعرض: جلب من سانتي، ثم من المصفوفة المحلية، دون تكرار صورة الهيرو
  const galleryImages: string[] =
    sanityProduct?.productGallery?.length > 0
      ? sanityProduct.productGallery.map((img: any) => img.imageUrl).filter(Boolean)
      : (activeProduct as any)?.gallery && (activeProduct as any).gallery.length > 0
      ? (activeProduct as any).gallery
      : [
          product?.catalogImage ||
            "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
        ];

  return (
    <main
      dir="ltr"
      className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans text-left"
    >
      <Navbar />

      {/* Grand Hero Section */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        {/* خلفية الهيرو الباهتة */}
        <div className="absolute inset-0 z-0">
          <Image
            src={
              product?.heroImage ||
              product?.catalogImage ||
              "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
            }
            alt={enData?.name || "Bait Al Nokhada Tents"}
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{enData?.badge || "DIN 4102 B1"}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading uppercase">
                {enData?.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                {enData?.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/contact-us"
                  className="px-7 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider hover:scale-105 shadow-md shadow-[#df9d17]/20 transition-all flex items-center gap-2"
                >
                  <span>REQUEST A QUOTE</span>
                  <Send className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/971505932598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-[#df9d17] font-bold text-xs uppercase tracking-wider border border-slate-200/80 shadow-xs transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#df9d17]" />
                  <span>SPEAK WITH AN EXPERT</span>
                </a>
              </div>
            </div>

            {/* بطاقة صورة المنتج بالهيرو الداخلي (Full aspect-video بدون قص) */}
            <div className="lg:col-span-5 relative w-full">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group">
                <Image
                  src={
                    product?.heroImage ||
                    product?.catalogImage ||
                    activeProduct?.heroImage ||
                    (activeProduct as any)?.catalogImage ||
                    "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                  }
                  alt={enData?.name || "Bait Al Nokhada Tents"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center text-xs pointer-events-none">
                  <span className="text-white/95 font-sans tracking-wider text-[11px] bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15 shadow-sm">
                    Bait Al Nokhada
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Engineering Specifications & Features Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 bg-[#FDFCF7]">
        <div className="site-container max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
                  MANUFACTURING EXCELLENCE
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1220] font-heading tracking-tight leading-[1.2]">
                  {enData?.overviewTitle || "Structural Design & Material Standards"}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  {enData?.description}
                </p>
              </div>

              {/* شبكة كروت المميزات */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {enData?.features?.map((feat: any, idx: number) => {
                  const title =
                    typeof feat === "string"
                      ? feat.includes(" - ")
                        ? feat.split(" - ")[0]
                        : feat
                      : feat.title || feat;
                  const desc =
                    typeof feat === "string"
                      ? feat.includes(" - ")
                        ? feat.split(" - ")[1]
                        : ""
                      : feat.desc || feat.description || "";

                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#df9d17]/50 transition-all space-y-2 flex flex-col justify-start text-left"
                    >
                      <h3 className="text-sm font-bold text-[#0B1220] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#df9d17] shrink-0" />
                        <span className="leading-snug">{title}</span>
                      </h3>
                      {desc && (
                        <p className="text-xs text-slate-500 font-normal leading-relaxed pl-6">
                          {desc}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* الجانب الأيمن: المقاسات والداتا شيت */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-xs">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#df9d17] flex items-center gap-2">
                  <Maximize2 className="w-4 h-4" />
                  <span>Available Profiles & Guest Capacities</span>
                </h3>
                <div className="space-y-2">
                  {enData?.models?.map((mod: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl border transition-all flex items-center justify-between bg-[#FDFCF7] border-slate-200/70 text-slate-600"
                    >
                      <div>
                        <strong className="block text-sm font-bold text-[#0B1220]">
                          {mod.name}
                        </strong>
                        <span className="text-xs text-[#df9d17] font-semibold">{mod.size}</span>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white text-slate-700 border border-slate-200/80 shadow-xs">
                        {mod.capacity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-7 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-xs">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <Boxes className="w-4 h-4 text-[#df9d17]" />
                  <span>Official Engineering Data Sheet</span>
                </h3>
                <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {enData?.specs?.map((spec: any, idx: number) => (
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

      {/* 3. Engineering Gallery & Project Showcase */}
      <ProductGalleryLightbox images={galleryImages} productName={enData?.name || "Tents"} />

      {/* 4. Technical RFQ Call to Action */}
      <section className="pb-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-slate-200/90 text-center space-y-5 shadow-xs">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
              DIRECT FACTORY CONSULTATION & PRICING
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading tracking-tight">
              Planning a Specialized Tent Project for Your Event?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
              Connect directly with our engineering team for site visits, customized 3D structural
              layouts, and competitive direct-from-factory quotations.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider hover:scale-105 shadow-md shadow-[#df9d17]/20 transition-all flex items-center gap-2"
            >
              <span>Request a Technical Proposal & Quote</span>
              <Send className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
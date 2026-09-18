import { 
  Sparkles, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  Maximize2, 
  PhoneCall, 
  Boxes, 
  ShieldCheck, 
  Award,
  Clock,
  Layers,
  FileText
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { productsDatabase } from "@/app/data/products.Ar";
import { client } from "@/app/lib/sanity";
import ProductGalleryLightboxAr from "@/components-ar/components/ProductGalleryLightbox";

// 1. توليد الـ Slugs ثابتاً للسرعة الخارقة (SSG)
export async function generateStaticParams() {
  try {
    const query = `*[_type == "product" && defined(slug.current)]{ "slug": slug.current }`;
    const slugs = await client.fetch(query);
    return (slugs || []).map((item: any) => ({ slug: item.slug }));
  } catch (error) {
    return [];
  }
}

// 2. دالة جلب بيانات منتج واحد من سانتي بناءً على الـ slug
async function getSanityProductBySlug(slug: string) {
  try {
    const query = `*[_type == "product" && slug.current == $slug][0]{
      titleAr,
      summaryAr,
      topBadges,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      overviewTitleAr,
      overviewDescAr,
      engineeredAdvantages,
      availableProfiles,
      engineeringDataSheet {
        mainFrame,
        steelComponents,
        windLoad,
        operatingTemp,
        fabricFire,
        roofCovering,
        wallOptions,
        standardSpans
      },
      "productGallery": productGallery[]{
        "url": asset->url
      }
    }`;
    return await client.fetch(query, { slug }, { next: { revalidate: 60 } });
  } catch (error) {
    return null;
  }
}

const generateProductGraphSchema = (product: any, arData: any) => {
  const currentUrl = `https://baitalnokhada.com/ar/products/${product.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": "https://baitalnokhada.com/#place",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.93410630",
          "longitude": "55.06500100"
        },
        "hasMap": "https://www.google.com/maps/search/?api=1&query=24.93410630, 55.06500100",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Land No. TP 010102 - Technopark",
          "addressLocality": "Mina Jebel Ali",
          "addressRegion": "National Industries Park - Dubai",
          "postalCode": "Dubai",
          "addressCountry": "AE"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://baitalnokhada.com/#organization",
        "name": "Bait Al Nokhada",
        "url": "https://baitalnokhada.com",
        "email": "info@baitalnokhada.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Land No. TP 010102 - Technopark",
          "addressLocality": "Mina Jebel Ali",
          "addressRegion": "National Industries Park - Dubai",
          "postalCode": "Dubai",
          "addressCountry": "AE"
        },
        "logo": {
          "@type": "ImageObject",
          "@id": "https://baitalnokhada.com/#logo",
          "url": "https://baitalnokhada.com/wp-content/uploads/2024/08/Brand-identity-2_.png",
          "width": 1894,
          "height": 1319
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+971558850631",
            "contactType": "customer support"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+97143444091",
            "contactType": "customer support"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://baitalnokhada.com/#website",
        "url": "https://baitalnokhada.com",
        "name": "BAITALNOKHADA TENTS FACTORY -HEAD OFFICE DUBAI",
        "publisher": {
          "@id": "https://baitalnokhada.com/#organization"
        },
        "inLanguage": "ar"
      },
      {
        "@type": "WebPage",
        "@id": `${currentUrl}#webpage`,
        "url": currentUrl,
        "name": arData.name,
        "isPartOf": {
          "@id": "https://baitalnokhada.com/#website"
        },
        "inLanguage": "ar"
      },
      {
        "@type": "Product",
        "name": arData.name,
        "description": arData.tagline,
        "@id": `${currentUrl}#richSnippet`,
        "isPartOf": {
          "@id": `${currentUrl}#webpage`
        },
        "image": {
          "@type": "ImageObject",
          "url": product.heroImage
        },
        "url": currentUrl
      }
    ]
  };
};

export default async function ArabicProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. نبحث أولاً في الداتا المحلية
  let product: any = productsDatabase.find((p) => p.slug === slug);
  let arData: any = product ? product.ar : null;

  // 2. إذا لم يكن موجوداً محلياً، نجلبه مباشرة من سانتي!
  const sanityProduct = await getSanityProductBySlug(slug);

  if (sanityProduct) {
    product = {
      slug: sanityProduct.slug,
      heroImage: sanityProduct.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    };
    arData = {
      name: sanityProduct.titleAr || "منتج مخصص",
      badge: sanityProduct.topBadges?.[0] || "DIN 4102 B1",
      tagline: sanityProduct.summaryAr || "حلول خيام معمارية مبتكرة.",
      overviewTitle: sanityProduct.overviewTitleAr || "التصميم الإنشائي ومعايير جودة المواد",
      description: sanityProduct.overviewDescAr || sanityProduct.summaryAr || "",
      features: sanityProduct.engineeredAdvantages || ["معايير ألمانية معتمدة", "مقاومة عالية للرياح"],
      models: sanityProduct.availableProfiles?.length > 0 
        ? sanityProduct.availableProfiles.map((prof: any) => ({
            name: prof.sizeName || "طراز قياسي",
            size: prof.dimensions || "مواصفات خاصة",
            capacity: prof.capacity || "حسب الطلب"
          }))
        : [{ name: "موديل أساسي", size: "مقاس قياسي", capacity: "متعدد الاستخدام" }],
      specs: [
        { label: "الهيكل الإنشائي الرئيسي", value: sanityProduct.engineeringDataSheet?.mainFrame || "ألومنيوم فضاء معالج 6061/T6" },
        { label: "المكونات الفولاذية", value: sanityProduct.engineeringDataSheet?.steelComponents || "صلب مجلفن على الساخن" },
        { label: "مقاومة الرياح القصوى", value: sanityProduct.engineeringDataSheet?.windLoad || "120 كم/ساعة" },
        { label: "درجات الحرارة التشغيلية", value: sanityProduct.engineeringDataSheet?.operatingTemp || "-30°C إلى +70°C" },
        { label: "معايير مقاومة الحريق", value: sanityProduct.engineeringDataSheet?.fabricFire || "DIN 4102 B1, M2" },
        { label: "غطاء السقف والغشاء", value: sanityProduct.engineeringDataSheet?.roofCovering || "بي في سي عالي الكثافة معتم/شبه شفاف" },
        { label: "خيارات الجدران الجانبية", value: sanityProduct.engineeringDataSheet?.wallOptions || "زجاج مقسى، ساندويتش بانل، ABS" },
        { label: "البحور القياسية المتاحة", value: sanityProduct.engineeringDataSheet?.standardSpans || "من 10م حتى 60م بحر مفتوح" }
      ]
    };
  }

  // Fallback لو المنتج مش موجود خالص
  if (!product || !arData) {
    product = productsDatabase[0];
    arData = product.ar;
  }

  const galleryImages: string[] = sanityProduct?.productGallery?.length > 0 
    ? sanityProduct.productGallery.map((img: any) => img.url).filter(Boolean)
    : [
        product.heroImage,
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      ];

  const schemaData = generateProductGraphSchema(product, arData);

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar />

      {/* 1. Grand Hero Section: معدل بتوزيع ثنائي وصورة بارزة لملء الفراغ */}
      <section className="relative pt-44 pb-20 px-6 border-b border-white/10 overflow-hidden text-right">
        <div className="absolute inset-0 z-0">
          <Image
            src={product.heroImage}
            alt={arData.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 brightness-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/90 via-[#070B14]/95 to-[#070B14]" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-[#D4AF37]/15 blur-[160px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/ar/products"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#D4AF37] hover:text-white transition-colors mb-8"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة إلى كتالوج المنتجات بالكامل</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* جهة النصوص والأزرار */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/25">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{arData.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-heading">
                {arData.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                {arData.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/ar/contact"
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black text-xs uppercase tracking-wider hover:scale-105 shadow-xl shadow-[#D4AF37]/20 transition-all flex items-center gap-2"
                >
                  <span>طلب دراسة فنية وعرض سعر</span>
                  <Send className="w-4 h-4 rotate-180" />
                </Link>

                <a
                  href="https://wa.me/971505932598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#0D1527] hover:bg-white/10 text-white font-bold text-xs tracking-wider border border-white/15 transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                  <span>استشارة هندسية فورية عبر الواتساب</span>
                </a>
              </div>
            </div>

            {/* بطاقة صورة المنتج لملء الفراغ الجانبي */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-tr from-[#0D1527] to-white/5 shadow-2xl group">
                <Image
                  src={product.heroImage}
                  alt={arData.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[#D4AF37] font-semibold">
                    مواصفات قياسية معتمدة
                  </span>
                  <span className="text-slate-400 font-sans">بيت النوخذة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Engineering Specifications & Dimensions Matrix */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10 text-right">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* العمود الأيمن: النظرة العامة + المميزات + بطاقة المعايير الإنشائية لملء الفراغ */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                نظرة هندسية عامة
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
                {arData.overviewTitle || "التصميم الإنشائي ومعايير جودة المواد"}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {arData.description}
              </p>
            </div>

            {/* المميزات الهندسية */}
            <div className="p-7 rounded-3xl bg-[#0D1527] border border-[#D4AF37]/30 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold tracking-wider text-[#D4AF37] flex items-center gap-2 justify-start">
                <ShieldCheck className="w-5 h-5" />
                <span>المميزات الهندسية واعتمادات مقاومة المناخ</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                {arData.features.map((feat: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 justify-start">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* بطاقة ضمان الجودة والمعايير المعتمدة لملء الفراغ الكبير */}
            <div className="p-7 rounded-3xl bg-[#0D1527]/80 border border-white/10 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                  <h4 className="text-sm font-bold tracking-wider text-white">
                    معايير الجودة ومطابقة الأكواد الإنشائية الخليجية
                  </h4>
                </div>
                <span className="text-[10px] text-[#D4AF37] font-mono uppercase bg-[#D4AF37]/10 px-2.5 py-1 rounded-md border border-[#D4AF37]/20">
                  ISO 9001:2015
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold mb-0.5">جاهزية وسرعة التركيب</strong>
                    <span className="text-slate-400 leading-normal">أنظمة تركيب مسبقة الصنع تضمن الإنجاز في الجداول الزمنية الحرجة للمشاريع.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Layers className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold mb-0.5">عزل حراري متعدد الطبقات</strong>
                    <span className="text-slate-400 leading-normal">كفاءة تبريد قصوى تقلل استهلاك الطاقة وتتحمل حرارة الصيف حتى 55 درجة مئوية.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-white/5">
                <span className="text-slate-400 font-light">هل تحتاج لحسابات إنشائية مخصصة لموقعك؟</span>
                <Link 
                  href="/ar/contact" 
                  className="text-[#D4AF37] hover:underline font-bold flex items-center gap-1"
                >
                  استشر مهندسينا الإنشائيين <FileText className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* العمود الأيسر: المقاسات وجدول البيانات */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-[#0D1527] border border-white/10 space-y-5 shadow-2xl">
              <h3 className="text-sm font-bold tracking-wider text-white flex items-center gap-2 justify-start">
                <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                <span>المقاسات المتاحة وسعة الحضور التقديرية</span>
              </h3>
              <div className="space-y-2.5">
                {arData.models.map((mod: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl border transition-all flex items-center justify-between bg-white/[0.02] border-white/5 text-slate-400 hover:bg-white/[0.05]"
                  >
                    <div>
                      <strong className="block text-sm font-bold text-white">{mod.name}</strong>
                      <span className="text-xs text-[#D4AF37] font-medium">{mod.size}</span>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5">
                      {mod.capacity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#0D1527] border border-white/10 space-y-4 shadow-xl">
              <h3 className="text-xs font-bold tracking-wider text-slate-400 flex items-center gap-2 justify-start">
                <Boxes className="w-4 h-4 text-[#D4AF37]" />
                <span>جدول البيانات الهندسية المعتمدة</span>
              </h3>
              <div className="divide-y divide-white/10 text-xs sm:text-sm">
                {arData.specs.map((spec: any, idx: number) => (
                  <div key={idx} className="py-3 flex justify-between gap-4">
                    <span className="text-slate-400 font-medium">{spec.label}</span>
                    <span className="text-white font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. المعرض التفاعلي مع نافذة التكبير الكبرى */}
      <ProductGalleryLightboxAr images={galleryImages} />

      {/* 4. Technical RFQ Call to Action */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center space-y-6">
        <h3 className="text-3xl sm:text-5xl font-black text-white font-heading">
          هل تخطط لتنفيذ مشروع بمواصفات خاصة؟
        </h3>
        <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          تواصل مع الإدارة الهندسية في أبوظبي ودبي للحصول على مخططات CAD ثلاثية الأبعاد وعروض أسعار المصنع مباشرة.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/ar/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl shadow-[#D4AF37]/20"
          >
            <span>طلب دراسة فنية وعرض سعر متكامل</span>
            <Send className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
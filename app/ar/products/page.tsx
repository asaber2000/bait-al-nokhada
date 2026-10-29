import { Sparkles } from "lucide-react";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { productsDatabase } from "@/app/data/products.Ar";
import { client } from "@/app/lib/sanity";
import ProductsCatalogClientAr from "@/components-ar/components/ProductsCatalogClient";

export const revalidate = 60;

const arabicTranslations: Record<string, { name: string; tagline: string }> = {
  "pyramid-tent": {
    name: "خيمة هرمية",
    tagline: "تجمع خيمة الهرم بين الهندسة المعمارية الحديثة والوظائف العملية الاستثنائية، مما يجعلها خياراً مثالياً للفعاليات الكبرى والمعارض الضخمة."
  },
  "dome-tent": {
    name: "خيمة القبة",
    tagline: "تتميز خيمة القبة بتصميمها الهندسي الفريد، مما يوفر ثباتاً ممتازاً ومساحة داخلية واسعة للمعارض والفعاليات الرياضية."
  },
  "capsule-tent": {
    name: "خيمة الكبسولة",
    tagline: "تعد خيمة الكبسولة حلاً مبتكراً ومدمجاً، يتميز بسرعة التركيب ويستخدم كسكن مؤقت أو وحدات إقامة فاخرة VIP."
  },
  "wave-tent": {
    name: "خيمة ثورية",
    tagline: "تتميز الخيمة الثورية بتصميم مبتكر يجمع بين الأداء العالي والبنية المستقبلية القوية لتبرز في أي فعالية راقية."
  },
  "polygon-tent": {
    name: "خيمة مضلعة",
    tagline: "تجمع الخيمة المضلعة بين الهندسة المعمارية الحديثة والوظائف العملية الاستثنائية للمعارض والفعاليات الكبرى."
  },
  "arch-tent": {
    name: "خيمة القوس",
    tagline: "تتميز الخيام القوسية الحديثة بأسقفها المنحنية الفريدة، مما يمنحها مظهراً أنيقاً وراقياً يجعلها مثالية للفعاليات الشركاتية."
  },
  "panoramic-tent": {
    name: "خيمة بانورامية",
    tagline: "توفر الخيمة البانورامية تجربة غامرة بفضل تصميمها الشفاف الخلاب، مما يجعلها مثالية لحفلات الزفاف الحالمة والمعارض."
  },
  "pyramid-dome-tent": {
    name: "خيمة القبة الهرمية",
    tagline: "تقدم القبة الهرمية دمجاً مبتكراً بين الهياكل الهرمية الكلاسيكية والمرونة الديناميكية لتلبية متطلبات الفعاليات الكبرى."
  },
  "geodesic-tent": {
    name: "خيمة القبة الجيوديسية",
    tagline: "تقدم القبة الجيوديسية تصميماً معمارياً رائعاً على شكل قبة توفر مساحة استثنائية وبأوى قوي مقاوم للعوامل الجوية."
  },
  "arabic-majlis-tent": {
    name: "خيمة المجلس العربي",
    tagline: "احتفل بعراقة التقاليد مع خيام المجلس العربي الأصيلة، المصممة بعناية فائقة لتعكس الأصالة الثقافية والأسلوب الراقي."
  },
  "double-decker-tent": {
    name: "خيام ذات طابقين",
    tagline: "حول مساحتك مع خيمة الطابقين، التي توفر مستويين من الوظائف الاستثنائية للمعارض الكبرى وفعاليات كبرى."
  },
  "revolution-tent": {
    name: "خيمة ثورية (Revolution)",
    tagline: "هياكل عملاقة ذات امتداد واسع ومرتفع للفعاليات والمعارض الكبرى والقمم العالمية."
  },
  "curve-tent": {
    name: "خيمة المنحنى (TFS)",
    tagline: "تكتيكية ذات رياح عالية وهياكل حظائر منحنية للطيران والتخزين الصناعي."
  }
};

async function getSanityArabicProducts() {
  try {
    const query = `*[_type in ["product", "productAr", "productsAr"] && defined(slug.current)]{
      titleAr,
      summaryAr,
      topBadges,
      "windSpeed": coalesce(engineeringDataSheet.windLoad, "120 كم/س"),
      "slug": slug.current,
      "coverImage": coalesce(heroImageUrl, coverImage.asset->url)
    }`;

    const sanityData = await client.fetch(query, {}, { next: { revalidate: 60 } });

    return (sanityData || []).map((item: any) => ({
      slug: item.slug,
      name: item.titleAr || "منتج مخصص",
      tagline: item.summaryAr || "حلول خيام معمارية مبتكرة.",
      category: "هياكل معمارية",
      heroImage: item.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      windSpeed: item.windSpeed || "120 كم/س",
      badge: item.topBadges?.[0] || "DIN 4102 B1"
    }));
  } catch (error) {
    console.error("Error fetching Sanity Arabic products:", error);
    return [];
  }
}

export default async function ArabicProductsCatalogPage() {
  const sanityProducts = await getSanityArabicProducts();
  const sanitySlugs = new Set(sanityProducts.map((p: any) => p.slug));
  const remainingLocal = productsDatabase
    .filter((lp: any) => !sanitySlugs.has(lp.slug))
    .map((lp: any) => ({
      slug: lp.slug,
      name: arabicTranslations[lp.slug]?.name || lp.ar?.name || lp.name,
      tagline: arabicTranslations[lp.slug]?.tagline || lp.ar?.tagline || lp.tagline,
      category: "هياكل معمارية",
      heroImage: lp.heroImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      windSpeed: lp.windSpeed || "120 كم/س",
      badge: lp.badge || "DIN 4102 B1"
    }));

  const allProducts = [...sanityProducts, ...remainingLocal];

  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "كتالوج الخيام المعمارية وهياكل النسيج | بيت النخادة",
    "url": "https://baitalnokhada.com/ar/products",
    "description": "استعرض مجموعة واسعة من الخيام المعمارية، القباب الفضائية، وخيام الضيافة المصنعة في أبوظبي.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": allProducts.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": product.name,
        "url": `https://baitalnokhada.com/ar/products/${product.slug}`
      }))
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans text-right" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />

      <Navbar />

      {/* الهيدر العلوي المتطابق بمقاسات site-container */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="site-container max-w-7xl mx-auto w-full text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>أكثر من 30 عاماً من الريادة في التصنيع • 13 خطاً هندسياً</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading">
            خيام معمارية وحدات متنقلة <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              وهياكل نسيجية عالية التحمل
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto font-normal leading-relaxed">
            تم هندستها في مصنعنا بأبوظبي على مساحة 40,000 متر مربع. تجمع بين معايير السلامة الألمانية DIN EN 13782، الهياكل المصنوعة من الألومنيوم الفضائي، والأغشية الملحومة بتردد عالٍ والمصممة خصيصاً لتحمل قسوة مناخ الخليج.
          </p>
        </div>
      </section>

      {/* المكون التفاعلي للبحث وعرض الكروت المتطابقة تماماً مع الإنجليزي */}
      <ProductsCatalogClientAr initialProducts={allProducts} />

      <Footer />
    </main>
  );
}
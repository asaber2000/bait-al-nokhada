import { Sparkles, ArrowUpLeft, Search, ShieldCheck, Wind, Building2, Send, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { productsDatabase } from "../../data/products.Ar";
import { client } from "@/app/lib/sanity";
export const revalidate = 60;

// خريطة الترجمة الذكية لأسماء ووصف المنتجات بالعربية حسب الـ Slug
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

const filterCategories = [
  { name: "جميع المنتجات", value: "All Products" },
  { name: "الخيام والمعارض العملاقة", value: "Mega Arenas & Expos" },
  { name: "خيام الضيافة والفاخرة", value: "Luxury & Hospitality" },
  { name: "القباب الفضائية والمستقبلية", value: "Futuristic & Domes" },
  { name: "المجالس والخيام التراثية", value: "Heritage & Majlis" },
];

// دالة جلب منتجات سانتي العربية مباشرة على السيرفر (تحميل فوري مع الداتا المحلية)
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
      heroImage: item.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      windSpeed: item.windSpeed || "120 كم/س",
      badge: item.topBadges?.[0] || "DIN 4102 B1",
      models: ["1", "2"]
    }));
  } catch (error) {
    console.error("Error fetching Sanity Arabic products:", error);
    return [];
  }
}

export default async function ArabicProductsCatalogPage() {
  // جلب داتا سانتي مباشرة مع الداتا المحلية على السيرفر ككتلة واحدة (بدون أي تأخير أو وميض)
  const sanityProducts = await getSanityArabicProducts();
  const sanitySlugs = new Set(sanityProducts.map((p: any) => p.slug));
  const remainingLocal = productsDatabase.filter((lp: any) => !sanitySlugs.has(lp.slug));
  const liveProducts = [...sanityProducts, ...remainingLocal];


  const filteredProducts = liveProducts;

  // دالة توليد سكيما قائمة المنتجات
  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "كتالوج الخيام المعمارية وهياكل النسيج | بيت النخادة",
    "url": "https://baitalnokhada.com/ar/products",
    "description": "استعرض مجموعة واسعة من الخيام المعمارية، القباب الفضائية، وخيام الضيافة المصنعة في أبوظبي.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": liveProducts.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": arabicTranslations[product.slug]?.name || product.name,
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

      <section className="relative pt-44 pb-20 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7] text-right">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>أكثر من 30 عاماً من الريادة في التصنيع • 13 خطاً هندسياً</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0B1220] leading-tight font-heading">
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

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => {
            const arInfo = arabicTranslations[product.slug] || { name: product.name, tagline: product.tagline };
            return (
              <div
                key={product.slug || idx}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-500 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1.5 relative text-right"
              >
                <div>
                  <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={product.heroImage}
                      alt={arInfo.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                      quality={85}
                      priority={idx < 3}
                      loading={idx < 3 ? undefined : "lazy"}
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                    {/* 
                    <div className="absolute top-4 right-4 left-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-black/85 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                        {product.badge ? product.badge.split("•")[0] : "DIN 4102 B1"}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/10 backdrop-blur-md text-slate-300">
                        {product.models?.length || 2} طرازات
                      </span>
                    </div>
*/}
                  </div>

                  <div className="p-7 space-y-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-[#0B1220] group-hover:text-[#df9d17] transition-colors font-heading tracking-tight">
                        {arInfo.name}
                      </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal line-clamp-2 leading-relaxed min-h-[2.5rem]">
                      {arInfo.tagline}
                    </p>

                    <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-[#FDFCF7] border border-slate-200/70 flex items-center gap-2 justify-start group-hover:border-[#df9d17]/40 transition-colors">
                        <Wind className="w-3.5 h-3.5 text-[#df9d17] shrink-0" />
                        <span className="text-slate-700 font-medium truncate">رياح {product.windSpeed || "120 كم/س"}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#FDFCF7] border border-slate-200/70 flex items-center gap-2 justify-start group-hover:border-[#df9d17]/40 transition-colors">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#df9d17] shrink-0" />
                        <span className="text-slate-700 font-medium truncate">DIN 4102 B1</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href={`/ar/products/${product.slug}`}
                    className="w-full py-3.5 rounded-xl bg-slate-50 hover:bg-[#df9d17] text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200/80 hover:border-[#df9d17] transition-all duration-300 group/btn shadow-xs hover:shadow-md"
                  >
                    <span>عرض المواصفات والمقاسات</span>
                    <ArrowUpLeft className="w-4 h-4 group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
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
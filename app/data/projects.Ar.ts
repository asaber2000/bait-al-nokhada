export interface ProjectItemAr {
  slug: string;
  title: string;
  client: string;
  category: string;
  country: string;
  city: string;
  year: string;
  area: string;
  span: string;
  coverImage: string;
  youtubeVideoId: string;
  summary: string;
  description: string;
  challengeAndSolution: string;
  specs: { label: string; value: string }[];
  galleryImages: { url: string; caption: string; type: "exterior" | "interior" | "drone" }[];
  beforeAfter?: { before: string; after: string };
  relatedProducts: { name: string; slug: string }[];
}

export const projectsDatabase: ProjectItemAr[] = [
  {
    slug: "emirates-agriculture-conference-exhibition-2026",
    title: "مؤتمر ومعرض الإمارات الزراعي 2026",
    client: "وزارة التغير المناخي والبيئة",
    category: "المعارض والقمم الدولية",
    country: "الإمارات",
    city: "العين",
    year: "2026",
    area: "12,500 م²",
    span: "بحر مفتوح 40 متراً",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    summary: "تصنيع وتركيب قاعات معارض ومؤتمرات كبرى معزولة حرارياً بالكامل ومجهزة بواجهات مخصصة للهوية المؤسسية.",
    description: "مشروع متكامل لمعرض زراعي دولي يوفر أجنحة وقاعات مكيفة للعارضين الدوليين، منصات عرض الآليات الثقيلة، وقاعات للمؤتمرات والندوات الرئيسية.",
    challengeAndSolution: "تطلب المناخ الصحراوي في مدينة العين عزلاً حرارياً فائقاً لحماية المعروضات الزراعية الحساسة. تم تطبيق نظام أسقف PVC مزدوج الطبقات بوزن 850 جم/م² مع تشغيل 1,000 طن من وحدات التكييف المركزي الصامتة.",
    specs: [
      { label: "المساحة المغطاة", value: "12,500 متر مربع" },
      { label: "قطاع الهيكل الرئيسي", value: "ألمنيوم طيران مقوى 6061/T6" },
      { label: "عرض البحر المفتوح", value: "40 متراً (بدون أعمدة داخلية)" },
      { label: "مدة التركيب والتسليم", value: "8 أيام تسليم مفتاح" },
      { label: "مقاومة الرياح", value: "120 كم/ساعة معتمدة (DIN EN 13782)" }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80", caption: "بوابة ومدخل القاعة الرئيسية ومكاتب التسجيل", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80", caption: "مسرح المؤتمر المعزول ومقاعد كبار الشخصيات", type: "interior" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80", caption: "مشهد جوي بالقمر الصناعي لمجمع الصالات المتصلة", type: "drone" }
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      after: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
    },
    relatedProducts: [
      { name: "خيام ريفوليوشن", slug: "revolution-tent" },
      { name: "الخيام المضلعة", slug: "polygon-tent" }
    ]
  },
  {
    slug: "luxury-vip-hospitality-marquee",
    title: "قاعة الضيافة الملكية الفاخرة VIP",
    client: "البروتوكول الرسمي والضيافة الملكية",
    category: "المجالس الملكية وVIP",
    country: "الإمارات",
    city: "دبي",
    year: "2026",
    area: "3,800 م²",
    span: "بحر قوسي 25 متراً",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    summary: "جناح ضيافة ملكي فاخر بواجهات زجاجية بانورامية، بوابات مزدوجة أوتوماتيكية، وديكورات قماشية ملكية.",
    description: "قاعة احتفالات وضيافة رفيعة المستوى مصممة لاستقبال كبار الشخصيات وحفلات الزفاف الملكية، مع أرضيات باركيه مدمجة وثريات كريستال متطورة.",
    challengeAndSolution: "تطلب المشروع عزلاً صوتياً وخصوصية تامة بنسبة 100% مع تشطيب فندقي فوري. تم دمج بطانات أسقف صوتية عازلة وأنظمة أرضيات كاسيت مع مسارات تمديد أرضية مخفية.",
    specs: [
      { label: "المساحة الصافية", value: "3,800 متر مربع" },
      { label: "نظام الجدران", value: "واجهات زجاجية مقسّاة مزدوجة بانورامية" },
      { label: "تشطيب السقف", value: "أقمشة ساتان ملكية عازلة للصوت ومقاومة للحريق" },
      { label: "نظام التكييف", value: "ثبات على 20° مئوية مع فتحات تبريد مخفية" }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", caption: "الواجهة الزجاجية البانورامية بإضاءة الغروب", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80", caption: "المجلس الملكي VIP مع الإضاءات الشرقية الفاخرة", type: "interior" }
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      after: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
    },
    relatedProducts: [
      { name: "خيام المجالس الملكية", slug: "arabic-majlis-tent" },
      { name: "الخيام البانورامية الزجاجية", slug: "panoramic-tent" }
    ]
  },
  {
    slug: "fujairah-open-international-taekwondo-championship-g2",
    title: "بطولة الفجيرة الدولية المفتوحة للتايكوندو G2",
    client: "نادي الفجيرة للفنون القتالية / الاتحاد الدولي للتايكوندو",
    category: "المنشآت والملاعب الرياضية",
    country: "الإمارات",
    city: "الفجيرة",
    year: "2026",
    area: "8,200 م²",
    span: "هيكل مضلع بارتفاع قمة 35 متراً",
    coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    summary: "صالة وبطولة رياضية متكاملة مصممة لاستيعاب الحشود الجماهيرية الكبيرة وأطقم البث التلفزيوني الرياضي المباشر.",
    description: "منشأة رياضية مؤقتة مطابقة للمواصفات الأولمبية تضم 8 حلبات منافسة متوازية، مدرجات جماهيرية، مناطق إحماء، وصالات فحص المنشطات الطبية.",
    challengeAndSolution: "اشترط الاتحاد الدولي ارتفاعاً رأسياً حراً لا يقل عن 8.5 متر وإضاءة خالية من الوميض بقوة 1,500 لوكس لكاميرات البث المباشر 4K بدون أعمدة داخلية. تم تنفيذ هيكل مضلع خاص مع شبكات إضاءة علوية معلقة.",
    specs: [
      { label: "إجمالي المساحة الرياضية", value: "8,200 متر مربع" },
      { label: "ارتفاع القمة الصافي", value: "9.5 أمتار" },
      { label: "سعة المدرجات الجماهيرية", value: "2,500 مقعد مدرج" },
      { label: "أنظمة الإضاءة الرياضية", value: "1,500 لوكس مخصصة للبث التلفزيوني 4K" }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80", caption: "الصالة الداخلية وتوزيع حلبات المنافسات", type: "interior" },
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80", caption: "المباني والخيام الملحقة لوصول اللاعبين والإحماء", type: "exterior" }
    ],
    relatedProducts: [
      { name: "الخيام المضلعة", slug: "polygon-tent" },
      { name: "خيام TFS المقوسة", slug: "curve-tent" }
    ]
  },
  {
    slug: "world-health-expo-whx-dubai-2026",
    title: "معرض الصحة العالمي (WHX) دبي 2026",
    client: "هيئة الصحة بدبي وشركاء المعارض الدولية",
    category: "المعارض والقمم الدولية",
    country: "الإمارات",
    city: "مركز دبي للمعارض",
    year: "2026",
    area: "22,000 م²",
    span: "بحر مفتوح ثقيل 50 متراً",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    summary: "قاعات وصالات معارض عملاقة مطابقة لأعلى معايير السلامة والتعقيم الخاصة بالقطاع الطبي والرعاية الصحية.",
    description: "مجمع معارض صحي متكامل يضم صالات عرض للأجهزة التشخيصية الثقيلة، قاعات مؤتمرات دولية، ومساحات اجتماعات مجهزة بالكامل.",
    challengeAndSolution: "استيعاب معدات التصوير الإشعاعي والأجهزة الطبية الثقيلة دون أي اهتزاز في الأرضيات مع توفير فلاتر تنقية هواء طبية متطورة عبر مساحة 22 ألف متر مربع.",
    specs: [
      { label: "المساحة الإجمالية للمعرض", value: "22,000 م² (3 صالات متصلة)" },
      { label: "حمولة الأرضيات المقواة", value: "1,500 كجم/م² أرضيات كاسيت ثقيلة" },
      { label: "عرض البحر المفتوح", value: "50 متراً بدون أعمدة" },
      { label: "مطابقة السلامة", value: "معايير هواء طبي + مقاومة حريق DIN 4102 B1" }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80", caption: "صالة العرض الرئيسية ذات الارتفاعات الشاهقة والأرضيات الثقيلة", type: "interior" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80", caption: "المظهر الخارجي لمجمع الصالات المتصلة", type: "exterior" }
    ],
    relatedProducts: [
      { name: "خيام ريفوليوشن", slug: "revolution-tent" },
      { name: "الخيام المكونة من طابقين", slug: "double-decker-tent" }
    ]
  }
];
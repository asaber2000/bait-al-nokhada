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
  videoUrl?: string;
  youtubeVideoId?: string;
  sectionTitle?: string;            // <--- أضف هذا السطر
  challengeTitle?: string;          // <--- أضف هذا السطر
  deliveryHighlights?: string[];    // <--- أضف هذا السطر
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
    slug: "DRIFTx-Event-2026",
    title: "فعالية درفت إكس 2026",
    client: "ورلد وايد إيفنتس",
    category: "معارض ومؤتمرات",
    country: "الإمارات",
    city: "أبوظبي",
    year: "2025",
    area: "10,000 م²",
    span: "بحر مفتوح 40م",
    coverImage: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Thambnails-images/drift-x-thumbnail.webp",
    videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/DriftX.webm",
    sectionTitle: "صالات معارض عملاقة وقاعات لتقنيات التنقل الذاتي",
    summary: "نفذ مصنع بيت النوخذة أكثر من 10,000 م² من قاعات المعارض المعيارية ببحور حرة 40 متراً لمعرض DRIFTx العالمي للتنقل الذكي في حلبة مرسى ياس بأبوظبي.",
    description: "ضمن فعاليات قمة ومعرض DRIFTx في أبوظبي، نفذ مصنع بيت النوخذة بيئة معارض متكاملة وعالية التقنية لدعم قطاع التنقل الذكي والذاتي والمركبات الجوية الحضرية. شُيد المشروع بجوار حلبة مرسى ياس الشهيرة عبر هياكل مضلعة عملاقة ببحر حر 40 متراً بدون أي أعمدة داخلية، صُممت خصيصاً لعرض طائرات التاكسي الجوي الكهربائي (eVTOL)، والسيارات ذاتية القيادة، ومنصات المؤتمرات الدولية.",

    // Challenge & Engineering Solution
    challengeTitle: "التحدي الهندسي والحل الميداني",
    challengeAndSolution: "تمثل التحدي في استيعاب طائرات الدرون ومركبات النقل الثقيلة ذاتية القيادة على باحات حلبة ياس دون إحداث أي حفر أو تثبيت نافذ في أرضية الحلبة. اعتمد الفريق الهندسي لبيت النوخذة هياكل ألمنيوم متطورة (Revolution & Polygon) ببحر صافٍ 40 متراً مع أرضيات كاسيت فولاذية مقواة بنظام أثقال اتزان آمن. ولحماية الأنظمة الإلكترونية الحساسة وتأمين راحة وفود القمة، تم تزويد القاعات بـ 1000 طن تبريد من وحدات التكييف الصناعي مع أسقف معتمة عازلة للحرارة.",

    // Project Delivery Highlights
    deliveryHighlights: [
      "تشييد 10,000 م² من القاعات العملاقة ببحور حرة 40 متراً في حلبة ياس دون المساس بطبقات الإسفلت.",
      "أرضيات كاسيت مقواة هندسياً لتحمل حركة الآليات وعروض مجسمات الطيران الحقيقي والسيارات الذكية.",
      "نظام تكييف صناعي متعدد المناطق يضمن ثبات الحرارة عند 20 درجة مئوية في أجواء أبوظبي الساحلية.",
      "تسليم قياسي للمشروع قبل موعد الافتتاح مع مطابقة كاملة لاشتراطات الدفاع المدني والسلامة الميدانية."
    ],

    // Verified Technical Specifications
    specs: [
      { label: "المساحة المغطاة", value: "10,000 م²" },
      { label: "هيكل الألمنيوم الرئيسي", value: "سبائك ألمنيوم طيران صلبة (6061/T6)" },
      { label: "عرض البحر الحر", value: "40 متراً (بدون أعمدة داخلية)" },
      { label: "مدة التركيب والتسليم", value: "8 أيام تنفيذ وتسليم قياسي" },
      { label: "مقاومة سرعة الرياح", value: "معتمدة لمقاومة 120 كم/ساعة (DIN EN 13782)" }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80", caption: "Main Hall Entrance and Registration Portal", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80", caption: "Insulated Conference Stage and Keynote Seating", type: "interior" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80", caption: "Aerial Overview of Interconnected Exhibition Pavilions", type: "drone" }
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      after: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
    },

    relatedProducts: [
      { name: "خيمة ريفوليوشن", slug: "revolution-tent" },
      { name: "خيمة مضلعة", slug: "polygon-tent" }
    ]
  },
  {
    slug: "Amaal-sales-gallery",
    title: "آمال × منصوري",
    client: "شركة آمال للتطوير العقاري",
    category: "معارض ومراكز مبيعات",
    country: "الإمارات",
    city: "دبي",
    year: "2026",
    area: "2,500 م²",
    span: "بحر مقوس 25م",
    coverImage: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Thambnails-images/Ammal-thumbnail.webp",
    videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/Amaal.webm",
    sectionTitle: "قاعة عرض ومركز مبيعات آمال × منصوري",
    summary: "تنفيذ مركز مبيعات وقاعة عرض عقارية فاخرة بمساحة 2,500 م² لمشروع آمال × منصوري في دبي بواجهات زجاجية وتجهيزات VIP.",
    description: "نفذ مصنع بيت النوخذة مركز مبيعات وقاعة عرض متكاملة لمشروع آمال × منصوري في دبي على مساحة 2,500 متر مربع. تم بناء القاعة بهيكل مقوس ذي بحر حر مفتوح يمتد إلى 25 متراً دون أي أعمدة داخلية، مع واجهات زجاجية بانورامية ممتدة بالكامل تتيح عرض مجسمات المشروع المعمارية، واستقبال كبار العملاء والمستثمرين ضمن بيئة راقية ومجهزة بالكامل.",

    // Challenge & Engineering Solution
    challengeTitle: "التحدي الهندسي والحل الميداني المنفذ",
    challengeAndSolution: "تمثل التحدي في سرعة إنشاء مبنى مبيعات فاخر وشبه دائم في موقع المشروع الإنشائي بدبي، مع توفير عزل صوتي وحراري تام يضمن درجة حرارة ثابتة عند 20 درجة مئوية وخصوصية كاملة لجلسات التفاوض. اعتمد مهندسو بيت النوخذة هيكلاً مقوساً من الألمنيوم الصلب مدعماً بواجهات زجاجية مزدوجة عازلة للحرارة والضوضاء، مع أرضيات كاسيت مقواة ومستوية تخفي تحتها كافة تمديدات التكييف والكهرباء.",

    // Project Delivery Highlights
    deliveryHighlights: [
      "تشييد قاعة مبيعات بمساحة 2,500 م² بواجهات زجاجية بانورامية مزدوجة توفر إضاءة طبيعية وعزلاً حرارياً متكاملاً.",
      "تصميم داخلي مفتوح ببحر 25 متراً بدون أعمدة وسطية لعرض المجسمات الهندسية وتسهيل حركة الزوار.",
      "تجهيز مكاتب وقاعات تفاوض VIP معزولة صوتياً لضمان الخصوصية التامة مع العملاء والمستثمرين.",
      "تركيب شبكة تكييف مركزي مخفية بالكامل تحافظ على درجة حرارة 20° مئوية بهدوء تام دون أي ضوضاء هوائية."
    ],

    // Verified Technical Specifications
    specs: [
      { label: "المساحة التشغيلية", value: "2,500 م²" },
      { label: "نظام الواجهات والجدران", value: "واجهات زجاجية بانورامية مزدوجة كاسيت" },
      { label: "تشطيبات الأسقف", value: "ديكورات داخلية عازلة للصوت ومقاومة للحريق" },
      { label: "درجة حرارة التكييف", value: "ثبات عند 20° مئوية بموزعات هواء مخفية" },
      { label: "عرض البحر الصافي", value: "25 متراً بهيكل مقوس (بدون أعمدة داخلية)" }
    ],

    galleryImages: [
      { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL+2.webp", caption: "الواجهة الزجاجية لمركز مبيعات آمال × منصوري", type: "exterior" },
      { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL+3.webp", caption: "مجلس استقبال كبار الشخصيات والعملاء", type: "exterior" },
      { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/Amaal-Inrtior2.webp", caption: "صالة العرض والمجسمات المعمارية من الداخل", type: "interior" },
      { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL-interior1.webp", caption: "أجنحة التفاوض وتوقيع العقود", type: "interior" }
    ],

    beforeAfter: {
      before: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL-6.webp",
      after: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/Amaal-Sales-Gallery.webp"
    },

    relatedProducts: [
      { name: "خيام مراكز المبيعات", slug: "sales-center-tent" },
    ]
  },
  {
    slug: "gulfood-dubai-2026",
    title: "معرض جلفود 2026",
    client: "مركز دبي التجاري العالمي (DWTC)",
    category: "معارض ومؤتمرات",
    country: "الإمارات",
    city: "دبي",
    year: "2026",
    area: "35,000 م²",
    span: "بحور مفتوحة 40م – 50م",
    coverImage: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Projects/gulfood-2026.webp",
    videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/Gulfood.webm",

    // Scopes & Section Headers
    sectionTitle: "قاعات معارض عملاقة وأجنحة دولية لمعرض جلفود",
    summary: "نفذ مصنع بيت النوخذة مجمعات قاعات معارض معيارية بمساحة 35,000 م² لاستيعاب الأجنحة الدولية في معرض جلفود بمركز دبي التجاري العالمي.",
    description: "بصفته الشريك التصنيعي والتنفيذي المعتمد لمركز دبي التجاري العالمي، صمم وشيد مصنع بيت النوخذة مجمعات قاعات معارض عملاقة بمساحة مغطاة بلغت 35,000 متر مربع لمعرض جلفود 2026 (الحدث الأكبر عالمياً في قطاع الأغذية والضيافة). وفر المشروع توسعة معيارية متكاملة في الباحات الخارجية للمركز لاستيعاب الأجنحة الوطنية للدول المشاركة، ومنصات الطهي الحي المباشر، وقاعات قمة الاقتصاد الغذائي العالمي لاستقبال مئات الآلاف من الزوار والتجار الدوليين.",

    // Challenge & Engineering Solution
    challengeTitle: "التحدي الهندسي والحل الميداني المنفذ",
    challengeAndSolution: "تمثل التحدي في بناء وتجهيز 35 ألف متر مربع في موقع تجاري حيوي مزدحم بالحركة خلال جدول زمني دقيق، مع ضرورة تلبية اشتراطات السلامة الغذائية والدفاع المدني بدبي لتحمل الأحمال الكهربائية لثلاجات التبريد الضخمة ومعدات الطهي المباشر. اعتمد مهندسو بيت النوخذة هياكل ألمنيوم عملاقة ببحور حرة تتراوح بين 40م و50م بدون أعمدة داخلية، مع أرضيات كاسيت فولاذية مقواة تخفي شبكات الصرف الصحي والتمديدات الكهربائية، ودعم المنشأة بـ 3,500 طن من التكييف الصناعي وأسقف مزدوجة عازلة للحرارة للحفاظ على جودة الأغذية واستقرار درجات الحرارة عند 21° مئوية.",

    // Project Delivery Highlights
    deliveryHighlights: [
      "بناء وتجهيز 35,000 م² من القاعات العملاقة المتصلة في باحات مركز دبي التجاري العالمي دون التأثير على حركة المرور المحيطة.",
      "أرضيات كاسيت مقواة تدمج قنوات أرضية خاصة لتمديدات المياه والصرف الصحي وتغذية الكهرباء لثلاجات العرض ومطابخ الطهي.",
      "نظام تكييف صناعي متطور بطاقة 3,500 طن تبريد يضمن ثبات درجات الحرارة عند 21 درجة مئوية في جميع الأجنحة والصالات.",
      "تزويد القاعات بمسارات تهوية ومداخن سحب متوافقة مع اشتراطات بلدية دبي والدفاع المدني لشفط أدخنة منصات الطهي الحي."
    ],

    // Verified Technical Specifications
    specs: [
      { label: "المساحة المغطاة", value: "35,000 م²" },
      { label: "هيكل الألمنيوم الإنشائي", value: "سبائك ألمنيوم صلبة فائقة التحمل (6061/T6)" },
      { label: "عرض البحور المفتوحة", value: "بحور حرة واسعة من 40م إلى 50م بدون أعمدة وسطية" },
      { label: "سعة أنظمة التكييف", value: "3,500 طن تبريد بنظام الوحدات المدمجة (Package Units)" },
      { label: "أنظمة الجدران والأبواب", value: "ألواح صلبة عازلة وأبواب زجاجية بانورامية بمستشعرات ذكية" }
    ],

    galleryImages: [
      { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/gulfood-aerial.webp", caption: "منظر جوي لمجمع قاعات المعارض المؤقتة بمساحة 35 ألف م² في مركز دبي التجاري", type: "drone" },
      { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/gulfood-hall-interior.webp", caption: "أجنحة الدول والممرات الواسعة لتسهيل حركة الحشود من الداخل", type: "interior" },
      { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/gulfood-summit-stage.webp", caption: "قاعة مؤتمرات قمة الاقتصاد الغذائي العالمي داخل الهيكل", type: "interior" },
      { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/gulfood-facade-night.webp", caption: "الواجهات الزجاجية والبوابات الرئيسية للمجمع ليلاً", type: "exterior" }
    ],

    beforeAfter: {
      before: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/gulfood-before.webp",
      after: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/gulfood-after.webp"
    },

    relatedProducts: [
      { name: "خيمة مضلعة", slug: "polygon-tent" },
      { name: "خيمة أركوم", slug: "arcum-tent" },
      { name: "خيمة طابقين", slug: "double-decker-tent" }
    ]
  },
  {
  slug: "netflix-stranger-things-experience",
  title: "تجربة سترينجر ثينقز من نتفليكس (Stranger Things)",
  client: "ميرال (Miral Destination)",
  category: "معارض وفعاليات ترفيهية",
  country: "الإمارات",
  city: "أبوظبي",
  year: "2025",
  area: "5000 م²",
  span: "بحر حر 30م – 40م",
  coverImage: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Projects/stranger-things.webp",
  videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/StrangerThings.webm",

  // Scopes & Section Headers
  sectionTitle: "قاعة ترفيهية معيارية معزولة ضوئياً وصوتياً بالكامل",
  summary: "شيد مصنع بيت النوخذة قاعة معيارية معتمة بالكامل بمساحة 5,000 م² لتجربة Stranger Things التفاعلية من نتفليكس في جزيرة ياس بأبوظبي.",
  description: "بتكليف من شركة ميرال، صمم وشيد مصنع بيت النوخذة قاعة ترفيهية وتفاعلية متطورة بمساحة 5,000 متر مربع لاستضافة الإطلاق الإقليمي لفعالية 'Stranger Things: The Experience' التابعة لنتفليكس في جزيرة ياس بأبوظبي. وفر الهيكل بيئة سينمائية مغلقة بالكامل لاحتواء مجسمات الديكور، ومناطق بيع المنتجات الحصرية، ومطاعم السلسلة المستوحاة من العمل، واستيعاب تقنيات العرض الضوئي والصوتي التفاعلي.",

  // Challenge & Engineering Solution
  challengeTitle: "التحدي الهندسي والحل الميداني المنفذ",
  challengeAndSolution: "تطلب المشروع خلق بيئة سينمائية مغلقة تمنع نفاذ ضوء الشمس الصحراوي بنسبة 100%، مع عزل صوتي متطور لاستيعاب المؤثرات الصوتية العالية وعروض الهولوغرام دون أي صدى داخلي، إلى جانب تحمل أوزان الجسور السقفية المعلقة للديكورات والإضاءة المسرحية. صمم مهندسو بيت النوخذة هيكلاً مضلعاً من الألمنيوم الصلب ببحر حر بدون أعمدة، كُسي بأغشية PVC مزدوجة معتمة تماماً للضوء وجدران صلبة معزولة صوتياً، مع تزويد القاعة بـ 800 طن من التكييف المركزي الصامت للحفاظ على ثبات الحرارة عند 20 درجة مئوية رغم الحرارة المنبعثة من معدات الإضاءة وكثافة الزوار.",

  // Project Delivery Highlights 
  deliveryHighlights: [
    "تشييد قاعة معيارية بمساحة 5,000 م² بدون أعمدة داخلية لتوفير مسارات حركة انسيابية للديكورات والمجموعات التفاعلية.",
    "تغطية سقفية معتمة بنسبة 100% (Blackout) مع جدران عازلة للصوت لضمان نجاح العروض الضوئية والمؤثرات السينمائية.",
    "جسور سقفية هندسية مدعمة لتحمل تعليق أطنان من أجهزة الإضاءة والشاشات والديكورات المعلقة في الهواء بأمان تام.",
    "نظام تكييف صناعي صامت بقدرة 800 طن يحافظ على برودة القاعة واستقرار الأجهزة الإلكترونية وحركة الحشود المستمرة."
  ],

  // Verified Technical Specifications
  specs: [
    { label: "المساحة المغطاة", value: "5,000 م²" },
    { label: "نظام إغلاق السقف", value: "أغشية PVC مزدوجة معتمة 100% وعازلة للضوء والحرارة" },
    { label: "نظام الجدران العازلة", value: "ألواح ساندوتش بانل صلبة ومبطنة بمواد عازلة للصوت" },
    { label: "قدرة التكييف الصناعي", value: "800 طن تبريد بنظام الوحدات المدمجة فائق الهدوء" },
    { label: "الارتفاع الإنشائي الصافي", value: "ارتفاع جانبي 8.0 أمتار لتعليق المعدات المسرحية الضخمة" }
  ],

  galleryImages: [
    { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/stranger-things-exterior.webp", caption: "منظر خارجي للقاعة المعيارية المعتمة بمساحة 5,000 م² في جزيرة ياس", type: "exterior" },
    { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/stranger-things-interior-stage.webp", caption: "مطعم الديكور ومتجر التذكارات التفاعلي داخل القاعة", type: "interior" },
    { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/stranger-things-upside-down.webp", caption: "منطقة المؤثرات التفاعلية وعروض الإضاءة السقفية المعلقة", type: "interior" },
    { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/stranger-things-facade.webp", caption: "البوابات الرئيسية ومنطقة تنظيم دخول الزوار المجهزة", type: "exterior" }
  ],

  beforeAfter: {
    before: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/stranger-things-before.webp",
    after: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/stranger-things-after.webp"
  },

  relatedProducts: [
    { name: "خيمة مضلعة", slug: "polygon-tent" },
    { name: "خيمة أركوم", slug: "arcum-tent" },
    { name: "خيمة قبة", slug: "dome-tent" }
  ]
},
{
  slug: "dubai-airshow-2025",
  title: "معرض دبي للطيران 2025",
  client: "القطاع الحكومي (Government Sector)",
  category: "معارض ومؤتمرات",
  country: "الإمارات",
  city: "دبي",
  year: "2026",
  area: "15,000 م²",
  span: "بحور مفتوحة 30م – 40م",
  coverImage: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Projects/airshow-2025.webp",
  videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/DubaiAirshow.webm",

  // Scopes & Section Headers
  sectionTitle: "قاعات معارض متطورة وأجنحة دولية لصناعات الطيران والدفاع",
  summary: "نفذ مصنع بيت النوخذة 15,000 م² من القاعات المعيارية وأجنحة الوفود الرسمية في مطار آل مكتوم الدولي لصالح معرض دبي للطيران.",
  description: "ضمن الاشتراطات الأمنية والميدانية الصارمة لساحة مطار آل مكتوم الدولي (DWC)، صمم وشيد مصنع بيت النوخذة قاعات معارض وأجنحة دولية بمساحة إجمالية بلغت 15,000 متر مربع لمعرض دبي للطيران. وفر المشروع بيئة استراتيجية مجهزة لاستضافة كبرى الشركات العالمية المصنعة للطائرات، والوفود الحكومية والدفاعية، وقاعات توقيع الصفقات الثنائية الكبرى بمحاذاة مدرج العرض الجوي المباشر.",

  // Challenge & Engineering Solution
  challengeTitle: "التحدي الهندسي والحل الميداني المنفذ",
  challengeAndSolution: "تمثل التحدي في البناء المباشر داخل حرم ساحة الطيران النشطة، مع الالتزام الصارم بقوانين الطيران المدني لمنع تناثر أي مخلفات (FOD)، وتأمين مقاومة فائقة للرياح وتيارات الهواء النفاثة المنبعثة من مناورات الطائرات، دون أي حفر في أرضيات المدرج. اعتمد الفريق الهندسي لبيت النوخذة هياكل ألمنيوم صلبة معيارية مثبتة بقواعد أثقال اتزان آمنة، مع تزويد الأجنحة بألواح ساندوتش بانل عازلة للصوت والحرارة، وربطها بنظام تكييف صناعي بطاقة 1,500 طن لمواجهة الحرارة الشديدة المنعكسة من خرسانة ساحة المطار وضمان هدوء تام لجلسات التفاوض الوزارية.",

  // Project Delivery Highlights
  deliveryHighlights: [
    "تشييد 15,000 م² من القاعات المعيارية في ساحة مطار آل مكتوم وفق أعلى معايير أمان وسلامة الطيران المدني.",
    "استخدام أنظمة اتزان وتثبيت آمنة دون إحداث أي حفر أو أضرار بطبقات أرضيات وممرات مدرج المطار.",
    "تجهيز أجنحة شاليهات VIP ومقصورات توقيع صفقات دفاعية معزولة صوتياً لضمان الخصوصية التامة للوفود الرسمية.",
    "توفير نظام تكييف مركزي بطاقة 1,500 طن يحافظ على ثبات درجات الحرارة عند 20° مئوية في قلب ساحة الطيران المكشوفة."
  ],

  // Verified Technical Specifications
  specs: [
    { label: "المساحة المغطاة", value: "15,000 م²" },
    { label: "مقاومة الرياح والضغط", value: "معتمدة لمقاومة رياح حتى 130 كم/ساعة وعواصف ساحة المطار" },
    { label: "نظام إغلاق الجدران", value: "ألواح ساندوتش بانل عازلة للصوت مع واجهات زجاجية مزدوجة" },
    { label: "تغطية الأسقف", value: "أغشية PVC مزدوجة الطبقات معتمة ومقاومة للحرارة والحرائق" },
    { label: "سعة التكييف الصناعي", value: "1,500 طن تبريد بنظام الوحدات المدمجة عالية الكفاءة" }
  ],

  galleryImages: [
    { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/airshow-exterior-pavilions.webp", caption: "أجنحة وشاليهات الدول المشاركة في ساحة العرض الثابت بمطار آل مكتوم", type: "exterior" },
    { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/airshow-interior-exhibit.webp", caption: "القاعة من الداخل مع تعليق المجسمات ومعدات الطيران والدفاع", type: "interior" },
    { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/airshow-vip-chalet.webp", caption: "مقصورات وقاعات استقبال الوفود الرسمية ومجالس توقيع الصفقات", type: "interior" },
    { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/airshow-flightline-view.webp", caption: "إطلالة الواجهات الزجاجية المباشرة على مدرج العروض الجوية", type: "exterior" }
  ],

  beforeAfter: {
    before: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/airshow-before.webp",
    after: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/airshow-after.webp"
  },

  relatedProducts: [
    { name: "خيمة مضلعة", slug: "polygon-tent" },
    { name: "خيمة أركوم", slug: "arcum-tent" },
    { name: "خيمة طابقين", slug: "double-decker-tent" }
  ]
},
];
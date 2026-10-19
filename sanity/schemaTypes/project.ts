// كائن موحد لخيارات السيو المتقدمة (مطابق لـ RankMath)
const seoFieldsAr = {
  name: 'seo',
  title: 'إعدادات السيو المتقدمة (Advanced SEO & RankMath Options)',
  type: 'object',
  options: { collapsible: true, collapsed: false },
  fields: [
    {
      name: 'metaTitle',
      title: 'Snippet Title (عنوان المعاينة في جوجل - أقصى 60 حرف)',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Snippet Description (وصف المعاينة في جوجل - أقصى 160 حرف)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'breadcrumbTitle',
      title: 'Breadcrumb Title (عنوان المسار التفاعلي)',
      type: 'string',
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL (الرابط المرجعي الثابت)',
      type: 'url',
    },
    {
      name: 'robots',
      title: 'إعدادات روبوتات البحث (Robots Meta)',
      type: 'object',
      fields: [
        { name: 'noIndex', title: 'No Index (منع الأرشفة)', type: 'boolean', initialValue: false },
        { name: 'noFollow', title: 'No Follow (منع تتبع الروابط)', type: 'boolean', initialValue: false },
        { name: 'noArchive', title: 'No Archive (منع النسخ المخبأة)', type: 'boolean', initialValue: false },
        { name: 'noImageIndex', title: 'No Image Index (منع أرشفة الصور)', type: 'boolean', initialValue: false },
      ],
    },
  ],
};

export const project = {
  name: 'project',
  title: 'Projects (المشاريع)',
  type: 'document',
  fields: [
    // --- 1. معلومات الروابط والعنوان الأساسي ---
    { 
      name: 'slug', 
      title: 'URL Slug (الرابط الدائم للمشروع)', 
      type: 'slug', 
      options: { source: 'titleAr', maxLength: 96 } 
    },
    { name: 'titleAr', title: 'عنوان المشروع (بالعربية)', type: 'string' },
    { 
      name: 'image', 
      title: 'صورة الغلاف الرئيسية (Hero Image)', 
      type: 'image', 
      options: { hotspot: true } 
    },

    // --- 2. شريط المعلومات السريع (Meta Badges) ---
    { name: 'clientAr', title: 'الجهة المالكة / العميل', type: 'string' },
    { name: 'locationAr', title: 'الموقع (مثال: دبي، الإمارات)', type: 'string' },
    { name: 'year', title: 'سنة التنفيذ (مثال: 2026)', type: 'string' },
    { name: 'coveredArea', title: 'المساحة المغطاة (مثال: 3,800 م²)', type: 'string' },
    { name: 'categoryAr', title: 'التصنيف (مثال: المجالس الملكية وVIP)', type: 'string' },

    // --- 3. تفاصيل العمل والتحديات ---
    { 
      name: 'scopeOfWorkAr', 
      title: 'نطاق العمل والإنجاز (الوصف المختصر)', 
      type: 'text', 
      rows: 3 
    },
    { 
      name: 'engineeringChallengeAr', 
      title: 'التحدي الهندسي والحل الميداني المنفذ', 
      type: 'text', 
      rows: 4 
    },

    // --- 4. الخيام والهياكل المنفذة ---
    {
      name: 'tentsUsedAr',
      title: 'الخيام والهياكل المنفذة في المشروع',
      type: 'array',
      of: [{ type: 'string' }]
    },

    // --- 5. المواصفات الهندسية والتقنية ---
    {
      name: 'specs',
      title: 'المواصفات الهندسية والتقنية',
      type: 'object',
      fields: [
        { name: 'netArea', title: 'المساحة الصافية', type: 'string' },
        { name: 'wallSystem', title: 'نظام الجدران', type: 'string' },
        { name: 'roofFinish', title: 'تشطيب السقف', type: 'string' },
        { name: 'acSystem', title: 'نظام التكييف', type: 'string' }
      ]
    },

    // --- 6. التوثيق الميداني والمرئي (يدعم S3 ويوتيوب) ---
    { 
      name: 'videoUrl', 
      title: 'رابط فيديو المشروع (AWS S3 مباشر MP4/WebM أو رابط YouTube)', 
      description: 'يقبل رابط ملف فيديو سحابي مباشر من S3 أو رابط فيديو من يوتيوب.',
      type: 'url' 
    },
    {
      name: 'projectGallery',
      title: 'معرض صور المشروع الإضافية',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    },

    // --- 7. مقارنة قبل وبعد (Before & After) ---
    {
      name: 'comparison',
      title: 'مقارنة التحول الإنشائي (قبل وبعد)',
      type: 'object',
      fields: [
        { name: 'beforeImage', title: 'صورة مرحلة ما قبل التنفيذ', type: 'image', options: { hotspot: true } },
        { name: 'afterImage', title: 'صورة مرحلة بعد التسجيل والتسليم', type: 'image', options: { hotspot: true } }
      ]
    },

    // --- 8. إعدادات السيو المتقدمة ---
    seoFieldsAr
  ]
};
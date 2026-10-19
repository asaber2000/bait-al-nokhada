// كائن موحد لخصائص ووصف السيو الخاص بالصور
const imageWithSeoFields = {
  type: 'image',
  options: { hotspot: true },
  fields: [
    {
      name: 'alt',
      title: 'Alt Text (SEO Alternative Text)',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Image Title (عنوان الصورة)',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption (التسمية التوضيحية)',
      type: 'string',
    },
    {
      name: 'type',
      title: 'نوع العنصر (مثال: هيكل إنشائي / تشطيب داخلي / واجهة زجاجية)',
      type: 'string',
    },
  ],
};

export const projects = {
  name: 'project',
  title: 'Projects (المشاريع)',
  type: 'document',
  fields: [
    // --- 1. معلومات الروابط والعنوان الأساسي ---
    {
      name: 'slug',
      title: 'URL Slug (الرابط الدائم للمشروع)',
      type: 'slug',
      options: { source: 'titleAr', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'titleAr',
      title: 'عنوان المشروع بالعربية (مثل: مهرجان العين للفروسية)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },

    // --- 2. صورة الغلاف الرئيسية ---
    {
      name: 'image',
      title: 'صورة الغلاف الرئيسية للمشروع (Cover Image)',
      ...imageWithSeoFields,
    },

    // --- 3. بيانات الهوية والتنفيذ ---
    {
      name: 'clientAr',
      title: 'اسم العميل / الجهة المنظمة (مثل: نادي العين للفروسية)',
      type: 'string',
    },
    {
      name: 'locationAr',
      title: 'موقع المشروع (مثل: العين، أبوظبي / الرياض، السعودية)',
      type: 'string',
    },
    {
      name: 'year',
      title: 'سنة الإنجاز والتسليم (مثل: 2026)',
      type: 'string',
    },
    {
      name: 'coveredArea',
      title: 'إجمالي المساحة المغطاة (مثل: 3,200 م²)',
      type: 'string',
    },
    {
      name: 'categoryAr',
      title: 'تصنيف المشروع',
      type: 'string',
      options: {
        list: [
          { title: 'المعارض والقمم الدولية', value: 'المعارض والقمم الدولية' },
          { title: 'المنشآت والملاعب الرياضية', value: 'المنشآت والملاعب الرياضية' },
          { title: 'المجالس الملكية وVIP', value: 'المجالس الملكية وVIP' },
        ],
      },
    },

    // --- 4. التفاصيل الهندسية ونطاق العمل ---
    {
      name: 'scopeOfWorkAr',
      title: 'نطاق العمل ومراحل التنفيذ (Scope of Work)',
      type: 'text',
      rows: 4,
    },
    {
      name: 'engineeringChallengeAr',
      title: 'التحدي الهندسي والحل الميداني المنفذ',
      type: 'text',
      rows: 3,
    },
    {
      name: 'tentsUsedAr',
      title: 'الخيام والهياكل المنفذة في المشروع',
      type: 'array',
      of: [{ type: 'string' }],
    },

    // --- 5. جدول المواصفات الهندسية المعتمدة ---
    {
      name: 'specs',
      title: 'جدول المواصفات الفنية والهندسية',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'netArea', title: 'المساحة الصافية', type: 'string' },
        { name: 'wallSystem', title: 'نظام الجدران والألواح', type: 'string' },
        { name: 'roofFinish', title: 'تشطيب السقف والأغشية', type: 'string' },
        { name: 'acSystem', title: 'نظام التكييف والعزل الحراري', type: 'string' },
      ],
    },

    // --- 6. التوثيق المرئي والفيديو الشامل (S3 / YouTube) ---
    {
      name: 'videoUrl',
      title: 'رابط فيديو المشروع (يدعم AWS S3 بصيغة MP4/WebM أو رابط YouTube المباشر)',
      type: 'url',
      description: 'ضع رابط الفيديو المباشر من سيرفر S3 السحابي أو رابط يوتيوب.',
    },
    {
      name: 'videoUrlAr',
      title: 'رابط فيديو مخصص للنسخة العربية (اختياري)',
      type: 'url',
    },

    // --- 7. معرض الصور الميداني للمشروع ---
    {
      name: 'projectGallery',
      title: 'معرض صور مراحل التركيب والتشغيل الميداني',
      type: 'array',
      of: [imageWithSeoFields],
    },

    // --- 8. صور مقارنة قبل وبعد الإنجاز (Before & After) ---
    {
      name: 'comparison',
      title: 'مقارنة الموقع قبل وبعد سرعة التركيب والتسليم',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: 'beforeImage',
          title: 'صورة أرض الموقع قبل التركيب (Before)',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'afterImage',
          title: 'صورة الهيكل بعد اكتمال التنفيذ والتشغيل (After)',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },

    // --- 9. قسم السيو المتقدم (مطابق لـ RankMath) ---
    {
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
    },
  ],
};
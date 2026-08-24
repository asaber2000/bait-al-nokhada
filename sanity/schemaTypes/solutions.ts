// كائن موحد لخصائص ووصف السيو الخاص بالصورة
const imageWithSeoFields = {
  type: 'image',
  options: { hotspot: true },
  fields: [
    { name: 'alt', title: 'Alt Text (SEO Alternative Text)', type: 'string' },
    { name: 'title', title: 'Image Title (عنوان الصورة)', type: 'string' },
    { name: 'caption', title: 'Caption (التسمية التوضيحية)', type: 'string' },
    { name: 'description', title: 'Description (وصف الصورة التفصيلي)', type: 'text', rows: 2 },
  ],
};

export const solutions = {
  name: 'solution',
  title: 'Solutions - الحلول (عربي)',
  type: 'document',
  fields: [
    // --- 1. معلومات الروابط والعنوان الأساسي ---
    { 
      name: 'slug', 
      title: 'URL Slug (الرابط الدائم للحل)', 
      type: 'slug', 
      options: { source: 'titleAr', maxLength: 96 } 
    },
    { name: 'titleAr', title: 'عنوان الحل الرئيسي (مثال: خيام المستودعات الصناعية)', type: 'string' },
    
    // --- صورة الغلاف الرئيسية ---
    { 
      name: 'coverImage', 
      title: 'صورة الغلاف الرئيسية (Hero Image)', 
      ...imageWithSeoFields 
    },

    // --- 2. الوصف المختصر والبادج العُلوي ---
    { name: 'badgeAr', title: 'النص العُلوي البارز (Badge)', type: 'string' },
    { 
      name: 'summaryAr', 
      title: 'الوصف المختصر تحت العنوان', 
      type: 'text',
      rows: 2 
    },

    // --- 3. قسم النبذة والتعريف بالحل ---
    { name: 'overviewTitleAr', title: 'عنوان القسم التقني الرئيسي (لماذا تختار هذا الحل؟)', type: 'string' },
    { 
      name: 'overviewDescAr1', 
      title: 'فقرة الوصف التقني الأولى', 
      type: 'text',
      rows: 4 
    },
    { 
      name: 'overviewDescAr2', 
      title: 'فقرة الوصف التقني الثانية (اختيارية)', 
      type: 'text',
      rows: 4 
    },

    // --- 4. القطاعات المستهدفة (Target Industry Sectors) ---
    {
      name: 'targetSectors',
      title: 'القطاعات المستهدفة (Target Industry Sectors)',
      type: 'array',
      of: [{ type: 'string' }]
    },

    // --- 5. جدول المواصفات التقنية (Technical Highlights) ---
    {
      name: 'technicalHighlights',
      title: 'جدول المواصفات التقنية (Technical Highlights)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'اسم الخاصية (مثل: Clear Span Widths)', type: 'string' },
            { name: 'value', title: 'القيمة (مثل: 10m, 15m, up to 60m)', type: 'string' }
          ]
        }
      ]
    },

    // --- 6. المميزات الأربع الكبرى (Grid Cards) ---
    {
      name: 'keyFeaturesGrid',
      title: 'المميزات الأربع الرئيسية (الكروت السفلية)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'عنوان الميزة', type: 'string' },
            { name: 'description', title: 'وصف الميزة', type: 'text', rows: 2 }
          ]
        }
      ]
    },

    // --- 7. قسم دراسة الحالة والفيديو (Featured Case Study & Video) ---
    { name: 'videoSectionTitle', title: 'عنوان قسم الفيديو (مثال: Featured Case Study)', type: 'string' },
    { name: 'videoSectionSubtitle', title: 'الوصف التوضيحي تحت عنوان الفيديو', type: 'text', rows: 2 },
    { name: 'youtubeUrl', title: 'رابط فيديو اليوتيوب (YouTube Embed URL)', type: 'url' },

    // --- 8. الأسئلة الشائعة (FAQ) ---
    {
      name: 'faqs',
      title: 'الأسئلة الشائعة (Frequently Asked Questions)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'السؤال', type: 'string' },
            { name: 'answer', title: 'الإجابة', type: 'text', rows: 3 }
          ]
        }
      ]
    },

    // --- 9. معرض الصور الهندسي ---
    {
      name: 'solutionGallery',
      title: 'معرض صور التركيبات الميدانية للحل',
      type: 'array',
      of: [imageWithSeoFields]
    },

    // --- 10. إعدادات السيو المتقدمة (RankMath) ---
    {
      name: 'seo',
      title: 'إعدادات السيو المتقدمة (Advanced SEO & RankMath Options)',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'metaTitle', title: 'Snippet Title (عنوان المعاينة في جوجل)', type: 'string' },
        { name: 'metaDescription', title: 'Snippet Description (وصف المعاينة في جوجل)', type: 'text', rows: 3 },
        { name: 'breadcrumbTitle', title: 'Breadcrumb Title (عنوان المسار التفاعلي)', type: 'string' },
        { name: 'canonicalUrl', title: 'Canonical URL (الرابط المرجعي الثابت)', type: 'url' },
        {
          name: 'robots',
          title: 'إعدادات روبوتات البحث (Robots Meta)',
          type: 'object',
          fields: [
            { name: 'noIndex', title: 'No Index (منع الأرشفة)', type: 'boolean', initialValue: false },
            { name: 'noFollow', title: 'No Follow (منع تتبع الروابط)', type: 'boolean', initialValue: false },
          ]
        }
      ]
    }
  ]
};
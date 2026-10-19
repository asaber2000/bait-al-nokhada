// كائن موحد لخصائص ووصف السيو الخاص بالصورة
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
      name: 'description',
      title: 'Description (وصف الصورة التفصيلي)',
      type: 'text',
      rows: 2,
    },
  ],
};

export const products = {
  name: 'product',
  title: 'Products (المنتجات)',
  type: 'document',
  fields: [
    // --- 1. معلومات الروابط والعنوان الأساسي ---
    { 
      name: 'slug', 
      title: 'URL Slug (الرابط الدائم للمنتج)', 
      type: 'slug', 
      options: { source: 'titleAr', maxLength: 96 } 
    },
    { name: 'titleAr', title: 'اسم المنتج (بالعربية - مثل: Pyramid Tent)', type: 'string' },
    
    // --- صورة الغلاف مع حقول السيو الكاملة ---
    { 
      name: 'coverImage', 
      title: 'صورة الغلاف الرئيسية (Hero Image)', 
      ...imageWithSeoFields 
    },

    // --- 2. التصنيف والوصف المختصر ---
    { 
      name: 'categoryAr', 
      title: 'التصنيف (مثال: Luxury & Hospitality)', 
      type: 'string' 
    },
    { 
      name: 'summaryAr', 
      title: 'الوصف المختصر تحت العنوان', 
      type: 'text',
      rows: 2 
    },

    // --- 3. شريط البادجات العلوي ---
    {
      name: 'topBadges',
      title: 'البادجات العلوية البارزة',
      type: 'array',
      of: [{ type: 'string' }]
    },

    // --- 4. النبذة التقنية ---
    { name: 'overviewTitleAr', title: 'عنوان القسم التقني', type: 'string' },
    { 
      name: 'overviewDescAr', 
      title: 'النص التفصيلي للقسم التقني', 
      type: 'text',
      rows: 4 
    },

    // --- 5. المميزات الهندسية ---
    {
      name: 'engineeredAdvantages',
      title: 'قائمة المميزات الهندسية والشهادات (نقطة بنقطة)',
      type: 'array',
      of: [{ type: 'string' }]
    },

    // --- 6. جدول المقاسات وسعات الضيوف ---
    {
      name: 'availableProfiles',
      title: 'جدول المقاسات وسعات الضيوف (Profiles)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'sizeName', title: 'اسم المقاس (مثل: Pyramid PT 3x3)', type: 'string' },
            { name: 'dimensions', title: 'الأبعاد والمواصفات', type: 'string' },
            { name: 'capacity', title: 'سعة الضيوف', type: 'string' }
          ]
        }
      ]
    },

    // --- 7. جدول المواصفات التقنية الرسمية ---
    {
      name: 'engineeringDataSheet',
      title: 'جدول المواصفات التقنية الرسمية (Data Sheet)',
      type: 'object',
      fields: [
        { name: 'mainFrame', title: 'Main Frame Structure', type: 'string' },
        { name: 'steelComponents', title: 'Steel Components', type: 'string' },
        { name: 'windLoad', title: 'Wind Load Tolerance', type: 'string' },
        { name: 'operatingTemp', title: 'Operating Temperature', type: 'string' },
        { name: 'fabricFire', title: 'Fabric Fire Retardancy', type: 'string' },
        { name: 'roofCovering', title: 'Roof Covering', type: 'string' },
        { name: 'wallOptions', title: 'Side Wall Options', type: 'string' },
        { name: 'standardSpans', title: 'Available Standard Spans', type: 'string' }
      ]
    },

    // --- 8. معرض الصور الهندسي مع حقول السيو لكل صورة ---
    {
      name: 'productGallery',
      title: 'معرض صور التركيبات الميدانية للمنتج',
      type: 'array',
      of: [imageWithSeoFields]
    },

    // --- 9. قسم السيو المتقدم (مطابق تماماً لـ RankMath في WordPress) ---
    {
      name: 'seo',
      title: 'إعدادات السيو المتقدمة (Advanced SEO & RankMath Options)',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { 
          name: 'metaTitle', 
          title: 'Snippet Title (عنوان المعاينة في جوجل - أقصى 60 حرف)', 
          type: 'string' 
        },
        { 
          name: 'metaDescription', 
          title: 'Snippet Description (وصف المعاينة في جوجل - أقصى 160 حرف)', 
          type: 'text',
          rows: 3 
        },
        { 
          name: 'breadcrumbTitle', 
          title: 'Breadcrumb Title (عنوان المسار التفاعلي)', 
          type: 'string' 
        },
        { 
          name: 'canonicalUrl', 
          title: 'Canonical URL (الرابط المرجعي الثابت)', 
          type: 'url' 
        },
        // خيارات الروبوتات (Robots Meta)
        {
          name: 'robots',
          title: 'إعدادات روبوتات البحث (Robots Meta)',
          type: 'object',
          fields: [
            { name: 'noIndex', title: 'No Index (منع الأرشفة)', type: 'boolean', initialValue: false },
            { name: 'noFollow', title: 'No Follow (منع تتبع الروابط)', type: 'boolean', initialValue: false },
            { name: 'noArchive', title: 'No Archive (منع النسخ المخبأة)', type: 'boolean', initialValue: false },
            { name: 'noImageIndex', title: 'No Image Index (منع أرشفة الصور)', type: 'boolean', initialValue: false }
          ]
        },
        // إعدادات إعادة التوجيه (Redirect Options)
        {
          name: 'redirect',
          title: 'إعادة التوجيه (Redirects)',
          type: 'object',
          fields: [
            { name: 'enableRedirect', title: 'تفعيل إعادة التوجيه لهذه الصفحة', type: 'boolean', initialValue: false },
            { 
              name: 'redirectType', 
              title: 'نوع التوجيه (Redirect Type)', 
              type: 'string',
              options: {
                list: [
                  { title: '301 Permanent Move (نقل دائم)', value: '301' },
                  { title: '302 Temporary Move (نقل مؤقت)', value: '302' },
                  { title: '410 Content Deleted (محتوى محذوف)', value: '410' }
                ]
              }
            },
            { name: 'destinationUrl', title: 'رابط الوجهة المقصودة (Destination URL)', type: 'url' }
          ]
        }
      ]
    }
  ]
};
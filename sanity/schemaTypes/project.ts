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
      of: [{ type: 'string' }] // مثال: Arabic Majlis Tent, Panoramic Tent
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

    // --- 6. التوثيق الميداني والمرئي (فيديو ومعرض صور) ---
    { 
      name: 'videoUrl', 
      title: 'رابط فيديو المشروع (YouTube URL)', 
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
    }
  ]
};

export const projectEn = {
  name: 'projectEn',
  title: 'Projects (English)',
  type: 'document',
  fields: [
    // --- 1. Slug & Core Title ---
    { 
      name: 'slug', 
      title: 'URL Slug', 
      type: 'slug', 
      options: { source: 'titleEn', maxLength: 96 } 
    },
    { name: 'titleEn', title: 'Project Title (English)', type: 'string' },
    { 
      name: 'image', 
      title: 'Hero Image', 
      type: 'image', 
      options: { hotspot: true } 
    },

    // --- 2. Meta Badges ---
    { name: 'clientEn', title: 'Client / Official Authority', type: 'string' },
    { name: 'locationEn', title: 'Location (e.g., Dubai, UAE)', type: 'string' },
    { name: 'year', title: 'Execution Year (e.g., 2026)', type: 'string' },
    { name: 'coveredArea', title: 'Covered Area (e.g., 3,800 sqm)', type: 'string' },
    { name: 'categoryEn', title: 'Category (e.g., VIP & Royal Majlis)', type: 'string' },

    // --- 3. Scope & Challenge ---
    { 
      name: 'scopeOfWorkEn', 
      title: 'Scope of Work & Execution (Summary)', 
      type: 'text',
      rows: 3 
    },
    { 
      name: 'engineeringChallengeEn', 
      title: 'Engineering Challenge & Implemented Field Solution', 
      type: 'text',
      rows: 4 
    },

    // --- 4. Tents & Structures Used ---
    {
      name: 'tentsUsedEn',
      title: 'Tents & Structures Implemented',
      type: 'array',
      of: [{ type: 'string' }] // e.g., Arabic Majlis Tent, Panoramic Tent
    },

    // --- 5. Engineering & Technical Specs ---
    {
      name: 'specs',
      title: 'Engineering & Technical Specifications',
      type: 'object',
      fields: [
        { name: 'netArea', title: 'Net Area', type: 'string' },
        { name: 'wallSystem', title: 'Wall System', type: 'string' },
        { name: 'roofFinish', title: 'Roof Finish', type: 'string' },
        { name: 'acSystem', title: 'AC System', type: 'string' }
      ]
    },

    // --- 6. Field & Visual Documentation ---
    { 
      name: 'videoUrl', 
      title: 'YouTube Video URL', 
      type: 'url' 
    },
    {
      name: 'projectGallery',
      title: 'Additional Project Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    },

    // --- 7. Before & After Comparison ---
    {
      name: 'comparison',
      title: 'Structural Transformation (Before & After)',
      type: 'object',
      fields: [
        { name: 'beforeImage', title: 'Before Execution Image', type: 'image', options: { hotspot: true } },
        { name: 'afterImage', title: 'After Delivery Image', type: 'image', options: { hotspot: true } }
      ]
    }
  ]
};
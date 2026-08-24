export const article = {
  name: 'article',
  title: 'Articles & Pages (عربي)',
  type: 'document',
  fields: [
    { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'titleAr', maxLength: 96 } },
    { name: 'image', title: 'Featured Hero Image', type: 'image', options: { hotspot: true } },

    // --- SEO Fields ---
    {
      name: 'seoTitle',
      title: 'عنوان السيو (SEO Title)',
      type: 'string',
      validation: (Rule: any) => Rule.max(60).warning('العنوان الطويل قد يتم قصه في نتائج بحث جوجل.')
    },
    {
      name: 'seoDesc',
      title: 'وصف الميتا (Meta Description)',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.max(160).error('تنبيه: تخطيت الحد الأقصى 160 حرف.')
    },
    {
      name: 'canonicalUrl',
      title: 'الرابط الأساسي (Canonical URL)',
      type: 'url'
    },

    // --- القسم العربي ---
    { name: 'titleAr', title: 'عنوان المقال (بالعربية)', type: 'string' },
    { name: 'descAr', title: 'الملخص القصير (بالعربية)', type: 'text' },
    {
      name: 'tocAr',
      title: 'فهرس ومحتويات المقال (عربي - TOC)',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'id', title: 'معرف القسم (ID)', type: 'string' },
        { name: 'label', title: 'عنوان العنصر في الفهرس', type: 'string' }
      ]}]
    },

    // --- نظام Page Builder المتقدم (بدون أي مساس بيه) ---
    {
      name: 'contentSectionsAr',
      title: 'أقسام ومحتوى المقال (Page Builder الاحترافي)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'sectionItem',
          title: 'عنصر محتوى جديد',
          fields: [
            { name: 'id', title: 'معرف القسم (ID للتوجيه)', type: 'string' },
            { name: 'heading', title: 'العنوان الفرعي', type: 'string' },
            { 
              name: 'body', 
              title: 'نص الفقرة (محرر نصي متقدم جداً)', 
              type: 'array', 
              of: [
                { 
                  type: 'block',
                  styles: [
                    {title: 'Paragraph (فقرة عادية)', value: 'normal'},
                    {title: 'Heading 1 (H1)', value: 'h1'},
                    {title: 'Heading 2 (H2)', value: 'h2'},
                    {title: 'Heading 3 (H3)', value: 'h3'},
                    {title: 'Heading 4 (H4)', value: 'h4'},
                    {title: 'Quote (اقتباس مميز)', value: 'blockquote'}
                  ],
                  marks: {
                    decorators: [
                      {title: 'Strong (Bold)', value: 'strong'},
                      {title: 'Emphasis (Italic)', value: 'em'},
                      {title: 'Underline', value: 'underline'},
                      {title: 'Strike through', value: 'strike-through'},
                      {title: 'Highlight / Color', value: 'highlight', icon: () => '🎨'}
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'URL Link',
                        fields: [{name: 'href', type: 'url', title: 'رابط'}]
                      }
                    ]
                  }
                },
                {
                  type: 'image',
                  options: { hotspot: true },
                  title: 'صورة داخل النص'
                },
                {
                  type: 'object',
                  name: 'tableBlock',
                  title: 'إدراج جدول بيانات (Table)',
                  fields: [
                    { name: 'tableCaption', title: 'عنوان الجدول', type: 'string' },
                    { 
                      name: 'rows', 
                      title: 'صفوف وأعمدة الجدول', 
                      type: 'array', 
                      of: [{
                        type: 'object',
                        fields: [
                          { name: 'cell1', title: 'الخلية 1', type: 'string' },
                          { name: 'cell2', title: 'الخلية 2', type: 'string' },
                          { name: 'cell3', title: 'الخلية 3', type: 'string' },
                          { name: 'cell4', title: 'الخلية 4', type: 'string' }
                        ]
                      }] 
                    }
                  ]
                },
                {
                  type: 'object',
                  name: 'videoBlock',
                  title: 'إدراج فيديو ( يوتيوب / رابط مباشر )',
                  fields: [
                    { name: 'videoUrl', title: 'رابط الفيديو (YouTube URL أو MP4)', type: 'url' },
                    { name: 'videoCaption', title: 'وصف الفيديو', type: 'string' }
                  ]
                }
              ] 
            },
            { name: 'points', title: 'نقاط مميزة (Bullet Points)', type: 'array', of: [{ type: 'string' }] },
            { 
              name: 'sectionImage', 
              title: 'صورة القسم (تظهر أسفل النص)', 
              type: 'image', 
              options: { hotspot: true } 
            },
            {
              name: 'sectionButton',
              title: 'الزر التفاعلي أسفل القسم (CTA Button)',
              type: 'object',
              fields: [
                { name: 'btnText', title: 'نص الزر', type: 'string', initialValue: 'Get a Quote' },
                { name: 'btnUrl', title: 'رابط الزر (URL)', type: 'string', initialValue: '/contact' },
                { 
                  name: 'btnStyle', 
                  title: 'لون وتصميم الزر', 
                  type: 'string', 
                  options: { 
                    list: [
                      { title: 'ذهبي أساسي (Gold Primary)', value: 'primary' },
                      { title: 'إطار شفاف (Outline)', value: 'outline' }
                    ] 
                  },
                  initialValue: 'primary'
                }
              ]
            }
          ]
        }
      ]
    },

    {
      name: 'faqsAr',
      title: 'الأسئلة الشائعة (بالعربية)',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'question', title: 'السؤال', type: 'string' },
        { name: 'answer', title: 'الإجابة', type: 'text' }
      ]}]
    }
  ]
};
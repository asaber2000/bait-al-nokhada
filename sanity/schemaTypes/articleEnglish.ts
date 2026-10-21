const seoFieldsEn = {
  name: 'seo',
  title: 'Advanced SEO & RankMath Options',
  type: 'object',
  options: { collapsible: true, collapsed: false },
  fields: [
    {
      name: 'metaTitle',
      title: 'Snippet Title (Google preview - max 60 chars)',
      type: 'string',
      validation: (Rule: any) => Rule.max(60).warning('Optimal length is under 60 characters.')
    },
    {
      name: 'metaDescription',
      title: 'Snippet Description (Google preview - max 160 chars)',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.max(160).error('Exceeded maximum length of 160 characters.')
    },
    { name: 'breadcrumbTitle', title: 'Breadcrumb Title', type: 'string' },
    { name: 'canonicalUrl', title: 'Canonical URL', type: 'url' },
    {
      name: 'robots',
      title: 'Robots Meta Settings',
      type: 'object',
      fields: [
        { name: 'noIndex', title: 'No Index', type: 'boolean', initialValue: false },
        { name: 'noFollow', title: 'No Follow', type: 'boolean', initialValue: false },
        { name: 'noArchive', title: 'No Archive', type: 'boolean', initialValue: false },
        { name: 'noImageIndex', title: 'No Image Index', type: 'boolean', initialValue: false },
      ],
    },
  ],
};

export const articleEnglish = {
  name: 'articleEnglish', // <--- غير دي لـ articleEnglish
  title: 'Articles & Pages (English)',
  type: 'document',
  fields: [
    { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'titleEn', maxLength: 96 } },
    {
      name: 'image',
      title: 'Featured Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt Text (SEO)', type: 'string' },
        { name: 'caption', title: 'Image Caption', type: 'string' }
      ]
    },

    seoFieldsEn,

    // --- English Section ---
    { name: 'titleEn', title: 'Article Title (English)', type: 'string' },
    {
      name: 'isFeatured',
      title: 'Set as Top Featured Article (Hero Banner)',
      type: 'boolean',
      initialValue: false,
      description: 'Turn this ON to pin this article at the very top of the news catalog as the Hero Banner story.',
    },
    {
      name: 'categoryEn',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Tent Rental & Events', value: 'Tent Rental & Events' },
          { title: 'Commercial & Warehouses', value: 'Commercial & Warehouses' },
          { title: 'VIP & Royal Majlis', value: 'VIP & Royal Majlis' },
          { title: 'Fabric Architecture & Engineering', value: 'Fabric Architecture & Engineering' },
        ]
      }
    },
    {
      name: 'tags',
      title: 'Tags (Keywords for Related Filtering)',
      type: 'array',
      of: [{ type: 'string' }]
    },
    { name: 'descEn', title: 'Short Summary (English)', type: 'text' },
    {
      name: 'tocEn',
      title: 'Table of Contents (English - TOC)',
      type: 'array',
      of: [{
        type: 'object', fields: [
          { name: 'id', title: 'Section ID', type: 'string' },
          { name: 'label', title: 'Item Label', type: 'string' }
        ]
      }]
    },

    // --- Page Builder (مطابق للعربي تماماً) ---
    {
      name: 'contentSectionsEn',
      title: 'Article Content Sections (Page Builder)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'sectionItemEn',
          title: 'Content Item',
          fields: [
            { name: 'id', title: 'Section ID', type: 'string' },
            { name: 'heading', title: 'Subheading', type: 'string' },
            {
              name: 'body',
              title: 'Paragraph Body',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Paragraph', value: 'normal' },
                    { title: 'Heading 1 (H1)', value: 'h1' },
                    { title: 'Heading 2 (H2)', value: 'h2' },
                    { title: 'Heading 3 (H3)', value: 'h3' },
                    { title: 'Heading 4 (H4)', value: 'h4' },
                    { title: 'Quote', value: 'blockquote' }
                  ],
                  marks: {
                    decorators: [
                      { title: 'Strong (Bold)', value: 'strong' },
                      { title: 'Emphasis (Italic)', value: 'em' },
                      { title: 'Underline', value: 'underline' },
                      { title: 'Strike through', value: 'strike-through' },
                      { title: 'Highlight / Color', value: 'highlight', icon: () => '🎨' }
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'URL Link',
                        fields: [{ name: 'href', type: 'url', title: 'URL' }]
                      }
                    ]
                  }
                },
                {
                  type: 'object',
                  name: 'customVideoBlock',
                  title: 'Upload Video From Computer',
                  fields: [
                    {
                      name: 'sectionVideoFile',
                      title: 'Section Video File (MP4)',
                      type: 'file',
                    },
                    { name: 'videoCaption', title: 'Video Caption', type: 'string' }
                  ]
                },
                {
                  name: 'articleInlineImage',
                  type: 'object',
                  title: 'Inline Image',
                  fields: [
                    {
                      name: 'image',
                      title: 'Image File',
                      type: 'image',
                      options: { hotspot: true },
                    },
                    {
                      name: 'alt',
                      title: 'Alt Text (SEO)',
                      type: 'string',
                    },
                    {
                      name: 'caption',
                      title: 'Caption',
                      type: 'string',
                    },
                  ],
                  preview: {
                    select: {
                      media: 'image',
                    },
                    prepare({ media }: any) {
                      return {
                        title: 'Article Inline Image',
                        media,
                      };
                    },
                  },
                },
                {
                  type: 'object',
                  name: 'tableBlock',
                  title: 'Insert Table',
                  fields: [
                    { name: 'tableCaption', title: 'Table Caption', type: 'string' },
                    {
                      name: 'rows',
                      title: 'Table Rows & Columns',
                      type: 'array',
                      of: [{
                        type: 'object',
                        fields: [
                          { name: 'cell1', title: 'Cell 1', type: 'string' },
                          { name: 'cell2', title: 'Cell 2', type: 'string' },
                          { name: 'cell3', title: 'Cell 3', type: 'string' },
                          { name: 'cell4', title: 'Cell 4', type: 'string' }
                        ]
                      }]
                    }
                  ]
                },
                {
                  type: 'object',
                  name: 'videoBlock',
                  title: 'Insert Video',
                  fields: [
                    { name: 'videoUrl', title: 'Video URL (YouTube or MP4)', type: 'url' },
                    { name: 'videoCaption', title: 'Video Caption', type: 'string' }
                  ]
                }
              ]
            },
            { name: 'points', title: 'Bullet Points', type: 'array', of: [{ type: 'string' }] },
            {
              name: 'sectionImage',
              title: 'Section Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                { name: 'alt', title: 'Alt Text (SEO)', type: 'string' }
              ]
            },
            {
              name: 'sectionButton',
              title: 'CTA Button',
              type: 'object',
              fields: [
                { name: 'btnText', title: 'Button Text', type: 'string', initialValue: 'Get a Quote' },
                { name: 'btnUrl', title: 'Button URL', type: 'string', initialValue: '/contact' },
                {
                  name: 'btnStyle',
                  title: 'Button Style',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Gold Primary', value: 'primary' },
                      { title: 'Outline', value: 'outline' }
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
      name: 'faqsEn',
      title: 'Frequently Asked Questions (English)',
      type: 'array',
      of: [{
        type: 'object', fields: [
          { name: 'question', title: 'Question', type: 'string' },
          { name: 'answer', title: 'Answer', type: 'text' }
        ]
      }]
    }
  ]
};
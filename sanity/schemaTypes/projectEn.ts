// Unified Advanced SEO Fields (RankMath Equivalent)
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
    },
    {
      name: 'metaDescription',
      title: 'Snippet Description (Google preview - max 160 chars)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'breadcrumbTitle',
      title: 'Breadcrumb Title',
      type: 'string',
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
    },
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
      title: 'Hero Image (Direct Upload)',
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
      of: [{ type: 'string' }]
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
      title: 'Video Direct URL (CloudFront / S3 / YouTube)',
      type: 'url',
      description: 'Paste direct .mp4 CloudFront URL or YouTube video link',
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
    },

    // --- 8. Advanced SEO ---
    seoFieldsEn
  ]
};
const imageWithSeoFields = {
  type: 'image',
  options: { hotspot: true },
  fields: [
    { name: 'alt', title: 'Alt Text (SEO Alternative Text)', type: 'string' },
    { name: 'title', title: 'Image Title', type: 'string' },
    { name: 'caption', title: 'Caption', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 2 },
  ],
};

export const solutionsEn = {
  name: 'solutionEn',
  title: 'Solutions - الحلول (English)',
  type: 'document',
  fields: [
    { 
      name: 'slug', 
      title: 'URL Slug', 
      type: 'slug', 
      options: { source: 'titleEn', maxLength: 96 } 
    },
    { name: 'titleEn', title: 'Solution Title', type: 'string' },
    { 
      name: 'coverImage', 
      title: 'Hero Cover Image', 
      ...imageWithSeoFields 
    },
    { name: 'badgeEn', title: 'Top Highlight Badge', type: 'string' },
    { 
      name: 'summaryEn', 
      title: 'Short Summary / Tagline', 
      type: 'text',
      rows: 2 
    },
    { name: 'overviewTitleEn', title: 'Technical Section Title', type: 'string' },
    { 
      name: 'overviewDescEn1', 
      title: 'Technical Description Paragraph 1', 
      type: 'text',
      rows: 4 
    },
    { 
      name: 'overviewDescEn2', 
      title: 'Technical Description Paragraph 2', 
      type: 'text',
      rows: 4 
    },
    {
      name: 'targetSectorsEn',
      title: 'Target Industry Sectors',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'technicalHighlightsEn',
      title: 'Technical Highlights Table',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Specification Label', type: 'string' },
            { name: 'value', title: 'Specification Value', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'keyFeaturesGridEn',
      title: 'Key Features Grid Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Feature Title', type: 'string' },
            { name: 'description', title: 'Feature Description', type: 'text', rows: 2 }
          ]
        }
      ]
    },
    { name: 'videoSectionTitleEn', title: 'Video Section Title', type: 'string' },
    { name: 'videoSectionSubtitleEn', title: 'Video Section Subtitle', type: 'text', rows: 2 },
    { name: 'youtubeUrlEn', title: 'YouTube Video Embed URL', type: 'url' },
    {
      name: 'faqsEn',
      title: 'Frequently Asked Questions (FAQ)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 3 }
          ]
        }
      ]
    },
    {
      name: 'solutionGalleryEn',
      title: 'Solution Field Gallery Images',
      type: 'array',
      of: [imageWithSeoFields]
    },
    {
      name: 'seo',
      title: 'Advanced SEO Options',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'metaTitle', title: 'Snippet Title', type: 'string' },
        { name: 'metaDescription', title: 'Snippet Description', type: 'text', rows: 3 },
        { name: 'breadcrumbTitle', title: 'Breadcrumb Title', type: 'string' },
        { name: 'canonicalUrl', title: 'Canonical URL', type: 'url' },
        {
          name: 'robots',
          title: 'Robots Meta',
          type: 'object',
          fields: [
            { name: 'noIndex', title: 'No Index', type: 'boolean', initialValue: false },
            { name: 'noFollow', title: 'No Follow', type: 'boolean', initialValue: false },
          ]
        }
      ]
    }
  ]
};
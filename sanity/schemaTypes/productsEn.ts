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
      title: 'Image Title',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Detailed Description',
      type: 'text',
      rows: 2,
    },
  ],
};

export const productsEn = {
  name: 'productsEn',
  title: 'Products (English)',
  type: 'document',
  fields: [
    // --- 1. Slug & Title ---
    { 
      name: 'slug', 
      title: 'URL Slug (e.g. pyramid-tent)', 
      type: 'slug', 
      options: { source: 'titleEn', maxLength: 96 } 
    },
    { name: 'titleEn', title: 'Product Name (English)', type: 'string' },
    
    // --- Cover Image ---
    { 
      name: 'coverImage', 
      title: 'Cover Image (Hero Image)', 
      ...imageWithSeoFields 
    },

    // --- 2. Category & Summary ---
    { 
      name: 'categoryEn', 
      title: 'Category (e.g. Luxury & Hospitality)', 
      type: 'string' 
    },
    { 
      name: 'summaryAr', // حافظنا على توافق التسمية أو summaryEn
      nameEn: 'summaryEn',
      title: 'Short Summary', 
      type: 'text',
      rows: 2 
    },

    // --- 3. Top Badges ---
    {
      name: 'topBadges',
      title: 'Top Highlight Badges',
      type: 'array',
      of: [{ type: 'string' }]
    },

    // --- 4. Technical Overview ---
    { name: 'overviewTitleEn', title: 'Overview Section Title', type: 'string' },
    { 
      name: 'overviewDescEn', 
      title: 'Overview Detailed Description', 
      type: 'text',
      rows: 4 
    },

    // --- 5. Engineered Advantages ---
    {
      name: 'engineeredAdvantages',
      title: 'Engineered Advantages & Certifications',
      type: 'array',
      of: [{ type: 'string' }]
    },

    // --- 6. Available Profiles / Sizes ---
    {
      name: 'availableProfiles',
      title: 'Available Profiles & Guest Capacities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'sizeName', title: 'Size Name (e.g. Pyramid PT 3x3)', type: 'string' },
            { name: 'dimensions', title: 'Dimensions & Specs', type: 'string' },
            { name: 'capacity', title: 'Guest Capacity', type: 'string' }
          ]
        }
      ]
    },

    // --- 7. Engineering Data Sheet ---
    {
      name: 'engineeringDataSheet',
      title: 'Official Engineering Data Sheet',
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

    // --- 8. Gallery ---
    {
      name: 'productGallery',
      title: 'Field Installation Gallery',
      type: 'array',
      of: [imageWithSeoFields]
    },

    // --- 9. Advanced SEO (RankMath Options) ---
    {
      name: 'seo',
      title: 'Advanced SEO & RankMath Options',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'metaTitle', title: 'Snippet Title (Max 60 chars)', type: 'string' },
        { name: 'metaDescription', title: 'Snippet Description (Max 160 chars)', type: 'text', rows: 3 },
        { name: 'breadcrumbTitle', title: 'Breadcrumb Title', type: 'string' },
        { name: 'canonicalUrl', title: 'Canonical URL', type: 'url' },
        {
          name: 'robots',
          title: 'Robots Meta',
          type: 'object',
          fields: [
            { name: 'noIndex', title: 'No Index', type: 'boolean', initialValue: false },
            { name: 'noFollow', title: 'No Follow', type: 'boolean', initialValue: false },
            { name: 'noArchive', title: 'No Archive', type: 'boolean', initialValue: false },
            { name: 'noImageIndex', title: 'No Image Index', type: 'boolean', initialValue: false }
          ]
        },
        {
          name: 'redirect',
          title: 'Redirects',
          type: 'object',
          fields: [
            { name: 'enableRedirect', title: 'Enable Redirect', type: 'boolean', initialValue: false },
            { 
              name: 'redirectType', 
              title: 'Redirect Type', 
              type: 'string',
              options: {
                list: [
                  { title: '301 Permanent Move', value: '301' },
                  { title: '302 Temporary Move', value: '302' },
                  { title: '410 Content Deleted', value: '410' }
                ]
              }
            },
            { name: 'destinationUrl', title: 'Destination URL', type: 'url' }
          ]
        }
      ]
    }
  ]
};
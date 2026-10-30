import { defineField, defineType } from "sanity";

export const featureShowcaseEn = defineType({
  name: "featureShowcaseEn",
  title: "Feature Showcase (English)",
  type: "document",
  fields: [
    defineField({
      name: "badgeText",
      title: "Badge Text",
      type: "string",
      description: "e.g. Pioneering Modular Architecture Since 1997",
    }),
    defineField({
      name: "mainHeadingBlack",
      title: "Main Heading (Dark Text)",
      type: "string",
      description: "e.g. Tent Rental, Supplier & Manufacturing",
    }),
    defineField({
      name: "mainHeadingGradient",
      title: "Main Heading (Gradient Gold Text)",
      type: "string",
      description: "e.g. Experts",
    }),
    defineField({
      name: "description",
      title: "Paragraph Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "sideImage",
      title: "Side Showcase Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "pillarsSectionBadge",
      title: "Pillars Section Badge",
      type: "string",
      description: "e.g. The Gold Standard In Tensile Engineering",
    }),
    defineField({
      name: "pillarsSectionTitleBlack",
      title: "Pillars Title (Dark Text)",
      type: "string",
      description: "e.g. Why Industry Leaders",
    }),
    defineField({
      name: "pillarsSectionTitleGradient",
      title: "Pillars Title (Gradient Text)",
      type: "string",
      description: "e.g. Trust Bait Al Nokhada",
    }),
    defineField({
      name: "pillarsSectionDescription",
      title: "Pillars Subtitle / Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "pillarsList",
      title: "3 Pillars Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "num", title: "Number (e.g. 01)", type: "string" }),
            defineField({ name: "title", title: "Pillar Title", type: "string" }),
            defineField({ name: "desc", title: "Description", type: "text", rows: 2 }),
            defineField({ name: "statLabel", title: "Metric Label", type: "string" }),
            defineField({ name: "statValue", title: "Metric Number Value", type: "number" }),
            defineField({ name: "statSuffix", title: "Metric Suffix (e.g. + Years)", type: "string" }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "mainHeadingBlack",
      subtitle: "badgeText",
    },
  },
});

export const featureShowcaseAr = defineType({
  name: "featureShowcaseAr",
  title: "المميزات والركائز (عربي)",
  type: "document",
  fields: [
    defineField({
      name: "badgeText",
      title: "نص الشريط العلوي (Badge)",
      type: "string",
      description: "مثال: رواد تصنيع وتأجير الخيام في الإمارات والسعودية — منذ عام 1997",
    }),
    defineField({
      name: "mainHeadingBlack",
      title: "العنوان الرئيسي (نص داكن)",
      type: "string",
      description: "مثال: خبراء تصنيع وتوريد وتأجير",
    }),
    defineField({
      name: "mainHeadingGradient",
      title: "العنوان الرئيسي الملون (Gradient)",
      type: "string",
      description: "مثال: الخيام والقاعات الإنشائية الكبرى",
    }),
    defineField({
      name: "description",
      title: "نص الفقرة التعريفية",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "sideImage",
      title: "صورة المعرض الجانبية",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "pillarsSectionBadge",
      title: "بادج قسم الركائز",
      type: "string",
      description: "مثال: المعيار الذهبي في الهندسة الإنشائية منذ عام 1997",
    }),
    defineField({
      name: "pillarsSectionTitleBlack",
      title: "عنوان الركائز (داكن)",
      type: "string",
      description: "مثال: لماذا يختار رواد الصناعة",
    }),
    defineField({
      name: "pillarsSectionTitleGradient",
      title: "عنوان الركائز الملون (Gradient)",
      type: "string",
      description: "مثال: بيت النوخذة؟",
    }),
    defineField({
      name: "pillarsSectionDescription",
      title: "وصف قسم الركائز",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "pillarsList",
      title: "قائمة الركائز الثلاث",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "num", title: "الرقم (مثال: 01)", type: "string" }),
            defineField({ name: "title", title: "عنوان الركيزة", type: "string" }),
            defineField({ name: "desc", title: "الوصف", type: "text", rows: 2 }),
            defineField({ name: "statLabel", title: "عنوان الإحصائية", type: "string" }),
            defineField({ name: "statValue", title: "القيمة الرقمية", type: "number" }),
            defineField({ name: "statSuffix", title: "اللاحقة (مثال: + عاماً)", type: "string" }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "mainHeadingBlack",
      subtitle: "badgeText",
    },
  },
});
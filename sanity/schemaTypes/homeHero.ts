import { defineField, defineType } from "sanity";

// 1. النسخة الإنجليزية
export const homeHeroEn = defineType({
  name: "homeHeroEn",
  title: "Home Hero (English)",
  type: "document",
  fields: [
    defineField({
      name: "topBadge",
      title: "Top Pill Badge Text",
      type: "string",
      description: "e.g. EST. 1997 • PREMIER TENT MANUFACTURERS IN UAE",
    }),
    defineField({
      name: "subHeading",
      title: "Subheading (Gold Text)",
      type: "string",
      description: "e.g. ENGINEERED SOLUTIONS FOR MEGA PROJECTS & EVENTS",
    }),
    defineField({
      name: "mainHeadingWhite",
      title: "Main Heading (White Text)",
      type: "string",
      description: "e.g. TENTS SALE & RENTAL",
    }),
    defineField({
      name: "mainHeadingGradient",
      title: "Main Heading (Gradient Gold Text)",
      type: "string",
      description: "e.g. FOR MAJOR EVENTS",
    }),
    defineField({
      name: "description",
      title: "Paragraph Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
    }),
    defineField({
      name: "primaryButtonUrl",
      title: "Primary Button Link",
      type: "string",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
    }),
    defineField({
      name: "secondaryButtonUrl",
      title: "Secondary Button Link",
      type: "string",
    }),
    defineField({
      name: "videoUrl",
      title: "Background Video WebM URL",
      type: "url",
    }),
    defineField({
      name: "posterImage",
      title: "Fallback Video Poster",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "mainHeadingWhite",
      subtitle: "subHeading",
    },
  },
});

// 2. النسخة العربية
export const homeHeroAr = defineType({
  name: "homeHeroAr",
  title: "الهيرو الرئيسي (عربي)",
  type: "document",
  fields: [
    defineField({
      name: "topBadge",
      title: "نص الشريط العلوي (Badge)",
      type: "string",
      description: "مثال: تأسس عام 1997 • رواد تصنيع وتوريد الخيام في الإمارات",
    }),
    defineField({
      name: "subHeading",
      title: "العنوان التمهيدي الذهبي",
      type: "string",
      description: "مثال: حلول هندسية للمشاريع الكبرى والفعاليات العالمية",
    }),
    defineField({
      name: "mainHeadingWhite",
      title: "العنوان الرئيسي (نص أبيض)",
      type: "string",
      description: "مثال: تصنيع وتأجير الخيام",
    }),
    defineField({
      name: "mainHeadingGradient",
      title: "العنوان الرئيسي الملون (Gradient)",
      type: "string",
      description: "مثال: لكبرى الفعاليات والمشاريع",
    }),
    defineField({
      name: "description",
      title: "نص الفقرة التعريفية",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "primaryButtonText",
      title: "نص الزر الأول",
      type: "string",
      description: "مثال: طلب عرض سعر فوري",
    }),
    defineField({
      name: "primaryButtonUrl",
      title: "رابط الزر الأول",
      type: "string",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "نص الزر الثاني",
      type: "string",
      description: "مثال: استكشف المشاريع",
    }),
    defineField({
      name: "secondaryButtonUrl",
      title: "رابط الزر الثاني",
      type: "string",
    }),
    defineField({
      name: "videoUrl",
      title: "رابط فيديو الخلفية (WebM)",
      type: "url",
    }),
    defineField({
      name: "posterImage",
      title: "صورة بوستر الفيديو الاحتياطية",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "mainHeadingWhite",
      subtitle: "subHeading",
    },
  },
});
"use client";

import Link from "next/link";
import { MapPin, Mail, ArrowUpLeft, MessageCircle } from "lucide-react";

export default function FooterAr() {
  const quickLinks = [
    { name: "الرئيسية", href: "/ar" },
    { name: "من نحن", href: "/ar/about" },
    { name: "المنتجات", href: "/ar/products" },
    { name: "الحلول والخدمات", href: "/ar/solutions" },
    { name: "المشاريع", href: "/ar/projects" },
    { name: "الأخبار والمقالات", href: "/ar/news" },
    { name: "تواصل معنا", href: "/ar/contact" },
  ];

  const featuredSolutions = [
    { name: "تأجير وتوريد الخيام", href: "/ar/news/tent-rental-guide-uae" },
    { name: "خيام الأعراس الملكية", href: "/ar/solutions/wedding-tent" },
    { name: "صالات المعارض والقمم", href: "/ar/solutions/exhibition-tent" },
    { name: "القباب والملاعب الرياضية", href: "/ar/solutions/sports-tent" },
    { name: "المستودعات والخيام الصناعية", href: "/ar/solutions/warehouse-tent" },
    { name: "هناجر الطائرات", href: "/ar/solutions/aircraft-hangar-tent" },
    { name: "خيام الضيافة الرمضانية", href: "/ar/solutions/ramadan-tent" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/baitalnokhada/",
      svg: (
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/baitalnokhada/",
      svg: (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/baitalnokhada/",
      svg: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@baitalnokhada",
      svg: (
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@BAITALNOKHADA",
      svg: (
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      ),
    },
    {
      name: "X (Twitter)",
      href: "https://twitter.com/bait_nokhada",
      svg: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      ),
    },
    {
      name: "Pinterest",
      href: "https://www.pinterest.com/baitalnokhada1/",
      svg: (
        <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.98-.13-2.49.03-3.56.14-.98.92-3.9.92-3.9s-.23-.47-.23-1.17c0-1.1.64-1.92 1.43-1.92.68 0 1 .5 1 1.11 0 .68-.43 1.7-.66 2.65-.19.79.39 1.44 1.17 1.44 1.4 0 2.48-1.48 2.48-3.62 0-1.89-1.36-3.21-3.3-3.21-2.41 0-3.83 1.81-3.83 3.68 0 .73.28 1.51.63 1.93.07.08.08.16.06.25-.07.28-.22.88-.25 1-.04.16-.13.2-.3.12-1.11-.52-1.81-2.14-1.81-3.45 0-2.81 2.04-5.39 5.88-5.39 3.09 0 5.49 2.2 5.49 5.14 0 3.07-1.93 5.54-4.62 5.54-.9 0-1.75-.47-2.04-1.02l-.56 2.11c-.2.78-.75 1.75-1.11 2.34A12 12 0 1 0 12 0z" />
      ),
    },
    {
      name: "Behance",
      href: "https://www.behance.net/baitalnokhada",
      svg: (
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.859 0-5.356-2.879-5.356-5.886 0-3.447 2.01-6.114 5.378-6.114 3.738 0 5.002 2.766 4.704 6.275h-7.794c.05 1.636.953 2.925 2.827 2.925 1.42 0 2.37-.775 2.736-1.52l2.231 1.32zm-6.994-4.8h5.361c-.04-1.332-.733-2.52-2.457-2.52-1.748 0-2.617 1.156-2.904 2.52zm-11.732 4.8h-5v-14h5.688c3.279 0 4.78 1.472 4.78 3.518 0 1.267-.624 2.45-1.988 2.936 1.83.476 2.49 1.942 2.49 3.558 0 2.417-1.892 3.988-5.97 3.988zm-2.52-8.358h2.648c1.378 0 2.215-.544 2.215-1.637 0-1.055-.776-1.583-2.124-1.583h-2.739v3.22zm0 5.878h2.898c1.554 0 2.525-.658 2.525-1.879 0-1.208-.949-1.879-2.525-1.879h-2.898v3.758z" />
      ),
    },
  ];
  return (
    <footer className="bg-[#070B14] text-slate-300 border-t border-white/10 pt-16 pb-12 px-6 text-right" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

        {/* العمود الرابع: معلومات الشركة والنبذة */}
        <div className="space-y-4">
          <Link href="/ar" className="flex items-center gap-1.5 group">
            <span className="font-black text-white font-heading tracking-tight drop-shadow-md group-hover:text-[#D4AF37] transition-all duration-300 leading-none text-lg sm:text-xl md:text-2xl">
              بيت
            </span>
            <span className="text-[#D4AF37] font-black tracking-tight drop-shadow transition-all duration-300 leading-none text-lg sm:text-xl md:text-2xl">
              النوخذة
            </span>
          </Link>
          <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
            الرواد في تصنيع وتركيب الهياكل المعمارية واسعة البحور، خيام الأعراس الفاخرة، والهياكل النسيجية المعتمدة في الإمارات، السعودية، والأسواق العالمية.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-slate-300 hover:text-[#070B14] flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label={social.name}
                title={social.name}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  {social.svg}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* العمود الثالث: روابط سريعة */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">روابط سريعة</h3>
          <ul className="space-y-2 text-xs">
            {quickLinks.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="hover:text-[#D4AF37] transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثاني: حلول مميزة */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">أبرز الحلول والخدمات</h3>
          <ul className="space-y-2 text-xs">
            {featuredSolutions.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="hover:text-[#D4AF37] transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>



        {/* العمود الأول: المقر الرئيسي */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            المقر الرئيسي
          </h3>
          <ul className="space-y-3 text-xs text-slate-300">
            {/* 1. العنوان */}
            <a
              href="https://www.google.com/maps/place/%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D9%86%D9%88%D8%AE%D8%B0%D8%A9+-+BAITALNOKHADA+TENTS+FACTORY+-HEAD+OFFICE+DUBAI%E2%80%AD/@24.934106,55.065001,10z/data=!4m6!3m5!1s0x3e5f0da58ab6364d:0xb668e74c8c5b934b!8m2!3d24.9341063!4d55.065001!16s%2Fg%2F11k3_kdvx5?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3.5 pt-1 hover:text-[#D4AF37] transition group cursor-pointer"
            >
              <div className="p-2 rounded-xl bg-white/5 mt-0.5 group-hover:bg-[#D4AF37]/20 transition shrink-0">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span className="text-xs text-slate-300 leading-relaxed group-hover:text-[#D4AF37] transition-colors">
                قطعة رقم TP 010102 - تكنوبارك - ميناء جبل علي - مجمع الصناعات الوطنية - دبي، الإمارات
              </span>
            </a>

            {/* 2. رقم الهاتف */}
            <a
              href="//wa.me/97143444091"
              className="flex items-center gap-3.5 hover:text-[#D4AF37] transition group"
            >
              <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#D4AF37]/20 transition shrink-0">
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span dir="ltr" className="text-xs text-slate-300 group-hover:text-[#D4AF37] transition-colors">
                +971 4 344 4091
              </span>
            </a>

            {/* 3. البريد الإلكتروني */}
            <a
              href="mailto:info@baitalnokhada.com"
              className="flex items-center gap-3.5 hover:text-[#D4AF37] transition group truncate"
            >
              <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#D4AF37]/20 transition shrink-0">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span className="text-xs text-slate-300 truncate group-hover:text-[#D4AF37] transition-colors">
                info@baitalnokhada.com
              </span>
            </a>
          </ul>
          <div className="pt-2">
            <Link
              href="/ar/contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] hover:text-white transition-colors"
            >
              <span>طلب عرض سعر واستشارة</span>
              <ArrowUpLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>



      </div>

      {/* حقوق النشر السفلية */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div className="flex gap-6">
          <Link href="/ar/terms" className="hover:text-white transition-colors">شروط الاستخدام</Link>
          <Link href="/ar/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
        </div>
        <p>© 2026 بيت النوخذة للخيام. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
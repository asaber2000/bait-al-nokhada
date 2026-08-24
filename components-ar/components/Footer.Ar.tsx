"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpLeft } from "lucide-react";

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
    { name: "Facebook", href: "https://www.facebook.com/baitalnokhada/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/baitalnokhada/" },
    { name: "Instagram", href: "https://www.instagram.com/baitalnokhada/" },
    { name: "TikTok", href: "https://www.tiktok.com/@baitalnokhada" },
    { name: "YouTube", href: "https://www.youtube.com/@BAITALNOKHADA" },
    { name: "X (Twitter)", href: "https://twitter.com/bait_nokhada" },
    { name: "Pinterest", href: "https://www.pinterest.com/baitalnokhada1/" },
    { name: "Behance", href: "https://www.behance.net/baitalnokhada" },
  ];

  return (
    <footer className="bg-[#070B14] text-slate-300 border-t border-white/10 pt-16 pb-12 px-6 text-right" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
        
        {/* العمود الأول: المقر الرئيسي */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">المقر الرئيسي</h3>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>مبنى رقم 5970362، تكنوبارك، ICAD-1، أبوظبي، الإمارات العربية المتحدة</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span dir="ltr">+971 2 554 5585</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>info@baitalnokhada.com</span>
            </li>
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

        {/* العمود الرابع: معلومات الشركة والنبذة */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-black tracking-wider text-white font-heading">بيت النوخذة</h2>
            <p className="text-[10px] text-[#D4AF37] tracking-widest uppercase font-semibold">للخيام والهياكل النسيجية منذ 1997</p>
          </div>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            الرواد في تصنيع وتركيب الهياكل المعمارية واسعة البحور، خيام الأعراس الفاخرة، والهياكل النسيجية المعتمدة في الإمارات، السعودية، والأسواق العالمية.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#D4AF37] hover:text-[#070B14] text-slate-300 flex items-center justify-center text-xs font-bold transition-all border border-white/10"
                title={social.name}
              >
                {social.name[0]}
              </a>
            ))}
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
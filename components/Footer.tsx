"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
    { name: "Projects", href: "/projects" },
    { name: "News & Media", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const featuredSolutions = [
    { name: "Tent Rental & Leasing", href: "/news/tent-rental-guide-uae" },
    { name: "Royal Wedding Tents", href: "/solutions/wedding-tent" },
    { name: "Exhibition & Event Arenas", href: "/solutions/exhibition-tent" },
    { name: "Sports & Stadium Domes", href: "/solutions/sports-tent" },
    { name: "Warehouse & Industrial Tents", href: "/solutions/warehouse-tent" },
    { name: "Aircraft Hangar Tents", href: "/solutions/aircraft-hangar-tent" },
    { name: "Ramadan Hospitality Tents", href: "/solutions/ramadan-tent" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/baitalnokhada/",
      svg: (
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/baitalnokhada/",
      svg: (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/baitalnokhada/",
      svg: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@baitalnokhada",
      svg: (
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@BAITALNOKHADA",
      svg: (
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      ),
    },
    {
      name: "X (Twitter)",
      href: "https://twitter.com/bait_nokhada",
      svg: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      ),
    },
    {
      name: "Pinterest",
      href: "https://www.pinterest.com/baitalnokhada1/",
      svg: (
        <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.98-.13-2.49.03-3.56.14-.98.92-3.9.92-3.9s-.23-.47-.23-1.17c0-1.1.64-1.92 1.43-1.92.68 0 1 .5 1 1.11 0 .68-.43 1.7-.66 2.65-.19.79.39 1.44 1.17 1.44 1.4 0 2.48-1.48 2.48-3.62 0-1.89-1.36-3.21-3.3-3.21-2.41 0-3.83 1.81-3.83 3.68 0 .73.28 1.51.63 1.93.07.08.08.16.06.25-.07.28-.22.88-.25 1-.04.16-.13.2-.3.12-1.11-.52-1.81-2.14-1.81-3.45 0-2.81 2.04-5.39 5.88-5.39 3.09 0 5.49 2.2 5.49 5.14 0 3.07-1.93 5.54-4.62 5.54-.9 0-1.75-.47-2.04-1.02l-.56 2.11c-.2.78-.75 1.75-1.11 2.34A12 12 0 1 0 12 0z"/>
      ),
    },
    {
      name: "Behance",
      href: "https://www.behance.net/baitalnokhada",
      svg: (
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.859 0-5.356-2.879-5.356-5.886 0-3.447 2.01-6.114 5.378-6.114 3.738 0 5.002 2.766 4.704 6.275h-7.794c.05 1.636.953 2.925 2.827 2.925 1.42 0 2.37-.775 2.736-1.52l2.231 1.32zm-6.994-4.8h5.361c-.04-1.332-.733-2.52-2.457-2.52-1.748 0-2.617 1.156-2.904 2.52zm-11.732 4.8h-5v-14h5.688c3.279 0 4.78 1.472 4.78 3.518 0 1.267-.624 2.45-1.988 2.936 1.83.476 2.49 1.942 2.49 3.558 0 2.417-1.892 3.988-5.97 3.988zm-2.52-8.358h2.648c1.378 0 2.215-.544 2.215-1.637 0-1.055-.776-1.583-2.124-1.583h-2.739v3.22zm0 5.878h2.898c1.554 0 2.525-.658 2.525-1.879 0-1.208-.949-1.879-2.525-1.879h-2.898v3.758z"/>
      ),
    },
  ];

  return (
    <footer className="bg-[#070B14] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Brand Column (4 Cols) */}
        <div className="lg:col-span-4 space-y-5">
          <div>
            <h3 className="text-xl font-black tracking-wider text-white">BAIT AL NOKHADA</h3>
            <p className="text-[10px] tracking-[0.25em] text-[#D4AF37] font-bold uppercase mt-0.5">
              Tents & Fabric Structures Since 1997
            </p>
          </div>

          <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
            Pioneers in high-span modular marquees, luxury wedding pavilions, and certified architectural tensile structures across UAE, KSA, and global markets.
          </p>

          {/* Social Links (8 Channels) */}
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

        {/* Quick Links (2 Cols) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="hover:text-[#D4AF37] transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Solutions (3 Cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Featured Solutions</h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            {featuredSolutions.map((sol, idx) => (
              <li key={idx}>
                <Link href={sol.href} className="hover:text-[#D4AF37] transition-colors">
                  {sol.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Headquarters (3 Cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Headquarters</h4>
          <ul className="space-y-3 text-xs text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>Land No. 5970362, Technopark, ICAD-1, Abu Dhabi, UAE</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>+971 2 554 5585</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>info@baitalnokhada.com</span>
            </li>
          </ul>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors"
            >
              <span>Request Quotation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <p>© 2026 Bait Al Nokhada Tents & Fabric Structures. All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/contact" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
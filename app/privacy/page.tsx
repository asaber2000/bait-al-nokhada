import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Bait Al Nokhada Tents & Fabric Structures",
  description:
    "Learn how Bait Al Nokhada Tents & Fabric Structures LLC collects, uses, and protects your personal information when you browse our website or request a quotation.",
  alternates: {
    canonical: "https://baitalnokhada.com/privacy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
      <Navbar />

      <section className="pt-32 sm:pt-36 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 bg-[#FDFCF7]">
        <div className="max-w-4xl mx-auto space-y-4 text-left">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal & Compliance</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] font-heading uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-mono">
            Last Updated: November 2026 • Bait Al Nokhada Tents & Fabric Structures LLC
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-8 text-left leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">1. Introduction</h2>
            <p className="text-sm sm:text-base text-slate-600">
              Bait Al Nokhada Tents & Fabric Structures LLC (“Bait Al Nokhada”, “we”, “our”, or “us”) respects your privacy and is committed to protecting the personal data you share with us through <strong>baitalnokhada.com</strong>. This Privacy Policy explains how we collect, use, store, and safeguard your information in accordance with applicable UAE data protection regulations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">2. Information We Collect</h2>
            <p className="text-sm sm:text-base text-slate-600">
              When you browse our website, submit a quotation request, or contact our engineering and sales teams, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-600">
              <li><strong>Contact & Business Details:</strong> Full name, company or organization name, email address, phone/WhatsApp number, and project location.</li>
              <li><strong>Project Specifications:</strong> Tent dimensions, structural requirements, rental or purchase timelines, and event or industrial site details submitted via our inquiry forms.</li>
              <li><strong>Technical & Analytics Data:</strong> IP address, browser type, device information, referring URLs, and page interaction metrics collected via cookies and analytics tools.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-600">
              <li>Prepare accurate technical proposals, engineering layouts, and commercial quotations.</li>
              <li>Coordinate site inspections, manufacturing schedules, delivery, and installation across the UAE, KSA, and GCC.</li>
              <li>Respond to customer support, after-sales, and maintenance inquiries.</li>
              <li>Improve website performance, user experience, and relevance of our digital communications.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">4. Cookies & Analytics</h2>
            <p className="text-sm sm:text-base text-slate-600">
              We use essential and analytical cookies (such as Google Analytics and advertising conversion tags) to understand visitor traffic and measure campaign effectiveness. You can control or disable cookies at any time through your browser settings.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">5. Data Sharing & Security</h2>
            <p className="text-sm sm:text-base text-slate-600">
              We do not sell, rent, or trade your personal information to third parties. Data may only be shared with trusted logistics, engineering, or cloud infrastructure providers strictly necessary to fulfill your project request or comply with UAE legal obligations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">6. Your Rights & Contact Information</h2>
            <p className="text-sm sm:text-base text-slate-600">
              You have the right to request access to, correction of, or deletion of your personal records held by us. For any privacy-related requests, please contact us:
            </p>
            <div className="p-5 rounded-2xl bg-[#FDFCF7] border border-slate-200/80 space-y-2.5 text-sm text-slate-700">
              <p className="font-bold text-[#0B1220]">Bait Al Nokhada Tents & Fabric Structures LLC</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#df9d17] shrink-0" /> Land No. TP 010102 - Technopark - Mina Jebel Ali - National Industries Park - Dubai, UAE</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#df9d17] shrink-0" /> +971 4 344 4091</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#df9d17] shrink-0" /> info@baitalnokhada.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
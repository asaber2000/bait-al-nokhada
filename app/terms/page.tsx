import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Bait Al Nokhada Tents & Fabric Structures",
  description:
    "Review the Terms of Service governing the use of baitalnokhada.com, quotation requests, intellectual property, and structural engineering services.",
  alternates: {
    canonical: "https://baitalnokhada.com/terms/",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
      <Navbar />

      <section className="pt-32 sm:pt-36 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 bg-[#FDFCF7]">
        <div className="max-w-4xl mx-auto space-y-4 text-left">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30">
            <FileText className="w-3.5 h-3.5" />
            <span>Terms & Conditions</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] font-heading uppercase tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-mono">
            Last Updated: November 2026 • Bait Al Nokhada Tents & Fabric Structures LLC
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-8 text-left leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">1. Acceptance of Terms</h2>
            <p className="text-sm sm:text-base text-slate-600">
              By accessing or using <strong>baitalnokhada.com</strong>, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using our website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">2. Quotations, Engineering & Commercial Contracts</h2>
            <p className="text-sm sm:text-base text-slate-600">
              Product specifications, span dimensions, wind-load ratings, and project showcases displayed on this website are provided for general technical reference. Formal pricing, delivery timelines, installation scopes, and rental or manufacturing warranties are governed exclusively by signed commercial contracts and official quotations issued by Bait Al Nokhada Tents & Fabric Structures LLC.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">3. Intellectual Property Rights</h2>
            <p className="text-sm sm:text-base text-slate-600">
              All content on this website—including architectural renders, project photography, engineering diagrams, technical guides, logos, and trademarks—is the exclusive property of Bait Al Nokhada Tents & Fabric Structures LLC and may not be reproduced, distributed, or used for commercial purposes without prior written consent.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">4. Limitation of Liability</h2>
            <p className="text-sm sm:text-base text-slate-600">
              While we strive to ensure all technical information on our website is accurate and up to date, Bait Al Nokhada makes no warranties regarding uninterrupted website availability and shall not be liable for any indirect or consequential damages arising from reliance on general website content prior to formal engineering consultation.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">5. Governing Law</h2>
            <p className="text-sm sm:text-base text-slate-600">
              These Terms of Service shall be governed by and construed in accordance with the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
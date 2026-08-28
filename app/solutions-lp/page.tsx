"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Headphones, PhoneCall } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function SolutionsLandingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#070B14] text-white relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#D4AF37]/8 blur-[200px] rounded-full pointer-events-none" />

      {/* Top Bar / Simple Header */}
      <header className="w-full px-12 sm:px-16 lg:px-32 py-8 flex items-center justify-between border-b border-white/10 relative z-10 backdrop-blur-md">
        <div className="text-xl font-black tracking-wider text-white font-heading">
          BAIT AL NOKHADA <span className="text-[#D4AF37] text-xs block tracking-[0.3em]">TENTS & FABRIC STRUCTURES</span>
        </div>
        <a
          href="#inquiry"
          className="px-6 py-3 rounded-xl bg-[#D4AF37] text-[#070B14] font-bold text-xs uppercase tracking-widest hover:bg-[#F3E5AB] transition-all shadow-xl"
        >
          Request Consultation
        </a>
      </header>

      {/* Hero Section */}
      <section className="w-full px-12 sm:px-16 lg:px-32 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20 shadow-inner">
              <Zap className="w-3.5 h-3.5" /> Enterprise Turnkey Solutions
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight font-heading">
              High-Performance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
                Tensile Structures
              </span> & Event Venues
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              Engineered to withstand extreme UAE weather conditions. Delivering certified high-span pavilions, royal hospitality marquees, and rapid-deployment industrial solutions for government and mega-enterprises.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" /> German DIN Certified
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" /> 48-72h Rapid Setup
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" /> Full HVAC Integration
              </div>
            </div>
          </div>

          {/* Inquiry Form Box */}
          <div id="inquiry" className="lg:col-span-5 bg-[#0D1527] border border-white/15 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative">
            <div className="absolute -top-4 right-8 bg-[#D4AF37] text-[#070B14] text-xs font-black uppercase px-4 py-1 rounded-full tracking-wider shadow-lg">
              Priority Booking
            </div>

            <h3 className="text-2xl font-black mb-2 font-heading">Get Instant Inquiry</h3>
            <p className="text-xs text-slate-400 mb-6">Fill out the form below and our engineering team will contact you within 2 hours.</p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold">Inquiry Received Successfully!</h4>
                <p className="text-sm text-slate-300">Thank you. One of our project consultants will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Company / Organization</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Company name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    placeholder="+971 XX XXX XXXX" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Required Solution</label>
                  <select className="w-full bg-[#070B14] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors">
                    <option>Mega Exhibition Pavilions</option>
                    <option>VIP Hospitality & Royal Majlis</option>
                    <option>Industrial Warehouses & Shades</option>
                    <option>Custom Tensile Structure</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black uppercase tracking-widest text-xs hover:opacity-95 transition-opacity shadow-xl cursor-pointer"
                >
                  Submit Inquiry Now
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full px-12 sm:px-16 lg:px-32 py-20 border-t border-white/10 bg-[#0B1120]/50 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">Why Choose Bait Al Nokhada</span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading">Engineered For Excellence & Durability</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#0D1527] border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading">Certified Safety Standards</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Built to comply with strict international guidelines, featuring high wind-load ratings and fire-retardant membranes.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0D1527] border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading">Rapid Deployment</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Our expert engineers deliver fully operational pavilions and structures in record time without compromising quality.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0D1527] border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading">Turnkey Support</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              From climate control HVAC systems and interior fit-outs to dismantling, we handle the entire project lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-12 sm:px-16 lg:px-32 py-10 border-t border-white/10 text-center text-xs text-slate-500 relative z-10">
        © 2026 Bait Al Nokhada Tents & Fabric Structures. All Rights Reserved.
      </footer>

    </main>
  );
}
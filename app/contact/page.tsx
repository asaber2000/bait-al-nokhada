"use client";

import { useState } from "react";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2 
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const branches = [
  {
    city: "Abu Dhabi - Headquarters & Factory",
    address: "Plot 5970362, Technopark, ICAD-1, Musaffah, Abu Dhabi, UAE",
    phone: "+971 2 554 5585",
    email: "info@baitalnokhada.com",
    timing: "Sun – Thu: 8:00 AM – 6:00 PM",
  },
  {
    city: "Dubai Regional Operations Hub",
    address: "Al Quoz Industrial Area / Sheikh Zayed Road, Dubai, UAE",
    phone: "+971 4 344 4912",
    email: "dubai@baitalnokhada.com",
    timing: "Sun – Thu: 8:00 AM – 6:00 PM",
  },
  {
    city: "Saudi Arabia Division (KSA)",
    address: "Riyadh Industrial Hub & Logistics Zone, Saudi Arabia",
    phone: "+966 11 000 0000",
    email: "ksa@baitalnokhada.com",
    timing: "Sun – Thu: 8:30 AM – 5:30 PM",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-44 pb-20 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Engineering Consultation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-heading">
            Connect With Our <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              Structural Engineers
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Request an instant technical quotation, schedule an on-site feasibility survey, or inquire about rental and manufacturing timelines.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Branch Info */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Quote & RFP Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0D1527]/80 border border-white/10 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white font-heading">Proposal Request Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto font-light">
                  Our technical engineering team is reviewing your requirements and will contact you with a preliminary specification & pricing draft within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black text-white font-heading">Request Technical Proposal</h2>
                  <p className="text-xs text-slate-400 mt-1">Please fill in your structural project details.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Ahmed Saber"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Company / Entity Name</label>
                    <input
                      type="text"
                      placeholder="Government / Corporate Entity"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="name@organization.ae"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Contact Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+971 50 000 0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Structure Service Type</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors cursor-pointer">
                      <option>Temporary Event Rental</option>
                      <option>Permanent Purchase & Fabrication</option>
                      <option>Turnkey Industrial Leasing</option>
                      <option>Custom Architectural Shading</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Target Product</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors cursor-pointer">
                      <option>Royal Wedding Tents</option>
                      <option>Exhibition & Summit Arena</option>
                      <option>Warehouse & Logistics Tent</option>
                      <option>Sports Dome / Stadium Cover</option>
                      <option>Ramadan Heritage Majlis</option>
                      <option>Aircraft Hangar</option>
                      <option>Tensile Membrane Shade</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Project Dimensions & Site Specifics</label>
                  <textarea
                    rows={4}
                    placeholder="Specify estimated dimensions (e.g. 30m x 60m), project city/location, required installation dates, or customized flooring/AC needs..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.01] shadow-xl shadow-[#D4AF37]/20 transition-all cursor-pointer"
                >
                  <span>Submit RFP for Technical Review</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Regional Hubs Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Direct Contacts
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">
                Factory & Regional Offices
              </h2>
            </div>

            <div className="space-y-4">
              {branches.map((branch, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0D1527]/50 border border-white/10 space-y-3 hover:border-[#D4AF37]/30 transition-all"
                >
                  <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>{branch.city}</span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <a href={`tel:${branch.phone}`} className="hover:text-[#D4AF37] transition-colors">
                        {branch.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <a href={`mailto:${branch.email}`} className="hover:text-[#D4AF37] transition-colors">
                        {branch.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5 text-slate-400 pt-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{branch.timing}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
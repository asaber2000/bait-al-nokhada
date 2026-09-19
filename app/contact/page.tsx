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
  Building2,
  MessageCircle,
  ExternalLink,
  Navigation
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const branches = [
  {
    city: "Dubai - Headquarters & Factory",
    address: "National Industries Park / Technopark - Mina Jebel Ali, Dubai, UAE",
    phone: "+971 55885 0631",
    whatsapp: "+971 43444091",
    email: "dubai@baitalnokhada.com",
    timing: "Sun – Thu: 8:00 AM – 6:00 PM",
    mapUrl: "https://www.google.com/maps/place/%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D9%86%D9%88%D8%AE%D8%B0%D8%A9+-+BAITALNOKHADA+TENTS+FACTORY+-HEAD+OFFICE+DUBAI%E2%80%AD/@24.934106,55.065001,10z/data=!4m6!3m5!1s0x3e5f0da58ab6364d:0xb668e74c8c5b934b!8m2!3d24.9341063!4d55.065001!16s%2Fg%2F11k3_kdvx5?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d463096.34941468964!2d55.065001!3d24.934106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0da58ab6364d%3A0xb668e74c8c5b934b!2z2KjZitiqINin2YTZhtmI2K7YsNipIC0gQkFJVEFMTk9LSEFEQSBURU5UUyBGQUNUT1JZIC1IRUFEIE9GRklDRSBEVUJBSQ!5e0!3m2!1sen!2sae!4v1789797127922!5m2!1sen!2sae",
  },
  {
    city: "Abu Dhabi",
    address: "Musaffah - ICAD I, Abu Dhabi, UAE",
    phone: "+971 55497 2465",
    whatsapp: "+971 43444091",
    email: "info@baitalnokhada.com",
    timing: "Sun – Thu: 8:00 AM – 6:00 PM",
    mapUrl: "https://www.google.com/maps/place/Bait+Al+Nokhada+Tents+and+Fabric+Shade+Factory+LLC/@24.329919,54.506679,10z/data=!4m6!3m5!1s0x3e5e3f5897d3f4bd:0x85a564def64cac9!8m2!3d24.329919!4d54.506679!16s%2Fg%2F1pp2vgtxq?hl=en&entry=tts&shorturl=1",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465340.88139722793!2d54.506679!3d24.329919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e3f5897d3f4bd%3A0x85a564def64cac9!2sBait%20Al%20Nokhada%20Tents%20and%20Fabric%20Shade%20Factory%20LLC!5e0!3m2!1sen!2sae!4v1789797480170!5m2!1sen!2sae",
  },

  {
    city: "Saudi Arabia (KSA)",
    address: "Office, No. 32, Abdalrahman Al Rosis Center, Olaya St, Riyadh 12211, Saudi Arabia",
    phone: "+966546917670",
    whatsapp: "+971 43444091",
    email: "ksa@baitalnokhada.com",
    timing: "Sun – Thu: 8:30 AM – 5:30 PM",
    mapUrl: "https://www.google.com/maps/place/Bait+Al+Nokhada+Tents+And+Fabric+Shades+L.L.C/@24.682873,46.690347,10z/data=!4m6!3m5!1s0x3e2f03a6ffaa6281:0xfabe7d0cdc115b44!8m2!3d24.6828729!4d46.6903469!16s%2Fg%2F11tnjxbp2l?ll=24.682873,46.690347&z=10&t=m&hl=en&gl=US&mapclient=embed&cid=18068016249242213188&entry=tts&shorturl=1",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d464035.9394153128!2d46.690347!3d24.682873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a6ffaa6281%3A0xfabe7d0cdc115b44!2zQmFpdCBBbCBOb2toYWRhIFRlbnRzIEwuTC5DINmF2LXZhti5INio2YrYqiDYp9mE2YbZiNiu2LDYqSDZhNmE2K7ZitmFIC0g2YHYsdi5INin2YTYsdmK2KfYtg!5e0!3m2!1sen!2sus!4v1789797578373!5m2!1sen!2sus",
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
                    
                    {branch.whatsapp && (
                      <div className="flex items-center gap-2.5">
                        <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <a 
                          href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-[#D4AF37] transition-colors"
                        >
                          {branch.whatsapp}
                        </a>
                      </div>
                    )}


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

      {/* 3. Interactive Regional Branch Maps Grid (السكشن المضاف) */}
      <section className="py-16 pb-28 px-6 max-w-7xl mx-auto border-t border-white/10 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
            <Navigation className="w-3.5 h-3.5" />
            <span>Locations & On-Site Facilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Visit Our Factories & Regional Centers
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Navigate directly to our main manufacturing complexes, regional hubs, and client lounges via Google Maps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden bg-[#0D1527]/90 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-2xl group"
            >
              {/* Google Map Embed iFrame */}
              <div className="relative w-full h-64 bg-black/40">
                <iframe
                  src={branch.embedUrl}
                  title={`Map for ${branch.city}`}
                  loading="lazy"
                  className="w-full h-full border-0 grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>

              {/* Card Meta & External Map Link */}
              <div className="p-6 space-y-4 flex flex-col justify-between grow">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{branch.city}</span>
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {branch.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#070B14] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 hover:border-[#D4AF37] transition-all shadow-md group/btn"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

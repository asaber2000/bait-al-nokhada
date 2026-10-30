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
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="site-container max-w-7xl mx-auto w-full text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Engineering Consultation</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading uppercase">
            Connect With Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              Structural Engineers
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Request an instant technical quotation, schedule an on-site feasibility survey, or inquire about rental and manufacturing timelines.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Branch Info */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FDFCF7]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Quote & RFP Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-xs">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#df9d17]/10 text-[#df9d17] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#0B1220] font-heading">Proposal Request Received</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto font-normal">
                  Our technical engineering team is reviewing your requirements and will contact you with a preliminary specification & pricing draft within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-black hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black text-[#0B1220] font-heading">Request Technical Proposal</h2>
                  <p className="text-xs text-slate-500 mt-1">Please fill in your structural project details.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Ahmed Saber"
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFCF7] border border-slate-200 focus:border-[#df9d17] text-[#0B1220] text-sm outline-none transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Company / Entity Name</label>
                    <input
                      type="text"
                      placeholder="Government / Corporate Entity"
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFCF7] border border-slate-200 focus:border-[#df9d17] text-[#0B1220] text-sm outline-none transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="name@organization.ae"
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFCF7] border border-slate-200 focus:border-[#df9d17] text-[#0B1220] text-sm outline-none transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Contact Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+971 50 000 0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFCF7] border border-slate-200 focus:border-[#df9d17] text-[#0B1220] text-sm outline-none transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Structure Service Type</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#FDFCF7] border border-slate-200 focus:border-[#df9d17] text-[#0B1220] text-sm outline-none transition-colors cursor-pointer">
                      <option>Temporary Event Rental</option>
                      <option>Permanent Purchase & Fabrication</option>
                      <option>Turnkey Industrial Leasing</option>
                      <option>Custom Architectural Shading</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Target Product</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#FDFCF7] border border-slate-200 focus:border-[#df9d17] text-[#0B1220] text-sm outline-none transition-colors cursor-pointer">
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
                  <label className="text-xs font-semibold text-slate-700">Project Dimensions & Site Specifics</label>
                  <textarea
                    rows={4}
                    placeholder="Specify estimated dimensions (e.g. 30m x 60m), project city/location, required installation dates, or customized flooring/AC needs..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFCF7] border border-slate-200 focus:border-[#df9d17] text-[#0B1220] text-sm outline-none transition-colors resize-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.01] shadow-md shadow-[#df9d17]/20 transition-all cursor-pointer"
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
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
                Direct Contacts
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1220] font-heading">
                Factory & Regional Offices
              </h2>
            </div>

            <div className="space-y-4">
              {branches.map((branch, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-3 hover:border-[#df9d17]/50 shadow-xs transition-all"
                >
                  <div className="flex items-center gap-2 text-[#df9d17] font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span className="text-[#0B1220] font-heading">{branch.city}</span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-3.5 h-3.5 text-[#df9d17] shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-3.5 h-3.5 text-[#df9d17] shrink-0" />
                      <a href={`tel:${branch.phone}`} className="hover:text-[#df9d17] font-medium transition-colors">
                        {branch.phone}
                      </a>
                    </div>

                    {branch.whatsapp && (
                      <div className="flex items-center gap-2.5">
                        <MessageCircle className="w-3.5 h-3.5 text-[#df9d17] shrink-0" />
                        <a
                          href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#df9d17] font-medium transition-colors"
                        >
                          {branch.whatsapp}
                        </a>
                      </div>
                    )}

                    <div className="flex items-center gap-2.5">
                      <Mail className="w-3.5 h-3.5 text-[#df9d17] shrink-0" />
                      <a href={`mailto:${branch.email}`} className="hover:text-[#df9d17] font-medium transition-colors">
                        {branch.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5 text-slate-500 pt-1 border-t border-slate-100">
                      <Clock className="w-3.5 h-3.5 text-[#df9d17] shrink-0" />
                      <span>{branch.timing}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Regional Branch Maps Grid */}
      <section className="py-16 sm:py-20 pb-20 sm:pb-28 border-t border-slate-200/60 bg-[#FDFCF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#df9d17]">
              <Navigation className="w-3.5 h-3.5" />
              <span>Locations & On-Site Facilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1220] font-heading">
              Visit Our Factories & Regional Centers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Navigate directly to our main manufacturing complexes, regional hubs, and client lounges via Google Maps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
            {branches.map((branch, idx) => (
              <div
                key={idx}
                className="w-full rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-[#df9d17]/50 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md group"
              >
                {/* ضبط خريطة جوجل بنسبة أبعاد مقيدة 16/10 لتمنع تمدد الكرت */}
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  <iframe
                    src={branch.embedUrl}
                    title={`Map for ${branch.city}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 pointer-events-auto"
                  />
                </div>

                {/* Card Meta & External Map Link */}
                <div className="p-6 space-y-4 flex flex-col justify-between grow">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#0B1220] group-hover:text-[#df9d17] transition-colors flex items-center gap-2 font-heading">
                      <Building2 className="w-4 h-4 text-[#df9d17] shrink-0" />
                      <span>{branch.city}</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {branch.address}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-[#df9d17] text-slate-800 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200 hover:border-[#df9d17] transition-all shadow-xs group/btn"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

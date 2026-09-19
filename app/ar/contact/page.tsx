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
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";

const branches = [
  {
    city: "مركز العمليات والمصانع - دبي",
    address: "مجمع الصناعات الوطنية / تكنوبارك - ميناء جبل علي، دبي، الإمارات",
    phone: "+971 55885 0631",
    whatsapp: "+971 43444091",
    email: "dubai@baitalnokhada.com",
    timing: "الأحد – الخميس: 8:00 صباحاً – 6:00 مساءً",
    mapUrl: "https://www.google.com/maps/place/%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D9%86%D9%88%D8%AE%D8%B0%D8%A9+-+BAITALNOKHADA+TENTS+FACTORY+-HEAD+OFFICE+DUBAI%E2%80%AD/@24.934106,55.065001,10z/data=!4m6!3m5!1s0x3e5f0da58ab6364d:0xb668e74c8c5b934b!8m2!3d24.9341063!4d55.065001!16s%2Fg%2F11k3_kdvx5?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d463096.34941468964!2d55.065001!3d24.934106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0da58ab6364d%3A0xb668e74c8c5b934b!2z2KjZitiqINin2YTZhtmI2K7YsNipIC0gQkFJVEFMTk9LSEFEQSBURU5UUyBGQUNUT1JZIC1IRUFEIE9GRklDRSBEVUJBSQ!5e0!3m2!1sen!2sae!4v1789797127922!5m2!1sen!2sae",
  },
  {
    city: "المقر الرئيسي - أبوظبي",
    address: "مصفح - ICAD I، أبوظبي، الإمارات العربية المتحدة",
    phone: "+971 55497 2465",
    whatsapp: "+971 43444091",
    email: "info@baitalnokhada.com",
    timing: "الأحد – الخميس: 8:00 صباحاً – 6:00 مساءً",
    mapUrl: "https://www.google.com/maps/place/Bait+Al+Nokhada+Tents+and+Fabric+Shade+Factory+LLC/@24.329919,54.506679,10z/data=!4m6!3m5!1s0x3e5e3f5897d3f4bd:0x85a564def64cac9!8m2!3d24.329919!4d54.506679!16s%2Fg%2F1pp2vgtxq?hl=en&entry=tts&shorturl=1",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465340.88139722793!2d54.506679!3d24.329919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e3f5897d3f4bd%3A0x85a564def64cac9!2sBait%20Al%20Nokhada%20Tents%20and%20Fabric%20Shade%20Factory%20LLC!5e0!3m2!1sen!2sae!4v1789797480170!5m2!1sen!2sae",
  },
  {
    city: "فرع المملكة العربية السعودية (KSA)",
    address: "مكتب 32، مركز عبد الرحمن الرويس، طريق العليا، الرياض 12211، السعودية",
    phone: "+966546917670",
    whatsapp: "+971 43444091",
    email: "ksa@baitalnokhada.com",
    timing: "الأحد – الخميس: 8:30 صباحاً – 5:30 مساءً",
    mapUrl: "https://www.google.com/maps/place/Bait+Al+Nokhada+Tents+And+Fabric+Shades+L.L.C/@24.682873,46.690347,10z/data=!4m6!3m5!1s0x3e2f03a6ffaa6281:0xfabe7d0cdc115b44!8m2!3d24.6828729!4d46.6903469!16s%2Fg%2F11tnjxbp2l?ll=24.682873,46.690347&z=10&t=m&hl=en&gl=US&mapclient=embed&cid=18068016249242213188&entry=tts&shorturl=1",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d464035.9394153128!2d46.690347!3d24.682873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a6ffaa6281%3A0xfabe7d0cdc115b44!2zQmFpdCBBbCBOb2toYWRhIFRlbnRzIEwuTC5DINmF2LXZhti5INio2YrYqiDYp9mE2YbZiNiu2LDYqSDZhNmE2K7ZitmFIC0g2YHYsdi5INin2YTYsdmK2KfYtg!5e0!3m2!1sen!2sus!4v1789797578373!5m2!1sen!2sus",
  },
];

export default function ArabicContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]" dir="rtl">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-44 pb-20 px-6 border-b border-white/10 overflow-hidden text-right">
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-175 h-87.5 bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>استشارات ودراسات هندسية تسليم مفتاح</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-heading">
            تواصل مباشرة مع <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              مهندسينا واستشاريي المشاريع
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            اطلب عرض أسعار هندسي فوري، أو حدد موعداً لمعاينة الموقع الإنشائي، أو استفسر عن جداول التصنيع والتأجير.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Branch Info */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-right">
          
          {/* Quote & RFP Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0D1527]/80 border border-white/10 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white font-heading">تم استلام طلب المشروع بنجاح</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto font-light">
                  يقوم فريقنا الهندسي بدراسة متطلباتكم وسيتواصل معكم بمسودة المواصفات والأسعار المبدئية خلال 24 ساعة.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white cursor-pointer"
                >
                  إرسال طلب آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black text-white font-heading">طلب دراسة فنية وعرض سعر</h2>
                  <p className="text-xs text-slate-400 mt-1">يرجى تعبئة تفاصيل مشروعك الإنشائي.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">الاسم الكامل *</label>
                    <input
                      required
                      type="text"
                      placeholder="أحمد صابر"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors text-right"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">اسم الشركة / الجهة</label>
                    <input
                      type="text"
                      placeholder="جهة حكومية / شركة خاصة"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors text-right"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">البريد الإلكتروني *</label>
                    <input
                      required
                      type="email"
                      placeholder="name@organization.ae"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors text-right"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">رقم التواصل / الواتساب *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+971 50 000 0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors text-right"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">نوع الخدمة الإنشائية</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors cursor-pointer text-right">
                      <option>تأجير خيام فعاليات ومناسبات مؤقتة</option>
                      <option>تصنيع وشراء دائم للمنشآت</option>
                      <option>تأجير تشغيلي طويل الأجل للمستودعات</option>
                      <option>مظلات شد إنشائي معمارية مخصصة</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">نوع المنتج المطلوب</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#070B14] border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors cursor-pointer text-right">
                      <option>خيام الأعراس والمناسبات الملكية</option>
                      <option>قاعات المعارض والقمم الدولية</option>
                      <option>مستودعات وخيام التخزين اللوجستي</option>
                      <option>القباب والملاعب الرياضية المغطاة</option>
                      <option>المجالس والخيام الرمضانية التراثية</option>
                      <option>هناجر الطائرات (TFS)</option>
                      <option>مظلات الشد الإنشائي</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">أبعاد وموقع ومواصفات المشروع</label>
                  <textarea
                    rows={4}
                    placeholder="حدد الأبعاد التقريبية (مثال: 30م × 60م)، المدينة، تاريخ التركيب المطلوب، واحتياجات التكييف أو الأرضيات الخاصة..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-sm outline-none transition-colors resize-none text-right"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.01] shadow-xl shadow-[#D4AF37]/20 transition-all cursor-pointer"
                >
                  <span>إرسال طلب الدراسة الفنية للمهندسين</span>
                  <Send className="w-4 h-4 rotate-180" />
                </button>
              </form>
            )}
          </div>

          {/* Regional Hubs Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                التواصل المباشر
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">
                المصانع والمكاتب الإقليمية
              </h2>
            </div>

            <div className="space-y-4">
              {branches.map((branch, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0D1527]/50 border border-white/10 space-y-3 hover:border-[#D4AF37]/30 transition-all text-right"
                >
                  <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-sm justify-start">
                    <Building2 className="w-4 h-4" />
                    <span>{branch.city}</span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-start gap-2.5 justify-start">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>

                    {/* اتصال هاتف */}
                    <div className="flex items-center gap-2.5 justify-start">
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <a 
                        href={`tel:${branch.phone.replace(/\s+/g, '')}`} 
                        className="hover:text-[#D4AF37] transition-colors"
                        dir="ltr"
                      >
                        {branch.phone}
                      </a>
                    </div>

                    {/* واتساب */}
                    {branch.whatsapp && (
                      <div className="flex items-center gap-2.5 justify-start">
                        <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <a 
                          href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-[#D4AF37] transition-colors"
                          dir="ltr"
                        >
                          {branch.whatsapp}
                        </a>
                      </div>
                    )}

                    <div className="flex items-center gap-2.5 justify-start">
                      <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <a href={`mailto:${branch.email}`} className="hover:text-[#D4AF37] transition-colors">
                        {branch.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5 text-slate-400 pt-1 justify-start">
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

      {/* Interactive Regional Branch Maps Grid (النسخة العربية) */}
      <section className="py-16 pb-28 px-6 max-w-7xl mx-auto border-t border-white/10 space-y-12 text-right">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
            <Navigation className="w-3.5 h-3.5" />
            <span>المواقع والمرافق الميدانية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            تفضل بزيارة مصانعنا ومراكزنا الإقليمية
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            يمكنك الوصول مباشرة إلى مجمعاتنا التصنيعية، ومكاتبنا الإقليمية، وصالات استقبال العملاء عبر خرائط جوجل.
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
                  title={`خريطة ${branch.city}`}
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
                    <span>فتح الموقع عبر خرائط جوجل</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:-translate-x-0.5 transition-transform" />
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
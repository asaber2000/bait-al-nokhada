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
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";

const branches = [
  {
    city: "المقر الرئيسي والمصانع - أبوظبي",
    address: "قطعة 5970362، تكنوبارك، مصفح ICAD-1، أبوظبي، الإمارات",
    phone: "+971 2 554 5585",
    email: "info@baitalnokhada.com",
    timing: "الأحد – الخميس: 8:00 صباحاً – 6:00 مساءً",
  },
  {
    city: "مركز العمليات الإقليمي - دبي",
    address: "منطقة القوز الصناعية / شارع الشيخ زايد، دبي، الإمارات",
    phone: "+971 4 344 4912",
    email: "dubai@baitalnokhada.com",
    timing: "الأحد – الخميس: 8:00 صباحاً – 6:00 مساءً",
  },
  {
    city: "فرع المملكة العربية السعودية (KSA)",
    address: "المنطقة اللوجستية والصناعية، الرياض، المملكة العربية السعودية",
    phone: "+966 11 000 0000",
    email: "ksa@baitalnokhada.com",
    timing: "الأحد – الخميس: 8:30 صباحاً – 5:30 مساءً",
  },
];

export default function ArabicContactPage() {
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
                  className="p-6 rounded-2xl bg-[#0D1527]/50 border border-white/10 space-y-3 hover:border-[#D4AF37]/30 transition-all"
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

                    <div className="flex items-center gap-2.5 justify-start">
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <a href={`tel:${branch.phone}`} className="hover:text-[#D4AF37] transition-colors dir-ltr">
                        {branch.phone}
                      </a>
                    </div>

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

      <Footer />
    </main>
  );
}
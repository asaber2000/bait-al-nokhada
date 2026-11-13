import type { Metadata } from "next";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "شروط الاستخدام | مصنع بيت النوخذة للخيام والمظلات",
  description:
    "اطلع على الشروط والأحكام المنظمة لاستخدام موقع مصنع بيت النوخذة للخيام والمظلات وطلبات عروض الأسعار والخدمات الهندسية.",
  alternates: {
    canonical: "https://baitalnokhada.com/ar/terms/",
  },
};

export default function ArabicTermsOfServicePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans text-right">
      <Navbar />

      <section className="pt-32 sm:pt-36 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 bg-[#FDFCF7]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30">
            <FileText className="w-3.5 h-3.5" />
            <span>الشروط والأحكام</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] font-heading">
            شروط الاستخدام
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            آخر تحديث: نوفمبر 2026 • مصنع بيت النوخذة للخيام والمظلات ذ.م.م
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-8 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">1. الموافقة على الشروط</h2>
            <p className="text-sm sm:text-base text-slate-600">
              بدخولك إلى موقع <strong>baitalnokhada.com</strong> واستخدامه، فإنك تقر بموافقتك على الالتزام بشروط الاستخدام الموضحة أدناه والقوانين المعمول بها.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">2. عروض الأسعار والعقود التجارية</h2>
            <p className="text-sm sm:text-base text-slate-600">
              تُعرض المواصفات الفنية والأبعاد الهندسية ونماذج المشاريع على الموقع لأغراض التعريف العام. وتخضع الأسعار النهائية، ومواعيد التسليم والتركيب، والضمانات الهندسية حصرياً للعقود الرسمية وعروض الأسعار المعتمدة الصادرة من مصنع بيت النوخذة للخيام والمظلات ذ.م.م.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">3. حقوق الملكية الفكرية</h2>
            <p className="text-sm sm:text-base text-slate-600">
              جميع المحتويات المنشورة على هذا الموقع—بما في ذلك التصاميم الهندسية، صور المشاريع المنفذة، النصوص التقنية، والشعارات التجارية—هي ملكية حصرية لمصنع بيت النوخذة للخيام والمظلات ذ.م.م، ولا يجوز نسخها أو إعادة نشرها لأغراض تجارية دون إذن خطي مسبق.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">4. حدود المسؤولية</h2>
            <p className="text-sm sm:text-base text-slate-600">
              نحرص على دقة وحداثة كافة المعلومات الهندسية المنشورة على الموقع، ومع ذلك لا يتحمل المصنع أي مسؤولية قانونية عن أي قرارات تُبنى على المعلومات العامة دون الرجوع إلى الاستشارة الهندسية المباشرة من فريقنا المختص.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">5. القانون الواجب التطبيق</h2>
            <p className="text-sm sm:text-base text-slate-600">
              تخضع شروط الاستخدام هذه وتُفسر وفقاً لقوانين إمارة دبي والقوانين الاتحادية لدولة الإمارات العربية المتحدة.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
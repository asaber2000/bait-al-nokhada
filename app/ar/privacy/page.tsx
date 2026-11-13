import type { Metadata } from "next";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | مصنع بيت النوخذة للخيام والمظلات",
  description:
    "تعرف على كيفية جمع واستخدام وحماية بياناتك الشخصية عند تصفح موقع مصنع بيت النوخذة للخيام والمظلات أو طلب عرض سعر.",
  alternates: {
    canonical: "https://baitalnokhada.com/ar/privacy/",
  },
};

export default function ArabicPrivacyPolicyPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans text-right">
      <Navbar />

      <section className="pt-32 sm:pt-36 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 bg-[#FDFCF7]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>الخصوصية وحماية البيانات</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] font-heading">
            سياسة الخصوصية
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            آخر تحديث: نوفمبر 2026 • مصنع بيت النوخذة للخيام والمظلات ذ.م.م
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-8 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">1. مقدمة</h2>
            <p className="text-sm sm:text-base text-slate-600">
              يلتزم <strong>مصنع بيت النوخذة للخيام والمظلات ذ.م.م</strong> بحماية خصوصية زوار وعملاء موقعنا الإلكتروني <strong>baitalnokhada.com</strong>، وضمان سرية البيانات الشخصية التي تشاركها معنا وفقاً لقوانين حماية البيانات المعمول بها في دولة الإمارات العربية المتحدة.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">2. البيانات التي نقوم بجمعها</h2>
            <p className="text-sm sm:text-base text-slate-600">
              عند تصفحك للموقع أو إرسال طلب عرض سعر أو التواصل مع فريقنا الهندسي، قد نقوم بجمع البيانات التالية:
            </p>
            <ul className="list-disc pr-5 space-y-2 text-sm sm:text-base text-slate-600">
              <li><strong>بيانات التواصل والتعريف:</strong> الاسم الكامل، اسم الشركة أو الجهة، البريد الإلكتروني، رقم الهاتف أو الواتساب، وموقع المشروع.</li>
              <li><strong>تفاصيل المشروع:</strong> المساحات والأبعاد المطلوبة، نوع الخيمة أو المنشأة، مدة التأجير أو مواصفات الشراء.</li>
              <li><strong>البيانات التقنية:</strong> نوع المتصفح والجهاز، والصفحات التي تمت زيارتها لتحسين أداء الموقع وتجربة المستخدم.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">3. كيف نستخدم بياناتك</h2>
            <ul className="list-disc pr-5 space-y-2 text-sm sm:text-base text-slate-600">
              <li>إعداد الدراسات الفنية وعروض الأسعار المخصصة بدقة حسب متطلبات مشروعك.</li>
              <li>التنسيق للمعاينة الميدانية، التصنيع، التوريد، والتركيب في الإمارات والسعودية ودول الخليج.</li>
              <li>الرد على استفسارات العملاء وتقديم الدعم الفني وخدمات ما بعد البيع.</li>
              <li>تطوير جودة خدماتنا ومحتوى موقعنا الإلكتروني.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">4. ملفات تعريف الارتباط (Cookies)</h2>
            <p className="text-sm sm:text-base text-slate-600">
              نستخدم ملفات تعريف الارتباط وأدوات التحليل القياسية (مثل Google Analytics) لقياس أداء الصفحات وفهم اهتمامات الزوار، ويمكنك التحكم في إعدادات ملفات تعريف الارتباط أو تعطيلها من خلال متصفحك في أي وقت.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">5. حماية البيانات وعدم مشاركتها</h2>
            <p className="text-sm sm:text-base text-slate-600">
              لا نقوم ببيع أو تأجير بياناتك الشخصية لأي طرف ثالث مطلقاً. وتُحفظ جميع البيانات في بيئة آمنة ولا يُطلع عليها سوى الفرق الهندسية والتجارية المختصة بتنفيذ طلبك.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black text-[#0B1220] font-heading">6. حقوقك والتواصل معنا</h2>
            <p className="text-sm sm:text-base text-slate-600">
              يحق لك في أي وقت طلب الاطلاع على بياناتك المسجلة لدينا أو تحديثها أو حذفها عبر التواصل معنا مباشرة:
            </p>
            <div className="p-5 rounded-2xl bg-[#FDFCF7] border border-slate-200/80 space-y-2.5 text-sm text-slate-700">
              <p className="font-bold text-[#0B1220]">مصنع بيت النوخذة للخيام والمظلات ذ.م.م</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#df9d17] shrink-0" /> قطعة رقم TP 010102 - تكنوبارك - ميناء جبل علي - مجمع الصناعات الوطنية - دبي، الإمارات</p>
              <p className="flex items-center gap-2" dir="ltr"><Phone className="w-4 h-4 text-[#df9d17] shrink-0" /> +971 4 344 4091</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#df9d17] shrink-0" /> info@baitalnokhada.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
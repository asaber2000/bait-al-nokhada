"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Target, 
  Compass, 
  Quote, 
  CheckCircle2, 
  Award, 
  Users, 
  Building,
  Calendar
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components-ar/components/Navbar.Ar"; // (أو Navbar حسب اسم الملف اللي سميته)
import Footer from "@/components-ar/components/Footer.Ar";

const journeyMilestones = [
  {
    year: "1997",
    title: "التأسيس في أبوظبي",
    tagline: "بداية الحرفية والجودة الصناعية",
    desc: "تأسست شركة بيت النوخذة في إمارة أبوظبي كشركة رائدة في تصنيع خيام المجالس العربية التقليدية ومظلات الشد الإنشائي الفاخرة لسوق دولة الإمارات.",
    highlight: "إنشاء أول مجمع صناعي متكامل في أبوظبي.",
  },
  {
    year: "2005",
    title: "التوسع الصناعي والمصانع الكبرى",
    tagline: "معايير هندسية ألمانية متطورة",
    desc: "توسيع خطوط الإنتاج ونقل المصانع إلى مدينة أبوظبي الصناعية (ICAD-1) على مساحة تفوق 40,000 متر مربع مع إدخال ماكينات القص الليزري CNC واللحام عالي التردد HF.",
    highlight: "الحصول على شهادات الجودة العالمية ISO 9001:2015 واعتمادات DIN للسلامة.",
  },
  {
    year: "2015",
    title: "عصر القمم والمعارض الدولية الكبرى",
    tagline: "الريادة في تغطية الفعاليات الدبلوماسية والدفاعية",
    desc: "أصبح بيت النوخذة المقاول الرئيسي للهياكل المؤقتة لكبرى المعارض العالمية مثل IDEX، NAVDEX، معرض دبي للطيران، والاحتفالات الرسمية.",
    highlight: "تركيب أكثر من 3,000 هيكل عملاق بنجاح في أنحاء الإمارات.",
  },
  {
    year: "2022",
    title: "التوسع الإقليمي في السعودية والخليج",
    tagline: "مشاريع معمارية عابرة للحدود",
    desc: "تأسيس مكاتب وعمليات تشغيلية مباشرة في الرياض وجدة بالمملكة العربية السعودية لتلبية متطلبات مواسم الترفيه الكبرى والمناطق اللوجستية.",
    highlight: "تنفيذ أجنحة ملكية ومستودعات بحور مفتوحة عملاقة في المملكة.",
  },
  {
    year: "2026",
    title: "الجيل القادم من العمارة المستدامة",
    tagline: "هندسة معيارية مستقبلية",
    desc: "دمج أغشية الشد الإنشائي المهيأة للطاقة الشمسية، الألواح الصوتية المعزولة، والقاعات المكونة من طابقين للمشاريع الخليجية المستقبلية.",
    highlight: "إنجاز أكثر من 6,000 مشروع مع قدرات تنفيذ تسليم مفتاح بنسبة 100%.",
  },
];

const structuralPillars = [
  {
    num: "01",
    title: "سبائك ألمنيوم معتمدة بمواصفات الطيران",
    desc: "نستخدم حصرياً قطاعات الألمنيوم المقسّى المعالج بالأكسدة (6061/T6) والمفاصل الفولاذية المجلفنة بالغمس الساخن لتقليل الصيانة ومقاومة الصدأ ومضاعفة العمر الافتراضي.",
  },
  {
    num: "02",
    title: "إعادة استخدام ونقل لا محدود",
    desc: "تم تصميم كافة الهياكل لتكون سهلة الفك وإعادة التركيب والنقل لمرات غير محدودة، مع تخزين مدمج دون أي تآكل حتى في أقسى الظروف الصحراوية.",
  },
  {
    num: "03",
    title: "ريادة تقنيات البحور القوسية والمضلعة",
    desc: "وضع المعايير القياسية للهياكل في الخليج عبر الخيام المضلعة عالية القمة، والقباب الجيوديسية، والهياكل ذات البحور المفتوحة المقاومة للرياح العاتية.",
  },
  {
    num: "04",
    title: "قص آلي CNC ولحام عالي التردد HF",
    desc: "الاعتماد على خطوط إنتاج أوروبية آلية ولحام أغشية PVC عالية التردد لضمان مقاومة تسريب المياه بنسبة 100%، ومقاومة الحريق (DIN 4102 B1)، وحجب الأشعة فوق البنفسجية.",
  },
  {
    num: "05",
    title: "تنفيذ شامل للمشاريع تسليم مفتاح",
    desc: "فريق متكامل يضم نخبة من المهندسين الإنشائيين، مصممي النماذج ثلاثية الأبعاد، والفنيين المعتمدين لمتابعة المشروع من الحسابات الهندسية وحتى التسليم النهائي في الموقع.",
  },
];

const expertiseList = [
  {
    title: "التصميم، الهندسة والتصنيع",
    desc: "تفصيل وتصنيع أنظمة الهياكل مسبقة الصنع التي تدمج الابتكار الهندسي بالفخامة، باستخدام خامات أوروبية مطابقة للمواصفات الألمانية DIN.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "تأجير وتوريد الخيام تسليم مفتاح",
    desc: "مخزون ضخم ومتاح للتركيب السريع الفوري في دبي وأبوظبي والرياض وجدة للقمم الدبلوماسية، المعارض التجارية، والاحتفالات الخاصة.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "التجهيز الفاخر والديكورات الملكية",
    desc: "بطانات مجالس عربية مطرزة، ثريات كريستال، واجهات زجاجية بانورامية، بوابات أوتوماتيكية، وأرضيات كاسيت مجهزة لكبار الشخصيات VIP.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "أنظمة التكييف المركزي HVAC عالية القدرة",
    desc: "وحدات تكييف صامتة ومصممة خصيصاً لضمان ثبات درجة الحرارة عند 21° مئوية داخل الخيمة حتى في درجات حرارة الصيف التي تتجاوز 50° مئوية.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ArabicAboutPage() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-44 pb-24 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-175 h-87.5 bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>تأسست عام 1997 • أكثر من 30 عاماً من الريادة الصناعية</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-heading">
            رواد صناعة الخيام العملاقة و <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              مظلات الشد الإنشائي المعمارية
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed">
            لأكثر من 30 عاماً، تواصل صناعات بيت النوخذة مكانتها كأكبر مصنع ومورد موثوق للخيام والهياكل النسيجية في الإمارات، السعودية، وكافة دول الخليج، مقدمة حلولاً متينة تجمع بين الفخامة الهندسية والقدرة على مواجهة أقسى التحديات المناخية.
          </p>
        </div>
      </section>

      {/* Company Journey Interactive Timeline */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10 relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            أصالة التراث ومحطات الإنجاز
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading">
            مسيرة الشركة عبر العقود
          </h2>
          <p className="text-sm text-slate-400 font-light">
            نتتبع مسار تطورنا المستمر من صناعة الخيام الحرفية التراثية إلى صرح صناعي وهندسي عالمي متعدد الفروع.
          </p>
        </div>

        {/* Year Buttons Strip */}
        <div className="flex items-center justify-start sm:justify-center gap-3 overflow-x-auto pb-6">
          {journeyMilestones.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveMilestone(idx)}
              className={`px-6 py-3 rounded-2xl text-sm font-black transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                activeMilestone === idx
                  ? "bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] shadow-lg shadow-[#D4AF37]/20 scale-105"
                  : "bg-[#0D1527] text-slate-400 border border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{item.year}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Card Display */}
        <div className="mt-8 max-w-4xl mx-auto text-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-12 rounded-3xl bg-linear-to-b from-[#0D1527] to-[#070B14] border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-[#D4AF37]">
                    {journeyMilestones[activeMilestone].year}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1 font-heading">
                    {journeyMilestones[activeMilestone].title}
                  </h3>
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300 w-fit">
                  {journeyMilestones[activeMilestone].tagline}
                </span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                {journeyMilestones[activeMilestone].desc}
              </p>

              <div className="p-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center gap-3 text-xs sm:text-sm text-slate-200 justify-start">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>{journeyMilestones[activeMilestone].highlight}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Structural Pillars */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-right">
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              الانضباط والمعايير الهندسية
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight font-heading">
              دقة التصنيع وموثوقية الهياكل الثقيلة
            </h2>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              ندير مجمعات صناعية أوروبية متطورة في مدينة أبوظبي الصناعية (ICAD-1) ودبي، مع الالتزام بأعلى معايير السلامة الألمانية المعتمدة DIN EN 13782.
            </p>
            
            <div className="pt-4">
              <Link
                href="/ar/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl shadow-[#D4AF37]/20"
              >
                <span>استشر مهندسينا في مشروعك</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {structuralPillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#0D1527]/70 border border-white/10 hover:border-[#D4AF37]/40 transition-all group flex gap-6"
              >
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-linear-to-br from-[#D4AF37] to-white/20 shrink-0">
                  {item.num}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10 text-right">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 rounded-3xl bg-linear-to-b from-white/4 to-transparent border border-white/10 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white font-heading">رؤيتنا</h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              نهدف إلى إرساء معايير جديدة في الكفاءة والصلابة والتصميم المعماري من خلال حلول الخيام والهياكل المتقدمة. كمزود رئيسي في الإمارات والسعودية، نسعى لنكون الخيار الأول للمنشآت المؤقتة والدائمة في دول الخليج العربي وخارجها.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-linear-to-b from-white/4 to-transparent border border-white/10 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white font-heading">رسالتنا</h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              إعادة تعريف التميز كشريك موثوق ومبتكر في تقديم الخيام والهياكل مسبقة الصنع في دبي وأبوظبي والمملكة العربية السعودية، مع الجمع بين سرعة الإنجاز، الاستدامة، والموثوقية المطلقة لتمكين عملائنا من تحقيق نجاحاتهم بثقة وأمان.
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10 space-y-16 text-right">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            خدمات متكاملة تسليم مفتاح
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading">
            قدراتنا الهندسية والتصنيعية الشاملة
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseList.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl overflow-hidden bg-[#0D1527]/70 border border-white/10 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0D1527] via-transparent to-transparent" />
              </div>

              <div className="p-8 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors font-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CEO Message Banner */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-right">
        <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 bg-linear-to-r from-[#0D1527] via-[#070B14] to-[#0D1527] p-8 sm:p-14 shadow-2xl">
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3 justify-start">
              <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Quote className="w-6 h-6 rotate-180" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">رسالة الإدارة العليا</span>
                <h4 className="text-lg font-bold text-white font-heading">تحية القيادة والتطوير</h4>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed italic">
              {`"في بيت النوخذة، نفتخر بدمج الحداثة المعمارية بأصالة تقاليدنا العريقة. كل مشروع نصنعه مستلهم من تراثنا، ليعكس التزامنا بأعلى معايير الجودة والخيام الفاخرة التي شكلت معياراً يُحتذى به في الصناعة. رسالتنا واضحة: تقديم خيام ومظلات إنشائية تجمع بين الأناقة والصلابة والابتكار الهندسي، ونتطلع بحماس لخوض تحديات وإنجازات كبرى جديدة عبر الإمارات والسعودية والخليج العربي."`}
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs text-slate-400">
              <span>الإدارة التنفيذية • بيت النوخذة للخيام والمظلات الإنشائية</span>
              <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>جودة معتمدة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Numbers Strip */}
      <section className="py-16 px-6 border-t border-white/10 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
              <Award className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-white">+30</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-200">عاماً من الخبرة</p>
            <p className="text-xs text-slate-400">تأسست منذ أكثر من ثلاثة عقود رائدة في السوق.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
              <Users className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-white">+3000</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-200">عميل وشريك نجاح</p>
            <p className="text-xs text-slate-400">شراكات استراتيجية حكومية وخاصة طويلة الأمد.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
              <Building className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-white">+6000</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-200">مشروع منجز</p>
            <p className="text-xs text-slate-400">هياكل عملاقة مؤقتة ودائمة تم تسليمها بنجاح.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl" lang="ar" className="font-body text-right bg-[#070B14] text-white w-full min-h-[100dvh] overflow-x-hidden relative">
      <SmoothScroll>
        <Preloader />
        {children}
      </SmoothScroll>
    </div>
  );
}
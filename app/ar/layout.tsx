import SmoothScroll from "@/components/SmoothScroll";

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl" lang="ar" className="font-body text-right bg-[#070B14] text-white w-full min-h-[100dvh] overflow-x-clip relative">
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </div>
  );
}
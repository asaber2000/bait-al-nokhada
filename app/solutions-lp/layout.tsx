import "@/app/globals.css";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#070B14] text-white antialiased selection:bg-[#D4AF37] selection:text-[#070B14]">
        {children}
      </body>
    </html>
  );
}
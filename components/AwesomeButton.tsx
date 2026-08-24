import React from 'react';

interface AwesomeButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function AwesomeButton({ text, onClick, href, className = '' }: AwesomeButtonProps) {
  const buttonContent = (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#F3D588] transition-all duration-300 bg-[#DFB15B]/10 border border-[#DFB15B]/40 backdrop-blur-sm rounded-xl shadow-[0_6px_0_0_#5A4313] hover:bg-gradient-to-r hover:from-[#DFB15B] hover:via-[#F3D588] hover:to-[#C5973A] hover:text-black hover:border-transparent hover:shadow-[0_2px_0_0_#5A4313] hover:translate-y-1 active:translate-y-1.5 active:shadow-none cursor-pointer uppercase tracking-wider overflow-hidden group ${className}`}
    >
      {/* تأثير لمعة متحركة */}
      <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out"></div>
      
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </div>
  );

  if (href) {
    return <a href={href} className="inline-block">{buttonContent}</a>;
  }

  return buttonContent;
}
import React from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

interface AboutCTAProps {
  onBookClick: () => void;
}

export const AboutCTA: React.FC<AboutCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#FAF4E8] font-sans border-t border-[#EAD9B7]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F8EAC9]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF8] border border-[#EAD9B7] backdrop-blur-md mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#B87908] animate-pulse" />
          <span className="text-[#B87908] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            START YOUR RECOVERY
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#24190F] tracking-tight leading-[1.12] mb-6 max-w-3xl">
          Ready to Move Better?
        </h2>

        {/* Supporting Text */}
        <p className="text-[#65594B] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-10 text-balance">
          Take the first step toward a stronger, pain-free, and more confident physical recovery with Dr. K. Bhavendra PT.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#B87908] hover:bg-[#966205] text-white font-bold text-base shadow-lg shadow-[#B87908]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-[#FFFDF8] text-[#24190F] border border-[#EAD9B7] font-bold text-base transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#B87908]" />
            <span>Call {CLINIC_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

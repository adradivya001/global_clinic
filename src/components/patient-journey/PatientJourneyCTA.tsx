import React from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

interface PatientJourneyCTAProps {
  onBookClick: () => void;
}

export const PatientJourneyCTA: React.FC<PatientJourneyCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FAF4E8] to-[#FFFDF8] font-sans border-t border-[#EAD9B7]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#F8EAC9]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] backdrop-blur-md mb-5 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#B87908] animate-pulse" />
          <span className="text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase">
            START YOUR PATHWAY
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15] mb-4 max-w-2xl font-serif">
          Ready To Begin Your Journey?
        </h2>

        {/* Supporting Text */}
        <p className="text-[#65594B] text-base sm:text-lg font-normal leading-relaxed max-w-xl mb-8 text-balance">
          Take the first step toward understanding your movement and starting personalized rehabilitation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:from-[#A06806] hover:to-[#C48A1D] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#B87908]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white hover:bg-[#FAF4E8] text-[#24190F] border border-[#EAD9B7] font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#B87908]" />
            <span>Call {CLINIC_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};


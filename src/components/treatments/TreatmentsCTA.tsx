import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

interface TreatmentsCTAProps {
  onBookClick: () => void;
}

export const TreatmentsCTA: React.FC<TreatmentsCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FAF4E8] to-[#FFFDF8] font-sans border-t border-[#EAD9B7]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=80"
          alt="Treatment and Recovery Background"
          className="w-full h-full object-cover object-center mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF8]/90 via-transparent to-[#FFFDF8]" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F8EAC9]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] backdrop-blur-md mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#B87908] animate-pulse" />
          <span className="text-[#B87908] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            BEGIN REHABILITATION
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#24190F] tracking-tight leading-[1.12] mb-6 max-w-3xl font-serif">
          Take The Next Step In Your Recovery.
        </h2>

        {/* Supporting Text */}
        <p className="text-[#65594B] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-10 text-balance">
          Whether you're recovering from an injury, managing pain or working toward better movement, the right starting point can make the journey clearer.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:from-[#A06806] hover:to-[#C48A1D] text-white font-bold text-base shadow-lg shadow-[#B87908]/20 hover:shadow-[#B87908]/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-[#FAF4E8] text-[#24190F] border border-[#EAD9B7] font-semibold text-base shadow-xs transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#B87908]" />
            <span>Contact the Clinic</span>
          </a>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

interface AboutCTAProps {
  onBookClick: () => void;
}

export const AboutCTA: React.FC<AboutCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#041326] font-sans">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=80"
          alt="Movement and Recovery Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041326] via-[#041326]/95 to-[#041326]" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#168DD0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase">
            START YOUR RECOVERY
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 max-w-3xl">
          Ready to Move Better?
        </h2>

        {/* Supporting Text */}
        <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-10 text-balance">
          Take the first step toward a stronger and more confident recovery.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-500 font-semibold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Contact the Clinic</span>
          </a>
        </div>
      </div>
    </section>
  );
};

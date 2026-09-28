import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContactCTAProps {
  onBookClick: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 lg:py-20 bg-[#060b13] relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[160%] rounded-full blur-[140px] bg-[#168DD0]/10 pointer-events-none" />
      <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[160%] rounded-full blur-[140px] bg-[#F5B400]/10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 font-bold text-xs tracking-[0.2em] uppercase mb-5">
            YOUR HEALTH & RECOVERY
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
            Ready to Take the Next Step?
          </h2>

          {/* Supporting text */}
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Start your journey toward better movement, recovery and strength.
          </p>

          {/* CTA Button */}
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

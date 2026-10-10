import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ContactCTAProps {
  onBookClick: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-[#24190F] via-[#3D2B1A] to-[#24190F] relative overflow-hidden font-sans border-t border-[#B87908]/40 text-white">
      {/* Ambient background glows */}
      <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[160%] rounded-full blur-[140px] bg-[#B87908]/20 pointer-events-none" />
      <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[160%] rounded-full blur-[140px] bg-[#D99B24]/15 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B87908]/20 border border-[#B87908]/40 text-[#D99B24] font-bold text-xs tracking-[0.2em] uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#D99B24]" />
            YOUR HEALTH & RECOVERY
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.2] mb-4">
            Ready to Take the Next Step?
          </h2>

          {/* Supporting text */}
          <p className="text-[#EAD9B7] text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Start your personalized journey toward restored movement, lasting recovery, and renewed physical strength.
          </p>

          {/* CTA Button */}
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#B87908] to-[#D99B24] text-white font-bold text-base shadow-lg shadow-[#B87908]/30 hover:opacity-95 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

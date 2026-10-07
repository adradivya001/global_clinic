import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ContactCTAProps {
  onBookClick: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 relative overflow-hidden font-sans border-t border-stone-800 text-white">
      {/* Ambient background glows */}
      <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[160%] rounded-full blur-[140px] bg-emerald-500/15 pointer-events-none" />
      <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[160%] rounded-full blur-[140px] bg-teal-500/10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs tracking-[0.2em] uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            YOUR HEALTH & RECOVERY
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
            Ready to Take the Next Step?
          </h2>

          {/* Supporting text */}
          <p className="text-stone-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Start your personalized journey toward restored movement, lasting recovery, and renewed physical strength.
          </p>

          {/* CTA Button */}
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white font-bold text-base shadow-lg shadow-emerald-700/30 hover:shadow-emerald-700/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

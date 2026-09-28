import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';

interface BlogCTAProps {
  onBookClick: () => void;
}

export const BlogCTA: React.FC<BlogCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 lg:py-20 bg-[#060b13] relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[160%] rounded-full blur-[140px] bg-[#168DD0]/10 pointer-events-none" />
      <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[160%] rounded-full blur-[140px] bg-[#F5B400]/10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 font-bold text-xs tracking-[0.2em] uppercase mb-5">
            PERSONALIZED EVALUATION
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
            Have A Question About Your Recovery?
          </h2>

          {/* Supporting text */}
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Reading can help you understand your concerns. A professional assessment can help you understand what to do next.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/conditions"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-500 font-semibold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <HelpCircle className="w-4 h-4 text-sky-400" />
              <span>View Conditions</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle, Sparkles } from 'lucide-react';

interface BlogCTAProps {
  onBookClick: () => void;
}

export const BlogCTA: React.FC<BlogCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 lg:py-20 bg-[#FFFDF8] relative overflow-hidden font-sans border-t border-[#EAD9B7]">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#F8EAC9]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B87908] animate-pulse" />
            <span>PERSONALIZED EVALUATION</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.2] mb-4">
            Have A Question About Your Recovery?
          </h2>

          {/* Supporting text */}
          <p className="text-[#65594B] text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Reading guides builds awareness. A thorough clinical assessment establishes exact next steps.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:opacity-95 text-white font-bold text-base shadow-lg shadow-[#B87908]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-[#FAF4E8] text-[#24190F] border border-[#EAD9B7] font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer group shadow-xs"
            >
              <HelpCircle className="w-4 h-4 text-[#B87908]" />
              <span>View Clinical Services</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

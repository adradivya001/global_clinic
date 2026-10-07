import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ClinicCTAProps {
  onBookClick: () => void;
}

export const ClinicCTA: React.FC<ClinicCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 lg:py-20 bg-[#FAF8F5] relative overflow-hidden font-sans border-t border-stone-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>TAKE THE NEXT STEP</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.2] mb-4">
            Ready to Begin Your Recovery?
          </h2>

          {/* Supporting text */}
          <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Take the next step toward better movement, pain reduction, and physical strength.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-base shadow-lg shadow-emerald-700/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer group shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-700" />
              <span>Contact the Clinic</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DoctorCTAProps {
  onBookClick: () => void;
}

export const DoctorCTA: React.FC<DoctorCTAProps> = ({ onBookClick }) => {
  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-[#041326] font-sans">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#168DD0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-5">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-400 font-semibold text-xs tracking-[0.2em] uppercase">
            START YOUR CONSULTATION
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 max-w-2xl">
          Ready to Begin Your Recovery?
        </h2>

        {/* Supporting Text */}
        <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl mb-8 text-balance">
          Take the first step toward better movement and a more confident recovery.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => navigate('/treatments')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-500 font-semibold text-sm sm:text-base backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span>View Treatments</span>
          </button>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../../assets/hero_bg.png';

interface TreatmentsHeroProps {
  onBookClick: () => void;
}

export const TreatmentsHero: React.FC<TreatmentsHeroProps> = ({ onBookClick }) => {
  const navigate = useNavigate();

  const handleExploreConditions = () => {
    navigate('/#explorer');
  };

  const handleScrollToCategories = () => {
    const el = document.getElementById('categories');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] overflow-hidden bg-[#060b13] flex items-center justify-center pt-32 pb-20 font-sans">
      {/* 1. Cinematic Background Image */}
      <div className="absolute inset-0 z-0 bg-[#060b13]">
        <img
          src={heroBg}
          alt="Global Physiotherapy Treatments & Care"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105"
        />
      </div>

      {/* 2. Atmospheric Dark & Cyan Gradients */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(6,11,19,0.85) 0%, rgba(10,17,30,0.65) 50%, rgba(6,11,19,0.92) 100%)',
        }}
      />
      <div className="absolute -top-[20%] right-[15%] w-[50%] h-[60%] rounded-full blur-[140px] bg-[#168DD0]/15 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-[10%] w-[40%] h-[50%] rounded-full blur-[140px] bg-[#F5B400]/10 pointer-events-none z-10" />

      {/* Top and Bottom Vignette */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-[#060b13]/80 via-transparent to-[#060b13]" />

      {/* 3. Centered Hero Content */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-6 animate-[fadeIn_0.6s_ease-out_forwards]">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase">
            OUR TREATMENTS
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mb-6">
          Care Designed Around{' '}
          <span className="text-gold-gradient block sm:inline">Your Recovery.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mb-10 text-balance">
          From pain management and injury rehabilitation to mobility, strength and sports recovery, our treatment approach is designed around your individual needs and goals.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleExploreConditions}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-500 font-semibold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Explore Conditions</span>
            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll hint */}
        <button
          onClick={handleScrollToCategories}
          className="mt-14 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
        >
          <span>Explore Areas of Care</span>
          <ChevronDown className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

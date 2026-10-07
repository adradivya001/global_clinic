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
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] overflow-hidden bg-gradient-to-b from-[#FBFBFA] via-[#F4F7F4] to-[#FAF8F5] flex items-center justify-center pt-32 pb-20 font-sans border-b border-stone-200/80">
      {/* 1. Cinematic Background Image with Light Blend */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Global Physiotherapy Treatments & Care"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25 mix-blend-multiply scale-105"
        />
      </div>

      {/* 2. Atmospheric Emerald & Warm Glows */}
      <div className="absolute -top-[20%] right-[15%] w-[50%] h-[60%] rounded-full blur-[140px] bg-emerald-100/50 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-[10%] w-[40%] h-[50%] rounded-full blur-[140px] bg-orange-100/40 pointer-events-none z-10" />

      {/* Top and Bottom Vignette */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-[#FBFBFA]/90 via-transparent to-[#FAF8F5]" />

      {/* 3. Centered Hero Content */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 backdrop-blur-md mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            OUR CLINICAL TREATMENTS
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.12] max-w-4xl mb-6">
          Care Designed Around{' '}
          <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-900 bg-clip-text text-transparent block sm:inline">Your Recovery.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-normal leading-relaxed max-w-3xl mb-10 text-balance">
          From pain management and injury rehabilitation to mobility, strength and sports recovery, our treatment approach is designed around your individual needs and goals.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-lg shadow-emerald-700/25 hover:shadow-emerald-700/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleExploreConditions}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 font-semibold text-base shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Explore Conditions</span>
            <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll hint */}
        <button
          onClick={handleScrollToCategories}
          className="mt-14 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          <span>Explore Areas of Care</span>
          <ChevronDown className="w-3.5 h-3.5 text-emerald-700 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

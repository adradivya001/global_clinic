import React from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../../assets/hero_bg.png';

interface PatientJourneyHeroProps {
  onBookClick: () => void;
}

export const PatientJourneyHero: React.FC<PatientJourneyHeroProps> = ({ onBookClick }) => {
  const navigate = useNavigate();

  const handleScrollToTimeline = () => {
    const el = document.getElementById('journey-timeline');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[75vh] lg:min-h-[80vh] overflow-hidden bg-[#FAF8F5] flex items-center justify-center pt-32 pb-16 font-sans border-b border-stone-200/80">
      {/* 1. Subtle Background Image */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={heroBg}
          alt="Global Physiotherapy Patient Journey"
          className="absolute inset-0 w-full h-full object-cover object-center filter saturate-50"
        />
      </div>

      {/* 2. Atmospheric Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] bg-emerald-100/60 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full blur-[140px] bg-orange-100/50 pointer-events-none z-10" />

      {/* 3. Centered Hero Content */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 backdrop-blur-md mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
          <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            YOUR RECOVERY JOURNEY
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.12] max-w-4xl mb-6">
          Every Recovery Starts{' '}
          <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 bg-clip-text text-transparent block sm:inline">
            With One Step.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl mb-8 text-balance">
          From your initial consultation to progressive reconditioning, we guide you through an objective, milestone-driven rehabilitation pathway.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-base shadow-xl shadow-emerald-700/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => navigate('/treatments')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-bold text-base shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>Explore Treatments</span>
          </button>
        </div>

        {/* Scroll hint */}
        <button
          onClick={handleScrollToTimeline}
          className="mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-emerald-800 transition-colors cursor-pointer"
        >
          <span>View 5-Phase Pathway</span>
          <ChevronDown className="w-3.5 h-3.5 text-emerald-700 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

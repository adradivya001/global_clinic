import React from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import heroBg from '../../assets/hero_bg.png';

interface ConditionsHeroProps {
  onBookClick: () => void;
}

export const ConditionsHero: React.FC<ConditionsHeroProps> = ({ onBookClick }) => {
  const handleScrollToExplorer = () => {
    const el = document.getElementById('body-explorer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[75vh] lg:min-h-[80vh] overflow-hidden bg-[#FFFDF8] flex items-center justify-center pt-32 pb-16 font-sans border-b border-[#EAD9B7]/60">
      {/* 1. Subtle Background Image */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={heroBg}
          alt="Global Physiotherapy Conditions"
          className="absolute inset-0 w-full h-full object-cover object-center filter saturate-50"
        />
      </div>

      {/* 2. Ambient Light Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] bg-[#F8EAC9]/60 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full blur-[140px] bg-[#FAF4E8]/80 pointer-events-none z-10" />

      {/* 3. Centered Hero Content */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EAC9] border border-[#EAD9B7] backdrop-blur-md mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#B87908] animate-pulse" />
          <span className="text-[#B87908] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            CONDITIONS WE HELP WITH
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.12] max-w-4xl mb-6">
          Understand Your Pain.{' '}
          <span className="bg-gradient-to-r from-[#B87908] via-[#D99B24] to-[#B87908] bg-clip-text text-transparent block sm:inline">
            Move With Freedom.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg lg:text-xl text-[#65594B] font-normal leading-relaxed max-w-2xl mb-8 text-balance">
          Explore common musculoskeletal, neurological, and biomechanical concerns treated with evidence-based physical therapy at Global Physiotherapy Anantapur.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:from-[#a06806] hover:to-[#c48a1d] text-white font-bold text-base shadow-xl shadow-[#B87908]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Book Clinical Assessment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleScrollToExplorer}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-[#FAF4E8] text-[#24190F] border border-[#EAD9B7] font-bold text-base shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Explore Body Areas</span>
            <ChevronDown className="w-4 h-4 text-[#B87908] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};


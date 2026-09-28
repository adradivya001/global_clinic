import React from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import heroBg from '../../assets/hero_bg.png';

export const BlogHero: React.FC = () => {
  const handleScrollToArticles = () => {
    const el = document.getElementById('latest-articles');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[76vh] overflow-hidden bg-[#060b13] flex items-center justify-center pt-32 pb-16 font-sans">
      {/* 1. Background Visual */}
      <div className="absolute inset-0 z-0 bg-[#060b13]">
        <img
          src={heroBg}
          alt="Global Physiotherapy Knowledge Hub"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 scale-105"
        />
      </div>

      {/* 2. Atmospheric Gradients */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(6,11,19,0.90) 0%, rgba(10,17,30,0.76) 50%, rgba(6,11,19,0.95) 100%)',
        }}
      />
      <div className="absolute -top-[15%] left-[20%] w-[50%] h-[60%] rounded-full blur-[140px] bg-[#168DD0]/15 pointer-events-none z-10" />
      <div className="absolute bottom-0 right-[15%] w-[40%] h-[50%] rounded-full blur-[140px] bg-[#F5B400]/10 pointer-events-none z-10" />

      {/* Top and Bottom Vignette */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-[#060b13]/80 via-transparent to-[#060b13]" />

      {/* 3. Hero Content Container */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-6 animate-[fadeIn_0.6s_ease-out_forwards]">
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase">
            PHYSIOTHERAPY & WELLNESS
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mb-6">
          Understand Your Body.{' '}
          <span className="text-gold-gradient block sm:inline">Move Better.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8 text-balance">
          Practical insights on physiotherapy, movement, rehabilitation, posture and injury prevention.
        </p>

        {/* Primary CTA */}
        <div>
          <button
            onClick={handleScrollToArticles}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Explore Articles</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

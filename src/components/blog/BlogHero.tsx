import React from 'react';
import { BookOpen, ChevronDown, Sparkles } from 'lucide-react';
import heroBg from '../../assets/hero_bg.png';

export const BlogHero: React.FC = () => {
  const handleScrollToArticles = () => {
    const el = document.getElementById('latest-articles');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[76vh] overflow-hidden bg-[#FFFDF8] flex items-center justify-center pt-32 pb-16 font-sans border-b border-[#EAD9B7]">
      {/* 1. Subtle Background Visual */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={heroBg}
          alt="Global Physiotherapy Knowledge Hub"
          className="absolute inset-0 w-full h-full object-cover object-center filter saturate-50"
        />
      </div>

      {/* 2. Atmospheric Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] bg-[#F8EAC9]/60 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full blur-[140px] bg-[#FAF4E8]/80 pointer-events-none z-10" />

      {/* 3. Hero Content Container */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] backdrop-blur-md mb-6 shadow-xs">
          <BookOpen className="w-3.5 h-3.5 text-[#B87908]" />
          <span className="text-[#B87908] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            PHYSIOTHERAPY & WELLNESS GUIDES
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.12] max-w-4xl mb-6">
          Understand Your Body.{' '}
          <span className="bg-gradient-to-r from-[#B87908] via-[#D99B24] to-[#B87908] bg-clip-text text-transparent block sm:inline">
            Move Better.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg lg:text-xl text-[#65594B] font-normal leading-relaxed max-w-2xl mb-8 text-balance">
          Practical, evidence-backed clinical insights on physical therapy, spinal ergonomics, posture, and sports injury prevention.
        </p>

        {/* Primary CTA */}
        <div>
          <button
            onClick={handleScrollToArticles}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:opacity-95 text-white font-bold text-base shadow-lg shadow-[#B87908]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Explore Clinical Articles</span>
            <ChevronDown className="w-4 h-4 text-[#F8EAC9] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Phone, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import heroBg from '../../assets/hero_bg.png';

interface ContactHeroProps {
  onBookClick: () => void;
}

export const ContactHero: React.FC<ContactHeroProps> = ({ onBookClick }) => {
  const handleScrollToForm = () => {
    const el = document.getElementById('enquiry-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[64vh] lg:min-h-[70vh] overflow-hidden bg-gradient-to-b from-[#FAF4E8] via-[#FFFDF8] to-white flex items-center justify-center pt-32 pb-16 font-sans border-b border-[#EAD9B7]">
      {/* 1. Background Visual with soft blending */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-multiply pointer-events-none">
        <img
          src={heroBg}
          alt="Global Physiotherapy Contact"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* 2. Atmospheric Gradients */}
      <div className="absolute -top-[20%] left-[15%] w-[55%] h-[60%] rounded-full blur-[140px] bg-[#F8EAC9]/60 pointer-events-none z-10" />
      <div className="absolute bottom-0 right-[15%] w-[45%] h-[55%] rounded-full blur-[140px] bg-[#FAF4E8]/80 pointer-events-none z-10" />

      {/* 3. Hero Content Container */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] backdrop-blur-md mb-6 shadow-xs">
          <Phone className="w-3.5 h-3.5 text-[#B87908]" />
          <span className="text-[#B87908] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            GET IN TOUCH &bull; DIRECT ASSISTANCE
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.15] max-w-4xl mb-6">
          Let's Get You{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B87908] via-[#D99B24] to-[#B87908] block sm:inline">
            Moving Better.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg lg:text-xl text-[#65594B] font-normal leading-relaxed max-w-2xl mb-8 text-balance">
          Have a question, need clinical guidance, or ready to begin your physiotherapy journey? Connect directly with Global Physiotherapy Clinic.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:opacity-95 text-white font-bold text-base shadow-lg shadow-[#B87908]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleScrollToForm}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-[#FAF4E8] text-[#24190F] border border-[#EAD9B7] font-semibold text-base shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <MessageSquare className="w-4 h-4 text-[#B87908]" />
            <span>Send Enquiry</span>
          </button>
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-[#65594B]">
          <ShieldCheck className="w-4 h-4 text-[#B87908]" />
          <span>Verified Clinic Appointments &bull; Anantapur Facility</span>
        </div>
      </div>
    </section>
  );
};

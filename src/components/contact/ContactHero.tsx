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
    <section className="relative w-full min-h-[64vh] lg:min-h-[70vh] overflow-hidden bg-gradient-to-b from-[#F5F9F6] via-[#FAF8F5] to-white flex items-center justify-center pt-32 pb-16 font-sans border-b border-stone-200/60">
      {/* 1. Background Visual with soft blending */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-multiply pointer-events-none">
        <img
          src={heroBg}
          alt="Global Physiotherapy Contact"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* 2. Atmospheric Gradients */}
      <div className="absolute -top-[20%] left-[15%] w-[55%] h-[60%] rounded-full blur-[140px] bg-emerald-200/35 pointer-events-none z-10" />
      <div className="absolute bottom-0 right-[15%] w-[45%] h-[55%] rounded-full blur-[140px] bg-orange-100/40 pointer-events-none z-10" />

      {/* 3. Hero Content Container */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 backdrop-blur-md mb-6 shadow-sm">
          <Phone className="w-3.5 h-3.5 text-emerald-700" />
          <span className="text-emerald-900 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            GET IN TOUCH &bull; DIRECT ASSISTANCE
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15] max-w-4xl mb-6">
          Let's Get You{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900 block sm:inline">
            Moving Better.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl mb-8 text-balance">
          Have a question, need clinical guidance, or ready to begin your physiotherapy journey? Connect directly with Global Physiotherapy Clinic.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white font-bold text-base shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleScrollToForm}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 font-semibold text-base shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <MessageSquare className="w-4 h-4 text-emerald-700" />
            <span>Send Enquiry</span>
          </button>
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-stone-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Verified Clinic Appointments &bull; Anantapur Facility</span>
        </div>
      </div>
    </section>
  );
};

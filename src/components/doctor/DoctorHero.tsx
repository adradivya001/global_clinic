import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Sparkles } from 'lucide-react';
import doctorPhoto from '../../assets/doctor_photo.png';
import { DOCTOR_INFO } from '../../data/clinicData';

interface DoctorHeroProps {
  onBookClick: () => void;
}

export const DoctorHero: React.FC<DoctorHeroProps> = ({ onBookClick }) => {
  const handleScrollToProfile = () => {
    const el = document.getElementById('doctor-profile');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-[85vh] overflow-hidden bg-[#FAF8F5] flex items-center justify-center pt-32 pb-20 font-sans border-b border-stone-200/80">
      {/* 1. Ambient Light Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] bg-emerald-100/60 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full blur-[140px] bg-orange-100/50 pointer-events-none z-10" />

      {/* 2. Main Split Hero Container */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 backdrop-blur-md mb-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                MEET YOUR PHYSIOTHERAPIST
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-stone-900 tracking-tight leading-[1.1]">
              Expertise That{' '}
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 bg-clip-text text-transparent block sm:inline">
                Moves With You.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-normal leading-relaxed max-w-xl text-balance">
              Personalized physiotherapy focused on restoring natural movement, eliminating chronic pain, and rebuilding lifelong functional performance.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-base shadow-lg shadow-emerald-700/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleScrollToProfile}
                className="px-8 py-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-bold text-base shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>View Clinical Profile</span>
                <ChevronDown className="w-4 h-4 text-emerald-700 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Doctor Hero Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Photo Card Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-2xl p-3 group">
                <div className="relative rounded-2xl overflow-hidden bg-stone-100 h-[400px] sm:h-[460px]">
                  <img
                    src={doctorPhoto}
                    alt={DOCTOR_INFO.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />

                  {/* Doctor Info Floating Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="text-stone-900 font-black text-sm leading-tight">
                        {DOCTOR_INFO.name}
                      </h4>
                      <p className="text-orange-700 text-xs font-bold mt-0.5">
                        {DOCTOR_INFO.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

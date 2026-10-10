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
    <section className="relative w-full min-h-[80vh] lg:min-h-[85vh] overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FAF4E8] to-[#FFFDF8] flex items-center justify-center pt-32 pb-20 font-sans border-b border-[#EAD9B7]">
      {/* 1. Ambient Light Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] bg-[#F8EAC9]/60 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full blur-[140px] bg-[#FAF4E8]/80 pointer-events-none z-10" />

      {/* 2. Main Split Hero Container */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] backdrop-blur-md mb-2 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B87908] animate-pulse" />
              <span className="text-[#B87908] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                MEET YOUR PHYSIOTHERAPIST
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#24190F] tracking-tight leading-[1.1] font-serif">
              Expertise That{' '}
              <span className="bg-gradient-to-r from-[#B87908] via-[#D99B24] to-[#24190F] bg-clip-text text-transparent block sm:inline">
                Moves With You.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#65594B] font-normal leading-relaxed max-w-xl text-balance">
              Personalized physiotherapy focused on restoring natural movement, eliminating chronic pain, and rebuilding lifelong functional performance.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:from-[#A06806] hover:to-[#C48A1D] text-white font-bold text-base shadow-lg shadow-[#B87908]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleScrollToProfile}
                className="px-8 py-4 rounded-2xl bg-white hover:bg-[#FAF4E8] text-[#24190F] border border-[#EAD9B7] font-bold text-base shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>View Clinical Profile</span>
                <ChevronDown className="w-4 h-4 text-[#B87908] group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Doctor Hero Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Photo Card Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-[#EAD9B7] bg-white shadow-2xl p-3 group">
                <div className="relative rounded-2xl overflow-hidden bg-[#FAF4E8] h-[400px] sm:h-[460px]">
                  <img
                    src={doctorPhoto}
                    alt={DOCTOR_INFO.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24190F]/80 via-transparent to-transparent" />

                  {/* Doctor Info Floating Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EAD9B7] shadow-md flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF4E8] text-[#B87908] border border-[#EAD9B7] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-[#B87908]" />
                    </div>
                    <div>
                      <h4 className="text-[#24190F] font-black text-sm leading-tight font-serif">
                        {DOCTOR_INFO.name}
                      </h4>
                      <p className="text-[#B87908] text-xs font-bold mt-0.5">
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


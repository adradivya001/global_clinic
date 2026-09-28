import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
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
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] overflow-hidden bg-[#060b13] flex items-center justify-center pt-32 pb-20 font-sans">
      {/* 1. Atmospheric Dark & Cyan/Gold Gradients */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(6,11,19,0.92) 0%, rgba(10,17,30,0.85) 50%, rgba(6,11,19,0.96) 100%)',
        }}
      />
      <div className="absolute -top-[10%] right-[10%] w-[50%] h-[60%] rounded-full blur-[140px] bg-[#168DD0]/15 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-[10%] w-[40%] h-[50%] rounded-full blur-[140px] bg-[#F5B400]/10 pointer-events-none z-10" />

      {/* Top and Bottom Vignette */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-[#060b13]/80 via-transparent to-[#060b13]" />

      {/* 2. Main Split Hero Container */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase">
                MEET YOUR PHYSIOTHERAPIST
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12]">
              Expertise That{' '}
              <span className="text-gold-gradient block sm:inline">Moves With You.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-xl text-balance">
              Personalized physiotherapy focused on helping you move better, recover with confidence and return to the activities that matter to you.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleScrollToProfile}
                className="px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-500 font-semibold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>View Profile</span>
                <ChevronDown className="w-4 h-4 text-amber-400 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Doctor Hero Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle Ambient Glow behind Photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#168DD0]/30 to-[#F5B400]/20 rounded-[32px] blur-2xl opacity-70 transform -rotate-3" />

              {/* Photo Card Frame */}
              <div className="relative rounded-[28px] overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md shadow-2xl p-3 group">
                <div className="relative rounded-[22px] overflow-hidden bg-[#041326] h-[400px] sm:h-[460px]">
                  <img
                    src={doctorPhoto}
                    alt={DOCTOR_INFO.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041326] via-[#041326]/20 to-transparent" />

                  {/* Doctor Info Floating Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#060b13]/90 backdrop-blur-md border border-white/10 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#086B9F] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#086B9F]" />
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-sm leading-tight">
                        {DOCTOR_INFO.name}
                      </h4>
                      <p className="text-[#F5B400] text-xs font-semibold mt-0.5">
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

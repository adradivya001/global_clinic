import React from 'react';
import { ArrowRight, Star, Clock, MapPin, ShieldCheck, Sparkles, Phone, Award, CheckCircle2, Activity } from 'lucide-react';
import { CLINIC_INFO, DOCTOR_INFO } from '../data/clinicData';
import facilityImg from '../assets/clinic_facility_treatment.jpg';
import doctorPhoto from '../assets/doctor_photo.png';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section
      data-hero
      className="relative w-full min-h-[92vh] lg:min-h-screen overflow-hidden bg-gradient-to-b from-[#F3F7F4] via-[#F8F9FA] to-[#FAF8F5] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-20 font-sans"
    >
      {/* 1. LUXURY LIGHT ATMOSPHERE WITH EMERALD & COPPER GLOWS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 left-10 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[140px] animate-pulse-subtle" />
        <div className="absolute top-1/4 right-5 w-[650px] h-[650px] bg-orange-100/40 rounded-full blur-[160px]" />
        <div className="absolute -bottom-10 left-1/3 w-[550px] h-[550px] bg-teal-100/40 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-5 w-[300px] h-[300px] bg-emerald-50/70 rounded-full blur-[120px]" />
        
        {/* Subtle geometric dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#059669_0.8px,transparent_0.8px)] [background-size:28px_28px] opacity-[0.035]" />
      </div>

      {/* 2. MAIN HERO CONTAINER */}
      <div className="relative z-10 w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: HERO HEADLINE & CALL TO ACTIONS */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Live Availability Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-emerald-200/80 shadow-xs">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="text-emerald-800 font-extrabold text-xs uppercase tracking-widest">
                Accepting Patients Today
              </span>
              <span className="text-zinc-300">•</span>
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {CLINIC_INFO.city} Center
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-emerald-700 block">
                {CLINIC_INFO.name}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-[1.08]">
                Precision Physical Healing.{' '}
                <span className="bg-gradient-to-r from-emerald-600 via-emerald-800 to-zinc-900 bg-clip-text text-transparent block mt-1">
                  Lifelong Active Mobility.
                </span>
              </h1>
            </div>

            {/* Description Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-xl">
              Anantapur's premier advanced rehabilitation center led by <strong className="text-zinc-900 font-bold">{DOCTOR_INFO.name}</strong>. Combining 18 evidence-based electrotherapy modalities, spinal decompression, and targeted movement re-education for lasting recovery.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-500 hover:to-emerald-700 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-700/25 hover:shadow-emerald-700/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Book Clinical Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="px-7 py-4 rounded-2xl bg-white hover:bg-emerald-50/50 text-zinc-900 hover:text-emerald-800 border border-zinc-200 hover:border-emerald-300 font-bold text-sm uppercase tracking-wider shadow-xs transition-all flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-md"
              >
                <span>Explore 18 Modalities</span>
                <ArrowRight className="w-4 h-4 text-emerald-700" />
              </button>
            </div>

            {/* Consolidated Clinical Trust Ribbon */}
            <div className="grid grid-cols-3 gap-2.5 pt-6 border-t border-zinc-200/90 max-w-lg">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 border border-zinc-200/90 backdrop-blur-xs shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-xs font-black text-zinc-900 leading-none">100% Supervised</span>
                  <span className="text-[10px] text-zinc-500 font-medium">1:1 Clinical Care</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 border border-zinc-200/90 backdrop-blur-xs shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-orange-50 text-orange-700 flex items-center justify-center shrink-0 border border-orange-100">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-xs font-black text-zinc-900 leading-none">MPT Sports Med</span>
                  <span className="text-[10px] text-zinc-500 font-medium">Lead Specialist</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 border border-zinc-200/90 backdrop-blur-xs shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-xs font-black text-zinc-900 leading-none">9 AM – 9 PM</span>
                  <span className="text-[10px] text-zinc-500 font-medium">Open Mon – Sun</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: ATTRACTIVE COMPOSITE HERO IMAGE */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Layered Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-zinc-100 group">
              
              {/* Primary High-Resolution Clinical Photography */}
              <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden">
                <img
                  src={facilityImg}
                  alt="Global Physiotherapy Clinic Facility & Treatment"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Gentle Gradient Scrim for crisp text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/20" />
              </div>

              {/* Bottom Image Caption Glass Bar */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={doctorPhoto}
                    alt={DOCTOR_INFO.name}
                    className="w-12 h-12 rounded-xl object-cover object-top border-2 border-white shadow-md shrink-0"
                  />
                  <div>
                    <div className="text-xs font-black text-zinc-900">
                      {DOCTOR_INFO.name}
                    </div>
                    <div className="text-[10px] text-emerald-700 font-bold">
                      Clinical Director • MPT Sports Medicine
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200">
                  <Star className="w-3.5 h-3.5 fill-orange-600 text-orange-600" />
                  <span className="text-xs font-black text-zinc-900">4.9 / 5.0</span>
                </div>
              </div>

            </div>

            {/* FLOATING TOP-RIGHT BADGE: 18+ Verified Modalities */}
            <div className="absolute -top-3.5 -right-3.5 bg-white/95 backdrop-blur-md border border-emerald-200 rounded-2xl p-3 shadow-xl hidden sm:flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-black text-zinc-900 leading-tight">18 Modalities</div>
                <div className="text-[10px] text-emerald-800 font-bold">100% Supervised Care</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

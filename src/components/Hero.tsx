import React from 'react';
import { ArrowRight, Star, Clock, MapPin, Play } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import heroBg from '../assets/hero_bg.png';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section
      data-hero
      className="relative w-full min-h-screen overflow-hidden bg-[#060b13] flex items-center justify-center pt-28 pb-16"
    >
      {/* 1. CINEMATIC BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 bg-[#060b13]">
        <img
          src={heroBg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            objectPosition: 'center'
          }}
        />
      </div>

      {/* 2. DARK GRADIENT OVERLAY */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(135deg, rgba(6,11,19,0.6) 0%, rgba(10,17,30,0.3) 50%, rgba(6,11,19,0.6) 100%)',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      ></div>

      {/* Top and Bottom Subtle Vignette */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(6,11,19,0.8) 0%, transparent 40%, transparent 70%, rgba(6,11,19,1) 100%)',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      ></div>

      {/* 3. CENTERED HERO CONTENT CONTAINER (CONSTRAINED INNER CONTENT AT Z-20) */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-xl lg:max-w-2xl space-y-8">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-widest uppercase">
              {CLINIC_INFO.positioning}
            </span>
          </div>

          {/* Clinic Name */}
          <h2 className="text-xl sm:text-2xl font-medium text-slate-200 mb-1">
            Welcome to <span className="text-white font-bold">{CLINIC_INFO.name}</span>
          </h2>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] py-2">
            Move Better.{' '}
            <span className="text-gold-gradient block mt-1 pb-2">Live Stronger.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
            Personalised physiotherapy care in Anantapur to reduce pain, restore movement and help you return to the life you love.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onBookClick}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreClick}
              className="px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-slate-600"
            >
              <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Explore Treatments</span>
            </button>
          </div>

          {/* Quick Stats Bar at Hero Bottom */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400">
                <span className="text-2xl font-black text-white">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Google Reviews</p>
            </div>

            <div className="space-y-1">
              <div className="text-2xl font-black text-white flex items-center gap-1">
                <span>6+</span>
                <span className="text-amber-400 text-base">Years</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Clinical Care</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-200 text-sm font-semibold">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>9 AM – 9 PM</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Clinic Hours</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-200 text-sm font-semibold">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">Housing Board</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Anantapur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

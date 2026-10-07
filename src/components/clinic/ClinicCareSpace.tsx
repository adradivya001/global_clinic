import React from 'react';
import { Sparkles, Armchair, Activity, ShieldCheck, UserCheck } from 'lucide-react';
import heroBg from '../../assets/hero_bg.png';

export const ClinicCareSpace: React.FC = () => {
  const careSpaces = [
    {
      title: 'Consultation & Assessment Suite',
      description: 'A quiet, private setting for comprehensive diagnostic examination, posture evaluation, and case history review.',
      icon: Armchair,
      accent: 'text-emerald-800 bg-emerald-50 border-emerald-200',
    },
    {
      title: 'Dedicated Treatment Stations',
      description: 'Clean, sanitized therapy tables equipped for computerized spinal decompression and focused manual mobilization.',
      icon: ShieldCheck,
      accent: 'text-orange-800 bg-orange-50 border-orange-200',
    },
    {
      title: 'Kinetic Movement & Gym Space',
      description: 'Spacious exercise area featuring parallel bars, balance platforms, and targeted resistance equipment.',
      icon: Activity,
      accent: 'text-teal-800 bg-teal-50 border-teal-200',
    },
    {
      title: 'Comfort-First Environment',
      description: 'Maintained to strict clinical hygiene and safety standards to guarantee a positive rehabilitation experience.',
      icon: UserCheck,
      accent: 'text-stone-800 bg-stone-100 border-stone-200',
    },
  ];

  return (
    <section id="care-space" className="py-20 lg:py-28 bg-[#F4F7F4] relative overflow-hidden font-sans border-t border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>PATIENT CARE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15] mb-4">
            A Space Focused on Your Care.
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
            Every part of Global Physiotherapy Clinic is designed to provide a clean, comfortable, and focused environment for physical recovery.
          </p>
        </div>

        {/* 2-Column: Large Visual Showcase on Left + Dedicated Care Spaces on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Atmospheric Visual Showcase */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-stone-200 shadow-xl bg-stone-900 min-h-[420px] flex flex-col justify-end group">
            <img
              src={heroBg}
              alt="Global Physiotherapy Clinic Patient Environment"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-75 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent pointer-events-none" />

            <div className="relative z-10 p-8 sm:p-10">
              <span className="px-3.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                PATIENT ENVIRONMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-3">
                Designed Around the Patient Experience.
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-lg">
                From your initial assessment to progressive strength rebuilding, the clinic provides a peaceful and dedicated space for health restoration.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Supporting Care Space Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {careSpaces.map((space, idx) => {
              const IconComponent = space.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-4 ${space.accent}`}>
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    <h4 className="text-base font-black text-stone-900 mb-2 leading-snug">
                      {space.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {space.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

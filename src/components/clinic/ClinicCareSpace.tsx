import React from 'react';
import { Sparkles, Armchair, Activity, ShieldCheck, UserCheck } from 'lucide-react';
import heroBg from '../../assets/hero_bg.png';

export const ClinicCareSpace: React.FC = () => {
  const careSpaces = [
    {
      title: 'Consultation & Assessment Suite',
      description: 'A quiet, private setting for comprehensive diagnostic examination, posture evaluation, and case history review.',
      icon: Armchair,
      accent: 'text-[#B87908] bg-[#FAF4E8] border-[#EAD9B7]',
    },
    {
      title: 'Dedicated Treatment Stations',
      description: 'Clean, sanitized therapy tables equipped for computerized spinal decompression and focused manual mobilization.',
      icon: ShieldCheck,
      accent: 'text-[#B87908] bg-[#FAF4E8] border-[#EAD9B7]',
    },
    {
      title: 'Kinetic Movement & Gym Space',
      description: 'Spacious exercise area featuring parallel bars, balance platforms, and targeted resistance equipment.',
      icon: Activity,
      accent: 'text-[#B87908] bg-[#FAF4E8] border-[#EAD9B7]',
    },
    {
      title: 'Comfort-First Environment',
      description: 'Maintained to strict clinical hygiene and safety standards to guarantee a positive rehabilitation experience.',
      icon: UserCheck,
      accent: 'text-[#B87908] bg-[#FAF4E8] border-[#EAD9B7]',
    },
  ];

  return (
    <section id="care-space" className="py-20 lg:py-28 bg-[#FAF4E8] relative overflow-hidden font-sans border-t border-[#EAD9B7]/60">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8EAC9] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
            <span>PATIENT CARE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.15] mb-4">
            A Space Focused on Your Care.
          </h2>

          <p className="text-[#65594B] text-base sm:text-lg leading-relaxed font-normal">
            Every part of Global Physiotherapy Clinic is designed to provide a clean, comfortable, and focused environment for physical recovery.
          </p>
        </div>

        {/* 2-Column: Large Visual Showcase on Left + Dedicated Care Spaces on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Atmospheric Visual Showcase */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#EAD9B7] shadow-xl bg-[#24190F] min-h-[420px] flex flex-col justify-end group">
            <img
              src={heroBg}
              alt="Global Physiotherapy Clinic Patient Environment"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-75 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#24190F] via-[#24190F]/40 to-transparent pointer-events-none" />

            <div className="relative z-10 p-8 sm:p-10">
              <span className="px-3.5 py-1 rounded-full bg-[#24190F]/80 backdrop-blur-md border border-white/20 text-[#D99B24] text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                PATIENT ENVIRONMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug mb-3">
                Designed Around the Patient Experience.
              </h3>
              <p className="text-[#FAF4E8]/90 text-sm sm:text-base leading-relaxed max-w-lg">
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
                  className="bg-white rounded-3xl p-6 border border-[#EAD9B7] shadow-sm hover:shadow-md hover:border-[#B87908] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-4 ${space.accent}`}>
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    <h4 className="text-base font-serif font-bold text-[#24190F] mb-2 leading-snug">
                      {space.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#65594B] leading-relaxed">
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


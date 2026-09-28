import React from 'react';
import { Sparkles, Armchair, Activity, ShieldCheck, UserCheck } from 'lucide-react';
import heroBg from '../../assets/hero_bg.png';

export const ClinicCareSpace: React.FC = () => {
  const careSpaces = [
    {
      title: 'Reception & Consultation Area',
      description: 'A welcoming initial point of contact for private, unhurried evaluation and case history review.',
      icon: Armchair,
      accent: 'text-[#086B9F] bg-[#086B9F]/10 border-[#086B9F]/20',
    },
    {
      title: 'Dedicated Treatment Space',
      description: 'Clean, private examination and treatment areas designed for focused manual therapy and clinical care.',
      icon: ShieldCheck,
      accent: 'text-[#D9A400] bg-[#F5B400]/10 border-[#F5B400]/25',
    },
    {
      title: 'Rehabilitation & Movement Area',
      description: 'Spacious floor setting designed for guided mobility exercises, posture correction, and active rehabilitation.',
      icon: Activity,
      accent: 'text-[#1769C2] bg-[#1769C2]/10 border-[#1769C2]/20',
    },
    {
      title: 'Patient-Centered Environment',
      description: 'Maintained to high cleanliness and hygiene standards to ensure a comfortable recovery experience.',
      icon: UserCheck,
      accent: 'text-[#102A43] bg-[#102A43]/10 border-[#102A43]/20',
    },
  ];

  return (
    <section id="care-space" className="py-20 lg:py-28 bg-[#F7FAFD] relative overflow-hidden font-sans border-t border-[#08213D]/6">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#086B9F]" />
            <span>PATIENT CARE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-4">
            A Space Focused on Your Care.
          </h2>

          <p className="text-[#526A84] text-base sm:text-lg leading-relaxed font-normal">
            Every part of Global Physiotherapy Clinic is designed to provide a clean, comfortable and focused environment for physiotherapy and rehabilitation.
          </p>
        </div>

        {/* 2-Column: Large Visual Showcase on Left + Dedicated Care Spaces on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Atmospheric Visual Showcase */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#08213D]/10 shadow-[0_12px_40px_rgba(8,33,61,0.08)] bg-[#08213D] min-h-[420px] flex flex-col justify-end group">
            <img
              src={heroBg}
              alt="Global Physiotherapy Clinic Patient Environment"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#041326] via-[#041326]/50 to-transparent pointer-events-none" />

            <div className="relative z-10 p-8 sm:p-10">
              <span className="px-3.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                PATIENT ENVIRONMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                Designed Around the Patient Experience.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                From consultation to rehabilitation, the clinic environment is intended to provide a calm and focused setting for care.
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
                  className="bg-white rounded-2xl p-6 border border-[#08213D]/6 shadow-[0_4px_20px_rgba(8,33,61,0.03)] hover:shadow-md hover:border-[#168DD0]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${space.accent}`}>
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>

                    <h4 className="text-sm font-bold text-[#07182D] mb-2 leading-snug">
                      {space.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#526A84] leading-relaxed">
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

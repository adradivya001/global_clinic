import React from 'react';
import { Target, Activity, UserCheck, ShieldCheck } from 'lucide-react';
import { DOCTOR_INFO } from '../../data/clinicData';

export const TreatmentPhilosophy: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Root-Cause Assessment',
      desc: 'Identifying underlying biomechanical and structural dysfunctions rather than merely masking temporary symptoms.',
      accent: 'border-[#168DD0]/30 bg-[#168DD0]/10 text-sky-400',
    },
    {
      icon: Activity,
      title: 'Active Functional Recovery',
      desc: 'Prioritizing guided exercise rehabilitation and targeted mobility drills to rebuild strength, range of motion, and stability.',
      accent: 'border-[#F5B400]/30 bg-[#F5B400]/10 text-amber-400',
    },
    {
      icon: UserCheck,
      title: 'Patient-Centered Guidance',
      desc: 'Ensuring patients thoroughly understand their condition, movement mechanics, and self-management strategies for long-term health.',
      accent: 'border-[#1769C2]/30 bg-[#1769C2]/10 text-blue-400',
    },
    {
      icon: ShieldCheck,
      title: 'Evidence-Backed Protocols',
      desc: 'Applying sports medicine principles and certified manual therapy techniques tailored to each individual patient.',
      accent: 'border-white/20 bg-white/5 text-slate-200',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#041326] relative overflow-hidden font-sans text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#168DD0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F5B400]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3 text-[#F5B400] font-bold text-xs tracking-[0.2em] uppercase">
            CLINICAL PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Professional Focus
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {DOCTOR_INFO.quote}
          </p>
        </div>

        {/* 4 Professional Focus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/25 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${pillar.accent}`}>
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="w-8 h-[2px] bg-white/20 group-hover:w-full group-hover:bg-[#F5B400] transition-all duration-500 mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Target, Activity, UserCheck, ShieldCheck } from 'lucide-react';
import { DOCTOR_INFO } from '../../data/clinicData';

export const TreatmentPhilosophy: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Root-Cause Assessment',
      desc: 'Identifying underlying biomechanical and structural dysfunctions rather than merely masking temporary symptoms.',
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
    {
      icon: Activity,
      title: 'Active Functional Recovery',
      desc: 'Prioritizing guided exercise rehabilitation and targeted mobility drills to rebuild strength, range of motion, and stability.',
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
    {
      icon: UserCheck,
      title: 'Patient-Centered Guidance',
      desc: 'Ensuring patients thoroughly understand their condition, movement mechanics, and self-management strategies for long-term health.',
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
    {
      icon: ShieldCheck,
      title: 'Evidence-Backed Protocols',
      desc: 'Applying sports medicine principles and certified manual therapy techniques tailored to each individual patient.',
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF4E8] relative overflow-hidden font-sans border-t border-[#EAD9B7]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F8EAC9]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FFFDF8]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>CLINICAL PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15] mb-4 font-serif">
            Professional Focus
          </h2>
          <p className="text-[#65594B] text-sm sm:text-base leading-relaxed italic font-serif">
            "{DOCTOR_INFO.quote}"
          </p>
        </div>

        {/* 4 Professional Focus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#EAD9B7] rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform ${pillar.accent}`}>
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <h3 className="text-lg font-black text-[#24190F] mb-2.5 font-serif">
                    {pillar.title}
                  </h3>

                  <p className="text-[#65594B] text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="w-10 h-[3px] bg-[#EAD9B7] group-hover:w-full group-hover:bg-[#B87908] transition-all duration-500 mt-6 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


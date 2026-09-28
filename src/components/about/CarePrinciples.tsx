import React from 'react';
import { Search, ShieldCheck, Activity, BookOpenCheck } from 'lucide-react';

export const CarePrinciples: React.FC = () => {
  const principles = [
    {
      icon: Search,
      title: 'Individual Assessment',
      desc: 'Conducting thorough movement and functional evaluations to understand mechanical causes rather than isolated pain points.',
      accent: 'border-[#168DD0]/20 bg-[#168DD0]/5 text-[#086B9F]',
    },
    {
      icon: ShieldCheck,
      title: 'Evidence-Based Care',
      desc: 'Utilizing clinically verified physiotherapy techniques, joint mobilization, and progressive exercise protocols.',
      accent: 'border-[#F5B400]/25 bg-[#F5B400]/5 text-[#D9A400]',
    },
    {
      icon: Activity,
      title: 'Functional Movement',
      desc: 'Focusing on real-world movement restoration so patients can return to daily activities with strength and stability.',
      accent: 'border-[#1769C2]/20 bg-[#1769C2]/5 text-[#1769C2]',
    },
    {
      icon: BookOpenCheck,
      title: 'Patient Education',
      desc: 'Providing clear guidance, ergonomic advice, and home exercise knowledge to ensure sustainable long-term recovery.',
      accent: 'border-[#102A43]/20 bg-[#102A43]/5 text-[#102A43]',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden font-sans">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase mb-4">
            CLINICAL VALUES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-3">
            Our Care Principles
          </h2>

          <p className="text-[#526A84] text-base leading-relaxed">
            The foundational standards that guide every evaluation, treatment recommendation, and rehabilitation plan.
          </p>
        </div>

        {/* 4 Care Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {principles.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7FAFD] rounded-2xl p-7 lg:p-8 border border-[#08213D]/6 hover:border-[#168DD0]/40 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-start"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${p.accent}`}>
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-base font-extrabold text-[#07182D] mb-3">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#526A84] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

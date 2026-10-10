import React from 'react';
import { Search, ShieldCheck, Activity, BookOpenCheck } from 'lucide-react';

export const CarePrinciples: React.FC = () => {
  const principles = [
    {
      icon: Search,
      title: 'Individual Assessment',
      desc: 'Conducting thorough movement and functional evaluations to understand mechanical causes rather than isolated symptoms.',
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
    {
      icon: ShieldCheck,
      title: 'Evidence-Based Care',
      desc: 'Utilizing clinically verified physical therapy techniques, joint mobilization, and progressive exercise protocols.',
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
    {
      icon: Activity,
      title: 'Functional Movement',
      desc: 'Focusing on real-world movement restoration so patients can return to daily activities with strength and stability.',
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
    {
      icon: BookOpenCheck,
      title: 'Patient Education',
      desc: 'Providing clear guidance, ergonomic advice, and home exercise knowledge to ensure sustainable long-term recovery.',
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF4E8] relative overflow-hidden font-sans border-t border-[#EAD9B7]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>CLINICAL VALUES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15] mb-3">
            Our Care Principles
          </h2>

          <p className="text-[#65594B] text-base leading-relaxed">
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
                className="bg-[#FFFDF8] rounded-3xl p-7 lg:p-8 border border-[#EAD9B7] hover:border-[#B87908] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${p.accent}`}>
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-black text-[#24190F] mb-2.5">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#65594B] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="w-8 h-[2px] bg-[#EAD9B7] mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

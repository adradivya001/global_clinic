import React from 'react';
import { Building2, UserCheck, HeartHandshake } from 'lucide-react';

export const AppreciationThemes: React.FC = () => {
  const themes = [
    {
      icon: Building2,
      title: 'PROFESSIONAL ENVIRONMENT',
      description: "Patients mention the clinic's cleanliness, maintenance and modern facilities.",
      accent: 'border-[#168DD0]/20 bg-[#168DD0]/5 text-[#086B9F]',
    },
    {
      icon: UserCheck,
      title: 'PERSONALIZED ATTENTION',
      description: 'Reviews describe patients feeling that their concerns were understood.',
      accent: 'border-[#F5B400]/25 bg-[#F5B400]/5 text-[#D9A400]',
    },
    {
      icon: HeartHandshake,
      title: 'CONFIDENCE & CARE',
      description: 'A review specifically mentions receiving confidence from the clinician.',
      accent: 'border-[#1769C2]/20 bg-[#1769C2]/5 text-[#1769C2]',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#F7FAFD] relative overflow-hidden font-sans border-t border-[#08213D]/6">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase mb-3">
            REVIEW OBSERVATIONS
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07182D] tracking-tight leading-[1.2]">
            What Patients Appreciate
          </h2>
          <p className="text-[#526A84] text-sm sm:text-base mt-2">
            Key themes reflected directly in patient feedback and clinic experiences.
          </p>
        </div>

        {/* 3 Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {themes.map((theme, idx) => {
            const IconComponent = theme.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 lg:p-8 border border-[#08213D]/6 shadow-[0_4px_20px_rgba(8,33,61,0.03)] hover:shadow-md hover:border-[#168DD0]/30 transition-all duration-300 flex flex-col items-start"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${theme.accent}`}>
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-xs font-black tracking-[0.15em] text-[#07182D] mb-3 uppercase">
                  {theme.title}
                </h3>

                <p className="text-[#526A84] text-sm leading-relaxed">
                  {theme.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

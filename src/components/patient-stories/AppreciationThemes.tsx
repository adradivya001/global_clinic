import React from 'react';
import { Building2, UserCheck, HeartHandshake } from 'lucide-react';

export const AppreciationThemes: React.FC = () => {
  const themes = [
    {
      icon: Building2,
      title: 'PROFESSIONAL ENVIRONMENT',
      description: "Patients frequently highlight the clinic's cleanliness, advanced equipment, and comfortable atmosphere.",
      accent: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    },
    {
      icon: UserCheck,
      title: 'PERSONALIZED ATTENTION',
      description: 'Reviews emphasize that clinical history and individual pain points are thoroughly listened to and understood.',
      accent: 'border-orange-200 bg-orange-50 text-orange-800',
    },
    {
      icon: HeartHandshake,
      title: 'CONFIDENCE & CARE',
      description: 'Patients specifically commend receiving reassurance, clear education, and genuine dedicated support from Dr. Bhavendra.',
      accent: 'border-teal-200 bg-teal-50 text-teal-800',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#FBFBFA] relative overflow-hidden font-sans border-t border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-3 shadow-sm">
            <span>REVIEW OBSERVATIONS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight leading-[1.2]">
            What Patients Appreciate
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Key clinical strengths reflected directly in verified patient feedback.
          </p>
        </div>

        {/* 3 Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {themes.map((theme, idx) => {
            const IconComponent = theme.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 lg:p-8 border border-stone-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col items-start"
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 ${theme.accent}`}>
                  <IconComponent className="w-6 h-6 stroke-[2.2]" />
                </div>

                <h3 className="text-xs font-black tracking-[0.15em] text-stone-900 mb-3 uppercase">
                  {theme.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed">
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

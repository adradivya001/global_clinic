import React from 'react';
import { UserCheck, Activity, BookOpen, Target } from 'lucide-react';

export const WhatWeBelieve: React.FC = () => {
  const beliefs = [
    {
      icon: UserCheck,
      title: 'Individual Concerns',
      desc: 'Every patient arrives with unique pain points, daily routines, and physical history that require attentive listening.',
    },
    {
      icon: Activity,
      title: 'Functional Movement',
      desc: 'Rehabilitation should focus on restoring natural movement patterns and day-to-day functional independence.',
    },
    {
      icon: BookOpen,
      title: 'Patient Education',
      desc: 'Understanding your condition and biomechanics is fundamental to building lasting recovery and confidence.',
    },
    {
      icon: Target,
      title: 'Practical Goals',
      desc: 'Care should be structured around realistic milestones tailored to what you want to achieve.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF8] relative overflow-hidden font-sans border-t border-[#EAD9B7]">
      {/* Background Lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F8EAC9]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#FAF4E8]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>OUR BELIEF</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15] mb-4">
            Care Built Around the Individual.
          </h2>

          <p className="text-[#65594B] text-base sm:text-lg leading-relaxed font-normal">
            Physiotherapy is most effective when it addresses the person, not just the symptom. We believe recovery is rooted in personalized attention, functional movement, and empowering patients with practical understanding.
          </p>
        </div>

        {/* 4 Belief Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beliefs.map((belief, idx) => {
            const IconComponent = belief.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#EAD9B7] rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#B87908] flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] flex items-center justify-center text-[#B87908] mb-6 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <h3 className="text-lg font-black text-[#24190F] mb-2.5">
                    {belief.title}
                  </h3>

                  <p className="text-[#65594B] text-xs sm:text-sm leading-relaxed">
                    {belief.desc}
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

import React from 'react';
import { UserCheck, Activity, BookOpen, Target, Heart } from 'lucide-react';

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
    <section className="py-20 lg:py-28 bg-[#041326] relative overflow-hidden font-sans text-white">
      {/* Background Lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#168DD0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#F5B400]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#F5B400]" />
            <span className="text-[#F5B400] font-bold text-xs tracking-[0.2em] uppercase">
              OUR BELIEF
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Care Built Around the Individual.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
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
                className="bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/25 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {belief.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {belief.desc}
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

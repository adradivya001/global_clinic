import React from 'react';
import { MessageSquare, Activity, FileText, CheckCircle2 } from 'lucide-react';

export const WhatToExpect: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Share Your Concerns',
      desc: 'Discuss your symptoms, medical history, daily routines, and specific movement difficulties with the clinician.',
      icon: MessageSquare,
      accent: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    },
    {
      number: '02',
      title: 'Movement Assessment',
      desc: 'Undergo targeted orthopedic, postural, and functional movement testing to evaluate joint range and mechanics.',
      icon: Activity,
      accent: 'border-orange-200 bg-orange-50 text-orange-800',
    },
    {
      number: '03',
      title: 'Discuss Findings',
      desc: 'Receive clear, understandable explanations regarding the underlying mechanical factors contributing to your pain.',
      icon: FileText,
      accent: 'border-teal-200 bg-teal-50 text-teal-800',
    },
    {
      number: '04',
      title: 'Understand Care Plan',
      desc: 'Review a customized rehabilitation approach outlining exercise therapy, manual care, and recovery milestones.',
      icon: CheckCircle2,
      accent: 'border-stone-300 bg-stone-100 text-stone-800',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden font-sans border-t border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>INITIAL CONSULTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15] mb-3">
            What Happens During Your First Visit?
          </h2>

          <p className="text-stone-600 text-base leading-relaxed">
            A structured, comfortable consultation designed to give you clarity and confidence from day one.
          </p>
        </div>

        {/* 4 First Visit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-3xl p-7 border border-stone-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${step.accent}`}>
                      <IconComponent className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-2xl font-black text-stone-300 group-hover:text-emerald-700 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className="w-10 h-[3px] bg-stone-200 group-hover:w-full group-hover:bg-emerald-600 transition-all duration-500 mt-6 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

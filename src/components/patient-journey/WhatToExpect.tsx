import React from 'react';
import { MessageSquare, Activity, FileText, CheckCircle2 } from 'lucide-react';

export const WhatToExpect: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Share Your Concerns',
      desc: 'Discuss your symptoms, medical history, daily routines, and specific movement difficulties with the clinician.',
      icon: MessageSquare,
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
    {
      number: '02',
      title: 'Movement Assessment',
      desc: 'Undergo targeted orthopedic, postural, and functional movement testing to evaluate joint range and mechanics.',
      icon: Activity,
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
    {
      number: '03',
      title: 'Discuss Findings',
      desc: 'Receive clear, understandable explanations regarding the underlying mechanical factors contributing to your pain.',
      icon: FileText,
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
    {
      number: '04',
      title: 'Understand Care Plan',
      desc: 'Review a customized rehabilitation approach outlining exercise therapy, manual care, and recovery milestones.',
      icon: CheckCircle2,
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF4E8] relative overflow-hidden font-sans border-t border-[#EAD9B7]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>INITIAL CONSULTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15] mb-3 font-serif">
            What Happens During Your First Visit?
          </h2>

          <p className="text-[#65594B] text-base leading-relaxed">
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
                className="bg-white rounded-3xl p-7 border border-[#EAD9B7] shadow-sm hover:shadow-xl hover:border-[#B87908]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${step.accent}`}>
                      <IconComponent className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-2xl font-black text-[#EAD9B7] group-hover:text-[#B87908] transition-colors font-serif">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-[#24190F] mb-2 group-hover:text-[#B87908] transition-colors font-serif">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#65594B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className="w-10 h-[3px] bg-[#EAD9B7] group-hover:w-full group-hover:bg-[#B87908] transition-all duration-500 mt-6 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


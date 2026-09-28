import React from 'react';
import { MessageSquare, Activity, FileText, CheckCircle2 } from 'lucide-react';

export const WhatToExpect: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Share Your Concerns',
      desc: 'Discuss your symptoms, medical history, daily routines, and specific movement difficulties with the clinician.',
      icon: MessageSquare,
      accent: 'border-[#168DD0]/20 bg-[#168DD0]/5 text-[#086B9F]',
    },
    {
      number: '02',
      title: 'Movement Assessment',
      desc: 'Undergo targeted orthopedic, postural, and functional movement testing to evaluate joint range and mechanics.',
      icon: Activity,
      accent: 'border-[#F5B400]/25 bg-[#F5B400]/5 text-[#D9A400]',
    },
    {
      number: '03',
      title: 'Discuss Findings',
      desc: 'Receive clear, understandable explanations regarding the underlying mechanical factors contributing to your pain.',
      icon: FileText,
      accent: 'border-[#1769C2]/20 bg-[#1769C2]/5 text-[#1769C2]',
    },
    {
      number: '04',
      title: 'Understand Care Plan',
      desc: 'Review a customized rehabilitation approach outlining exercise therapy, manual care, and recovery milestones.',
      icon: CheckCircle2,
      accent: 'border-[#102A43]/20 bg-[#102A43]/5 text-[#102A43]',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7FAFD] relative overflow-hidden font-sans border-t border-[#08213D]/6">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase mb-4">
            INITIAL CONSULTATION
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-3">
            What Happens During Your First Visit?
          </h2>

          <p className="text-[#526A84] text-base leading-relaxed">
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
                className="bg-white rounded-2xl p-7 border border-[#08213D]/6 shadow-[0_4px_20px_rgba(8,33,61,0.03)] hover:shadow-lg hover:border-[#168DD0]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${step.accent}`}>
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-2xl font-black text-[#08213D]/15 group-hover:text-[#F5B400] transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-[#07182D] mb-2 group-hover:text-[#086B9F] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#526A84] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className="w-8 h-[2px] bg-[#08213D]/10 group-hover:w-full group-hover:bg-[#F5B400] transition-all duration-500 mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

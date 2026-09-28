import React from 'react';
import { AlertCircle, Layers, ClipboardCheck } from 'lucide-react';

export const SymptomsToAssessment: React.FC = () => {
  const steps = [
    {
      icon: AlertCircle,
      title: '01. Identify Symptoms',
      subtitle: 'Pain, Stiffness, or Weakness',
      desc: 'Recognizing localized aches, reduced range of motion, morning stiffness, or functional fatigue during daily tasks.',
      accent: 'border-[#168DD0]/25 bg-[#168DD0]/10 text-sky-400',
    },
    {
      icon: Layers,
      title: '02. Map to Body Area',
      subtitle: 'Anatomy & Biomechanics',
      desc: 'Understanding the involved joint, tendon, or spinal level helps narrow down mechanical contributors.',
      accent: 'border-[#F5B400]/30 bg-[#F5B400]/10 text-amber-400',
    },
    {
      icon: ClipboardCheck,
      title: '03. Clinical Assessment',
      subtitle: 'Personalized Evaluation',
      desc: 'A professional physiotherapy evaluation determines whether exercise therapy, manual care, or specialist referral is appropriate.',
      accent: 'border-[#1769C2]/25 bg-[#1769C2]/10 text-blue-400',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#041326] relative overflow-hidden font-sans text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#168DD0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#F5B400]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3 text-[#F5B400] font-bold text-xs tracking-[0.2em] uppercase">
            UNDERSTANDING YOUR BODY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            From Symptoms To Assessment
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            How discomfort in specific body areas connects to physical evaluation and tailored recovery planning.
          </p>
        </div>

        {/* 3 Step Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/20 rounded-2xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${step.accent}`}>
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD45A] block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-extrabold text-white tracking-wide mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
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

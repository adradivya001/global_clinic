import React from 'react';
import { HeartPulse, ShieldCheck, Activity } from 'lucide-react';

export const PhysiotherapyHelp: React.FC = () => {
  const points = [
    {
      title: 'PAIN',
      tagline: 'Everyday Activity Impact',
      desc: 'When pain is affecting everyday movement, sleep, work productivity or normal physical activity.',
      icon: <HeartPulse className="w-6 h-6 text-[#F5B400]" />,
      number: '01',
      bgGradient: 'from-amber-500/10 to-transparent',
    },
    {
      title: 'RECOVERY',
      tagline: 'Post-Injury & Post-Surgical Care',
      desc: 'During structured rehabilitation following an acute athletic injury, fracture or surgical procedure.',
      icon: <ShieldCheck className="w-6 h-6 text-[#168DD0]" />,
      number: '02',
      bgGradient: 'from-cyan-500/10 to-transparent',
    },
    {
      title: 'MOVEMENT',
      tagline: 'Mobility & Physical Function',
      desc: 'When joint stiffness, muscle weakness or movement limitations restrict your lifestyle or performance.',
      icon: <Activity className="w-6 h-6 text-[#FFD45A]" />,
      number: '03',
      bgGradient: 'from-amber-400/10 to-transparent',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#041326] relative overflow-hidden font-sans text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#168DD0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#F5B400]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3 text-[#F5B400] font-bold text-xs tracking-[0.2em] uppercase">
            CLINICAL INDICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            When Can Physiotherapy Help?
          </h2>
        </div>

        {/* 3 Minimal Educational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {points.map((point) => (
            <div
              key={point.number}
              className="bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/20 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
            >
              <div>
                {/* Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    {point.icon}
                  </div>
                  <span className="text-2xl font-black text-white/20 group-hover:text-[#F5B400] transition-colors">
                    {point.number}
                  </span>
                </div>

                {/* Title */}
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD45A] block mb-1">
                  {point.tagline}
                </span>
                <h3 className="text-xl font-extrabold text-white tracking-wide mb-3">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className="w-8 h-[2px] bg-white/20 group-hover:w-full group-hover:bg-[#F5B400] transition-all duration-500 mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

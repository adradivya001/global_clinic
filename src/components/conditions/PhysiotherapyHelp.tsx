import React from 'react';
import { HeartPulse, ShieldCheck, Activity } from 'lucide-react';

export const PhysiotherapyHelp: React.FC = () => {
  const points = [
    {
      title: 'PAIN REDUCTION',
      tagline: 'Everyday Activity Impact',
      desc: 'When pain limits your normal spinal movement, sleep quality, work productivity, or athletic capability.',
      icon: <HeartPulse className="w-6 h-6 text-[#B87908]" />,
      number: '01',
      tagColor: 'text-[#B87908] bg-[#FAF4E8] border-[#EAD9B7]',
    },
    {
      title: 'RECOVERY CARE',
      tagline: 'Post-Injury & Orthopaedic Support',
      desc: 'During structured rehabilitation following an acute athletic injury, fracture, tendon tear, or surgical procedure.',
      icon: <ShieldCheck className="w-6 h-6 text-[#B87908]" />,
      number: '02',
      tagColor: 'text-[#B87908] bg-[#FAF4E8] border-[#EAD9B7]',
    },
    {
      title: 'MOVEMENT RESTORATION',
      tagline: 'Mobility & Physical Function',
      desc: 'When persistent joint stiffness, muscle weakness, or postural fatigue restrict your daily independence.',
      icon: <Activity className="w-6 h-6 text-[#B87908]" />,
      number: '03',
      tagColor: 'text-[#B87908] bg-[#FAF4E8] border-[#EAD9B7]',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF4E8] relative overflow-hidden font-sans border-t border-[#EAD9B7]/60">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#F8EAC9]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FFFDF8]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8EAC9] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-xs">
            <span>CLINICAL INDICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.15]">
            When Can Physiotherapy Help?
          </h2>
          <p className="text-[#65594B] text-sm sm:text-base mt-2">
            Recognizing the right moment to initiate structured rehabilitation leads to significantly faster recovery.
          </p>
        </div>

        {/* 3 Minimal Educational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {points.map((point) => (
            <div
              key={point.number}
              className="bg-white border border-[#EAD9B7] rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#B87908] group shadow-sm"
            >
              <div>
                {/* Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {point.icon}
                  </div>
                  <span className="text-2xl font-serif font-bold text-[#B87908]/40 group-hover:text-[#B87908] transition-colors">
                    {point.number}
                  </span>
                </div>

                {/* Title */}
                <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-0.5 rounded-md border mb-2 ${point.tagColor}`}>
                  {point.tagline}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#24190F] tracking-wide mb-3">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-[#65594B] text-xs sm:text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className="w-10 h-[3px] bg-[#EAD9B7] group-hover:w-full group-hover:bg-[#B87908] transition-all duration-500 mt-6 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


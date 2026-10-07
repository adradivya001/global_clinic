import React from 'react';
import { HeartPulse, ShieldCheck, Activity } from 'lucide-react';

export const PhysiotherapyHelp: React.FC = () => {
  const points = [
    {
      title: 'PAIN REDUCTION',
      tagline: 'Everyday Activity Impact',
      desc: 'When pain limits your normal spinal movement, sleep quality, work productivity, or athletic capability.',
      icon: <HeartPulse className="w-6 h-6 text-rose-600" />,
      number: '01',
      tagColor: 'text-rose-700 bg-rose-50 border-rose-200',
    },
    {
      title: 'RECOVERY CARE',
      tagline: 'Post-Injury & Orthopaedic Support',
      desc: 'During structured rehabilitation following an acute athletic injury, fracture, tendon tear, or surgical procedure.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
      number: '02',
      tagColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
    },
    {
      title: 'MOVEMENT RESTORATION',
      tagline: 'Mobility & Physical Function',
      desc: 'When persistent joint stiffness, muscle weakness, or postural fatigue restrict your daily independence.',
      icon: <Activity className="w-6 h-6 text-orange-600" />,
      number: '03',
      tagColor: 'text-orange-800 bg-orange-50 border-orange-200',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] relative overflow-hidden font-sans border-t border-stone-200/80">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>CLINICAL INDICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15]">
            When Can Physiotherapy Help?
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Recognizing the right moment to initiate structured rehabilitation leads to significantly faster recovery.
          </p>
        </div>

        {/* 3 Minimal Educational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {points.map((point) => (
            <div
              key={point.number}
              className="bg-white border border-stone-200/90 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group shadow-sm"
            >
              <div>
                {/* Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {point.icon}
                  </div>
                  <span className="text-2xl font-black text-stone-300 group-hover:text-emerald-700 transition-colors">
                    {point.number}
                  </span>
                </div>

                {/* Title */}
                <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-0.5 rounded-md border mb-2 ${point.tagColor}`}>
                  {point.tagline}
                </span>
                <h3 className="text-xl font-black text-stone-900 tracking-wide mb-3">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className="w-10 h-[3px] bg-stone-200 group-hover:w-full group-hover:bg-emerald-600 transition-all duration-500 mt-6 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'MOVEMENT',
      desc: 'Restore joint kinematics and improve natural movement patterns.',
      icon: <Activity className="w-6 h-6 text-emerald-700" />,
      accent: 'border-emerald-200 bg-emerald-50/50',
    },
    {
      number: '02',
      title: 'RECOVERY',
      desc: 'Alleviate mechanical limitations and rebuild physiological function.',
      icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
      accent: 'border-orange-200 bg-orange-50/50',
    },
    {
      number: '03',
      title: 'STRENGTH',
      desc: 'Develop kinetic capacity, muscular stability, and long-term resilience.',
      icon: <Zap className="w-6 h-6 text-teal-700" />,
      accent: 'border-teal-200 bg-teal-50/50',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FBFBFA] relative overflow-hidden font-sans border-t border-stone-200/80">
      {/* Background Lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>OUR PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15] mb-4">
            Recovery Is More Than Relief.
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
            Reducing pain is only one component of rehabilitation. Meaningful recovery also means restoring joint mobility, rebuilding foundational strength, and helping patients regain permanent confidence.
          </p>
        </div>

        {/* 3 Philosophy Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className={`bg-white border ${pillar.accent} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between group shadow-sm`}
            >
              <div>
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-black text-stone-300 group-hover:text-emerald-700 transition-colors duration-300 tracking-tight font-sans">
                    {pillar.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                    {pillar.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-stone-900 tracking-wider mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom Subtle Accent Bar */}
              <div className="w-10 h-[3px] bg-stone-200 group-hover:w-full group-hover:bg-emerald-600 transition-all duration-500 mt-8 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

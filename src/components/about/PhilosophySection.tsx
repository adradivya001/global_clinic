import React from 'react';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'MOVEMENT',
      desc: 'Restore mobility and improve functional movement.',
      icon: <Activity className="w-6 h-6 text-[#168DD0]" />,
      accentColor: '#168DD0',
    },
    {
      number: '02',
      title: 'RECOVERY',
      desc: 'Reduce limitations and rebuild physical function.',
      icon: <ShieldCheck className="w-6 h-6 text-[#F5B400]" />,
      accentColor: '#F5B400',
    },
    {
      number: '03',
      title: 'STRENGTH',
      desc: 'Build physical capacity, confidence and resilience.',
      icon: <Zap className="w-6 h-6 text-[#FFD45A]" />,
      accentColor: '#FFD45A',
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
              OUR PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Recovery Is More Than Relief.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Reducing pain is only one part of rehabilitation. Meaningful recovery also means restoring movement, rebuilding strength and helping patients regain confidence.
          </p>
        </div>

        {/* 3 Philosophy Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/25 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-black text-white/30 group-hover:text-[#F5B400] transition-colors duration-300 tracking-tight font-sans">
                    {pillar.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-wider mb-3 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom Subtle Accent Bar */}
              <div className="w-10 h-[2px] bg-white/20 group-hover:w-full group-hover:bg-[#F5B400] transition-all duration-500 mt-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

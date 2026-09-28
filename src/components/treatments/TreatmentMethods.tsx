import React from 'react';
import { Dumbbell, HandMetal, Activity, Zap, Compass, RotateCcw } from 'lucide-react';

export const TreatmentMethods: React.FC = () => {
  const methods = [
    {
      icon: Dumbbell,
      title: 'Exercise-Based Rehabilitation',
      desc: 'Progressive active exercise prescription designed to restore muscular support, endurance, and joint stability.',
    },
    {
      icon: HandMetal,
      title: 'Manual Therapy',
      desc: 'Hands-on joint mobilization, capsular release, and soft tissue techniques to reduce stiffness and restore joint mechanics.',
    },
    {
      icon: Activity,
      title: 'Mobility & Range of Motion',
      desc: 'Targeted flexibility and kinetic movement drills to improve joint excursion and alleviate mechanical restrictions.',
    },
    {
      icon: Zap,
      title: 'Targeted Strength Training',
      desc: 'Controlled resistance protocols to rebuild load tolerance in recovering tendons, ligaments, and muscle groups.',
    },
    {
      icon: Compass,
      title: 'Functional Rehabilitation',
      desc: 'Movement retraining aligned with everyday physical activities, work demands, and return-to-sport requirements.',
    },
    {
      icon: RotateCcw,
      title: 'Movement & Posture Correction',
      desc: 'Ergonomic guidance and neuromuscular re-education to eliminate faulty movement patterns that trigger recurrent pain.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#041326] relative overflow-hidden font-sans text-white">
      {/* Background Ambience */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#168DD0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F5B400]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 text-[#F5B400] font-bold text-xs tracking-[0.2em] uppercase">
            THERAPEUTIC MODALITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Treatment Methods
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Evidence-backed physical therapy techniques combined to support targeted, safe, and progressive rehabilitation.
          </p>
        </div>

        {/* 6 Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {methods.map((method, idx) => {
            const IconComponent = method.icon;
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
                    {method.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {method.desc}
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

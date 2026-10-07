import React from 'react';
import { Activity, Zap, Compass, Heart } from 'lucide-react';

export const ProgressSection: React.FC = () => {
  const indicators = [
    {
      title: 'MOVEMENT',
      subtitle: 'Range & Fluidity',
      desc: 'Improved ease of motion and restored joint articulation in daily activities.',
      icon: <Activity className="w-5 h-5 text-emerald-700" />,
      accent: '#059669',
    },
    {
      title: 'STRENGTH',
      subtitle: 'Physical Capacity',
      desc: 'Building muscular capacity, stability, and anti-gravity endurance.',
      icon: <Zap className="w-5 h-5 text-orange-600" />,
      accent: '#ea580c',
    },
    {
      title: 'FUNCTION',
      subtitle: 'Daily Independence',
      desc: 'Returning to meaningful work, sports, and lifestyle activities without pain.',
      icon: <Compass className="w-5 h-5 text-teal-700" />,
      accent: '#0d9488',
    },
    {
      title: 'CONFIDENCE',
      subtitle: 'Fear-Free Motion',
      desc: 'Feeling completely secure and self-assured with your body in every movement.',
      icon: <Heart className="w-5 h-5 text-rose-600" />,
      accent: '#e11d48',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden font-sans border-t border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>MEASURING RECOVERY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15] mb-4">
            Progress Has Many Forms.
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed text-balance">
            Recovery is not measured by pain alone. Meaningful milestones appear in joint range, strength, confidence, and daily function.
          </p>
        </div>

        {/* 4 Visual Progress Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((item) => (
            <div
              key={item.title}
              className="bg-[#FAF8F5] rounded-3xl p-6 border border-stone-200 hover:border-emerald-300 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Circular Progress Ring Icon Graphic */}
                <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-stone-200 mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                  <svg className="w-full h-full -rotate-90 absolute inset-0 p-1" viewBox="0 0 44 44">
                    <circle
                      cx="22"
                      cy="22"
                      r="18"
                      fill="none"
                      stroke="#f1f5f9"
                      strokeWidth="3"
                    />
                    <circle
                      cx="22"
                      cy="22"
                      r="18"
                      fill="none"
                      stroke={item.accent}
                      strokeWidth="3"
                      strokeDasharray="113"
                      strokeDashoffset="30"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="relative z-10">
                    {item.icon}
                  </div>
                </div>

                {/* Subtitle tag */}
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-800 block mb-1">
                  {item.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-lg font-black text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Minimal Animated Horizontal Progress Graphic */}
              <div className="mt-6 pt-4 border-t border-stone-200">
                <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out group-hover:w-full"
                    style={{
                      width: '65%',
                      backgroundColor: item.accent,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

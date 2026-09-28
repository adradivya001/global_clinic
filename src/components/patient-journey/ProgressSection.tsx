import React from 'react';
import { Activity, Zap, Compass, Heart } from 'lucide-react';

export const ProgressSection: React.FC = () => {
  const indicators = [
    {
      title: 'MOVEMENT',
      subtitle: 'Range & Fluidity',
      desc: 'Improved ease of movement and restored joint articulation in everyday actions.',
      icon: <Activity className="w-5 h-5 text-[#168DD0]" />,
      accent: '#168DD0',
    },
    {
      title: 'STRENGTH',
      subtitle: 'Physical Resilience',
      desc: 'Building physical capacity, muscle endurance and supportive joint stability.',
      icon: <Zap className="w-5 h-5 text-[#F5B400]" />,
      accent: '#F5B400',
    },
    {
      title: 'FUNCTION',
      subtitle: 'Daily Independence',
      desc: 'Returning to the meaningful work, sport and lifestyle activities that matter to you.',
      icon: <Compass className="w-5 h-5 text-[#086B9F]" />,
      accent: '#086B9F',
    },
    {
      title: 'CONFIDENCE',
      subtitle: 'Fear-Free Motion',
      desc: 'Feeling more comfortable and self-assured with your body in daily movement.',
      icon: <Heart className="w-5 h-5 text-[#FFD45A]" />,
      accent: '#FFD45A',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden font-sans">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#F5B400]" />
            <span className="text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase">
              MEASURING RECOVERY
            </span>
            <div className="w-8 h-[2px] bg-[#F5B400]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-4">
            Progress Has Many Forms.
          </h2>

          <p className="text-[#526A84] text-base sm:text-lg leading-relaxed text-balance">
            Recovery is not always measured by pain alone. Improvements can also appear in movement, strength, confidence and everyday function.
          </p>
        </div>

        {/* 4 Visual Progress Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((item) => (
            <div
              key={item.title}
              className="bg-[#F7FAFD] rounded-2xl p-6 border border-[#08213D]/8 hover:border-[#168DD0]/40 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Circular Progress Ring Icon Graphic */}
                <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-white border border-[#08213D]/8 mb-5 group-hover:scale-105 transition-transform">
                  <svg className="w-full h-full -rotate-90 absolute inset-0" viewBox="0 0 44 44">
                    <circle
                      cx="22"
                      cy="22"
                      r="19"
                      fill="none"
                      stroke="#EAF4FC"
                      strokeWidth="2.5"
                    />
                    <circle
                      cx="22"
                      cy="22"
                      r="19"
                      fill="none"
                      stroke={item.accent}
                      strokeWidth="2.5"
                      strokeDasharray="120"
                      strokeDashoffset="35"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="relative z-10">
                    {item.icon}
                  </div>
                </div>

                {/* Subtitle tag */}
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#086B9F] block mb-1">
                  {item.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-[#07182D] mb-2 group-hover:text-[#086B9F] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#526A84] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Minimal Animated Horizontal Progress Graphic */}
              <div className="mt-6 pt-4 border-t border-[#08213D]/6">
                <div className="w-full h-1.5 bg-slate-200/70 rounded-full overflow-hidden">
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

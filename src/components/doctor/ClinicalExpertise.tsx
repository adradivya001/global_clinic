import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Heart, Activity, Compass, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ClinicalExpertise: React.FC = () => {
  const navigate = useNavigate();

  const focusAreas = [
    {
      title: 'Sports Rehabilitation',
      desc: 'High-performance recovery for athletic injuries, tendon resilience and safe return-to-sport.',
      icon: <Zap className="w-5 h-5 text-[#F5B400]" />,
    },
    {
      title: 'Musculoskeletal Care',
      desc: 'Comprehensive rehabilitation for spine conditions, joint restrictions and tissue healing.',
      icon: <ShieldCheck className="w-5 h-5 text-[#168DD0]" />,
    },
    {
      title: 'Pain Management',
      desc: 'Targeted manual therapy, electrotherapy and exercise to alleviate acute and chronic pain.',
      icon: <Heart className="w-5 h-5 text-[#F5B400]" />,
    },
    {
      title: 'Mobility & Strength',
      desc: 'Re-educating restricted movement patterns and building progressive physical endurance.',
      icon: <Activity className="w-5 h-5 text-[#168DD0]" />,
    },
    {
      title: 'Post-Surgical Rehabilitation',
      desc: 'Structured protocols following orthopedic surgery to safely restore joint strength and mobility.',
      icon: <Compass className="w-5 h-5 text-[#F5B400]" />,
    },
    {
      title: 'Functional Rehabilitation',
      desc: 'Rebuilding physical capacity and postural control for lifelong active independence.',
      icon: <Sparkles className="w-5 h-5 text-[#168DD0]" />,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden font-sans">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#F5B400]" />
            <span className="text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase">
              CLINICAL SPECIALIZATION
            </span>
            <div className="w-8 h-[2px] bg-[#F5B400]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-3">
            Areas of Clinical Focus
          </h2>

          <p className="text-[#526A84] text-base leading-relaxed">
            Clinical focus areas grounded in evidence-based physiotherapy and functional movement science.
          </p>
        </div>

        {/* 6 Focus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#F7FAFD] rounded-2xl p-6 border border-[#08213D]/6 hover:border-[#168DD0]/40 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Pill */}
                <div className="w-11 h-11 rounded-xl bg-white group-hover:bg-[#EAF4FC] border border-[#08213D]/8 flex items-center justify-center mb-5 transition-colors">
                  {area.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-[#07182D] mb-2 group-hover:text-[#086B9F] transition-colors">
                  {area.title}
                </h3>

                {/* One-Line Description */}
                <p className="text-xs sm:text-sm text-[#526A84] leading-relaxed">
                  {area.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 mt-4 border-t border-[#08213D]/6 flex items-center justify-between text-xs font-bold text-[#086B9F]">
                <span>Learn in Treatments</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Treatments Link */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/treatments')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#08213D] hover:text-[#086B9F] transition-colors cursor-pointer"
          >
            <span>Explore full treatment details on the Treatments Page &rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

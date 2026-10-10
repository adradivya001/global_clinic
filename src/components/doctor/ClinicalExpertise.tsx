import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Heart, Activity, Compass, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ClinicalExpertise: React.FC = () => {
  const navigate = useNavigate();

  const focusAreas = [
    {
      title: 'Sports Rehabilitation',
      desc: 'High-performance recovery for athletic injuries, tendon resilience, and safe return-to-sport clearance.',
      icon: <Zap className="w-5 h-5 text-[#B87908]" />,
    },
    {
      title: 'Musculoskeletal Care',
      desc: 'Comprehensive rehabilitation for spinal disc issues, osteoarthritis, and joint mobility restrictions.',
      icon: <ShieldCheck className="w-5 h-5 text-[#B87908]" />,
    },
    {
      title: 'Pain Management',
      desc: 'Targeted manual therapy, decompression, and electrotherapy to alleviate acute and chronic pain.',
      icon: <Heart className="w-5 h-5 text-[#B87908]" />,
    },
    {
      title: 'Mobility & Strength',
      desc: 'Re-educating restricted movement patterns and building progressive kinetic endurance.',
      icon: <Activity className="w-5 h-5 text-[#B87908]" />,
    },
    {
      title: 'Post-Surgical Rehabilitation',
      desc: 'Structured protocols following orthopedic surgery to safely restore joint strength and mobility.',
      icon: <Compass className="w-5 h-5 text-[#B87908]" />,
    },
    {
      title: 'Functional Neurological Care',
      desc: 'Rebuilding physical capacity, gait symmetry, and postural equilibrium for independent living.',
      icon: <Sparkles className="w-5 h-5 text-[#D99B24]" />,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFFDF8] relative overflow-hidden font-sans border-t border-[#EAD9B7]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>CLINICAL SPECIALIZATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15] mb-3 font-serif">
            Areas of Clinical Focus
          </h2>

          <p className="text-[#65594B] text-base leading-relaxed">
            Clinical focus areas grounded in evidence-based physiotherapy, biomechanics, and manual therapy science.
          </p>
        </div>

        {/* 6 Focus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#FAF4E8] rounded-3xl p-7 border border-[#EAD9B7] hover:border-[#B87908]/40 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Icon Pill */}
                <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#FAF4E8] border border-[#EAD9B7] flex items-center justify-center mb-5 transition-colors shadow-2xs">
                  {area.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-[#24190F] mb-2 group-hover:text-[#B87908] transition-colors font-serif">
                  {area.title}
                </h3>

                {/* One-Line Description */}
                <p className="text-xs sm:text-sm text-[#65594B] leading-relaxed">
                  {area.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 mt-4 border-t border-[#EAD9B7] flex items-center justify-between text-xs font-bold text-[#B87908]">
                <span>Learn in Treatments</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Treatments Link */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#B87908] hover:text-[#24190F] transition-colors cursor-pointer"
          >
            <span>Explore complete services and clinical equipment &rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};


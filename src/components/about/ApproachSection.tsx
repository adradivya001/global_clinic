import React, { useState } from 'react';
import { Search, Compass, Activity, TrendingUp } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'ASSESS',
      desc: 'Understand symptoms, joint kinematics, and functional limitations.',
      icon: <Search className="w-5 h-5" />,
    },
    {
      number: '02',
      title: 'PLAN',
      desc: "Formulate a personalized rehabilitation framework based on individual goals.",
      icon: <Compass className="w-5 h-5" />,
    },
    {
      number: '03',
      title: 'TREAT',
      desc: 'Apply targeted physical modalities, decompression, and guided kinetic retraining.',
      icon: <Activity className="w-5 h-5" />,
    },
    {
      number: '04',
      title: 'PROGRESS',
      desc: 'Advance loading and independence as strength, mobility, and confidence rebuild.',
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-[#FBFBFA] relative overflow-hidden font-sans scroll-mt-20 border-t border-stone-200/80">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-12 left-10 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-12 right-10 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>OUR CLINICAL APPROACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15]">
            An Approach Built Around You.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Structured 4-phase clinical pathway ensuring safe progression and measurable outcomes.
          </p>
        </div>

        {/* ========================================================
            DESKTOP TIMELINE (Visible on md and up)
        ======================================================== */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Base Connection Track */}
          <div className="absolute top-7 left-[8%] right-[8%] h-[2px] bg-stone-200 -z-0" />

          {/* Active Emerald & Copper Progress Rail */}
          <div
            className="absolute top-7 left-[8%] h-[2px] bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-500 -z-0"
            style={{ width: `${(activeStep / (steps.length - 1)) * 84}%` }}
          />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Step Circle Indicator */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border-2 ${
                      isActive
                        ? 'bg-emerald-700 border-emerald-600 text-white scale-110 shadow-lg shadow-emerald-700/25'
                        : isPast
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                        : 'bg-white border-stone-200 text-stone-400 group-hover:border-emerald-300 group-hover:text-emerald-700'
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Step Number Tag */}
                  <span
                    className={`text-[11px] font-black uppercase tracking-[0.2em] mb-1.5 transition-colors ${
                      isActive ? 'text-emerald-800' : 'text-stone-400'
                    }`}
                  >
                    STEP {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-lg font-black text-stone-900 mb-2 tracking-wide">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-[220px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            MOBILE VERTICAL TIMELINE (Visible on sm and below)
        ======================================================== */}
        <div className="md:hidden relative pl-6 border-l-2 border-emerald-600/30 space-y-8 max-w-md mx-auto">
          {steps.map((step) => {
            return (
              <div key={step.number} className="relative group">
                {/* Vertical Bullet */}
                <div className="absolute -left-[33px] top-0 w-8 h-8 rounded-full bg-emerald-700 border-2 border-emerald-500 flex items-center justify-center text-white">
                  <span className="text-[11px] font-black">{step.number}</span>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 block mb-1">
                    STEP {step.number}
                  </span>
                  <h3 className="text-base font-black text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Search, Compass, Activity, TrendingUp } from 'lucide-react';

export const TreatmentApproach: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'ASSESS',
      desc: "Understand the patient's symptoms, movement and functional limitations.",
      icon: <Search className="w-5 h-5" />,
    },
    {
      number: '02',
      title: 'PLAN',
      desc: "Create a treatment and rehabilitation approach around the patient's needs.",
      icon: <Compass className="w-5 h-5" />,
    },
    {
      number: '03',
      title: 'TREAT',
      desc: 'Apply targeted physiotherapy and guided exercises.',
      icon: <Activity className="w-5 h-5" />,
    },
    {
      number: '04',
      title: 'PROGRESS',
      desc: 'Adjust the rehabilitation plan as the patient improves.',
      icon: <TrendingUp className="w-5 h-5" />,
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
            HOW TREATMENT WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            From Assessment To Recovery.
          </h2>
        </div>

        {/* ========================================================
            DESKTOP TIMELINE (Horizontal)
        ======================================================== */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Base Connection Track */}
          <div className="absolute top-7 left-[8%] right-[8%] h-[2px] bg-white/10 -z-0" />

          {/* Active Cyan & Gold Progress Rail */}
          <div
            className="absolute top-7 left-[8%] h-[2px] bg-gradient-to-r from-[#168DD0] to-[#F5B400] transition-all duration-500 -z-0"
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
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 border-2 ${
                      isActive
                        ? 'bg-[#060b13] border-[#F5B400] text-[#F5B400] scale-110 shadow-[0_0_25px_rgba(245,180,0,0.4)]'
                        : isPast
                        ? 'bg-[#086B9F] border-[#168DD0] text-white'
                        : 'bg-white/[0.05] border-white/15 text-slate-400 group-hover:border-[#168DD0] group-hover:text-white'
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Step Number Tag */}
                  <span
                    className={`text-[11px] font-black uppercase tracking-[0.2em] mb-1.5 transition-colors ${
                      isActive ? 'text-[#F5B400]' : 'text-slate-400'
                    }`}
                  >
                    STEP {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[220px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            MOBILE TIMELINE (Vertical)
        ======================================================== */}
        <div className="md:hidden relative pl-6 border-l-2 border-[#168DD0]/40 space-y-10 max-w-md mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="absolute -left-[33px] top-0 w-8 h-8 rounded-full bg-[#060b13] border-2 border-[#F5B400] flex items-center justify-center text-[#F5B400]">
                <span className="text-[11px] font-bold">{step.number}</span>
              </div>

              <div className="bg-white/[0.05] rounded-2xl p-5 border border-white/10 backdrop-blur-md shadow-sm">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F5B400] block mb-1">
                  STEP {step.number}
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

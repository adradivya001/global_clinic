import React, { useState } from 'react';
import { MessageSquare, Search, Compass, Activity, CheckCircle2 } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'CONNECT',
      desc: 'Begin by discussing your symptoms, medical history, and functional goals.',
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      number: '02',
      title: 'ASSESS',
      desc: 'Evaluate joint mobility, muscular balance, and kinetic limitations.',
      icon: <Search className="w-5 h-5" />,
    },
    {
      number: '03',
      title: 'PLAN',
      desc: 'Structure a customized rehabilitation plan utilizing clinical equipment and home drills.',
      icon: <Compass className="w-5 h-5" />,
    },
    {
      number: '04',
      title: 'PROGRESS',
      desc: 'Advance through guided therapy, decompression, and progressive load reconditioning.',
      icon: <Activity className="w-5 h-5" />,
    },
    {
      number: '05',
      title: 'INDEPENDENCE',
      desc: 'Achieve lasting recovery, ergonomic stability, and confident return to daily activities.',
      icon: <CheckCircle2 className="w-5 h-5" />,
    },
  ];

  return (
    <section id="journey-timeline" className="py-20 lg:py-28 bg-[#FFFDF8] relative overflow-hidden font-sans scroll-mt-20 border-t border-[#EAD9B7]">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#F8EAC9]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#FAF4E8]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>STRUCTURED REHABILITATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15] font-serif">
            Your Journey, Step by Step.
          </h2>
          <p className="text-[#65594B] text-sm sm:text-base mt-2">
            Clear, transparent rehabilitation milestones from your first consultation to full active independence.
          </p>
        </div>

        {/* ========================================================
            DESKTOP HORIZONTAL JOURNEY TIMELINE
        ======================================================== */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Base Inactive Progress Line */}
          <div className="absolute top-7 left-[6%] right-[6%] h-[2px] bg-[#EAD9B7] -z-0" />

          {/* Active Gold Progress Line */}
          <div
            className="absolute top-7 left-[6%] h-[2px] bg-gradient-to-r from-[#B87908] to-[#D99B24] transition-all duration-500 ease-out -z-0"
            style={{ width: `${(activeStep / (steps.length - 1)) * 88}%` }}
          />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group px-2"
                >
                  {/* Step Circle Indicator */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border-2 ${
                      isActive
                        ? 'bg-[#B87908] border-[#B87908] text-white scale-110 shadow-lg shadow-[#B87908]/25'
                        : isPast
                        ? 'bg-[#FAF4E8] border-[#EAD9B7] text-[#B87908]'
                        : 'bg-white border-[#EAD9B7] text-[#65594B] group-hover:border-[#B87908] group-hover:text-[#B87908]'
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Step Number */}
                  <span
                    className={`text-[11px] font-black uppercase tracking-[0.2em] mb-1.5 transition-colors ${
                      isActive ? 'text-[#B87908]' : 'text-[#65594B]'
                    }`}
                  >
                    STEP {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-base font-black text-[#24190F] mb-2 tracking-wide font-serif">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-[#65594B] leading-relaxed max-w-[190px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            TABLET & MOBILE VERTICAL JOURNEY TIMELINE
        ======================================================== */}
        <div className="lg:hidden relative pl-6 border-l-2 border-[#EAD9B7] space-y-8 max-w-md mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="absolute -left-[33px] top-0 w-8 h-8 rounded-full bg-[#B87908] border-2 border-[#D99B24] flex items-center justify-center text-white">
                <span className="text-[11px] font-black">{step.number}</span>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-[#EAD9B7] shadow-sm">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#B87908] block mb-1">
                  STEP {step.number}
                </span>
                <h3 className="text-base font-black text-[#24190F] mb-2 font-serif">
                  {step.title}
                </h3>
                <p className="text-xs text-[#65594B] leading-relaxed">
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


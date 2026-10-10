import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const RecoveryJourney: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "CONNECT",
      subtitle: "Initial Clinical Inquiry",
      description: "Reach out to discuss your symptoms, functional movement difficulties, or rehabilitation goals with our team.",
      tag: "Initiation",
      color: "border-[#EAD9B7] bg-[#FAF4E8]/60",
      accent: "text-[#B87908]",
    },
    {
      number: "02",
      title: "ASSESS",
      subtitle: "Biomechanical Diagnostics",
      description: "Comprehensive 1:1 physical evaluation by Dr. K. Bhavendra PT to pinpoint the mechanical root cause.",
      tag: "Evaluation",
      color: "border-[#EAD9B7] bg-white",
      accent: "text-[#B87908]",
    },
    {
      number: "03",
      title: "PLAN",
      subtitle: "Personalized Protocol",
      description: "Custom rehabilitation prescription matching targeted modalities, load progression, and treatment cadence.",
      tag: "Roadmap",
      color: "border-[#EAD9B7] bg-[#FAF4E8]/60",
      accent: "text-[#D99B24]",
    },
    {
      number: "04",
      title: "PROGRESS",
      subtitle: "Targeted Rehabilitation",
      description: "Supervised sessions combining advanced therapeutic modalities, joint mobilization, and kinetic retraining.",
      tag: "Active Care",
      color: "border-[#EAD9B7] bg-white",
      accent: "text-[#B87908]",
    },
    {
      number: "05",
      title: "SUSTAIN",
      subtitle: "Verified Independence",
      description: "Transition to pain-free daily living, work, and sports with verified biomechanical resilience and prevention.",
      tag: "Discharge Goal",
      color: "border-[#B87908] bg-[#FAF4E8]",
      accent: "text-[#B87908]",
    },
  ];

  return (
    <section id="journey" className="py-16 lg:py-24 bg-gradient-to-b from-[#FFFDF8] via-[#FAF4E8] to-[#FFFDF8] relative overflow-hidden font-sans border-t border-[#EAD9B7]">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#F8EAC9]/40 rounded-full blur-[160px]" />
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#FAF4E8]/60 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAD9B7] text-[#B87908] text-xs font-extrabold uppercase tracking-widest shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
              <span>CLINICAL PATHWAY MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-tight">
              Your Recovery Journey
            </h2>
            <p className="text-[#65594B] text-sm sm:text-base leading-relaxed font-normal">
              A structured, 5-phase evidence-based clinical pathway guiding you from diagnostic assessment to lasting physical independence.
            </p>
          </div>

          <Link
            to="/patient-journey"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-[#FAF4E8] text-[#24190F] hover:text-[#B87908] font-bold text-xs uppercase tracking-wider border border-[#EAD9B7] shadow-xs transition-all group shrink-0"
          >
            <span>Explore Full Pathway</span>
            <ArrowRight className="w-4 h-4 text-[#B87908] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 5-Step Connected Pathway Cards with Continuous Track */}
        <div className="relative">
          {/* Desktop connecting pipeline track behind cards */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-[#B87908] via-[#D99B24] to-[#B87908] z-0 pointer-events-none opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 relative z-10">
            {steps.map((step, idx) => {
              const isLast = idx === steps.length - 1;

              return (
                <div
                  key={step.number}
                  className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 group shadow-md shadow-[#913d12]/5 hover:shadow-xl hover:-translate-y-1.5 bg-white border ${step.color}`}
                >
                  <div>
                    {/* Step Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm shadow-xs ${
                        isLast 
                          ? 'bg-[#B87908] text-white shadow-[#B87908]/20 ring-4 ring-[#F8EAC9]' 
                          : 'bg-[#24190F] text-white shadow-[#24190F]/20 ring-4 ring-[#FAF4E8]'
                      }`}>
                        {step.number}
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                        isLast 
                          ? 'bg-[#F8EAC9] text-[#B87908] border-[#EAD9B7]' 
                          : 'bg-white text-[#65594B] border-[#EAD9B7]'
                      }`}>
                        {step.tag}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-lg font-black text-[#24190F] tracking-wide mb-1">
                      {step.title}
                    </h3>
                    <span className={`text-xs font-bold ${step.accent} block mb-2 leading-snug`}>
                      {step.subtitle}
                    </span>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#65594B] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Step Indicator */}
                  <div className="mt-6 pt-3.5 border-t border-[#EAD9B7]/50 flex items-center justify-between text-[10px] font-bold">
                    <span className={isLast ? 'text-[#B87908]' : 'text-[#65594B]/70'}>
                      Stage 0{idx + 1} of 05
                    </span>
                    <span className={isLast ? 'text-[#B87908] font-black' : 'text-[#B87908] font-mono'}>
                      {isLast ? '✓ DISCHARGE' : 'FLOW ➔'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RecoveryJourney;

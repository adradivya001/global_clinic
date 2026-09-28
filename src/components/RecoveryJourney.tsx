import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const RecoveryJourney: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "CONNECT",
      subtitle: "Initial Inquiry",
      description: "Reach out to discuss your symptoms, movement difficulties, or recovery goals.",
    },
    {
      number: "02",
      title: "ASSESS",
      subtitle: "Movement Diagnostics",
      description: "Thorough biomechanical and anatomical evaluation to understand the root cause.",
    },
    {
      number: "03",
      title: "PLAN",
      subtitle: "Personalized Roadmap",
      description: "Crafting an evidence-based pathway designed specifically for your body and schedule.",
    },
    {
      number: "04",
      title: "PROGRESS",
      subtitle: "Targeted Rehabilitation",
      description: "Guided exercises, manual therapy, and progressive strengthening to rebuild mobility.",
    },
    {
      number: "05",
      title: "MOVE FORWARD",
      subtitle: "Active Independence",
      description: "Return to daily activities, work, and sports with long-term confidence and prevention.",
    },
  ];

  return (
    <section id="journey" className="py-24 relative overflow-hidden font-sans">
      {/* Cinematic Photographic Background with Dark Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=80"
          alt="Recovery Background"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2538] via-[#102A43]/90 to-[#102A43]/40"></div>
        <div className="absolute inset-0 bg-[#0B2538]/30"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs text-amber-400 font-mono uppercase tracking-widest font-semibold mb-2">
              CLINICAL PATHWAY PREVIEW
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Your Recovery Journey
            </h2>
            <p className="text-slate-300 text-base mt-2 max-w-2xl">
              A structured, evidence-based process designed to guide you from initial consultation to active independence.
            </p>
          </div>

          <Link
            to="/patient-journey"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-sm transition-all group shrink-0"
          >
            <span>Understand Your Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Connected Journey Timeline Line */}
        <div className="relative">
          {/* Thin Dotted Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 border-t-2 border-dotted border-white/20 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative z-10 flex flex-col"
              >
                {/* Stage Number Badge */}
                <div className="w-20 h-20 rounded-full bg-transparent border border-white/20 flex flex-col items-center justify-center text-white mb-6 backdrop-blur-sm group hover:border-amber-400 transition-colors cursor-default">
                  <span className="text-[10px] text-amber-400 font-bold tracking-wider">STAGE</span>
                  <span className="text-2xl font-black">{step.number}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold text-amber-400/90 block">
                    {step.subtitle}
                  </span>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

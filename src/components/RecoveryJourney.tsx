import React from 'react';
import { Sparkles } from 'lucide-react';

export const RecoveryJourney: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "ASSESS",
      subtitle: "Root Cause Diagnostics",
      description: "Thorough biomechanical and anatomical evaluation to understand the exact root cause of your discomfort.",
    },
    {
      number: "02",
      title: "PLAN",
      subtitle: "Personalised Roadmap",
      description: "Crafting an evidence-based recovery pathway designed specifically for your goals, body, and schedule.",
    },
    {
      number: "03",
      title: "TREAT",
      subtitle: "Hands-on Clinical Therapy",
      description: "Targeted joint mobilisations, soft-tissue therapy, and guided movements to immediately relieve pain.",
    },
    {
      number: "04",
      title: "REBUILD",
      subtitle: "Strength & Conditioning",
      description: "Progressive strengthening to reinforce joint stability, improve flexibility, and restore mobility.",
    },
    {
      number: "05",
      title: "RETURN",
      subtitle: "Active Independence",
      description: "Get back to sports, work, and daily living with long-term injury prevention strategies and confidence.",
    },
  ];

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
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
        
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your Recovery Journey
          </h2>
          <p className="text-slate-300 text-base mt-2 max-w-2xl">
            A structured, evidence-based process designed around you.
          </p>
        </div>

          <div className="text-xs text-amber-400 font-mono uppercase tracking-widest font-semibold">
            5-Stage Clinical Roadmap
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
                <div className="w-24 h-24 rounded-full bg-transparent border border-white/20 flex flex-col items-center justify-center text-white mb-6 backdrop-blur-sm group hover:border-amber-500 transition-colors cursor-default">
                  <span className="text-sm text-amber-500 font-bold mb-1">STAGE</span>
                  <span className="text-3xl font-black">{step.number}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
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


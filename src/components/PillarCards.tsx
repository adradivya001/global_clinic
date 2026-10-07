import React, { useState } from 'react';
import { Activity, ShieldCheck, Zap, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface PillarCardsProps {
  onSelectPillar: (pillar: string) => void;
}

export const PillarCards: React.FC<PillarCardsProps> = ({ onSelectPillar }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const pillars = [
    {
      id: "movement",
      phase: "01",
      phaseLabel: "PHASE 01 • MOBILITY",
      title: "MOVEMENT",
      tagline: "Joint Mobility & Biomechanical Alignment",
      description: "Re-educate restricted movement patterns, release chronic muscular guarding, and achieve pain-free range of motion through targeted manual therapy.",
      outcomes: ["Joint Articulation", "Soft Tissue Release", "Kinematic Balance"],
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      icon: Activity,
      accentColor: "#059669",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      glowRing: "hover:ring-4 hover:ring-emerald-100",
    },
    {
      id: "recovery",
      phase: "02",
      phaseLabel: "PHASE 02 • REPAIR",
      title: "RECOVERY",
      tagline: "Tissue Healing & Electro-Thermal Support",
      description: "Accelerate cellular repair and reduce acute inflammation with advanced electrotherapy, therapeutic cold/heat, and structured load management.",
      outcomes: ["Inflammation Control", "Neuromuscular Activation", "Tissue Resilience"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
      icon: ShieldCheck,
      accentColor: "#C2410C",
      badgeColor: "bg-orange-50 text-orange-800 border-orange-200",
      glowRing: "hover:ring-4 hover:ring-orange-100",
    },
    {
      id: "strength",
      phase: "03",
      phaseLabel: "PHASE 03 • INDEPENDENCE",
      title: "STRENGTH",
      tagline: "Core Stability & Lifelong Independence",
      description: "Build robust core stability, functional endurance, and joint integrity with progressive resistance to prevent re-injury and ensure lasting recovery.",
      outcomes: ["Postural Control", "Functional Stability", "Re-injury Prevention"],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80",
      icon: Zap,
      accentColor: "#0F766E",
      badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
      glowRing: "hover:ring-4 hover:ring-teal-100",
    },
  ];

  return (
    <section className="relative z-20 bg-gradient-to-b from-[#FAF8F5] via-[#F6F3EE] to-[#F3F6F4] py-16 lg:py-24 overflow-hidden font-sans border-t border-zinc-200">
      {/* Subtle Ambient Light Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[550px] h-[550px] rounded-full bg-orange-100/30 blur-[150px]" />
        <div className="absolute bottom-0 left-10 w-[550px] h-[550px] rounded-full bg-emerald-100/40 blur-[150px]" />
      </div>

      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10 relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs font-extrabold uppercase tracking-widest shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>THE GLOBAL CLINICAL FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
              Movement <span className="text-zinc-300 font-light">•</span> Recovery <span className="text-zinc-300 font-light">•</span> Strength
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              Our 3-stage clinical methodology transitions you seamlessly from acute limitation to verified functional independence through evidence-guided physical therapy.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Interactive Rehabilitation Flow
            </span>
          </div>
        </div>

        {/* 3 Luxury Light Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isHovered = activeStep === index;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => onSelectPillar(pillar.id)}
                className={`group relative rounded-3xl bg-white border border-zinc-200/90 transition-all duration-400 overflow-hidden cursor-pointer flex flex-col justify-between shadow-lg shadow-zinc-200/40 hover:shadow-2xl ${pillar.glowRing} ${
                  isHovered ? '-translate-y-2' : ''
                }`}
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-zinc-900">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered ? 'scale-108' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/25 to-transparent" />

                  {/* Floating Phase Pill */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border backdrop-blur-md bg-white/95 ${pillar.badgeColor} shadow-2xs`}>
                      {pillar.phaseLabel}
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 flex items-center justify-center text-zinc-900 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-emerald-700" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black text-zinc-900 tracking-wide">
                        {pillar.title}
                      </h3>
                      <span className="text-xs font-mono font-black text-zinc-300">
                        #{pillar.phase}
                      </span>
                    </div>

                    <p className="text-xs font-bold text-orange-700 leading-snug">
                      {pillar.tagline}
                    </p>

                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal pt-1">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Outcomes List */}
                  <div className="space-y-2 pt-4 border-t border-zinc-100">
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">
                      Target Clinical Outcomes:
                    </span>
                    <div className="space-y-1.5">
                      {pillar.outcomes.map((outcome, oIdx) => (
                        <div key={oIdx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Trigger Action */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-700 group-hover:text-orange-700 transition-colors">
                    <span>Explore Body Protocols</span>
                    <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white group-hover:border-emerald-700 transition-all">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PillarCards;

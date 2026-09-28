import React, { useState } from 'react';
import { ArrowUpRight, Activity, ShieldCheck, Zap, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface PillarCardsProps {
  onSelectPillar: (pillar: string) => void;
}

export const PillarCards: React.FC<PillarCardsProps> = ({ onSelectPillar }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const pillars = [
    {
      id: "movement",
      phase: "PHASE 01",
      title: "MOVEMENT",
      tagline: "Restore Joint Mobility & Biomechanics",
      description: "Re-educate restricted movement patterns, release chronic muscular guarding, and achieve pain-free range of motion through targeted manual therapy.",
      outcomes: ["Joint Articulation", "Soft Tissue Release", "Pain Reduction"],
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      icon: Activity,
      gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
    },
    {
      id: "recovery",
      phase: "PHASE 02",
      title: "RECOVERY",
      tagline: "Personalised Anatomical Healing",
      description: "Accelerate cellular recovery and tissue repair with modern electrotherapy, structured load management, and evidence-backed clinical protocols.",
      outcomes: ["Inflammation Control", "Neuromuscular Activation", "Tissue Resilience"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
      icon: ShieldCheck,
      gradient: "from-amber-400/25 via-amber-500/5 to-transparent",
    },
    {
      id: "strength",
      phase: "PHASE 03",
      title: "STRENGTH",
      tagline: "Functional Stability & Independence",
      description: "Build robust core stability, functional endurance, and joint integrity to prevent re-injury and ensure lifelong physical independence.",
      outcomes: ["Postural Control", "Peak Performance", "Re-injury Prevention"],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80",
      icon: Zap,
      gradient: "from-amber-600/25 via-amber-500/5 to-transparent",
    },
  ];

  return (
    <section className="relative z-20 bg-slate-50 pt-16 pb-8 overflow-hidden">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[50%] rounded-full bg-blue-900/5 blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-20 relative z-20">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col mb-12 max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600"></div>
            <span className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase">
              Our Methodology
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Movement <span className="text-slate-300 font-light mx-1 sm:mx-2">/</span> Recovery <span className="text-slate-300 font-light mx-1 sm:mx-2">/</span> Strength
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 leading-relaxed max-w-3xl">
            Our 3-tier evidence-based methodology guides you seamlessly from acute discomfort to complete physical independence, combining manual therapy with advanced clinical protocols.
          </p>
        </div>

        {/* 3 Interactive Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const isActive = activeStep === index;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => onSelectPillar(pillar.id)}
                className={`group relative bg-white border border-slate-200/60 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-amber-500/30 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col ${isActive ? 'translate-y-[-8px]' : ''}`}
              >
                {/* Top Gold Accent Line */}
                <div className="h-1 w-full bg-gradient-to-r from-amber-400 to-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-[10px] font-black text-slate-900 tracking-widest uppercase">{pillar.phase}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="space-y-4 mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-wide group-hover:text-amber-600 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-loose">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Interactive Link */}
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-widest group-hover:text-amber-600 transition-colors">
                      Explore {pillar.title.toLowerCase()}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                      <ChevronRight className="w-4 h-4" />
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


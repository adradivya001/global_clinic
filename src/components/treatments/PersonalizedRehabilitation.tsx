import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const PersonalizedRehabilitation: React.FC = () => {
  const variationFactors = [
    'Condition & Diagnosis',
    'Symptom Intensity',
    'Current Joint Mobility',
    'Muscular Strength & Endurance',
    'Daily Lifestyle & Work Habits',
    'Activity Level & Sports Demands',
    'Personal Recovery Goals',
  ];

  const floatingLabels = ['MOVEMENT', 'MOBILITY', 'STRENGTH', 'FUNCTION', 'PROGRESS'];

  return (
    <section className="py-20 lg:py-28 bg-[#F7FAFD] relative overflow-hidden font-sans">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#168DD0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#F5B400]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Labels */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[24px] overflow-hidden border border-[#08213D]/10 shadow-[0_20px_50px_rgba(8,33,61,0.08)] bg-white group">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
                alt="Personalized Physiotherapy Assessment"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041326]/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Clinical Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-white/60 shadow-[0_10px_25px_rgba(8,33,61,0.12)] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#086B9F] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#07182D] font-bold text-sm leading-snug">
                    Individualized Care Pathways
                  </h4>
                  <p className="text-[#526A84] text-xs font-medium">
                    No one-size-fits-all treatments
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Floating Highlight Badges */}
            <div className="hidden sm:flex flex-wrap gap-2 absolute -top-4 -right-4 max-w-xs z-20 pointer-events-none">
              {floatingLabels.map((label, idx) => (
                <span
                  key={label}
                  className="px-3 py-1 rounded-full bg-[#041326]/90 backdrop-blur-md border border-white/15 text-[#FFD45A] font-bold text-[10px] tracking-[0.18em] shadow-lg animate-[pulse_4s_ease-in-out_infinite]"
                  style={{ animationDelay: `${idx * 800}ms` }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Text & Variations */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#F5B400]" />
                <span className="text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase">
                  CUSTOMIZED PROTOCOLS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15]">
                Your Recovery Is Personal.
              </h2>
            </div>

            {/* Core Message Quote Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#EAF4FC]/60 border border-[#086B9F]/20">
              <p className="text-[#07182D] font-semibold text-base sm:text-lg leading-snug italic">
                "Two people may experience similar symptoms but require completely different rehabilitation strategies."
              </p>
            </div>

            <p className="text-[#526A84] text-base leading-relaxed">
              Every recovery plan at Global Physiotherapy is uniquely tailored. Rather than prescribing cookie-cutter exercise sheets, we evaluate all factors influencing your physical well-being.
            </p>

            {/* Variation Factors Checklist */}
            <div className="pt-2">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#07182D] mb-3">
                Key Factors Influencing Your Treatment
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {variationFactors.map((factor) => (
                  <div
                    key={factor}
                    className="flex items-center gap-2.5 py-2 px-3 rounded-lg bg-white border border-[#08213D]/8 shadow-sm text-[#07182D] text-xs sm:text-sm font-semibold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#F5B400] shrink-0" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

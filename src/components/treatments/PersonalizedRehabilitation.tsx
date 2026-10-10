import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const PersonalizedRehabilitation: React.FC = () => {
  const variationFactors = [
    'Clinical Diagnosis & Pathomechanics',
    'Symptom Intensity & Pain Tolerance',
    'Joint Range of Motion & Capsular Mobility',
    'Muscular Strength & Kinetic Endurance',
    'Occupational Ergonomics & Postural Habits',
    'Activity Level & Sports Demands',
    'Target Functional Milestones',
  ];

  const floatingLabels = ['MOVEMENT', 'MOBILITY', 'STRENGTH', 'STABILITY', 'PROGRESSION'];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF4E8] relative overflow-hidden font-sans border-t border-[#EAD9B7]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#F8EAC9]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FFFDF8]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Labels */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#EAD9B7] shadow-xl bg-white group">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
                alt="Personalized Physiotherapy Assessment"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24190F]/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Clinical Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-[#EAD9B7] shadow-lg flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#FAF4E8] text-[#B87908] border border-[#EAD9B7] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[#24190F] font-black text-sm sm:text-base leading-snug">
                    Individualized Care Pathways
                  </h4>
                  <p className="text-[#65594B] text-xs font-semibold">
                    Targeted protocols designed around your body
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Floating Highlight Badges */}
            <div className="hidden sm:flex flex-wrap gap-2 absolute -top-4 -right-4 max-w-xs z-20 pointer-events-none">
              {floatingLabels.map((label, idx) => (
                <span
                  key={label}
                  className="px-3 py-1 rounded-full bg-[#24190F]/90 backdrop-blur-md border border-[#EAD9B7]/40 text-[#F8EAC9] font-bold text-[10px] tracking-[0.18em] shadow-lg animate-pulse"
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
                <span>CUSTOMIZED PROTOCOLS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15] font-serif">
                Your Recovery Is Personal.
              </h2>
            </div>

            {/* Core Message Quote Box */}
            <div className="p-5 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7]">
              <p className="text-[#24190F] font-bold text-base sm:text-lg leading-snug italic font-serif">
                "Two people may experience identical symptoms yet require entirely distinct rehabilitation strategies based on their unique biomechanics."
              </p>
            </div>

            <p className="text-[#65594B] text-base leading-relaxed">
              Every recovery plan at Global Physiotherapy is uniquely tailored. Rather than prescribing generic exercise sheets, we evaluate all factors influencing your physical well-being.
            </p>

            {/* Variation Factors Checklist */}
            <div className="pt-2">
              <h4 className="text-xs font-black uppercase tracking-[0.15em] text-[#24190F] mb-3.5">
                Key Clinical Factors Influencing Your Plan
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {variationFactors.map((factor) => (
                  <div
                    key={factor}
                    className="flex items-center gap-2.5 py-2.5 px-3.5 rounded-xl bg-white border border-[#EAD9B7] shadow-sm text-[#24190F] text-xs sm:text-sm font-semibold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#B87908] shrink-0" />
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


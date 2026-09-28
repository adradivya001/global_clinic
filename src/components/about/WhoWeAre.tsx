import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhoWeAre: React.FC = () => {
  const focusAreas = [
    'Pain Management',
    'Injury Rehabilitation',
    'Mobility Restoration',
    'Strength Development',
    'Functional Recovery',
    'Sports Rehabilitation',
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7FAFD] relative overflow-hidden font-sans">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#168DD0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5B400]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[24px] overflow-hidden border border-[#08213D]/10 shadow-[0_20px_50px_rgba(8,33,61,0.08)] bg-white group">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
                alt="Physiotherapist assisting patient with mobility"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041326]/75 via-transparent to-transparent pointer-events-none" />

              {/* Floating Clinical Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-white/60 shadow-[0_10px_25px_rgba(8,33,61,0.12)] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#086B9F] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#07182D] font-bold text-sm leading-snug">
                    Dedicated Clinical Care
                  </h4>
                  <p className="text-[#526A84] text-xs font-medium">
                    Evidence-based rehabilitation in Anantapur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#F5B400]" />
                <span className="text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase">
                  WHO WE ARE
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15]">
                Physiotherapy With Purpose.
              </h2>
            </div>

            {/* Narrative Body */}
            <p className="text-[#526A84] text-base sm:text-lg leading-relaxed font-normal">
              At Global Physiotherapy, we believe that true recovery requires more than generic exercise routines. Every individual moves differently, experiences pain uniquely, and has distinct goals for getting back to daily life.
            </p>

            <p className="text-[#526A84] text-base sm:text-lg leading-relaxed font-normal">
              We take the time to thoroughly assess your movement mechanics, understand functional limitations, and design an appropriate, patient-centered rehabilitation pathway built around your specific recovery milestones.
            </p>

            {/* Core Focus Badges */}
            <div className="pt-2">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#07182D] mb-3">
                Core Areas of Focus
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {focusAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white border border-[#08213D]/8 shadow-sm text-[#07182D] text-xs sm:text-sm font-semibold hover:border-[#086B9F]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#F5B400] shrink-0" />
                    <span className="truncate">{area}</span>
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

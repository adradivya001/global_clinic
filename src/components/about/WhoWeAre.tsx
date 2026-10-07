import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhoWeAre: React.FC = () => {
  const focusAreas = [
    'Pain Management',
    'Injury Rehabilitation',
    'Mobility Restoration',
    'Strength Development',
    'Functional Recovery',
    'Sports Conditioning',
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F7F4] relative overflow-hidden font-sans border-t border-stone-200/80">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-xl bg-white group">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
                alt="Physiotherapist assisting patient with mobility"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Clinical Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-stone-200 shadow-lg flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-black text-sm leading-snug">
                    Dedicated Clinical Care
                  </h4>
                  <p className="text-stone-500 text-xs font-semibold">
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
                <span>WHO WE ARE</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15]">
                Physiotherapy With Purpose.
              </h2>
            </div>

            {/* Narrative Body */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
              At Global Physiotherapy, we believe that true recovery requires more than generic exercise routines. Every individual moves differently, experiences pain uniquely, and has distinct goals for getting back to daily life.
            </p>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
              We take the time to thoroughly assess your movement mechanics, understand functional limitations, and design an appropriate, patient-centered rehabilitation pathway built around your specific recovery milestones.
            </p>

            {/* Core Focus Badges */}
            <div className="pt-2">
              <h4 className="text-xs font-black uppercase tracking-[0.15em] text-stone-900 mb-3">
                Core Areas of Focus
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {focusAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 py-2 px-3 rounded-xl bg-white border border-stone-200 shadow-xs text-stone-800 text-xs sm:text-sm font-semibold hover:border-emerald-300 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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

import React from 'react';
import { Sparkles, LayoutGrid, HeartHandshake, Compass } from 'lucide-react';

export const ClinicFacilities: React.FC = () => {
  const environmentAspects = [
    {
      number: '01',
      icon: Sparkles,
      title: 'CLEAN CLINICAL ENVIRONMENT',
      description: 'A sanitized and impeccably organized setting designed for high-standard patient care.',
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
    {
      number: '02',
      icon: LayoutGrid,
      title: 'DEDICATED CARE SPACES',
      description: 'Partitioned private suites for computerized spinal decompression and individual physical therapy.',
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
    {
      number: '03',
      icon: HeartHandshake,
      title: 'PATIENT COMFORT',
      description: 'A soothing and welcoming atmosphere designed to help patients feel secure throughout their visit.',
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
    {
      number: '04',
      icon: Compass,
      title: 'REHABILITATION FOCUS',
      description: 'An open kinetic gym space centered around active movement, balance drills, and functional strength.',
      accent: 'border-[#EAD9B7] bg-[#FAF4E8] text-[#B87908]',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden font-sans border-t border-[#EAD9B7]/60">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8EAC9] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-xs">
            <span>CLINIC ENVIRONMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.15] mb-3">
            A Thoughtful Clinic Environment
          </h2>

          <p className="text-[#65594B] text-base leading-relaxed">
            Every part of Global Physiotherapy is organized to provide a calm, clean, and purposeful setting for patient care.
          </p>
        </div>

        {/* 4-Item Compact Environment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {environmentAspects.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.number}
                className="bg-[#FAF4E8] rounded-3xl p-7 border border-[#EAD9B7] hover:border-[#B87908] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.accent}`}>
                      <IconComponent className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-serif font-bold tracking-widest text-[#B87908]/50">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xs font-serif font-bold tracking-[0.15em] text-[#24190F] mb-2 uppercase">
                    {item.title}
                  </h3>

                  <p className="text-[#65594B] text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


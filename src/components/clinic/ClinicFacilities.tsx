import React from 'react';
import { Sparkles, LayoutGrid, HeartHandshake, Compass } from 'lucide-react';

export const ClinicFacilities: React.FC = () => {
  const environmentAspects = [
    {
      number: '01',
      icon: Sparkles,
      title: 'CLEAN CLINICAL ENVIRONMENT',
      description: 'A professional and organized setting designed to support focused patient care.',
      accent: 'border-[#F5B400]/25 bg-[#F5B400]/5 text-[#D9A400]',
    },
    {
      number: '02',
      icon: LayoutGrid,
      title: 'DEDICATED CARE SPACES',
      description: 'Purposeful spaces for consultation, treatment and rehabilitation.',
      accent: 'border-[#086B9F]/20 bg-[#086B9F]/5 text-[#086B9F]',
    },
    {
      number: '03',
      icon: HeartHandshake,
      title: 'PATIENT COMFORT',
      description: 'A welcoming environment designed to help patients feel comfortable throughout their visit.',
      accent: 'border-[#1769C2]/20 bg-[#1769C2]/5 text-[#1769C2]',
    },
    {
      number: '04',
      icon: Compass,
      title: 'REHABILITATION FOCUS',
      description: 'An environment centered around movement, exercise and functional rehabilitation.',
      accent: 'border-[#102A43]/20 bg-[#102A43]/5 text-[#102A43]',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden font-sans border-t border-[#08213D]/6">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#F5B400]" />
            <span className="text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase">
              CLINIC ENVIRONMENT
            </span>
            <div className="w-8 h-[2px] bg-[#F5B400]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-3">
            A Thoughtful Clinic Environment
          </h2>

          <p className="text-[#526A84] text-base leading-relaxed">
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
                className="bg-[#F7FAFD] rounded-2xl p-7 border border-[#08213D]/6 hover:border-[#168DD0]/40 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.accent}`}>
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-xs font-black tracking-widest text-[#7890A8]/40">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xs font-black tracking-[0.15em] text-[#07182D] mb-2 uppercase">
                    {item.title}
                  </h3>

                  <p className="text-[#526A84] text-xs sm:text-sm leading-relaxed">
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

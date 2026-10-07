import React from 'react';
import { AlertCircle, Layers, ClipboardCheck, Sparkles } from 'lucide-react';

export const SymptomsToAssessment: React.FC = () => {
  const steps = [
    {
      icon: AlertCircle,
      title: '01. Identify Symptoms',
      subtitle: 'Pain, Stiffness, or Weakness',
      desc: 'Recognizing localized joint ache, restricted spinal mobility, morning stiffness, or muscle fatigue during functional activities.',
      iconColor: 'text-rose-600 bg-rose-50 border-rose-200',
    },
    {
      icon: Layers,
      title: '02. Map to Anatomy',
      subtitle: 'Biomechanics & Kinetic Chain',
      desc: 'Understanding the underlying joint, tendon, nerve root, or postural alignment factors contributing to discomfort.',
      iconColor: 'text-orange-600 bg-orange-50 border-orange-200',
    },
    {
      icon: ClipboardCheck,
      title: '03. Clinical Assessment',
      subtitle: 'Targeted Plan Formulation',
      desc: 'In-person physical evaluation by Dr. K. Bhavendra PT to prescribe exact electrotherapy, decompression, or kinetic exercises.',
      iconColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FBFBFA] relative overflow-hidden font-sans border-t border-stone-200/80">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>UNDERSTANDING YOUR BODY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15] mb-4">
            From Symptoms To Structured Recovery
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            How physical discomfort connects to clinical evaluation, root-cause diagnosis, and tailored rehabilitation planning.
          </p>
        </div>

        {/* 3 Step Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-3xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group shadow-sm"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform ${step.iconColor}`}>
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-800 block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-black text-stone-900 tracking-wide mb-3">
                    {step.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="w-10 h-[3px] bg-stone-200 group-hover:w-full group-hover:bg-emerald-600 transition-all duration-500 mt-6 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

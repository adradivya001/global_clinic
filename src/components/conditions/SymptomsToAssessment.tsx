import React from 'react';
import { AlertCircle, Layers, ClipboardCheck, Sparkles } from 'lucide-react';

export const SymptomsToAssessment: React.FC = () => {
  const steps = [
    {
      icon: AlertCircle,
      title: '01. Identify Symptoms',
      subtitle: 'Pain, Stiffness, or Weakness',
      desc: 'Recognizing localized joint ache, restricted spinal mobility, morning stiffness, or muscle fatigue during functional activities.',
      iconColor: 'text-[#B87908] bg-[#FAF4E8] border-[#EAD9B7]',
    },
    {
      icon: Layers,
      title: '02. Map to Anatomy',
      subtitle: 'Biomechanics & Kinetic Chain',
      desc: 'Understanding the underlying joint, tendon, nerve root, or postural alignment factors contributing to discomfort.',
      iconColor: 'text-[#B87908] bg-[#FAF4E8] border-[#EAD9B7]',
    },
    {
      icon: ClipboardCheck,
      title: '03. Clinical Assessment',
      subtitle: 'Targeted Plan Formulation',
      desc: 'In-person physical evaluation by Dr. K. Bhavendra PT to prescribe exact electrotherapy, decompression, or kinetic exercises.',
      iconColor: 'text-[#B87908] bg-[#FAF4E8] border-[#EAD9B7]',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF8] relative overflow-hidden font-sans border-t border-[#EAD9B7]/60">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#F8EAC9]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#FAF4E8]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8EAC9] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
            <span>UNDERSTANDING YOUR BODY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.15] mb-4">
            From Symptoms To Structured Recovery
          </h2>
          <p className="text-[#65594B] text-sm sm:text-base leading-relaxed">
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
                className="bg-white border border-[#EAD9B7] rounded-3xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#B87908] group shadow-sm"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform ${step.iconColor}`}>
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B87908] block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#24190F] tracking-wide mb-3">
                    {step.title}
                  </h3>

                  <p className="text-[#65594B] text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="w-10 h-[3px] bg-[#EAD9B7] group-hover:w-full group-hover:bg-[#B87908] transition-all duration-500 mt-6 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


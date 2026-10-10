import React from 'react';
import { CheckCircle2, Activity } from 'lucide-react';

export const FindingRightApproach: React.FC = () => {
  const criteria = [
    {
      title: 'Current Symptoms & Severity',
      desc: 'Differentiating acute inflammation from chronic biomechanical stress to select safe initial loading parameters.',
    },
    {
      title: 'Movement & Range Limitations',
      desc: 'Evaluating joint kinematics, capsular tightness, and compensatory muscle recruitment patterns during functional movement.',
    },
    {
      title: 'Clinical Assessment Findings',
      desc: 'Applying physical orthopedic tests, neurological screening, and diagnostic palpation to pinpoint the pain generator.',
    },
    {
      title: 'Individual Lifestyle & Goals',
      desc: 'Structuring treatment frequency and exercise complexity around occupational demands, sport goals, and daily life.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF8] relative overflow-hidden font-sans border-t border-[#EAD9B7]">
      {/* Decorative ambient tint */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F8EAC9]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FAF4E8]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 text-[#B87908]" />
            <span>CLINICAL SELECTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15] mb-4 font-serif">
            Finding The Right Treatment Approach
          </h2>

          <p className="text-[#65594B] text-base sm:text-lg leading-relaxed">
            Physiotherapy is never one-size-fits-all. Treatment selection is carefully guided by standardized physical evaluations, functional limitations, and realistic rehabilitation goals.
          </p>
        </div>

        {/* 4 Criteria Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-[#EAD9B7] shadow-[0_4px_20px_rgba(91,61,18,0.04)] hover:shadow-xl hover:border-[#B87908]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF4E8] text-[#B87908] flex items-center justify-center mb-5 border border-[#EAD9B7] shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-black text-[#24190F] mb-2.5 font-serif">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#65594B] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="w-10 h-[3px] bg-gradient-to-r from-[#B87908] to-[#D99B24] rounded-full mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


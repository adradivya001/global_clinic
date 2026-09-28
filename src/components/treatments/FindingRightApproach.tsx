import React from 'react';
import { CheckCircle2, Activity } from 'lucide-react';

export const FindingRightApproach: React.FC = () => {
  const criteria = [
    {
      title: 'Current Symptoms & Severity',
      desc: 'Differentiating acute inflammation from chronic discomfort to select safe initial loading parameters.',
    },
    {
      title: 'Movement & Range Limitations',
      desc: 'Evaluating joint kinematics, capsular tightness, and compensatory muscle patterns during functional tasks.',
    },
    {
      title: 'Clinical Assessment Findings',
      desc: 'Using physical orthopedic tests, neurological screening, and palpation to identify the primary pain generator.',
    },
    {
      title: 'Individual Lifestyle & Goals',
      desc: 'Structuring treatment frequency and exercise complexity around work demands, daily routine, and activity targets.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7FAFD] relative overflow-hidden font-sans border-t border-[#08213D]/6">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase mb-4">
            <Activity className="w-3.5 h-3.5 text-[#086B9F]" />
            <span>CLINICAL SELECTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-4">
            Finding The Right Approach
          </h2>

          <p className="text-[#526A84] text-base leading-relaxed">
            Physiotherapy is not one-size-fits-all. Treatment selection is carefully guided by detailed physical evaluation, functional limitations, and realistic rehabilitation goals.
          </p>
        </div>

        {/* 4 Criteria Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-[#08213D]/6 shadow-[0_4px_20px_rgba(8,33,61,0.03)] hover:shadow-md hover:border-[#168DD0]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#086B9F] flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                <h3 className="text-base font-extrabold text-[#07182D] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#526A84] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="w-8 h-[2px] bg-[#086B9F]/20 mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

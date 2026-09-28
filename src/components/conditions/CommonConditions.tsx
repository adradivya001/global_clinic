import React from 'react';
import { Activity, ShieldCheck, Zap, Heart, Compass, Sparkles, Target, AlertCircle } from 'lucide-react';

interface CommonConditionsProps {
  onBookClick: () => void;
}

export const CommonConditions: React.FC<CommonConditionsProps> = ({ onBookClick }) => {
  const conditionsList = [
    {
      title: 'Knee Pain',
      desc: 'Ligament sprains, meniscus tears, osteoarthritis wear and patellar discomfort.',
      icon: <Activity className="w-5 h-5 text-[#168DD0]" />,
    },
    {
      title: 'Back Pain',
      desc: 'Sciatica nerve pain, lumbar muscle spasm, herniated disc strain and spinal stiffness.',
      icon: <ShieldCheck className="w-5 h-5 text-[#F5B400]" />,
    },
    {
      title: 'Neck Pain',
      desc: 'Cervical stiffness, tension headaches, desk posture fatigue and pinched nerves.',
      icon: <Compass className="w-5 h-5 text-[#168DD0]" />,
    },
    {
      title: 'Shoulder Pain',
      desc: 'Frozen shoulder mobility loss, rotator cuff impingement and reaching discomfort.',
      icon: <Heart className="w-5 h-5 text-[#F5B400]" />,
    },
    {
      title: 'Sports Injuries',
      desc: 'Ankle sprains, hamstring pulls, ACL rehabilitation and athletic return-to-sport.',
      icon: <Zap className="w-5 h-5 text-[#168DD0]" />,
    },
    {
      title: 'Posture-Related Problems',
      desc: 'Upper crossed syndrome, thoracic tightness and ergonomic workplace strain.',
      icon: <Target className="w-5 h-5 text-[#F5B400]" />,
    },
    {
      title: 'Joint Stiffness',
      desc: 'Reduced range of motion, post-fracture immobility and degenerative joint tightness.',
      icon: <Sparkles className="w-5 h-5 text-[#168DD0]" />,
    },
    {
      title: 'Muscle Injuries',
      desc: 'Acute muscle strains, chronic trigger points, tendonitis and kinetic imbalances.',
      icon: <AlertCircle className="w-5 h-5 text-[#F5B400]" />,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden font-sans">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#F5B400]" />
            <span className="text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase">
              OVERVIEW
            </span>
            <div className="w-8 h-[2px] bg-[#F5B400]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15]">
            Common Conditions
          </h2>
        </div>

        {/* 8 Compact Condition Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {conditionsList.map((item, idx) => (
            <div
              key={idx}
              onClick={onBookClick}
              className="bg-[#F7FAFD] rounded-2xl p-5 border border-[#08213D]/6 hover:border-[#168DD0]/40 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Icon Pill */}
                <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#EAF4FC] border border-[#08213D]/8 flex items-center justify-center mb-4 transition-colors">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-extrabold text-[#07182D] mb-1.5 group-hover:text-[#086B9F] transition-colors">
                  {item.title}
                </h3>

                {/* One-Line Description */}
                <p className="text-xs text-[#526A84] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-3 mt-3 border-t border-[#08213D]/5 flex items-center justify-between text-[11px] font-bold text-[#086B9F] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Request Assessment</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

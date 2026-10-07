import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FeaturedTreatmentsProps {
  onBookClick: () => void;
}

export const FeaturedTreatments: React.FC<FeaturedTreatmentsProps> = ({ onBookClick }) => {
  const featured = [
    {
      id: 'knee-rehab',
      eyebrow: 'LIGAMENT & JOINT STABILITY',
      title: 'Knee Rehabilitation',
      desc: 'Targeted quadriceps and hamstring biomechanical strengthening, patellar tracking realignment, and structured post-ACL/meniscus recovery.',
      points: [
        'ACL, PCL & Collateral Ligament recovery protocols',
        'Meniscus tear non-surgical & post-op care',
        'Osteoarthritis offloading & joint lubrication drills',
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
      imageLeft: true,
    },
    {
      id: 'back-spine',
      eyebrow: 'LUMBAR DECOMPRESSION & STABILITY',
      title: 'Back & Spine Care',
      desc: 'Specialized spinal mobilization, sciatica decompression, and deep core stabilization retraining designed to resolve chronic pain at the biomechanical root.',
      points: [
        'Herniated disc & sciatica nerve decompression',
        'Postural re-education and spinal ergonomics',
        'Deep transversus abdominis core activation',
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
      imageLeft: false,
    },
    {
      id: 'neck-shoulder',
      eyebrow: 'CERVICAL & ROTATOR CUFF',
      title: 'Neck & Shoulder Rehabilitation',
      desc: 'Comprehensive therapy for frozen shoulder, rotator cuff impingement, and chronic cervical tension caused by desk strain and poor posture.',
      points: [
        'Frozen shoulder capsular release & mobility',
        'Rotator cuff strengthening & scapular rhythm',
        'Cervical spine alignment & tension headache relief',
      ],
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
      imageLeft: true,
    },
    {
      id: 'sports-injury',
      eyebrow: 'ATHLETIC RETURN-TO-PLAY',
      title: 'Sports Injury Rehabilitation',
      desc: 'High-performance recovery tailored for athletes, focusing on muscular symmetry, tendon resilience, and safe, confident return to competitive sport.',
      points: [
        'Ankle sprains & Achilles tendinopathy rehabilitation',
        'Hamstring & groin strain progressive loading',
        'Agility, proprioception & re-injury prevention',
      ],
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
      imageLeft: false,
    },
    {
      id: 'posture-correction',
      eyebrow: 'ERGONOMICS & REALIGNMENT',
      title: 'Posture Correction',
      desc: 'Correcting upper crossed syndrome, forward head posture, and pelvic tilt through targeted muscle lengthening and spinal stabilizing exercises.',
      points: [
        'Desk posture analysis & workplace ergonomics',
        'Thoracic mobility & chest opener protocols',
        'Kinetic chain alignment for everyday ease',
      ],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80',
      imageLeft: true,
    },
    {
      id: 'mobility-strength',
      eyebrow: 'FUNCTIONAL INDEPENDENCE',
      title: 'Mobility & Strength Rehabilitation',
      desc: 'Progressive functional conditioning designed to build physical capacity, joint resilience, balance, and lifelong movement freedom.',
      points: [
        'Age-friendly functional balance & gait retraining',
        'Progressive resistance load management',
        'Daily activity stamina & muscle endurance',
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80',
      imageLeft: false,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FBFBFA] relative overflow-hidden font-sans border-t border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-emerald-600" />
            <span className="text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase">
              FEATURED AREAS
            </span>
            <div className="w-8 h-[2px] bg-emerald-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
            Focused Care For The Way You Move.
          </h2>
        </div>

        {/* Alternating Visual Panels */}
        <div className="space-y-16 lg:space-y-24">
          {featured.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 ${
                  item.imageLeft ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="relative rounded-[24px] overflow-hidden border border-stone-200 shadow-lg shadow-stone-300/30 bg-stone-900 group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Content Column */}
              <div
                className={`lg:col-span-6 flex flex-col justify-center space-y-5 ${
                  item.imageLeft ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 block mb-2">
                    {item.eyebrow}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                  {item.desc}
                </p>

                {/* Key Points */}
                <ul className="space-y-2.5 pt-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-stone-800 font-medium leading-snug">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Small CTA */}
                <div className="pt-3">
                  <button
                    onClick={onBookClick}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all hover:gap-3 cursor-pointer group"
                  >
                    <span>Book for {item.title}</span>
                    <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

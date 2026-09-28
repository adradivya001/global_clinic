import React from 'react';
import { ArrowRight, Activity, ShieldCheck, Zap, Heart, Compass, Sparkles } from 'lucide-react';

interface TreatmentCategoriesProps {
  onBookClick: () => void;
}

export const TreatmentCategories: React.FC<TreatmentCategoriesProps> = ({ onBookClick }) => {
  const categories = [
    {
      number: '01',
      category: 'JOINT & SPINE CARE',
      title: 'Orthopedic Rehabilitation',
      desc: 'Musculoskeletal conditions, joint problems, mobility limitations and injury recovery.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      icon: <Activity className="w-5 h-5 text-[#168DD0]" />,
    },
    {
      number: '02',
      category: 'ATHLETIC RECOVERY',
      title: 'Sports Rehabilitation',
      desc: 'Sports injuries, performance recovery, return-to-sport rehabilitation and injury prevention.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      icon: <Zap className="w-5 h-5 text-[#F5B400]" />,
    },
    {
      number: '03',
      category: 'POST-OPERATIVE CARE',
      title: 'Post-Surgical Rehabilitation',
      desc: 'Structured rehabilitation following surgery, with emphasis on restoring movement, strength and function.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      icon: <ShieldCheck className="w-5 h-5 text-[#168DD0]" />,
    },
    {
      number: '04',
      category: 'TARGETED RELIEF',
      title: 'Pain Management',
      desc: 'Physiotherapy-based approaches for managing musculoskeletal pain and improving movement.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      icon: <Heart className="w-5 h-5 text-[#F5B400]" />,
    },
    {
      number: '05',
      category: 'KINETIC REALIGNMENT',
      title: 'Posture & Movement Correction',
      desc: 'Movement patterns, posture-related problems, mobility and functional improvement.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
      icon: <Compass className="w-5 h-5 text-[#168DD0]" />,
    },
    {
      number: '06',
      category: 'PHYSICAL CAPACITY',
      title: 'Strength & Functional Rehabilitation',
      desc: 'Progressive strengthening, movement control and rebuilding physical capacity.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      icon: <Sparkles className="w-5 h-5 text-[#F5B400]" />,
    },
  ];

  const handleCardClick = () => {
    onBookClick();
  };

  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#F7FAFD] relative overflow-hidden font-sans scroll-mt-20">
      {/* Background Ambience */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#168DD0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#F5B400]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#F5B400]" />
            <span className="text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase">
              TREATMENT DOMAINS
            </span>
            <div className="w-8 h-[2px] bg-[#F5B400]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-4">
            Areas of Care
          </h2>

          <p className="text-[#526A84] text-base sm:text-lg leading-relaxed">
            Evidence-guided clinical physiotherapy programs targeting the mechanical root cause of discomfort and limitation.
          </p>
        </div>

        {/* 6 Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.number}
              onClick={handleCardClick}
              className="bg-white rounded-[24px] border border-[#08213D]/8 shadow-[0_10px_30px_rgba(8,33,61,0.04)] hover:shadow-[0_20px_45px_rgba(8,33,61,0.12)] hover:border-[#168DD0]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Image Frame */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041326]/70 via-transparent to-transparent opacity-80" />

                {/* Floating Number Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#041326]/80 backdrop-blur-md border border-white/10 text-white text-xs font-black tracking-wider">
                  {cat.number}
                </div>

                {/* Floating Icon Pill */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-sm">
                  {cat.icon}
                </div>

                {/* Category Tag on Image */}
                <div className="absolute bottom-3 left-4">
                  <span className="text-[#FFD45A] font-extrabold text-[10px] tracking-[0.2em] uppercase drop-shadow-sm">
                    {cat.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-[#07182D] mb-2 group-hover:text-[#086B9F] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#526A84] leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                {/* Explore Action Link */}
                <div className="pt-2 border-t border-[#08213D]/6 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#086B9F] group-hover:text-[#07182D] transition-colors">
                    Explore Treatment
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EAF4FC] text-[#086B9F] group-hover:bg-[#F5B400] group-hover:text-[#041326] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

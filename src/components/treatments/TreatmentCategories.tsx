import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Activity, ShieldCheck, Zap, Heart, Compass, Sparkles } from 'lucide-react';
import { CLINIC_SERVICES } from '../../data/clinicData';

interface TreatmentCategoriesProps {
  onBookClick: () => void;
}

export const TreatmentCategories: React.FC<TreatmentCategoriesProps> = ({ onBookClick: _onBookClick }) => {
  const navigate = useNavigate();

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'Zap': return <Zap className="w-5 h-5 text-[#B87908]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#B87908]" />;
      case 'Heart': return <Heart className="w-5 h-5 text-[#B87908]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#B87908]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#D99B24]" />;
      default: return <Activity className="w-5 h-5 text-[#B87908]" />;
    }
  };

  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#FAF4E8] relative overflow-hidden font-sans scroll-mt-20 border-t border-[#EAD9B7]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#F8EAC9]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FAF4E8]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 text-[#B87908]" />
            <span>TREATMENT DOMAINS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15] mb-4 font-serif">
            Clinical Areas of Care
          </h2>

          <p className="text-[#65594B] text-base sm:text-lg leading-relaxed">
            Evidence-guided physical therapy programs targeting the mechanical root cause of pain and mobility deficits. Select any domain to explore clinical protocols.
          </p>
        </div>

        {/* 6 Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CLINIC_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="bg-white rounded-3xl border border-[#EAD9B7] shadow-[0_10px_30px_rgba(91,61,18,0.04)] hover:shadow-xl hover:border-[#B87908]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Image Frame */}
              <div className="relative h-56 overflow-hidden bg-[#FAF4E8]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24190F]/80 via-[#24190F]/20 to-transparent" />

                {/* Floating Number Badge */}
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#24190F]/80 backdrop-blur-md border border-[#EAD9B7]/40 text-white text-xs font-black tracking-wider shadow-sm">
                  {service.number}
                </div>

                {/* Floating Icon Pill */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#EAD9B7] flex items-center justify-center shadow-md">
                  {getIcon(service.iconType)}
                </div>

                {/* Category Tag on Image */}
                <div className="absolute bottom-3.5 left-4">
                  <span className="text-[#F8EAC9] font-black text-[11px] tracking-[0.2em] uppercase drop-shadow-md">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-black text-[#24190F] mb-1 group-hover:text-[#B87908] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs font-bold text-[#B87908] mb-2 leading-snug">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#65594B] leading-relaxed line-clamp-2">
                    {service.shortIntro}
                  </p>
                </div>

                {/* Explore Action Link */}
                <div className="pt-3 border-t border-[#EAD9B7]/50 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B87908] group-hover:text-[#24190F] transition-colors">
                    View Care Pathway
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF4E8] text-[#B87908] group-hover:bg-[#B87908] group-hover:text-white flex items-center justify-center transition-colors">
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


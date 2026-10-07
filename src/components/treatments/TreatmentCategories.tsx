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
      case 'Zap': return <Zap className="w-5 h-5 text-orange-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-700" />;
      case 'Heart': return <Heart className="w-5 h-5 text-rose-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-emerald-700" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-orange-600" />;
      default: return <Activity className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#F4F7F4] relative overflow-hidden font-sans scroll-mt-20 border-t border-stone-200/80">
      {/* Background Ambience */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            <span>TREATMENT DOMAINS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15] mb-4">
            Clinical Areas of Care
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Evidence-guided physical therapy programs targeting the mechanical root cause of pain and mobility deficits. Select any domain to explore clinical protocols.
          </p>
        </div>

        {/* 6 Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CLINIC_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="bg-white rounded-3xl border border-stone-200 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Image Frame */}
              <div className="relative h-56 overflow-hidden bg-stone-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />

                {/* Floating Number Badge */}
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-black tracking-wider shadow-sm">
                  {service.number}
                </div>

                {/* Floating Icon Pill */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-stone-200 flex items-center justify-center shadow-md">
                  {getIcon(service.iconType)}
                </div>

                {/* Category Tag on Image */}
                <div className="absolute bottom-3.5 left-4">
                  <span className="text-orange-300 font-black text-[11px] tracking-[0.2em] uppercase drop-shadow-md">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-black text-stone-900 mb-1 group-hover:text-emerald-800 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs font-bold text-orange-700 mb-2 leading-snug">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2">
                    {service.shortIntro}
                  </p>
                </div>

                {/* Explore Action Link */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 group-hover:text-stone-900 transition-colors">
                    View Care Pathway
                  </span>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
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

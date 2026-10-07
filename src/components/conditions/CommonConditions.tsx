import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, ShieldCheck, Zap, Heart, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { CLINIC_SERVICES } from '../../data/clinicData';

interface CommonConditionsProps {
  onBookClick: () => void;
}

export const CommonConditions: React.FC<CommonConditionsProps> = ({ onBookClick: _onBookClick }) => {
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
    <section className="py-16 lg:py-24 bg-[#FBFBFA] relative overflow-hidden font-sans border-t border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            <span>CLINICAL SERVICES & CONDITIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15] mb-3">
            Services & Conditions We Treat
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Personalized, evidence-based physical therapy delivered across 6 specialized clinical domains. Select any department to explore the full rehabilitation framework.
          </p>
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="bg-white rounded-3xl p-7 border border-stone-200/90 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Header Row: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 group-hover:bg-emerald-100 border border-emerald-100 flex items-center justify-center transition-colors">
                      {getIcon(service.iconType)}
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-stone-500 bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200">
                      #{service.number}
                    </span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-black text-stone-900 mb-1.5 group-hover:text-emerald-800 transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs font-bold text-orange-700 mb-2 leading-snug">
                  {service.tagline}
                </p>

                {/* Short Intro */}
                <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-2">
                  {service.shortIntro}
                </p>

                {/* Conditions Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100">
                  {(service.keyConditions ?? service.conditionsAddressed).slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200 text-[10px] font-semibold text-stone-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {((service.keyConditions ?? service.conditionsAddressed).length > 3) && (
                    <span className="px-2 py-1 rounded-lg bg-stone-100 text-[10px] font-bold text-stone-500">
                      +{(service.keyConditions ?? service.conditionsAddressed).length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                <span>Explore Conditions Directory</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

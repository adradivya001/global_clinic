import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Phone,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Activity,
  Zap,
  Heart,
  Compass
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CLINIC_INFO, CLINIC_SERVICES } from '../../data/clinicData';
import type { ClinicService } from '../../data/types';
import { ConditionCategoryDirectory } from './ConditionCategoryDirectory';
import { getSubconditionsForService } from '../../data/conditionsData';

interface ServiceDetailPageProps {
  serviceId: string;
  onBack: () => void;
  onBookClick: () => void;
  onSelectService?: (id: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onBack,
  onBookClick,
  onSelectService
}) => {
  const navigate = useNavigate();
  const serviceIndex = CLINIC_SERVICES.findIndex((s) => s.id === serviceId);
  const service: ClinicService = CLINIC_SERVICES[serviceIndex] || CLINIC_SERVICES[0];

  const subconditions = getSubconditionsForService(service.id);

  const prevService =
    serviceIndex > 0
      ? CLINIC_SERVICES[serviceIndex - 1]
      : CLINIC_SERVICES[CLINIC_SERVICES.length - 1];
  const nextService =
    serviceIndex < CLINIC_SERVICES.length - 1
      ? CLINIC_SERVICES[serviceIndex + 1]
      : CLINIC_SERVICES[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  const renderIcon = (type: string, className = 'w-6 h-6') => {
    switch (type) {
      case 'Zap':
        return <Zap className={className} />;
      case 'Heart':
        return <Heart className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      default:
        return <Activity className={className} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFDF8] text-[#24190F] font-sans antialiased flex flex-col justify-between">
      {/* ------------------------------------------------------------- */}
      {/* 01. TOP BRAND & NAVIGATION BAR */}
      {/* ------------------------------------------------------------- */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-[#EAD9B7] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#65594B] hover:text-[#B87908] transition-colors py-1.5 px-2.5 rounded-xl hover:bg-[#FAF4E8] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#B87908]" />
            <span>Back to All Services</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#B87908]">
              {CLINIC_INFO.name}
            </span>
            <span className="text-[#EAD9B7]">•</span>
            <span className="text-xs text-[#65594B] font-bold">
              Domain #{service.number}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#65594B] hover:text-[#24190F] bg-[#FAF4E8] hover:bg-[#F8EAC9] border border-[#EAD9B7] px-3 py-1.5 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#B87908]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onBookClick}
              className="flex items-center gap-1.5 bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:opacity-95 text-white font-black text-xs uppercase tracking-wider px-4 py-2 rounded-xl shadow-md shadow-[#B87908]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Session</span>
            </button>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 02. CATEGORY PAGE LAYOUT (LEVEL 2) */}
      {/* ------------------------------------------------------------- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 flex-1 w-full">
        {/* ----------------- 1. PAGE HERO ----------------- */}
        <section className="relative overflow-hidden bg-white border border-[#EAD9B7] rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F8EAC9]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FAF4E8] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Metadata Tags */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#B87908] text-white font-black text-xs tracking-widest uppercase shadow-xs">
                #{service.number}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
                {service.badge || 'Clinical Care Domain'}
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="flex items-start gap-4 sm:gap-5 mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F8EAC9] border border-[#EAD9B7] flex items-center justify-center text-[#B87908] shadow-xs shrink-0">
                {renderIcon(service.iconType, 'w-6 h-6 sm:w-7 sm:h-7 text-[#B87908]')}
              </div>
              <div className="space-y-1.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.12] uppercase">
                  {service.name}
                </h1>
                <p className="text-sm sm:text-lg font-bold text-[#B87908] leading-snug">
                  {service.tagline || 'Restoring comfortable movement, strength, mobility, and everyday function.'}
                </p>
              </div>
            </div>

            {/* Short Introductory Paragraph */}
            <p className="text-sm sm:text-base text-[#65594B] leading-relaxed max-w-4xl mb-6">
              {service.overview ||
                'Physiotherapy for orthopaedic conditions focuses on restoring comfortable movement, strength, mobility, and everyday function affected by injuries, joint problems, muscle conditions, or surgery.'}
            </p>

            {/* Compact Metadata Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 border-t border-[#EAD9B7]/50">
              <div className="bg-[#FAF4E8] border border-[#EAD9B7] rounded-2xl p-3">
                <span className="block text-[10px] font-black uppercase tracking-wider text-[#65594B]/70">Clinical Lead</span>
                <span className="text-xs sm:text-sm font-bold text-[#24190F]">Dr. K. Bhavendra PT</span>
              </div>
              <div className="bg-[#FAF4E8] border border-[#EAD9B7] rounded-2xl p-3">
                <span className="block text-[10px] font-black uppercase tracking-wider text-[#65594B]/70">Primary Focus</span>
                <span className="text-xs sm:text-sm font-bold text-[#B87908]">Root-Cause Care</span>
              </div>
              <div className="bg-[#FAF4E8] border border-[#EAD9B7] rounded-2xl p-3">
                <span className="block text-[10px] font-black uppercase tracking-wider text-[#65594B]/70">Methodology</span>
                <span className="text-xs sm:text-sm font-bold text-[#24190F]">Evidence-Guided</span>
              </div>
              <div className="bg-[#FAF4E8] border border-[#EAD9B7] rounded-2xl p-3">
                <span className="block text-[10px] font-black uppercase tracking-wider text-[#65594B]/70">Center</span>
                <span className="text-xs sm:text-sm font-bold text-[#B87908]">Anantapur Center</span>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------- 2. VISUAL CONDITION DIRECTORY (LEVEL 2 GRID) ----------------- */}
        {subconditions.length > 0 ? (
          <section className="pt-2">
            <ConditionCategoryDirectory
              conditions={subconditions}
              categoryTitle={service.name}
              categorySubtitle={
                'Select any of the 23 conditions below to explore what causes the problem, how our physiotherapists treat it, and what to expect during your recovery.'
              }
              onSelectCondition={(condId) => {
                navigate(`/services/${service.id}/${condId}`);
              }}
            />
          </section>
        ) : (
          /* Fallback for other domains without subcondition datasets yet */
          <section className="bg-white border border-[#EAD9B7] rounded-3xl p-8 space-y-6">
            <h2 className="text-xl font-serif font-bold text-[#24190F]">Clinical Scope &amp; Care Pathway</h2>
            <p className="text-sm text-[#65594B] leading-relaxed">{service.shortIntro}</p>
            <p className="text-sm text-[#65594B] leading-relaxed">{service.whatItInvolves}</p>
          </section>
        )}

        {/* ----------------- 3. BOTTOM CONSULTATION CTA ----------------- */}
        <section className="bg-gradient-to-r from-[#24190F] via-[#3D2B1A] to-[#24190F] border border-[#B87908]/40 rounded-3xl p-6 sm:p-9 text-center relative overflow-hidden shadow-xl text-white">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-[#D99B24] mb-1.5">
            SCHEDULE AN ASSESSMENT
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight mb-2 max-w-xl mx-auto">
            Ready to begin your personalized rehabilitation?
          </h2>
          <p className="text-xs sm:text-sm text-[#EAD9B7] mb-6 max-w-md mx-auto leading-relaxed">
            Consult with Dr. K. Bhavendra PT at Global Physiotherapy Clinic to establish an evidence-based care plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#D99B24]" />
              <span>Call: {CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Book Evaluation Session →</span>
            </button>
          </div>
        </section>

        {/* ----------------- 4. BOTTOM SERVICE CATEGORY SWITCHER ----------------- */}
        {onSelectService && (
          <div className="pt-4 border-t border-[#EAD9B7] flex items-center justify-between gap-4">
            <button
              onClick={() => onSelectService(prevService.id)}
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-white hover:bg-[#FAF4E8] border border-[#EAD9B7] text-left transition-all group max-w-[48%] cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4 text-[#65594B] group-hover:text-[#B87908] shrink-0" />
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#65594B]/70">Previous Service</span>
                <span className="text-xs font-bold text-[#24190F] group-hover:text-[#B87908] line-clamp-1">{prevService.name}</span>
              </div>
            </button>

            <button
              onClick={() => onSelectService(nextService.id)}
              className="flex items-center justify-end gap-2.5 p-3 rounded-2xl bg-white hover:bg-[#FAF4E8] border border-[#EAD9B7] text-right transition-all group max-w-[48%] cursor-pointer shadow-xs"
            >
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#65594B]/70">Next Service</span>
                <span className="text-xs font-bold text-[#24190F] group-hover:text-[#B87908] line-clamp-1">{nextService.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#65594B] group-hover:text-[#B87908] shrink-0" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ServiceDetailPage;

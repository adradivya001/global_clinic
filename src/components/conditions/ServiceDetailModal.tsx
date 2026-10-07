import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Phone,
  Calendar,
  Sparkles,
  Activity,
  ShieldCheck,
  Zap,
  Heart,
  Compass,
  AlertTriangle,
  Clock,
  Stethoscope,
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_SERVICES } from '../../data/clinicData';
import type { ClinicService } from '../../data/types';

import { ORTHOPEDIC_CONDITIONS_DATA } from '../../data/orthopedicConditionsData';

type ServiceTab = 'overview' | 'conditions23' | 'journey' | 'experience' | 'safety';

interface ServiceDetailModalProps {
  selectedServiceId: string | null;
  onClose: () => void;
  onBookClick: () => void;
  onSelectService?: (id: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  selectedServiceId,
  onClose,
  onBookClick,
  onSelectService
}) => {
  const isOrtho = selectedServiceId === 'orthopedic-conditions' || selectedServiceId === 'orthopedic-rehab';
  const [activeTab, setActiveTab] = useState<ServiceTab>('overview');

  const service: ClinicService | undefined = CLINIC_SERVICES.find(s => s.id === selectedServiceId);

  React.useEffect(() => {
    setActiveTab(isOrtho ? 'conditions23' : 'overview');
  }, [selectedServiceId, isOrtho]);

  if (!selectedServiceId || !service) return null;

  const currentIndex = CLINIC_SERVICES.findIndex(s => s.id === selectedServiceId);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + CLINIC_SERVICES.length) % CLINIC_SERVICES.length;
    if (onSelectService) onSelectService(CLINIC_SERVICES[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % CLINIC_SERVICES.length;
    if (onSelectService) onSelectService(CLINIC_SERVICES[nextIndex].id);
  };

  const tabs: { id: ServiceTab; label: string }[] = isOrtho
    ? [
        { id: 'conditions23', label: '23 Ortho Conditions' },
        { id: 'overview', label: 'Overview & Approach' },
        { id: 'journey', label: 'Rehabilitation Journey' },
        { id: 'experience', label: 'Patient Experience' },
        { id: 'safety', label: 'Safety & Aftercare' },
      ]
    : [
        { id: 'overview', label: 'Overview & Approach' },
        { id: 'journey', label: `Rehabilitation Journey` },
        { id: 'experience', label: 'Patient Experience' },
        { id: 'safety', label: 'Safety & Aftercare' },
      ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/60 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF8F5] border border-stone-200 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Service Switcher Header */}
        <div className="px-5 py-4 border-b border-stone-200 bg-white/90 backdrop-blur-xl shrink-0 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            {CLINIC_SERVICES.map((svc) => {
              const isActive = svc.id === selectedServiceId;
              return (
                <button
                  key={svc.id}
                  onClick={() => onSelectService && onSelectService(svc.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                      : 'bg-stone-100 text-stone-700 hover:bg-emerald-50 hover:text-emerald-800'
                  }`}
                >
                  <span>{svc.number}</span>
                  <span className="hidden sm:inline">{svc.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 text-stone-800">

          {/* Hero Banner */}
          <div className="relative h-52 sm:h-60 w-full overflow-hidden shrink-0 bg-stone-100">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
            <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
              <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-black tracking-wider shadow-sm">
                SERVICE {service.number}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                {service.badge}
              </span>
            </div>
            <div className="absolute bottom-5 left-6 right-6 z-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                {service.name}
              </h2>
              <p className="text-emerald-100 text-xs sm:text-sm font-medium mt-1 drop-shadow-sm">
                {service.tagline}
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-7 sm:px-10 pt-5 border-b border-stone-200 bg-white">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none pb-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-black'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content — Editorial Light Article */}
          <div className="px-7 sm:px-10 py-7 space-y-6">

            {/* TAB 0: 23 ORTHOPEDIC CONDITIONS (CONVERSATIONAL PATIENT CARDS) */}
            {activeTab === 'conditions23' && (
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-wider text-stone-900">
                      23 Conditions &amp; Practical Recovery Guides
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Clear answers on what causes the issue, how we help, and your expected path to recovery.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-1">
                  {ORTHOPEDIC_CONDITIONS_DATA.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-3.5 hover:border-emerald-300 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-900 font-black text-xs flex items-center justify-center">
                            {item.number}
                          </span>
                          <h5 className="text-base font-black text-stone-900 uppercase">
                            {item.title}
                          </h5>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {item.bodyArea}
                        </span>
                      </div>

                      <p className="text-xs font-bold text-orange-700">
                        {item.tagline}
                      </p>

                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-bold text-stone-800 block mb-0.5">Understanding the problem:</span>
                          <p className="text-stone-600 leading-relaxed">{item.understanding}</p>
                        </div>
                        <div className="p-2.5 bg-emerald-50/50 rounded-xl border border-emerald-100">
                          <span className="font-bold text-emerald-900 block mb-0.5">How we help:</span>
                          <p className="text-stone-700 leading-relaxed">{item.howWeHelp}</p>
                        </div>
                        <div>
                          <span className="font-bold text-stone-800 block mb-0.5">Your recovery &amp; goal:</span>
                          <p className="text-stone-600 leading-relaxed">{item.yourRecovery}</p>
                        </div>
                      </div>

                      {/* Lifecycle Flow Chain */}
                      <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center gap-1 text-[10px]">
                        <span className="font-bold text-stone-400 mr-1">What to expect:</span>
                        {item.flowSteps.map((step, idx) => (
                          <React.Fragment key={idx}>
                            <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-semibold">
                              {step}
                            </span>
                            {idx < item.flowSteps.length - 1 && (
                              <span className="text-stone-400">➔</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 1: OVERVIEW & APPROACH */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-emerald-800 mb-2">
                    About This Service
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed text-stone-700">
                    {service.shortIntro}
                  </p>
                </div>

                <div className="border-t border-stone-200" />

                <div>
                  <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-emerald-800 mb-2">
                    What It Involves
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed text-stone-700">
                    {service.whatItInvolves}
                  </p>
                </div>

                <div className="border-t border-stone-200" />

                <div>
                  <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-emerald-800 mb-2">
                    How Rehabilitation Works
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed text-stone-700">
                    {service.howRehabWorks}
                  </p>
                </div>

                <div className="border-t border-stone-200" />

                {/* Conditions tags */}
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-emerald-800 mb-2.5">
                    Conditions Commonly Addressed
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.conditionsAddressed.map((cond, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-700 shadow-2xs"
                      >
                        {cond}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: REHABILITATION JOURNEY */}
            {activeTab === 'journey' && (
              <div className="space-y-6">
                <p className="text-xs text-stone-500 leading-relaxed">
                  The rehabilitation pathway is individually tailored. Progression is based on objective clinical milestones, joint response, and functional targets.
                </p>

                <div className="space-y-4">
                  {service.procedurePathway.map((step, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-xs font-black text-emerald-800 shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h5 className="text-sm font-black text-stone-900 mb-1 uppercase tracking-wide">
                          {step.title}
                        </h5>
                        {step.desc && (
                          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{step.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: PATIENT EXPERIENCE */}
            {activeTab === 'experience' && (
              <div className="space-y-6">
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-emerald-800 mb-2">
                    What The Patient Experiences
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed text-stone-700">
                    {service.patientExperience}
                  </p>
                </div>

                <div className="border-t border-stone-200" />

                <div>
                  <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-emerald-800 mb-2">
                    Potential Rehabilitation Benefits
                  </span>
                  <ul className="space-y-2 mt-2">
                    {service.potentialBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-stone-200" />

                <div>
                  <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-emerald-800 mb-2">
                    Session Cadence & Frequency
                  </span>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {service.sessionInfo}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 4: SAFETY & AFTERCARE */}
            {activeTab === 'safety' && (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200">
                  <div className="flex items-center gap-2 mb-2 text-orange-800">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-black uppercase tracking-wider">
                      Safety &amp; Clinical Considerations
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-orange-950/80">
                    {service.safetyConsiderations}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                  <div className="flex items-center gap-2 mb-2 text-emerald-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span className="text-xs font-black uppercase tracking-wider">
                      After-Rehabilitation Guidance
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-emerald-950/80">
                    {service.afterRehabGuidance}
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Action Footer */}
        <div className="px-6 py-4 border-t border-stone-200 bg-white shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handlePrev}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors cursor-pointer"
            >
              ← Previous
            </button>
            <button
              onClick={handleNext}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors cursor-pointer"
            >
              Next →
            </button>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={() => { onClose(); onBookClick(); }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer whitespace-nowrap hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

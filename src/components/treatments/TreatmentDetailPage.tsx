import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Phone,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  ShieldAlert,
  Activity,
  Footprints,
  Dumbbell,
  RotateCcw,
  Wind,
  Compass,
  SlidersHorizontal,
  Zap,
  Sun,
  Snowflake,
  Crosshair,
  Flame,
  Layers,
  MoveHorizontal,
  Split,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Stethoscope
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_MACHINES } from '../../data/clinicData';
import { getEquipmentById, CLINIC_EQUIPMENT } from '../../data/equipmentData';
import type { ClinicMachine } from '../../data/types';

interface TreatmentDetailPageProps {
  machineId: string;
  onBack: () => void;
  onBookClick: () => void;
  onSelectMachine?: (id: string) => void;
}

export const TreatmentDetailPage: React.FC<TreatmentDetailPageProps> = ({
  machineId,
  onBack,
  onBookClick,
  onSelectMachine
}) => {
  const machineIndex = CLINIC_MACHINES.findIndex(m => m.id === machineId);
  const machine: ClinicMachine = CLINIC_MACHINES[machineIndex] || CLINIC_MACHINES[0];
  const equipmentInfo = getEquipmentById(machineId) || CLINIC_EQUIPMENT[0];

  const prevMachine = machineIndex > 0 ? CLINIC_MACHINES[machineIndex - 1] : CLINIC_MACHINES[CLINIC_MACHINES.length - 1];
  const nextMachine = machineIndex < CLINIC_MACHINES.length - 1 ? CLINIC_MACHINES[machineIndex + 1] : CLINIC_MACHINES[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [machineId]);

  const renderIcon = (type: string, className = "w-6 h-6") => {
    switch (type) {
      case 'Footprints': return <Footprints className={className} />;
      case 'Dumbbell': return <Dumbbell className={className} />;
      case 'RotateCcw': return <RotateCcw className={className} />;
      case 'CloudFog':
      case 'Waves': return <Wind className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'CircleDot': return <SlidersHorizontal className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Sun': return <Sun className={className} />;
      case 'Snowflake': return <Snowflake className={className} />;
      case 'Crosshair': return <Crosshair className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'MoveHorizontal': return <MoveHorizontal className={className} />;
      case 'Split': return <Split className={className} />;
      case 'ShieldAlert': return <ShieldCheck className={className} />;
      default: return <Activity className={className} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] text-stone-900 selection:bg-emerald-700 selection:text-white font-sans antialiased flex flex-col justify-between">
      
      {/* ------------------------------------------------------------- */}
      {/* 01. TOP BRAND & NAVIGATION BAR */}
      {/* ------------------------------------------------------------- */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-700 hover:text-emerald-700 transition-colors py-1.5 px-2.5 rounded-xl hover:bg-stone-100 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-emerald-700" />
            <span>Back to Treatments</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-emerald-800">
              {CLINIC_INFO.name}
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-xs text-stone-500 font-semibold">
              Modality #{machine.number}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-stone-700 hover:text-emerald-800 bg-stone-100 hover:bg-stone-200/80 border border-stone-200 px-3 py-1.5 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onBookClick}
              className="flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl shadow-md shadow-emerald-700/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Session</span>
            </button>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 02. SELF-CONTAINED TREATMENT CONTENT (COMPACT & BALANCED) */}
      {/* ------------------------------------------------------------- */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 flex-1">

        {/* ----------------- HERO AREA ----------------- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F4F7F4] to-[#FAF8F5] border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-lg shadow-stone-200/40">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            {/* Metadata Tags */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-2.5 py-0.5 rounded-md bg-stone-900 text-white font-black text-xs tracking-widest uppercase shadow-xs">
                #{machine.number}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                {machine.category}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-orange-600" />
                {machine.badge || 'Supervised Modality'}
              </span>
            </div>

            {/* Title & Image Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-6">
              <div className="lg:col-span-7">
                <div className="flex items-start gap-4 sm:gap-5 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-700 border border-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-700/25 shrink-0">
                    {renderIcon(machine.iconType, "w-6 h-6 sm:w-7 sm:h-7 text-white")}
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15] uppercase">
                      {machine.name}
                    </h1>
                    <p className="mt-2 text-sm sm:text-lg text-emerald-900/90 leading-snug font-medium">
                      {machine.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Machine Clinical Image Preview */}
              <div className="lg:col-span-5">
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 group">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-bold text-white">
                    <span className="bg-stone-900/70 backdrop-blur-xs px-2 py-0.5 rounded-md border border-white/20">Clinical Modality Setup</span>
                    <span className="text-emerald-300">Verified Equipment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Metadata Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 border-t border-stone-200">
              <div className="bg-white border border-stone-200/80 rounded-xl p-3 shadow-2xs">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Treatment Type</span>
                <span className="text-xs sm:text-sm font-bold text-stone-900">Movement Training</span>
              </div>
              <div className="bg-white border border-stone-200/80 rounded-xl p-3 shadow-2xs">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Primary Focus</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-800">{machine.category}</span>
              </div>
              <div className="bg-white border border-stone-200/80 rounded-xl p-3 shadow-2xs">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Clinical Use</span>
                <span className="text-xs sm:text-sm font-bold text-stone-900">Targeted Rehabilitation</span>
              </div>
              <div className="bg-white border border-stone-200/80 rounded-xl p-3 shadow-2xs">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Mode</span>
                <span className="text-xs sm:text-sm font-bold text-orange-700">1:1 Supervised</span>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------- NATURAL CLINICAL EXPLANATION ----------------- */}
        <section className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 space-y-6 shadow-md shadow-stone-200/30">
          <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
            <Stethoscope className="w-5 h-5 text-emerald-700" />
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 block">
                CLINICAL OVERVIEW &amp; PROCESS
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-stone-900">
                About This Treatment &amp; Equipment
              </h2>
            </div>
          </div>

          {/* Natural Explanatory Paragraphs */}
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            {equipmentInfo.paragraphs.map((para, idx) => (
              <p key={idx} className="font-normal text-stone-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Subtle Safety Note */}
          <div className="pt-4 border-t border-stone-200">
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200 text-stone-700 flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed italic">
                {equipmentInfo.safetyNote || 'Treatment is selected based on individual assessment and may not be suitable for everyone.'}
              </p>
            </div>
          </div>
        </section>

        {/* ----------------- POTENTIAL CLINICAL BENEFITS ----------------- */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm sm:text-base font-black uppercase tracking-wider text-stone-900">
              Potential Clinical Benefits
            </h2>
            <span className="text-xs text-stone-500">Therapeutic Outcomes</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {machine.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-stone-200/80 hover:border-emerald-500/40 hover:bg-emerald-50/20 transition-colors shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-stone-800 leading-snug">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------- CLINICAL PROCEDURE LIFECYCLE FLOW CHAIN ----------------- */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-emerald-800">
                  CLINICAL PROCEDURE
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-stone-900">
                Rehabilitation Lifecycle &amp; Session Flow
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Continuous 6-phase physiological calibration chain
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                6-Phase Closed-Loop Flow
              </span>
            </div>
          </div>

          {/* Connected Lifecycle Flow Chain Layout */}
          <div className="relative">
            
            {/* Desktop 2-Tier Serpentine Chain Grid */}
            <div className="space-y-4">
              
              {/* Row 1: Steps 01 -> 02 -> 03 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                {machine.procedure.slice(0, 3).map((step, idx) => {
                  const isLastInRow = idx === 2;
                  return (
                    <div key={idx} className="relative group">
                      {/* Flow Card */}
                      <div className="h-full p-5 rounded-2xl bg-white border border-stone-200/90 hover:border-emerald-600 transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden flex flex-col justify-between">
                        {/* Glow accent */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50/50 rounded-full blur-xl pointer-events-none group-hover:bg-emerald-100/40 transition-all" />

                        <div>
                          {/* Node Header */}
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-xl bg-stone-900 text-white font-black text-xs flex items-center justify-center shadow-sm">
                                {step.step || `0${idx + 1}`}
                              </div>
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800">
                                Phase 0{idx + 1}
                              </span>
                            </div>
                            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                              {idx === 0 ? 'Initiation' : idx === 1 ? 'Preparation' : 'Active Load'}
                            </span>
                          </div>

                          <h3 className="text-sm sm:text-[15px] font-black text-stone-900 tracking-wide uppercase mb-2">
                            {step.title}
                          </h3>

                          {step.desc && (
                            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                              {step.desc}
                            </p>
                          )}
                        </div>

                        {/* Bottom Track Indicator */}
                        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[10px] font-bold text-stone-400">
                          <span className="text-orange-700 flex items-center gap-1">
                            <span>Step 0{idx + 1} of 06</span>
                          </span>
                          <span className="text-emerald-700 flex items-center gap-1 font-mono">
                            FLOW ➔
                          </span>
                        </div>
                      </div>

                      {/* Right Directional Connector Arrow (Desktop only between 01->02 and 02->03) */}
                      {!isLastInRow && (
                        <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-emerald-700 border border-emerald-600 text-white items-center justify-center shadow-md">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Serpentine Transition Connector between Row 1 and Row 2 (Desktop) */}
              <div className="hidden md:flex items-center justify-end pr-10 py-1">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold tracking-wider uppercase shadow-2xs">
                  <span>Rehabilitation Progression Pathway</span>
                  <ChevronRight className="w-3.5 h-3.5 rotate-90 text-orange-600" />
                </div>
              </div>

              {/* Row 2: Steps 04 -> 05 -> 06 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                {machine.procedure.slice(3, 6).map((step, idx) => {
                  const actualIdx = idx + 3;
                  const isLastInRow = idx === 2;
                  return (
                    <div key={actualIdx} className="relative group">
                      {/* Flow Card */}
                      <div className={`h-full p-5 rounded-2xl bg-white border ${
                        isLastInRow 
                          ? 'border-emerald-600 bg-emerald-50/30' 
                          : 'border-stone-200/90 hover:border-emerald-600'
                      } transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden flex flex-col justify-between`}>
                        {/* Glow accent */}
                        <div className={`absolute top-0 right-0 w-24 h-24 ${
                          isLastInRow ? 'bg-emerald-100/50' : 'bg-stone-100/40'
                        } rounded-full blur-xl pointer-events-none group-hover:opacity-100 transition-all`} />

                        <div>
                          {/* Node Header */}
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-xl ${
                                isLastInRow 
                                  ? 'bg-emerald-700 text-white shadow-sm' 
                                  : 'bg-stone-900 text-white shadow-sm'
                              } font-black text-xs flex items-center justify-center`}>
                                {step.step || `0${actualIdx + 1}`}
                              </div>
                              <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                                isLastInRow ? 'text-emerald-800' : 'text-stone-700'
                              }`}>
                                Phase 0{actualIdx + 1}
                              </span>
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${
                              isLastInRow ? 'text-emerald-800' : 'text-stone-400'
                            }`}>
                              {actualIdx === 3 ? 'Monitoring' : actualIdx === 4 ? 'Progression' : 'Completion & Review'}
                            </span>
                          </div>

                          <h3 className="text-sm sm:text-[15px] font-black text-stone-900 tracking-wide uppercase mb-2">
                            {step.title}
                          </h3>

                          {step.desc && (
                            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                              {step.desc}
                            </p>
                          )}
                        </div>

                        {/* Bottom Track Indicator */}
                        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[10px] font-bold text-stone-400">
                          <span className={`${isLastInRow ? 'text-emerald-700' : 'text-orange-700'} flex items-center gap-1`}>
                            <span>Step 0{actualIdx + 1} of 06</span>
                          </span>
                          <span className={`${isLastInRow ? 'text-emerald-700 font-black' : 'text-emerald-700'} flex items-center gap-1 font-mono`}>
                            {isLastInRow ? '✓ MILESTONE' : 'FLOW ➔'}
                          </span>
                        </div>
                      </div>

                      {/* Right Directional Connector Arrow (Desktop only between 04->05 and 05->06) */}
                      {!isLastInRow && (
                        <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-emerald-700 border border-emerald-600 text-white items-center justify-center shadow-md">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

        {/* ----------------- PATIENT EXPERIENCE & CONDITIONS (2-COLUMN) ----------------- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-md shadow-stone-200/30">
          {/* Left: What You May Experience */}
          <div>
            <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-emerald-800 mb-2.5">
              What You May Experience
            </span>
            <p className="text-sm sm:text-[15px] leading-relaxed text-stone-700 font-normal">
              {machine.patientExperience}
            </p>
          </div>

          {/* Right: Conditions It May Be Used For */}
          <div>
            <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-orange-700 mb-2.5">
              Conditions It May Be Used For
            </span>
            <div className="flex flex-wrap gap-1.5">
              {machine.conditions.map((cond, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-900"
                >
                  {cond}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------- SESSION INFO & SAFETY (2-COLUMN) ----------------- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Session Information */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-stone-900">
              <Clock className="w-4 h-4 text-emerald-700" />
              <h3 className="text-xs font-black uppercase tracking-wider">
                Session Information & Cadence
              </h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-600 font-normal">
              {machine.sessionInfo}
            </p>
          </div>

          {/* Right: Safety Considerations */}
          <div className="bg-orange-50/60 border-l-4 border-orange-600 border-y border-r border-orange-200 rounded-r-2xl p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-orange-800">
              <AlertTriangle className="w-4 h-4 text-orange-600" />
              <h3 className="text-xs font-black uppercase tracking-wider">
                Safety & Clinical Screening
              </h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-orange-950 font-normal">
              {machine.safety}
            </p>
          </div>
        </section>

        {/* ----------------- AFTERCARE & CLINICAL NOTE ----------------- */}
        <section className="space-y-4">
          <div className="bg-emerald-50/70 border-l-4 border-emerald-600 border-y border-r border-emerald-200 rounded-r-2xl p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-1.5 text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <h3 className="text-xs font-black uppercase tracking-wider">
                After-Treatment Recovery Guidance
              </h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-emerald-950 font-normal">
              {machine.afterCare}
            </p>
          </div>

          <p className="text-[11px] text-stone-500 leading-relaxed px-2">
            <strong className="text-stone-700 uppercase tracking-wider">Clinical Note — </strong>
            Treatment intensity and progression are determined according to each patient's physiological assessment and response. Administered at {CLINIC_INFO.name}, {CLINIC_INFO.address}.
          </p>
        </section>

        {/* ----------------- FINAL CTA (PAGE END) ----------------- */}
        <section className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden shadow-xl text-white">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-emerald-200 mb-1.5">
            RECOMMENDED NEXT STEP
          </span>
          <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight mb-2 max-w-xl mx-auto">
            Ready to begin your recovery?
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 mb-6 max-w-md mx-auto leading-relaxed">
            Talk to our physiotherapist to find out whether {machine.name.toLowerCase()} is suitable for your rehabilitation goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call: {CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-emerald-900 font-black text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Evaluation Session →</span>
            </button>
          </div>
        </section>

        {/* ----------------- BOTTOM TREATMENT SWITCHER ----------------- */}
        {onSelectMachine && (
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-4">
            <button
              onClick={() => onSelectMachine(prevMachine.id)}
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-white hover:bg-stone-100 border border-stone-200 text-left transition-all group max-w-[48%] cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 shrink-0" />
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-stone-400">Previous</span>
                <span className="text-xs font-bold text-stone-900 group-hover:text-emerald-800 line-clamp-1">{prevMachine.name}</span>
              </div>
            </button>

            <button
              onClick={() => onSelectMachine(nextMachine.id)}
              className="flex items-center justify-end gap-2.5 p-3 rounded-2xl bg-white hover:bg-stone-100 border border-stone-200 text-right transition-all group max-w-[48%] cursor-pointer shadow-xs"
            >
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-stone-400">Next</span>
                <span className="text-xs font-bold text-stone-900 group-hover:text-emerald-800 line-clamp-1">{nextMachine.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 shrink-0" />
            </button>
          </div>
        )}

      </main>
    </div>
  );
};

export default TreatmentDetailPage;

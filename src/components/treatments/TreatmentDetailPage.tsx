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
    <div className="min-h-screen w-full bg-[#FFFDF8] text-[#24190F] selection:bg-[#B87908] selection:text-white font-sans antialiased flex flex-col justify-between">
      
      {/* ------------------------------------------------------------- */}
      {/* 01. TOP BRAND & NAVIGATION BAR */}
      {/* ------------------------------------------------------------- */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-[#EAD9B7] sticky top-0 z-50 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#24190F] hover:text-[#B87908] transition-colors py-1.5 px-2.5 rounded-xl hover:bg-[#FAF4E8] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#B87908]" />
            <span>Back to Treatments</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#B87908]">
              {CLINIC_INFO.name}
            </span>
            <span className="text-[#EAD9B7]">•</span>
            <span className="text-xs text-[#65594B] font-semibold">
              Modality #{machine.number}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#24190F] hover:text-[#B87908] bg-[#FAF4E8] hover:bg-[#EAD9B7]/50 border border-[#EAD9B7] px-3 py-1.5 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#B87908]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onBookClick}
              className="flex items-center gap-1.5 bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:from-[#A06806] hover:to-[#C48A1D] text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl shadow-md shadow-[#B87908]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Session</span>
            </button>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 02. SELF-CONTAINED TREATMENT CONTENT */}
      {/* ------------------------------------------------------------- */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 flex-1">

        {/* ----------------- HERO AREA ----------------- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#FAF4E8] to-[#FFFDF8] border border-[#EAD9B7] rounded-3xl p-6 sm:p-10 shadow-lg shadow-[#5B3D12]/5">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F8EAC9]/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FAF4E8]/80 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            {/* Metadata Tags */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-2.5 py-0.5 rounded-md bg-[#24190F] text-white font-black text-xs tracking-widest uppercase shadow-xs">
                #{machine.number}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] text-xs font-bold uppercase tracking-wider">
                {machine.category}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#B87908]" />
                {machine.badge || 'Supervised Modality'}
              </span>
            </div>

            {/* Title & Image Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-6">
              <div className="lg:col-span-7">
                <div className="flex items-start gap-4 sm:gap-5 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-[#B87908] to-[#D99B24] border border-[#EAD9B7] flex items-center justify-center text-white shadow-md shadow-[#B87908]/20 shrink-0">
                    {renderIcon(machine.iconType, "w-6 h-6 sm:w-7 sm:h-7 text-white")}
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15] uppercase font-serif">
                      {machine.name}
                    </h1>
                    <p className="mt-2 text-sm sm:text-lg text-[#B87908] leading-snug font-medium">
                      {machine.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Machine Clinical Image Preview */}
              <div className="lg:col-span-5">
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#EAD9B7] shadow-md bg-[#FAF4E8] group">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24190F]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-bold text-white">
                    <span className="bg-[#24190F]/70 backdrop-blur-xs px-2 py-0.5 rounded-md border border-[#EAD9B7]/30">Clinical Modality Setup</span>
                    <span className="text-[#F8EAC9]">Verified Equipment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Metadata Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 border-t border-[#EAD9B7]">
              <div className="bg-white border border-[#EAD9B7] rounded-xl p-3 shadow-2xs">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#65594B]">Treatment Type</span>
                <span className="text-xs sm:text-sm font-bold text-[#24190F]">Movement Training</span>
              </div>
              <div className="bg-white border border-[#EAD9B7] rounded-xl p-3 shadow-2xs">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#65594B]">Primary Focus</span>
                <span className="text-xs sm:text-sm font-bold text-[#B87908]">{machine.category}</span>
              </div>
              <div className="bg-white border border-[#EAD9B7] rounded-xl p-3 shadow-2xs">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#65594B]">Clinical Use</span>
                <span className="text-xs sm:text-sm font-bold text-[#24190F]">Targeted Rehabilitation</span>
              </div>
              <div className="bg-white border border-[#EAD9B7] rounded-xl p-3 shadow-2xs">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#65594B]">Mode</span>
                <span className="text-xs sm:text-sm font-bold text-[#B87908]">1:1 Supervised</span>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------- NATURAL CLINICAL EXPLANATION ----------------- */}
        <section className="bg-white border border-[#EAD9B7] rounded-3xl p-6 sm:p-10 space-y-6 shadow-md shadow-[#5B3D12]/5">
          <div className="flex items-center gap-2 pb-3 border-b border-[#EAD9B7]/50">
            <Stethoscope className="w-5 h-5 text-[#B87908]" />
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#B87908] block">
                CLINICAL OVERVIEW &amp; PROCESS
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#24190F] font-serif">
                About This Treatment &amp; Equipment
              </h2>
            </div>
          </div>

          {/* Natural Explanatory Paragraphs */}
          <div className="space-y-4 text-[#65594B] text-sm sm:text-base leading-relaxed">
            {equipmentInfo.paragraphs.map((para, idx) => (
              <p key={idx} className="font-normal text-[#65594B] leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Subtle Safety Note */}
          <div className="pt-4 border-t border-[#EAD9B7]">
            <div className="p-4 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] text-[#24190F] flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-[#B87908] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#65594B] leading-relaxed italic">
                {equipmentInfo.safetyNote || 'Treatment is selected based on individual assessment and may not be suitable for everyone.'}
              </p>
            </div>
          </div>
        </section>

        {/* ----------------- POTENTIAL CLINICAL BENEFITS ----------------- */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm sm:text-base font-black uppercase tracking-wider text-[#24190F] font-serif">
              Potential Clinical Benefits
            </h2>
            <span className="text-xs text-[#65594B]">Therapeutic Outcomes</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {machine.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-[#EAD9B7] hover:border-[#B87908]/40 hover:bg-[#FAF4E8]/50 transition-colors shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#B87908] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#24190F] leading-snug">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------- CLINICAL PROCEDURE LIFECYCLE FLOW CHAIN ----------------- */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#EAD9B7]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#B87908] animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#B87908]">
                  CLINICAL PROCEDURE
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#24190F] font-serif">
                Rehabilitation Lifecycle &amp; Session Flow
              </h2>
              <p className="text-xs text-[#65594B] mt-0.5">
                Continuous 6-phase physiological calibration chain
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-[#B87908] bg-[#FAF4E8] border border-[#EAD9B7] px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B87908]" />
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
                      <div className="h-full p-5 rounded-2xl bg-white border border-[#EAD9B7] hover:border-[#B87908] transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden flex flex-col justify-between">
                        {/* Glow accent */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#F8EAC9]/40 rounded-full blur-xl pointer-events-none group-hover:bg-[#FAF4E8] transition-all" />

                        <div>
                          {/* Node Header */}
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-xl bg-[#24190F] text-white font-black text-xs flex items-center justify-center shadow-sm">
                                {step.step || `0${idx + 1}`}
                              </div>
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#B87908]">
                                Phase 0{idx + 1}
                              </span>
                            </div>
                            <span className="text-[10px] font-bold text-[#65594B] uppercase tracking-widest">
                              {idx === 0 ? 'Initiation' : idx === 1 ? 'Preparation' : 'Active Load'}
                            </span>
                          </div>

                          <h3 className="text-sm sm:text-[15px] font-black text-[#24190F] tracking-wide uppercase mb-2 font-serif">
                            {step.title}
                          </h3>

                          {step.desc && (
                            <p className="text-xs sm:text-[13px] text-[#65594B] leading-relaxed font-normal">
                              {step.desc}
                            </p>
                          )}
                        </div>

                        {/* Bottom Track Indicator */}
                        <div className="mt-4 pt-3 border-t border-[#EAD9B7]/50 flex items-center justify-between text-[10px] font-bold text-[#65594B]">
                          <span className="text-[#B87908] flex items-center gap-1">
                            <span>Step 0{idx + 1} of 06</span>
                          </span>
                          <span className="text-[#B87908] flex items-center gap-1 font-mono">
                            FLOW ➔
                          </span>
                        </div>
                      </div>

                      {/* Right Directional Connector Arrow */}
                      {!isLastInRow && (
                        <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#B87908] border border-[#D99B24] text-white items-center justify-center shadow-md">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Serpentine Transition Connector between Row 1 and Row 2 (Desktop) */}
              <div className="hidden md:flex items-center justify-end pr-10 py-1">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] text-[11px] font-bold tracking-wider uppercase shadow-2xs">
                  <span>Rehabilitation Progression Pathway</span>
                  <ChevronRight className="w-3.5 h-3.5 rotate-90 text-[#B87908]" />
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
                          ? 'border-[#B87908] bg-[#FAF4E8]/50' 
                          : 'border-[#EAD9B7] hover:border-[#B87908]'
                      } transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden flex flex-col justify-between`}>
                        {/* Glow accent */}
                        <div className={`absolute top-0 right-0 w-24 h-24 ${
                          isLastInRow ? 'bg-[#F8EAC9]/60' : 'bg-[#FAF4E8]/40'
                        } rounded-full blur-xl pointer-events-none group-hover:opacity-100 transition-all`} />

                        <div>
                          {/* Node Header */}
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-xl ${
                                isLastInRow 
                                  ? 'bg-[#B87908] text-white shadow-sm' 
                                  : 'bg-[#24190F] text-white shadow-sm'
                              } font-black text-xs flex items-center justify-center`}>
                                {step.step || `0${actualIdx + 1}`}
                              </div>
                              <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                                isLastInRow ? 'text-[#B87908]' : 'text-[#24190F]'
                              }`}>
                                Phase 0{actualIdx + 1}
                              </span>
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${
                              isLastInRow ? 'text-[#B87908]' : 'text-[#65594B]'
                            }`}>
                              {actualIdx === 3 ? 'Monitoring' : actualIdx === 4 ? 'Progression' : 'Completion & Review'}
                            </span>
                          </div>

                          <h3 className="text-sm sm:text-[15px] font-black text-[#24190F] tracking-wide uppercase mb-2 font-serif">
                            {step.title}
                          </h3>

                          {step.desc && (
                            <p className="text-xs sm:text-[13px] text-[#65594B] leading-relaxed font-normal">
                              {step.desc}
                            </p>
                          )}
                        </div>

                        {/* Bottom Track Indicator */}
                        <div className="mt-4 pt-3 border-t border-[#EAD9B7]/50 flex items-center justify-between text-[10px] font-bold text-[#65594B]">
                          <span className="text-[#B87908] flex items-center gap-1">
                            <span>Step 0{actualIdx + 1} of 06</span>
                          </span>
                          <span className="text-[#B87908] flex items-center gap-1 font-mono">
                            {isLastInRow ? '✓ MILESTONE' : 'FLOW ➔'}
                          </span>
                        </div>
                      </div>

                      {/* Right Directional Connector Arrow */}
                      {!isLastInRow && (
                        <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#B87908] border border-[#D99B24] text-white items-center justify-center shadow-md">
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
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-white border border-[#EAD9B7] rounded-3xl p-6 sm:p-8 shadow-md shadow-[#5B3D12]/5">
          {/* Left: What You May Experience */}
          <div>
            <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-[#B87908] mb-2.5">
              What You May Experience
            </span>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#65594B] font-normal">
              {machine.patientExperience}
            </p>
          </div>

          {/* Right: Conditions It May Be Used For */}
          <div>
            <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-[#B87908] mb-2.5">
              Conditions It May Be Used For
            </span>
            <div className="flex flex-wrap gap-1.5">
              {machine.conditions.map((cond, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-[#FAF4E8] border border-[#EAD9B7] text-xs font-semibold text-[#24190F]"
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
          <div className="bg-white border border-[#EAD9B7] rounded-2xl p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-[#24190F]">
              <Clock className="w-4 h-4 text-[#B87908]" />
              <h3 className="text-xs font-black uppercase tracking-wider font-serif">
                Session Information & Cadence
              </h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-[#65594B] font-normal">
              {machine.sessionInfo}
            </p>
          </div>

          {/* Right: Safety Considerations */}
          <div className="bg-[#FAF4E8] border-l-4 border-[#B87908] border-y border-r border-[#EAD9B7] rounded-r-2xl p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-[#24190F]">
              <AlertTriangle className="w-4 h-4 text-[#B87908]" />
              <h3 className="text-xs font-black uppercase tracking-wider font-serif">
                Safety & Clinical Screening
              </h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-[#65594B] font-normal">
              {machine.safety}
            </p>
          </div>
        </section>

        {/* ----------------- AFTERCARE & CLINICAL NOTE ----------------- */}
        <section className="space-y-4">
          <div className="bg-[#FAF4E8] border-l-4 border-[#B87908] border-y border-r border-[#EAD9B7] rounded-r-2xl p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-1.5 text-[#24190F]">
              <ShieldCheck className="w-4 h-4 text-[#B87908]" />
              <h3 className="text-xs font-black uppercase tracking-wider font-serif">
                After-Treatment Recovery Guidance
              </h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-[#65594B] font-normal">
              {machine.afterCare}
            </p>
          </div>

          <p className="text-[11px] text-[#65594B] leading-relaxed px-2">
            <strong className="text-[#24190F] uppercase tracking-wider">Clinical Note — </strong>
            Treatment intensity and progression are determined according to each patient's physiological assessment and response. Administered at {CLINIC_INFO.name}, {CLINIC_INFO.address}.
          </p>
        </section>

        {/* ----------------- FINAL CTA (PAGE END) ----------------- */}
        <section className="bg-gradient-to-r from-[#24190F] via-[#3D2B1D] to-[#24190F] border border-[#EAD9B7]/30 rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden shadow-xl text-white">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-[#F8EAC9] mb-1.5">
            RECOMMENDED NEXT STEP
          </span>
          <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight mb-2 max-w-xl mx-auto font-serif">
            Ready to begin your recovery?
          </h2>
          <p className="text-xs sm:text-sm text-[#F8EAC9]/90 mb-6 max-w-md mx-auto leading-relaxed">
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
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:from-[#A06806] hover:to-[#C48A1D] text-white font-black text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Evaluation Session →</span>
            </button>
          </div>
        </section>

        {/* ----------------- BOTTOM TREATMENT SWITCHER ----------------- */}
        {onSelectMachine && (
          <div className="pt-4 border-t border-[#EAD9B7] flex items-center justify-between gap-4">
            <button
              onClick={() => onSelectMachine(prevMachine.id)}
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-white hover:bg-[#FAF4E8] border border-[#EAD9B7] text-left transition-all group max-w-[48%] cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4 text-[#65594B] group-hover:text-[#B87908] shrink-0" />
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#65594B]">Previous</span>
                <span className="text-xs font-bold text-[#24190F] group-hover:text-[#B87908] line-clamp-1">{prevMachine.name}</span>
              </div>
            </button>

            <button
              onClick={() => onSelectMachine(nextMachine.id)}
              className="flex items-center justify-end gap-2.5 p-3 rounded-2xl bg-white hover:bg-[#FAF4E8] border border-[#EAD9B7] text-right transition-all group max-w-[48%] cursor-pointer shadow-xs"
            >
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#65594B]">Next</span>
                <span className="text-xs font-bold text-[#24190F] group-hover:text-[#B87908] line-clamp-1">{nextMachine.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#65594B] group-hover:text-[#B87908] shrink-0" />
            </button>
          </div>
        )}

      </main>
    </div>
  );
};

export default TreatmentDetailPage;


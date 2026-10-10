import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Phone,
  Calendar,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Activity,
  CheckCircle2,
  Stethoscope,
  HeartPulse
} from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';
import {
  getSubconditionById,
  getSubconditionsForService,
  ALL_ORTHOPEDIC_CONDITIONS,
  type SubConditionItem
} from '../../data/conditionsData';

interface ConditionDetailPageProps {
  conditionId: string;
  onBack: () => void;
  onBookClick: () => void;
  onSelectCondition?: (id: string) => void;
}

export const ConditionDetailPage: React.FC<ConditionDetailPageProps> = ({
  conditionId,
  onBack,
  onBookClick,
  onSelectCondition
}) => {
  const condition: SubConditionItem =
    getSubconditionById(conditionId) || ALL_ORTHOPEDIC_CONDITIONS[0];

  const categoryConditions = getSubconditionsForService(condition.serviceId);
  const currentIndex = categoryConditions.findIndex((c) => c.id === condition.id);

  const prevCondition =
    currentIndex > 0
      ? categoryConditions[currentIndex - 1]
      : categoryConditions[categoryConditions.length - 1];

  const nextCondition =
    currentIndex < categoryConditions.length - 1
      ? categoryConditions[currentIndex + 1]
      : categoryConditions[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [conditionId]);

  const isSports = condition.categoryName.toLowerCase().includes('sport') || condition.serviceId.toLowerCase().includes('sport');
  const isPediatric = condition.categoryName.toLowerCase().includes('pediatric') || condition.categoryName.toLowerCase().includes('child') || condition.serviceId.toLowerCase().includes('pediatric');
  const isGeriatric = condition.categoryName.toLowerCase().includes('geriatric') || condition.categoryName.toLowerCase().includes('elder') || condition.serviceId.toLowerCase().includes('geriatric') || condition.serviceId.toLowerCase().includes('elder');
  const isRehab = condition.categoryName.toLowerCase().includes('rehab') || condition.serviceId.toLowerCase().includes('rehab');

  const understandingTitle = isRehab
    ? 'Understanding the Rehabilitation Need'
    : isSports
    ? 'Understanding the Injury'
    : 'Understanding the Condition';

  const goalTitle = isRehab || isPediatric || isGeriatric
    ? 'Your Goal'
    : isSports
    ? 'Your Recovery Goal'
    : 'Your Recovery Goal';

  const progressionTitle = isRehab || isPediatric || isGeriatric
    ? 'What You Can Expect'
    : isSports
    ? 'Recovery Progression'
    : 'What Your Rehabilitation May Focus On';

  return (
    <div className="min-h-screen w-full bg-[#FFFDF8] text-[#24190F] font-sans antialiased flex flex-col justify-between">
      
      {/* ------------------------------------------------------------- */}
      {/* 01. TOP BREADCRUMB & NAVIGATION BAR */}
      {/* ------------------------------------------------------------- */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-[#EAD9B7] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#65594B] hover:text-[#B87908] transition-colors py-1.5 px-2.5 rounded-xl hover:bg-[#FAF4E8] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#B87908]" />
            <span>Back to {condition.categoryName}</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-center text-xs">
            <span className="text-[#65594B] font-semibold">Services</span>
            <span className="text-[#EAD9B7]">/</span>
            <span className="text-[#65594B] font-semibold">{condition.categoryName}</span>
            <span className="text-[#EAD9B7]">/</span>
            <span className="font-bold text-[#B87908] uppercase tracking-wider">
              {condition.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#24190F] hover:text-[#B87908] bg-[#FAF4E8] hover:bg-[#F8EAC9] border border-[#EAD9B7] px-3 py-1.5 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#B87908]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onBookClick}
              className="flex items-center gap-1.5 bg-[#B87908] hover:bg-[#a06806] text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-xl shadow-md shadow-[#B87908]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Session</span>
            </button>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 02. FULL-SCREEN EDITORIAL CONTENT */}
      {/* ------------------------------------------------------------- */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 flex-1 w-full">

        {/* ----------------- HERO AREA ----------------- */}
        <section className="relative overflow-hidden bg-white border border-[#EAD9B7] rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F8EAC9]/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FAF4E8]/60 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading & Tagline */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-[#B87908] text-white font-bold text-xs tracking-widest uppercase shadow-xs">
                  #{condition.number}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F8EAC9] border border-[#EAD9B7] text-[#B87908] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
                  {condition.categoryName}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FAF4E8] text-[#24190F] text-xs font-semibold uppercase tracking-wider border border-[#EAD9B7]">
                  {condition.bodyArea}
                </span>
                {condition.isPriority && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F8EAC9] text-[#B87908] border border-[#EAD9B7] text-[11px] font-bold uppercase tracking-wider">
                    Common Focus
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.12] uppercase">
                {condition.name}
              </h1>

              <p className="text-base sm:text-xl font-bold text-[#B87908] leading-snug">
                {condition.tagline}
              </p>

              {/* Reassurance pill */}
              {isPediatric && (
                <div className="p-3 bg-[#FAF4E8] border border-[#EAD9B7] rounded-2xl text-xs text-[#24190F] leading-relaxed font-medium">
                  🌱 <strong>Parent Reassurance:</strong> Every child develops at their own pace. Our physiotherapy approach is tailored to your child’s current abilities, comfort, and individual goals.
                </div>
              )}

              {isGeriatric && (
                <div className="p-3 bg-[#FAF4E8] border border-[#EAD9B7] rounded-2xl text-xs text-[#24190F] leading-relaxed font-medium">
                  ✨ <strong>Respectful Care:</strong> Physiotherapy is adapted to your current comfort, strength, and pace, helping you stay strong, mobile, safe, and independent as you age.
                </div>
              )}

              {isRehab && (
                <div className="p-3 bg-[#FAF4E8] border border-[#EAD9B7] rounded-2xl text-xs text-[#24190F] leading-relaxed font-medium">
                  🌿 <strong>Individualized Retraining:</strong> Neuro rehabilitation is structured around your current capabilities and daily goals. Exercises and movement practice are paced to help you regain movement, confidence, and independence safely.
                </div>
              )}

              {/* Clinical Snapshot Tags */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 border-t border-[#EAD9B7]/60">
                <div className="bg-[#FAF4E8] border border-[#EAD9B7] rounded-xl p-2.5">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#65594B]">
                    {isRehab ? 'Rehab Focus' : isPediatric ? 'Approach' : isGeriatric ? 'Core Focus' : 'Clinical Focus'}
                  </span>
                  <span className="text-xs font-bold text-[#24190F]">
                    {isRehab ? 'Functional Retraining' : isPediatric ? 'Play-Based Care' : isGeriatric ? 'Safe Mobility' : 'Targeted Rehab'}
                  </span>
                </div>
                <div className="bg-[#FAF4E8] border border-[#EAD9B7] rounded-xl p-2.5">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#65594B]">Care Environment</span>
                  <span className="text-xs font-bold text-[#B87908]">
                    {isRehab ? 'Personalized & Safe' : isPediatric ? 'Safe & Supportive' : isGeriatric ? 'Gentle & Respectful' : 'Hands-on & Active'}
                  </span>
                </div>
                <div className="bg-[#FAF4E8] border border-[#EAD9B7] rounded-xl p-2.5 col-span-2 sm:col-span-1">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#65594B]">Goal Outcome</span>
                  <span className="text-xs font-bold text-[#24190F]">
                    {isRehab ? 'Independence & Mobility' : isPediatric ? 'Milestone Check' : isGeriatric ? 'Dignified Independence' : 'Root-Cause Check'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#EAD9B7] shadow-md h-64 sm:h-72 w-full bg-[#FAF4E8]">
                <img
                  src={condition.image}
                  alt={condition.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24190F]/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold">
                  <span className="flex items-center gap-1.5 bg-[#24190F]/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D99B24]" />
                    {isRehab ? 'Supervised Neuro Rehab' : isPediatric ? 'Gentle Pediatric Care' : isGeriatric ? 'Active Senior Care' : 'Clinical Movement Care'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------- 01. UNDERSTANDING THE CONDITION ----------------- */}
        <section className="bg-white border border-[#EAD9B7] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F8EAC9] border border-[#EAD9B7] flex items-center justify-center text-[#B87908] shadow-xs shrink-0">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#B87908]">
                {isRehab ? 'PROGRAM OVERVIEW' : 'CLINICAL OVERVIEW'}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#24190F] uppercase tracking-tight">
                {understandingTitle}
              </h2>
            </div>
          </div>
          <div className="pl-4 sm:pl-5 border-l-4 border-[#B87908] py-1">
            <p className="text-base sm:text-lg leading-relaxed text-[#24190F]">
              {condition.whatItMeans}
            </p>
          </div>
        </section>

        {/* ----------------- 02. HOW WE HELP ----------------- */}
        <section className="bg-white border border-[#EAD9B7] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F8EAC9] border border-[#EAD9B7] flex items-center justify-center text-[#B87908] shadow-xs shrink-0">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#B87908]">
                {isRehab ? 'REHABILITATION APPROACH' : 'PHYSIOTHERAPY TREATMENT'}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#24190F] uppercase tracking-tight">
                How We Help
              </h2>
            </div>
          </div>
          <div className="bg-[#FAF4E8] border border-[#EAD9B7] rounded-2xl p-5 sm:p-6">
            <p className="text-base sm:text-lg leading-relaxed text-[#24190F] font-medium">
              {condition.howWeTreat}
            </p>
          </div>
        </section>

        {/* ----------------- 03. YOUR RECOVERY GOAL ----------------- */}
        <section className="bg-white border border-[#EAD9B7] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F8EAC9] border border-[#EAD9B7] flex items-center justify-center text-[#B87908] shadow-xs shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#B87908]">
                OUTCOME &amp; OBJECTIVE
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#24190F] uppercase tracking-tight">
                {goalTitle}
              </h2>
            </div>
          </div>
          <div className="bg-[#FAF4E8] border border-[#EAD9B7] rounded-2xl p-5 sm:p-6">
            <p className="text-base sm:text-lg font-bold text-[#24190F] leading-relaxed">
              {condition.recoveryGoal}
            </p>
          </div>
        </section>

        {/* ----------------- 04. LIFECYCLE REHABILITATION CHAIN ----------------- */}
        <section className="bg-white border border-[#EAD9B7] rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#EAD9B7]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B87908] block mb-1">
                {isPediatric ? 'DEVELOPMENTAL PATHWAY' : isGeriatric ? 'MOBILITY & RECOVERY PATHWAY' : isRehab ? 'FUNCTIONAL REHABILITATION PROGRESSION' : 'REHABILITATION CONTINUUM'}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold uppercase tracking-tight text-[#24190F]">
                {progressionTitle}
              </h2>
            </div>
            <span className="text-xs font-bold text-[#B87908] bg-[#F8EAC9] border border-[#EAD9B7] px-3.5 py-1.5 rounded-full w-fit flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D99B24] animate-pulse" />
              {condition.rehabilitationFocus.length}-Stage Lifecycle Chain
            </span>
          </div>

          {/* Desktop & Tablet: Horizontal Connected Lifecycle Chain */}
          <div className="hidden md:block pt-4 pb-2">
            <div className="relative flex items-start justify-between">
              {/* Continuous Background Track */}
              <div className="absolute top-6 left-6 right-6 h-1 bg-[#EAD9B7] -translate-y-1/2 z-0" />
              <div
                className="absolute top-6 left-6 h-1 bg-gradient-to-r from-[#B87908] via-[#D99B24] to-[#B87908] -translate-y-1/2 z-0 transition-all duration-700"
                style={{ width: 'calc(100% - 3rem)' }}
              />

              {condition.rehabilitationFocus.map((step, idx) => {
                const isLast = idx === condition.rehabilitationFocus.length - 1;
                return (
                  <div
                    key={idx}
                    className="relative z-10 flex flex-col items-center text-center group max-w-[160px] flex-1 px-2"
                  >
                    {/* Circular Dot Node */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${
                        isLast
                          ? 'bg-[#B87908] text-white ring-4 ring-[#F8EAC9] shadow-[#B87908]/30 scale-110'
                          : 'bg-white text-[#B87908] border-2 border-[#B87908] ring-4 ring-[#FAF4E8] group-hover:scale-105'
                      }`}
                    >
                      {isLast ? (
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      ) : (
                        <span>0{idx + 1}</span>
                      )}
                    </div>

                    {/* Stage Label */}
                    <span
                      className={`mt-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isLast
                          ? 'text-[#B87908] bg-[#F8EAC9]'
                          : 'text-[#65594B] bg-[#FAF4E8]'
                      }`}
                    >
                      {isLast ? 'FINAL GOAL' : `STAGE 0${idx + 1}`}
                    </span>

                    {/* Step Title */}
                    <h3 className="mt-2 text-xs sm:text-sm font-serif font-bold uppercase tracking-wide text-[#24190F] leading-snug">
                      {step}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical Connected Lifecycle Chain */}
          <div className="block md:hidden">
            <div className="relative pl-6 space-y-6">
              <div className="absolute top-4 bottom-4 left-[23px] w-0.5 bg-gradient-to-b from-[#B87908] via-[#D99B24] to-[#B87908]" />

              {condition.rehabilitationFocus.map((step, idx) => {
                const isLast = idx === condition.rehabilitationFocus.length - 1;
                return (
                  <div key={idx} className="relative flex items-start gap-4 group">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 z-10 shadow-sm ${
                        isLast
                          ? 'bg-[#B87908] text-white ring-4 ring-[#F8EAC9]'
                          : 'bg-white text-[#B87908] border-2 border-[#B87908] ring-4 ring-[#FAF4E8]'
                      }`}
                    >
                      {isLast ? (
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      ) : (
                        <span>0{idx + 1}</span>
                      )}
                    </div>

                    <div className="pt-1">
                      <span
                        className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1 ${
                          isLast
                            ? 'text-[#B87908] bg-[#F8EAC9]'
                            : 'text-[#65594B] bg-[#FAF4E8]'
                        }`}
                      >
                        {isLast ? 'FINAL GOAL' : `STAGE 0${idx + 1}`}
                      </span>
                      <h3 className="text-sm font-serif font-bold uppercase tracking-wide text-[#24190F]">
                        {step}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ----------------- RECOMMENDED NEXT STEP CTA ----------------- */}
        <section className="bg-gradient-to-r from-[#B87908] via-[#D99B24] to-[#B87908] border border-[#B87908] rounded-3xl p-6 sm:p-9 text-center relative overflow-hidden shadow-xl text-white">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-[#F8EAC9] mb-1.5">
            {isRehab
              ? 'READY TO TAKE THE NEXT STEP IN YOUR RECOVERY?'
              : isPediatric 
              ? "READY TO SUPPORT YOUR CHILD'S NEXT STEP?" 
              : isGeriatric
              ? "READY TO TAKE THE NEXT STEP TOWARD BETTER MOBILITY?"
              : 'RECOMMENDED NEXT STEP'}
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight mb-2 max-w-xl mx-auto">
            {isRehab ? `Talk to our physiotherapist about ${condition.name}` : `Talk to our physiotherapist about ${condition.name}`}
          </h2>
          <p className="text-xs sm:text-sm text-white/90 mb-6 max-w-lg mx-auto leading-relaxed">
            {isRehab
              ? "Talk to our physiotherapist to understand how a personalized neuro rehabilitation program can support your movement, function, confidence, and independence."
              : isPediatric
              ? "Talk to our physiotherapist to understand how an age-appropriate rehabilitation plan may support your child's movement and development."
              : isGeriatric
              ? "Talk to our physiotherapist to understand how an individualized rehabilitation plan can support your strength, mobility, safety, and independence."
              : 'Understand which personalized rehabilitation approach, exercise intensity, and recovery milestones are suitable for you.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#F8EAC9]" />
              <span>Call Clinic: {CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-[#FAF4E8] text-[#24190F] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B87908]" />
              <span>Book Evaluation Session →</span>
            </button>
          </div>
        </section>

        {/* ----------------- PREVIOUS / NEXT CONDITION SWITCHER ----------------- */}
        {onSelectCondition && (
          <div className="pt-4 border-t border-[#EAD9B7] flex items-center justify-between gap-4">
            <button
              onClick={() => onSelectCondition(prevCondition.id)}
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-white hover:bg-[#FAF4E8] border border-[#EAD9B7] text-left transition-all group max-w-[48%] cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4 text-[#65594B] group-hover:text-[#B87908] shrink-0" />
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#65594B]">
                  Previous {isRehab ? 'Rehabilitation Program' : isSports ? 'Injury' : isPediatric ? 'Pediatric Condition' : isGeriatric ? 'Geriatric Condition' : 'Condition'}
                </span>
                <span className="text-xs font-bold text-[#24190F] group-hover:text-[#B87908] line-clamp-1">{prevCondition.name}</span>
              </div>
            </button>

            <button
              onClick={() => onSelectCondition(nextCondition.id)}
              className="flex items-center justify-end gap-2.5 p-3 rounded-2xl bg-white hover:bg-[#FAF4E8] border border-[#EAD9B7] text-right transition-all group max-w-[48%] cursor-pointer shadow-xs"
            >
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#65594B]">
                  Next {isRehab ? 'Rehabilitation Program' : isSports ? 'Injury' : isPediatric ? 'Pediatric Condition' : isGeriatric ? 'Geriatric Condition' : 'Condition'}
                </span>
                <span className="text-xs font-bold text-[#24190F] group-hover:text-[#B87908] line-clamp-1">{nextCondition.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#65594B] group-hover:text-[#B87908] shrink-0" />
            </button>
          </div>
        )}

      </main>
    </div>
  );
};

export default ConditionDetailPage;

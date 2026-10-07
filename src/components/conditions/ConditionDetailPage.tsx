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
    <div className="min-h-screen w-full bg-[#FAF8F5] text-stone-900 font-sans antialiased flex flex-col justify-between">
      
      {/* ------------------------------------------------------------- */}
      {/* 01. TOP BREADCRUMB & NAVIGATION BAR */}
      {/* ------------------------------------------------------------- */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-700 hover:text-emerald-800 transition-colors py-1.5 px-2.5 rounded-xl hover:bg-emerald-50 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-emerald-700" />
            <span>Back to {condition.categoryName}</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-center text-xs">
            <span className="text-stone-500 font-semibold">Services</span>
            <span className="text-stone-300">/</span>
            <span className="text-stone-500 font-semibold">{condition.categoryName}</span>
            <span className="text-stone-300">/</span>
            <span className="font-bold text-emerald-800 uppercase tracking-wider">
              {condition.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-200 px-3 py-1.5 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onBookClick}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider px-4 py-2 rounded-xl shadow-md shadow-emerald-700/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
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
        <section className="relative overflow-hidden bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading & Tagline */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-emerald-700 text-white font-black text-xs tracking-widest uppercase shadow-xs">
                  #{condition.number}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  {condition.categoryName}
                </span>
                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider border border-stone-200">
                  {condition.bodyArea}
                </span>
                {condition.isPriority && (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-bold uppercase tracking-wider">
                    Common Focus
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.12] uppercase">
                {condition.name}
              </h1>

              <p className="text-base sm:text-xl font-bold text-orange-700 leading-snug">
                {condition.tagline}
              </p>

              {/* Reassurance pill for pediatric / geriatric / neuro rehab */}
              {isPediatric && (
                <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-xs text-emerald-900 leading-relaxed font-medium">
                  🌱 <strong>Parent Reassurance:</strong> Every child develops at their own pace. Our physiotherapy approach is tailored to your child’s current abilities, comfort, and individual goals.
                </div>
              )}

              {isGeriatric && (
                <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-xs text-emerald-900 leading-relaxed font-medium">
                  ✨ <strong>Respectful Care:</strong> Physiotherapy is adapted to your current comfort, strength, and pace, helping you stay strong, mobile, safe, and independent as you age.
                </div>
              )}

              {isRehab && (
                <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-xs text-emerald-900 leading-relaxed font-medium">
                  🌿 <strong>Individualized Retraining:</strong> Neuro rehabilitation is structured around your current capabilities and daily goals. Exercises and movement practice are paced to help you regain movement, confidence, and independence safely.
                </div>
              )}

              {/* Clinical Snapshot Tags */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 border-t border-stone-100">
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-2.5">
                  <span className="block text-[10px] font-black uppercase tracking-wider text-stone-400">
                    {isRehab ? 'Rehab Focus' : isPediatric ? 'Approach' : isGeriatric ? 'Core Focus' : 'Clinical Focus'}
                  </span>
                  <span className="text-xs font-bold text-stone-800">
                    {isRehab ? 'Functional Retraining' : isPediatric ? 'Play-Based Care' : isGeriatric ? 'Safe Mobility' : 'Targeted Rehab'}
                  </span>
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-2.5">
                  <span className="block text-[10px] font-black uppercase tracking-wider text-stone-400">Care Environment</span>
                  <span className="text-xs font-bold text-emerald-800">
                    {isRehab ? 'Personalized & Safe' : isPediatric ? 'Safe & Supportive' : isGeriatric ? 'Gentle & Respectful' : 'Hands-on & Active'}
                  </span>
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-2.5 col-span-2 sm:col-span-1">
                  <span className="block text-[10px] font-black uppercase tracking-wider text-stone-400">Goal Outcome</span>
                  <span className="text-xs font-bold text-stone-800">
                    {isRehab ? 'Independence & Mobility' : isPediatric ? 'Milestone Check' : isGeriatric ? 'Dignified Independence' : 'Root-Cause Check'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Curated Condition Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md h-64 sm:h-72 w-full bg-stone-100">
                <img
                  src={condition.image}
                  alt={condition.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold">
                  <span className="flex items-center gap-1.5 bg-stone-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    {isRehab ? 'Supervised Neuro Rehab' : isPediatric ? 'Gentle Pediatric Care' : isGeriatric ? 'Active Senior Care' : 'Clinical Movement Care'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------- 01. UNDERSTANDING THE CONDITION ----------------- */}
        <section className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 shadow-xs shrink-0">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-orange-700">
                {isRehab ? 'PROGRAM OVERVIEW' : 'CLINICAL OVERVIEW'}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 uppercase tracking-tight">
                {understandingTitle}
              </h2>
            </div>
          </div>
          <div className="pl-4 sm:pl-5 border-l-4 border-orange-400 py-1">
            <p className="text-base sm:text-lg leading-relaxed text-stone-700">
              {condition.whatItMeans}
            </p>
          </div>
        </section>

        {/* ----------------- 02. HOW WE HELP (PHYSIOTHERAPY TREATMENT) ----------------- */}
        <section className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-xs shrink-0">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-emerald-800">
                {isRehab ? 'REHABILITATION APPROACH' : 'PHYSIOTHERAPY TREATMENT'}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 uppercase tracking-tight">
                How We Help
              </h2>
            </div>
          </div>
          <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-5 sm:p-6">
            <p className="text-base sm:text-lg leading-relaxed text-stone-800 font-medium">
              {condition.howWeTreat}
            </p>
          </div>
        </section>

        {/* ----------------- 03. YOUR RECOVERY GOAL ----------------- */}
        <section className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800 shadow-xs shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-teal-800">
                OUTCOME &amp; OBJECTIVE
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 uppercase tracking-tight">
                {goalTitle}
              </h2>
            </div>
          </div>
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 sm:p-6">
            <p className="text-base sm:text-lg font-bold text-stone-900 leading-relaxed">
              {condition.recoveryGoal}
            </p>
          </div>
        </section>

        {/* ----------------- 04. LIFECYCLE REHABILITATION CHAIN ----------------- */}
        <section className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-800 block mb-1">
                {isPediatric ? 'DEVELOPMENTAL PATHWAY' : isGeriatric ? 'MOBILITY & RECOVERY PATHWAY' : isRehab ? 'FUNCTIONAL REHABILITATION PROGRESSION' : 'REHABILITATION CONTINUUM'}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-stone-900">
                {progressionTitle}
              </h2>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full w-fit flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {condition.rehabilitationFocus.length}-Stage Lifecycle Chain
            </span>
          </div>

          {/* Desktop & Tablet: Horizontal Connected Lifecycle Chain */}
          <div className="hidden md:block pt-4 pb-2">
            <div className="relative flex items-start justify-between">
              {/* Continuous Background Track connecting all dots */}
              <div className="absolute top-6 left-6 right-6 h-1 bg-stone-200 -translate-y-1/2 z-0" />
              <div
                className="absolute top-6 left-6 h-1 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 -translate-y-1/2 z-0 transition-all duration-700"
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
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300 shadow-md ${
                        isLast
                          ? 'bg-emerald-700 text-white ring-4 ring-emerald-100 shadow-emerald-700/30 scale-110'
                          : 'bg-white text-emerald-800 border-2 border-emerald-600 ring-4 ring-emerald-50 group-hover:scale-105 group-hover:border-emerald-700'
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
                      className={`mt-3 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isLast
                          ? 'text-emerald-800 bg-emerald-100/80 font-extrabold'
                          : 'text-stone-500 bg-stone-100'
                      }`}
                    >
                      {isLast ? 'FINAL GOAL' : `STAGE 0${idx + 1}`}
                    </span>

                    {/* Step Title */}
                    <h3 className="mt-2 text-xs sm:text-sm font-black uppercase tracking-wide text-stone-900 leading-snug">
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
              {/* Vertical Connecting Line */}
              <div className="absolute top-4 bottom-4 left-[23px] w-0.5 bg-gradient-to-b from-emerald-600 via-emerald-500 to-teal-600" />

              {condition.rehabilitationFocus.map((step, idx) => {
                const isLast = idx === condition.rehabilitationFocus.length - 1;
                return (
                  <div key={idx} className="relative flex items-start gap-4 group">
                    {/* Circular Dot Node */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs shrink-0 z-10 shadow-sm ${
                        isLast
                          ? 'bg-emerald-700 text-white ring-4 ring-emerald-100 shadow-emerald-700/30'
                          : 'bg-white text-emerald-800 border-2 border-emerald-600 ring-4 ring-emerald-50'
                      }`}
                    >
                      {isLast ? (
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      ) : (
                        <span>0{idx + 1}</span>
                      )}
                    </div>

                    {/* Step Details */}
                    <div className="pt-1">
                      <span
                        className={`inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-1 ${
                          isLast
                            ? 'text-emerald-800 bg-emerald-100/80'
                            : 'text-stone-500 bg-stone-100'
                        }`}
                      >
                        {isLast ? 'FINAL GOAL' : `STAGE 0${idx + 1}`}
                      </span>
                      <h3 className="text-sm font-black uppercase tracking-wide text-stone-900">
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
        <section className="bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-800 border border-emerald-600 rounded-3xl p-6 sm:p-9 text-center relative overflow-hidden shadow-xl text-white">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-emerald-200 mb-1.5">
            {isRehab
              ? 'READY TO TAKE THE NEXT STEP IN YOUR RECOVERY?'
              : isPediatric 
              ? "READY TO SUPPORT YOUR CHILD'S NEXT STEP?" 
              : isGeriatric
              ? "READY TO TAKE THE NEXT STEP TOWARD BETTER MOBILITY?"
              : 'RECOMMENDED NEXT STEP'}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2 max-w-xl mx-auto">
            {isRehab ? `Talk to our physiotherapist about ${condition.name}` : `Talk to our physiotherapist about ${condition.name}`}
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 mb-6 max-w-lg mx-auto leading-relaxed">
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
              <Phone className="w-3.5 h-3.5 text-emerald-200" />
              <span>Call Clinic: {CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-900 font-black text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-700" />
              <span>Book Evaluation Session →</span>
            </button>
          </div>
        </section>

        {/* ----------------- PREVIOUS / NEXT CONDITION SWITCHER ----------------- */}
        {onSelectCondition && (
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-4">
            <button
              onClick={() => onSelectCondition(prevCondition.id)}
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 text-left transition-all group max-w-[48%] cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 shrink-0" />
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-stone-400">
                  Previous {isRehab ? 'Rehabilitation Program' : isSports ? 'Injury' : isPediatric ? 'Pediatric Condition' : isGeriatric ? 'Geriatric Condition' : 'Condition'}
                </span>
                <span className="text-xs font-bold text-stone-800 group-hover:text-emerald-800 line-clamp-1">{prevCondition.name}</span>
              </div>
            </button>

            <button
              onClick={() => onSelectCondition(nextCondition.id)}
              className="flex items-center justify-end gap-2.5 p-3 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 text-right transition-all group max-w-[48%] cursor-pointer shadow-xs"
            >
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-stone-400">
                  Next {isRehab ? 'Rehabilitation Program' : isSports ? 'Injury' : isPediatric ? 'Pediatric Condition' : isGeriatric ? 'Geriatric Condition' : 'Condition'}
                </span>
                <span className="text-xs font-bold text-stone-800 group-hover:text-emerald-800 line-clamp-1">{nextCondition.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 shrink-0" />
            </button>
          </div>
        )}

      </main>
    </div>
  );
};

export default ConditionDetailPage;

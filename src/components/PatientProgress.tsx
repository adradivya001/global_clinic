import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Activity, TrendingUp, ArrowRight, Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export const PatientProgress: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  const CASE_STUDIES = [
    {
      id: 'lumbar-spine',
      title: 'Lumbar Spine Rehabilitation',
      categoryBadge: 'SPINE & BACK CARE',
      summary: 'Targeted physical therapy & lumbar decompression restored full active lumbar flexion.',
      beforeText: 'Severe Pain 8/10 • Restricted Bending',
      afterText: 'Pain 0/10 • Full Active Range Restored',
      progressPercent: 95,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'post-acl',
      title: 'Post-ACL Reconstruction',
      categoryBadge: 'KNEE REHABILITATION',
      summary: 'Structured knee kinetic protocol restored stability, allowing safe return to athletic running.',
      beforeText: 'Post-Op Stiffness & Muscle Weakness',
      afterText: '100% Flexion & Kinetic Stability Restored',
      progressPercent: 92,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cervical-spine',
      title: 'Cervical Spine Ergonomics',
      categoryBadge: 'POSTURE & CERVICAL',
      summary: 'Custom ergonomic setup and deep-neck flexor conditioning completely alleviated strain.',
      beforeText: 'Daily Headaches & Cervical Guarding',
      afterText: '95% Reduction in Tension & Pain',
      progressPercent: 96,
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'rotator-cuff',
      title: 'Rotator Cuff Mobility',
      categoryBadge: 'SHOULDER REHABILITATION',
      summary: 'Capsular release and scapular kinematic analysis restored full pain-free overhead reach.',
      beforeText: 'Limited Overhead Reach & Night Pain',
      afterText: 'Pain-free Mobility & Full Strength',
      progressPercent: 90,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    }
  ];

  // Autoplay for patient story cards
  useEffect(() => {
    if (isHovered || isDragging) return;
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % CASE_STUDIES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, isDragging, CASE_STUDIES.length]);

  const handleNextCard = () => {
    setActiveCardIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const handlePrevCard = () => {
    setActiveCardIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragOffset < -50) {
      handleNextCard();
    } else if (dragOffset > 50) {
      handlePrevCard();
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    if (dragOffset < -50) {
      handleNextCard();
    } else if (dragOffset > 50) {
      handlePrevCard();
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <section id="patient-progress" className="py-16 lg:py-24 bg-gradient-to-b from-[#FBFBFA] via-[#F4F7F4] to-[#FBFBFA] relative overflow-hidden font-sans select-none border-t border-stone-200/80">
      
      {/* Subtle Atmosphere Lighting */}
      <div className="absolute top-0 right-10 w-[550px] h-[550px] bg-emerald-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[550px] h-[550px] bg-orange-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-300/60 text-emerald-800 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Documented Recovery Outcomes</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Real Patients. <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-900 bg-clip-text text-transparent">Documented Progress.</span>
            </h2>
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mt-2 font-normal">
              Explore patient recovery stories highlighting structural biomechanical restoration, measurable pain reduction, and active independence.
            </p>
          </div>

          {/* Carousel Controls & Dedicated Link */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/patient-stories"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-stone-200 hover:border-emerald-600 text-stone-900 hover:text-emerald-700 font-bold text-xs sm:text-sm shadow-xs transition-all group"
            >
              <span>Read Full Stories</span>
              <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevCard}
                className="w-11 h-11 rounded-2xl bg-white border border-stone-200 text-stone-900 hover:bg-emerald-700 hover:text-white transition-all flex items-center justify-center shadow-xs cursor-pointer"
                aria-label="Previous Story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextCard}
                className="w-11 h-11 rounded-2xl bg-white border border-stone-200 text-stone-900 hover:bg-emerald-700 hover:text-white transition-all flex items-center justify-center shadow-xs cursor-pointer"
                aria-label="Next Story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* ========================================================
              LEFT COLUMN (8 Cols) - PATIENT STORY CARDS CAROUSEL
          ======================================================== */}
          <div 
            className="lg:col-span-8 overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={carouselRef}
          >
            <div 
              className="flex gap-5 transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing py-1"
              style={{
                transform: `translate3d(calc(-${activeCardIndex * (360 + 20)}px + ${dragOffset}px), 0, 0)`
              }}
            >
              {CASE_STUDIES.map((study, idx) => {
                const isActive = idx === activeCardIndex;
                return (
                  <div
                    key={study.id}
                    className={`w-[320px] sm:w-[360px] shrink-0 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                      isActive 
                        ? 'border-emerald-600 shadow-xl shadow-emerald-700/10 -translate-y-1.5' 
                        : 'border-stone-200/90 shadow-md shadow-stone-200/30 hover:border-stone-300'
                    }`}
                    style={{ minHeight: '480px' }}
                  >
                    {/* Top Image Container */}
                    <div className="relative h-48 w-full overflow-hidden group/img bg-stone-900">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                      
                      {/* Floating Category Badge */}
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="bg-white/95 backdrop-blur-md text-stone-900 rounded-full px-3 py-1.5 text-[10px] font-black tracking-wider uppercase border border-stone-200 shadow-xs flex items-center gap-1.5">
                          <Activity className="w-3 h-3 text-emerald-600" />
                          <span>{study.categoryBadge}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-black tracking-widest text-emerald-700 uppercase mb-1 block">
                          CLINICAL CASE STUDY
                        </span>
                        <h3 className="text-stone-900 text-xl font-black leading-snug mb-2">
                          {study.title}
                        </h3>
                        <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed mb-4">
                          {study.summary}
                        </p>
                      </div>

                      {/* Before / After Progress Pill */}
                      <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-3.5 mb-4 space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-stone-400 font-bold text-[10px] tracking-wider uppercase">INITIAL STATUS</span>
                          <span className="text-stone-600 font-medium">{study.beforeText}</span>
                        </div>
                        <div className="flex items-center justify-between font-bold pt-1.5 border-t border-stone-200/70">
                          <span className="flex items-center gap-1 text-[10px] tracking-wider uppercase text-orange-700">
                            <TrendingUp className="w-3.5 h-3.5 text-orange-600" />
                            AFTER CARE
                          </span>
                          <span className="text-stone-900">{study.afterText}</span>
                        </div>
                      </div>

                      {/* Progress Bar & Circular Action */}
                      <div className="flex items-center justify-between gap-4 pt-1">
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-[11px] font-bold mb-1.5">
                            <span className="text-stone-400">RECOVERY METRIC</span>
                            <span className="text-emerald-700 font-extrabold">{study.progressPercent}%</span>
                          </div>
                          <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${study.progressPercent}%` }}
                            />
                          </div>
                        </div>

                        <button 
                          onClick={handleNextCard}
                          className="w-10 h-10 rounded-2xl bg-stone-50 border border-stone-200 text-stone-900 hover:bg-emerald-700 hover:text-white hover:border-emerald-700 transition-all flex items-center justify-center shrink-0 shadow-xs cursor-pointer"
                          aria-label="Next Case"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN (4 Cols) - FEATURED LUXURY LIGHT TESTIMONIAL
          ======================================================== */}
          <div className="lg:col-span-4">
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-emerald-50/70 via-white to-stone-50 p-7 sm:p-8 shadow-xl shadow-stone-300/30 text-stone-900 flex flex-col justify-between overflow-hidden border border-emerald-200/80 group min-h-[480px]">
              
              {/* Background Glow & Quote */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
              <Quote className="absolute top-6 right-6 w-16 h-16 text-emerald-600 opacity-20 pointer-events-none" strokeWidth={1} />

              {/* 5-Star Rating & Quote */}
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(TESTIMONIALS[activeTestimonialIndex].rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                  ))}
                </div>

                <p className="text-lg sm:text-xl font-bold leading-relaxed text-stone-900 tracking-tight mb-4">
                  "{TESTIMONIALS[activeTestimonialIndex].quote}"
                </p>
              </div>

              {/* Patient Identity & Controls */}
              <div className="relative z-10">
                <div className="flex items-center gap-3.5 pt-5 border-t border-stone-200/80 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-800 flex items-center justify-center text-white font-extrabold text-sm shrink-0 border border-white/60 shadow-md">
                    {TESTIMONIALS[activeTestimonialIndex].author ? TESTIMONIALS[activeTestimonialIndex].author.charAt(0) : 'P'}
                  </div>
                  <div>
                    <h4 className="text-stone-900 text-base font-black leading-snug">
                      {TESTIMONIALS[activeTestimonialIndex].author}
                    </h4>
                    <span className="text-orange-700 text-xs font-bold block mt-0.5">
                      {TESTIMONIALS[activeTestimonialIndex].condition}
                    </span>
                  </div>
                </div>

                {/* Testimonial Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonialIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          i === activeTestimonialIndex ? 'bg-emerald-700 w-6' : 'bg-stone-300 w-2'
                        }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevTestimonial}
                      className="w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-900 hover:bg-emerald-700 hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-xs"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextTestimonial}
                      className="w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-900 hover:bg-emerald-700 hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-xs"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PatientProgress;

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Activity, TrendingUp, ArrowRight, Star, Quote } from 'lucide-react';
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
      categoryBadge: 'BACK PAIN RECOVERY',
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
      categoryBadge: 'POSTURE CORRECTION',
      summary: 'Custom ergonomic setup and deep-neck flexor conditioning completely alleviated strain.',
      beforeText: 'Daily Headaches & Cervical Guarding',
      afterText: '95% Reduction in Tension & Pain',
      progressPercent: 96,
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d1e05fec?auto=format&fit=crop&w=800&q=80',
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
    }, 5500);
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
    <section id="patient-progress" className="py-12 lg:py-16 bg-[#F7FAFD] relative overflow-hidden font-sans select-none">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft corner atmospheric lighting */}
        <div className="absolute -top-[10%] left-[5%] w-[45%] h-[55%] rounded-full blur-[120px] opacity-40" style={{ background: 'radial-gradient(circle, rgba(23,105,194,0.10), transparent 70%)' }} />
        <div className="absolute top-[15%] -right-[5%] w-[40%] h-[60%] rounded-full blur-[120px] opacity-30" style={{ background: 'radial-gradient(circle, rgba(11,92,142,0.08), transparent 70%)' }} />
        <div className="absolute -bottom-[10%] left-[30%] w-[45%] h-[45%] rounded-full blur-[130px] opacity-25" style={{ background: 'radial-gradient(circle, rgba(245,180,0,0.05), transparent 70%)' }} />

        {/* Faint Dotted Grid Pattern at far edges */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0B5C8E_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_40%,#000_100%)]"></div>

        {/* Ultra-low opacity SVG accents (delicate curves & faint crosses) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.10]" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
          <path d="M-100 150 C400 300, 800 100, 1540 250" stroke="#0B5C8E" strokeWidth="1.5" strokeDasharray="6 6" />
          <path d="M-100 700 C500 550, 1000 750, 1540 600" stroke="#F5B400" strokeWidth="1" />
          <g opacity="0.3" transform="translate(1380, 100)">
            <line x1="0" y1="10" x2="20" y2="10" stroke="#0B5C8E" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="0" x2="10" y2="20" stroke="#0B5C8E" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[32px] h-[2px] bg-[#F5B400]"></div>
              <span className="text-[#0B5C8E] font-bold text-[12px] tracking-[0.20em] uppercase">
                PATIENT PROGRESS
              </span>
            </div>
            
            <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-extrabold text-[#08213D] tracking-tight leading-[1.1]">
              REAL PEOPLE. <span className="bg-gradient-to-r from-[#0B5C8E] to-[#1769C2] bg-clip-text text-transparent">REAL PROGRESS.</span>
            </h2>
            
            <p className="text-[#526A84] text-[14px] sm:text-[15px] leading-[1.5] max-w-[680px] mt-1.5">
              Real patient recovery stories highlighting structural biomechanical restoration and long-term independence.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 pb-1">
            <span className="text-[#08213D] font-extrabold text-[13px] tracking-wider">
              0{activeCardIndex + 1} <span className="text-[#7890A8] font-normal mx-1">/</span> 0{CASE_STUDIES.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevCard}
                className="w-[40px] h-[40px] rounded-full bg-white border border-[rgba(8,33,61,0.10)] text-[#08213D] hover:bg-[#08213D] hover:text-white transition-all duration-300 flex items-center justify-center shadow-[0_6px_16px_rgba(8,33,61,0.06)] cursor-pointer"
                aria-label="Previous Story"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextCard}
                className="w-[40px] h-[40px] rounded-full bg-white border border-[rgba(8,33,61,0.10)] text-[#08213D] hover:bg-[#08213D] hover:text-white transition-all duration-300 flex items-center justify-center shadow-[0_6px_16px_rgba(8,33,61,0.06)] cursor-pointer"
                aria-label="Next Story"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main 2-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          
          {/* ========================================================
              LEFT COLUMN (68%) - HORIZONTAL PATIENT STORY CAROUSEL
          ======================================================== */}
          <div 
            className="lg:w-[68%] overflow-hidden relative"
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
                transform: `translate3d(calc(-${activeCardIndex * (350 + 20)}px + ${dragOffset}px), 0, 0)`
              }}
            >
              {CASE_STUDIES.map((study, idx) => {
                const isActive = idx === activeCardIndex;
                return (
                  <div
                    key={study.id}
                    className={`w-[310px] sm:w-[350px] shrink-0 rounded-[18px] bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                      isActive 
                        ? 'border-[rgba(11,92,142,0.22)] shadow-[0_16px_40px_rgba(11,92,142,0.11)] -translate-y-1' 
                        : 'border-[rgba(8,33,61,0.09)] shadow-[0_12px_30px_rgba(8,33,61,0.06)] opacity-95'
                    }`}
                    style={{ height: '440px' }}
                  >
                    {/* Top Image Container */}
                    <div className="relative h-[180px] w-full overflow-hidden group/img">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08213D]/40 via-transparent to-transparent opacity-60" />
                      
                      {/* Floating Category Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-white/94 backdrop-blur-md text-[#08213D] rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.10em] uppercase border border-[rgba(8,33,61,0.08)] shadow-sm flex items-center gap-1.5">
                          <Activity className="w-3 h-3 text-[#0B5C8E]" />
                          <span>{study.categoryBadge}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-bold tracking-widest text-[#0B5C8E] uppercase mb-1 block">
                          RECOVERY CASE STUDY
                        </span>
                        <h3 className="text-[#08213D] text-[22px] font-bold leading-tight mb-2">
                          {study.title}
                        </h3>
                        <p className="text-[#526A84] text-[14px] leading-relaxed mb-4">
                          {study.summary}
                        </p>
                      </div>

                      {/* Before / After Clinical Progress Component */}
                      <div className="bg-[#F8FBFF] border border-[rgba(8,33,61,0.06)] rounded-[14px] p-3.5 mb-3 space-y-2 text-[13px]">
                        <div className="flex items-center justify-between">
                          <span className="text-[#7890A8] font-bold text-[10px] tracking-wider uppercase">BEFORE</span>
                          <span className="text-[#526A84] font-medium">{study.beforeText}</span>
                        </div>
                        <div className="flex items-center justify-between text-[#0B5C8E] font-bold pt-1 border-t border-[rgba(8,33,61,0.06)]">
                          <span className="flex items-center gap-1 text-[10px] tracking-wider uppercase text-[#F5B400]">
                            <TrendingUp className="w-3.5 h-3.5" />
                            AFTER
                          </span>
                          <span className="text-[#08213D]">{study.afterText}</span>
                        </div>
                      </div>

                      {/* Progress Bar & Circular Action */}
                      <div className="flex items-center justify-between gap-4 pt-2">
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-[11px] text-[#7890A8] font-bold mb-1">
                            <span>RECOVERY PROGRESS</span>
                            <span className="text-[#0B5C8E]">{study.progressPercent}%</span>
                          </div>
                          <div className="w-full h-[6px] bg-[#EAF4FC] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#0B5C8E] to-[#1769C2] rounded-full transition-all duration-900 ease-out"
                              style={{ width: `${study.progressPercent}%` }}
                            />
                          </div>
                        </div>

                        <button 
                          onClick={handleNextCard}
                          className="w-[44px] h-[44px] rounded-full bg-[#08213D] text-white hover:bg-[#FFBF1A] hover:text-[#08213D] transition-all duration-300 flex items-center justify-center shrink-0 group/btn shadow-md cursor-pointer"
                          aria-label="View Details"
                        >
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN (32%) - FEATURED TESTIMONIAL PANEL
          ======================================================== */}
          <div className="lg:w-[32%] shrink-0">
            <div className="relative w-full h-[440px] rounded-[20px] bg-gradient-to-br from-[#061A31] via-[#08213D] to-[#0B5C8E] p-6 sm:p-7 shadow-[0_16px_45px_rgba(8,33,61,0.14)] text-white flex flex-col justify-between overflow-hidden border border-white/10 group">
              
              {/* Soft Radial Glow & Decorative Quote Icon */}
              <div className="absolute top-[-10%] right-[-10%] w-[160px] h-[160px] bg-[#1769C2]/20 rounded-full blur-[50px] pointer-events-none" />
              <Quote className="absolute top-6 right-6 w-14 h-14 text-[#F5B400] opacity-20 pointer-events-none" strokeWidth={1} />

              {/* 5-Star Rating */}
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(TESTIMONIALS[activeTestimonialIndex].rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFBF1A] text-[#FFBF1A]" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-[18px] sm:text-[20px] font-bold leading-[1.38] text-white tracking-tight mb-4">
                  "{TESTIMONIALS[activeTestimonialIndex].quote}"
                </p>
              </div>

              {/* Patient Identity & Avatar */}
              <div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10 mb-4">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#EAF4FC] flex items-center justify-center text-[#08213D] font-extrabold text-[14px] shrink-0 border border-white/20">
                    {TESTIMONIALS[activeTestimonialIndex].author ? TESTIMONIALS[activeTestimonialIndex].author.charAt(0) : 'P'}
                  </div>
                  <div>
                    <h4 className="text-white text-[15px] font-bold leading-snug">
                      {TESTIMONIALS[activeTestimonialIndex].author}
                    </h4>
                    <span className="text-[#9FC5E3] text-[10px] font-bold uppercase tracking-[0.15em] block mt-0.5">
                      {TESTIMONIALS[activeTestimonialIndex].condition}
                    </span>
                  </div>
                </div>

                {/* Testimonial Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonialIndex(i)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          i === activeTestimonialIndex ? 'bg-white w-7' : 'bg-white/25 w-2'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevTestimonial}
                      className="w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white hover:text-[#08213D] transition-all flex items-center justify-center cursor-pointer"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextTestimonial}
                      className="w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white hover:text-[#08213D] transition-all flex items-center justify-center cursor-pointer"
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

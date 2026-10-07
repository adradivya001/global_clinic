import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Activity, Zap, ShieldCheck, Sparkles, Heart, Compass } from 'lucide-react';

interface TreatmentCarouselProps {
  onBookClick: () => void;
}

const CAROUSEL_DATA = [
  {
    id: '01',
    serviceId: 'orthopaedic-care',
    category: 'JOINT & SPINE CARE',
    title: 'Ortho Conditions',
    desc: 'Targeted joint mobilisations, spine decompression, disc herniation recovery, and post-fracture kinetic rehabilitation.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    icon: <Activity className="w-5 h-5 text-emerald-600" />,
    borderHover: 'hover:border-emerald-300 hover:shadow-emerald-500/15',
  },
  {
    id: '02',
    serviceId: 'neurological-rehab',
    category: 'NEUROLOGICAL CARE',
    title: 'Neuro Conditions',
    desc: 'Motor re-education, neuromuscular stimulation, stroke balance recovery, Parkinson’s support, and nerve pathway training.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    icon: <Zap className="w-5 h-5 text-teal-600" />,
    borderHover: 'hover:border-teal-300 hover:shadow-teal-500/15',
  },
  {
    id: '03',
    serviceId: 'sports-injuries',
    category: 'ATHLETIC RECOVERY',
    title: 'Sports Injuries',
    desc: 'Ligament rehabilitation, rotator cuff therapy, tendon reconditioning, and progressive athletic return-to-sport programs.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    icon: <ShieldCheck className="w-5 h-5 text-orange-600" />,
    borderHover: 'hover:border-orange-300 hover:shadow-orange-500/15',
  },
  {
    id: '04',
    serviceId: 'pediatric-physio',
    category: 'PEDIATRIC CARE',
    title: 'Pediatric Conditions',
    desc: 'Developmental milestone progression, neuromuscular motor training, torticollis support, and childhood gait optimization.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    icon: <Heart className="w-5 h-5 text-rose-600" />,
    borderHover: 'hover:border-rose-300 hover:shadow-rose-500/15',
  },
  {
    id: '05',
    serviceId: 'geriatric-rehab',
    category: 'GERIATRIC CARE',
    title: 'Geriatric Conditions',
    desc: 'Fall prevention training, sarcopenia therapy, bone density support, and safe independent mobility for seniors.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    icon: <Compass className="w-5 h-5 text-emerald-700" />,
    borderHover: 'hover:border-emerald-300 hover:shadow-emerald-500/15',
  },
  {
    id: '06',
    serviceId: 'specialized-neuro',
    category: 'ADVANCED REHAB',
    title: 'Neuro Rehabilitation',
    desc: 'Body-weight supported harness ambulation, spinal kinetic retraining, and comprehensive functional independence protocols.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    icon: <Sparkles className="w-5 h-5 text-stone-700" />,
    borderHover: 'hover:border-stone-300 hover:shadow-stone-500/15',
  }
];

export const TreatmentCarousel: React.FC<TreatmentCarouselProps> = ({ onBookClick: _onBookClick }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const padding = window.innerWidth < 1024 ? 20 : 40;
      const scrollPos = card.offsetLeft - padding;
      scrollRef.current.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setActiveIndex(prev => {
        const next = (prev + 1) % CAROUSEL_DATA.length;
        scrollToIndex(next);
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovering]);

  const handleNext = () => {
    const next = (activeIndex + 1) % CAROUSEL_DATA.length;
    setActiveIndex(next);
    scrollToIndex(next);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + CAROUSEL_DATA.length) % CAROUSEL_DATA.length;
    setActiveIndex(prev);
    scrollToIndex(prev);
  };

  return (
    <section id="treatments" className="py-16 lg:py-24 bg-gradient-to-b from-[#FBFBFA] via-[#F4F7F4] to-[#FBFBFA] relative overflow-hidden font-sans border-t border-stone-200/80">
      
      {/* Background Soft Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-10 w-[550px] h-[550px] bg-emerald-100/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-10 w-[550px] h-[550px] bg-orange-100/30 rounded-full blur-[150px]" />
      </div>
      
      {/* Content Container */}
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200/80 text-emerald-800 text-xs font-extrabold uppercase tracking-widest shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>SPECIALIZED CLINICAL DOMAINS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Clinical Treatment Departments
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              Evidence-guided physiotherapy targeting the root cause of functional limitation across 6 specialized clinical domains.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-4">
            {/* Progress Dots */}
            <div className="flex gap-1.5">
              {CAROUSEL_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    scrollToIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? 'w-8 bg-emerald-600' : 'w-2 bg-stone-200 hover:bg-stone-300'
                  }`}
                  aria-label={`Go to department ${i + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2 pl-4 border-l border-stone-200">
              <button 
                onClick={handlePrev} 
                className="w-10 h-10 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-stone-900 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Previous Department"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNext} 
                className="w-10 h-10 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center transition-all shadow-md shadow-emerald-700/20 cursor-pointer"
                aria-label="Next Department"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Treatment Cards Carousel Track */}
        <div 
          className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 no-scrollbar"
          >
            {CAROUSEL_DATA.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={item.id}
                  onClick={() => navigate(`/services/${item.serviceId}`)}
                  className={`min-w-[85vw] sm:min-w-[340px] lg:min-w-[370px] rounded-3xl overflow-hidden relative cursor-pointer transition-all duration-400 flex flex-col justify-between snap-start bg-white border ${
                    isActive 
                      ? 'border-emerald-600 shadow-xl shadow-emerald-700/15 -translate-y-2' 
                      : `border-stone-200/90 ${item.borderHover} shadow-md shadow-stone-200/40 hover:-translate-y-1.5`
                  }`}
                >
                  {/* Image Frame */}
                  <div className="relative h-52 overflow-hidden bg-stone-900">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-stone-200 text-stone-900 font-mono font-black text-xs shadow-xs">
                        #{item.id}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-50 backdrop-blur-md border border-emerald-200 text-emerald-800 text-[10px] font-black uppercase tracking-wider shadow-xs">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 flex items-center justify-center shadow-md">
                      {item.icon}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-black text-stone-900 mb-2 tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom CTA Action */}
                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-900 transition-colors">
                      <span>Explore Protocol</span>
                      <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center transition-all hover:bg-emerald-600 hover:text-white hover:border-emerald-600">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TreatmentCarousel;

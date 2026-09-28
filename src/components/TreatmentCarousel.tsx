import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Activity, Zap, ShieldCheck, Sparkles } from 'lucide-react';

interface TreatmentCarouselProps {
  onBookClick: () => void;
}

const CAROUSEL_DATA = [
  {
    id: '01',
    category: 'ROTATOR CUFF & JOINT MOBILITY',
    title: 'Shoulder Rehabilitation',
    desc: 'Restore strength, mobility and pain-free movement.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    icon: <Activity className="w-5 h-5" />,
    anatomyGlow: 'radial-gradient(circle at 40% 30%, rgba(245, 180, 0, 0.4) 0%, transparent 60%)'
  },
  {
    id: '02',
    category: 'ACL, MENISCUS & OSTEOARTHRITIS',
    title: 'Knee Rehabilitation',
    desc: 'Comprehensive care for ligament injuries, meniscus issues and long-term joint health.',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=800&q=80',
    icon: <ShieldCheck className="w-5 h-5" />,
    anatomyGlow: 'radial-gradient(circle at 50% 50%, rgba(255, 69, 0, 0.5) 0%, transparent 60%)'
  },
  {
    id: '03',
    category: 'BIOMECHANICS & ATHLETIC PERFORMANCE',
    title: 'Sports Injuries',
    desc: 'Evidence-based rehabilitation for faster, safer return to activity.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    icon: <Zap className="w-5 h-5" />,
    anatomyGlow: 'radial-gradient(circle at 60% 40%, rgba(22, 141, 208, 0.4) 0%, transparent 60%)'
  },
  {
    id: '04',
    category: 'ERGONOMICS & KINETIC REALIGNMENT',
    title: 'Posture Correction',
    desc: 'Improve alignment and prevent recurring pain.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    icon: <Sparkles className="w-5 h-5" />,
    anatomyGlow: 'radial-gradient(ellipse at 50% 50%, rgba(22, 141, 208, 0.5) 0%, transparent 70%)'
  }
];

export const TreatmentCarousel: React.FC<TreatmentCarouselProps> = ({ onBookClick }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to the specific card
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const padding = window.innerWidth < 1024 ? 24 : 80;
      const scrollPos = card.offsetLeft - padding;
      scrollRef.current.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
  };

  // Autoplay
  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setActiveIndex(prev => {
        const next = (prev + 1) % CAROUSEL_DATA.length;
        scrollToIndex(next);
        return next;
      });
    }, 5500);
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
    <section id="treatments" className="py-12 lg:py-16 bg-[#F7FAFD] relative overflow-hidden font-sans">
      
      {/* Abstract Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] bg-[#168DD0]/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute top-[10%] right-[-10%] w-[35%] h-[60%] bg-[#086B9F]/[0.02] rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-white rounded-full blur-[150px] opacity-80"></div>
        <div className="absolute bottom-[-10%] left-[20%] right-[20%] h-[40%] bg-[#086B9F]/[0.02] rounded-full blur-[120px]"></div>
        
        {/* Subtle Abstract Wave Effect */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply flex items-center justify-center">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full scale-[2] origin-center animate-[spin_120s_linear_infinite]">
            <path d="M0,50 Q25,25 50,50 T100,50" stroke="#086B9F" strokeWidth="0.5" fill="none" />
            <path d="M0,60 Q25,35 50,60 T100,60" stroke="#086B9F" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8 animate-[slideUp_0.8s_ease-out_forwards]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#F5B400]"></div>
              <span className="text-[#086B9F] font-black text-[10px] tracking-[0.22em] uppercase">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#09213A] tracking-tight leading-[1.1]">
              Our Treatment Areas
            </h2>
            <p className="text-[#61738C] text-lg lg:text-xl mt-6 leading-relaxed">
              Targeted physiotherapy for movement restoration, recovery acceleration, and long-term functional performance.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex flex-col items-end gap-6 shrink-0">
            {/* Progress Dots */}
            <div className="flex gap-2">
              {CAROUSEL_DATA.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-6 bg-[#F5B400]' : 'w-1.5 bg-[#61738C]/30'}`}></div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button 
                onClick={handlePrev} 
                className="w-12 h-12 rounded-full bg-white border border-[rgba(7,26,51,0.08)] flex items-center justify-center text-[#09213A] hover:bg-[#F7FAFD] shadow-sm hover:shadow transition-all group outline-none"
                aria-label="Previous Treatments"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleNext} 
                className="w-12 h-12 rounded-full bg-[#09213A] flex items-center justify-center text-white hover:bg-[#041326] shadow-md hover:shadow-lg transition-all group outline-none"
                aria-label="Next Treatments"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Treatment Cards Carousel */}
        <div 
          className="relative -mx-6 px-6 sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16 xl:-mx-20 xl:px-20"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div 
            ref={scrollRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CAROUSEL_DATA.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(index);
                    scrollToIndex(index);
                  }}
                  className={`min-w-[85vw] sm:min-w-[370px] lg:min-w-[380px] h-[460px] rounded-[24px] overflow-hidden relative cursor-pointer transition-all duration-700 ease-out group snap-start animate-[slideUp_0.7s_ease-out_forwards]
                    ${isActive 
                      ? 'border-[1.5px] border-[#168DD0] shadow-[0_0_40px_rgba(22,141,208,0.15)] scale-[1.02] z-10' 
                      : 'border border-[rgba(7,26,51,0.08)] shadow-sm hover:shadow-xl hover:-translate-y-2'
                    }`}
                  style={{ animationDelay: `${index * 70}ms`, opacity: 0 }}
                >
                  {/* Image Background */}
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isActive ? 'scale-[1.05] brightness-110' : 'group-hover:scale-[1.04]'} `}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041326] via-[#041326]/60 to-transparent opacity-90"></div>
                    
                    {/* Medical Glow Overlay */}
                    <div 
                      className={`absolute inset-0 mix-blend-screen transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
                      style={{ background: item.anatomyGlow }}
                    ></div>
                  </div>

                  {/* Top-Left Icon */}
                  <div className={`absolute top-6 left-6 w-12 h-12 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-500
                    ${isActive ? 'bg-[#086B9F]/80 border-[#168DD0] shadow-[0_0_20px_rgba(22,141,208,0.3)]' : 'bg-[#041326]/50 border-white/10 group-hover:bg-[#041326]/70 group-hover:border-white/30'}`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col z-20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-white font-extrabold text-lg tracking-wider">{item.id}</span>
                      <div className={`h-[2px] rounded-full transition-all duration-700 ease-out ${isActive ? 'w-12 bg-[#F5B400]' : 'w-4 bg-white/30 group-hover:w-8 group-hover:bg-[#F5B400]/70'}`}></div>
                    </div>
                    
                    <div className="text-[#F5B400] text-[10px] font-black uppercase tracking-[0.2em] mb-2 drop-shadow-md">
                      {item.category}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide drop-shadow-md">
                      {item.title}
                    </h3>
                    
                    <p className={`text-[13px] leading-relaxed transition-all duration-500 ${isActive ? 'text-white/90' : 'text-white/60 group-hover:text-white/80'}`}>
                      {item.desc}
                    </p>

                    {/* CTA Footer */}
                    <div 
                      className="mt-6 flex items-center justify-between"
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookClick?.();
                      }}
                    >
                       <span className="text-white text-[11px] font-bold uppercase tracking-widest">Explore Treatments</span>
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                         isActive ? 'bg-[#F5B400] text-[#041326] shadow-[0_0_15px_rgba(245,180,0,0.4)]' : 'bg-white/10 text-white border border-white/20 group-hover:bg-white/20'
                       }`}>
                         <ArrowRight className={`w-4 h-4 transition-transform duration-500 ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                       </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Compass, Pause, Play, CheckCircle2 } from 'lucide-react';

interface NavSection {
  path: string;
  title: string;
  subtitle: string;
  badge: string;
}

export const NAV_FLOW_SECTIONS: NavSection[] = [
  {
    path: '/',
    title: 'Home Overview',
    subtitle: 'Global Physiotherapy Clinic & Key Highlights',
    badge: 'Introduction',
  },
  {
    path: '/about',
    title: 'About Clinic',
    subtitle: 'Our Core Standards, Philosophy & Care Methodology',
    badge: 'About Us',
  },
  {
    path: '/doctor',
    title: 'Doctor Profile',
    subtitle: 'Meet Dr. K. Bhavendra PT & Clinical Expertise',
    badge: 'Leadership',
  },
  {
    path: '/clinic',
    title: 'Clinic Facilities',
    subtitle: 'Explore Our Advanced Healing Spaces & Equipment',
    badge: 'Facilities',
  },
  {
    path: '/treatments',
    title: 'Treatments & Modalities',
    subtitle: 'Evidence-Based Therapies & Rehabilitation',
    badge: 'Clinical Services',
  },
  {
    path: '/conditions',
    title: 'Conditions We Treat',
    subtitle: 'Interactive Body Area Care & Common Ailments',
    badge: 'Specialties',
  },
  {
    path: '/patient-journey',
    title: 'Patient Journey',
    subtitle: 'Your Structured 4-Phase Path to Recovery',
    badge: 'Care Protocol',
  },
  {
    path: '/patient-stories',
    title: 'Patient Stories',
    subtitle: 'Real Recovery Journeys, Testimonials & Outcomes',
    badge: 'Outcomes',
  },
  {
    path: '/blog',
    title: 'Knowledge & Blog',
    subtitle: 'Articles, Recovery Tips & Physiotherapy Insights',
    badge: 'Education',
  },
  {
    path: '/contact',
    title: 'Contact & Appointments',
    subtitle: 'Get In Touch, Clinic Location & Consultation',
    badge: 'Next Step',
  },
];

export const NextSectionFlow: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = NAV_FLOW_SECTIONS.findIndex(
    (item) => item.path === location.pathname
  );
  const activeIndex = currentIndex !== -1 ? currentIndex : 0;
  const nextIndex = (activeIndex + 1) % NAV_FLOW_SECTIONS.length;
  const nextSection = NAV_FLOW_SECTIONS[nextIndex];

  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);

  const COUNTDOWN_SECONDS = 3.5;

  // Reset state when route changes
  useEffect(() => {
    setIsInView(false);
    setIsPaused(false);
    setProgress(0);
  }, [location.pathname]);

  // Observer to detect when user scrolls to bottom / footer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
          setProgress(0);
        }
      },
      {
        root: null,
        threshold: 0.15,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [location.pathname]);

  // Handle countdown progress and auto navigation
  useEffect(() => {
    if (!isInView || isPaused) return;

    const intervalTime = 50; // ms
    const increment = (100 / (COUNTDOWN_SECONDS * 1000)) * intervalTime;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          navigate(nextSection.path);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, isPaused, nextSection.path, navigate]);

  const handleNavigateNow = () => {
    navigate(nextSection.path);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div ref={containerRef} className="w-full bg-[#051326] text-white py-10 px-4 sm:px-8 border-t border-[#168DD0]/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#086B9F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <div className="bg-[#071D38]/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left section: Guided Tour info */}
          <div className="space-y-2 max-w-xl">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#086B9F]/30 border border-[#168DD0]/30 text-amber-300 font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                Automatic Navbar Tour • Step {activeIndex + 1} of {NAV_FLOW_SECTIONS.length}
              </span>
              <span className="text-slate-400 text-xs hidden sm:inline">
                Scroll flow auto-navigates you through every section
              </span>
            </div>

            <div>
              <div className="text-slate-300 text-xs font-semibold uppercase tracking-wider">
                Next Section in Flow:
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 mt-0.5">
                <span>{nextSection.title}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 font-normal">
                  {nextSection.badge}
                </span>
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                {nextSection.subtitle}
              </p>
            </div>
          </div>

          {/* Right section: Progress + Action Buttons */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            {/* Countdown / Auto-Redirect Indicator */}
            <div className="flex flex-col gap-1.5 min-w-[200px]">
              <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {isPaused ? 'Auto-redirect paused' : `Redirecting in ${Math.max(0, Math.ceil((100 - progress) / (100 / COUNTDOWN_SECONDS)))}s...`}
                </span>
                <button
                  onClick={togglePause}
                  className="text-xs text-amber-400 hover:text-amber-300 underline font-semibold flex items-center gap-1 cursor-pointer"
                  title={isPaused ? 'Resume auto-redirect' : 'Pause auto-redirect'}
                >
                  {isPaused ? (
                    <>
                      <Play className="w-3 h-3" /> Resume
                    </>
                  ) : (
                    <>
                      <Pause className="w-3 h-3" /> Stay here
                    </>
                  )}
                </button>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden border border-white/10">
                <div
                  className={`h-full transition-all duration-75 rounded-full ${
                    isPaused
                      ? 'bg-slate-600'
                      : 'bg-gradient-to-r from-[#086B9F] via-amber-400 to-[#D97706]'
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Jump button with Eye-Catching Blinking Animation */}
            <button
              onClick={handleNavigateNow}
              className="animate-blink-cta px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-[#FFC21A] to-[#F5B400] text-slate-950 font-black text-sm tracking-wide flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap active:scale-95 transition-all"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950"></span>
              </span>
              <span>Continue to {nextSection.title}</span>
              <ArrowRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

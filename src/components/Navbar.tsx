import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CLINIC_INFO } from '../data/clinicData';
import clinicLogo from '../assets/clinic_logo.png';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [storiesDropdownOpen, setStoriesDropdownOpen] = useState(false);

  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const storiesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setStoriesDropdownOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setStoriesDropdownOpen(false);

    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    navigate(href);
  };

  const isAboutActive = ['/about', '/doctor', '/clinic'].includes(location.pathname);
  const isStoriesActive = ['/patient-stories', '/blog'].includes(location.pathname);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-[#060b13]/95 backdrop-blur-md py-2.5 border-b border-white/10 shadow-xl'
          : 'bg-gradient-to-b from-[#060b13]/95 via-[#060b13]/60 to-transparent py-3.5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* 1. Left: Clinic Logo Branding */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <img
            src={clinicLogo}
            alt={CLINIC_INFO.name}
            className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(212,175,55,0.25)]"
          />
          <div className="hidden sm:flex flex-col justify-center leading-none">
            <span className="text-[12px] md:text-[13px] font-bold tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 uppercase whitespace-nowrap">
              GLOBAL PHYSIOTHERAPY
            </span>
            <span className="text-[9.5px] md:text-[10px] font-semibold tracking-[0.16em] text-slate-400 uppercase whitespace-nowrap mt-0.5">
              CLINIC ANANTAPUR
            </span>
          </div>
        </Link>

        {/* 2. Center: Desktop Clean Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 shrink-0">
          {/* Home */}
          <button
            onClick={() => handleNavClick('/')}
            className={`px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-medium transition-colors whitespace-nowrap cursor-pointer ${
              location.pathname === '/' && !location.hash
                ? 'text-amber-400 font-semibold bg-white/5'
                : 'text-slate-300 hover:text-amber-400 hover:bg-white/5'
            }`}
          >
            Home
          </button>

          {/* About Us (Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
              setAboutDropdownOpen(true);
            }}
            onMouseLeave={() => {
              aboutTimeoutRef.current = setTimeout(() => setAboutDropdownOpen(false), 150);
            }}
          >
            <button
              onClick={() => handleNavClick('/about')}
              className={`px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-medium transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                isAboutActive
                  ? 'text-amber-400 font-semibold bg-white/5'
                  : 'text-slate-300 hover:text-amber-400 hover:bg-white/5'
              }`}
            >
              <span>About</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-[#0a111e]/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-1.5 z-50 animate-[fadeIn_0.15s_ease-out_forwards]">
                <button
                  onClick={() => handleNavClick('/about')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    location.pathname === '/about' ? 'text-amber-400 bg-white/10' : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`}
                >
                  About Clinic
                </button>
                <button
                  onClick={() => handleNavClick('/doctor')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    location.pathname === '/doctor' ? 'text-amber-400 bg-white/10' : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`}
                >
                  Dr. K. Bhavendra
                </button>
                <button
                  onClick={() => handleNavClick('/clinic')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    location.pathname === '/clinic' ? 'text-amber-400 bg-white/10' : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`}
                >
                  Our Clinic Spaces
                </button>
              </div>
            )}
          </div>

          {/* Treatments */}
          <button
            onClick={() => handleNavClick('/treatments')}
            className={`px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-medium transition-colors whitespace-nowrap cursor-pointer ${
              location.pathname === '/treatments'
                ? 'text-amber-400 font-semibold bg-white/5'
                : 'text-slate-300 hover:text-amber-400 hover:bg-white/5'
            }`}
          >
            Treatments
          </button>

          {/* Conditions */}
          <button
            onClick={() => handleNavClick('/conditions')}
            className={`px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-medium transition-colors whitespace-nowrap cursor-pointer ${
              location.pathname === '/conditions'
                ? 'text-amber-400 font-semibold bg-white/5'
                : 'text-slate-300 hover:text-amber-400 hover:bg-white/5'
            }`}
          >
            Conditions
          </button>

          {/* Patient Journey */}
          <button
            onClick={() => handleNavClick('/patient-journey')}
            className={`px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-medium transition-colors whitespace-nowrap cursor-pointer ${
              location.pathname === '/patient-journey'
                ? 'text-amber-400 font-semibold bg-white/5'
                : 'text-slate-300 hover:text-amber-400 hover:bg-white/5'
            }`}
          >
            Patient Journey
          </button>

          {/* Stories & Insights (Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (storiesTimeoutRef.current) clearTimeout(storiesTimeoutRef.current);
              setStoriesDropdownOpen(true);
            }}
            onMouseLeave={() => {
              storiesTimeoutRef.current = setTimeout(() => setStoriesDropdownOpen(false), 150);
            }}
          >
            <button
              onClick={() => handleNavClick('/patient-stories')}
              className={`px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-medium transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                isStoriesActive
                  ? 'text-amber-400 font-semibold bg-white/5'
                  : 'text-slate-300 hover:text-amber-400 hover:bg-white/5'
              }`}
            >
              <span>Insights</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${storiesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {storiesDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-[#0a111e]/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-1.5 z-50 animate-[fadeIn_0.15s_ease-out_forwards]">
                <button
                  onClick={() => handleNavClick('/patient-stories')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    location.pathname === '/patient-stories' ? 'text-amber-400 bg-white/10' : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`}
                >
                  Patient Stories
                </button>
                <button
                  onClick={() => handleNavClick('/blog')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    location.pathname === '/blog' ? 'text-amber-400 bg-white/10' : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`}
                >
                  Health Blog
                </button>
              </div>
            )}
          </div>

          {/* Contact */}
          <button
            onClick={() => handleNavClick('/contact')}
            className={`px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-medium transition-colors whitespace-nowrap cursor-pointer ${
              location.pathname === '/contact'
                ? 'text-amber-400 font-semibold bg-white/5'
                : 'text-slate-300 hover:text-amber-400 hover:bg-white/5'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* 3. Right: Phone & CTA (Clean, Single-line, No Wrapping) */}
        <div className="hidden sm:flex items-center gap-3 xl:gap-4 shrink-0">
          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 text-xs xl:text-sm text-slate-300 hover:text-white transition-colors whitespace-nowrap group"
          >
            <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:border-amber-400/50 transition-colors shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-slate-200 group-hover:text-white whitespace-nowrap">
              {CLINIC_INFO.phone}
            </span>
          </a>

          <button
            onClick={onBookClick}
            className="px-4 xl:px-5 py-2 xl:py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs xl:text-sm shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center gap-1.5 group cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 4. Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* 5. Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060b13]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-5 space-y-2 shadow-2xl animate-[fadeIn_0.2s_ease-out_forwards]">
          <div className="grid grid-cols-2 gap-2 pt-1 pb-3 border-b border-slate-800/70">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Clinic', href: '/about' },
              { label: 'Doctor Profile', href: '/doctor' },
              { label: 'Our Clinic', href: '/clinic' },
              { label: 'Treatments', href: '/treatments' },
              { label: 'Conditions', href: '/conditions' },
              { label: 'Patient Journey', href: '/patient-journey' },
              { label: 'Patient Stories', href: '/patient-stories' },
              { label: 'Health Blog', href: '/blog' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  location.pathname === link.href
                    ? 'text-amber-400 bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 space-y-2.5">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 text-xs font-bold text-slate-200 py-2.5 bg-slate-800/80 rounded-xl border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/25"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


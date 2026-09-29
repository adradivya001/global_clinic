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
  const [knowledgeDropdownOpen, setKnowledgeDropdownOpen] = useState(false);

  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const knowledgeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setKnowledgeDropdownOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setKnowledgeDropdownOpen(false);

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
  const isKnowledgeActive = ['/blog', '/patient-stories'].includes(location.pathname);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-[#060b13]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* 1. Left: Clinic Logo + 3-Line Gold Text Branding */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src={clinicLogo}
            alt={CLINIC_INFO.name}
            className="h-14 sm:h-16 md:h-16 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]"
          />
          <div className="flex flex-col justify-center leading-tight pl-1">
            <span className="text-[12px] sm:text-[13px] md:text-[14px] font-serif font-bold tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 uppercase whitespace-nowrap">
              GLOBAL
            </span>
            <span className="text-[12px] sm:text-[13px] md:text-[14px] font-serif font-bold tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 uppercase whitespace-nowrap">
              PHYSIOTHERAPY
            </span>
            <span className="text-[12px] sm:text-[13px] md:text-[14px] font-serif font-bold tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 uppercase whitespace-nowrap">
              CLINIC
            </span>
          </div>
        </Link>

        {/* 2. Center: Clean Navigation Links matching Reference Image */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
          {/* Home */}
          <button
            onClick={() => handleNavClick('/')}
            className={`text-sm lg:text-[15px] font-medium transition-colors relative py-1 whitespace-nowrap cursor-pointer ${
              location.pathname === '/' && !location.hash
                ? 'text-amber-400 font-semibold'
                : 'text-white/90 hover:text-amber-400'
            }`}
          >
            Home
          </button>

          {/* About (Dropdown) */}
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
              className={`text-sm lg:text-[15px] font-medium transition-colors relative py-1 whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                isAboutActive
                  ? 'text-amber-400 font-semibold'
                  : 'text-white/90 hover:text-amber-400'
              }`}
            >
              <span>About</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#0a111e]/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-1.5 z-50 animate-[fadeIn_0.15s_ease-out_forwards]">
                <button
                  onClick={() => handleNavClick('/about')}
                  className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    location.pathname === '/about' ? 'text-amber-400 bg-white/10' : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`}
                >
                  About Clinic
                </button>
                <button
                  onClick={() => handleNavClick('/doctor')}
                  className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    location.pathname === '/doctor' ? 'text-amber-400 bg-white/10' : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`}
                >
                  Dr. K. Bhavendra PT
                </button>
                <button
                  onClick={() => handleNavClick('/clinic')}
                  className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
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
            className={`text-sm lg:text-[15px] font-medium transition-colors relative py-1 whitespace-nowrap cursor-pointer ${
              location.pathname === '/treatments'
                ? 'text-amber-400 font-semibold'
                : 'text-white/90 hover:text-amber-400'
            }`}
          >
            Treatments
          </button>

          {/* Conditions */}
          <button
            onClick={() => handleNavClick('/conditions')}
            className={`text-sm lg:text-[15px] font-medium transition-colors relative py-1 whitespace-nowrap cursor-pointer ${
              location.pathname === '/conditions'
                ? 'text-amber-400 font-semibold'
                : 'text-white/90 hover:text-amber-400'
            }`}
          >
            Conditions
          </button>

          {/* Patient Journey */}
          <button
            onClick={() => handleNavClick('/patient-journey')}
            className={`text-sm lg:text-[15px] font-medium transition-colors relative py-1 whitespace-nowrap cursor-pointer ${
              location.pathname === '/patient-journey'
                ? 'text-amber-400 font-semibold'
                : 'text-white/90 hover:text-amber-400'
            }`}
          >
            Patient Journey
          </button>

          {/* Knowledge (Dropdown with Stories & Blog) */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (knowledgeTimeoutRef.current) clearTimeout(knowledgeTimeoutRef.current);
              setKnowledgeDropdownOpen(true);
            }}
            onMouseLeave={() => {
              knowledgeTimeoutRef.current = setTimeout(() => setKnowledgeDropdownOpen(false), 150);
            }}
          >
            <button
              onClick={() => handleNavClick('/blog')}
              className={`text-sm lg:text-[15px] font-medium transition-colors relative py-1 whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                isKnowledgeActive
                  ? 'text-amber-400 font-semibold'
                  : 'text-white/90 hover:text-amber-400'
              }`}
            >
              <span>Knowledge</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${knowledgeDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {knowledgeDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#0a111e]/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-1.5 z-50 animate-[fadeIn_0.15s_ease-out_forwards]">
                <button
                  onClick={() => handleNavClick('/blog')}
                  className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    location.pathname === '/blog' ? 'text-amber-400 bg-white/10' : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`}
                >
                  Articles & Insights
                </button>
                <button
                  onClick={() => handleNavClick('/patient-stories')}
                  className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    location.pathname === '/patient-stories' ? 'text-amber-400 bg-white/10' : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`}
                >
                  Patient Stories & Reviews
                </button>
              </div>
            )}
          </div>

          {/* Contact */}
          <button
            onClick={() => handleNavClick('/contact')}
            className={`text-sm lg:text-[15px] font-medium transition-colors relative py-1 whitespace-nowrap cursor-pointer ${
              location.pathname === '/contact'
                ? 'text-amber-400 font-semibold'
                : 'text-white/90 hover:text-amber-400'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* 3. Right: Phone Icon Badge + Single-line Number + Gold Pill CTA */}
        <div className="hidden sm:flex items-center gap-5 xl:gap-6 shrink-0">
          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-3 text-sm text-white hover:text-amber-300 transition-colors whitespace-nowrap group"
          >
            <div className="w-9 h-9 rounded-full bg-[#08213D] border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:border-amber-400/50 shadow-sm transition-colors shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-semibold text-white whitespace-nowrap text-sm">
              {CLINIC_INFO.phone}
            </span>
          </a>

          <button
            onClick={onBookClick}
            className="px-6 py-2.5 rounded-full bg-[#F5B400] hover:bg-[#E5A800] text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 transition-all flex items-center gap-2 group cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4. Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                className={`text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
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
              className="w-full py-3 rounded-xl bg-[#F5B400] hover:bg-[#E5A800] text-slate-950 font-bold text-xs text-center flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
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


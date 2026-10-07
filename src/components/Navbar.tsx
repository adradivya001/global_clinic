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
      if (window.scrollY > 20) {
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
          ? 'bg-white/95 backdrop-blur-md py-2.5 border-b border-zinc-200 shadow-xs'
          : 'bg-white/85 backdrop-blur-md py-3.5 border-b border-zinc-100'
      }`}
    >
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        
        {/* 1. Left: Clinic Logo (Enlarged & Prominent) */}
        <Link to="/" className="flex items-center group shrink-0" title={CLINIC_INFO.name}>
          <img
            src={clinicLogo}
            alt={CLINIC_INFO.name}
            className="h-14 sm:h-16 lg:h-20 w-auto max-w-[280px] object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xs"
          />
        </Link>

        {/* 2. Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* Home */}
          <button
            onClick={() => handleNavClick('/')}
            className={`text-sm font-semibold transition-colors relative py-1 whitespace-nowrap cursor-pointer ${
              location.pathname === '/' && !location.hash
                ? 'text-emerald-700'
                : 'text-zinc-600 hover:text-emerald-700'
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
              className={`text-sm font-semibold transition-colors relative py-1 whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                isAboutActive
                  ? 'text-emerald-700'
                  : 'text-zinc-600 hover:text-emerald-700'
              }`}
            >
              <span>About Clinic</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-zinc-200 p-2 z-50 animate-[fadeIn_0.15s_ease-out_forwards]">
                <button
                  onClick={() => handleNavClick('/about')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    location.pathname === '/about' ? 'text-emerald-700 bg-emerald-50' : 'text-zinc-700 hover:text-emerald-700 hover:bg-zinc-50'
                  }`}
                >
                  About Our Center
                </button>
                <button
                  onClick={() => handleNavClick('/doctor')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    location.pathname === '/doctor' ? 'text-emerald-700 bg-emerald-50' : 'text-zinc-700 hover:text-emerald-700 hover:bg-zinc-50'
                  }`}
                >
                  Dr. K. Bhavendra PT
                </button>
                <button
                  onClick={() => handleNavClick('/clinic')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    location.pathname === '/clinic' ? 'text-emerald-700 bg-emerald-50' : 'text-zinc-700 hover:text-emerald-700 hover:bg-zinc-50'
                  }`}
                >
                  18 Modern Modalities & Fleet
                </button>
              </div>
            )}
          </div>

          {/* Treatments */}
          <button
            onClick={() => handleNavClick('/treatments')}
            className={`text-sm font-semibold transition-colors relative py-1 whitespace-nowrap cursor-pointer ${
              location.pathname === '/treatments'
                ? 'text-emerald-700'
                : 'text-zinc-600 hover:text-emerald-700'
            }`}
          >
            Treatments (18)
          </button>

          {/* Conditions */}
          <button
            onClick={() => handleNavClick('/conditions')}
            className={`text-sm font-semibold transition-colors relative py-1 whitespace-nowrap cursor-pointer ${
              location.pathname === '/conditions'
                ? 'text-emerald-700'
                : 'text-zinc-600 hover:text-emerald-700'
            }`}
          >
            Conditions
          </button>

          {/* Patient Journey */}
          <button
            onClick={() => handleNavClick('/patient-journey')}
            className={`text-sm font-semibold transition-colors relative py-1 whitespace-nowrap cursor-pointer ${
              location.pathname === '/patient-journey'
                ? 'text-emerald-700'
                : 'text-zinc-600 hover:text-emerald-700'
            }`}
          >
            Recovery Pathway
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
              className={`text-sm font-semibold transition-colors relative py-1 whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                isKnowledgeActive
                  ? 'text-emerald-700'
                  : 'text-zinc-600 hover:text-emerald-700'
              }`}
            >
              <span>Insights</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${knowledgeDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {knowledgeDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-zinc-200 p-2 z-50 animate-[fadeIn_0.15s_ease-out_forwards]">
                <button
                  onClick={() => handleNavClick('/blog')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    location.pathname === '/blog' ? 'text-emerald-700 bg-emerald-50' : 'text-zinc-700 hover:text-emerald-700 hover:bg-zinc-50'
                  }`}
                >
                  Clinical Articles & Guides
                </button>
                <button
                  onClick={() => handleNavClick('/patient-stories')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    location.pathname === '/patient-stories' ? 'text-emerald-700 bg-emerald-50' : 'text-zinc-700 hover:text-emerald-700 hover:bg-zinc-50'
                  }`}
                >
                  Patient Case Stories
                </button>
              </div>
            )}
          </div>

          {/* Contact */}
          <button
            onClick={() => handleNavClick('/contact')}
            className={`text-sm font-semibold transition-colors relative py-1 whitespace-nowrap cursor-pointer ${
              location.pathname === '/contact'
                ? 'text-emerald-700'
                : 'text-zinc-600 hover:text-emerald-700'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* 3. Right: Phone Badge + Appointment Action */}
        <div className="hidden sm:flex items-center gap-4 xl:gap-5 shrink-0">
          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2.5 text-xs font-bold text-zinc-700 hover:text-emerald-700 transition-colors whitespace-nowrap group bg-zinc-50 hover:bg-emerald-50/70 border border-zinc-200 px-3.5 py-2 rounded-xl shadow-xs"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>{CLINIC_INFO.phone}</span>
          </a>

          <button
            onClick={onBookClick}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-500 hover:to-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-emerald-700/20 hover:shadow-emerald-700/35 transition-all flex items-center gap-2 group cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 4. Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-900 cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 5. Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-zinc-200 px-6 py-5 space-y-3 shadow-2xl animate-[fadeIn_0.2s_ease-out_forwards]">
          <div className="grid grid-cols-2 gap-2 pt-1 pb-3 border-b border-zinc-100">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Clinic', href: '/about' },
              { label: 'Dr. Bhavendra PT', href: '/doctor' },
              { label: '18 Modalities', href: '/clinic' },
              { label: 'Treatments', href: '/treatments' },
              { label: 'Conditions', href: '/conditions' },
              { label: 'Recovery Pathway', href: '/patient-journey' },
              { label: 'Patient Stories', href: '/patient-stories' },
              { label: 'Health Blog', href: '/blog' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                  location.pathname === link.href
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 space-y-2.5">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 text-xs font-bold text-zinc-700 py-2.5 bg-zinc-50 rounded-xl border border-zinc-200"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20"
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

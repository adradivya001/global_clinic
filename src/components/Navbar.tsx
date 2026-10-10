import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
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
  const [insightsDropdownOpen, setInsightsDropdownOpen] = useState(false);

  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const insightsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Close mobile & dropdown menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setInsightsDropdownOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setInsightsDropdownOpen(false);

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
  const isInsightsActive = ['/blog', '/patient-stories'].includes(location.pathname);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md py-2 shadow-md shadow-amber-950/5 border-b border-amber-200/50'
          : 'bg-[#FAF7F2] py-3'
      }`}
    >
      {/* Container matching Hero max-w-[1400px] with tight gap between logo and navbar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between lg:justify-start gap-2 lg:gap-3">
        
        {/* ── 1. LEFT: ENLARGED CLINIC LOGO (NO GAP) ── */}
        <Link to="/" className="flex items-center group shrink-0" title={CLINIC_INFO.name}>
          <img
            src={clinicLogo}
            alt={CLINIC_INFO.name}
            className="h-14 sm:h-16 lg:h-18 w-auto max-w-[320px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* ── 2. WHITE CAPSULE NAVBAR (EQUAL GAPS BETWEEN ALL TABS & BUTTON) ── */}
        <nav className="hidden lg:flex items-center justify-between flex-1 bg-white/95 backdrop-blur-md border border-amber-200/70 rounded-full shadow-lg shadow-amber-950/5 px-6 py-1.5 gap-3 xl:gap-5">
          
          {/* Home */}
          <button
            onClick={() => handleNavClick('/')}
            className={`text-xs xl:text-sm font-bold transition-colors relative py-2 whitespace-nowrap cursor-pointer ${
              location.pathname === '/' ? 'text-[#B87A0C]' : 'text-[#4A3E31] hover:text-[#B87A0C]'
            }`}
          >
            <span>Home</span>
            {location.pathname === '/' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B87A0C] rounded-full animate-fadeIn" />
            )}
          </button>

          {/* About Clinic (Dropdown) */}
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
              className={`text-xs xl:text-sm font-bold transition-colors relative py-2 whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                isAboutActive ? 'text-[#B87A0C]' : 'text-[#4A3E31] hover:text-[#B87A0C]'
              }`}
            >
              <span>About Clinic</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              {isAboutActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B87A0C] rounded-full animate-fadeIn" />
              )}
            </button>

            {aboutDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-56 rounded-2xl p-2 z-50 bg-white border border-amber-200/80 shadow-xl shadow-amber-950/10 backdrop-blur-md animate-fadeIn"
              >
                <button
                  onClick={() => handleNavClick('/about')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    location.pathname === '/about' ? 'text-[#B87A0C] bg-amber-50' : 'text-[#4A3E31] hover:text-[#B87A0C] hover:bg-amber-50/50'
                  }`}
                >
                  About Our Center
                </button>
                <button
                  onClick={() => handleNavClick('/doctor')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    location.pathname === '/doctor' ? 'text-[#B87A0C] bg-amber-50' : 'text-[#4A3E31] hover:text-[#B87A0C] hover:bg-amber-50/50'
                  }`}
                >
                  Dr. K. Bhavendra PT
                </button>
                <button
                  onClick={() => handleNavClick('/clinic')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    location.pathname === '/clinic' ? 'text-[#B87A0C] bg-amber-50' : 'text-[#4A3E31] hover:text-[#B87A0C] hover:bg-amber-50/50'
                  }`}
                >
                  18 Modern Modalities
                </button>
              </div>
            )}
          </div>

          {/* Services */}
          <button
            onClick={() => handleNavClick('/services')}
            className={`text-xs xl:text-sm font-bold transition-colors relative py-2 whitespace-nowrap cursor-pointer ${
              ['/services', '/treatments', '/conditions'].includes(location.pathname)
                ? 'text-[#B87A0C]'
                : 'text-[#4A3E31] hover:text-[#B87A0C]'
            }`}
          >
            <span>Services</span>
            {['/services', '/treatments', '/conditions'].includes(location.pathname) && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B87A0C] rounded-full animate-fadeIn" />
            )}
          </button>

          {/* Recovery Pathway */}
          <button
            onClick={() => handleNavClick('/patient-journey')}
            className={`text-xs xl:text-sm font-bold transition-colors relative py-2 whitespace-nowrap cursor-pointer ${
              location.pathname === '/patient-journey' ? 'text-[#B87A0C]' : 'text-[#4A3E31] hover:text-[#B87A0C]'
            }`}
          >
            <span>Recovery Pathway</span>
            {location.pathname === '/patient-journey' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B87A0C] rounded-full animate-fadeIn" />
            )}
          </button>

          {/* Insights (Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (insightsTimeoutRef.current) clearTimeout(insightsTimeoutRef.current);
              setInsightsDropdownOpen(true);
            }}
            onMouseLeave={() => {
              insightsTimeoutRef.current = setTimeout(() => setInsightsDropdownOpen(false), 150);
            }}
          >
            <button
              onClick={() => handleNavClick('/blog')}
              className={`text-xs xl:text-sm font-bold transition-colors relative py-2 whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                isInsightsActive ? 'text-[#B87A0C]' : 'text-[#4A3E31] hover:text-[#B87A0C]'
              }`}
            >
              <span>Insights</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${insightsDropdownOpen ? 'rotate-180' : ''}`} />
              {isInsightsActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B87A0C] rounded-full animate-fadeIn" />
              )}
            </button>

            {insightsDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-56 rounded-2xl p-2 z-50 bg-white border border-amber-200/80 shadow-xl shadow-amber-950/10 backdrop-blur-md animate-fadeIn"
              >
                <button
                  onClick={() => handleNavClick('/blog')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    location.pathname === '/blog' ? 'text-[#B87A0C] bg-amber-50' : 'text-[#4A3E31] hover:text-[#B87A0C] hover:bg-amber-50/50'
                  }`}
                >
                  Clinical Articles & Guides
                </button>
                <button
                  onClick={() => handleNavClick('/patient-stories')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    location.pathname === '/patient-stories' ? 'text-[#B87A0C] bg-amber-50' : 'text-[#4A3E31] hover:text-[#B87A0C] hover:bg-amber-50/50'
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
            className={`text-xs xl:text-sm font-bold transition-colors relative py-2 whitespace-nowrap cursor-pointer ${
              location.pathname === '/contact' ? 'text-[#B87A0C]' : 'text-[#4A3E31] hover:text-[#B87A0C]'
            }`}
          >
            <span>Contact</span>
            {location.pathname === '/contact' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B87A0C] rounded-full animate-fadeIn" />
            )}
          </button>

          {/* Golden Book Appointment Button Inside Capsule */}
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs xl:text-sm text-white transition-all duration-300 shadow-md shadow-[#B87A0C]/25 hover:shadow-[#B87A0C]/40 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #B87A0C 0%, #996204 100%)'
            }}
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

        </nav>

        {/* ── 3. MOBILE HAMBURGER BUTTON ── */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold text-xs text-white shadow-sm cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #B87A0C 0%, #996204 100%)'
            }}
          >
            <span>Book</span>
            <ArrowRight className="w-3 h-3 text-white" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white border border-amber-200/70 text-[#4A3E31] hover:text-[#B87A0C] transition-colors cursor-pointer shadow-sm"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* ── 4. MOBILE DROPDOWN MENU ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-200/50 bg-[#FAF7F2] px-6 py-5 space-y-3 animate-fadeIn shadow-xl">
          <div className="bg-white rounded-2xl p-4 border border-amber-200/60 shadow-sm space-y-1">
            <button
              onClick={() => handleNavClick('/')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                location.pathname === '/' ? 'text-[#B87A0C] bg-amber-50' : 'text-[#4A3E31]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('/about')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                isAboutActive ? 'text-[#B87A0C] bg-amber-50' : 'text-[#4A3E31]'
              }`}
            >
              About Clinic
            </button>
            <button
              onClick={() => handleNavClick('/services')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                ['/services', '/treatments'].includes(location.pathname) ? 'text-[#B87A0C] bg-amber-50' : 'text-[#4A3E31]'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('/patient-journey')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                location.pathname === '/patient-journey' ? 'text-[#B87A0C] bg-amber-50' : 'text-[#4A3E31]'
              }`}
            >
              Recovery Pathway
            </button>
            <button
              onClick={() => handleNavClick('/blog')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                isInsightsActive ? 'text-[#B87A0C] bg-amber-50' : 'text-[#4A3E31]'
              }`}
            >
              Insights
            </button>
            <button
              onClick={() => handleNavClick('/contact')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                location.pathname === '/contact' ? 'text-[#B87A0C] bg-amber-50' : 'text-[#4A3E31]'
              }`}
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }}
            className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all shadow-md shadow-[#B87A0C]/25 flex items-center justify-center gap-2 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #B87A0C 0%, #996204 100%)'
            }}
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

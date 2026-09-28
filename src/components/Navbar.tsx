import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CLINIC_INFO } from '../data/clinicData';
import clinicLogo from '../assets/clinic_logo.png';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (href === '/about') {
      navigate('/about');
      return;
    }

    if (href === '/doctor') {
      navigate('/doctor');
      return;
    }

    if (href === '/treatments') {
      navigate('/treatments');
      return;
    }

    if (href === '/conditions') {
      navigate('/conditions');
      return;
    }

    if (href === '/patient-journey') {
      navigate('/patient-journey');
      return;
    }

    if (href === '/patient-stories') {
      navigate('/patient-stories');
      return;
    }

    if (href === '/clinic') {
      navigate('/clinic');
      return;
    }

    if (href === '/blog') {
      navigate('/blog');
      return;
    }

    if (href === '/contact') {
      navigate('/contact');
      return;
    }

    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/' + href);
      }
    }
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Doctor', href: '/doctor' },
    { label: 'Treatments', href: '/treatments' },
    { label: 'Conditions', href: '/conditions' },
    { label: 'Patient Journey', href: '/patient-journey' },
    { label: 'Patient Stories', href: '/patient-stories' },
    { label: 'Our Clinic', href: '/clinic' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060b13]/90 backdrop-blur-md py-1 border-b border-white/10 shadow-xl'
          : 'bg-gradient-to-b from-[#060b13]/90 via-[#060b13]/40 to-transparent py-2'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Left: Clinic Logo Branding */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src={clinicLogo}
            alt={CLINIC_INFO.name}
            className="h-[60px] md:h-[76px] w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          />
          <div className="hidden sm:flex flex-col justify-center pl-3 pt-1">
            <span className="text-[11px] md:text-[13px] leading-[1.3] font-serif font-semibold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 uppercase">
              Global
            </span>
            <span className="text-[11px] md:text-[13px] leading-[1.3] font-serif font-semibold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 uppercase">
              Physiotherapy
            </span>
            <span className="text-[11px] md:text-[13px] leading-[1.3] font-serif font-semibold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 uppercase">
              Clinic
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3.5 lg:gap-4 xl:gap-5">
          {navLinks.map((link) => {
            const isAboutActive = link.href === '/about' && location.pathname === '/about';
            const isDoctorActive = link.href === '/doctor' && location.pathname === '/doctor';
            const isTreatmentsActive = link.href === '/treatments' && location.pathname === '/treatments';
            const isConditionsActive = link.href === '/conditions' && location.pathname === '/conditions';
            const isJourneyActive = link.href === '/patient-journey' && location.pathname === '/patient-journey';
            const isStoriesActive = link.href === '/patient-stories' && location.pathname === '/patient-stories';
            const isClinicActive = link.href === '/clinic' && location.pathname === '/clinic';
            const isBlogActive = link.href === '/blog' && location.pathname === '/blog';
            const isContactActive = link.href === '/contact' && location.pathname === '/contact';
            const isHomeActive = link.href === '/' && location.pathname === '/';
            const isActive = isAboutActive || isDoctorActive || isTreatmentsActive || isConditionsActive || isJourneyActive || isStoriesActive || isClinicActive || isBlogActive || isContactActive || (isHomeActive && !location.hash);

            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors relative group py-1 cursor-pointer ${
                  isActive
                    ? 'text-amber-400 font-semibold'
                    : 'text-slate-300 hover:text-amber-400'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right: Phone & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-amber-400">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-medium">{CLINIC_INFO.phone}</span>
          </a>

          <button
            onClick={onBookClick}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-semibold text-sm shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a111e]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left text-base font-medium text-slate-200 hover:text-amber-400 transition-colors py-2 border-b border-slate-800/60"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 space-y-3">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 text-sm text-slate-300 py-2.5 bg-slate-800/60 rounded-xl border border-slate-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


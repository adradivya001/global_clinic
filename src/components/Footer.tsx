import React from 'react';
import { Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../data/clinicData';
import clinicLogo from '../assets/clinic_logo.png';
import { NextSectionFlow } from './NextSectionFlow';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/90 text-slate-600 relative overflow-hidden font-sans">
      {/* Automatic Sequential Section Tour at the top of Footer */}
      <NextSectionFlow />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-14 pb-6 sm:pb-8 space-y-10 relative z-10">
        {/* Equal 4-Column Balanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
          {/* Column 1: Brand & Leadership Overview */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={clinicLogo}
                alt={CLINIC_INFO.name}
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-slate-500 leading-relaxed">
              <strong className="text-slate-800 font-semibold">{CLINIC_INFO.name}</strong> — Dedicated physical rehabilitation, spine decompression, orthopedic therapy, and movement restoration under Dr. K. Bhavendra PT.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F7FAFD] border border-slate-200/80 text-[11px] text-[#086B9F] font-semibold">
              <span>✓ Certified Sports & Spine Care</span>
            </div>
          </div>

          {/* Column 2: Quick Links / Clinical Directory */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#08213D] tracking-wide uppercase text-xs border-b border-slate-100 pb-2">
              Clinical Directory
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {/* Left Sub-Column */}
              <ul className="space-y-2">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'About Clinic', to: '/about' },
                  { label: 'Doctor Profile', to: '/doctor' },
                  { label: 'Treatments', to: '/treatments' },
                  { label: 'Conditions', to: '/conditions' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-600 hover:text-[#086B9F] hover:translate-x-1 transition-all inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Right Sub-Column */}
              <ul className="space-y-2">
                {[
                  { label: 'Patient Journey', to: '/patient-journey' },
                  { label: 'Patient Stories', to: '/patient-stories' },
                  { label: 'Our Clinic', to: '/clinic' },
                  { label: 'Health Blog', to: '/blog' },
                  { label: 'Contact Us', to: '/contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-600 hover:text-[#086B9F] hover:translate-x-1 transition-all inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact & Clinical Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#08213D] tracking-wide uppercase text-xs border-b border-slate-100 pb-2">
              Clinic Location & Hours
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span className="text-slate-600 leading-snug">
                  {CLINIC_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-slate-800 font-bold hover:text-[#086B9F] transition-colors"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D97706] shrink-0" />
                <span className="text-slate-600 font-medium">{CLINIC_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Immediate Connect & Social Channels */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#08213D] tracking-wide uppercase text-xs border-b border-slate-100 pb-2">
              Connect With Us
            </h4>
            
            {/* Social Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white flex items-center justify-center shadow-sm transition-all hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white flex items-center justify-center shadow-sm transition-all hover:scale-110"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white flex items-center justify-center shadow-sm transition-all hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white flex items-center justify-center shadow-sm transition-all hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed pt-1">
              Committed to helping you move freely, recover safely, and live active & pain-free.
            </p>
          </div>
        </div>

        {/* Bottom Legal bar + Scroll to Top */}
        <div className="pt-6 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 Global Physiotherapy Clinic Anantapur. All Rights Reserved.</p>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 text-xs">
              <Link to="/contact" className="hover:text-[#086B9F] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-300">|</span>
              <Link to="/contact" className="hover:text-[#086B9F] transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-slate-300">|</span>
              <Link to="/contact" className="hover:text-[#086B9F] transition-colors">
                Contact
              </Link>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white flex items-center justify-center shadow-sm transition-all hover:scale-105 cursor-pointer ml-1"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};


import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../data/clinicData';
import clinicLogo from '../assets/clinic_logo.png';
import { NextSectionFlow } from './NextSectionFlow';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-50 text-stone-600 relative overflow-hidden font-sans border-t border-stone-200">
      
      {/* Sequential Section Flow banner */}
      <NextSectionFlow />

      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10 pt-14 pb-8 space-y-12 relative z-10">
        
        {/* Equal 4-Column Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          
          {/* Column 1: Brand & Clinical Leadership */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center group" title={CLINIC_INFO.name}>
              <img
                src={clinicLogo}
                alt={CLINIC_INFO.name}
                className="h-14 sm:h-16 lg:h-18 w-auto max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-stone-600 leading-relaxed">
              <strong className="text-stone-900 font-semibold">{CLINIC_INFO.name}</strong> — Premier physical therapy, spinal decompression, sports medicine, and kinetic rehabilitation under Clinical Director Dr. K. Bhavendra PT.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-stone-200 text-xs text-emerald-800 font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified Sports & Spine Care</span>
            </div>
          </div>

          {/* Column 2: Clinical Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-stone-900 tracking-widest uppercase pb-2 border-b border-stone-200">
              Clinical Directory
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <ul className="space-y-2">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'About Clinic', to: '/about' },
                  { label: 'Doctor Profile', to: '/doctor' },
                  { label: 'Treatments (18)', to: '/treatments' },
                  { label: 'Conditions', to: '/conditions' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-stone-600 hover:text-emerald-700 hover:translate-x-1 transition-all inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

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
                      className="text-stone-600 hover:text-emerald-700 hover:translate-x-1 transition-all inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Location & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-stone-900 tracking-widest uppercase pb-2 border-b border-stone-200">
              Location & Hours
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-stone-600 leading-snug">
                  {CLINIC_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-700 shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-stone-900 font-bold hover:text-emerald-700 transition-colors"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-stone-600">{CLINIC_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Immediate Appointment */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-stone-900 tracking-widest uppercase pb-2 border-b border-stone-200">
              Immediate Care
            </h4>
            
            <p className="text-xs text-stone-600 leading-relaxed">
              Need immediate advice or have questions about an acute sports strain or spinal pain? Call our front desk directly.
            </p>

            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-white hover:bg-emerald-50/60 border border-stone-200 hover:border-emerald-600 text-stone-900 hover:text-emerald-800 font-bold text-xs transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>Direct Hotline: {CLINIC_INFO.phone}</span>
            </a>

            <div className="pt-2 flex items-center gap-2">
              <span className="text-[11px] text-stone-500">Committed to patient-first recovery.</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar + Scroll to Top */}
        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 Global Physiotherapy Clinic, Anantapur. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-xs">
              <Link to="/contact" className="hover:text-emerald-700 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-stone-300">|</span>
              <Link to="/contact" className="hover:text-emerald-700 transition-colors">
                Terms of Care
              </Link>
              <span className="text-stone-300">|</span>
              <Link to="/contact" className="hover:text-emerald-700 transition-colors">
                Clinic Location
              </Link>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 transition-all hover:scale-105 cursor-pointer"
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

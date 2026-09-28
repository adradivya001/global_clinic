import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import clinicLogo from '../assets/clinic_logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E2E8F0] text-[#52606D] py-16 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3">
              <img
                src={clinicLogo}
                alt={CLINIC_INFO.name}
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-sm text-[#52606D] leading-relaxed max-w-sm">
              <strong className="text-[#102A43]">GLOBAL PHYSIO ANANTAPUR</strong><br />
              <strong className="text-[#102A43]">Dr. K. Bhavendra PT</strong> (BPT, MPT Sports Medicine, CMT, COCMT). Evidence-backed physical rehabilitation and advanced movement restoration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-[#102A43] uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium">
              {['Home', 'About', 'Treatments', 'Patient Journey'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-amber-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-[#102A43] uppercase tracking-widest">Support</h4>
            <ul className="space-y-3 text-sm font-medium">
              {['Knowledge', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-amber-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#102A43] uppercase tracking-widest">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#102A43] shrink-0 mt-0.5" />
                <span className="text-[#52606D] font-medium leading-relaxed">{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#102A43] shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`} className="text-[#102A43] font-bold hover:text-amber-500 transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#102A43] shrink-0" />
                <span className="text-[#52606D]">{CLINIC_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between text-xs text-[#718096] gap-4">
          <p>© 2026 Global Physiotherapy Clinic Anantapur. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#102A43] font-medium transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#102A43] font-medium transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#102A43] font-medium transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


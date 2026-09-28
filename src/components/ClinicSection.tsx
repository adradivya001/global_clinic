import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Compass, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ClinicSectionProps {
  onBookClick?: () => void;
}

export const ClinicSection: React.FC<ClinicSectionProps> = ({ onBookClick }) => {
  const [mapZoom, setMapZoom] = useState(15);
  const [isMarkerHovered, setIsMarkerHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  // Verified directions URL for Google Maps
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC_INFO.address)}`;

  const handleLocateClinic = () => {
    setMapZoom(16);
    setShowPopup(true);
  };

  return (
    <section id="clinic" className="py-12 lg:py-16 bg-[#F7FAFD] relative overflow-hidden font-sans">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft corner atmospheric lighting */}
        <div className="absolute -top-[10%] left-[5%] w-[45%] h-[55%] rounded-full blur-[120px] opacity-40" style={{ background: 'radial-gradient(circle, rgba(23,105,194,0.10), transparent 70%)' }} />
        <div className="absolute top-[15%] -right-[5%] w-[40%] h-[60%] rounded-full blur-[120px] opacity-30" style={{ background: 'radial-gradient(circle, rgba(11,92,142,0.08), transparent 70%)' }} />
        <div className="absolute -bottom-[10%] left-[30%] w-[45%] h-[45%] rounded-full blur-[130px] opacity-25" style={{ background: 'radial-gradient(circle, rgba(245,180,0,0.05), transparent 70%)' }} />

        {/* Faint Dotted Grid Pattern at far edges */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0B5C8E_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_40%,#000_100%)]"></div>

        {/* Ultra-low opacity SVG accents */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.10]" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
          <path d="M-100 200 C400 100, 800 300, 1540 180" stroke="#0B5C8E" strokeWidth="1.5" />
          <path d="M-100 650 C500 750, 1000 550, 1540 680" stroke="#F5B400" strokeWidth="1" strokeDasharray="4 4" />
          <g opacity="0.3" transform="translate(60, 680)">
            <line x1="0" y1="10" x2="20" y2="10" stroke="#0B5C8E" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="0" x2="10" y2="20" stroke="#0B5C8E" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-[32px] h-[2px] bg-[#F5B400]"></div>
            <span className="text-[#0B5C8E] font-bold text-[12px] tracking-[0.20em] uppercase">
              OUR LOCATION
            </span>
          </div>
          
          <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-extrabold text-[#08213D] tracking-tight leading-[1.1] mb-1.5">
            Our Clinic
          </h2>
          
          <p className="text-[#526A84] text-[14px] sm:text-[15px] leading-[1.5] max-w-[600px]">
            Conveniently located in the heart of Anantapur.
          </p>
        </div>

        {/* 3-Column Main Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* ========================================================
              LEFT PANEL (35%) - CLINIC PHOTO
          ======================================================== */}
          <div className="lg:col-span-4 relative rounded-[20px] overflow-hidden border border-[rgba(8,33,61,0.08)] shadow-[0_15px_40px_rgba(8,33,61,0.08)] bg-white group min-h-[380px] flex flex-col justify-end">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
              alt="Global Physiotherapy Clinic Facility"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08213D]/70 via-[#08213D]/10 to-transparent pointer-events-none" />

            {/* Bottom Floating Glass Badge */}
            <div className="relative z-10 p-4 m-3 bg-white/92 backdrop-blur-md rounded-[14px] border border-white/50 shadow-[0_8px_20px_rgba(8,33,61,0.10)]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#EAF4FC] text-[#0B5C8E] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[#08213D] font-extrabold text-[13px] leading-snug">
                    GLOBAL PHYSIOTHERAPY CLINIC
                  </h4>
                  <p className="text-[#526A84] text-[11px] font-semibold mt-0.5">
                    Housing Board Colony • Anantapur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              CENTER PANEL (30%) - CLINIC INFORMATION GLASS CARD
          ======================================================== */}
          <div className="lg:col-span-4 bg-white/78 backdrop-blur-[18px] border border-[rgba(8,33,61,0.09)] rounded-[20px] p-6 sm:p-7 shadow-[0_15px_40px_rgba(8,33,61,0.06)] flex flex-col justify-between min-h-[380px]">
            
            <div className="space-y-4">
              
              {/* Row 1: Address */}
              <div className="flex items-start gap-3 group/row cursor-pointer transition-transform duration-250 hover:translate-x-1">
                <div className="w-[38px] h-[38px] rounded-full bg-[#EAF4FC] group-hover/row:bg-[#FFF4D6] text-[#0B5C8E] group-hover/row:text-[#F5B400] flex items-center justify-center shrink-0 transition-colors duration-250">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7890A8] block mb-0.5">
                    CLINIC ADDRESS
                  </span>
                  <p className="text-[#08213D] font-bold text-[13px] leading-snug">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>

              {/* Row 2: Phone */}
              <div className="flex items-start gap-3 group/row cursor-pointer transition-transform duration-250 hover:translate-x-1">
                <div className="w-[38px] h-[38px] rounded-full bg-[#EAF4FC] group-hover/row:bg-[#FFF4D6] text-[#0B5C8E] group-hover/row:text-[#F5B400] flex items-center justify-center shrink-0 transition-colors duration-250">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7890A8] block mb-0.5">
                    DIRECT CONTACT
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-[#08213D] font-bold text-[14px] hover:text-[#0B5C8E] transition-colors"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Row 3: Operating Hours */}
              <div className="flex items-start gap-3 group/row cursor-pointer transition-transform duration-250 hover:translate-x-1">
                <div className="w-[38px] h-[38px] rounded-full bg-[#EAF4FC] group-hover/row:bg-[#FFF4D6] text-[#0B5C8E] group-hover/row:text-[#F5B400] flex items-center justify-center shrink-0 transition-colors duration-250">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7890A8] block mb-0.5">
                    CLINIC HOURS
                  </span>
                  <p className="text-[#08213D] font-bold text-[13px] leading-snug">
                    {CLINIC_INFO.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-[rgba(8,33,61,0.06)]">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[46px] bg-white border border-[#1769C2] text-[#08213D] rounded-[12px] font-bold text-[13px] shadow-sm hover:bg-[#F4F9FD] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <Navigation className="w-3.5 h-3.5 text-[#1769C2] group-hover/btn:translate-x-0.5 transition-transform" />
                <span>Get Directions &rarr;</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full h-[46px] bg-[#08213D] text-white rounded-[12px] font-bold text-[13px] shadow-[0_8px_20px_rgba(8,33,61,0.15)] hover:bg-[#061A31] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFBF1A] group-hover/btn:translate-x-0.5 transition-transform" />
                <span>Call Now &rarr;</span>
              </a>
            </div>

          </div>

          {/* ========================================================
              RIGHT PANEL (35%) - LIVE INTERACTIVE MAP EMBED & CONTROLS
          ======================================================== */}
          <div className="lg:col-span-4 relative rounded-[20px] overflow-hidden border border-[rgba(8,33,61,0.10)] shadow-[0_15px_40px_rgba(8,33,61,0.08)] min-h-[380px] bg-[#EAF4FC] group">
            
            {/* Real Interactive Google Maps Embed (OpenStreetMap / Google Maps Iframe) */}
            <iframe
              title="Global Physiotherapy Clinic Location Map"
              src="https://maps.google.com/maps?q=Housing%20Board%20Colony%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full absolute inset-0 border-0 filter brightness-[0.98] contrast-[1.02]"
              loading="lazy"
              allowFullScreen
            />

            {/* Custom Interactive Floating Marker & Pulse Overlay */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center -translate-y-6">
              
              {/* Outer Pulsing Aura Ring */}
              <div className="w-16 h-16 rounded-full bg-[#0B5C8E]/30 animate-[ping_2.2s_cubic-bezier(0,0,0.2,1)_infinite]" />
              
              {/* Custom Pin Card */}
              <div 
                className="absolute pointer-events-auto cursor-pointer"
                onMouseEnter={() => setIsMarkerHovered(true)}
                onMouseLeave={() => setIsMarkerHovered(false)}
                onClick={() => setShowPopup(!showPopup)}
              >
                <div className="w-12 h-12 rounded-full bg-[#08213D] border-2 border-[#FFBF1A] shadow-[0_10px_25px_rgba(8,33,61,0.35)] flex items-center justify-center text-[#FFBF1A] hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 fill-[#FFBF1A]" />
                </div>
              </div>

            </div>

            {/* Interactive Clinic Map Popup */}
            {showPopup && (
              <div className="absolute top-6 left-6 right-6 sm:right-auto sm:max-w-[300px] z-20 bg-white/95 backdrop-blur-md p-4 rounded-[16px] border border-[rgba(8,33,61,0.10)] shadow-[0_15px_35px_rgba(8,33,61,0.15)] animate-[slideUp_0.3s_ease-out_forwards]">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-extrabold text-[#08213D] text-[13px] leading-tight">
                    GLOBAL PHYSIOTHERAPY CLINIC
                  </div>
                  <button 
                    onClick={() => setShowPopup(false)}
                    className="text-[#7890A8] hover:text-[#08213D] font-bold text-xs"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-[#526A84] text-[11px] leading-snug mb-3">
                  Dr. No. MIG 30, Housing Board Colony, Anantapur
                </p>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0B5C8E] hover:text-[#1769C2] transition-colors"
                >
                  Get Directions <Navigation className="w-3 h-3" />
                </a>
              </div>
            )}

            {/* Top Right "Locate Clinic" Action Control */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={handleLocateClinic}
                className="bg-white/94 backdrop-blur-md text-[#08213D] border border-[rgba(8,33,61,0.10)] rounded-full px-3.5 py-2 text-[11px] font-bold shadow-md hover:bg-[#08213D] hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                aria-label="Locate Clinic on Map"
              >
                <Compass className="w-4 h-4 text-[#F5B400]" />
                <span>LOCATE CLINIC</span>
              </button>
            </div>

            {/* Bottom Overlay Info Tag */}
            <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
              <div className="bg-white/92 backdrop-blur-md rounded-[12px] px-3.5 py-2 border border-[rgba(8,33,61,0.08)] shadow-sm">
                <span className="text-[#08213D] text-[11px] font-extrabold uppercase tracking-wider block">
                  VISIT OUR CLINIC
                </span>
                <span className="text-[#526A84] text-[10px] font-medium">
                  Housing Board Colony • Anantapur
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Navigation, Compass, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ClinicSectionProps {
  onBookClick?: () => void;
}

export const ClinicSection: React.FC<ClinicSectionProps> = ({ onBookClick: _onBookClick }) => {
  const [showPopup, setShowPopup] = useState(true);

  // Verified directions URL for Google Maps
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC_INFO.address)}`;

  const handleLocateClinic = () => {
    setShowPopup(true);
  };

  return (
    <section id="clinic" className="py-16 lg:py-24 bg-gradient-to-b from-[#FBFBFA] via-[#F4F7F4] to-[#FBFBFA] relative overflow-hidden font-sans border-t border-stone-200/80">
      
      {/* Background Lighting */}
      <div className="absolute top-10 left-1/3 w-[550px] h-[550px] bg-emerald-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[550px] h-[550px] bg-orange-100/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#059669_0.6px,transparent_0.6px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-300/60 text-emerald-800 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Center of Excellence • Anantapur</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Visit Our <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-900 bg-clip-text text-transparent">Clinical Facility</span>
            </h2>
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl mt-2 font-normal">
              Modern rehabilitation center equipped with 18 international electrotherapy & spinal decompression modalities.
            </p>
          </div>

          <Link
            to="/clinic"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-stone-200 hover:border-emerald-600 text-stone-900 hover:text-emerald-700 font-bold text-xs sm:text-sm shadow-xs transition-all group shrink-0"
          >
            <span>Explore All 18 Machines</span>
            <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Main Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT PANEL (4 Cols) - CLINIC PHOTO & BADGE */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden border border-stone-200/90 shadow-lg shadow-stone-200/40 bg-white group min-h-[420px] flex flex-col justify-end">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
              alt="Global Physiotherapy Clinic Facility"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent pointer-events-none" />

            {/* Bottom Floating Glass Badge */}
            <div className="relative z-10 p-5 m-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-black text-sm leading-snug">
                    GLOBAL PHYSIOTHERAPY CLINIC
                  </h4>
                  <p className="text-stone-500 text-xs font-semibold mt-0.5">
                    Housing Board Colony • Beside PNB, Anantapur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER PANEL (4 Cols) - CLINIC INFORMATION GLASS CARD */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-lg shadow-stone-200/40 flex flex-col justify-between min-h-[420px]">
            
            <div className="space-y-5">
              
              {/* Row 1: Address */}
              <div className="flex items-start gap-3.5 group/row transition-transform hover:translate-x-1">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block mb-0.5">
                    CLINIC ADDRESS
                  </span>
                  <p className="text-stone-900 font-bold text-sm leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>

              {/* Row 2: Phone */}
              <div className="flex items-start gap-3.5 group/row transition-transform hover:translate-x-1">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-700 flex items-center justify-center shrink-0 border border-orange-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block mb-0.5">
                    DIRECT APPOINTMENTS
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-stone-900 font-black text-base hover:text-emerald-700 transition-colors"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Row 3: Operating Hours */}
              <div className="flex items-start gap-3.5 group/row transition-transform hover:translate-x-1">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block mb-0.5">
                    CONSULTATION HOURS
                  </span>
                  <p className="text-stone-900 font-bold text-sm leading-snug">
                    {CLINIC_INFO.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col gap-3 pt-6 border-t border-stone-100">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-stone-50 hover:bg-emerald-50/50 border border-stone-200 text-stone-900 hover:border-emerald-600 hover:text-emerald-800 rounded-2xl font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2 group/btn"
              >
                <Navigation className="w-4 h-4 text-emerald-700 group-hover/btn:translate-x-0.5 transition-transform" />
                <span>Open Google Maps Directions</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-black text-sm shadow-md shadow-emerald-700/20 hover:shadow-emerald-700/35 transition-all flex items-center justify-center gap-2 group/btn"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Clinic Directly</span>
              </a>
            </div>

          </div>

          {/* RIGHT PANEL (4 Cols) - INTERACTIVE MAP EMBED & CONTROLS */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden border border-stone-200/90 shadow-lg shadow-stone-200/40 min-h-[420px] bg-stone-100 group">
            
            {/* Real Interactive Google Maps Embed */}
            <iframe
              title="Global Physiotherapy Clinic Location Map"
              src="https://maps.google.com/maps?q=Punjab%20National%20Bank%2C%20Housing%20Board%20Colony%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full absolute inset-0 border-0 filter brightness-[0.98] contrast-[1.02]"
              loading="lazy"
              allowFullScreen
            />

            {/* Custom Interactive Floating Marker & Pulse Overlay */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center -translate-y-6">
              
              {/* Outer Pulsing Aura Ring */}
              <div className="w-16 h-16 rounded-full bg-emerald-600/30 animate-[ping_2.2s_cubic-bezier(0,0,0.2,1)_infinite]" />
              
              {/* Custom Pin Card */}
              <div 
                className="absolute pointer-events-auto cursor-pointer"
                onClick={() => setShowPopup(!showPopup)}
              >
                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-emerald-600 shadow-2xl flex items-center justify-center text-emerald-700 hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 fill-emerald-600 text-white" />
                </div>
              </div>

            </div>

            {/* Interactive Clinic Map Popup */}
            {showPopup && (
              <div className="absolute top-5 left-5 right-5 sm:right-auto sm:max-w-[280px] z-20 bg-white/95 backdrop-blur-xl p-4 rounded-2xl border border-stone-200/90 shadow-xl">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="font-black text-stone-900 text-xs leading-tight">
                    GLOBAL PHYSIOTHERAPY
                  </div>
                  <button 
                    onClick={() => setShowPopup(false)}
                    className="text-stone-400 hover:text-stone-900 font-bold text-xs"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-stone-500 text-[11px] leading-snug mb-3">
                  Beside Punjab National Bank, Housing Board Colony
                </p>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
                >
                  Directions <Navigation className="w-3 h-3" />
                </a>
              </div>
            )}

            {/* Top Right "Locate Clinic" Action Control */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={handleLocateClinic}
                className="bg-white/95 backdrop-blur-md text-stone-900 border border-stone-200 rounded-full px-3.5 py-1.5 text-xs font-bold shadow-md hover:bg-emerald-700 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                aria-label="Locate Clinic on Map"
              >
                <Compass className="w-3.5 h-3.5 text-emerald-700" />
                <span>Locate</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ClinicSection;

import React from 'react';
import { MapPin, Phone, Clock, Navigation, Compass, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

export const ClinicLocation: React.FC = () => {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    CLINIC_INFO.address
  )}`;

  const googleMapsViewUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Global Physiotherapy Clinic ' + CLINIC_INFO.address
  )}`;

  return (
    <section id="visit-us" className="py-16 lg:py-24 bg-[#F7FAFD] relative overflow-hidden font-sans scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-[#086B9F]" />
            <span>CLINIC LOCATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-3">
            Plan Your Visit
          </h2>

          <p className="text-[#526A84] text-base leading-relaxed">
            Conveniently located in Anantapur with straightforward access and parking.
          </p>
        </div>

        {/* Clean Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Verified Clinic Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-[#08213D]/8 shadow-[0_10px_30px_rgba(8,33,61,0.04)] flex flex-col justify-between">
            <div>
              {/* Clinic Badge */}
              <div className="inline-block px-3 py-1 rounded-lg bg-[#EAF4FC] text-[#086B9F] font-bold text-[11px] uppercase tracking-wider mb-6">
                GLOBAL PHYSIOTHERAPY CLINIC
              </div>

              <h3 className="text-2xl font-extrabold text-[#07182D] tracking-tight mb-8">
                Clinic Information
              </h3>

              {/* Info Rows */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#EAF4FC] text-[#086B9F] flex items-center justify-center shrink-0 border border-[#086B9F]/15 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7890A8] block mb-1">
                      CLINIC ADDRESS
                    </span>
                    <p className="text-[#07182D] font-bold text-sm sm:text-base leading-snug">
                      {CLINIC_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFF4D6] text-[#D9A400] flex items-center justify-center shrink-0 border border-[#F5B400]/25 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7890A8] block mb-1">
                      DIRECT PHONE
                    </span>
                    <a
                      href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-[#07182D] font-bold text-sm sm:text-base hover:text-[#086B9F] transition-colors block"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#EAF4FC] text-[#1769C2] flex items-center justify-center shrink-0 border border-[#1769C2]/15 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7890A8] block mb-1">
                      WORKING HOURS
                    </span>
                    <p className="text-[#07182D] font-bold text-sm sm:text-base leading-snug">
                      {CLINIC_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-8 border-t border-[#08213D]/6 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Navigation className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="py-3.5 px-6 rounded-xl bg-[#08213D] hover:bg-[#0a294c] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Live Interactive Map Embed (7 cols) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#08213D]/10 shadow-[0_10px_30px_rgba(8,33,61,0.06)] min-h-[420px] bg-slate-100 flex flex-col">
            <iframe
              title="Global Physiotherapy Clinic Location"
              src="https://maps.google.com/maps?q=Housing%20Board%20Colony%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px] flex-1 border-0 filter brightness-[0.98] contrast-[1.02]"
              loading="lazy"
              allowFullScreen
            />

            {/* Bottom Map Bar */}
            <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 border-t border-[#08213D]/8 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black tracking-wider text-[#07182D] block uppercase">
                  GLOBAL PHYSIOTHERAPY CLINIC
                </span>
                <span className="text-[11px] text-[#526A84] font-medium">
                  Housing Board Colony &bull; Anantapur &bull; 515001
                </span>
              </div>

              <a
                href={googleMapsViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F7FAFD] border border-[#08213D]/8 hover:border-[#086B9F] text-[#086B9F] font-bold text-xs transition-colors shrink-0"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

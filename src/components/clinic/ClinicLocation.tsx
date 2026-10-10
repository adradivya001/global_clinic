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
    <section id="visit-us" className="py-16 lg:py-24 bg-[#FFFDF8] relative overflow-hidden font-sans scroll-mt-20 border-t border-[#EAD9B7]/60">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8EAC9] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#B87908]" />
            <span>CLINIC LOCATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.15] mb-3">
            Plan Your Visit
          </h2>

          <p className="text-[#65594B] text-base leading-relaxed">
            Conveniently located in Anantapur with direct main road access and convenient parking.
          </p>
        </div>

        {/* Clean Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Verified Clinic Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-[#EAD9B7] shadow-xl flex flex-col justify-between">
            <div>
              {/* Clinic Badge */}
              <div className="inline-block px-3 py-1 rounded-xl bg-[#F8EAC9] text-[#B87908] font-bold text-[11px] uppercase tracking-wider mb-6 border border-[#EAD9B7]">
                GLOBAL PHYSIOTHERAPY CLINIC
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#24190F] tracking-tight mb-8">
                Clinic Information
              </h3>

              {/* Info Rows */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F8EAC9] text-[#B87908] flex items-center justify-center shrink-0 border border-[#EAD9B7] mt-0.5 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#65594B] block mb-1">
                      CLINIC ADDRESS
                    </span>
                    <p className="text-[#24190F] font-bold text-sm sm:text-base leading-snug">
                      {CLINIC_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F8EAC9] text-[#B87908] flex items-center justify-center shrink-0 border border-[#EAD9B7] mt-0.5 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#65594B] block mb-1">
                      DIRECT PHONE
                    </span>
                    <a
                      href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-[#24190F] font-bold text-sm sm:text-base hover:text-[#B87908] transition-colors block"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F8EAC9] text-[#B87908] flex items-center justify-center shrink-0 border border-[#EAD9B7] mt-0.5 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#65594B] block mb-1">
                      WORKING HOURS
                    </span>
                    <p className="text-[#24190F] font-bold text-sm sm:text-base leading-snug">
                      {CLINIC_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-8 border-t border-[#EAD9B7]/60 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:from-[#a06806] hover:to-[#c48a1d] text-white font-bold text-sm shadow-md shadow-[#B87908]/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Navigation className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="py-3.5 px-6 rounded-2xl bg-[#FAF4E8] hover:bg-[#F8EAC9] text-[#24190F] border border-[#EAD9B7] font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#B87908]" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Live Interactive Map Embed (7 cols) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#EAD9B7] shadow-xl min-h-[420px] bg-[#FAF4E8] flex flex-col">
            <iframe
              title="Global Physiotherapy Clinic Location"
              src="https://maps.google.com/maps?q=Punjab%20National%20Bank%2C%20Housing%20Board%20Colony%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px] flex-1 border-0"
              loading="lazy"
              allowFullScreen
            />

            {/* Bottom Map Bar */}
            <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 border-t border-[#EAD9B7] flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-serif font-bold tracking-wider text-[#24190F] block uppercase">
                  GLOBAL PHYSIOTHERAPY CLINIC
                </span>
                <span className="text-[11px] text-[#65594B] font-medium">
                  Housing Board Colony &bull; Beside Punjab National Bank &bull; 515001
                </span>
              </div>

              <a
                href={googleMapsViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF4E8] border border-[#EAD9B7] hover:border-[#B87908] text-[#B87908] font-bold text-xs transition-colors shrink-0"
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

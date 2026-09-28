import React from 'react';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

export const ContactLocationMap: React.FC = () => {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    CLINIC_INFO.address
  )}`;

  const googleMapsViewUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Global Physiotherapy Clinic ' + CLINIC_INFO.address
  )}`;

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden font-sans border-t border-[#08213D]/6">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-[#086B9F]" />
            <span>FIND OUR CLINIC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-3">
            Visit Global Physiotherapy Clinic
          </h2>

          <p className="text-[#526A84] text-base leading-relaxed">
            Conveniently located in Anantapur with direct vehicle access and comfortable surroundings.
          </p>
        </div>

        {/* Split Layout: Details (Left) + Interactive Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Location Details (5 cols) */}
          <div className="lg:col-span-5 bg-[#F7FAFD] rounded-3xl p-8 sm:p-10 border border-[#08213D]/8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-lg bg-[#EAF4FC] text-[#086B9F] font-bold text-[11px] uppercase tracking-wider mb-5">
                VERIFIED LOCATION
              </div>

              <h3 className="text-2xl font-extrabold text-[#07182D] tracking-tight mb-4">
                Anantapur Facility
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#086B9F] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#7890A8] uppercase tracking-wider block">
                      Full Address
                    </span>
                    <p className="text-sm font-bold text-[#07182D] leading-relaxed mt-1">
                      {CLINIC_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#08213D]/6 text-xs text-[#526A84] leading-relaxed">
                  Located within Housing Board Colony in Anantapur. Landmark access available for patient transit and wheelchair entry.
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#08213D]/6 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Navigation className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>Get Directions</span>
              </a>

              <a
                href={googleMapsViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl bg-white border border-[#08213D]/10 hover:border-[#086B9F] text-[#07182D] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Map</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#086B9F]" />
              </a>
            </div>
          </div>

          {/* RIGHT: Live Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#08213D]/10 shadow-[0_10px_30px_rgba(8,33,61,0.06)] min-h-[380px] sm:min-h-[440px] bg-slate-100 flex flex-col">
            <iframe
              title="Global Physiotherapy Clinic Map Location"
              src="https://maps.google.com/maps?q=Housing%20Board%20Colony%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] flex-1 border-0 filter brightness-[0.98] contrast-[1.02]"
              loading="lazy"
              allowFullScreen
            />

            {/* Bottom Location Indicator Bar */}
            <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 border-t border-[#08213D]/8 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black tracking-wider text-[#07182D] block uppercase">
                  GLOBAL PHYSIOTHERAPY CLINIC
                </span>
                <span className="text-[11px] text-[#526A84] font-medium">
                  Anantapur &bull; Andhra Pradesh &bull; 515001
                </span>
              </div>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#08213D] text-white font-bold text-xs hover:bg-[#0a294c] transition-colors shrink-0"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Navigate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

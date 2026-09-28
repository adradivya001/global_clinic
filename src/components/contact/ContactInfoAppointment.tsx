import React from 'react';
import { MapPin, Phone, Clock, CalendarCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, DOCTOR_INFO } from '../../data/clinicData';

interface ContactInfoAppointmentProps {
  onBookClick: () => void;
}

export const ContactInfoAppointment: React.FC<ContactInfoAppointmentProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden font-sans border-b border-[#08213D]/6">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: Essential Verified Clinic Information (7 cols) */}
          <div className="lg:col-span-7 bg-[#F7FAFD] rounded-3xl p-8 sm:p-10 border border-[#08213D]/8 shadow-sm flex flex-col justify-between">
            <div>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase mb-4">
                CLINIC DIRECTORY
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07182D] tracking-tight leading-[1.2] mb-3">
                {CLINIC_INFO.name}
              </h2>

              <p className="text-[#526A84] text-sm sm:text-base leading-relaxed mb-8">
                Physiotherapy, pain management, and physical rehabilitation under{' '}
                <strong className="text-[#07182D]">{DOCTOR_INFO.name}</strong> ({DOCTOR_INFO.credentials.join(', ')}).
              </p>

              {/* Information Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {/* Address */}
                <div className="p-5 rounded-2xl bg-white border border-[#08213D]/6">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#086B9F] flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7890A8] block mb-1">
                    LOCATION ADDRESS
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#07182D] leading-snug">
                    {CLINIC_INFO.address}
                  </p>
                </div>

                {/* Direct Phone */}
                <div className="p-5 rounded-2xl bg-white border border-[#08213D]/6">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4D6] text-[#D9A400] flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7890A8] block mb-1">
                    TELEPHONE
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-bold text-[#07182D] hover:text-[#086B9F] transition-colors leading-snug block"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>

                {/* Working Hours */}
                <div className="p-5 rounded-2xl bg-white border border-[#08213D]/6">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#1769C2] flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7890A8] block mb-1">
                    OPERATING HOURS
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#07182D] leading-snug">
                    {CLINIC_INFO.hours}
                  </p>
                </div>

                {/* Appointment Info */}
                <div className="p-5 rounded-2xl bg-white border border-[#08213D]/6">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#D9A400] flex items-center justify-center mb-3">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7890A8] block mb-1">
                    APPOINTMENT POLICY
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#07182D] leading-snug">
                    Prior booking recommended for dedicated consultations.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Assurance Note */}
            <div className="p-4 rounded-xl bg-white/70 border border-[#08213D]/6 flex items-center gap-3 text-xs text-[#526A84]">
              <ShieldCheck className="w-5 h-5 text-[#086B9F] shrink-0" />
              <span>Direct inquiries handled promptly during active operating hours.</span>
            </div>
          </div>

          {/* RIGHT: Transactional Appointment Action Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#060b13] rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden text-white">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#168DD0]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F5B400]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs tracking-wider uppercase mb-6">
                APPOINTMENT BOOKING
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
                Book Your Visit
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Connect with our clinic to discuss your appointment requirements, available scheduling slots, and next steps.
              </p>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Appointments ensure that adequate time is reserved for your individual physical evaluation and discussion.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 pt-6 border-t border-slate-800/80 flex flex-col gap-3">
              <button
                onClick={onBookClick}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-500 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call the Clinic</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

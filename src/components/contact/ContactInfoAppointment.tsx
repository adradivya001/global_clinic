import React from 'react';
import { MapPin, Phone, Clock, CalendarCheck, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CLINIC_INFO, DOCTOR_INFO } from '../../data/clinicData';

interface ContactInfoAppointmentProps {
  onBookClick: () => void;
}

export const ContactInfoAppointment: React.FC<ContactInfoAppointmentProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden font-sans border-b border-stone-200/70">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: Essential Verified Clinic Information (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-sm flex flex-col justify-between">
            <div>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                CLINIC DIRECTORY
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-[1.2] mb-3">
                {CLINIC_INFO.name}
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
                Physiotherapy, advanced pain management, and physical rehabilitation under{' '}
                <strong className="text-stone-900">{DOCTOR_INFO.name}</strong> ({DOCTOR_INFO.credentials.join(', ')}).
              </p>

              {/* Information Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {/* Address */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200/70 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                    LOCATION ADDRESS
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                    {CLINIC_INFO.address}
                  </p>
                </div>

                {/* Direct Phone */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200/70 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                    TELEPHONE
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors leading-snug block"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>

                {/* Working Hours */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200/70 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                    OPERATING HOURS
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                    {CLINIC_INFO.hours}
                  </p>
                </div>

                {/* Appointment Info */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200/70 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center mb-3">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                    APPOINTMENT POLICY
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                    Prior booking recommended for dedicated individual consultations.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Assurance Note */}
            <div className="p-4 rounded-xl bg-white border border-stone-200/70 flex items-center gap-3 text-xs text-stone-600">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Direct inquiries handled promptly during active operating hours.</span>
            </div>
          </div>

          {/* RIGHT: Transactional Appointment Action Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 rounded-3xl p-8 sm:p-10 border border-stone-800 shadow-xl flex flex-col justify-between relative overflow-hidden text-white">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs tracking-wider uppercase mb-6">
                APPOINTMENT BOOKING
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
                Book Your Visit
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8">
                Connect with our clinic to discuss your rehabilitation requirements, available scheduling slots, and next steps.
              </p>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                Appointments ensure that adequate time is reserved for your individual physical evaluation and clinical discussion.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 pt-6 border-t border-stone-800 flex flex-col gap-3">
              <button
                onClick={onBookClick}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-700/30 hover:shadow-emerald-700/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full py-3.5 rounded-xl bg-stone-800/90 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-stone-500 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call the Clinic ({CLINIC_INFO.phone})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

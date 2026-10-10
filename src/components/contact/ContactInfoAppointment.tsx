import React from 'react';
import { MapPin, Phone, Clock, CalendarCheck, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CLINIC_INFO, DOCTOR_INFO } from '../../data/clinicData';

interface ContactInfoAppointmentProps {
  onBookClick: () => void;
}

export const ContactInfoAppointment: React.FC<ContactInfoAppointmentProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden font-sans border-b border-[#EAD9B7]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: Essential Verified Clinic Information (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF4E8] rounded-3xl p-8 sm:p-10 border border-[#EAD9B7] shadow-sm flex flex-col justify-between">
            <div>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
                CLINIC DIRECTORY
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.2] mb-3">
                {CLINIC_INFO.name}
              </h2>

              <p className="text-[#65594B] text-sm sm:text-base leading-relaxed mb-8">
                Physiotherapy, advanced pain management, and physical rehabilitation under{' '}
                <strong className="text-[#24190F]">{DOCTOR_INFO.name}</strong> ({DOCTOR_INFO.credentials.join(', ')}).
              </p>

              {/* Information Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {/* Address */}
                <div className="p-5 rounded-2xl bg-white border border-[#EAD9B7] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#F8EAC9] text-[#B87908] flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#65594B]/70 block mb-1">
                    LOCATION ADDRESS
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#24190F] leading-snug">
                    {CLINIC_INFO.address}
                  </p>
                </div>

                {/* Direct Phone */}
                <div className="p-5 rounded-2xl bg-white border border-[#EAD9B7] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#F8EAC9] text-[#B87908] flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#65594B]/70 block mb-1">
                    TELEPHONE
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-bold text-[#B87908] hover:text-[#D99B24] transition-colors leading-snug block"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>

                {/* Working Hours */}
                <div className="p-5 rounded-2xl bg-white border border-[#EAD9B7] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF4E8] text-[#24190F] flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#65594B]/70 block mb-1">
                    OPERATING HOURS
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#24190F] leading-snug">
                    {CLINIC_INFO.hours}
                  </p>
                </div>

                {/* Appointment Info */}
                <div className="p-5 rounded-2xl bg-white border border-[#EAD9B7] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#F8EAC9] text-[#B87908] flex items-center justify-center mb-3">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#65594B]/70 block mb-1">
                    APPOINTMENT POLICY
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#24190F] leading-snug">
                    Prior booking recommended for dedicated individual consultations.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Assurance Note */}
            <div className="p-4 rounded-xl bg-white border border-[#EAD9B7] flex items-center gap-3 text-xs text-[#65594B]">
              <ShieldCheck className="w-5 h-5 text-[#B87908] shrink-0" />
              <span>Direct inquiries handled promptly during active operating hours.</span>
            </div>
          </div>

          {/* RIGHT: Transactional Appointment Action Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#24190F] via-[#3D2B1A] to-[#24190F] rounded-3xl p-8 sm:p-10 border border-[#B87908]/40 shadow-xl flex flex-col justify-between relative overflow-hidden text-white">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#B87908]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D99B24]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B87908]/20 border border-[#B87908]/40 text-[#D99B24] font-bold text-xs tracking-wider uppercase mb-6">
                APPOINTMENT BOOKING
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-[1.2] mb-4">
                Book Your Visit
              </h3>

              <p className="text-[#EAD9B7] text-sm sm:text-base leading-relaxed mb-8">
                Connect with our clinic to discuss your rehabilitation requirements, available scheduling slots, and next steps.
              </p>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-[#EAD9B7] leading-relaxed mb-6">
                Appointments ensure that adequate time is reserved for your individual physical evaluation and clinical discussion.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 pt-6 border-t border-[#B87908]/30 flex flex-col gap-3">
              <button
                onClick={onBookClick}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B87908] to-[#D99B24] text-white font-bold text-sm shadow-lg shadow-[#B87908]/30 hover:opacity-95 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#D99B24]" />
                <span>Call the Clinic ({CLINIC_INFO.phone})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

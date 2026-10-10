import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Calendar, Clock, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[#FAF4E8] to-[#FFFDF8] font-sans border-t border-[#EAD9B7]">
      
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F8EAC9]/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#FAF4E8]/60 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#B87908_0.6px,transparent_0.6px)] [background-size:28px_28px] opacity-[0.035]" />
      </div>

      <div className="relative z-10 max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#EAD9B7] shadow-xl shadow-[#913d12]/5 relative overflow-hidden">
          
          <div className="max-w-3xl space-y-6">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] text-xs font-extrabold uppercase tracking-widest shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
              <span>Priority Appointments Available Today</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15]">
              Begin Your Evidence-Based <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#B87908] via-[#D99B24] to-[#24190F] bg-clip-text text-transparent">
                Recovery Journey Today
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#65594B] font-normal leading-relaxed max-w-2xl">
              Don't let chronic joint stiffness or spinal pain dictate your lifestyle. Schedule a clinical consultation with Dr. K. Bhavendra PT and experience world-class physical rehabilitation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="px-8 py-4 rounded-2xl bg-[#B87908] hover:bg-[#966205] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-[#B87908]/25 hover:shadow-[#B87908]/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Clinic Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="px-8 py-4 rounded-2xl bg-[#FAF4E8] hover:bg-[#F8EAC9] border border-[#EAD9B7] text-[#24190F] font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2.5 shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#B87908]" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* Reassurance Badges */}
            <div className="pt-6 border-t border-[#EAD9B7]/50 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#65594B] font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B87908] shrink-0" />
                <span>Certified Clinical Protocols</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D99B24] shrink-0" />
                <span>Same-Day Appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B87908] shrink-0" />
                <span>18 Advanced Modalities</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

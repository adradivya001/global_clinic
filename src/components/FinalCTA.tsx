import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0B2538]">
      {/* Background Cinematic Photography with Dark Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=80"
          alt="Recovery Journey"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2538] via-[#0B2538]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-[#102A43]/40"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-start justify-center min-h-[400px]">
        
        <div className="max-w-2xl space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Start Your Recovery Journey Today
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
            Book an appointment and take the first step towards a healthier you.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <button
              onClick={onBookClick}
              className="px-8 py-4 rounded-md bg-amber-500 text-[#102A43] font-bold text-sm shadow-md hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="px-8 py-4 text-white font-bold text-base flex items-center justify-center gap-2 hover:text-amber-500 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


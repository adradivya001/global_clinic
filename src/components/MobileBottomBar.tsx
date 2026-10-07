import React from 'react';
import { Phone, Calendar, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface MobileBottomBarProps {
  onBookClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-stone-200/90 px-4 py-2.5 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] block md:hidden pb-safe">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${CLINIC_INFO.rawPhone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-200 font-bold text-xs transition-colors cursor-pointer"
        >
          <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
          <span className="truncate">Call Clinic</span>
        </a>

        {/* Book Evaluation Session Button */}
        <button
          onClick={onBookClick}
          className="flex-[1.4] flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-emerald-700/25 active:scale-98 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span className="truncate">Book Evaluation</span>
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { Phone, Calendar, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface MobileBottomBarProps {
  onBookClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF8]/95 backdrop-blur-lg border-t border-[#EAD9B7] px-4 py-2.5 shadow-[0_-8px_24px_rgba(91,61,18,0.08)] block md:hidden pb-safe">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${CLINIC_INFO.rawPhone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3.5 rounded-2xl bg-[#FAF4E8] hover:bg-[#F8EAC9] text-[#24190F] border border-[#EAD9B7] font-bold text-xs transition-colors cursor-pointer"
        >
          <Phone className="w-4 h-4 text-[#B87908] shrink-0" />
          <span className="truncate">Call Clinic</span>
        </a>

        {/* Book Evaluation Session Button */}
        <button
          onClick={onBookClick}
          className="flex-[1.4] flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#B87908] hover:bg-[#966205] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-[#B87908]/25 active:scale-98 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span className="truncate">Book Evaluation</span>
        </button>
      </div>
    </div>
  );
};

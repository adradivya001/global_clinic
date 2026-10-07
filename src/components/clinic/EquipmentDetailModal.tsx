import React, { useEffect } from 'react';
import { 
  X, 
  Phone, 
  Calendar, 
  ShieldCheck, 
  ShieldAlert,
  Footprints,
  Dumbbell,
  RotateCcw,
  Wind,
  Compass,
  SlidersHorizontal,
  Zap,
  Sun,
  Snowflake,
  Crosshair,
  Flame,
  Layers,
  MoveHorizontal,
  Split,
  Activity
} from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';
import type { EquipmentItem } from '../../data/equipmentData';

interface EquipmentDetailModalProps {
  item: EquipmentItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBookClick?: () => void;
}

export const EquipmentDetailModal: React.FC<EquipmentDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  onBookClick
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const renderIcon = (type: string, className = "w-5 h-5") => {
    switch (type) {
      case 'Footprints': return <Footprints className={className} />;
      case 'Dumbbell': return <Dumbbell className={className} />;
      case 'RotateCcw': return <RotateCcw className={className} />;
      case 'Wind': return <Wind className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'SlidersHorizontal': return <SlidersHorizontal className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Sun': return <Sun className={className} />;
      case 'Snowflake': return <Snowflake className={className} />;
      case 'Crosshair': return <Crosshair className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'MoveHorizontal': return <MoveHorizontal className={className} />;
      case 'Split': return <Split className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      default: return <Activity className={className} />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-equipment-title"
    >
      <div 
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden z-10 flex flex-col max-h-[90vh] my-auto">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-stone-100 bg-white sticky top-0 z-20">
          {/* 1. Equipment Category Badge */}
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-stone-900 text-white font-black text-xs">
              #{item.number}
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              {item.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close detail modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Editorial Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-6 sm:py-8 space-y-6">
          
          {/* 2. Equipment Name & 3. Short Description */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                {renderIcon(item.iconType, "w-5 h-5")}
              </div>
              <h2 id="modal-equipment-title" className="text-2xl sm:text-3xl font-black text-stone-900 uppercase tracking-tight">
                {item.name}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-stone-600 font-medium leading-relaxed pl-13">
              {item.shortDescription}
            </p>
          </div>

          {/* 4. Large Equipment Image */}
          <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-bold">
              <span className="bg-stone-900/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Clinical Physiotherapy Setup
              </span>
              <span className="text-emerald-300">1:1 Supervised Session</span>
            </div>
          </div>

          {/* 5. Natural Explanatory Content (Clean Paragraphs, No Q&A Headings, No Cards) */}
          <div className="space-y-4 pt-2 text-stone-700 text-sm sm:text-base leading-relaxed">
            {item.paragraphs.map((para, idx) => (
              <p key={idx} className="font-normal text-stone-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* 6. Subtle Safety Note */}
          <div className="pt-4 border-t border-stone-200">
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200 text-stone-700 flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed italic">
                {item.safetyNote || 'Treatment is selected based on individual assessment and may not be suitable for everyone.'}
              </p>
            </div>
          </div>

        </div>

        {/* 7. Footer CTA Actions */}
        <div className="px-6 sm:px-8 py-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20">
          <a
            href={`tel:${CLINIC_INFO.rawPhone}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            <span>Call: {CLINIC_INFO.phone}</span>
          </a>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 font-bold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onBookClick) onBookClick();
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md shadow-emerald-700/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Evaluation Session</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

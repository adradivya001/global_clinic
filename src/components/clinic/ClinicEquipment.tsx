import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowRight, 
  Phone, 
  X,
  Activity, 
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
  ShieldCheck, 
  Cpu,
  Footprints,
  MoveHorizontal,
  Split
} from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';
import { 
  CLINIC_EQUIPMENT, 
  EQUIPMENT_CATEGORIES, 
  type EquipmentCategory, 
  type EquipmentItem 
} from '../../data/equipmentData';
import { EquipmentDetailModal } from './EquipmentDetailModal';

interface ClinicEquipmentProps {
  onBookClick?: () => void;
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAllButton?: boolean;
}

export const ClinicEquipment: React.FC<ClinicEquipmentProps> = ({ 
  onBookClick,
  title = "Physiotherapy Equipment & Treatment Techniques",
  subtitle = "Modern equipment and evidence-informed treatment techniques to support your recovery, movement, strength, and rehabilitation.",
  limit,
  showViewAllButton = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState<EquipmentCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalItem, setActiveModalItem] = useState<EquipmentItem | null>(null);

  const filteredEquipment = useMemo(() => {
    return CLINIC_EQUIPMENT.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.name.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.paragraphs.some(p => p.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedEquipment = useMemo(() => {
    if (limit && limit > 0 && selectedCategory === 'All' && !searchQuery) {
      return filteredEquipment.slice(0, limit);
    }
    return filteredEquipment;
  }, [filteredEquipment, limit, selectedCategory, searchQuery]);

  const renderIcon = (type: string) => {
    switch (type) {
      case 'Footprints': return <Footprints className="w-4 h-4" />;
      case 'Dumbbell': return <Dumbbell className="w-4 h-4" />;
      case 'RotateCcw': return <RotateCcw className="w-4 h-4" />;
      case 'Wind': return <Wind className="w-4 h-4" />;
      case 'Compass': return <Compass className="w-4 h-4" />;
      case 'SlidersHorizontal': return <SlidersHorizontal className="w-4 h-4" />;
      case 'Zap': return <Zap className="w-4 h-4" />;
      case 'Sun': return <Sun className="w-4 h-4" />;
      case 'Snowflake': return <Snowflake className="w-4 h-4" />;
      case 'Crosshair': return <Crosshair className="w-4 h-4" />;
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'MoveHorizontal': return <MoveHorizontal className="w-4 h-4" />;
      case 'Split': return <Split className="w-4 h-4" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Rehabilitation Equipment':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Exercise & Strength':
        return 'bg-orange-50 text-orange-800 border-orange-200';
      case 'Pain & Comfort':
        return 'bg-teal-50 text-teal-800 border-teal-200';
      case 'Supportive Techniques':
        return 'bg-stone-100 text-stone-800 border-stone-300';
      default:
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
    }
  };

  return (
    <section id="clinic-equipment" className="py-20 lg:py-28 bg-[#FBFBFA] relative overflow-hidden font-sans border-t border-stone-200/80 scroll-mt-20">
      {/* Subtle Ambient Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-xs border border-emerald-200">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>CLINICAL TECHNOLOGY & MODALITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15] mb-4">
            {title}
          </h2>

          <p className="text-stone-800 text-base sm:text-lg leading-relaxed font-semibold mb-3">
            {subtitle}
          </p>

          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal max-w-2xl mx-auto">
            Our clinic combines guided exercise, rehabilitation equipment, and selected treatment techniques based on each patient's individual needs. Your physiotherapist chooses the most appropriate approach after assessing your condition, movement, strength, and treatment goals.
          </p>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-stone-200/80 max-w-2xl mx-auto">
            <div className="bg-white p-3 rounded-xl border border-stone-200/80 shadow-2xs text-center">
              <span className="block text-2xl font-black text-stone-900">18</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Modalities</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200/80 shadow-2xs text-center">
              <span className="block text-2xl font-black text-orange-700">100%</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Supervised</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200/80 shadow-2xs text-center">
              <span className="block text-2xl font-black text-emerald-700">4</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Categories</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200/80 shadow-2xs text-center">
              <span className="block text-2xl font-black text-stone-900">1:1</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Personalized</span>
            </div>
          </div>
        </div>

        {/* Filters & Search Control Bar */}
        <div className="space-y-4 mb-10">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {EQUIPMENT_CATEGORIES.map((cat) => {
              const count = cat === 'All' 
                ? CLINIC_EQUIPMENT.length 
                : CLINIC_EQUIPMENT.filter(m => m.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 shadow-md shadow-stone-900/20 scale-102'
                      : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300 hover:text-stone-900 shadow-2xs'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                    isActive ? 'bg-emerald-600 text-white' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search equipment or technique (e.g. Treadmill, CPM, Cupping, Traction)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5"
                aria-label="Clear Search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Equipment Grid (Desktop: 3 / Tablet: 2 / Mobile: 1) */}
        {filteredEquipment.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 max-w-lg mx-auto shadow-sm">
            <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-1">No equipment found</h3>
            <p className="text-xs text-stone-500 mb-4">No item matches "{searchQuery}". Try selecting "All" or a different category.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-bold hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayedEquipment.map((item) => {
                const badgeStyle = getCategoryBadgeClass(item.category);

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveModalItem(item)}
                    className="bg-white rounded-3xl border border-stone-200/90 shadow-[0_4px_20px_rgba(24,24,27,0.03)] hover:shadow-[0_16px_36px_rgba(24,24,27,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
                  >
                    {/* Top Image Banner with Hover Zoom */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
                      
                      {/* Top overlay badges */}
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                        <span className="text-xs font-black tracking-widest text-white bg-stone-900/85 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/20 shadow-xs">
                          #{item.number}
                        </span>
                      </div>

                      <div className="absolute top-3.5 right-3.5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-xs border ${badgeStyle}`}>
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Hierarchy */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        {/* Small Category Label & Icon */}
                        <div className="flex items-center gap-2 mb-2 text-stone-500">
                          <div className="w-6 h-6 rounded-md bg-stone-100 flex items-center justify-center text-stone-700">
                            {renderIcon(item.iconType)}
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800">
                            {item.category}
                          </span>
                        </div>

                        {/* Equipment Name */}
                        <h3 className="text-xl font-black text-stone-900 group-hover:text-emerald-700 transition-colors tracking-tight leading-snug mb-2">
                          {item.name}
                        </h3>

                        {/* Short Description */}
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                          {item.shortDescription}
                        </p>
                      </div>

                      {/* Explore Action Button */}
                      <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                        <span className="tracking-wide">Explore</span>
                        <div className="w-7 h-7 rounded-full bg-emerald-50 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center transition-all duration-200">
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Optional View All Button on Home */}
            {showViewAllButton && (
              <div className="text-center pt-2">
                <Link
                  to="/treatments"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-stone-900 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer group"
                >
                  <span>Explore All 18 Clinical Modalities &amp; Machines</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Bottom Verification Note & Doctor Supervision Tag */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50/70 via-white to-stone-50 border border-stone-200/90 text-stone-900 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-stone-200/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-800 text-white flex items-center justify-center shrink-0 font-bold shadow-md shadow-emerald-700/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black leading-snug text-stone-900">
                Prescribed & Calibrated by Dr. K. Bhavendra PT
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
                No machine is applied in isolation. Equipment parameters, resistance loads, and treatment durations are personalized after rigorous physical evaluation at {CLINIC_INFO.name}.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="flex-1 md:flex-none px-4 py-3 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-900 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onBookClick}
              className="flex-1 md:flex-none px-5 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-700/20 cursor-pointer"
            >
              <span>Consult Doctor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Dedicated Detail Modal */}
      <EquipmentDetailModal
        item={activeModalItem}
        isOpen={Boolean(activeModalItem)}
        onClose={() => setActiveModalItem(null)}
        onBookClick={onBookClick}
      />
    </section>
  );
};

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
        return 'bg-[#FAF4E8] text-[#B87908] border-[#EAD9B7]';
      case 'Exercise & Strength':
        return 'bg-[#FAF4E8] text-[#B87908] border-[#EAD9B7]';
      case 'Pain & Comfort':
        return 'bg-[#FAF4E8] text-[#B87908] border-[#EAD9B7]';
      case 'Supportive Techniques':
        return 'bg-[#FAF4E8] text-[#B87908] border-[#EAD9B7]';
      default:
        return 'bg-[#FAF4E8] text-[#B87908] border-[#EAD9B7]';
    }
  };

  return (
    <section id="clinic-equipment" className="py-20 lg:py-28 bg-[#FFFDF8] relative overflow-hidden font-sans border-t border-[#EAD9B7]/60 scroll-mt-20">
      {/* Subtle Ambient Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F8EAC9]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FAF4E8]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8EAC9] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-xs border border-[#EAD9B7]">
            <Cpu className="w-3.5 h-3.5 text-[#B87908]" />
            <span>CLINICAL TECHNOLOGY & MODALITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.15] mb-4">
            {title}
          </h2>

          <p className="text-[#24190F] text-base sm:text-lg leading-relaxed font-semibold mb-3">
            {subtitle}
          </p>

          <p className="text-[#65594B] text-xs sm:text-sm leading-relaxed font-normal max-w-2xl mx-auto">
            Our clinic combines guided exercise, rehabilitation equipment, and selected treatment techniques based on each patient's individual needs. Your physiotherapist chooses the most appropriate approach after assessing your condition, movement, strength, and treatment goals.
          </p>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-[#EAD9B7]/80 max-w-2xl mx-auto">
            <div className="bg-white p-3 rounded-xl border border-[#EAD9B7] shadow-xs text-center">
              <span className="block text-2xl font-serif font-bold text-[#24190F]">18</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#65594B]">Modalities</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#EAD9B7] shadow-xs text-center">
              <span className="block text-2xl font-serif font-bold text-[#B87908]">100%</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#65594B]">Supervised</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#EAD9B7] shadow-xs text-center">
              <span className="block text-2xl font-serif font-bold text-[#B87908]">4</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#65594B]">Categories</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#EAD9B7] shadow-xs text-center">
              <span className="block text-2xl font-serif font-bold text-[#24190F]">1:1</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#65594B]">Personalized</span>
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
                      ? 'bg-[#B87908] text-white border-[#B87908] shadow-md shadow-[#B87908]/20 scale-102'
                      : 'bg-white text-[#65594B] border-[#EAD9B7] hover:border-[#B87908] hover:text-[#24190F] shadow-xs'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-[#D99B24] text-white' : 'bg-[#FAF4E8] text-[#65594B]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#65594B]/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search equipment or technique (e.g. Treadmill, CPM, Cupping, Traction)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-[#EAD9B7] rounded-xl text-xs sm:text-sm text-[#24190F] placeholder:text-[#65594B]/60 focus:outline-none focus:ring-2 focus:ring-[#B87908]/30 focus:border-[#B87908] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#65594B] hover:text-[#24190F] p-0.5"
                aria-label="Clear Search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Equipment Grid */}
        {filteredEquipment.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#EAD9B7] max-w-lg mx-auto shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#FAF4E8] text-[#B87908] flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#24190F] mb-1">No equipment found</h3>
            <p className="text-xs text-[#65594B] mb-4">No item matches "{searchQuery}". Try selecting "All" or a different category.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#B87908] text-white rounded-lg text-xs font-bold hover:bg-[#a06806] transition-colors cursor-pointer"
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
                    className="bg-white rounded-3xl border border-[#EAD9B7] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
                  >
                    {/* Top Image Banner */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#FAF4E8]">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
                      
                      {/* Top overlay badges */}
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                        <span className="text-xs font-serif font-bold tracking-widest text-white bg-[#24190F]/85 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/20 shadow-xs">
                          #{item.number}
                        </span>
                      </div>

                      <div className="absolute top-3.5 right-3.5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-xs border ${badgeStyle}`}>
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Hierarchy */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        {/* Small Category Label & Icon */}
                        <div className="flex items-center gap-2 mb-2 text-[#65594B]">
                          <div className="w-6 h-6 rounded-md bg-[#FAF4E8] flex items-center justify-center text-[#B87908]">
                            {renderIcon(item.iconType)}
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B87908]">
                            {item.category}
                          </span>
                        </div>

                        {/* Equipment Name */}
                        <h3 className="text-xl font-serif font-bold text-[#24190F] group-hover:text-[#B87908] transition-colors tracking-tight leading-snug mb-2">
                          {item.name}
                        </h3>

                        {/* Short Description */}
                        <p className="text-xs sm:text-sm text-[#65594B] leading-relaxed line-clamp-3">
                          {item.shortDescription}
                        </p>
                      </div>

                      {/* Explore Action Button */}
                      <div className="pt-3 border-t border-[#EAD9B7]/60 flex items-center justify-between text-xs font-bold text-[#B87908] group-hover:text-[#a06806]">
                        <span className="tracking-wide">Explore</span>
                        <div className="w-7 h-7 rounded-full bg-[#F8EAC9] group-hover:bg-[#B87908] group-hover:text-white flex items-center justify-center transition-all duration-200">
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
                  to="/services"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#B87908] hover:bg-[#a06806] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer group"
                >
                  <span>Explore All Clinical Services &amp; Modalities</span>
                  <ArrowRight className="w-4 h-4 text-[#F8EAC9] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Bottom Verification Note & Doctor Supervision Tag */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FAF4E8] via-white to-[#F8EAC9]/40 border border-[#EAD9B7] text-[#24190F] flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-[#B87908]/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#B87908] to-[#D99B24] text-white flex items-center justify-center shrink-0 font-bold shadow-md shadow-[#B87908]/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif font-bold leading-snug text-[#24190F]">
                Prescribed & Calibrated by Dr. K. Bhavendra PT
              </h4>
              <p className="text-xs sm:text-sm text-[#65594B] mt-1 max-w-2xl leading-relaxed">
                No machine is applied in isolation. Equipment parameters, resistance loads, and treatment durations are personalized after rigorous physical evaluation at {CLINIC_INFO.name}.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="flex-1 md:flex-none px-4 py-3 rounded-2xl bg-white hover:bg-[#FAF4E8] border border-[#EAD9B7] text-[#24190F] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#B87908]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onBookClick}
              className="flex-1 md:flex-none px-5 py-3 rounded-2xl bg-[#B87908] hover:bg-[#a06806] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-[#B87908]/20 cursor-pointer"
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

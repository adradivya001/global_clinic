import React, { useState, useMemo } from 'react';
import { Search, Sparkles, ChevronRight, Activity, Calendar, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ORTHOPEDIC_CONDITIONS_DATA, type OrthopedicConditionItem } from '../../data/orthopedicConditionsData';

interface OrthopedicConditionsCardsProps {
  onBookClick: () => void;
}

export const OrthopedicConditionsCards: React.FC<OrthopedicConditionsCardsProps> = ({ onBookClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    'All',
    'Spine & Back',
    'Upper Body',
    'Lower Body',
    'Joints & Mobility',
    'Injuries & Recovery',
    'Surgical & Fractures'
  ];

  const filteredConditions = useMemo(() => {
    return ORTHOPEDIC_CONDITIONS_DATA.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.bodyArea === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.understanding.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.bodyArea.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="orthopedic-conditions-cards" className="py-12 sm:py-16 bg-[#FAF8F5] relative overflow-hidden font-sans border-t border-stone-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>23 ORTHOPEDIC &amp; MUSCULOSKELETAL CONDITIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15]">
            Simple, Clear Answers for Your Recovery
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Understand your condition without complicated medical jargon. Explore what the problem is, how our clinical physiotherapists help, and what to expect at every recovery milestone.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-stone-200/90 shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? ORTHOPEDIC_CONDITIONS_DATA.length 
                : ORTHOPEDIC_CONDITIONS_DATA.filter(c => c.bodyArea === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-[1.02]'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/80'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-emerald-800 text-emerald-100' : 'bg-stone-200 text-stone-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search knee, back, shoulder, sprain..."
              className="w-full pl-9.5 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 text-xs sm:text-sm font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* 23 Conditions Grid */}
        {filteredConditions.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
            <Activity className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-900 mb-1">No conditions match your search</h3>
            <p className="text-xs text-stone-500 mb-4">Try searching for a different keyword or reset filters.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {filteredConditions.map((item: OrthopedicConditionItem) => {
              const isExpanded = expandedId === item.id;

              return (
                <article
                  key={item.id}
                  className="bg-white rounded-3xl border border-stone-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden shadow-sm group"
                >
                  {/* Card Header */}
                  <div className="p-6 sm:p-7 border-b border-stone-100 bg-gradient-to-r from-stone-50/80 via-white to-stone-50/50">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-900 font-black text-xs flex items-center justify-center border border-emerald-200 shadow-xs">
                          {item.number}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                          {item.bodyArea}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-stone-500 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Clinical Care</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight group-hover:text-emerald-800 transition-colors uppercase">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-orange-700 mt-1 leading-snug">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Card Body with Conversational Sections */}
                  <div className="p-6 sm:p-7 space-y-5 flex-1">
                    {/* 1. Understanding the problem */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-orange-600" />
                        <h4 className="text-xs font-black uppercase tracking-wider text-stone-900">
                          Understanding the problem
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-4 border-l-2 border-orange-200">
                        {item.understanding}
                      </p>
                    </div>

                    {/* 2. How we help */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        <h4 className="text-xs font-black uppercase tracking-wider text-emerald-900">
                          How we help
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pl-4 border-l-2 border-emerald-300 bg-emerald-50/40 p-3 rounded-r-xl">
                        {item.howWeHelp}
                      </p>
                    </div>

                    {/* 3. Your recovery / Goal */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-stone-800" />
                        <h4 className="text-xs font-black uppercase tracking-wider text-stone-900">
                          Your recovery &amp; goal
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-4 border-l-2 border-stone-300">
                        {item.yourRecovery}
                      </p>
                    </div>

                    {/* 4. What you can expect: Lifecycle Flow Chain */}
                    <div className="pt-4 border-t border-stone-100">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">
                          What you can expect:
                        </span>
                        <span className="text-[10px] font-bold text-emerald-700">
                          Step-by-Step Flow
                        </span>
                      </div>

                      {/* Flow Chain Badges */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        {item.flowSteps.map((step, sIdx) => {
                          const isLast = sIdx === item.flowSteps.length - 1;
                          return (
                            <React.Fragment key={sIdx}>
                              <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-tight ${
                                isLast
                                  ? 'bg-emerald-700 text-white shadow-xs'
                                  : 'bg-stone-100 text-stone-800 border border-stone-200'
                              }`}>
                                {step}
                              </span>
                              {!isLast && (
                                <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
                              )}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-[11px] font-semibold">Individualized Program</span>
                    </div>

                    <button
                      onClick={onBookClick}
                      className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 shadow-sm cursor-pointer group-hover:bg-emerald-700"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Bottom Doctor Consultation Note */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-black text-stone-900 uppercase">
              Not sure which condition matches your symptoms?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Undergo a comprehensive clinical movement assessment with Dr. K. Bhavendra PT at our Anantapur clinic.
            </p>
          </div>

          <button
            onClick={onBookClick}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-emerald-700/20 hover:shadow-emerald-700/35 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Book Physical Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

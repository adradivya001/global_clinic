import React, { useState, useMemo } from 'react';
import { Search, Sparkles, ChevronRight, Activity, Calendar, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ORTHOPEDIC_CONDITIONS_DATA, type OrthopedicConditionItem } from '../../data/orthopedicConditionsData';

interface OrthopedicConditionsCardsProps {
  onBookClick: () => void;
}

export const OrthopedicConditionsCards: React.FC<OrthopedicConditionsCardsProps> = ({ onBookClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

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
    <section id="orthopedic-conditions-cards" className="py-12 sm:py-16 bg-[#FAF4E8] relative overflow-hidden font-sans border-t border-[#EAD9B7]/60">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8EAC9] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
            <span>23 ORTHOPEDIC &amp; MUSCULOSKELETAL CONDITIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.15]">
            Simple, Clear Answers for Your Recovery
          </h2>

          <p className="text-[#65594B] text-sm sm:text-base leading-relaxed">
            Understand your condition without complicated medical jargon. Explore what the problem is, how our clinical physiotherapists help, and what to expect at every recovery milestone.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-[#EAD9B7] shadow-xs">
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
                      ? 'bg-[#B87908] text-white shadow-md shadow-[#B87908]/20 scale-[1.02]'
                      : 'bg-[#FAF4E8] hover:bg-[#F8EAC9] text-[#24190F] border border-[#EAD9B7]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-[#D99B24] text-white' : 'bg-white text-[#65594B]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-[#65594B]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search knee, back, shoulder, sprain..."
              className="w-full pl-9.5 pr-4 py-2.5 rounded-xl bg-[#FAF4E8] border border-[#EAD9B7] text-[#24190F] placeholder-[#65594B]/60 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#B87908] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* 23 Conditions Grid */}
        {filteredConditions.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EAD9B7] p-8">
            <Activity className="w-10 h-10 text-[#B87908] mx-auto mb-3" />
            <h3 className="text-lg font-serif font-bold text-[#24190F] mb-1">No conditions match your search</h3>
            <p className="text-xs text-[#65594B] mb-4">Try searching for a different keyword or reset filters.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#B87908] text-white rounded-xl text-xs font-bold hover:bg-[#a06806] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {filteredConditions.map((item: OrthopedicConditionItem) => {
              return (
                <article
                  key={item.id}
                  className="bg-white rounded-3xl border border-[#EAD9B7] hover:border-[#B87908] transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden shadow-sm group"
                >
                  {/* Card Header */}
                  <div className="p-6 sm:p-7 border-b border-[#EAD9B7]/60 bg-gradient-to-r from-[#FAF4E8] via-white to-[#FAF4E8]">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-xl bg-[#F8EAC9] text-[#B87908] font-serif font-bold text-xs flex items-center justify-center border border-[#EAD9B7] shadow-xs">
                          {item.number}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#B87908] bg-[#F8EAC9] px-2.5 py-1 rounded-lg border border-[#EAD9B7]">
                          {item.bodyArea}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-[#65594B] flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#B87908]" />
                        <span>Clinical Care</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#24190F] tracking-tight group-hover:text-[#B87908] transition-colors uppercase">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-[#B87908] mt-1 leading-snug">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Card Body with Conversational Sections */}
                  <div className="p-6 sm:p-7 space-y-5 flex-1">
                    {/* 1. Understanding the problem */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#B87908]" />
                        <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#24190F]">
                          Understanding the problem
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#65594B] leading-relaxed pl-4 border-l-2 border-[#EAD9B7]">
                        {item.understanding}
                      </p>
                    </div>

                    {/* 2. How we help */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#B87908]" />
                        <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#24190F]">
                          How we help
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#24190F] leading-relaxed pl-4 border-l-2 border-[#B87908] bg-[#FAF4E8]/60 p-3 rounded-r-xl">
                        {item.howWeHelp}
                      </p>
                    </div>

                    {/* 3. Your recovery / Goal */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#24190F]" />
                        <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#24190F]">
                          Your recovery &amp; goal
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#65594B] leading-relaxed pl-4 border-l-2 border-[#EAD9B7]">
                        {item.yourRecovery}
                      </p>
                    </div>

                    {/* 4. What you can expect: Lifecycle Flow Chain */}
                    <div className="pt-4 border-t border-[#EAD9B7]/60">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#65594B]">
                          What you can expect:
                        </span>
                        <span className="text-[10px] font-bold text-[#B87908]">
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
                                  ? 'bg-[#B87908] text-white shadow-xs'
                                  : 'bg-[#FAF4E8] text-[#24190F] border border-[#EAD9B7]'
                              }`}>
                                {step}
                              </span>
                              {!isLast && (
                                <ChevronRight className="w-3 h-3 text-[#65594B]/40 shrink-0" />
                              )}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-4 sm:p-5 bg-[#FAF4E8] border-t border-[#EAD9B7]/60 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#65594B]">
                      <CheckCircle2 className="w-4 h-4 text-[#B87908] shrink-0" />
                      <span className="text-[11px] font-semibold">Individualized Program</span>
                    </div>

                    <button
                      onClick={onBookClick}
                      className="px-4 py-2 rounded-xl bg-[#B87908] hover:bg-[#a06806] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 shadow-sm cursor-pointer"
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
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EAD9B7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#24190F] uppercase">
              Not sure which condition matches your symptoms?
            </h3>
            <p className="text-xs sm:text-sm text-[#65594B]">
              Undergo a comprehensive clinical movement assessment with Dr. K. Bhavendra PT at our Anantapur clinic.
            </p>
          </div>

          <button
            onClick={onBookClick}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:from-[#a06806] hover:to-[#c48a1d] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#B87908]/20 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Book Physical Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};


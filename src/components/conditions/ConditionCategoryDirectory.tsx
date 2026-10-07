import React, { useState, useMemo } from 'react';
import { ArrowRight, Search, Sparkles, Activity } from 'lucide-react';
import type { SubConditionItem } from '../../data/conditionsData';

interface ConditionCategoryDirectoryProps {
  conditions: SubConditionItem[];
  categoryTitle: string;
  categorySubtitle?: string;
  onSelectCondition: (conditionId: string) => void;
}

export const ConditionCategoryDirectory: React.FC<ConditionCategoryDirectoryProps> = ({
  conditions,
  categoryTitle,
  categorySubtitle,
  onSelectCondition
}) => {
  const [selectedBodyArea, setSelectedBodyArea] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isSports = categoryTitle.toLowerCase().includes('sport');
  const isRehab = categoryTitle.toLowerCase().includes('rehab');
  const termSingular = isSports ? 'Injury' : isRehab ? 'Program' : 'Condition';
  const termPlural = isSports ? 'Injuries' : isRehab ? 'Programs' : 'Conditions';
  const directoryLabel = isSports 
    ? 'SPORTS INJURY DIRECTORY' 
    : isRehab 
    ? 'REHABILITATION PROGRAM DIRECTORY' 
    : 'CONDITION DIRECTORY';

  const bodyAreas = useMemo(() => {
    const areas = Array.from(new Set(conditions.map((c) => c.bodyArea)));
    return ['All', ...areas];
  }, [conditions]);

  const filteredConditions = useMemo(() => {
    return conditions.filter((c) => {
      const matchArea = selectedBodyArea === 'All' || c.bodyArea === selectedBodyArea;
      const matchSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.bodyArea.toLowerCase().includes(searchQuery.toLowerCase());
      return matchArea && matchSearch;
    });
  }, [conditions, selectedBodyArea, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Category Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>{directoryLabel} ({conditions.length} {termPlural.toUpperCase()})</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">
          Explore Specific {termPlural}
        </h2>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {categorySubtitle || `Select your specific rehabilitation focus or ${termSingular.toLowerCase()} to review detailed clinical explanations, treatment methods, and expected recovery milestones.`}
        </p>
      </div>

      {/* Special Compact Workflow Section for Neuro Rehabilitation */}
      {isRehab && (
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-100">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-800 block">
                OUR METHODOLOGY
              </span>
              <h3 className="text-lg sm:text-xl font-black text-stone-900 uppercase">
                How We Work With You
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-50 border border-stone-200 px-3 py-1 rounded-full w-fit">
              <span>Goal-Driven Progress</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {[
              { step: '01', title: 'ASSESS', desc: 'We understand your current movement, strength, balance, walking, and daily challenges.' },
              { step: '02', title: 'PLAN', desc: 'We create a rehabilitation program based on your abilities and personal goals.' },
              { step: '03', title: 'RETRAIN', desc: 'We practice movements repeatedly to help your body improve control and coordination.' },
              { step: '04', title: 'PROGRESS', desc: 'Exercises are gradually made more challenging as strength, balance, and movement improve.' },
              { step: '05', title: 'REGAIN INDEPENDENCE', desc: 'We focus on movements and activities that matter most in your everyday life.' }
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-black flex items-center justify-center">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">PHASE {item.step}</span>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-stone-900 mb-1">{item.title}</h4>
                  <p className="text-[11px] text-stone-600 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Connected Continuum Flow */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] font-bold text-stone-700 bg-stone-50 border border-stone-200 p-3 rounded-2xl">
            <span className="text-emerald-800 uppercase tracking-wider text-[10px]">OUR APPROACH:</span>
            <span>ASSESS</span>
            <span className="text-stone-400">→</span>
            <span>MOVE</span>
            <span className="text-stone-400">→</span>
            <span>STRENGTHEN</span>
            <span className="text-stone-400">→</span>
            <span>PRACTICE</span>
            <span className="text-stone-400">→</span>
            <span>PROGRESS</span>
            <span className="text-stone-400">→</span>
            <span className="text-emerald-800 font-black">INDEPENDENCE</span>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-stone-200 shadow-xs">
        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {bodyAreas.map((area) => {
            const count = area === 'All' ? conditions.length : conditions.filter(c => c.bodyArea === area).length;
            const isActive = selectedBodyArea === area;
            return (
              <button
                key={area}
                onClick={() => setSelectedBodyArea(area)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
                }`}
              >
                <span>{area}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-emerald-800 text-emerald-100' : 'bg-stone-200 text-stone-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${termSingular.toLowerCase()} or goal...`}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 text-xs font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* 3-Column Responsive Grid for Level 2 Subcategory Cards */}
      {filteredConditions.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
          <Activity className="w-10 h-10 text-stone-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-stone-900 mb-1">No {termPlural.toLowerCase()} match your search</h3>
          <p className="text-xs text-stone-500 mb-4">Try searching with different keywords or reset filters.</p>
          <button
            onClick={() => { setSelectedBodyArea('All'); setSearchQuery(''); }}
            className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((condition) => (
            <div
              key={condition.id}
              onClick={() => onSelectCondition(condition.id)}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group shadow-sm"
            >
              {/* Card Image with Badges */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
                <img
                  src={condition.image}
                  alt={condition.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/75 via-stone-900/20 to-transparent" />
                
                <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-white/95 text-stone-900 font-black text-[11px] flex items-center justify-center shadow-xs">
                    {condition.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-stone-900/80 backdrop-blur-md text-emerald-300 text-[10px] font-bold uppercase tracking-wider border border-white/10">
                    {condition.bodyArea}
                  </span>
                  {condition.isPriority && (
                    <span className="px-2 py-0.5 rounded-md bg-amber-600/90 backdrop-blur-md text-amber-50 text-[10px] font-bold uppercase tracking-wider border border-white/20 shadow-xs">
                      Common Focus
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight group-hover:text-emerald-300 transition-colors drop-shadow-sm">
                    {condition.name}
                  </h3>
                </div>
              </div>

              {/* Card Content (One-line patient friendly description) */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                  {condition.shortDescription}
                </p>

                {/* Explore Action */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-emerald-700">
                  <span className="uppercase tracking-wider text-[11px]">Explore {termSingular} →</span>
                  <div className="w-7 h-7 rounded-xl bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


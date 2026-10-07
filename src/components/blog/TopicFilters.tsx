import React from 'react';
import { BLOG_TOPICS, type BlogTopic } from '../../data/blogData';

interface TopicFiltersProps {
  selectedTopic: BlogTopic;
  onSelectTopic: (topic: BlogTopic) => void;
}

export const TopicFilters: React.FC<TopicFiltersProps> = ({ selectedTopic, onSelectTopic }) => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase block mb-1">
            CATEGORIES
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Explore By Topic
          </h3>
        </div>
      </div>

      {/* Horizontally scrollable pill filters on mobile, wrap on desktop */}
      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
        {BLOG_TOPICS.map((topic) => {
          const isSelected = selectedTopic === topic;
          return (
            <button
              key={topic}
              onClick={() => onSelectTopic(topic)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                isSelected
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-105 border border-emerald-700'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-emerald-300 hover:text-emerald-800 hover:bg-emerald-50/40'
              }`}
            >
              {topic}
            </button>
          );
        })}
      </div>
    </div>
  );
};

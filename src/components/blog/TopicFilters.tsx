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
          <span className="text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase block mb-1">
            CATEGORIES
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#24190F] tracking-tight">
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
                  ? 'bg-[#B87908] text-white shadow-md shadow-[#B87908]/20 scale-105 border border-[#B87908]'
                  : 'bg-white text-[#65594B] border border-[#EAD9B7] hover:border-[#D99B24] hover:text-[#B87908] hover:bg-[#FAF4E8]'
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

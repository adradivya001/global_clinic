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
          <span className="text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase block mb-1">
            CATEGORIES
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#07182D] tracking-tight">
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
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                isSelected
                  ? 'bg-[#08213D] text-white shadow-md shadow-[#08213D]/20 scale-105 border border-[#08213D]'
                  : 'bg-white text-[#526A84] border border-[#08213D]/8 hover:border-[#086B9F] hover:text-[#086B9F] hover:bg-[#F7FAFD]'
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

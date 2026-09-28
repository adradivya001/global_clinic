import React from 'react';
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { FEATURED_ARTICLE } from '../../data/blogData';

interface FeaturedArticleProps {
  onSelectArticle?: (slug: string) => void;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ onSelectArticle }) => {
  const article = FEATURED_ARTICLE;

  return (
    <section className="py-14 lg:py-20 bg-white relative overflow-hidden font-sans border-b border-[#08213D]/6">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[2px] bg-[#F5B400]" />
            <span className="text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase">
              EDITORIAL SPOTLIGHT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07182D] tracking-tight leading-[1.15]">
            Featured Insight
          </h2>
        </div>

        {/* Large Editorial Featured Article Card */}
        <div className="bg-[#F7FAFD] rounded-3xl overflow-hidden border border-[#08213D]/8 shadow-[0_10px_35px_rgba(8,33,61,0.04)] hover:shadow-xl hover:border-[#168DD0]/30 transition-all duration-500 group grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: Big Image (6 cols) */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] overflow-hidden bg-slate-900">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041326]/70 via-transparent to-transparent pointer-events-none" />

            {/* Badge on Image */}
            <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Topic
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Details (6 cols) */}
          <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Category and Metadata */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-md bg-[#EAF4FC] text-[#086B9F] font-extrabold text-xs tracking-wider uppercase">
                  {article.category}
                </span>

                <div className="flex items-center gap-4 text-xs font-semibold text-[#7890A8]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readingTime}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#07182D] leading-[1.25] tracking-tight group-hover:text-[#086B9F] transition-colors mb-4">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-[#526A84] text-sm sm:text-base leading-relaxed mb-6">
                {article.description}
              </p>

              {/* Supplemental Insight Snippet */}
              {article.contentSnippet && (
                <div className="p-4 rounded-xl bg-white border border-[#08213D]/6 text-xs sm:text-sm text-[#526A84] leading-relaxed mb-8 italic">
                  "{article.contentSnippet}"
                </div>
              )}
            </div>

            {/* Read Article Action */}
            <div className="pt-6 border-t border-[#08213D]/6 flex items-center justify-between">
              <span className="text-xs font-bold text-[#7890A8] uppercase tracking-wider">
                Topic: {article.topic}
              </span>

              <button
                onClick={() => onSelectArticle && onSelectArticle(article.slug)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#08213D] group-hover:bg-[#086B9F] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

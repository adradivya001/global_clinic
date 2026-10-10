import React from 'react';
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { FEATURED_ARTICLE } from '../../data/blogData';

interface FeaturedArticleProps {
  onSelectArticle?: (slug: string) => void;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ onSelectArticle }) => {
  const article = FEATURED_ARTICLE;

  return (
    <section className="py-14 lg:py-20 bg-white relative overflow-hidden font-sans border-b border-[#EAD9B7]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-3 shadow-xs">
            <span>EDITORIAL SPOTLIGHT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.15]">
            Featured Clinical Insight
          </h2>
        </div>

        {/* Large Editorial Featured Article Card */}
        <div className="bg-[#FAF4E8] rounded-3xl overflow-hidden border border-[#EAD9B7] shadow-lg hover:shadow-2xl hover:border-[#D99B24] transition-all duration-500 group grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: Big Image (6 cols) */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] overflow-hidden bg-[#24190F]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#24190F]/80 via-transparent to-transparent pointer-events-none" />

            {/* Badge on Image */}
            <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#24190F]/80 backdrop-blur-md border border-white/20 text-[#D99B24] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
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
                <span className="px-3 py-1 rounded-lg bg-[#FAF4E8] text-[#B87908] font-black text-xs tracking-wider uppercase border border-[#EAD9B7]">
                  {article.category}
                </span>

                <div className="flex items-center gap-4 text-xs font-semibold text-[#65594B]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#B87908]" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#B87908]" />
                    {article.readingTime}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#24190F] leading-[1.25] tracking-tight group-hover:text-[#B87908] transition-colors mb-4">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-[#65594B] text-sm sm:text-base leading-relaxed mb-6">
                {article.description}
              </p>

              {/* Supplemental Insight Snippet */}
              {article.contentSnippet && (
                <div className="p-4 rounded-2xl bg-white border border-[#EAD9B7] text-xs sm:text-sm text-[#24190F] leading-relaxed mb-8 italic shadow-xs">
                  "{article.contentSnippet}"
                </div>
              )}
            </div>

            {/* Read Article Action */}
            <div className="pt-6 border-t border-[#EAD9B7] flex items-center justify-between">
              <span className="text-xs font-bold text-[#65594B]/70 uppercase tracking-wider">
                Topic: {article.topic}
              </span>

              <button
                onClick={() => onSelectArticle && onSelectArticle(article.slug)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

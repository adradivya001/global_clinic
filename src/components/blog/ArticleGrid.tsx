import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { BLOG_ARTICLES, type BlogTopic } from '../../data/blogData';
import { TopicFilters } from './TopicFilters';

interface ArticleGridProps {
  onSelectArticle?: (slug: string) => void;
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({ onSelectArticle }) => {
  const [selectedTopic, setSelectedTopic] = useState<BlogTopic>('All');

  const filteredArticles =
    selectedTopic === 'All'
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((article) => article.topic === selectedTopic);

  return (
    <section id="latest-articles" className="py-16 lg:py-24 bg-[#F7FAFD] relative overflow-hidden font-sans scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#086B9F]" />
            <span>KNOWLEDGE HUB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-3">
            Latest Articles
          </h2>

          <p className="text-[#526A84] text-base leading-relaxed">
            Clear, evidence-backed guides to help you understand movement, prevention, and rehabilitation.
          </p>
        </div>

        {/* Section 04: Topic Filters */}
        <TopicFilters
          selectedTopic={selectedTopic}
          onSelectTopic={(topic) => setSelectedTopic(topic)}
        />

        {/* 6 Article Cards Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle && onSelectArticle(article.slug)}
                className="bg-white rounded-3xl overflow-hidden border border-[#08213D]/8 shadow-[0_4px_20px_rgba(8,33,61,0.03)] hover:shadow-xl hover:border-[#168DD0]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top Image Container with Subtle Zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041326]/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Category Label Pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white font-bold text-[11px] uppercase tracking-wider group-hover:text-amber-300 transition-colors">
                        {article.category}
                      </span>
                    </div>

                    {/* Subtle Gold Accent Top Line on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F5B400] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    {/* Metadata Row */}
                    <div className="flex items-center gap-3 text-xs font-semibold text-[#7890A8] mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readingTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-[#07182D] leading-snug tracking-tight mb-3 group-hover:text-[#086B9F] transition-colors">
                      {article.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-[#526A84] text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Read More Row */}
                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-[#08213D]/5 flex items-center justify-between text-xs font-bold text-[#086B9F] group-hover:text-amber-500 transition-colors">
                  <span className="uppercase tracking-wider">Read Full Insight</span>
                  <div className="w-7 h-7 rounded-full bg-[#EAF4FC] group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#08213D]/8">
            <p className="text-[#526A84] font-medium text-sm">
              No articles currently listed for this category.
            </p>
            <button
              onClick={() => setSelectedTopic('All')}
              className="mt-4 px-5 py-2 rounded-xl bg-[#EAF4FC] text-[#086B9F] font-bold text-xs hover:bg-[#086B9F] hover:text-white transition-all cursor-pointer"
            >
              View All Topics
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

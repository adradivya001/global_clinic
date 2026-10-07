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
    <section id="latest-articles" className="py-16 lg:py-24 bg-[#F4F7F4] relative overflow-hidden font-sans scroll-mt-20 border-t border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-3 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>KNOWLEDGE HUB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15] mb-3">
            Latest Clinical Articles
          </h2>

          <p className="text-stone-600 text-base leading-relaxed">
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
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top Image Container with Subtle Zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Category Label Pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 text-white font-bold text-[11px] uppercase tracking-wider group-hover:text-emerald-300 transition-colors">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    {/* Metadata Row */}
                    <div className="flex items-center gap-3 text-xs font-semibold text-stone-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                        {article.date}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-700" />
                        {article.readingTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-stone-900 leading-snug tracking-tight mb-3 group-hover:text-emerald-800 transition-colors">
                      {article.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Read More Row */}
                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-emerald-950 transition-colors">
                  <span className="uppercase tracking-wider">Read Full Guide</span>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200">
            <p className="text-stone-600 font-medium text-sm">
              No articles currently listed for this category.
            </p>
            <button
              onClick={() => setSelectedTopic('All')}
              className="mt-4 px-5 py-2 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-xs hover:bg-emerald-600 hover:text-white transition-all cursor-pointer"
            >
              View All Topics
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

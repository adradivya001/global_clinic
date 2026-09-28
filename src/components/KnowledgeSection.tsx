import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/clinicData';

export const KnowledgeSection: React.FC = () => {
  return (
    <section id="knowledge" className="py-20 lg:py-24 bg-white relative overflow-hidden font-sans">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs text-[#086B9F] font-bold tracking-[0.2em] uppercase mb-2">
              PATIENT EDUCATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
              Stay Informed
            </h2>
            <p className="text-[#52606D] text-base mt-2">
              Clear, practical guides to help you understand movement, prevention, and rehabilitation.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EAF4FC] hover:bg-[#086B9F] text-[#086B9F] hover:text-white font-bold text-sm transition-all group"
          >
            <span>Read Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Article Cards in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article) => (
            <Link
              to="/blog"
              key={article.id}
              className="group rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl hover:border-[#086B9F]/30 transition-all duration-300 flex flex-col bg-white"
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-amber-300 border border-white/20 shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <h3 className="text-base font-bold text-[#102A43] group-hover:text-[#086B9F] transition-colors leading-snug">
                  {article.title}
                </h3>

                <div className="text-xs text-[#52606D] font-medium flex items-center justify-between pt-2 border-t border-[#E2E8F0]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                  <span className="text-[#086B9F] font-bold group-hover:translate-x-0.5 transition-transform">
                    Read &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

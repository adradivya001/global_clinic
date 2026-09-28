import React from 'react';
import { Clock } from 'lucide-react';
import { ARTICLES } from '../data/clinicData';

export const KnowledgeSection: React.FC = () => {
  return (
    <section id="knowledge" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
              Stay Informed
            </h2>
            <p className="text-[#52606D] text-base mt-2">
              Helpful articles to understand your body and improve your health.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 text-[#102A43] font-bold text-sm hover:text-amber-500 transition-colors">
            <span>View All Articles &rarr;</span>
          </button>
        </div>

        {/* 4 Article Cards in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              className="group rounded-xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-[#102A43] border border-[#E2E8F0] shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <h3 className="text-lg font-bold text-[#102A43] group-hover:text-amber-500 transition-colors leading-snug">
                  {article.title}
                </h3>
                
                <div className="text-xs text-[#52606D] font-medium flex items-center gap-1.5 pt-2 border-t border-[#E2E8F0]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { ARTICLES } from "../data/clinicData";

export const KnowledgeSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#FBFBFA] via-[#F4F7F4] to-[#FBFBFA] relative overflow-hidden font-sans border-t border-stone-200/80">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-10 w-[550px] h-[550px] bg-emerald-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[550px] h-[550px] bg-orange-100/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#059669_0.6px,transparent_0.6px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-300/60 text-emerald-800 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Evidence-Based Patient Education</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Clinical Insights & <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-stone-900 bg-clip-text text-transparent">Health Guides</span>
            </h2>
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl mt-2 font-normal">
              Practical clinical guides to help you understand biomechanics, prevent re-injury, and maintain long-term joint health.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-stone-200 hover:border-emerald-600 text-stone-900 hover:text-emerald-700 font-bold text-xs sm:text-sm shadow-xs transition-all group shrink-0"
          >
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Article Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article) => (
            <Link
              to="/blog"
              key={article.id}
              className="group rounded-3xl overflow-hidden flex flex-col justify-between bg-white border border-stone-200/90 shadow-md shadow-stone-200/40 hover:shadow-xl hover:border-emerald-600/40 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-stone-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/95 backdrop-blur-md text-stone-900 border border-stone-200 shadow-xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-black text-stone-900 leading-snug group-hover:text-emerald-700 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2 font-normal">
                    Clinical advice and evidence-based recommendations by Dr. K. Bhavendra PT for rehabilitation and healthy posture.
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-stone-400 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </span>
                <span className="font-extrabold text-emerald-700 group-hover:text-orange-700 transition-colors flex items-center gap-1">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

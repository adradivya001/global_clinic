import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { ARTICLES } from "../data/clinicData";

export const KnowledgeSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#FFFDF8] via-[#FAF4E8] to-[#FFFDF8] relative overflow-hidden font-sans border-t border-[#EAD9B7]">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-10 w-[550px] h-[550px] bg-[#F8EAC9]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[550px] h-[550px] bg-[#FAF4E8]/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#B87908_0.6px,transparent_0.6px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAD9B7] text-[#B87908] text-xs font-extrabold uppercase tracking-widest mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
              <span>Evidence-Based Patient Education</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-tight">
              Clinical Insights & <span className="bg-gradient-to-r from-[#B87908] via-[#D99B24] to-[#24190F] bg-clip-text text-transparent">Health Guides</span>
            </h2>
            
            <p className="text-[#65594B] text-sm sm:text-base leading-relaxed max-w-xl mt-2 font-normal">
              Practical clinical guides to help you understand biomechanics, prevent re-injury, and maintain long-term joint health.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-[#EAD9B7] hover:border-[#B87908] text-[#24190F] hover:text-[#B87908] font-bold text-xs sm:text-sm shadow-xs transition-all group shrink-0"
          >
            <BookOpen className="w-4 h-4 text-[#B87908]" />
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4 text-[#B87908] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Article Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article) => (
            <Link
              to="/blog"
              key={article.id}
              className="group rounded-3xl overflow-hidden flex flex-col justify-between bg-white border border-[#EAD9B7] shadow-md shadow-[#913d12]/5 hover:shadow-xl hover:border-[#B87908] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-[#FAF4E8]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24190F]/80 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#24190F] border border-[#EAD9B7] shadow-xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-black text-[#24190F] leading-snug group-hover:text-[#B87908] transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#65594B] leading-relaxed line-clamp-2 font-normal">
                    Clinical advice and evidence-based recommendations by Dr. K. Bhavendra PT for rehabilitation and healthy posture.
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-3 border-t border-[#EAD9B7]/50 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-[#65594B]/70 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </span>
                <span className="font-extrabold text-[#B87908] group-hover:text-[#966205] transition-colors flex items-center gap-1">
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

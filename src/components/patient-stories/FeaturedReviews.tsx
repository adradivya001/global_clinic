import React from 'react';
import { Star, Quote } from 'lucide-react';

export const FeaturedReviews: React.FC = () => {
  const featured = [
    {
      name: 'Sandeep Naidu',
      date: '5 months ago',
      rating: 5,
      text: 'I had a truly excellent experience at Global Physiotherapy Clinic. The clinic is very well-maintained, clean, and equipped with modern facilities that create a comfortable and professional environment.',
    },
    {
      name: 'Soneyaa Gandhi',
      date: 'Edited a year ago',
      rating: 5,
      text: "First I need to say a very big thanks to Dr.Bavendhra Sir..🙏\nReason: Before visiting Globalphysiotherapy Clinic i have visted other hospital's they were not at all able to understand my problem neck and scapula pain was ...",
    },
    {
      name: 'Hema Latha',
      date: '2 years ago',
      rating: 5,
      text: 'Very good treatment and very nice person...he will give a lot of confidence to patients..',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden font-sans border-t border-[#EAD9B7]/60">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8EAC9] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-xs">
            <span>FEATURED VOICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.15]">
            Experiences That Stand Out
          </h2>
        </div>

        {/* 3 Large Editorial Featured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF4E8] rounded-3xl p-8 border border-[#EAD9B7] hover:border-[#B87908] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8EAC9] border border-[#EAD9B7] flex items-center justify-center text-[#B87908] shadow-xs">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-[#D99B24]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D99B24] stroke-none" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-[#24190F] font-medium text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line">
                  "{item.text}"
                </p>
              </div>

              {/* Bottom Reviewer Info */}
              <div className="pt-5 border-t border-[#EAD9B7] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#24190F]">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#65594B] font-medium">
                    Google Review &bull; {item.date}
                  </span>
                </div>

                <span className="px-2.5 py-1 rounded-xl bg-white border border-[#EAD9B7] text-[10px] font-bold uppercase tracking-wider text-[#B87908]">
                  5.0 ★
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


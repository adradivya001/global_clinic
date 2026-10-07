import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

export interface PatientReview {
  id: string;
  name: string;
  date: string;
  rating: number;
  text?: string;
  source: string;
  isTruncated?: boolean;
}

export const GOOGLE_REVIEWS_DATA: PatientReview[] = [
  {
    id: 'rev-1',
    name: 'Sandeep Naidu',
    date: '5 months ago',
    rating: 5,
    text: 'I had a truly excellent experience at Global Physiotherapy Clinic. The clinic is very well-maintained, clean, and equipped with modern facilities that create a comfortable and professional environment.',
    source: 'Google Review',
  },
  {
    id: 'rev-2',
    name: 'Soneyaa Gandhi',
    date: 'Edited a year ago',
    rating: 5,
    text: "First I need to say a very big thanks to Dr.Bavendhra Sir..🙏\nReason: Before visiting Globalphysiotherapy Clinic i have visted other hospital's they were not at all able to understand my problem neck and scapula pain was ...",
    source: 'Google Review',
    isTruncated: true,
  },
  {
    id: 'rev-3',
    name: 'Hema Latha',
    date: '2 years ago',
    rating: 5,
    text: 'Very good treatment and very nice person...he will give a lot of confidence to patients..',
    source: 'Google Review',
  },
  {
    id: 'rev-4',
    name: 'SHAIK MOHAMMAD HANIF',
    date: 'a year ago',
    rating: 5,
    text: 'Good experience and good service,no sideeffects super b treatment from bhavendra sir',
    source: 'Google Review',
  },
  {
    id: 'rev-5',
    name: 'Kiran Mayee',
    date: 'a year ago',
    rating: 5,
    source: 'Google Review',
  },
  {
    id: 'rev-6',
    name: 'franklin alen rose',
    date: '2 years ago',
    rating: 5,
    source: 'Google Review',
  },
];

export const GoogleReviews: React.FC = () => {
  const googleMapsReviewsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Global Physiotherapy Clinic ' + CLINIC_INFO.address
  )}`;

  return (
    <section id="google-reviews" className="py-16 lg:py-24 bg-[#F4F7F4] relative overflow-hidden font-sans scroll-mt-20 border-t border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>GOOGLE REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15] mb-3">
            What Our Patients Say
          </h2>

          <p className="text-stone-600 text-base leading-relaxed">
            Authentic experiences shared by patients through our Google Business Profile in Anantapur.
          </p>
        </div>

        {/* 6 Google Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS_DATA.map((review) => {
            const initial = review.name.charAt(0).toUpperCase();

            return (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Reviewer Avatar + Name + Google Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 font-black text-sm flex items-center justify-center border border-emerald-200 shrink-0">
                        {initial}
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-black text-stone-900 leading-snug">
                          {review.name}
                        </h3>
                        <span className="text-[11px] font-semibold text-stone-400 block">
                          {review.date}
                        </span>
                      </div>
                    </div>

                    {/* Google Attribution Tag */}
                    <div className="px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                      Google
                    </div>
                  </div>

                  {/* 5 Emerald Stars */}
                  <div className="flex items-center gap-1 mb-4 text-emerald-600">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-600 stroke-none" />
                    ))}
                  </div>

                  {/* Review Text or Verified Rating Placeholder */}
                  {review.text ? (
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed whitespace-pre-line">
                      "{review.text}"
                    </p>
                  ) : (
                    <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-dashed border-stone-200 text-center">
                      <span className="text-xs font-semibold text-stone-500 italic">
                        Verified 5-Star Google Review
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom Source Tag */}
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-stone-400">
                  <span>Verified Patient</span>
                  <span className="text-emerald-800 font-bold">Google Business Profile</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View on Google Action */}
        <div className="text-center mt-12">
          <a
            href={googleMapsReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-stone-300 hover:border-emerald-600 text-stone-900 font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <span>View All Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-700 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

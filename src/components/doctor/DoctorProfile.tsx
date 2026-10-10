import React from 'react';
import { Award, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';
import doctorPhoto from '../../assets/doctor_photo.png';
import { DOCTOR_INFO } from '../../data/clinicData';

export const DoctorProfile: React.FC = () => {
  const credentials = DOCTOR_INFO.credentials;

  return (
    <section id="doctor-profile" className="py-20 lg:py-28 bg-[#FFFDF8] relative overflow-hidden font-sans scroll-mt-20 border-t border-[#EAD9B7]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F8EAC9]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FAF4E8]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Doctor Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-[#EAD9B7] shadow-xl bg-white group">
                <div className="relative h-[420px] sm:h-[480px] overflow-hidden bg-[#FAF4E8]">
                  <img
                    src={doctorPhoto}
                    alt={DOCTOR_INFO.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24190F]/75 via-transparent to-transparent pointer-events-none" />

                  {/* Doctor Designation Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-[#EAD9B7] shadow-md flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF4E8] text-[#B87908] border border-[#EAD9B7] flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[#24190F] font-black text-sm leading-snug font-serif">
                        {DOCTOR_INFO.name}
                      </h4>
                      <p className="text-[#65594B] text-xs font-semibold mt-0.5">
                        {DOCTOR_INFO.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Information */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
                <span>ABOUT THE DOCTOR</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-[1.15] font-serif">
                {DOCTOR_INFO.name}
              </h2>

              {/* Verified Credentials Pills */}
              <div className="flex flex-wrap gap-2 pt-3">
                {credentials.map((cred) => (
                  <span
                    key={cred}
                    className="px-3.5 py-1.5 rounded-xl bg-white border border-[#EAD9B7] text-[#B87908] text-xs font-bold tracking-wide shadow-xs"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>

            {/* Concise Introduction */}
            <p className="text-[#65594B] text-base sm:text-lg leading-relaxed font-normal">
              Dr. K. Bhavendra is the Lead Consultant Physiotherapist at Global Physiotherapy Clinic in Anantapur. With clinical focus in sports medicine and manual therapy, he is dedicated to helping patients overcome pain, restore mobility, and rebuild long-term functional physical capacity.
            </p>

            <p className="text-[#65594B] text-base sm:text-lg leading-relaxed font-normal">
              His patient-centered philosophy emphasizes thorough biomechanical assessment, individualized rehabilitation pathways, and empowering individuals with the confidence to stay active and prevent future injury.
            </p>

            {/* Doctor's Philosophy Quote Box */}
            <div className="p-5 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white text-[#B87908] border border-[#EAD9B7] flex items-center justify-center shrink-0">
                <Quote className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[#24190F] font-bold text-base leading-snug italic font-serif">
                  "{DOCTOR_INFO.quote}"
                </p>
                <span className="text-xs font-bold text-[#B87908] uppercase tracking-wider block mt-2">
                  Clinical Commitment &bull; Global Physiotherapy Anantapur
                </span>
              </div>
            </div>

            {/* Key Clinical Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#24190F]">
                <CheckCircle2 className="w-4 h-4 text-[#B87908] shrink-0" />
                <span>Evidence-Based Techniques</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#24190F]">
                <CheckCircle2 className="w-4 h-4 text-[#B87908] shrink-0" />
                <span>Personalized Rehabilitation Plans</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#24190F]">
                <CheckCircle2 className="w-4 h-4 text-[#B87908] shrink-0" />
                <span>Root-Cause Biomechanical Focus</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#24190F]">
                <ShieldCheck className="w-4 h-4 text-[#B87908] shrink-0" />
                <span>Sustainable Long-Term Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


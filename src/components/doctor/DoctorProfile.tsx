import React from 'react';
import { Award, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';
import doctorPhoto from '../../assets/doctor_photo.png';
import { DOCTOR_INFO } from '../../data/clinicData';

export const DoctorProfile: React.FC = () => {
  const credentials = DOCTOR_INFO.credentials;

  return (
    <section id="doctor-profile" className="py-20 lg:py-28 bg-[#F7FAFD] relative overflow-hidden font-sans scroll-mt-20">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#168DD0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5B400]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Doctor Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-[24px] overflow-hidden border border-[#08213D]/10 shadow-[0_20px_50px_rgba(8,33,61,0.08)] bg-white group">
                <div className="relative h-[420px] sm:h-[480px] overflow-hidden bg-slate-100">
                  <img
                    src={doctorPhoto}
                    alt={DOCTOR_INFO.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041326]/75 via-transparent to-transparent pointer-events-none" />

                  {/* Doctor Designation Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-white/60 shadow-[0_10px_25px_rgba(8,33,61,0.10)] flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#086B9F] flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#07182D] font-extrabold text-sm leading-snug">
                        {DOCTOR_INFO.name}
                      </h4>
                      <p className="text-[#526A84] text-xs font-semibold mt-0.5">
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
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#F5B400]" />
                <span className="text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase">
                  ABOUT THE DOCTOR
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15]">
                {DOCTOR_INFO.name}
              </h2>

              {/* Verified Credentials Pills */}
              <div className="flex flex-wrap gap-2 pt-3">
                {credentials.map((cred) => (
                  <span
                    key={cred}
                    className="px-3 py-1 rounded-lg bg-white border border-[#08213D]/10 text-[#086B9F] text-xs font-bold tracking-wide shadow-sm"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>

            {/* Concise Introduction */}
            <p className="text-[#526A84] text-base sm:text-lg leading-relaxed">
              Dr. K. Bhavendra is the Lead Consultant Physiotherapist at Global Physiotherapy Clinic in Anantapur. With clinical focus in sports medicine and manual therapy, he is dedicated to helping patients overcome pain, restore mobility, and rebuild long-term functional physical capacity.
            </p>

            <p className="text-[#526A84] text-base sm:text-lg leading-relaxed">
              His patient-centered philosophy emphasizes thorough biomechanical assessment, individualized rehabilitation pathways, and empowering individuals with the confidence to stay active and prevent future injury.
            </p>

            {/* Doctor's Philosophy Quote Box */}
            <div className="p-5 rounded-2xl bg-white border border-[#08213D]/8 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4D6] text-[#F5B400] flex items-center justify-center shrink-0">
                <Quote className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[#07182D] font-semibold text-base leading-snug italic">
                  "{DOCTOR_INFO.quote}"
                </p>
                <span className="text-xs font-bold text-[#086B9F] uppercase tracking-wider block mt-2">
                  Clinical Commitment &bull; Global Physiotherapy
                </span>
              </div>
            </div>

            {/* Key Clinical Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#07182D]">
                <CheckCircle2 className="w-4 h-4 text-[#F5B400] shrink-0" />
                <span>Evidence-Based Techniques</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#07182D]">
                <CheckCircle2 className="w-4 h-4 text-[#F5B400] shrink-0" />
                <span>Personalized Rehabilitation Plans</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#07182D]">
                <CheckCircle2 className="w-4 h-4 text-[#F5B400] shrink-0" />
                <span>Root-Cause Biomechanical Focus</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#07182D]">
                <ShieldCheck className="w-4 h-4 text-[#168DD0] shrink-0" />
                <span>Sustainable Long-Term Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

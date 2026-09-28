import React from 'react';
import { ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import doctorPhoto from '../../assets/doctor_photo.png';
import { DOCTOR_INFO } from '../../data/clinicData';

export const DoctorPreview: React.FC = () => {
  const navigate = useNavigate();

  const handleMeetDoctor = () => {
    navigate('/doctor');
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F7FAFD] relative overflow-hidden font-sans">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#168DD0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#F5B400]" />
            <span className="text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase">
              CLINICAL EXPERTISE
            </span>
            <div className="w-8 h-[2px] bg-[#F5B400]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15]">
            Led by Clinical Dedication.
          </h2>
        </div>

        {/* Compact Doctor Preview Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-[24px] border border-[#08213D]/8 shadow-[0_15px_45px_rgba(8,33,61,0.06)] overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Doctor Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#EAF4FC] shadow-lg">
                <img
                  src={doctorPhoto}
                  alt={DOCTOR_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right: Info & Clinical Statement */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-4 text-left">
              <div>
                <span className="text-xs font-bold text-[#086B9F] uppercase tracking-wider block mb-1">
                  {DOCTOR_INFO.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#07182D]">
                  {DOCTOR_INFO.name}
                </h3>
                <p className="text-sm font-semibold text-[#526A84] mt-1">
                  {DOCTOR_INFO.credentials.join(' • ')}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#526A84] leading-relaxed">
                Specializing in evidence-based musculoskeletal care, sports injury rehabilitation, and functional recovery.
              </p>

              {/* Approach Statement */}
              <div className="p-3.5 rounded-xl bg-[#F7FAFD] border border-[#08213D]/6 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#F5B400] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#07182D] font-medium leading-snug">
                  "Helping patients restore pain-free movement, rebuild physical strength, and regain lifelong independence."
                </p>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={handleMeetDoctor}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#08213D] hover:bg-[#041326] text-white font-bold text-sm shadow-md transition-all hover:gap-3 cursor-pointer group"
                >
                  <Award className="w-4 h-4 text-[#F5B400]" />
                  <span>Meet the Doctor</span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

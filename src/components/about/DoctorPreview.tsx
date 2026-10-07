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
    <section className="py-20 lg:py-28 bg-[#F4F7F4] relative overflow-hidden font-sans border-t border-stone-200/80">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <span>CLINICAL EXPERTISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15]">
            Led by Clinical Dedication.
          </h2>
        </div>

        {/* Doctor Preview Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Doctor Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-emerald-100 shadow-lg bg-emerald-50">
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
                <span className="text-xs font-black text-emerald-800 uppercase tracking-wider block mb-1">
                  {DOCTOR_INFO.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-900">
                  {DOCTOR_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-orange-700 mt-1">
                  {DOCTOR_INFO.credentials.join(' • ')}
                </p>
              </div>

              <p className="text-xs sm:text-base text-stone-600 leading-relaxed">
                Specializing in evidence-based musculoskeletal care, sports injury rehabilitation, and functional recovery in Anantapur.
              </p>

              {/* Approach Statement */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-stone-800 font-semibold leading-snug">
                  "Helping patients restore pain-free movement, rebuild physical strength, and regain lifelong independence."
                </p>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={handleMeetDoctor}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all hover:gap-3 cursor-pointer group"
                >
                  <Award className="w-4 h-4 text-emerald-200" />
                  <span>Meet the Doctor</span>
                  <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

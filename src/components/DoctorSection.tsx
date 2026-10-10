import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Heart, Activity, Award, Shield, UserCheck, Star, Sparkles } from 'lucide-react';
import { DOCTOR_INFO } from '../data/clinicData';
import doctorPhoto from '../assets/doctor_photo.png';

interface DoctorSectionProps {
  onBookClick: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onBookClick }) => {
  const EXPERTISE = [
    { title: "Experienced & Approachable", desc: "1:1 personalized care with clear clinical guidance", icon: UserCheck },
    { title: "Focused on Your Recovery", desc: "Goal-oriented, phased rehabilitation roadmaps", icon: Activity },
    { title: "Personalised Treatment Approach", desc: "Calibrated to your exact condition and activity level", icon: Heart },
    { title: "Evidence Based Techniques", desc: "Advanced physical therapy research & verified protocols", icon: Award },
    { title: "Focus on Long Term Results", desc: "Sustainable recovery and re-injury prevention", icon: Shield },
    { title: "Patient Centred Care", desc: "Your safety, functional comfort, and goals come first", icon: Star }
  ];

  return (
    <section id="doctor" className="py-16 lg:py-24 bg-[#FFFDF8] relative overflow-hidden font-sans border-t border-[#EAD9B7]">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-[#F8EAC9]/30 blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#FAF4E8]/40 blur-[150px]" />
      </div>

      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Main 2-Column Light Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: DOCTOR PORTRAIT CARD WITH LIGHT FRAMING (5 COLS) */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative rounded-3xl bg-[#FAF4E8] border border-[#EAD9B7] p-2.5 shadow-xl overflow-hidden group">
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-[#FAF4E8] h-[460px] sm:h-[500px]">
                <img
                  src={doctorPhoto}
                  alt={DOCTOR_INFO.name}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24190F]/80 via-transparent to-transparent" />
                
                {/* Floating Accreditation Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#EAD9B7] text-[#B87908] text-xs font-black uppercase tracking-wider shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
                    MPT (Sports Medicine)
                  </span>
                </div>

                {/* Floating Rating Badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#EAD9B7] text-[#24190F] text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Star className="w-3.5 h-3.5 text-[#B87908] fill-[#B87908]" />
                  <span>Lead Consultant</span>
                </div>

                {/* Bottom Overlay Nameplate */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EAD9B7] shadow-lg">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#B87908] block mb-1">
                    Clinical Director & Lead Consultant
                  </span>
                  <h3 className="text-xl font-black text-[#24190F] tracking-wide">
                    {DOCTOR_INFO.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {DOCTOR_INFO.credentials.map((cred, cIdx) => (
                      <span key={cIdx} className="px-2 py-0.5 rounded bg-[#FAF4E8] text-[#B87908] text-[10px] font-mono font-bold border border-[#EAD9B7]">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT: CLINICAL PHILOSOPHY & EXPERTISE PILLARS (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] text-xs font-extrabold uppercase tracking-widest shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
                <span>CLINICAL DIRECTOR &amp; SPECIALIST</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-tight">
                Dedicated to Your Pain-Free Future
              </h2>
              
              <p className="text-base sm:text-lg text-[#65594B] leading-relaxed font-normal">
                Dr. K. Bhavendra combines specialized sports medicine expertise, advanced orthopedic manual therapy, and evidence-guided exercise rehabilitation to restore joint kinematics, relieve chronic nerve entrapment, and return patients to optimal daily mobility.
              </p>
            </div>

            {/* Doctor Quote Card */}
            <div className="relative p-5 rounded-2xl bg-[#FFFDF8] border border-[#EAD9B7] border-l-4 border-l-[#B87908] shadow-xs">
              <Quote className="w-6 h-6 text-[#B87908]/30 absolute top-4 right-4" />
              <p className="text-sm sm:text-base italic text-[#24190F] leading-relaxed max-w-xl">
                "{DOCTOR_INFO.quote}"
              </p>
              <div className="mt-2.5 flex items-center gap-2 text-xs font-bold text-[#B87908]">
                <span>— Dr. K. Bhavendra PT</span>
                <span className="text-[#EAD9B7]">•</span>
                <span className="text-[#65594B]">Anantapur Clinic</span>
              </div>
            </div>

            {/* 6 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {EXPERTISE.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#FAF4E8] border border-[#EAD9B7] hover:border-[#B87908] hover:bg-[#F8EAC9]/40 transition-colors flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white border border-[#EAD9B7] text-[#B87908] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#24190F] tracking-wide mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#65594B] leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Trigger Row */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3.5">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#B87908] hover:bg-[#966205] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#B87908]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Consultation with Dr. Bhavendra</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/doctor"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-[#FAF4E8] text-[#24190F] hover:text-[#B87908] border border-[#EAD9B7] font-bold text-xs uppercase tracking-wider shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <span>View Full Profile</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B87908]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DoctorSection;

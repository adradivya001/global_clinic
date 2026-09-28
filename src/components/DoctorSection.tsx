import React from 'react';
import { Play, ArrowRight, Quote, Heart, Activity, Award, Shield, UserCheck, Star, Medal, Target } from 'lucide-react';
import { DOCTOR_INFO } from '../data/clinicData';
import doctorPhoto from '../assets/doctor_photo.png';

interface DoctorSectionProps {
  onBookClick: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onBookClick }) => {

  const EXPERTISE = [
    { title: "Experienced & Approachable", desc: "Personalised attention and clear guidance", icon: <UserCheck className="w-[22px] h-[22px] text-[#08213D]" /> },
    { title: "Focused on Your Recovery", desc: "Goal-oriented rehabilitation plans", icon: <Target className="w-[22px] h-[22px] text-[#08213D]" /> },
    { title: "Personalised Treatment Approach", desc: "Tailored to your lifestyle and activity level", icon: <Heart className="w-[22px] h-[22px] text-[#08213D]" /> },
    { title: "Evidence Based Techniques", desc: "Latest clinical methods and research", icon: <Activity className="w-[22px] h-[22px] text-[#08213D]" /> },
    { title: "Focus on Long Term Results", desc: "Sustainable recovery and injury prevention", icon: <Shield className="w-[22px] h-[22px] text-[#08213D]" /> },
    { title: "Patient Centred Care", desc: "Your health, goals and comfort come first", icon: <Star className="w-[22px] h-[22px] text-[#08213D]" /> }
  ];

  return (
    <section id="doctor" className="py-12 lg:py-16 bg-[#F8FBFF] relative overflow-hidden font-sans">
      
      {/* Abstract Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft corner atmospheric lighting */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[60%] rounded-full blur-[120px] opacity-40" style={{ background: 'radial-gradient(circle, rgba(23,105,194,0.12), transparent 70%)' }}></div>
        <div className="absolute top-[20%] -right-[10%] w-[45%] h-[60%] rounded-full blur-[120px] opacity-30" style={{ background: 'radial-gradient(circle, rgba(11,92,142,0.08), transparent 70%)' }}></div>
        <div className="absolute -bottom-[15%] left-[20%] w-[50%] h-[50%] rounded-full blur-[130px] opacity-25" style={{ background: 'radial-gradient(circle, rgba(245,180,0,0.06), transparent 70%)' }}></div>

        {/* Faint Dotted Grid Pattern at far edges */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#0B5C8E_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_40%,#000_100%)]"></div>

        {/* Ultra-low opacity SVG accents (delicate gold & blue curves + faint medical crosses at edges) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
          {/* Subtle curved wave */}
          <path d="M-100 200 C300 120, 700 350, 1540 150" stroke="#0B5C8E" strokeWidth="1.5" opacity="0.4" />
          <path d="M-100 650 C400 500, 900 720, 1540 580" stroke="#F5B400" strokeWidth="1" opacity="0.3" />
          
          {/* Faint medical crosses at far corners */}
          <g opacity="0.3" transform="translate(60, 120)">
            <line x1="0" y1="10" x2="20" y2="10" stroke="#0B5C8E" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="0" x2="10" y2="20" stroke="#0B5C8E" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g opacity="0.25" transform="translate(1360, 680)">
            <line x1="0" y1="10" x2="20" y2="10" stroke="#0B5C8E" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="0" x2="10" y2="20" stroke="#0B5C8E" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 3-Column Desktop Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ========================================================
              LEFT COLUMN (30%) - DOCTOR IMAGE ONLY
          ======================================================== */}
          <div className="lg:w-[30%] shrink-0 relative animate-[slideRight_0.8s_ease-out_forwards]">
            
            {/* Clean Rounded Frame */}
            <div className="relative rounded-[20px] overflow-hidden bg-white border border-[rgba(8,33,61,0.08)] shadow-[0_12px_30px_rgba(20,65,100,0.08)] p-1.5">
              <img
                src={doctorPhoto}
                alt={DOCTOR_INFO.name}
                className="w-full h-[360px] lg:h-[420px] object-cover rounded-[16px] object-top"
              />
            </div>
          </div>

          {/* ========================================================
              CENTER COLUMN (42%) - CONTENT & EXPERTISE
          ======================================================== */}
          <div className="lg:w-[42%] flex flex-col justify-center animate-[slideUp_0.8s_ease-out_forwards] z-10" style={{ animationDelay: '150ms', opacity: 0 }}>
            
            <div className="flex items-center gap-3 mb-3">
              <div className="w-[32px] h-[2px] bg-[#F5B400]"></div>
              <span className="text-[#0B5C8E] font-bold text-[12px] tracking-[0.2em] uppercase">
                Meet Our Specialist
              </span>
            </div>
            
            <h2 className="text-[34px] md:text-[40px] lg:text-[44px] font-extrabold text-[#08213D] tracking-tight leading-[1.1] mb-2">
              Dr. K. Bhavendra
            </h2>
            
            <div className="text-[#294764] text-[15px] font-semibold mb-4">
              BPT, MPT (Sports Medicine), CMT, COCMT
            </div>
            
            <p className="text-[#526A84] text-[15px] leading-[1.6] max-w-[580px] mb-6">
              Dr. Bhavendra is a highly specialized physiotherapist dedicated to restoring biomechanical function and enhancing athletic performance. Through evidence-based manual therapy and targeted exercise protocols, he helps patients transition from acute pain to complete physical independence.
            </p>
            
            {/* Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mb-6">
              {EXPERTISE.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="w-[38px] h-[38px] rounded-full bg-[#FFF8E6] border border-[rgba(245,180,0,0.16)] flex items-center justify-center shrink-0 group-hover:bg-[#EAF4FC] transition-colors duration-300">
                    <div className="text-[#08213D] group-hover:-translate-y-[1px] transition-transform duration-300 scale-90">
                      {item.icon}
                    </div>
                  </div>
                  <div className="group-hover:translate-x-[2px] transition-transform duration-300 pt-0.5">
                    <h4 className="text-[#08213D] text-[13px] font-bold mb-0.5 leading-tight">{item.title}</h4>
                    <p className="text-[#526A84] text-[12px] leading-snug group-hover:text-[#294764] transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <button 
                onClick={onBookClick}
                className="w-full sm:w-auto h-[48px] px-6 bg-[#FFBF1A] text-[#061A31] rounded-[12px] font-bold text-[14px] shadow-[0_8px_20px_rgba(245,180,0,0.20)] hover:-translate-y-[2px] hover:shadow-[0_12px_25px_rgba(245,180,0,0.25)] hover:bg-[#FFC940] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Book a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
          </div>

          {/* ========================================================
              RIGHT COLUMN (28%) - QUOTE CARD
          ======================================================== */}
          <div className="lg:w-[28%] flex flex-col justify-center animate-[slideLeft_0.8s_ease-out_forwards]" style={{ animationDelay: '250ms', opacity: 0 }}>
            
            <div className="relative w-full bg-[rgba(255,255,255,0.78)] backdrop-blur-[16px] border border-[rgba(8,33,61,0.10)] rounded-[22px] shadow-[0_15px_35px_rgba(20,65,100,0.06)] p-7 h-[360px] lg:h-[420px] flex flex-col justify-between overflow-hidden group">
              
              {/* Subtle Decorative Landscape Silhouette */}
              <div className="absolute bottom-0 right-[-10%] w-[160%] h-[60%] opacity-[0.06] pointer-events-none -z-10 group-hover:translate-x-3 transition-transform duration-[12s] ease-out">
                <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="w-full h-full fill-[#0B5C8E]">
                  <path d="M0,100 L0,50 Q20,30 40,50 T80,40 T120,60 T160,30 T200,50 L200,100 Z" />
                  <circle cx="160" cy="30" r="12" fill="#1769C2" />
                </svg>
              </div>

              <div>
                <Quote className="w-10 h-10 text-[#F5B400] mb-5 opacity-80 animate-[pulse_4s_ease-in-out_infinite]" strokeWidth={1} fill="currentColor" />
                <p className="text-[#061A31] text-[22px] font-bold leading-[1.35] tracking-tight mb-5">
                  "Helping you move, recover and build a stronger, healthier you."
                </p>
                <div className="text-[#0B5C8E] text-[14px] font-bold">
                  — Dr. K. Bhavendra
                </div>
              </div>
              
              <div className="mt-auto border-t border-[rgba(8,33,61,0.06)] pt-4">
                <div className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#7890A8]">
                  MOVE • <span className="text-[#08213D]">RECOVER</span> • GET STRONGER
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>

        {/* ========================================================
            BOTTOM STATISTICS BAR
        ======================================================== */}
        <div className="mt-10 lg:mt-12 w-full bg-white/80 backdrop-blur-md border border-[rgba(8,33,61,0.08)] rounded-[18px] shadow-[0_10px_30px_rgba(20,65,100,0.05)] py-5 px-4 lg:px-8 animate-[slideUp_0.8s_ease-out_forwards]" style={{ animationDelay: '350ms', opacity: 0 }}>
          <div className="flex flex-col md:flex-row justify-between divide-y md:divide-y-0 md:divide-x divide-[rgba(8,33,61,0.08)]">
            
            <div className="flex-1 flex items-center justify-center md:justify-start gap-4 px-4 py-3 md:py-0">
              <div className="w-[44px] h-[44px] rounded-full bg-[#EAF4FC] flex items-center justify-center shrink-0 text-[#0B5C8E]">
                <Medal className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[#08213D] text-[17px] font-extrabold leading-none mb-1">Lead Consultant</div>
                <div className="text-[#7890A8] text-[11px] uppercase tracking-widest font-bold">Physiotherapist</div>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center md:justify-center gap-4 px-4 py-3 md:py-0">
              <div className="w-[44px] h-[44px] rounded-full bg-[#EAF4FC] flex items-center justify-center shrink-0 text-[#0B5C8E]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[#08213D] text-[17px] font-extrabold leading-none mb-1">BPT, MPT</div>
                <div className="text-[#7890A8] text-[11px] uppercase tracking-widest font-bold">Credentials</div>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center md:justify-center gap-4 px-4 py-3 md:py-0">
              <div className="w-[44px] h-[44px] rounded-full bg-[#FFF4D6] flex items-center justify-center shrink-0 text-[#F5B400]">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[#08213D] text-[17px] font-extrabold leading-none mb-1">Sports Medicine</div>
                <div className="text-[#7890A8] text-[11px] uppercase tracking-widest font-bold">Specialist</div>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center md:justify-end gap-4 px-4 py-3 md:py-0">
              <div className="w-[44px] h-[44px] rounded-full bg-[#EAF4FC] flex items-center justify-center shrink-0 text-[#0B5C8E]">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[#08213D] text-[17px] font-extrabold leading-none mb-1">Evidence Based</div>
                <div className="text-[#7890A8] text-[11px] uppercase tracking-widest font-bold">Care Protocols</div>
              </div>
            </div>
            
          </div>
        </div>

      </div>

      <style>{`
        @keyframes slideRight {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </section>
  );
};

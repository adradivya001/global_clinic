import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Award } from 'lucide-react';
import { DOCTOR_INFO } from '../../data/clinicData';

export const OurCommitment: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden font-sans border-t border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-stone-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content (8 cols) */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>DEDICATED EXCELLENCE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight leading-[1.2] mb-5">
              Our Commitment to Your Recovery
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              At Global Physiotherapy Clinic, our commitment is simple: to provide thoughtful, attentive, and evidence-backed physical care that helps every individual move with greater ease, strength, and confidence.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-stone-800 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <span>Patient-Focused Setting</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-600" />
                <span>Comprehensive Evaluation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                <span>Long-Term Mobility Focus</span>
              </div>
            </div>
          </div>

          {/* Right Preview CTA (4 cols) */}
          <div className="lg:col-span-4 bg-[#F4F7F4] rounded-2xl p-7 border border-stone-200 flex flex-col justify-between items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black text-stone-500 uppercase tracking-wider block">
                  LEAD CLINICIAN
                </span>
                <h4 className="text-sm font-black text-stone-900">
                  {DOCTOR_INFO.name}
                </h4>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed mb-5">
              Learn more about Dr. Bhavendra’s clinical background, credentials, and treatment philosophy on the dedicated Doctor profile.
            </p>

            <Link
              to="/doctor"
              className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-sm"
            >
              <span>Meet Dr. Bhavendra</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

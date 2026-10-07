import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    reason: '',
    bodyArea: '',
    date: '',
    timeSlot: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  if (!isOpen) return null;

  const reasons = [
    'Acute Pain / Spasm Relief',
    'Sports Injury & Conditioning',
    'Post-Surgery Orthopaedic Recovery',
    'Spine & Neck Stiffness / Disc Care',
    'Joint Mobility & Arthritis Relief',
    'General Physical Therapy Consultation',
  ];

  const bodyAreas = ['Neck', 'Shoulder', 'Spine / Back', 'Elbow', 'Hip & Pelvis', 'Knee Joint', 'Ankle & Foot', 'Full Body Posture'];
  const timeSlots = ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM'];

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-2xl bg-[#FCFAF8] border border-stone-200 rounded-3xl p-6 sm:p-9 shadow-2xl overflow-hidden animate-fadeIn">
        
        {/* Subtle Decorative Ambient Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

        {/* Header bar */}
        <div className="relative z-10 flex items-center justify-between pb-5 border-b border-stone-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>Step 0{step} of 05</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
              Clinical Assessment Booking
            </h3>
            <p className="text-xs text-stone-600 mt-0.5">Dr. K. Bhavendra, PT — Global Physiotherapy Anantapur</p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="relative z-10 w-full bg-stone-200/70 h-2 rounded-full my-5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-600 to-teal-600 h-full transition-all duration-300 rounded-full"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>

        {/* Step 1: What Brings You Here */}
        {step === 1 && (
          <div className="relative z-10 space-y-4 py-2">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-stone-900">1. What is your primary clinical goal or symptom?</h4>
              <p className="text-xs text-stone-500 mt-0.5">Select the option that best describes your current requirement.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {reasons.map((r) => (
                <button
                  key={r}
                  onClick={() => setFormData({ ...formData, reason: r })}
                  className={`p-3.5 rounded-2xl text-left text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                    formData.reason === r
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-600/20'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-emerald-300 hover:bg-emerald-50/40'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Body Area */}
        {step === 2 && (
          <div className="relative z-10 space-y-4 py-2">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-stone-900">2. Which anatomical area requires attention?</h4>
              <p className="text-xs text-stone-500 mt-0.5">Target the location for clinical testing and biomechanical assessment.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {bodyAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => setFormData({ ...formData, bodyArea: area })}
                  className={`p-3.5 rounded-2xl text-center text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                    formData.bodyArea === area
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-600/20'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-emerald-300 hover:bg-emerald-50/40'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Date & Time */}
        {step === 3 && (
          <div className="relative z-10 space-y-4 py-2">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-stone-900">3. Select your preferred date and time slot</h4>
              <p className="text-xs text-stone-500 mt-0.5">Clinic hours: Monday – Saturday (9:00 AM – 9:00 PM), Sunday by appointment.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Preferred Consultation Date</span>
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-3.5 rounded-2xl bg-white border border-stone-200 text-stone-900 focus:outline-none focus:border-emerald-600 text-sm shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Available Time Slots</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setFormData({ ...formData, timeSlot: slot })}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        formData.timeSlot === slot
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                          : 'bg-white border-stone-200 text-stone-700 hover:border-emerald-300'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Patient Details */}
        {step === 4 && (
          <div className="relative z-10 space-y-4 py-2">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-stone-900">4. Enter your contact information</h4>
              <p className="text-xs text-stone-500 mt-0.5">We will send appointment confirmation and doctor preparation notes.</p>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3.5 rounded-2xl bg-white border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-emerald-600 shadow-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number (+91) *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3.5 rounded-2xl bg-white border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-emerald-600 shadow-sm"
              />
              <input
                type="email"
                placeholder="Email Address (Optional)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3.5 rounded-2xl bg-white border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-emerald-600 shadow-sm"
              />
            </div>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {step === 5 && (
          <div className="relative z-10 text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black text-stone-900">Consultation Request Received!</h4>
            <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-emerald-800">{formData.name || 'Patient'}</strong>. Dr. K. Bhavendra's clinical desk at Anantapur has recorded your priority booking and will call you shortly to confirm your assessment.
            </p>
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-left text-xs space-y-2 max-w-md mx-auto text-stone-700">
              <p><strong className="text-stone-900">Care Requirement:</strong> {formData.reason || 'Physical Therapy Consultation'}</p>
              <p><strong className="text-stone-900">Target Area:</strong> {formData.bodyArea || 'General Assessment'}</p>
              <p><strong className="text-stone-900">Preferred Window:</strong> {formData.date || 'Earliest available'} @ {formData.timeSlot || 'Scheduled with desk'}</p>
              <p className="flex items-start gap-1.5 pt-1 text-stone-600 border-t border-emerald-200/50">
                <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </p>
            </div>
          </div>
        )}

        {/* Footer Navigation Buttons */}
        <div className="relative z-10 flex items-center justify-between pt-5 mt-5 border-t border-stone-200/80">
          {step > 1 && step < 5 ? (
            <button
              onClick={handlePrev}
              className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 && (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {step === 4 && (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-700/25 transition-all hover:scale-[1.02]"
            >
              <span>Confirm Appointment Request</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          )}

          {step === 5 && (
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm mx-auto cursor-pointer shadow-md transition-all hover:scale-[1.02]"
            >
              Done & Return to Clinic
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

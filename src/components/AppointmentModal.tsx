import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
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
    'Acute Pain / Spasm',
    'Sports Injury',
    'Post-Surgery Recovery',
    'Spine & Neck Stiffness',
    'Joint / Mobility Difficulty',
    'General Physical Therapy Consultation',
  ];

  const bodyAreas = ['Neck', 'Shoulder', 'Back', 'Elbow', 'Hip', 'Knee', 'Ankle', 'Foot'];
  const timeSlots = ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM'];

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0a111e] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <div className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              Clinical Appointment Flow — Step 0{step} of 05
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              Book Your Appointment with Dr. K. Bhavendra
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full my-6 overflow-hidden">
          <div
            className="bg-amber-400 h-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>

        {/* Step 1: What Brings You Here */}
        {step === 1 && (
          <div className="space-y-4 py-2">
            <h4 className="text-lg font-semibold text-slate-200">1. What brings you to Global Physiotherapy Clinic?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasons.map((r) => (
                <button
                  key={r}
                  onClick={() => setFormData({ ...formData, reason: r })}
                  className={`p-4 rounded-xl text-left text-sm font-medium border transition-all ${
                    formData.reason === r
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                      : 'bg-[#111c30] border-white/5 text-slate-300 hover:border-slate-600'
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
          <div className="space-y-4 py-2">
            <h4 className="text-lg font-semibold text-slate-200">2. Which area of your body requires attention?</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {bodyAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => setFormData({ ...formData, bodyArea: area })}
                  className={`p-4 rounded-xl text-center text-sm font-medium border transition-all ${
                    formData.bodyArea === area
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                      : 'bg-[#111c30] border-white/5 text-slate-300 hover:border-slate-600'
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
          <div className="space-y-4 py-2">
            <h4 className="text-lg font-semibold text-slate-200">3. Select your preferred date and time slot:</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-[#111c30] border border-white/10 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setFormData({ ...formData, timeSlot: slot })}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                        formData.timeSlot === slot
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-[#111c30] border-white/5 text-slate-300'
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
          <div className="space-y-4 py-2">
            <h4 className="text-lg font-semibold text-slate-200">4. Please provide your contact details:</h4>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-[#111c30] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
              />
              <input
                type="tel"
                placeholder="Phone Number (+91)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-[#111c30] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-[#111c30] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {step === 5 && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-extrabold text-white">Booking Details Confirmed!</h4>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Thank you, <strong className="text-amber-400">{formData.name || 'Patient'}</strong>. Our clinical team at Anantapur will contact you shortly to confirm your consultation time.
            </p>
            <div className="p-4 rounded-xl bg-[#111c30] border border-white/10 text-left text-xs space-y-1.5 max-w-md mx-auto text-slate-300">
              <p><strong>Reason:</strong> {formData.reason || 'General Consultation'}</p>
              <p><strong>Area:</strong> {formData.bodyArea || 'Unspecified'}</p>
              <p><strong>Preferred Slot:</strong> {formData.date || 'Today'} @ {formData.timeSlot || '9 AM'}</p>
              <p><strong>Location:</strong> {CLINIC_INFO.address}</p>
            </div>
          </div>
        )}

        {/* Footer Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
          {step > 1 && step < 5 ? (
            <button
              onClick={handlePrev}
              className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div></div>
          )}

          {step < 4 && (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {step === 4 && (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
            >
              <span>Submit Appointment</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          )}

          {step === 5 && (
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm mx-auto cursor-pointer"
            >
              Done & Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // UI state feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredDate: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="enquiry-form" className="py-16 lg:py-24 bg-[#F7FAFD] relative overflow-hidden font-sans scroll-mt-20">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#086B9F]" />
            <span>DIRECT INQUIRY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-3">
            Send Us A Message
          </h2>

          <p className="text-[#526A84] text-base leading-relaxed">
            Fill out the form below and our team will get in touch with you to assist with your questions.
          </p>
        </div>

        {/* Clean Form Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#08213D]/8 shadow-[0_10px_35px_rgba(8,33,61,0.04)]">
          {isSubmitted ? (
            <div className="text-center py-12 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#07182D] mb-2">
                Thank You For Your Enquiry
              </h3>
              <p className="text-[#526A84] text-sm sm:text-base max-w-md mx-auto mb-8">
                Your message has been received. Our clinical coordinator will reach out to you shortly.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl bg-[#08213D] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0a294c] transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#07182D] uppercase tracking-wider mb-2">
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F7FAFD] border border-[#08213D]/10 text-[#07182D] placeholder-[#7890A8] text-sm font-medium focus:outline-none focus:border-[#086B9F] focus:bg-white transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-[#07182D] uppercase tracking-wider mb-2">
                    Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F7FAFD] border border-[#08213D]/10 text-[#07182D] placeholder-[#7890A8] text-sm font-medium focus:outline-none focus:border-[#086B9F] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-[#07182D] uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F7FAFD] border border-[#08213D]/10 text-[#07182D] placeholder-[#7890A8] text-sm font-medium focus:outline-none focus:border-[#086B9F] focus:bg-white transition-all"
                  />
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-[#07182D] uppercase tracking-wider mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F7FAFD] border border-[#08213D]/10 text-[#07182D] text-sm font-medium focus:outline-none focus:border-[#086B9F] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#07182D] uppercase tracking-wider mb-2">
                  Message / Rehabilitation Concern <span className="text-amber-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the condition or reason for your visit..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F7FAFD] border border-[#08213D]/10 text-[#07182D] placeholder-[#7890A8] text-sm font-medium focus:outline-none focus:border-[#086B9F] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

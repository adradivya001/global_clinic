import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';

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
    <section id="enquiry-form" className="py-16 lg:py-24 bg-[#FAF4E8] relative overflow-hidden font-sans scroll-mt-20 border-t border-[#EAD9B7]">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] font-bold text-xs tracking-[0.2em] uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#B87908]" />
            <span>DIRECT INQUIRY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#24190F] tracking-tight leading-[1.15] mb-3">
            Send Us A Message
          </h2>

          <p className="text-[#65594B] text-base leading-relaxed">
            Fill out the form below and our clinical team will get in touch with you to assist with your evaluation scheduling.
          </p>
        </div>

        {/* Clean Form Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAD9B7] shadow-md">
          {isSubmitted ? (
            <div className="text-center py-12 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#FAF4E8] text-[#B87908] flex items-center justify-center mb-5 border border-[#EAD9B7]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#24190F] mb-2">
                Thank You For Your Enquiry
              </h3>
              <p className="text-[#65594B] text-sm sm:text-base max-w-md mx-auto mb-8">
                Your message has been received. Our clinical coordinator will reach out to you promptly.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl bg-[#24190F] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#3D2B1A] transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#24190F] uppercase tracking-wider mb-2">
                    Full Name <span className="text-[#B87908]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FFFDF8] border border-[#EAD9B7] text-[#24190F] placeholder-[#65594B]/50 text-sm font-medium focus:outline-none focus:border-[#B87908] focus:bg-white transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-[#24190F] uppercase tracking-wider mb-2">
                    Phone Number <span className="text-[#B87908]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FFFDF8] border border-[#EAD9B7] text-[#24190F] placeholder-[#65594B]/50 text-sm font-medium focus:outline-none focus:border-[#B87908] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-[#24190F] uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FFFDF8] border border-[#EAD9B7] text-[#24190F] placeholder-[#65594B]/50 text-sm font-medium focus:outline-none focus:border-[#B87908] focus:bg-white transition-all"
                  />
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-[#24190F] uppercase tracking-wider mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FFFDF8] border border-[#EAD9B7] text-[#24190F] text-sm font-medium focus:outline-none focus:border-[#B87908] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#24190F] uppercase tracking-wider mb-2">
                  Message / Rehabilitation Concern <span className="text-[#B87908]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the condition or reason for your visit..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FFFDF8] border border-[#EAD9B7] text-[#24190F] placeholder-[#65594B]/50 text-sm font-medium focus:outline-none focus:border-[#B87908] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:opacity-95 text-white font-bold text-sm shadow-md shadow-[#B87908]/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
                </button>

                <div className="flex items-center gap-2 text-xs text-[#65594B] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#B87908]" />
                  <span>Your clinical information remains confidential</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Copy, Send, Briefcase, Scale, Clock } from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'associate',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in your name, email, and message.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Practice Scope (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
                Initiate Inquiry
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                Available for legal associate, research, and advisory roles.
              </h2>
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                Currently based in Addis Ababa and available for opportunities across private law firms, corporate legal departments, non-profit human rights organizations, and judicial chambers.
              </p>
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-3 text-xs sm:text-sm">
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 bg-white border border-stone-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-stone-100 text-stone-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-stone-400 uppercase">Email</div>
                    <a
                      href="mailto:romanmekonnen067@gmail.com"
                      className="font-medium text-stone-900 hover:underline"
                    >
                      romanmekonnen067@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('romanmekonnen067@gmail.com', 'email')}
                  className="p-1.5 text-stone-400 hover:text-stone-800 rounded transition-colors"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 bg-white border border-stone-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-stone-100 text-stone-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-stone-400 uppercase">Direct Telephone</div>
                    <a
                      href="tel:+251902230888"
                      className="font-medium text-stone-900 hover:underline"
                    >
                      +251 902 230 888
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+251902230888', 'phone')}
                  className="p-1.5 text-stone-400 hover:text-stone-800 rounded transition-colors"
                  title="Copy telephone number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 bg-white border border-stone-200 rounded-lg">
                <div className="p-2 rounded bg-stone-100 text-stone-800">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-stone-400 uppercase">Primary Location</div>
                  <div className="font-medium text-stone-900">
                    Addis Ababa, Ethiopia (Open to relocation / regional travel)
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Objective & Engagement Scope (from CV) */}
            <div className="p-5 bg-white border border-stone-200 rounded-lg space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700">
                <Briefcase className="w-4 h-4 text-stone-800" />
                <span>Professional Objective &amp; Practice Scope</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Dedicated and ethically grounded Law Graduate seeking an entry-level legal role at a law firm, corporate counsel department, or public interest organization where I can contribute to legal research, document preparation, client support, and case management.
              </p>
              <div className="pt-2 border-t border-stone-100 grid grid-cols-2 gap-2 text-[11px] text-stone-600">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>Immediate Availability</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>Full-Time &amp; Associate Roles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Professional Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-stone-100 text-stone-900 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Roman Mekonnen. Your message regarding{' '}
                  <span className="font-semibold text-stone-800">{formData.inquiryType}</span> has been recorded, and you will receive a prompt follow-up.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        inquiryType: 'associate',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-stone-100 hover:bg-stone-200 rounded transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900">
                    Send Professional Inquiry
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Connect directly regarding recruitment, legal drafting assistance, or institutional consultation.
                  </p>
                </div>

                {formError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Abebe Kebede"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#faf9f6] border border-stone-200 rounded focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@lawfirm.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#faf9f6] border border-stone-200 rounded focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Firm / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Addis Legal Associates"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#faf9f6] border border-stone-200 rounded focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Nature of Engagement
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#faf9f6] border border-stone-200 rounded focus:outline-none focus:border-stone-900 transition-colors"
                    >
                      <option value="Associate / Entry-Level Role">Entry-Level Legal Associate Role</option>
                      <option value="Judicial / In-House Counsel">In-House Corporate Counsel Support</option>
                      <option value="NGO / Human Rights Initiative">Human Rights / Legal Aid Initiative</option>
                      <option value="Research & Document Drafting">Legal Research &amp; Brief Drafting</option>
                      <option value="General Professional Inquiries">General Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the opportunity, practice area, or inquiry details..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#faf9f6] border border-stone-200 rounded focus:outline-none focus:border-stone-900 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-xs font-semibold uppercase tracking-wider text-stone-50 bg-stone-900 hover:bg-stone-800 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Formal Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

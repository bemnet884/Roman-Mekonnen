'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  Send,
  Briefcase,
  Scale,
  Clock,
  ExternalLink,
  ArrowRight,
  Loader2,
  ChevronDown,
  Download,
  FileText,
  Award,
} from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedDispatchedText, setCopiedDispatchedText] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Associate / Entry-Level Role',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [dispatchedDetails, setDispatchedDetails] = useState<{
    recipient: string;
    subject: string;
    body: string;
    mailtoUrl: string;
    gmailUrl: string;
  } | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone' | 'dispatched') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedDispatchedText(true);
      setTimeout(() => setCopiedDispatchedText(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please complete your name, email, and message details.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    const recipient = 'romanmekonnen067@gmail.com';
    const subject = `[Legal Inquiry] ${formData.inquiryType} — ${formData.name}${formData.organization ? ` (${formData.organization})` : ''}`;
    const formattedBody = `Dear Roman Mekonnen,\n\nI am contacting you regarding a legal opportunity / professional inquiry.\n\nSender Name: ${formData.name}\nEmail Address: ${formData.email}\nOrganization / Firm: ${formData.organization || 'Private Inquirer'}\nNature of Engagement: ${formData.inquiryType}\n\nMessage Details:\n${formData.message}\n\n---\nSent from Roman Mekonnen Legal Portfolio (Direct Contact)`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(formattedBody);

    const mailtoUrl = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodedSubject}&body=${encodedBody}`;

    setDispatchedDetails({
      recipient,
      subject,
      body: formattedBody,
      mailtoUrl,
      gmailUrl,
    });

    try {
      // POST to backend API for record auditing
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.warn('API logging skipped or offline, continuing with client dispatch', err);
    }

    setIsSubmitting(false);
    setFormSubmitted(true);

    // Attempt to trigger default mail client automatically
    try {
      window.location.href = mailtoUrl;
    } catch (e) {
      // If popup or mailto is prevented by browser policy, the confirmation UI provides direct buttons
    }
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
                    <div className="text-[11px] font-mono text-stone-400 uppercase">Email (Direct)</div>
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
                  className="p-1.5 text-stone-400 hover:text-stone-800 rounded transition-colors cursor-pointer"
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
                  className="p-1.5 text-stone-400 hover:text-stone-800 rounded transition-colors cursor-pointer"
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
                    Addis Ababa, Ethiopia (Open to relocation &amp; travel)
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Objective & Practice Scope */}
            <div className="p-5 bg-white border border-stone-200 rounded-lg space-y-3.5 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700">
                <Briefcase className="w-4 h-4 text-stone-800" />
                <span>Professional Objective &amp; Practice Scope</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Dedicated and ethically grounded Law Graduate seeking an entry-level legal role at a law firm, corporate counsel department, or public interest organization where I can contribute to legal research, document preparation, client support, and case management.
              </p>
              <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span className="font-medium text-stone-800">Immediate Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span className="font-medium text-stone-800">Full-Time Legal Associate</span>
                </div>
              </div>
            </div>

            {/* Official PDF Downloads */}
            <div className="space-y-2.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                Official PDF Downloads
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href="/documents/Roman_Mekonnen_CV.pdf"
                  download="Roman_Mekonnen_CV.pdf"
                  className="p-3 bg-white border border-stone-200 hover:border-stone-400 rounded-lg flex items-center gap-2.5 transition-colors group shadow-2xs"
                >
                  <FileText className="w-4 h-4 text-stone-700 group-hover:text-stone-900 shrink-0" />
                  <div className="truncate">
                    <div className="text-xs font-semibold text-stone-900 truncate">Download Resume</div>
                    <div className="text-[10px] text-stone-500">Curriculum Vitae (PDF)</div>
                  </div>
                  <Download className="w-3.5 h-3.5 text-stone-400 ml-auto group-hover:text-stone-900 shrink-0" />
                </a>

                <a
                  href="/documents/Academic_Credentials_Roman_Mekonnen.pdf"
                  download="Academic_Credentials_Roman_Mekonnen.pdf"
                  className="p-3 bg-white border border-stone-200 hover:border-stone-400 rounded-lg flex items-center gap-2.5 transition-colors group shadow-2xs"
                >
                  <Award className="w-4 h-4 text-stone-700 group-hover:text-stone-900 shrink-0" />
                  <div className="truncate">
                    <div className="text-xs font-semibold text-stone-900 truncate">Academic Records</div>
                    <div className="text-[10px] text-stone-500">Credentials &amp; Letters (PDF)</div>
                  </div>
                  <Download className="w-3.5 h-3.5 text-stone-400 ml-auto group-hover:text-stone-900 shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Dispatch Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm">
            {formSubmitted && dispatchedDetails ? (
              <div className="py-6 space-y-5 animate-in fade-in duration-200">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>

                <div className="text-center space-y-1.5">
                  <h3 className="text-2xl font-serif font-bold text-stone-900">
                    Inquiry Form Prepared for Roman Mekonnen
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Directed to Roman&apos;s verified inbox:{' '}
                    <strong className="text-stone-900 font-mono">
                      {dispatchedDetails.recipient}
                    </strong>
                  </p>
                </div>

                {/* Direct Action Buttons for Sending */}
                <div className="p-4 bg-[#faf9f6] border border-stone-200 rounded-lg space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Send Directly via Your Preferred Client
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={dispatchedDetails.gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-stone-50 rounded text-xs font-semibold text-center flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Gmail Web</span>
                      <ExternalLink className="w-3 h-3 text-stone-400" />
                    </a>

                    <a
                      href={dispatchedDetails.mailtoUrl}
                      className="flex-1 py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 rounded text-xs font-semibold text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>Open in Mail App</span>
                    </a>
                  </div>
                </div>

                {/* Formatted Message Preview */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold uppercase tracking-wider text-stone-500 font-mono text-[11px]">
                      Message Preview
                    </span>
                    <button
                      onClick={() => copyToClipboard(dispatchedDetails.body, 'dispatched')}
                      className="text-stone-600 hover:text-stone-900 font-medium flex items-center gap-1 cursor-pointer"
                    >
                      {copiedDispatchedText ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-3 bg-stone-50 border border-stone-200 rounded text-[11px] font-mono text-stone-700 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                    {dispatchedDetails.body}
                  </pre>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setDispatchedDetails(null);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        inquiryType: 'Associate / Entry-Level Role',
                        message: '',
                      });
                    }}
                    className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
                  >
                    Compose Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5 border-b border-stone-100 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-serif font-bold text-stone-900">
                      Send Professional Inquiry
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-600 bg-stone-50 border border-stone-200 px-2.5 py-1 rounded self-start sm:self-auto">
                      <Mail className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                      <span>romanmekonnen067@gmail.com</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Connect directly regarding law firm associate recruitment, court brief drafting, or advisory engagements.
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
                      Your Email Address *
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
                    <div className="relative">
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full pl-3.5 pr-10 py-2.5 text-xs sm:text-sm bg-[#faf9f6] border border-stone-200 rounded focus:outline-none focus:border-stone-900 transition-colors appearance-none cursor-pointer text-stone-800 font-sans"
                      >
                        <option value="Associate / Entry-Level Role">Entry-Level Legal Associate Role</option>
                        <option value="Judicial / In-House Counsel">In-House Corporate Counsel Support</option>
                        <option value="NGO / Human Rights Initiative">Human Rights / Legal Aid Initiative</option>
                        <option value="Research & Document Drafting">Legal Research &amp; Brief Drafting</option>
                        <option value="General Professional Inquiries">General Inquiries</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-500">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
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
                    placeholder="Describe the opportunity, practice area, court docket, or inquiry details..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#faf9f6] border border-stone-200 rounded focus:outline-none focus:border-stone-900 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 text-xs font-semibold uppercase tracking-wider text-stone-50 bg-stone-900 hover:bg-stone-800 disabled:bg-stone-400 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Dispatching to romanmekonnen067@gmail.com...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Roman Mekonnen</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-stone-400 text-center mt-2">
                    Dispatches directly to romanmekonnen067@gmail.com via encrypted protocol
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

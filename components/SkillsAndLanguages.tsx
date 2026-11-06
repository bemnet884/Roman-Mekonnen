'use client';

import React from 'react';
import { Check, Globe, Shield, Laptop, Layers } from 'lucide-react';

export default function SkillsAndLanguages() {
  return (
    <section className="py-16 md:py-20 border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Section Introduction (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
              Capabilities &amp; Proficiencies
            </div>
            <h2 className="text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Substantive law skills, verified language proficiency, and technical tools.
            </h2>
            <p className="text-sm text-stone-600 font-sans leading-relaxed">
              Equipped with a solid foundation in procedural law, rigorous case file management, and bilingual communication for courtrooms and corporate counsel.
            </p>
          </div>

          {/* Detailed Matrices (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Legal Skills Grid */}
            <div className="bg-[#faf9f6] border border-stone-200 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 uppercase tracking-wider">
                <Shield className="w-4 h-4 text-stone-800" />
                <span>Core Legal Competencies</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Legal Research &amp; Writing</div>
                    <div className="text-xs text-stone-500">Statutory interpretation &amp; cassation rulings</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Judicial &amp; Contract Drafting</div>
                    <div className="text-xs text-stone-500">Supervised orders, petitions &amp; legal forms</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Court Docket &amp; Case Custody</div>
                    <div className="text-xs text-stone-500">Hearing preparation &amp; record tracking</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Confidential Client Interviewing</div>
                    <div className="text-xs text-stone-500">Fact-finding &amp; counseling ethics</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Negotiation &amp; Conflict Resolution</div>
                    <div className="text-xs text-stone-500">Pre-trial consensus &amp; dispute mitigation</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Professional Ethics &amp; Decorum</div>
                    <div className="text-xs text-stone-500">Bench compliance &amp; punctuality record</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages and Digital Skills Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Languages */}
              <div className="bg-[#faf9f6] border border-stone-200 rounded-lg p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 uppercase tracking-wider">
                  <Globe className="w-4 h-4 text-stone-800" />
                  <span>Languages</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="border-b border-stone-200/80 pb-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-stone-900 font-serif">Amharic</span>
                      <span className="text-xs text-stone-500 font-medium">Native Language</span>
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Fluent in courtroom oral discourse, formal written pleadings, and community consultation.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-stone-900 font-serif">English</span>
                      <span className="text-xs text-stone-500 font-medium">Professional Working Proficiency</span>
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Certified medium of legal education at Bahir Dar University School of Law. High secondary distinction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Digital Systems */}
              <div className="bg-[#faf9f6] border border-stone-200 rounded-lg p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 uppercase tracking-wider">
                  <Laptop className="w-4 h-4 text-stone-800" />
                  <span>Digital &amp; Productivity</span>
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                    <span>Legal Document Automation (MS Word)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                    <span>Case Registry &amp; Excel Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                    <span>Digital Statutory Repositories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                    <span>Secure Confidential Communications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

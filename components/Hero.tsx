'use client';

import React, { useState } from 'react';
import {
  ArrowUpRight,
  Scale,
  ShieldCheck,
  Mail,
  MapPin,
  Landmark,
  BookOpen,
  Award,
  CheckCircle2,
  FileCheck2,
  Download,
  FileText,
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'bench' | 'thesis' | 'faculty'>('bench');

  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Unboxed Kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 uppercase">
                <Scale className="w-4 h-4 text-stone-700" />
                <span>Legal Professional &amp; LL.B Graduate</span>
                <span aria-hidden="true" className="text-stone-300">/</span>
                <span>Bahir Dar University</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-serif font-bold tracking-tight text-stone-900 leading-[1.14] text-balance">
                Disciplined legal analysis, courtroom rigor, and ethical advocacy.
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed max-w-xl">
                Bachelor of Laws (LL.B) graduate from Bahir Dar University School of Law with verified judicial internship experience across Bahir Dar Woreda Court and Gambella First Instance Court. Dedicated to high-standard legal research, judicial document preparation, and rights-based advocacy.
              </p>

              {/* Unboxed Metadata Strip */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-stone-500 pt-1">
                <span className="flex items-center gap-1.5 font-medium text-stone-700">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  Addis Ababa, Ethiopia
                </span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>LL.B Degree (June 2026)</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span className="font-mono tabular-nums font-medium text-stone-700">75% Exit Exam</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>English &amp; Amharic Fluency</span>
              </div>
            </div>

            {/* Action & Download Buttons */}
            <div className="pt-8 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#experience"
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-50 bg-stone-900 hover:bg-stone-800 rounded transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>View Court Record</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#credentials"
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded transition-colors inline-flex items-center gap-2"
                >
                  <span>Examine Credentials</span>
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900 transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Directly</span>
                </a>
              </div>

              {/* Direct PDF Downloads */}
              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <a
                  href="/documents/Roman_Mekonnen_CV.pdf"
                  download="Roman_Mekonnen_CV.pdf"
                  className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded transition-colors inline-flex items-center gap-2 shadow-2xs"
                >
                  <FileText className="w-3.5 h-3.5 text-stone-700" />
                  <span>Download Resume (PDF)</span>
                </a>
                <a
                  href="/documents/Academic_Credentials_Roman_Mekonnen.pdf"
                  download="Academic_Credentials_Roman_Mekonnen.pdf"
                  className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded transition-colors inline-flex items-center gap-2 shadow-2xs"
                >
                  <Award className="w-3.5 h-3.5 text-stone-700" />
                  <span>Download Academic Credentials (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Judicial Dossier & Case File Docket */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-white border border-stone-200 rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
              {/* Dossier Header Bar */}
              <div className="px-5 py-3.5 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
                <div className="flex items-center gap-2.5">
                  <Scale className="w-4 h-4 text-stone-300" />
                  <span className="text-xs font-mono font-medium tracking-wider uppercase text-stone-200">
                    Dossier: ET-LAW-2026-RMK
                  </span>
                </div>
                <div className="text-[11px] font-mono text-stone-400">
                  Judicial &amp; Research Portfolio
                </div>
              </div>

              {/* Dossier Interactive Switcher Tabs */}
              <div className="grid grid-cols-3 border-b border-stone-200 bg-[#faf9f6] text-xs">
                <button
                  onClick={() => setActiveTab('bench')}
                  className={`py-3 px-3 text-center font-medium transition-colors cursor-pointer border-b-2 flex items-center justify-center gap-1.5 ${
                    activeTab === 'bench'
                      ? 'border-stone-900 text-stone-900 bg-white font-semibold'
                      : 'border-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-100/60'
                  }`}
                >
                  <Landmark className="w-3.5 h-3.5" />
                  <span>Court Bench</span>
                </button>

                <button
                  onClick={() => setActiveTab('thesis')}
                  className={`py-3 px-3 text-center font-medium transition-colors cursor-pointer border-b-2 flex items-center justify-center gap-1.5 ${
                    activeTab === 'thesis'
                      ? 'border-stone-900 text-stone-900 bg-white font-semibold'
                      : 'border-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-100/60'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Legal Thesis</span>
                </button>

                <button
                  onClick={() => setActiveTab('faculty')}
                  className={`py-3 px-3 text-center font-medium transition-colors cursor-pointer border-b-2 flex items-center justify-center gap-1.5 ${
                    activeTab === 'faculty'
                      ? 'border-stone-900 text-stone-900 bg-white font-semibold'
                      : 'border-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-100/60'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Endorsement</span>
                </button>
              </div>

              {/* Dossier Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5 bg-white">
                {activeTab === 'bench' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-3">
                      <div>
                        <div className="text-[11px] font-mono text-stone-500 uppercase">
                          Judicial Experience Log
                        </div>
                        <h3 className="text-base font-serif font-bold text-stone-900 mt-0.5">
                          First Instance &amp; Woreda Court Rotations
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                        2025 – 2026
                      </span>
                    </div>

                    <div className="space-y-3 text-xs text-stone-700">
                      <div className="p-3 bg-stone-50 border border-stone-200/80 rounded space-y-1">
                        <div className="font-semibold text-stone-900 flex items-center justify-between">
                          <span>Bahir Dar Woreda Court Bench</span>
                          <span className="text-[10px] text-stone-400 font-mono">Feb – May 2026</span>
                        </div>
                        <p className="text-stone-600 leading-relaxed">
                          Assisted judges in formulating written judgments under judicial supervision; analyzed witness testimony, trial exhibits, and drafted procedural court filing bundles.
                        </p>
                      </div>

                      <div className="p-3 bg-stone-50 border border-stone-200/80 rounded space-y-1">
                        <div className="font-semibold text-stone-900 flex items-center justify-between">
                          <span>Gambella First Instance Court</span>
                          <span className="text-[10px] text-stone-400 font-mono">July – Sept 2025</span>
                        </div>
                        <p className="text-stone-600 leading-relaxed">
                          Assigned to civil and criminal trials; conducted closed-record evaluations and judicial docket monitoring certified by Court President Jay Ojulu Kowt.
                        </p>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center gap-2 text-xs text-stone-600">
                      <FileCheck2 className="w-4 h-4 text-stone-800 shrink-0" />
                      <span>Certified by official court seals and presiding judge records</span>
                    </div>
                  </div>
                )}

                {activeTab === 'thesis' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-3">
                      <div>
                        <div className="text-[11px] font-mono text-stone-500 uppercase">
                          Featured Jurisprudence Monograph
                        </div>
                        <h3 className="text-base font-serif font-bold text-stone-900 mt-0.5">
                          Child Marriage &amp; Legal Frameworks
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                        Bahir Dar City
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs text-stone-700">
                      <p className="text-stone-600 leading-relaxed">
                        Evaluated the divergence between statutory protections (RFC Art. 7, Criminal Code Art. 648, FDRE Const. Arts. 34/35) and customary marital solemnizations.
                      </p>

                      <div className="p-3 bg-stone-50 border border-stone-200/80 rounded space-y-2">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-800">
                          Core Statutory Questions
                        </div>
                        <div className="space-y-1 text-stone-600 text-[11px]">
                          <div>· Strict minimum age (18) vs. judicial exceptions enforcement</div>
                          <div>· Interoperability with Vital Events Registration Agency (VERA)</div>
                          <div>· Pre-trial protection orders for vulnerable juveniles</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center gap-2 text-xs text-stone-600">
                      <BookOpen className="w-4 h-4 text-stone-800 shrink-0" />
                      <span>Complete research abstract available in scholarly section below</span>
                    </div>
                  </div>
                )}

                {activeTab === 'faculty' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-3">
                      <div>
                        <div className="text-[11px] font-mono text-stone-500 uppercase">
                          Academic &amp; Leadership Commendation
                        </div>
                        <h3 className="text-base font-serif font-bold text-stone-900 mt-0.5">
                          Vice Dean Testimonial
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                        Official Seal
                      </span>
                    </div>

                    <div className="p-3.5 bg-stone-50 border border-stone-200/80 rounded space-y-2">
                      <blockquote className="text-xs sm:text-sm text-stone-800 italic font-serif leading-relaxed">
                        &ldquo;A truly exceptional student who possesses outstanding academic abilities... She is a profoundly assertive, gifted, and diligent young woman. She was one of the highest-scoring students in the Law of Succession course.&rdquo;
                      </blockquote>
                      <div className="text-[11px] text-stone-500 font-sans border-t border-stone-200/60 pt-2">
                        — <strong className="text-stone-800">Mekashaw Chane Gashaw (LL.B, LL.M)</strong>, Vice Dean, Bahir Dar University School of Law
                      </div>
                    </div>

                    <div className="space-y-1 text-xs text-stone-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-stone-800 shrink-0" />
                        <span>Human Rights Club Advocate &amp; Peer Counselor</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-stone-800 shrink-0" />
                        <span>English medium of instruction officially verified</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Controls of the Docket Card */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <a
                    href="#credentials"
                    className="text-stone-900 font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Inspect Original Seals &amp; Signatures</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="#practice"
                    className="text-stone-500 hover:text-stone-900 transition-colors"
                  >
                    View Practice Areas &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Metric & Proof Strip Below the Split */}
        <div className="mt-14 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tabular-nums">
              2 Courts
            </div>
            <div className="text-xs text-stone-500 font-medium">
              Judicial Internships
            </div>
            <p className="text-[11px] text-stone-400">
              Bahir Dar Woreda &amp; Gambella First Instance
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tabular-nums">
              75% Score
            </div>
            <div className="text-xs text-stone-500 font-medium">
              National Law Exit Exam
            </div>
            <p className="text-[11px] text-stone-400">
              Certified by Ministry of Education &amp; BDU
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Top Student
            </div>
            <div className="text-xs text-stone-500 font-medium">
              Law of Succession
            </div>
            <p className="text-[11px] text-stone-400">
              Officially commended by Faculty Leadership
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Monograph
            </div>
            <div className="text-xs text-stone-500 font-medium">
              Child Marriage Law
            </div>
            <p className="text-[11px] text-stone-400">
              Field research &amp; policy interventions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

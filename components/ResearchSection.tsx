'use client';

import React, { useState } from 'react';
import { BookOpen, FileCheck, BookMarked, GraduationCap, ArrowRight, X, ExternalLink } from 'lucide-react';

export default function ResearchSection() {
  const [monographOpen, setMonographOpen] = useState(false);

  return (
    <section id="research" className="py-16 md:py-24 border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-14">
          <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
            Scholarly Inquiries &amp; Academic Distinction
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Rigorous research on Ethiopian family law and rights protections.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Combining statutory analysis of Ethiopian codes with empirical community realities, particularly regarding juvenile protections and customary practices.
          </p>
        </div>

        {/* Featured Research Card + Coursework Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Monograph Card (8 cols) */}
          <div className="lg:col-span-7 bg-[#faf9f6] border border-stone-200 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-stone-500">
                <BookMarked className="w-4 h-4 text-stone-800" />
                <span>Undergraduate Law Monograph (LL.B)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight">
                &ldquo;Child Marriage in Bahir Dar City: Legal Frameworks, Socio-Legal Realities, and Community-Based Interventions&rdquo;
              </h3>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500">
                <span className="font-medium text-stone-700">Bahir Dar University School of Law</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>Jurisprudential Monograph</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span className="text-stone-700 font-medium">Family &amp; Human Rights Law</span>
              </div>

              <p className="text-sm text-stone-600 font-sans leading-relaxed pt-2">
                This study investigated the friction between statutory prohibitions against underage marriage (under Article 7 of the Revised Family Code and Article 648 of the Criminal Code of Ethiopia) and entrenched customary norms in Bahir Dar and surrounding peri-urban kebeles.
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  Statutory Instruments Analyzed
                </div>
                <div className="text-xs text-stone-600 space-y-1">
                  <div>· FDRE Constitution, 1995 (Proclamation No. 1/1995, Articles 34 &amp; 35)</div>
                  <div>· Revised Family Code, 2000 (Proclamation No. 213/2000, Marriage Age Invariants)</div>
                  <div>· Criminal Code of the FDRE, 2004 (Proclamation No. 414/2004, Art. 648)</div>
                  <div>· UN Convention on the Rights of the Child (CRC) &amp; African Charter on Rights of Child</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-200 flex items-center justify-between">
              <button
                onClick={() => setMonographOpen(true)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-50 bg-stone-900 hover:bg-stone-800 rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Read Research Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs text-stone-400 font-mono">
                Full thesis documented in portfolio
              </span>
            </div>
          </div>

          {/* Academic Highlights & Coursework (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="bg-[#faf9f6] border border-stone-200 rounded-lg p-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase mb-3">
                <GraduationCap className="w-4 h-4 text-stone-800" />
                <span>Academic Record Highlights</span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="border-b border-stone-200 pb-2.5">
                  <div className="font-semibold text-stone-900 font-serif text-sm">
                    Top Student in Law of Succession
                  </div>
                  <div className="text-stone-500 mt-0.5">
                    Attained highest grade in batch under Vice Dean Mekashaw Chane Gashaw (LL.B, LL.M).
                  </div>
                </div>

                <div className="border-b border-stone-200 pb-2.5">
                  <div className="font-semibold text-stone-900 font-serif text-sm">
                    75% in National Law Exit Exam
                  </div>
                  <div className="text-stone-500 mt-0.5">
                    Official benchmark examination verifying comprehensive mastery across civil, criminal, and constitutional law.
                  </div>
                </div>

                <div className="border-b border-stone-200 pb-2.5">
                  <div className="font-semibold text-stone-900 font-serif text-sm">
                    90 / 100 in Civics &amp; Ethical Studies
                  </div>
                  <div className="text-stone-500 mt-0.5">
                    National secondary assessment reflecting long-standing constitutional and civic aptitude.
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-stone-900 font-serif text-sm">
                    Rank 1 Secondary Academic Distinction
                  </div>
                  <div className="text-stone-500 mt-0.5">
                    Graduated top of class in 9th, 10th, 11th, and 12th grades with exemplary conduct marks (A).
                  </div>
                </div>
              </div>
            </div>

            {/* Language of Instruction Note */}
            <div className="bg-white border border-stone-200 rounded-lg p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-800 uppercase mb-1">
                <FileCheck className="w-4 h-4 text-stone-700" />
                <span>Certified English Instruction</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Officially confirmed by Bahir Dar University School of Law Registrar that the medium of instruction for all law courses is English.
              </p>
            </div>
          </div>
        </div>

        {/* Monograph Detail Modal */}
        {monographOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div
              className="bg-white border border-stone-200 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Undergraduate Law Monograph (LL.B) · Bahir Dar University
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
                    Child Marriage in Bahir Dar City: Legal Frameworks, Socio-Legal Realities, and Community-Based Interventions
                  </h3>
                  <div className="text-xs text-stone-500 mt-1">
                    Researcher: Roman Mekonnen Kassa · School of Law
                  </div>
                </div>
                <button
                  onClick={() => setMonographOpen(false)}
                  className="p-1.5 text-stone-400 hover:text-stone-800 rounded transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                    1. Research Background &amp; Problem Statement
                  </h4>
                  <p>
                    Child marriage represents a pervasive violation of fundamental human rights, disproportionately impairing young girls’ educational attainment, bodily autonomy, and psychological well-being. While Ethiopia&apos;s Revised Family Code explicitly sets the minimum age of marriage at 18 for both sexes, deep-rooted patriarchal customs, economic pressures, and informal marital arrangements often circumvent statutory protections.
                  </p>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                    2. Legal Frameworks &amp; Statutory Analysis
                  </h4>
                  <p>
                    The monograph critically reviewed:
                  </p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-stone-600">
                    <li>
                      <strong>Revised Family Code (RFC) Proclamation No. 213/2000, Article 7:</strong> Established statutory marriage age of 18 years, evaluating the judicial discretion exceptions and enforcement limitations.
                    </li>
                    <li>
                      <strong>Criminal Code of Ethiopia, 2004, Article 648:</strong> Criminalization of contracting, solemnizing, or encouraging early marriage without free and full consent.
                    </li>
                    <li>
                      <strong>FDRE Constitution, Articles 34 &amp; 35:</strong> Protection of the rights of women and the right of equality in marital and family relationships.
                    </li>
                    <li>
                      <strong>International Treaties:</strong> Ethiopia&apos;s obligations under the CRC, CEDAW, and the African Charter on the Rights and Welfare of the Child.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                    3. Key Empirical Findings &amp; Enforcement Gaps
                  </h4>
                  <p>
                    Field observations in Bahir Dar City revealed that informal wedding solemnizations frequently occur without registration at Vital Events Registration Agency (VERA) offices. Victims and their families often avoid reporting violations to woreda courts due to fear of social ostracization or familial retaliation.
                  </p>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                    4. Concrete Policy &amp; Judicial Recommendations
                  </h4>
                  <p>
                    The research concluded with practical proposals:
                  </p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-stone-600">
                    <li>Mandatory cross-verification of birth records between schools, health clinics, and local kebele administrative offices.</li>
                    <li>Establishing specialized judicial fast-track hearings in woreda courts for child protection injunctions.</li>
                    <li>Strengthening community legal literacy campaigns in collaboration with youth clubs, religious institutions, and legal aid clinics.</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex justify-end gap-3">
                <button
                  onClick={() => setMonographOpen(false)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-700 bg-stone-100 hover:bg-stone-200 rounded transition-colors"
                >
                  Close Overview
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

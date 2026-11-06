'use client';

import React, { useState } from 'react';
import { Scale, FileText, Users, Briefcase, CheckCircle2, ChevronRight } from 'lucide-react';

interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  overview: string;
  keyDuties: string[];
  relevance: string;
}

const practices: PracticeArea[] = [
  {
    id: 'litigation',
    title: 'Litigation & Court Proceedings',
    subtitle: 'Civil & Criminal Trial Support',
    icon: Scale,
    overview:
      'Direct bench observation across woreda and first instance courtrooms. Skilled at tracking party arguments, evidentiary admissibility, and judicial decorum.',
    keyDuties: [
      'Observing and analyzing civil disputes, contract claims, and criminal indictments',
      'Documenting bench proceedings, evidentiary submissions, and witness testimony',
      'Assisting presiding judges with procedural case summaries and statutory references',
      'Tracking court dockets, hearing dates, and registry filing protocols',
    ],
    relevance: 'Trained at Bahir Dar Woreda Court & Gambella First Instance Court',
  },
  {
    id: 'drafting',
    title: 'Legal Drafting & Documentation',
    subtitle: 'Judicial Orders, Contracts & Forms',
    icon: FileText,
    overview:
      'Hands-on experience assisting judges in drafting rulings and preparing court filing records under strict supervisory standards.',
    keyDuties: [
      'Drafting initial judgment summaries and formal orders under judicial supervision',
      'Preparing standard legal forms, notices of appearance, and dispute petitions',
      'Reviewing contract clauses and lease agreements for legal compliance',
      'Synthesizing primary statutory authorities and supreme court cassation precedents',
    ],
    relevance: 'Demonstrated in Bahir Dar Woreda Court internship & university drafting clinics',
  },
  {
    id: 'human-rights',
    title: 'Human Rights & Victim Advocacy',
    subtitle: 'Child Welfare & Community Justice',
    icon: Users,
    overview:
      'Passionate advocate committed to protecting vulnerable parties, victims of rights violations, and promoting gender-equitable justice.',
    keyDuties: [
      'Conducted field research on child marriage prevention under the Ethiopian Revised Family Code',
      'Active advocate in the Bahir Dar University School of Law Human Rights Club',
      'Provided peer counseling, legal literacy outreach, and rights sensitization',
      'Specialized focus on juvenile protection, rights of women, and victim restitution',
    ],
    relevance: 'Commended by Vice Dean Mekashaw Chane Gashaw for dedicated advocacy',
  },
  {
    id: 'case-management',
    title: 'Case Management & Legal Ethics',
    subtitle: 'Record Custody & Client Counseling',
    icon: Briefcase,
    overview:
      'Disciplined in maintaining strict client confidentiality, managing high-volume docket archives, and delivering reliable case support.',
    keyDuties: [
      'Cataloging and reviewing active and closed case dockets in court archives',
      'Organizing structured evidence bundles and exhibits for trial hearings',
      'Client interviewing preparation, active listening, and ethical fact-finding',
      'Adhering to strict professional ethics, confidentiality, and procedural deadlines',
    ],
    relevance: 'Recognized for punctuality, meticulous record custody, and professional ethics',
  },
];

export default function PracticeAreas() {
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea>(practices[0]);

  return (
    <section id="practice" className="py-16 md:py-24 border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
            Core Competencies &amp; Legal Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Practice disciplines developed through courtroom practice and academic rigor.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Prepared to deliver immediate value to law firms, corporate legal departments, non-governmental organizations, and public interest institutions.
          </p>
        </div>

        {/* 2-Column Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Practice List Selection (Left) */}
          <div className="lg:col-span-5 space-y-2.5">
            {practices.map((practice) => {
              const Icon = practice.icon;
              const isSelected = selectedPractice.id === practice.id;
              return (
                <button
                  key={practice.id}
                  onClick={() => setSelectedPractice(practice)}
                  className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-stone-900 border-stone-900 text-stone-50 shadow-sm'
                      : 'bg-[#faf9f6] border-stone-200 text-stone-800 hover:border-stone-300 hover:bg-stone-100/70'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2 rounded ${
                        isSelected ? 'bg-stone-800 text-stone-100' : 'bg-white text-stone-700 border border-stone-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold font-serif">
                        {practice.title}
                      </div>
                      <div
                        className={`text-xs ${
                          isSelected ? 'text-stone-300' : 'text-stone-500'
                        }`}
                      >
                        {practice.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-stone-300 translate-x-1' : 'text-stone-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Practice Deep-Dive Dossier (Right) */}
          <div className="lg:col-span-7 bg-[#faf9f6] border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-5">
              <div className="text-xs text-stone-500 font-mono uppercase tracking-wider mb-1">
                Area Dossier
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                {selectedPractice.title}
              </h3>
              <p className="text-sm text-stone-600 font-sans mt-2 leading-relaxed">
                {selectedPractice.overview}
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                Key Demonstrated Responsibilities &amp; Capabilities
              </div>
              <ul className="space-y-3">
                {selectedPractice.keyDuties.map((duty, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
              <div className="font-medium text-stone-800">
                Practical Background:
              </div>
              <div className="italic text-stone-600">
                {selectedPractice.relevance}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

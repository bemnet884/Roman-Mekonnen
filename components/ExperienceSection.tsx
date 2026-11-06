'use client';

import React from 'react';
import { Landmark, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';

interface ExperienceItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  authorityReference?: string;
  summary: string;
  accomplishments: string[];
  type: 'court' | 'advocacy';
}

const experiences: ExperienceItem[] = [
  {
    period: 'Feb 23, 2026 – May 13, 2026',
    role: 'Legal Intern & Judicial Assistant',
    institution: 'Bahir Dar Woreda Court',
    location: 'Bahir Dar, Amhara Region',
    authorityReference: 'Presiding Judicial Bench Supervision',
    summary:
      'Immersive courtroom internship focused on trial proceedings, judicial reasoning, and procedural case administration.',
    accomplishments: [
      'Attended and analyzed live civil, family, contract, and criminal bench proceedings',
      'Assisted presiding judges in drafting trial judgment summaries and reasoned orders under supervision',
      'Prepared formal court filing bundles, summonses, and organized structured case dossiers for hearings',
      'Studied evidentiary objections, witness examination dynamics, and judicial deliberative reasoning',
    ],
    type: 'court',
  },
  {
    period: 'July 14, 2025 – Sept 2, 2025',
    role: 'Legal Intern',
    institution: 'Gambella First Instance Court',
    location: 'Gambella Town Administration',
    authorityReference: 'Certified by Court President Jay Ojulu Kowt (Ref. 05252/2017)',
    summary:
      'Official judicial internship evaluating both civil and criminal trial dockets, closed archives, and regional administration procedures.',
    accomplishments: [
      'Assigned to attend ongoing criminal and civil trials, documenting case progress and procedural orders',
      'Reviewed and cataloged closed case records in the court repository to analyze judicial disposition trends',
      'Maintained exemplary punctuality and adherence to court decorum, recognized in formal presidential letter',
      'Gained deep practical exposure to federal and regional legal frameworks across a diverse demographic setting',
    ],
    type: 'court',
  },
  {
    period: '2024 – 2026',
    role: 'Student Advocate & Peer Counseling Lead',
    institution: 'Bahir Dar University School of Law Human Rights Club',
    location: 'Bahir Dar, Ethiopia',
    authorityReference: 'Commended by Vice Dean Mekashaw Chane Gashaw (LL.B, LL.M)',
    summary:
      'Dedicated leadership in student counseling, peer mentorship, and advocacy for victim protections and human rights.',
    accomplishments: [
      'Served as an active student advocate committed to victims’ rights and gender-equitable justice',
      'Led student counseling and team supervision sessions, fostering conflict resolution and mutual support',
      'Organized campus legal awareness forums addressing early marriage, gender violence, and legal literacy',
      'Maintained high academic standing while actively fulfilling community service and extracurricular mandates',
    ],
    type: 'advocacy',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-stone-200 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
              Courtroom Record &amp; Practical Training
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Verified judicial internships and institutional service.
            </h2>
          </div>
          <div className="text-xs text-stone-500 font-mono">
            Direct bench exposure · Judicial drafting · Certified dockets
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 hover:border-stone-300 transition-colors shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-stone-100 pb-5 mb-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase">
                    <Landmark className="w-4 h-4 text-stone-800" />
                    <span>{exp.institution}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500">
                    <span className="flex items-center gap-1 font-medium text-stone-700">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      {exp.period}
                    </span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="flex items-center gap-1 text-stone-600">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {exp.authorityReference && (
                  <div className="lg:text-right shrink-0">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-stone-600 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded">
                      <Award className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                      <span>{exp.authorityReference}</span>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-sm text-stone-600 font-sans mb-5 leading-relaxed">
                {exp.summary}
              </p>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-800 mb-3">
                  Demonstrated Contributions &amp; Duties
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.accomplishments.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

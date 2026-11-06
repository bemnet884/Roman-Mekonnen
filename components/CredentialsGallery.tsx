'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Award,
  FileText,
  Landmark,
  Scale,
  CheckCircle2,
  X,
  Eye,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ShieldCheck,
} from 'lucide-react';

interface CredentialDoc {
  id: string;
  title: string;
  issuer: string;
  date: string;
  reference?: string;
  summary: string;
  imagePath: string;
  category: 'degree' | 'recommendation' | 'court' | 'language' | 'academic';
  categoryLabel: string;
  icon: React.ElementType;
}

const credentials: CredentialDoc[] = [
  {
    id: 'graduation-cert',
    title: 'Bachelor of Laws (LL.B) Graduation Certificate',
    issuer: 'Bahir Dar University School of Law',
    date: 'June 25, 2026',
    reference: 'Dean & Director Seal · National Exit Benchmark: 75%',
    summary:
      'Official graduation certification confirming award of Bachelor Degree in Law (LL.B) with a Cumulative GPA of 2.60 and passing the National Law Exit Examination with a score of 75%.',
    imagePath: '/documents/graduation_certificate.jpg',
    category: 'degree',
    categoryLabel: 'University Law Degree',
    icon: GraduationCapIcon,
  },
  {
    id: 'recommendation-letter',
    title: 'Faculty Letter of Recommendation',
    issuer: 'Vice Dean Mekashaw Chane Gashaw (LL.B, LL.M)',
    date: 'June 28, 2026',
    reference: 'Bahir Dar University School of Law Ref: Official Endorsement',
    summary:
      'Attests to Roman’s exceptional academic abilities, analytical strength, status as top student in Law of Succession, and leadership in the Human Rights Club.',
    imagePath: '/documents/recommendation_letter.jpg',
    category: 'recommendation',
    categoryLabel: 'Faculty Endorsement',
    icon: Award,
  },
  {
    id: 'court-internship-letter',
    title: 'Court Internship Experience Certification',
    issuer: 'President Jay Ojulu Kowt, Gambella First Instance Court',
    date: 'September 1, 2025',
    reference: 'Official Court Ref. No. 05252/2017 · Presidential Seal',
    summary:
      'Official judicial commendation verifying attendance and documentation of criminal and civil trials, review of closed records, and punctual court service.',
    imagePath: '/documents/court_internship_letter.jpg',
    category: 'court',
    categoryLabel: 'Judicial Bench Record',
    icon: Landmark,
  },
  {
    id: 'english-medium-cert',
    title: 'English Medium of Instruction Certification',
    issuer: 'Head of the Registrar, Bahir Dar University School of Law',
    date: 'June 30, 2026',
    reference: 'Ref. No. G/A/Reg/112/2018 E.C. · Registrar Seal',
    summary:
      'Official verification confirming that all law degree courses and assessments at Bahir Dar University are conducted exclusively in the English language.',
    imagePath: '/documents/english_medium_cert.jpg',
    category: 'language',
    categoryLabel: 'Official Certification',
    icon: FileText,
  },
  {
    id: 'esslce-cert',
    title: 'National School Leaving Examination Certificate',
    issuer: 'Ministry of Education & NEAEA, Ethiopia',
    date: 'December 2021',
    reference: 'Candidate No. 2904422 · Civics Score: 90 / 100',
    summary:
      'National ESSLCE score certificate showing a standout score of 90 in Civics & Ethical Studies, 63 in English, and strong constitutional aptitude.',
    imagePath: '/documents/esslce_certificate.jpg',
    category: 'academic',
    categoryLabel: 'National Board Record',
    icon: ShieldCheck,
  },
  {
    id: 'transcript-cert',
    title: 'Secondary Academic Transcript (Rank 1)',
    issuer: 'Elay Secondary School Administration',
    date: '2018 – 2021 E.C.',
    reference: 'Student No. 2387964 · Conduct Grade: A',
    summary:
      'Demonstrated consistent academic excellence ranking 1st in class across academic terms with outstanding conduct evaluations (Grade A).',
    imagePath: '/documents/transcript_highschool.jpg',
    category: 'academic',
    categoryLabel: 'Academic Distinction',
    icon: Award,
  },
];

function GraduationCapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

export default function CredentialsGallery() {
  const [activeDoc, setActiveDoc] = useState<CredentialDoc | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const filteredDocs =
    filter === 'all'
      ? credentials
      : credentials.filter((doc) => doc.category === filter);

  const handleOpenDoc = (doc: CredentialDoc) => {
    setActiveDoc(doc);
    setIsZoomed(false);
  };

  return (
    <section id="credentials" className="py-16 md:py-24 border-b border-stone-200 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
              Verified Legal Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Official institutional records, certifications, and recommendations.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
              Every credential is substantiated by official university seals, registrar stamps, and judicial signatures. Click any card to inspect the complete, fitted document scan.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-md shrink-0 self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Records
            </button>
            <button
              onClick={() => setFilter('degree')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'degree'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Law Degree
            </button>
            <button
              onClick={() => setFilter('recommendation')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'recommendation'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Endorsements
            </button>
            <button
              onClick={() => setFilter('court')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'court'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Court Seal
            </button>
          </div>
        </div>

        {/* Text-Only Credential Cards Grid (No Preview Images In Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => {
            const Icon = doc.icon;
            return (
              <div
                key={doc.id}
                onClick={() => handleOpenDoc(doc)}
                className="group bg-white border border-stone-200 hover:border-stone-400 rounded-lg p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-3">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5 text-stone-800 shrink-0" />
                      <span>{doc.categoryLabel}</span>
                    </div>
                    <span className="text-[11px] font-mono text-stone-400">
                      {doc.date}
                    </span>
                  </div>

                  {/* Issuer & Title */}
                  <div className="space-y-1.5">
                    <div className="text-xs text-stone-500 font-medium font-sans">
                      {doc.issuer}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-stone-700 leading-snug">
                      {doc.title}
                    </h3>
                  </div>

                  {/* Summary Text */}
                  <p className="text-xs text-stone-600 font-sans leading-relaxed">
                    {doc.summary}
                  </p>

                  {/* Reference Tag */}
                  {doc.reference && (
                    <div className="text-[11px] font-mono text-stone-600 bg-[#faf9f6] border border-stone-200/80 p-2.5 rounded leading-relaxed">
                      {doc.reference}
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-stone-900 group-hover:underline flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-stone-700" />
                    <span>View Official Credential</span>
                  </span>
                  <span className="text-stone-400 text-xs font-mono group-hover:text-stone-900 transition-colors">
                    Click to Open &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-Screen Document Inspection Modal (Guaranteed 100% Fitted, No Cropping) */}
        {activeDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div
              className="bg-white border border-stone-300 rounded-lg max-w-5xl w-full max-h-[96vh] flex flex-col shadow-2xl overflow-hidden"
              role="dialog"
              aria-modal="true"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-stone-200 flex items-start justify-between gap-4 bg-[#faf9f6]">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                    <span>{activeDoc.issuer}</span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span>{activeDoc.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">
                    {activeDoc.title}
                  </h3>
                  {activeDoc.reference && (
                    <div className="text-xs text-stone-600 font-sans">
                      {activeDoc.reference}
                    </div>
                  )}
                </div>

                {/* Top Action Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 rounded flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    title={isZoomed ? 'Fit image to window' : 'Zoom to examine details'}
                  >
                    {isZoomed ? (
                      <>
                        <ZoomOut className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Fit to Screen</span>
                      </>
                    ) : (
                      <>
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Enlarge Details</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setActiveDoc(null)}
                    className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded cursor-pointer transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Document Viewer: Guaranteed To Fit without being cut off */}
              <div
                className={`flex-1 min-h-0 p-4 sm:p-6 bg-stone-900/90 flex items-center justify-center overflow-auto ${
                  isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <div
                  className={`transition-all duration-200 flex items-center justify-center ${
                    isZoomed
                      ? 'max-w-none w-auto'
                      : 'w-full h-full max-h-[72vh] flex items-center justify-center'
                  }`}
                >
                  <Image
                    src={activeDoc.imagePath}
                    alt={activeDoc.title}
                    width={1400}
                    height={1980}
                    className={`rounded shadow-2xl border border-stone-700/60 bg-white ${
                      isZoomed
                        ? 'w-auto max-w-4xl h-auto'
                        : 'max-h-[70vh] max-w-full w-auto h-auto object-contain block mx-auto'
                    }`}
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Modal Footer with Summary and Fitting Note */}
              <div className="p-4 border-t border-stone-200 bg-[#faf9f6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stone-800 shrink-0" />
                  <span className="font-medium text-stone-800">
                    Official Institutional Document · 100% Unaltered Scan
                  </span>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="text-[11px] text-stone-400 font-mono">
                    {isZoomed ? 'Click image or button to Fit' : 'Click image to Zoom'}
                  </span>
                  <button
                    onClick={() => setActiveDoc(null)}
                    className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-stone-700 bg-stone-200 hover:bg-stone-300 rounded transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

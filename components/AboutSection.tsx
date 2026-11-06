'use client';

import React from 'react';
import {
  Scale,
  Award,
  BookCheck,
  Check,
  FileText,
  Users,
  Compass,
  GraduationCap,
  MapPin,
  Clock,
} from 'lucide-react';

export default function AboutSection() {
  const resumeSkills = [
    'Legal Research & Writing',
    'Drafting & Reviewing Legal Forms',
    'Negotiation & Advocacy',
    'Oral Communication & Client Interviewing',
    'Case Management & Organization',
    'Professional Ethics & Confidentiality',
    'Attention to Detail & Record Management',
    'Time Management & Prioritization',
  ];

  const practiceAnchors = [
    { title: 'Drafting Legal Forms', desc: 'Court pleadings, contracts, petitions & judicial orders' },
    { title: 'Client Advisory & Support', desc: 'Fact-finding interviewing, counseling & consultation' },
    { title: 'Litigation & Dispute Resolution', desc: 'Civil & criminal trial observation & bench support' },
    { title: 'Legal Research & Documentation', desc: 'Statutory interpretation, cassation rulings & briefs' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Structured Professional Profile Dossier (Pure UI, No Image) */}
          <div className="lg:col-span-5 bg-[#faf9f6] border border-stone-200 rounded-lg p-6 sm:p-7 space-y-6 shadow-xs">
            {/* Profile Header */}
            <div className="border-b border-stone-200 pb-5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono font-medium text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-stone-800" />
                  <span>Advocate Profile</span>
                </div>
                <span className="text-[10px] font-mono text-stone-600 bg-white border border-stone-200 px-2 py-0.5 rounded">
                  75% Exit Exam
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-stone-900 tracking-tight">
                Roman Mekonnen Kassa
              </h3>

              <div className="text-xs text-stone-600 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-medium text-stone-800">Law Graduate (LL.B)</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>Bahir Dar University</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>

            {/* Professional Summary (Direct from Resume) */}
            <div className="space-y-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-700">
                Professional Summary
              </div>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Dedicated and ethically grounded Law Graduate from Bahir Dar University, with hands-on court internship experience and proven leadership in student counseling and team supervision. Passionate about the law, legal forms, and delivering practical solutions. Seeking an entry-level legal role at a law firm where I can contribute to legal research, document preparation, client support, and case management.
              </p>
            </div>

            {/* Areas of Practice Interest */}
            <div className="space-y-2.5 pt-1">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-stone-800" />
                <span>Areas of Interest</span>
              </div>
              <div className="space-y-2">
                {practiceAnchors.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-white border border-stone-200/90 rounded text-xs space-y-0.5"
                  >
                    <div className="font-semibold text-stone-900 font-serif">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-stone-500 leading-snug">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Service (Direct from Resume) */}
            <div className="pt-2 border-t border-stone-200 space-y-1.5 text-xs text-stone-600">
              <div className="font-semibold text-stone-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-stone-800" />
                <span>Leadership &amp; Student Counseling</span>
              </div>
              <p className="leading-relaxed text-[11px] text-stone-500">
                Strong background in leadership and service through student counseling and team supervision roles. Experienced in supporting individuals and teams, promoting well-being, and fostering positive outcomes.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Biography & Full Resume Skills Matrix */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
                Professional Profile &amp; Jurisprudential Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-snug">
                An ethically grounded legal advocate trained in procedural discipline.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
              <p>
                Born and educated with high academic honors across Gambella and Bahir Dar, Roman Mekonnen has cultivated a legal trajectory rooted in meticulous statutory interpretation, courtroom decorum, and rights protections for vulnerable parties.
              </p>
              <p>
                Having completed rigorous judicial clerkships at both the woreda court and first instance court levels, Roman pairs substantive mastery of civil and criminal procedure with practical experience drafting judgments, managing case dockets, and analyzing witness testimonies under supervisory judges.
              </p>
            </div>

            {/* The 8 Core Resume Skills Grid */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-800 flex items-center justify-between">
                <span>Core Professional Skills</span>
                <span className="text-[11px] text-stone-400 font-mono font-normal">
                  8 Key Competencies
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {resumeSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-3 bg-[#faf9f6] border border-stone-200 rounded flex items-center gap-2.5 text-xs sm:text-sm text-stone-800 font-medium hover:border-stone-300 transition-colors"
                  >
                    <Check className="w-4 h-4 text-stone-900 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Foundational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#faf9f6] border border-stone-200 rounded-lg space-y-1.5">
                <div className="flex items-center gap-2 font-serif font-bold text-stone-900 text-sm">
                  <BookCheck className="w-4 h-4 text-stone-800" />
                  <span>Statutory Rigor</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Deep familiarity with the FDRE Constitution, Civil Procedure Code, Criminal Code, and Revised Family Code.
                </p>
              </div>

              <div className="p-4 bg-[#faf9f6] border border-stone-200 rounded-lg space-y-1.5">
                <div className="flex items-center gap-2 font-serif font-bold text-stone-900 text-sm">
                  <Award className="w-4 h-4 text-stone-800" />
                  <span>Ethical Decorum</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Strict adherence to professional confidentiality, courtroom punctuality, and evidentiary integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

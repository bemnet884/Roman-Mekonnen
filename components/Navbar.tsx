'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Download, FileText, Award } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadDropdown, setDownloadDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#faf9f6]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between gap-6 sm:gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <Link
          href="/"
          className="text-lg font-serif tracking-tight text-stone-900 font-bold whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors"
        >
          ROMAN MEKONNEN
        </Link>

        {/* Zone 2: Concise Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-stone-600">
          <a
            href="#about"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#practice"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Practice Focus
          </a>
          <a
            href="#experience"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Court Record
          </a>
          <a
            href="#research"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Research
          </a>
          <a
            href="#credentials"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Credentials
          </a>
          <a
            href="#contact"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Actions (Downloads + Get in Touch) */}
        <div className="relative shrink-0 flex items-center gap-2.5">
          {/* Download Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDownloadDropdown(!downloadDropdown)}
              className="px-3.5 py-2 text-xs font-semibold tracking-wide uppercase text-stone-800 bg-white hover:bg-stone-100 border border-stone-200 rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer shadow-2xs"
              aria-expanded={downloadDropdown}
            >
              <Download className="w-3.5 h-3.5 text-stone-700" />
              <span className="hidden sm:inline">Downloads</span>
              <span className="sm:hidden">PDF</span>
            </button>

            {downloadDropdown && (
              <div
                className="absolute right-0 mt-2 w-64 bg-white border border-stone-200 rounded-lg shadow-xl py-2 z-50 text-xs animate-in fade-in slide-in-from-top-1 duration-150"
                onMouseLeave={() => setDownloadDropdown(false)}
              >
                <div className="px-3.5 py-1.5 text-stone-400 font-mono text-[10px] uppercase tracking-wider border-b border-stone-100">
                  Official PDF Documents
                </div>
                <a
                  href="/documents/Roman_Mekonnen_CV.pdf"
                  download="Roman_Mekonnen_CV.pdf"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 text-stone-700 hover:bg-stone-50 hover:text-stone-900 transition-colors"
                  onClick={() => setDownloadDropdown(false)}
                >
                  <FileText className="w-4 h-4 text-stone-700 shrink-0" />
                  <div>
                    <div className="font-semibold text-stone-900">Download Resume (CV)</div>
                    <div className="text-[10px] text-stone-400">Complete curriculum vitae (PDF)</div>
                  </div>
                </a>
                <a
                  href="/documents/Academic_Credentials_Roman_Mekonnen.pdf"
                  download="Academic_Credentials_Roman_Mekonnen.pdf"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 text-stone-700 hover:bg-stone-50 hover:text-stone-900 transition-colors border-t border-stone-100"
                  onClick={() => setDownloadDropdown(false)}
                >
                  <Award className="w-4 h-4 text-stone-700 shrink-0" />
                  <div>
                    <div className="font-semibold text-stone-900">Academic Credentials</div>
                    <div className="text-[10px] text-stone-400">Transcripts, letters &amp; degree (PDF)</div>
                  </div>
                </a>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-stone-50 bg-stone-900 hover:bg-stone-800 rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-600 hover:text-stone-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#faf9f6] px-6 py-4 space-y-3 text-sm">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-stone-700 hover:text-stone-900 font-medium"
          >
            About
          </a>
          <a
            href="#practice"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-stone-700 hover:text-stone-900 font-medium"
          >
            Practice Focus
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-stone-700 hover:text-stone-900 font-medium"
          >
            Court Record
          </a>
          <a
            href="#research"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-stone-700 hover:text-stone-900 font-medium"
          >
            Research
          </a>
          <a
            href="#credentials"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-stone-700 hover:text-stone-900 font-medium"
          >
            Credentials
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-stone-700 hover:text-stone-900 font-medium"
          >
            Contact
          </a>

          <div className="pt-3 border-t border-stone-200 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
              Download Official Files
            </div>
            <a
              href="/documents/Roman_Mekonnen_CV.pdf"
              download="Roman_Mekonnen_CV.pdf"
              className="flex items-center gap-2 p-2.5 bg-white border border-stone-200 rounded text-xs font-medium text-stone-800"
            >
              <FileText className="w-4 h-4 text-stone-600" />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href="/documents/Academic_Credentials_Roman_Mekonnen.pdf"
              download="Academic_Credentials_Roman_Mekonnen.pdf"
              className="flex items-center gap-2 p-2.5 bg-white border border-stone-200 rounded text-xs font-medium text-stone-800"
            >
              <Award className="w-4 h-4 text-stone-600" />
              <span>Download Academic Credentials (PDF)</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold py-2.5 px-3 bg-stone-900 text-stone-50 rounded text-center uppercase tracking-wider mt-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

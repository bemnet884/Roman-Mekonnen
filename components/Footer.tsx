'use client';

import React from 'react';
import { ArrowUp, Scale } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-stone-100 font-serif text-lg font-bold tracking-tight">
              <Scale className="w-5 h-5 text-stone-300" />
              <span>ROMAN MEKONNEN KASSA</span>
            </div>
            <div className="text-xs text-stone-400">
              Bachelor of Laws (LL.B) · Bahir Dar University School of Law
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-stone-400">
            <a href="#practice" className="hover:text-stone-200 transition-colors">
              Practice Focus
            </a>
            <a href="#experience" className="hover:text-stone-200 transition-colors">
              Court Record
            </a>
            <a href="#research" className="hover:text-stone-200 transition-colors">
              Research
            </a>
            <a href="#credentials" className="hover:text-stone-200 transition-colors">
              Credentials
            </a>
            <a href="#contact" className="hover:text-stone-200 transition-colors">
              Contact
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors cursor-pointer ml-auto"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} Roman Mekonnen Kassa. All official records and credentials verified.
          </div>
          <div className="text-[11px] font-mono text-stone-400">
            Addis Ababa, Ethiopia · Exit Exam Benchmark: 75%
          </div>
        </div>
      </div>
    </footer>
  );
}

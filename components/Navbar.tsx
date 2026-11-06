'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#faf9f6]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <Link
          href="/"
          className="text-lg font-serif tracking-tight text-stone-900 font-bold whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors"
        >
          ROMAN MEKONNEN
        </Link>

        {/* Zone 2: Concise Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
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

        {/* Zone 3: 1 Primary Action */}
        <div className="relative shrink-0 flex items-center gap-3">
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
            className="md:hidden p-2 text-stone-600 hover:text-stone-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#faf9f6] px-6 py-4 space-y-3 text-sm">
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
          <div className="pt-2 border-t border-stone-200">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold py-2.5 px-3 bg-stone-900 text-stone-50 rounded text-center uppercase tracking-wider"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

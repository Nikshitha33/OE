import React from 'react';
import { Compass, GraduationCap, ArrowUp } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'The Problem', href: '#problem' },
    { name: 'Our Approach', href: '#approach' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why PrepPilot AI', href: '#why-us' },
    { name: 'About Initiative', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md">
                <div className="relative">
                  <GraduationCap className="w-5 h-5 text-white" />
                  <Compass className="w-2.5 h-2.5 text-cyan-300 absolute -bottom-0.5 -right-0.5" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                PrepPilot <span className="text-indigo-400">AI</span>
              </span>
            </div>

            <p className="text-base font-semibold text-slate-200">
              "Prepare Smarter. Become Career-Ready."
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Empowering college students, fresh graduates, and campus placement cells in India with transparent industry skill requirements, vetted open learning resources, and structured assessment practice.
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <span className="text-xs font-mono text-cyan-400">Target Audience:</span>
              <span className="text-xs bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-slate-300">
                Engineering & Degree Colleges in India
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product & Venture */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Venture Concept
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <span className="text-slate-500 text-[11px] block mt-1">
                  Status: Early-Stage Prototype
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Community Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Contact & Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-slate-300">Founding Team Desk</p>
              <a
                href="mailto:founders@preppilot.ai"
                className="text-cyan-300 hover:text-cyan-200 font-mono text-xs block"
              >
                founders@preppilot.ai
              </a>
              <p className="text-slate-500 text-[11px] leading-relaxed pt-1">
                Open for college placement pilot partnerships and entrepreneurship mentoring.
              </p>
            </div>
          </div>
        </div>

        {/* Responsible Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left max-w-2xl text-[11px] text-slate-500 leading-relaxed">
            <strong>Disclaimer:</strong> PrepPilot AI is an early-stage student educational initiative designed to provide structured skill frameworks and placement learning guidance. We do not make guaranteed job or placement promises.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-400">
              © {CURRENT_YEAR} PrepPilot AI. All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

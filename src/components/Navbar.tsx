import React, { useState, useEffect } from 'react';
import { Compass, GraduationCap, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenEarlyAccess: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEarlyAccess }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'The Problem', href: '#problem' },
    { name: 'Features', href: '#approach' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white text-xs font-medium py-2 px-4 text-center border-b border-indigo-900/50 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-indigo-500/20 text-cyan-300 text-[11px] font-semibold border border-indigo-400/30">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            Early-Stage Concept
          </span>
          <span className="hidden sm:inline text-slate-300">
            Designed for college students & fresh graduates preparing for campus placements in India.
          </span>
          <button 
            onClick={onOpenEarlyAccess}
            className="text-cyan-300 hover:text-cyan-200 underline font-semibold cursor-pointer transition-colors ml-1"
          >
            Join Early Interest
          </button>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5' 
            : 'bg-white/70 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => handleScrollTo(e, '#hero')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-indigo-950/10 group-hover:scale-105 transition-transform">
                <div className="relative">
                  <GraduationCap className="w-5 h-5 text-white" />
                  <Compass className="w-3 h-3 text-cyan-400 absolute -bottom-1 -right-1" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
                  PrepPilot <span className="text-indigo-600 font-extrabold">AI</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 -mt-1">
                  Career Readiness
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
              >
                Inquiries
              </a>
              <button
                onClick={onOpenEarlyAccess}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-800 text-white text-sm font-semibold shadow-md shadow-indigo-950/15 hover:shadow-lg hover:shadow-indigo-900/25 hover:from-slate-800 hover:to-indigo-700 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-cyan-300" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEarlyAccess();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-800 text-white text-sm font-semibold shadow-md"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-cyan-300" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

import React, { useState } from 'react';
import { ArrowRight, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

interface CallToActionProps {
  onScrollToContact: () => void;
  onOpenEarlyAccess: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ 
  onScrollToContact, 
  onOpenEarlyAccess 
}) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickEmail && quickEmail.includes('@')) {
      setQuickSubmitted(true);
      setTimeout(() => {
        setQuickEmail('');
      }, 4000);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-indigo-50/40 to-slate-50 relative overflow-hidden">
      {/* Decorative radial blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-indigo-200/40 via-cyan-200/40 to-indigo-100/40 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl shadow-indigo-950/20 relative overflow-hidden border border-indigo-900/50">
          {/* Subtle background circuit pattern or glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-cyan-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            Shape the Future of Campus Readiness
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
            Take the First Step Toward Your Career Goals.
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join us as we explore better ways to prepare students for the changing world of work.
          </p>

          {/* Action Area: Get in Touch & Quick Waitlist */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onScrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-slate-950 font-bold text-base shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all cursor-pointer group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenEarlyAccess}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700/80 transition-all cursor-pointer"
            >
              <span>Join Pilot Cohort</span>
            </button>
          </div>

          {/* Quick inline waitlist subscription option */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 max-w-lg mx-auto">
            {quickSubmitted ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Thank you! We've saved your interest for our upcoming student pilot.
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    placeholder="Enter your student or college email..."
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-hidden focus:border-cyan-400 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-white text-slate-900 text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex-shrink-0"
                >
                  Notify Me
                </button>
              </form>
            )}
            <p className="text-[11px] text-slate-400 mt-2.5">
              Strictly no spam. We will only reach out when early student cohorts open.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

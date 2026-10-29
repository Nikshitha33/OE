import React, { useState } from 'react';
import { X, GraduationCap, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  const [batch, setBatch] = useState('2026 Batch (Current 3rd/Final Year)');
  const [track, setTrack] = useState('Software Engineering (SDE)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes('@')) {
      setError('Please provide a valid name and email address.');
      return;
    }

    setError('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCollege('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top decorative stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-700" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Welcome Aboard!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thanks <span className="font-semibold text-slate-900">{name}</span>. You're registered for early pilot access for the <span className="font-semibold text-indigo-700">{track}</span> track.
            </p>
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-500 max-w-xs mx-auto">
              We will notify <span className="font-mono text-slate-700">{email}</span> as soon as beta invites roll out for {batch}.
            </div>
            <button
              onClick={handleResetAndClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              Back to Landing Page
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                Student Pilot Interest
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1.5">
              Get Started with PrepPilot AI
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Join our student cohort testing our role skill-mapping and structured placement preparation sprints.
            </p>

            {error && (
              <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ananya Patel"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. ananya@college.edu or gmail"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-indigo-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    College / Institute
                  </label>
                  <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="e.g. NIT Trichy / Pune Univ"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Graduation Batch
                  </label>
                  <select
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-indigo-600 bg-white"
                  >
                    <option value="2025 Batch (Final Year)">2025 Batch (Final Year)</option>
                    <option value="2026 Batch (Current 3rd/Pre-Final Year)">2026 Batch (Pre-Final Year)</option>
                    <option value="2027 Batch (2nd Year)">2027 Batch (2nd Year)</option>
                    <option value="Recent Graduate / Job Seeker">Recent Graduate / Job Seeker</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Role Track
                </label>
                <select
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-indigo-600 bg-white"
                >
                  <option value="Software Engineering (SDE)">Software Engineering (SDE / Core Coding)</option>
                  <option value="Data & Analytics">Data & Business Analytics</option>
                  <option value="Cloud & DevOps">Cloud & DevOps Associate</option>
                  <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                  <option value="Non-Tech / Business Analyst">Tech Consulting & Analyst</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-800 hover:from-slate-800 hover:to-indigo-700 text-white font-semibold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span>Join Early Pilot</span>
                      <ArrowRight className="w-4 h-4 text-cyan-300" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                100% free pilot for students. No payment or credit card required.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

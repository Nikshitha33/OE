import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Building2, 
  Clock, 
  UserCheck 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student / Graduate',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmailPlaceholder = 'founders@preppilot.ai';

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief message (at least 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate realistic async handling for front-end demonstration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmailPlaceholder);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      role: 'Student / Graduate',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-indigo-600" />
            Connect With Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Get in Touch With PrepPilot AI
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you are a student preparing for campus placements, a training & placement cell coordinator, or an educator—we would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Details & Demo Notice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Founding Team Office Hours
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                We are actively speaking with student groups and college placement representatives across India to refine our curriculum mapping.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Primary Contact Email (Placeholder)
                </span>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <a
                    href={`mailto:${contactEmailPlaceholder}`}
                    className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 truncate"
                  >
                    {contactEmailPlaceholder}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-xs font-medium text-slate-700 transition-colors cursor-pointer flex-shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Stakeholder categories we welcome */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <UserCheck className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Students & Fresh Grads:</strong> Request early access or suggest placement tracks.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <Building2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Colleges & T&P Cells:</strong> Discuss pilot testing for upcoming 2026 batches.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Response Time:</strong> We review all messages within 24 to 48 hours.
                  </span>
                </div>
              </div>
            </div>

            {/* Transparent Demo Notice */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/70 text-amber-900 text-xs leading-relaxed flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Prototype Notice:</strong> This website is an early-stage venture landing page. Form submissions are verified and simulated in local session memory. You can also contact us directly at <span className="font-semibold">{contactEmailPlaceholder}</span>.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              {submitted ? (
                /* Success State */
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Message Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your message regarding{' '}
                    <span className="font-semibold text-slate-900">{formData.role}</span> has been logged for our pilot team review.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 max-w-md mx-auto text-left text-xs text-slate-600">
                    <p className="font-mono text-slate-500 mb-1">Confirmation Details:</p>
                    <p>• Email: <span className="text-slate-800">{formData.email}</span></p>
                    <p>• Category: <span className="text-slate-800">{formData.role}</span></p>
                    <p>• Status: <span className="text-emerald-700 font-semibold">Demo Submission Logged</span></p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900">
                      Send a Message
                    </h3>
                    <span className="text-[11px] text-slate-400 font-medium">
                      All fields required
                    </span>
                  </div>

                  {/* Name field */}
                  <div>
                    <label 
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Your Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden transition-colors ${
                        errors.name 
                          ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20' 
                          : 'border-slate-300 focus:border-indigo-600 bg-white'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label 
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@college.edu or personal email"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden transition-colors ${
                        errors.email 
                          ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20' 
                          : 'border-slate-300 focus:border-indigo-600 bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Role Selector */}
                  <div>
                    <label 
                      htmlFor="contact-role"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      I am a:
                    </label>
                    <select
                      id="contact-role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-hidden focus:border-indigo-600 transition-colors"
                    >
                      <option value="Student / Graduate">College Student / Recent Graduate</option>
                      <option value="Placement Cell / T&P Officer">College Placement Cell / T&P Officer</option>
                      <option value="Faculty / Mentor">Educator / Academic Mentor</option>
                      <option value="Industry Recruiter">Recruiter / Engineering Leader</option>
                      <option value="General Inquirer">Other Interest</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label 
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-slate-700"
                      >
                        How can we help? (Questions, Feedback, or Early Pilot)
                      </label>
                      <span className="text-[10px] text-slate-400">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your placement preparation concerns, suggest roles you want mapped, or ask about our upcoming pilot..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden transition-colors ${
                        errors.message 
                          ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20' 
                          : 'border-slate-300 focus:border-indigo-600 bg-white'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-800 hover:from-slate-800 hover:to-indigo-700 text-white font-semibold text-sm shadow-md transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4 text-cyan-300" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

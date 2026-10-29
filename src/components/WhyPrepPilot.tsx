import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Layers, 
  HeartHandshake, 
  Check, 
  X, 
  Sparkles,
  Info
} from 'lucide-react';

export const WhyPrepPilot: React.FC = () => {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-indigo-600" />,
      title: 'Clarity Over Guesswork',
      description:
        'Instead of broad, abstract roadmaps, we define precise skill competencies required for specific entry-level roles so students know exactly what recruiters are evaluating.',
    },
    {
      icon: <Layers className="w-6 h-6 text-cyan-600" />,
      title: 'Structured Placement Timelines',
      description:
        'Tailored to the cadence of Indian campus hiring drives—organizing preparation into progressive phases: aptitude, coding assessments, core technicals, and HR interviews.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Accessible & Free Resources',
      description:
        'We believe career preparation should not be gated behind costly bootcamps. We curate top-tier open documentation, verified repositories, and high-yield free tutorials.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-indigo-700" />,
      title: 'Student-Focused Guidance',
      description:
        'Conceived by students and mentors who understand the pressure of balancing semester examinations, labs, and placement tests during pre-final and final years.',
    },
  ];

  const comparisonRows = [
    {
      criterion: 'Skill Direction',
      traditional: 'Overwhelming, conflicting roadmaps with endless generic tech stacks',
      preppilot: 'Role-targeted competencies aligned with campus hiring benchmarks',
    },
    {
      criterion: 'Learning Resources',
      traditional: 'Spending hours hunting through repetitive or outdated video tutorials',
      preppilot: 'Direct, curated links to proven, high-yield open resources and problem sets',
    },
    {
      criterion: 'Assessment Focus',
      traditional: 'Practicing coding in isolation while failing preliminary aptitude tests',
      preppilot: 'Balanced preparation covering aptitude, speed coding, and core CS fundamentals',
    },
    {
      criterion: 'Interview Confidence',
      traditional: 'Entering technical & HR rounds without structured communication practice',
      preppilot: 'Guided answer templates (STAR framework) and mock rubric checklists',
    },
    {
      criterion: 'Commercial Promises',
      traditional: 'Aggressive marketing, expensive courses, and unrealistic "100% placement guarantees"',
      preppilot: 'Honest, student-first guidance prioritizing genuine competence and clarity',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            Built on Authenticity
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why PrepPilot AI?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We are building a platform grounded in clarity, structure, and real student empathy—not marketing hype.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-2xl border border-slate-200/80 p-6 hover:bg-white hover:shadow-md hover:border-indigo-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center mb-4 shadow-2xs">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transparent Comparison Table */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden border border-slate-800">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold block mb-1">
              Honest Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Shifting From Placement Panic to Calm, Structured Preparation
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Here is how PrepPilot AI rethinks the placement preparation journey for Indian graduates.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="py-3 px-4 font-semibold text-slate-400 text-xs uppercase tracking-wider w-1/4">
                    Aspect
                  </th>
                  <th className="py-3 px-4 font-semibold text-rose-300 text-xs uppercase tracking-wider w-3/8">
                    Fragmented Preparation
                  </th>
                  <th className="py-3 px-4 font-semibold text-cyan-300 text-xs uppercase tracking-wider w-3/8">
                    PrepPilot AI Guidance
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-4 font-semibold text-white text-xs sm:text-sm">
                      {row.criterion}
                    </td>
                    <td className="py-4 px-4 text-slate-300 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-cyan-100 text-xs sm:text-sm bg-indigo-950/20">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{row.preppilot}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Ethical Commitment Box */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                <strong>Our Founder Principle:</strong> We do not make misleading guarantees about "100% placement rates" or instant job offers. We believe real career readiness is earned through consistent, structured practice and genuine skill competence.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                Student-First Ethos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

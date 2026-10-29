import React from 'react';
import { 
  HelpCircle, 
  Layers, 
  Clock, 
  AlertCircle, 
  FileQuestion, 
  ArrowRight 
} from 'lucide-react';

interface TheProblemProps {
  onLearnMore: () => void;
}

export const TheProblem: React.FC<TheProblemProps> = ({ onLearnMore }) => {
  const problems = [
    {
      id: 'skill-confusion',
      tag: 'Pain Point 01',
      title: 'Skill Confusion',
      tagline: 'Students struggle to identify which skills employers expect.',
      description:
        'With industry technologies moving rapidly, college curricula often lag behind practical job expectations. Students find themselves wondering whether to master DSA, full-stack development, AI/ML libraries, or cloud tooling—often spreading themselves too thin before campus drives begin.',
      symptoms: [
        'Conflicting roadmap advice across LinkedIn and Reddit forums',
        'Uncertainty about the hiring bar for tier-1 vs mass recruiter companies',
        'Resume keyword stuffing without foundational problem-solving depth',
      ],
      icon: <HelpCircle className="w-6 h-6 text-rose-500" />,
      accentBg: 'bg-rose-50',
      accentBorder: 'border-rose-100',
      badgeColor: 'bg-rose-100 text-rose-700',
    },
    {
      id: 'information-overload',
      tag: 'Pain Point 02',
      title: 'Information Overload',
      tagline: 'Finding useful, reliable learning resources takes time.',
      description:
        'Students spend dozens of hours bookmarking 60-hour video playlists, scattered cheat sheets, and redundant tutorial series. Without clear curation, valuable preparation time is lost filtering through outdated content instead of focused, high-yield practice.',
      symptoms: [
        'Tutorial paralysis: watching videos without building or solving problems',
        'Endless duplicate repositories and low-quality question sets',
        'Inability to measure whether a tutorial is actually aligned with placement tests',
      ],
      icon: <Layers className="w-6 h-6 text-amber-500" />,
      accentBg: 'bg-amber-50',
      accentBorder: 'border-amber-100',
      badgeColor: 'bg-amber-100 text-amber-800',
    },
    {
      id: 'interview-uncertainty',
      tag: 'Pain Point 03',
      title: 'Interview Uncertainty',
      tagline: 'Students are unsure how to prepare for interviews and assessments.',
      description:
        'Placement drives evaluate students across distinct hurdles: online aptitude tests, speed coding rounds, technical interviews, and behavioral HR rounds. Most students enter these rounds unprepared for the format, time limits, or core evaluation criteria.',
      symptoms: [
        'Surprise elimination in preliminary aptitude and reasoning rounds',
        'Struggling to articulate logic during live coding and system rounds',
        'Lack of structured frameworks for behavioral and situational HR questions',
      ],
      icon: <FileQuestion className="w-6 h-6 text-indigo-500" />,
      accentBg: 'bg-indigo-50',
      accentBorder: 'border-indigo-100',
      badgeColor: 'bg-indigo-100 text-indigo-800',
    },
  ];

  return (
    <section id="problem" className="py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/70 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            The Campus Placement Reality
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Preparing for Placements Shouldn't Feel Confusing.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every year, millions of Indian college students and fresh graduates embark on placement season. 
            Despite working diligently, countless aspiring candidates struggle with fragmented guidance and lack of industry visibility.
          </p>
        </div>

        {/* 3 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob) => (
            <div
              key={prob.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl ${prob.accentBg} ${prob.accentBorder} border flex items-center justify-center`}>
                    {prob.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${prob.badgeColor} tracking-wide`}>
                    {prob.tag}
                  </span>
                </div>

                {/* Title and Tagline */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-900 transition-colors">
                  {prob.title}
                </h3>
                <p className="text-sm font-semibold text-slate-700 mb-4 leading-snug">
                  {prob.tagline}
                </p>

                {/* Detailed Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {prob.description}
                </p>

                {/* Practical Symptoms */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                    What Students Experience:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {prob.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                        <span className="leading-snug">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors">
                <span>The Core Disconnect</span>
                <span className="flex items-center gap-1">
                  Requires Direction
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Student Impact Callout Box */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-950/10 border border-indigo-900/40">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4" />
              The Preparation Window Is Short
            </div>
            <h4 className="text-lg sm:text-xl font-bold mb-2">
              The 6th to 7th Semester Placement Crunch
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Between semester exams, lab records, and final year projects, students usually have only 60 to 90 days of focused placement preparation. Spending weeks just figuring out <em>what</em> to study is a luxury students can't afford.
            </p>
          </div>
          <button
            onClick={onLearnMore}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <span>See How We Solve This</span>
            <ArrowRight className="w-4 h-4 text-indigo-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

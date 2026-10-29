import React from 'react';
import { 
  Compass, 
  BookMarked, 
  MessageSquareCode, 
  TrendingUp, 
  Sparkles, 
  CheckCircle, 
  ChevronRight, 
  ShieldCheck, 
  Target 
} from 'lucide-react';

export const OurApproach: React.FC = () => {
  const features = [
    {
      id: 'career-skill-discovery',
      icon: <Compass className="w-6 h-6 text-indigo-600" />,
      title: 'Career Skill Discovery',
      badge: 'Planned Capability',
      timeline: 'Phase 1 Roadmap',
      status: 'In Design & Validation',
      summary: 'Dynamic role-to-skill mapping based on entry-level campus job requisitions.',
      description:
        'Instead of generic, one-size-fits-all roadmaps, PrepPilot AI is designing role-targeted skill trees for entry-level positions across engineering, analytics, and tech consulting. Students will see exactly which core skills, libraries, and fundamentals recruiters evaluate.',
      capabilities: [
        'Role-specific skill breakdown (Core, Secondary, and Value-Add)',
        'Gap assessment based on current semester coursework',
        'Transparent priority weightage for campus drive tests',
      ],
      color: 'indigo',
    },
    {
      id: 'learning-resource-guidance',
      icon: <BookMarked className="w-6 h-6 text-cyan-600" />,
      title: 'Learning Resource Guidance',
      badge: 'Planned Capability',
      timeline: 'Phase 1 Roadmap',
      status: 'Curating Open Repositories',
      summary: 'Vetted, noise-free learning paths prioritizing quality free & open resources.',
      description:
        'College students don’t need more paid courses; they need a trusted compass. Our planned curation engine filters through documentation, high-quality open-source tutorials, and targeted practice problems so students learn without tutorial burnout.',
      capabilities: [
        'Curated selection of tested, open-access resources',
        'Topic-wise modular reading lists and practice sets',
        'Time-estimated learning sprints for placement semesters',
      ],
      color: 'cyan',
    },
    {
      id: 'interview-preparation',
      icon: <MessageSquareCode className="w-6 h-6 text-slate-800" />,
      title: 'Interview Preparation',
      badge: 'Planned Capability',
      timeline: 'Phase 2 Roadmap',
      status: 'Rubric Development',
      summary: 'Step-by-step guidance for aptitude tests, technical rounds, and HR interviews.',
      description:
        'Placement drives consist of multiple elimination stages. PrepPilot AI plans to offer structured frameworks for every round: speed aptitude strategies, live problem-solving walk-through templates, and situational behavioral interview frameworks.',
      capabilities: [
        'Deconstruction of online assessment (OA) patterns',
        'Technical interview communication & code explanation templates',
        'Behavioral HR scenario practice (STAR method guided templates)',
      ],
      color: 'navy',
    },
    {
      id: 'industry-trend-awareness',
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      title: 'Industry Trend Awareness',
      badge: 'Planned Capability',
      timeline: 'Phase 2 Roadmap',
      status: 'Data Model Research',
      summary: 'Up-to-date insights on shifting hiring bars, tech stacks, and job roles.',
      description:
        'As companies integrate modern workflows and cloud-native stacks, entry-level requirements change. PrepPilot AI plans to track hiring patterns across IT services, product startups, and global capability centers (GCCs) in India.',
      capabilities: [
        'Real-world tech stack updates from recent campus hiring drives',
        'Emerging skill spotlights (e.g. cloud basics, containerization, API design)',
        'Practical advice on project portfolios that stand out to campus panels',
      ],
      color: 'emerald',
    },
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5 text-indigo-600" />
            Our Systematic Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            A More Structured Way to Prepare.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We are designing PrepPilot AI as a dedicated career copilot for college students. 
            Below are our four core planned capabilities, currently being architected and refined through student feedback.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-xs hover:shadow-lg hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  feature.color === 'indigo'
                    ? 'from-indigo-500 to-indigo-700'
                    : feature.color === 'cyan'
                    ? 'from-cyan-400 to-indigo-500'
                    : feature.color === 'navy'
                    ? 'from-slate-800 to-indigo-900'
                    : 'from-emerald-500 to-teal-600'
                }`}
              />

              <div>
                {/* Header with Icon, Planned Capability Badge & Timeline */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-bold border border-indigo-200/60">
                      <Sparkles className="w-3 h-3 text-indigo-500" />
                      {feature.badge}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {feature.timeline} • {feature.status}
                    </span>
                  </div>
                </div>

                {/* Feature Title and Summary */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm font-semibold text-slate-700 mb-3">
                  {feature.summary}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Capabilities Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Functionality:
                  </span>
                  {feature.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status footer banner */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Grounded in Verified Placement Feedback
                </span>
                <span className="text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Roadmap Details
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Banner Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-600">
          <Sparkles className="w-4 h-4 text-indigo-600 flex-shrink-0" />
          <span>
            <strong>Authentic Startup Commitment:</strong> Features detailed above represent our product roadmap. We are currently testing early prototypes with students and placement coordinators.
          </span>
        </div>
      </div>
    </section>
  );
};

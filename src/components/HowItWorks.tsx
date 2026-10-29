import React, { useState } from 'react';
import { 
  Compass, 
  CheckSquare, 
  Calendar, 
  BarChart3, 
  Sparkles,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

interface StepDetail {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ReactNode;
  previewHeading: string;
  previewSubtext: string;
  highlights: string[];
  mockCard: {
    tag: string;
    headline: string;
    items: { label: string; sub: string; status: string }[];
  };
}

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: StepDetail[] = [
    {
      number: '01',
      title: 'Explore your target role',
      shortDesc: 'Understand different entry-level career paths and where your interests match.',
      fullDesc:
        'Start by discovering roles commonly recruited during Indian campus placement drives—such as Software Development Engineer (SDE), Data Analyst, Cloud/DevOps Associate, and Tech Consultant. Learn what each role actually does day-to-day.',
      icon: <Compass className="w-5 h-5 text-indigo-600" />,
      previewHeading: 'Target Role Profiler',
      previewSubtext: 'Exploring Software Development Engineer (SDE-1)',
      highlights: [
        'Compare core engineering vs data vs cloud roles',
        'Analyze typical recruitment patterns across product & service companies',
        'Identify matching career paths based on your academic background',
      ],
      mockCard: {
        tag: 'Step 1 • Role Discovery',
        headline: 'Role Profile: Software Engineer (SDE)',
        items: [
          { label: 'Primary Responsibility', sub: 'Building features, debugging code, unit testing', status: 'Core' },
          { label: 'Campus Hiring Frequency', sub: 'High demand across 85%+ participating companies', status: 'In Demand' },
          { label: 'Average Prep Horizon', sub: '8 to 12 weeks of structured practice', status: 'Recommended' },
        ],
      },
    },
    {
      number: '02',
      title: 'Identify relevant skills',
      shortDesc: 'Cut through vague advice to see the exact skills employers prioritize.',
      fullDesc:
        'Instead of trying to learn everything at once, PrepPilot AI maps out high-impact capabilities: must-have core skills (DSA, SQL, OOPs), foundational computer science concepts, and practical project skills that impress campus interviewers.',
      icon: <CheckSquare className="w-5 h-5 text-cyan-600" />,
      previewHeading: 'Skill Matrix & Priority Weightage',
      previewSubtext: 'Distinguishing Must-Haves from Bonus Skills',
      highlights: [
        'Separates must-have screening skills from nice-to-haves',
        'Provides clarity on the depth needed for each concept',
        'Highlights recurring questions asked in Indian placement drives',
      ],
      mockCard: {
        tag: 'Step 2 • Skill Mapping',
        headline: 'Essential Competency Breakdown',
        items: [
          { label: 'Data Structures & Algorithms', sub: 'Arrays, Strings, Trees, Graphs, DP', status: 'Priority 1 (OA/Round 1)' },
          { label: 'Database & SQL', sub: 'Queries, Normalization, Indexing basics', status: 'Priority 2 (Tech Round)' },
          { label: 'Computer Networks & OS', sub: 'Threads, Memory, TCP/IP, REST architecture', status: 'Priority 3 (CS Core)' },
        ],
      },
    },
    {
      number: '03',
      title: 'Organize your preparation',
      shortDesc: 'Follow a curated, week-by-week learning roadmap with high-yield resources.',
      fullDesc:
        'Convert placement goals into a realistic weekly routine. PrepPilot AI curates the best free tutorials, articles, and targeted practice problems into a chronological timeline designed around your college semester schedule.',
      icon: <Calendar className="w-5 h-5 text-indigo-600" />,
      previewHeading: 'Structured Weekly Preparation Plan',
      previewSubtext: 'Phase 2: Core Coding & Assessment Simulation',
      highlights: [
        'Curated free resources mapped directly to weekly milestones',
        'Realistic study schedules that account for college exam intervals',
        'Balanced focus across aptitude, coding, and theory',
      ],
      mockCard: {
        tag: 'Step 3 • Prep Roadmap',
        headline: 'Week 4 of 8 Sprint: Dynamic Programming & SQL',
        items: [
          { label: 'Target: 15 DP Classic Problems', sub: 'Knapsack, Subsequences, Coin Change', status: '7 / 15 Done' },
          { label: 'Theory: Database Transactions & ACID', sub: '30-min focused reading + 10 practice MCQs', status: 'Completed' },
          { label: 'Weekend Mock Assessment', sub: '60-min timed OA test simulation', status: 'Scheduled Sunday' },
        ],
      },
    },
    {
      number: '04',
      title: 'Track your progress and improve',
      shortDesc: 'Measure your readiness against standard placement rubrics before drive day.',
      fullDesc:
        'Gain confidence by evaluating where you stand. Practice with structured mock interview rubrics, identify weak topic areas early, and refine your explanations so you enter campus drives feeling prepared and composed.',
      icon: <BarChart3 className="w-5 h-5 text-emerald-600" />,
      previewHeading: 'Placement Readiness & Benchmark Tracker',
      previewSubtext: 'Mock Evaluation & Continuous Improvement',
      highlights: [
        'Track completed topics and assessment scores over time',
        'Identify conceptual blind spots before official campus interviews',
        'Refine behavioral answers using guided STAR method templates',
      ],
      mockCard: {
        tag: 'Step 4 • Readiness Evaluation',
        headline: 'Overall Placement Readiness Score: 78%',
        items: [
          { label: 'Aptitude & Logical Reasoning', sub: 'Score: 84% • Speed: Strong', status: 'Drive Ready' },
          { label: 'Coding Assessment (OA)', sub: 'Score: 75% • Medium-difficulty proficiency', status: 'Improving' },
          { label: 'Technical Interview Articulation', sub: 'Score: 76% • Project explanations verified', status: 'Good' },
        ],
      },
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Simple & Guided
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            How PrepPilot AI Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A straightforward, four-step framework built to turn confusing placement preparation into clear, measurable progress.
          </p>
        </div>

        {/* 4 Steps Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: The 4 Step Selectors */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-indigo-600 shadow-md ring-2 ring-indigo-500/10'
                      : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {step.number}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isSelected ? 'text-indigo-950' : 'text-slate-800'
                        }`}
                      >
                        {step.title}
                      </h3>
                      {isSelected && (
                        <span className="text-xs font-semibold text-indigo-600 flex items-center gap-0.5">
                          Active
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Step Interactive Preview */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              {/* Background gradient decorative spot */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-50 rounded-full blur-2xl pointer-events-none" />

              {/* Step Counter & Title */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    {current.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                      Step {current.number}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {current.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-2 rounded-full transition-all ${
                        activeStep === i ? 'w-6 bg-indigo-600' : 'w-2 bg-slate-200'
                      }`}
                      aria-label={`Jump to step ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Detailed Explanation */}
              <div className="py-6">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  {current.fullDesc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {current.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Mock Card Preview */}
                <div className="bg-slate-900 rounded-2xl p-5 text-white border border-slate-800 shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-wide">
                      {current.mockCard.tag}
                    </span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 font-medium">
                      Simulated Preview
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-slate-200 mt-3 mb-3">
                    {current.mockCard.headline}
                  </h4>

                  <div className="space-y-2.5">
                    {current.mockCard.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-800/80 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-slate-700/50"
                      >
                        <div>
                          <p className="text-xs font-medium text-white">{item.label}</p>
                          <p className="text-[11px] text-slate-400">{item.sub}</p>
                        </div>
                        <span className="text-[11px] font-semibold text-indigo-300 bg-indigo-950/70 border border-indigo-800/60 px-2.5 py-1 rounded self-start sm:self-auto">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Step Navigation Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                    activeStep === 0
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  ← Previous Step
                </button>

                <span className="text-xs text-slate-500 font-medium">
                  Step {activeStep + 1} of 4
                </span>

                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                    activeStep === steps.length - 1
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  Next Step →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { 
  GraduationCap, 
  Lightbulb, 
  Users2, 
  Target, 
  Sparkles, 
  BookOpen, 
  Rocket,
  CheckCircle2
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      icon: <Target className="w-5 h-5 text-indigo-600" />,
      title: 'Actionable Direction Over Hype',
      text: 'We replace endless generic career advice with clear, structured milestones matched to actual campus recruitment expectations.',
    },
    {
      icon: <Users2 className="w-5 h-5 text-cyan-600" />,
      title: 'Student-First Empathy',
      text: 'College schedules are intense. We design every learning sprint to fit alongside semester exams, lab commitments, and project deadlines.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-emerald-600" />,
      title: 'Democratizing Preparation',
      text: 'Great career preparation should not depend on expensive coaching centers. We curate the best free open-source materials available worldwide.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Lightbulb className="w-3.5 h-3.5 text-indigo-600" />
              About Our Initiative
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Bridging the Gap Between Industry Expectations & Placement Preparation.
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                <strong>PrepPilot AI</strong> is a student-focused startup concept conceived to address one of the most stressful challenges facing college students and fresh graduates in India: <span className="text-slate-900 font-semibold">the disconnect between academic coursework and real-world campus placement criteria.</span>
              </p>
              <p>
                While companies rapidly modernize their tech stacks toward cloud-native systems, dynamic data pipelines, and agile problem solving, college curricula often move slower. Students frequently spend months studying disconnected topics, feeling anxious and uncertain about what hiring managers actually look for in preliminary assessments and technical interviews.
              </p>
              <p>
                We started PrepPilot AI with a clear mission: <span className="text-slate-900 font-semibold">to bring structure, transparent benchmarks, and curated direction to every aspiring graduate</span>—enabling students to prepare smarter and become truly career-ready without falling into tutorial fatigue.
              </p>
            </div>

            {/* Principles list */}
            <div className="mt-8 space-y-4">
              {principles.map((p, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-0.5">{p.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Startup Concept Card & Program Pitch Context */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-7 sm:p-8 text-white shadow-xl border border-indigo-900/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-cyan-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">PrepPilot AI</h3>
                  <span className="text-xs text-cyan-300 font-mono">Early-Stage Venture Concept</span>
                </div>
              </div>

              {/* Founder Context / Philosophy */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                <p>
                  "We have lived through the campus placement season ourselves. We watched our classmates lose weeks to panic, trying to solve 500 LeetCode problems blindly without knowing if their target company even tests those patterns."
                </p>
                <p>
                  "PrepPilot AI represents our commitment to solving this through organized intelligence, practical rubrics, and high-quality open educational resources."
                </p>
              </div>

              {/* Startup Milestone Checklist */}
              <div className="pt-6 border-t border-slate-800 space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Project Validation Milestones:
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Student interviews & placement pain point mapping completed</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Core role skill trees (SDE, Data, Cloud) drafted</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Open resource curation framework established</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-cyan-300">
                  <Rocket className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Engaging colleges & student beta cohort for testing</span>
                </div>
              </div>

              {/* Program Presentation Badge */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  Student Entrepreneurship Showcase
                </span>
                <span className="font-mono text-cyan-300">Cohort 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

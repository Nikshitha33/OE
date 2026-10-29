import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  TrendingUp, 
  BookOpen, 
  Layers, 
  Award,
  ChevronRight,
  Code2,
  Database,
  Cloud,
  Terminal
} from 'lucide-react';

interface HeroProps {
  onOpenEarlyAccess: () => void;
  onExploreFeatures: () => void;
}

interface RolePreview {
  id: string;
  title: string;
  icon: React.ReactNode;
  matchScore: number;
  readinessLevel: string;
  targetFocus: string;
  skills: { name: string; status: 'ready' | 'learning' | 'recommended'; category: string }[];
  milestones: { title: string; timeline: string; done: boolean }[];
  interviewFocus: string[];
}

export const Hero: React.FC<HeroProps> = ({ onOpenEarlyAccess, onExploreFeatures }) => {
  const [activeRole, setActiveRole] = useState<'sde' | 'data' | 'cloud'>('sde');

  const roleData: Record<'sde' | 'data' | 'cloud', RolePreview> = {
    sde: {
      id: 'sde',
      title: 'Software Development Engineer (SDE-1)',
      icon: <Code2 className="w-4 h-4 text-indigo-400" />,
      matchScore: 82,
      readinessLevel: 'High Potential',
      targetFocus: 'Campus Placements & Off-Campus Drives',
      skills: [
        { name: 'Data Structures & Algorithms', status: 'ready', category: 'Core' },
        { name: 'OOPs & System Design Basics', status: 'learning', category: 'Core' },
        { name: 'DBMS & SQL Queries', status: 'ready', category: 'Backend' },
        { name: 'REST APIs & Web Fundamentals', status: 'learning', category: 'Applied' },
        { name: 'Git & Version Control', status: 'ready', category: 'Tooling' },
        { name: 'Modern Framework (React/Node)', status: 'recommended', category: 'Differentiator' },
      ],
      milestones: [
        { title: 'Online Assessment (OA) Coding Round', timeline: 'Week 1-3', done: true },
        { title: 'Technical Problem Solving (Live DSA)', timeline: 'Week 4-6', done: true },
        { title: 'Computer Science Core & CS Fundamentals', timeline: 'Week 7-8', done: false },
        { title: 'Managerial & HR Behavioral Simulation', timeline: 'Week 9', done: false },
      ],
      interviewFocus: ['Arrays & Dynamic Programming', 'Index optimization in SQL', 'Project architectural walkthrough'],
    },
    data: {
      id: 'data',
      title: 'Data & Business Analyst Trainee',
      icon: <Database className="w-4 h-4 text-cyan-400" />,
      matchScore: 78,
      readinessLevel: 'On Track',
      targetFocus: 'Product & Analytics Companies',
      skills: [
        { name: 'Advanced SQL & Window Functions', status: 'ready', category: 'Core' },
        { name: 'Python for Data Analysis (Pandas)', status: 'learning', category: 'Core' },
        { name: 'Data Visualization (PowerBI / Tableau)', status: 'ready', category: 'BI' },
        { name: 'Applied Statistics & Probability', status: 'learning', category: 'Analytics' },
        { name: 'Business Case Problem Solving', status: 'recommended', category: 'Strategy' },
        { name: 'Database Normalization', status: 'ready', category: 'Core' },
      ],
      milestones: [
        { title: 'Aptitude & Analytical Reasoning OA', timeline: 'Week 1-2', done: true },
        { title: 'SQL Live Querying Assessment', timeline: 'Week 3-5', done: true },
        { title: 'Dashboard Case Presentation', timeline: 'Week 6-7', done: false },
        { title: 'Business Stakeholder Interview', timeline: 'Week 8', done: false },
      ],
      interviewFocus: ['Complex Joins & Aggregations', 'Metric tree root cause analysis', 'Statistical hypothesis testing'],
    },
    cloud: {
      id: 'cloud',
      title: 'Cloud & DevOps Graduate Engineer',
      icon: <Cloud className="w-4 h-4 text-indigo-400" />,
      matchScore: 74,
      readinessLevel: 'Developing',
      targetFocus: 'Cloud Infrastructure & SaaS',
      skills: [
        { name: 'Linux Shell & Bash Scripting', status: 'ready', category: 'OS' },
        { name: 'Networking & DNS Fundamentals', status: 'learning', category: 'Core' },
        { name: 'Containerization (Docker)', status: 'learning', category: 'DevOps' },
        { name: 'Cloud Core (AWS/GCP Basics)', status: 'ready', category: 'Cloud' },
        { name: 'CI/CD Pipelines (GitHub Actions)', status: 'recommended', category: 'DevOps' },
        { name: 'Infrastructure as Code (Terraform)', status: 'recommended', category: 'Infra' },
      ],
      milestones: [
        { title: 'Linux & Scripting Technical Round', timeline: 'Week 1-3', done: true },
        { title: 'Cloud Architecture Fundamentals', timeline: 'Week 4-6', done: false },
        { title: 'Dockerized App Deployment Task', timeline: 'Week 7-8', done: false },
        { title: 'System Reliability & HR Round', timeline: 'Week 9', done: false },
      ],
      interviewFocus: ['Process & Memory management', 'VPC subnet routing', 'Troubleshooting container crashes'],
    },
  };

  const current = roleData[activeRole];

  return (
    <section id="hero" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-indigo-100/50 via-cyan-100/40 to-slate-100/20 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-12 -right-12 w-96 h-96 bg-cyan-100/30 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-indigo-100/40 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-slate-600 font-normal">Our Vision:</span>
            <span className="text-indigo-900 font-medium">Prepare Smarter. Become Career-Ready.</span>
          </div>
        </div>

        {/* Main Header Text */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Your Career Journey,{' '}
            <span className="bg-gradient-to-r from-slate-950 via-indigo-900 to-indigo-700 bg-clip-text text-transparent">
              With a Clearer Direction.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover relevant skills, explore learning resources, and prepare for your dream job with greater confidence.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEarlyAccess}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-900 text-white font-semibold text-base shadow-lg shadow-indigo-950/20 hover:shadow-indigo-900/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer group"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onExploreFeatures}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all cursor-pointer"
            >
              <span>Explore Features</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Context note for students */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-600" />
              Tailored for Indian Campus Placement Cycles
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              Zero Paywalled Hype & No False Guarantees
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Structured, Step-by-Step Learning Guidance
            </span>
          </div>
        </div>

        {/* Hero Interactive Illustration / Preparation Dashboard Mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle outer gradient border */}
          <div className="p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-indigo-200/80 via-slate-200 to-indigo-100 shadow-2xl shadow-indigo-950/10">
            <div className="bg-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white overflow-hidden relative">
              {/* Subtle top inner glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Mockup Header Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    preppilot.workspace/student-readiness-preview
                  </span>
                </div>
                
                {/* Target Role Selector Tabs */}
                <div className="flex items-center gap-1 bg-slate-800/90 p-1 rounded-lg border border-slate-700/60 text-xs w-full sm:w-auto overflow-x-auto">
                  <span className="text-[11px] font-semibold text-slate-400 px-2 hidden sm:inline">Role:</span>
                  <button
                    onClick={() => setActiveRole('sde')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer whitespace-nowrap ${
                      activeRole === 'sde'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    Software Engineer
                  </button>
                  <button
                    onClick={() => setActiveRole('data')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer whitespace-nowrap ${
                      activeRole === 'data'
                        ? 'bg-cyan-600 text-white shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    Data Analyst
                  </button>
                  <button
                    onClick={() => setActiveRole('cloud')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer whitespace-nowrap ${
                      activeRole === 'cloud'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    Cloud & DevOps
                  </button>
                </div>
              </div>

              {/* Student Overview Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {/* Card 1: Target Role Status */}
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0">
                    {current.icon}
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Target Placement Track
                    </span>
                    <h2 className="text-sm font-semibold text-white truncate max-w-[200px]">
                      {current.title}
                    </h2>
                    <span className="text-xs text-cyan-300 font-medium">
                      {current.targetFocus}
                    </span>
                  </div>
                </div>

                {/* Card 2: Skill Match Readiness Gauge */}
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Skill Alignment
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-bold text-white">{current.matchScore}%</span>
                      <span className="text-xs font-semibold text-emerald-400 flex items-center gap-0.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {current.readinessLevel}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400">Based on standard campus rubrics</span>
                  </div>
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-700"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-cyan-400 transition-all duration-700 ease-out"
                        strokeDasharray={`${current.matchScore}, 100`}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <Award className="w-4 h-4 text-indigo-400 absolute" />
                  </div>
                </div>

                {/* Card 3: Preparation Timeline */}
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 text-cyan-300">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Preparation Sprint
                    </span>
                    <span className="text-sm font-semibold text-white block">
                      8-Week Placement Roadmap
                    </span>
                    <span className="text-xs text-slate-300">
                      Phase 2 of 4 Active • Next: Mock Interview
                    </span>
                  </div>
                </div>
              </div>

              {/* Two Column Layout: Skills & Placement Milestones */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                {/* Left: Required Industry Skills Mapping */}
                <div className="lg:col-span-7 bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-indigo-400" />
                      <h3 className="text-sm font-semibold text-white">
                        Mapped Industry Skill Set
                      </h3>
                    </div>
                    <span className="text-[11px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                      Standard Campus Hiring Bar
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-slate-900/80 border border-slate-700/60 rounded-lg p-2.5 flex items-center justify-between group hover:border-slate-600 transition-colors"
                      >
                        <div className="min-w-0 pr-2">
                          <p className="text-xs font-medium text-slate-200 truncate">
                            {skill.name}
                          </p>
                          <span className="text-[10px] text-slate-400">
                            {skill.category}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                            skill.status === 'ready'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : skill.status === 'learning'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                          }`}
                        >
                          {skill.status === 'ready' ? 'Prepared' : skill.status === 'learning' ? 'In Progress' : 'Recommended'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Curated focus tags */}
                  <div className="mt-4 pt-3 border-t border-slate-700/40 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] text-slate-400 font-medium">Recruiter Focus:</span>
                    {current.interviewFocus.map((focus) => (
                      <span key={focus} className="text-[11px] bg-slate-800 text-cyan-200 px-2 py-0.5 rounded border border-slate-700/50">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Placement Drive Rounds & Mock Assessment */}
                <div className="lg:col-span-5 bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Compass className="w-4 h-4 text-cyan-400" />
                        <h3 className="text-sm font-semibold text-white">
                          Placement Drive Milestones
                        </h3>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-medium">
                        2 / 4 Completed
                      </span>
                    </div>

                    <div className="space-y-3">
                      {current.milestones.map((m, idx) => (
                        <div
                          key={m.title}
                          className="flex items-start gap-3 bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/40"
                        >
                          <div className="mt-0.5">
                            {m.done ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[10px] text-slate-400">
                                {idx + 1}
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-xs font-medium ${m.done ? 'text-slate-300' : 'text-slate-100'}`}>
                              {m.title}
                            </p>
                            <span className="text-[10px] text-slate-400">{m.timeline}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Planned Capability Prototype Disclaimer */}
                  <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <Sparkles className="w-3 h-3" />
                      Concept Interface Preview
                    </span>
                    <button
                      onClick={onOpenEarlyAccess}
                      className="text-indigo-300 hover:text-white underline cursor-pointer"
                    >
                      Request Early Access →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Feature Badges around the Illustration */}
          <div className="hidden md:flex absolute -top-5 -left-6 bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-xl items-center gap-2.5 text-xs font-semibold text-slate-800 animate-float-slow">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <p className="leading-tight">Role Clarity First</p>
              <p className="text-[10px] text-slate-400 font-normal">No generic roadmaps</p>
            </div>
          </div>

          <div className="hidden md:flex absolute -bottom-5 -right-6 bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-xl items-center gap-2.5 text-xs font-semibold text-slate-800 animate-float-slow" style={{ animationDelay: '3s' }}>
            <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <p className="leading-tight">Curated Learning Paths</p>
              <p className="text-[10px] text-slate-400 font-normal">Filtered free & open resources</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

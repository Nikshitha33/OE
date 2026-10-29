import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  CheckCircle2, 
  Circle, 
  HelpCircle, 
  Award,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

interface InteractiveRolePreviewProps {
  onOpenEarlyAccess: () => void;
}

interface TrackData {
  id: string;
  name: string;
  icon: React.ReactNode;
  overview: string;
  campusRounds: { round: string; name: string; focus: string }[];
  skillsList: { id: string; name: string; weight: number; resource: string }[];
  sampleQuestions: string[];
}

export const InteractiveRolePreview: React.FC<InteractiveRolePreviewProps> = ({ onOpenEarlyAccess }) => {
  const tracks: TrackData[] = [
    {
      id: 'sde',
      name: 'Software Engineer (SDE-1)',
      icon: <Code2 className="w-4 h-4 text-indigo-600" />,
      overview: 'Focuses on strong Data Structures & Algorithms, object-oriented programming, and clean problem solving for campus technical drives.',
      campusRounds: [
        { round: 'Round 1', name: 'Online Assessment (OA)', focus: 'Aptitude, Core CS MCQs & 2 Coding Problems (60-90 mins)' },
        { round: 'Round 2', name: 'Technical Interview I', focus: 'Live DSA problem solving, edge-cases & time complexity' },
        { round: 'Round 3', name: 'Technical Interview II', focus: 'CS fundamentals (DBMS, OS, Networks) + Major project architecture' },
        { round: 'Round 4', name: 'Managerial & HR', focus: 'Cultural fit, team collaboration, situation handling' },
      ],
      skillsList: [
        { id: 's1', name: 'Arrays, Strings & HashMaps', weight: 20, resource: 'LeetCode / NeetCode Core Patterns' },
        { id: 's2', name: 'Trees, Graphs & Recursion', weight: 20, resource: 'Striver SDE Sheet / GeeksforGeeks' },
        { id: 's3', name: 'DBMS & Complex SQL Queries', weight: 15, resource: 'Mode SQL Tutorial & W3Schools' },
        { id: 's4', name: 'Operating Systems & Threading', weight: 15, resource: 'Operating Systems: Three Easy Pieces (Free PDF)' },
        { id: 's5', name: 'OOP Concepts in Java/C++/Python', weight: 15, resource: 'Refactoring.Guru Design Patterns' },
        { id: 's6', name: 'Computer Networks & HTTP/REST', weight: 15, resource: 'Kurose & Ross Open Lecture Notes' },
      ],
      sampleQuestions: [
        'Explain how HashMap collision resolution works under high load in Java.',
        'Find the longest palindromic substring with O(1) auxiliary space.',
        'Walk through the exact database index lookup process for a B+ tree query.',
      ],
    },
    {
      id: 'data',
      name: 'Data & Business Analyst',
      icon: <Database className="w-4 h-4 text-cyan-600" />,
      overview: 'Evaluates analytical reasoning, SQL query fluency, dashboard visualization, and translating business metrics into actionable insights.',
      campusRounds: [
        { round: 'Round 1', name: 'Quantitative & Analytical OA', focus: 'Probability, statistics, data interpretation (DI) sets' },
        { round: 'Round 2', name: 'Live SQL Assessment', focus: 'Multi-table JOINs, subqueries, and window functions' },
        { round: 'Round 3', name: 'Business Case Study', focus: 'Product metrics, root-cause analysis, Excel/BI modeling' },
        { round: 'Round 4', name: 'Stakeholder & HR Round', focus: 'Communication of data insights to non-technical leaders' },
      ],
      skillsList: [
        { id: 'd1', name: 'SQL Window Functions (ROW_NUMBER, RANK)', weight: 25, resource: 'Mode Analytics Advanced SQL' },
        { id: 'd2', name: 'Python for Analysis (Pandas & NumPy)', weight: 20, resource: '10 Minutes to Pandas Official Docs' },
        { id: 'd3', name: 'Business Intelligence (PowerBI / Tableau)', weight: 20, resource: 'Microsoft Power BI Free Learning Path' },
        { id: 'd4', name: 'Probability & Descriptive Statistics', weight: 15, resource: 'Khan Academy Statistics' },
        { id: 'd5', name: 'Data Cleaning & Exploratory Analysis (EDA)', weight: 10, resource: 'Kaggle Learn Micro-Courses' },
        { id: 'd6', name: 'Business Metric Trees (CAC, LTV, Churn)', weight: 10, resource: 'A16Z Marketplace & SaaS Metrics Guide' },
      ],
      sampleQuestions: [
        'Write a query to calculate month-over-month active user retention using window functions.',
        'If a key conversion metric drops 15% on Monday, how would you isolate the root cause?',
        'Explain the difference between Type I and Type II errors with a product testing example.',
      ],
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps Associate',
      icon: <Cloud className="w-4 h-4 text-indigo-600" />,
      overview: 'Focuses on Linux operating systems, containerization, networking fundamentals, and entry-level cloud infrastructure concepts.',
      campusRounds: [
        { round: 'Round 1', name: 'Systems & Networking OA', focus: 'Linux commands, TCP/IP, DNS, scripting fundamentals' },
        { round: 'Round 2', name: 'Hands-on Technical Task', focus: 'Dockerizing an application and writing bash scripts' },
        { round: 'Round 3', name: 'Cloud Architecture Basics', focus: 'Compute, storage, IAM, and security principles' },
        { round: 'Round 4', name: 'Behavioral & Reliability HR', focus: 'Handling incidents, team communication, ownership' },
      ],
      skillsList: [
        { id: 'c1', name: 'Linux System Administration & Shell Scripting', weight: 25, resource: 'Linux Journey (Free Interactive Guide)' },
        { id: 'c2', name: 'Docker & Multi-Stage Containerization', weight: 20, resource: 'Docker Official Getting Started Guide' },
        { id: 'c3', name: 'Networking & Protocols (DNS, TCP, CIDR)', weight: 20, resource: 'Julia Evans Networking Zines & RFC Summaries' },
        { id: 'c4', name: 'AWS / GCP Core Fundamentals', weight: 15, resource: 'AWS Skill Builder Free Practitioner Tier' },
        { id: 'c5', name: 'Git Workflow & CI/CD Actions', weight: 10, resource: 'GitHub Skills Interactive Tutorials' },
        { id: 'c6', name: 'Web Server Config (Nginx / Reverse Proxies)', weight: 10, resource: 'DigitalOcean Community Nginx Tutorials' },
      ],
      sampleQuestions: [
        'How would you diagnose high CPU load on a Linux server using terminal tools?',
        'Explain how Docker layers work and how to minimize container image sizes.',
        'What happens under the hood during a DNS lookup when a user types an address?',
      ],
    },
  ];

  const [selectedTrack, setSelectedTrack] = useState<string>('sde');
  // Store user-checked skills to simulate the live readiness calculator
  const [checkedSkills, setCheckedSkills] = useState<Record<string, boolean>>({
    s1: true,
    s3: true,
    d1: true,
    c1: true,
  });

  const activeTrack = tracks.find((t) => t.id === selectedTrack) || tracks[0];

  const toggleSkill = (skillId: string) => {
    setCheckedSkills((prev) => ({
      ...prev,
      [skillId]: !prev[skillId],
    }));
  };

  // Calculate score for active track
  const currentTrackScore = activeTrack.skillsList.reduce((acc, skill) => {
    return acc + (checkedSkills[skill.id] ? skill.weight : 0);
  }, 0);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Interactive Concept Sandbox
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Explore Placement Roles & Test Your Readiness
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See how PrepPilot AI breaks down role expectations. Select a track below and check off skills you already know to calculate your baseline placement alignment.
          </p>
        </div>

        {/* Track Switcher Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {tracks.map((track) => {
            const isCurrent = track.id === selectedTrack;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{track.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Sandbox Dashboard */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          {/* Top overview bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-1">
                Active Placement Track
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                {activeTrack.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {activeTrack.overview}
              </p>
            </div>

            {/* Dynamic Score Widget */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4 flex-shrink-0 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 font-extrabold text-lg">
                {currentTrackScore}%
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide block">
                  Simulated Readiness
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  {currentTrackScore >= 70
                    ? 'Placement Ready Pace'
                    : currentTrackScore >= 40
                    ? 'Good Foundation, Keep Pushing'
                    : 'Early Stage Foundation'}
                </span>
              </div>
            </div>
          </div>

          {/* 3 Column Grid: Rounds, Interactive Skills, Sample Questions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            {/* Column 1: Typical Campus Screening Rounds */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                <Layers className="w-4 h-4 text-indigo-600" />
                <h4 className="text-sm font-bold text-slate-900">
                  Campus Drive Process
                </h4>
              </div>

              <div className="space-y-3">
                {activeTrack.campusRounds.map((r, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase tracking-wider">
                      {r.round} • {r.name}
                    </span>
                    <p className="text-xs text-slate-600 mt-1.5 leading-snug">
                      {r.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Interactive Skill Matrix (Click to check/uncheck) */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Required Competencies
                  </h4>
                </div>
                <span className="text-[11px] text-slate-400">Click to check</span>
              </div>

              <div className="space-y-2.5">
                {activeTrack.skillsList.map((skill) => {
                  const isChecked = !!checkedSkills[skill.id];
                  return (
                    <button
                      key={skill.id}
                      onClick={() => toggleSkill(skill.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? 'bg-indigo-50/50 border-indigo-200'
                          : 'bg-slate-50/60 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        {isChecked ? (
                          <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-300" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <p className={`text-xs font-semibold ${isChecked ? 'text-indigo-950' : 'text-slate-800'}`}>
                            {skill.name}
                          </p>
                          <span className="text-[10px] text-slate-400 font-medium">
                            +{skill.weight}%
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 truncate">
                          Curated Ref: {skill.resource}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 3: Typical Placement Interview Questions */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <HelpCircle className="w-4 h-4 text-emerald-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Real Interview Queries
                  </h4>
                </div>

                <div className="space-y-3">
                  {activeTrack.sampleQuestions.map((q, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-snug">
                      <span className="font-bold text-indigo-600 block mb-1">Q{i + 1}:</span>
                      "{q}"
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA within sandbox */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenEarlyAccess}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-indigo-900 text-white text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Request Full Skill Map</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { Cpu, Award, Zap, Code, Terminal, Network, ChevronRight } from 'lucide-react';

export const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const keyMilestones = [
    {
      year: '2023',
      title: 'Academic Genesis',
      description: 'Scored 90% in CBSE 12th Board examinations and joined Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM), embarking on a B.Tech in Computer Science Engineering.',
      details: 'Started programming in C and Python, building structural logic foundations.',
      icon: Terminal,
    },
    {
      year: '2024',
      title: 'Nexus Community & Web Dev',
      description: 'Elected as the Social Media Head at Nexus Tech Community, taking on leadership for tech events, organizing coding workshops, and building real-world Full-Stack web application layouts.',
      details: 'Managed student engagement strategies and coordinated high-reach online/offline college technical assemblies.',
      icon: Network,
    },
    {
      year: '2025',
      title: 'AI & Data Simulations',
      description: 'Participated in the Google GenAI JAM and launched the AI Public Health Guide. Mastered core machine learning concepts including neural classifiers, analytics simulations, and database engineering.',
      details: 'Conducted Deloitte and BCG analytics projects simulated to validate engineering solutions matching actual corporate problems.',
      icon: Cpu,
    },
    {
      year: '2026-2027',
      title: 'B.Tech Specialization & Forward',
      description: 'Maintaining a 8.71 cumulative GPA, focusing heavily on modern data pipelines, microservices architecture, and preparing to transition into software engineer opportunities at Tier-1 companies.',
      details: 'Ready to bring exceptional backend optimization processes and community orchestration leadership skills to the team.',
      icon: Zap,
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Professional Overview
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tighter">
            About Jaya Pandey
          </h3>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
            Bridging software development logic with community leadership and artificial intelligence concepts.
          </p>
        </div>

        {/* Narrative columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Glassmorphic introduction card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200/60 dark:border-white/10 shadow-sm">
              <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Code className="text-blue-500" size={18} /> Software Engineer Mission
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-sm">
                {PERSONAL_INFO.extendedBio}
              </p>
            </div>
            
            {/* Quick stats banner */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-center">
                <span className="block font-display text-3xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tighter">8.71</span>
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1">Cumulative B.Tech CGPA</span>
              </div>
              <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-center">
                <span className="block font-display text-3xl font-extrabold text-purple-600 dark:text-purple-400 tracking-tighter">2027</span>
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1">B.Tech Graduation Year</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Indicators */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/65 dark:border-white/10 flex gap-4 items-start">
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Terminal size={18} />
              </div>
              <div>
                <h5 className="font-display font-bold text-sm text-slate-900 dark:text-white">Robust Engineering Base</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Proficient in standard low-level environments including C++ and Python alongside object-oriented design and algorithm optimization.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/65 dark:border-white/10 flex gap-4 items-start">
              <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Cpu size={18} />
              </div>
              <div>
                <h5 className="font-display font-bold text-sm text-slate-900 dark:text-white">AI-First Problem Solving</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Eagerly building generative models combined with cloud architecture databases to construct responsive client interfaces.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/65 dark:border-white/10 flex gap-4 items-start">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Award size={18} />
              </div>
              <div>
                <h5 className="font-display font-bold text-sm text-slate-900 dark:text-white">Community & Team Leadership</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Demonstrated capacity directing digital outreach and hosting panel workshops inside Shri Ramswaroop student community modules.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Interactive Component */}
        <div className="mt-16">
          <h4 className="text-center font-display text-xs font-bold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-widest">
            Interactive Academic & Leadership Timeline
          </h4>
          
          {/* Timeline Indicators tabs */}
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mb-8 bg-slate-200/30 dark:bg-white/5 p-1.5 rounded-2xl max-w-2xl mx-auto border border-slate-200/50 dark:border-white/10">
            {keyMilestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <button
                  id={`timeline-tab-${idx}`}
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full py-2 px-4 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    activeStep === idx
                      ? 'bg-white text-slate-950 dark:bg-white dark:text-slate-950 shadow-md border border-slate-100'
                      : 'text-slate-500 dark:text-slate-450 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/30 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon size={12} />
                  <span>{milestone.year}</span>
                </button>
              );
            })}
          </div>

          {/* Active Timeline Screen details */}
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 shadow-sm relative">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase bg-blue-500/10 px-2.5 py-0.5 rounded-full">
                Phase {activeStep + 1}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-705" />
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 pr-2">
                Timeline Mark
              </span>
            </div>

            <h5 className="font-display text-xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tighter">
              {keyMilestones[activeStep].title}
            </h5>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 font-sans">
              {keyMilestones[activeStep].description}
            </p>

            <div className="flex gap-2 items-start bg-slate-100/60 dark:bg-white/5 p-4 rounded-xl border-l-4 border-blue-500 text-xs text-slate-550 dark:text-slate-400 leading-normal">
              <div className="mt-0.5"><ChevronRight size={14} className="text-blue-500" /></div>
              <div>{keyMilestones[activeStep].details}</div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data';
import { FolderGit2, ExternalLink, Github, Sparkles, Lock, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'incubation'>('all');

  const completedProjects = PROJECTS_DATA.filter(p => p.type !== 'Coming Soon');
  const incubationProjects = PROJECTS_DATA.filter(p => p.type === 'Coming Soon');

  const displayData = PROJECTS_DATA.filter(p => {
    if (filter === 'completed') return p.type !== 'Coming Soon';
    if (filter === 'incubation') return p.type === 'Coming Soon';
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            My Portfolio
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tighter">
            Engineering Projects & Blueprints
          </h3>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
            A selective exhibition of software models, digital systems, and artificial intelligence configurations.
          </p>
        </div>

        {/* Categories togglers */}
        <div className="flex justify-center gap-1.5 mb-12 bg-slate-200/30 dark:bg-white/5 p-1.5 rounded-full max-w-sm mx-auto border border-slate-200/50 dark:border-white/10">
          <button
            id="proj-toggle-all"
            onClick={() => setFilter('all')}
            className={`w-full py-2 px-4 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-white text-slate-950 dark:bg-white dark:text-slate-950 shadow-sm border border-slate-100'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Show All
          </button>
          <button
            id="proj-toggle-completed"
            onClick={() => setFilter('completed')}
            className={`w-full py-2 px-4 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'completed'
                ? 'bg-white text-slate-950 dark:bg-white dark:text-slate-950 shadow-sm border border-slate-100'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Completed
          </button>
          <button
            id="proj-toggle-incubating"
            onClick={() => setFilter('incubation')}
            className={`w-full py-2 px-4 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'incubation'
                ? 'bg-white text-slate-950 dark:bg-white dark:text-slate-950 shadow-sm border border-slate-100'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Incubator
          </button>
        </div>

        {/* Project Card Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayData.map((proj, idx) => {
              const isComingSoon = proj.type === 'Coming Soon';
              return (
                <motion.div
                  id={`project-card-${proj.id}`}
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`rounded-2xl border text-left flex flex-col justify-between overflow-hidden relative group transition-all duration-300 ${
                    isComingSoon
                      ? 'bg-white/30 dark:bg-white/2 border-slate-200/50 dark:border-white/5 opacity-85 hover:opacity-100 hover:border-slate-300 dark:hover:border-white/10'
                      : 'bg-white/50 dark:bg-white/5 border-slate-200/60 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-blue-500/30 dark:hover:border-blue-500/20'
                  }`}
                >
                  {/* Decorative Gradient Background inside completed card */}
                  {!isComingSoon && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500" />
                  )}

                  {/* Top Header Card Info */}
                  <div className="p-6 md:p-8 space-y-4">
                    {/* Badge and Indicators */}
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider rounded-md ${
                        isComingSoon
                          ? 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-white/5'
                          : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10'
                      }`}>
                        {proj.type}
                      </span>
                      
                      {isComingSoon ? (
                        <div className="p-1 px-2 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono text-[9px] uppercase tracking-wider flex items-center gap-1">
                          <Lock size={10} /> Active Blueprint
                        </div>
                      ) : (
                        <FolderGit2 className="text-slate-400 dark:text-slate-600" size={18} />
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="font-display text-base font-bold text-slate-850 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                      {proj.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-505 dark:text-slate-400 text-xs sm:text-xs leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Features checklist */}
                    {proj.features && proj.features.length > 0 && (
                      <div className="pt-2 space-y-1.5">
                        <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">Key features</p>
                        {proj.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex gap-1.5 items-start text-xs text-slate-550 dark:text-slate-405">
                            <span className="mt-1 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Tech/Buttons Drawer */}
                  <div className="p-6 md:p-8 pt-0 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/1 flex-1 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-1.5 mb-5 select-none mt-4">
                      {proj.technologies.map((t, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 font-mono text-[9px] bg-slate-200/50 dark:bg-white/5 text-slate-600 dark:text-slate-350 rounded border border-slate-200/20 dark:border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA Actions */}
                    {!isComingSoon && (
                      <div className="flex gap-4">
                        <a
                          id={`proj-git-${proj.id}`}
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-1.5 px-3 bg-white/5 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-350 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 border border-slate-200 dark:border-white/10 transition-colors"
                        >
                          <Github size={12} /> GitHub
                        </a>
                        <a
                          id={`proj-demo-${proj.id}`}
                          href={proj.liveUrl}
                          className="py-1.5 px-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-colors"
                        >
                          Demo <ExternalLink size={11} />
                        </a>
                      </div>
                    )}

                    {isComingSoon && (
                      <div className="text-[10px] font-mono text-slate-400 dark:text-slate-550 flex items-center gap-1">
                        <Layers size={10} className="text-purple-400 animate-pulse" /> Compilation scheduled in next sprint
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

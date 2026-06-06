import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS_DATA } from '../data';
import { Code2, Globe, Database, Wrench, Lightbulb, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'web' | 'tools' | 'databases' | 'soft'>('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Code2 },
    { id: 'languages', name: 'Languages', icon: Code2 },
    { id: 'web', name: 'Web Dev', icon: Globe },
    { id: 'databases', name: 'Databases', icon: Database },
    { id: 'tools', name: 'Frameworks & Tools', icon: Wrench },
    { id: 'soft', name: 'Professional leadership', icon: Lightbulb },
  ];

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            My Capabilities
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tighter">
            Technical & Soft Skills
          </h3>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
            Ranging from mathematical automation tools to full-stack django web frameworks and social coordination management.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                id={`skill-cat-btn-${cat.id}`}
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`py-2 px-4 rounded-full text-[11px] font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 border border-slate-100 shadow-sm'
                    : 'bg-white/5 border border-slate-200/60 dark:border-white/5 text-slate-650 dark:text-slate-400 hover:bg-white/10 dark:hover:bg-white/10'
                }`}
              >
                <Icon size={12} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                id={`sk-card-${skill.name.toLowerCase().replace(/\s/g, '-')}`}
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 hover:border-slate-300/40 dark:hover:border-white/20 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display font-bold text-sm text-slate-850 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                      {skill.level}%
                    </span>
                  </div>

                  {/* High Quality Progress Indicator */}
                  <div className="w-full h-1.5 bg-slate-200/60 dark:bg-white/5 rounded-full overflow-hidden mb-4">
                    <motion.div
                      id={`sk-bar-${skill.name.toLowerCase().replace(/\s/g, '-')}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>

                {/* Subtitle tag of classification */}
                <div className="flex items-center gap-1.5 mt-2">
                  <CheckCircle2 size={11} className="text-blue-500/60 dark:text-blue-400/50" />
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    Verified Competency
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tech Stack Banner for floating/interactive flair */}
        <div className="mt-16 text-center">
          <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-4">
            Common Workflow Tools
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {['Git', 'GitHub', 'VS Code', 'Tableau', 'Django', 'Jupyter', 'MySQL'].map((tool, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 font-mono font-bold text-xs text-slate-650 dark:text-slate-400 bg-white/5 hover:bg-white/10 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 rounded-xl transition-all"
              >
                #{tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

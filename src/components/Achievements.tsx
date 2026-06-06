import React, { useState, useEffect } from 'react';
import { ACHIEVEMENTS_DATA } from '../data';
import { Trophy, HelpCircle, Users, Speech, Milestone } from 'lucide-react';
import { motion } from 'motion/react';

// Subcomponent to count-up stats gracefully
const StatCount: React.FC<{ value: number; duration?: number }> = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 30);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

export const Achievements: React.FC = () => {
  const iconsMap = [
    Trophy, // SIH
    Milestone, // GenAI
    Users, // Community Leadership
    Speech, // Event management
    HelpCircle // Certificates
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Record of Excellence
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tighter">
            Key Achievements & Statistical Milestones
          </h3>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
            Active technical deployments, national engineering hackathons, and dynamic project leadership roles.
          </p>
        </div>

        {/* Counters & Info Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {ACHIEVEMENTS_DATA.map((ach, idx) => {
            const Icon = iconsMap[idx % iconsMap.length];
            return (
              <motion.div
                id={`achievement-card-${idx}`}
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 hover:border-blue-500/30 text-center flex flex-col justify-between hover:shadow-lg transition-all group animate-fade-in"
              >
                <div className="space-y-4">
                  {/* Icon panel */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Icon size={16} />
                  </div>

                  {/* Stat Counter with customized suffix */}
                  <div className="font-display text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    <StatCount value={ach.metric} />
                    <span className="text-blue-500 dark:text-blue-400 ml-0.5">+</span>
                  </div>

                  {/* Title labels */}
                  <h4 className="font-display font-bold text-xs text-slate-800 dark:text-slate-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                    {ach.title}
                  </h4>
                </div>

                {/* Narrative mini explanation */}
                <p className="text-[10px] text-slate-400 dark:text-slate-450 mt-4 leading-relaxed border-t border-slate-205 dark:border-white/5 pt-3">
                  {ach.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mini Hackathon Highlights Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
          <div className="space-y-1 text-left">
            <h4 className="font-display font-extrabold text-slate-900 dark:text-white flex items-center gap-2 text-sm sm:text-base tracking-tight">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
              Smart India National Participant
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Co-created solutions targeting social issues on a national scale representing SRMCEM CSE Division.
            </p>
          </div>
          <span className="px-4 py-1.5 font-mono text-[11px] text-blue-600 dark:text-blue-400 font-bold bg-blue-500/10 rounded-full mt-3 md:mt-0 select-none uppercase tracking-wider">
            Verified Record
          </span>
        </div>

      </div>
    </section>
  );
};

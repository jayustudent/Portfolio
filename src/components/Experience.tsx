import React from 'react';
import { EXPERIENCE_DATA } from '../data';
import { Briefcase, Calendar, MapPin, Users, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Professional History
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tighter">
            Work Experience & Team Leadership
          </h3>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
            Hands-on software development internships combined with actual roles leading technical clubs in collegiate networks.
          </p>
        </div>

        {/* Timeline Path container */}
        <div className="relative border-l border-slate-200 dark:border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div id={`exp-timeline-item-${idx}`} key={idx} className="relative group">
              
              {/* Floating icon bullet */}
              <div className="absolute -left-[53px] md:-left-[69px] top-1.5 w-10 h-10 rounded-full border-4 border-slate-100 dark:border-clean-bg bg-gradient-to-tr from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300">
                {idx === 0 ? <Users size={16} /> : <Briefcase size={16} />}
              </div>

              {/* Box Details */}
              <div className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 shadow-sm hover:border-blue-500/30 dark:hover:border-blue-500/20 transition-all">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <p className="font-mono text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold mt-1">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1 font-mono text-xs text-slate-450 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points with Premium check line-markers */}
                <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-sans mt-4">
                  {exp.responsibilities.map((resp, bIdx) => (
                    <li key={bIdx} className="flex gap-2 items-start">
                       <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

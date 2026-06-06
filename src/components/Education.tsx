import React from 'react';
import { EDUCATION_DATA } from '../data';
import { Landmark, GraduationCap, Clock } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Academic Track
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tighter">
            Education Timeline
          </h3>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
            Maintaining robust academics paired with technical projects at leading tech institutions.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l border-slate-200 dark:border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {EDUCATION_DATA.map((edu, idx) => (
            <div id={`edu-timeline-item-${idx}`} key={idx} className="relative group">
              {/* Timeline bubble icon */}
              <div className="absolute -left-[53px] md:-left-[69px] top-1.5 w-10 h-10 rounded-full border-4 border-slate-100 dark:border-clean-bg bg-gradient-to-tr from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300">
                {idx === 0 ? <GraduationCap size={16} /> : <Landmark size={15} />}
              </div>

              {/* Education Block Container */}
              <div className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 shadow-sm hover:border-purple-500/30 dark:hover:border-purple-500/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  {/* Left Column values */}
                  <div>
                    <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      {edu.degree}
                    </h4>
                    {edu.major && (
                      <p className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-1">
                        {edu.major}
                      </p>
                    )}
                    <p className="text-slate-650 dark:text-slate-300 text-xs sm:text-sm mt-1.5 font-bold">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Score details */}
                  <div className="flex flex-col items-end gap-1.5 font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
                      <Clock size={12} /> {edu.period}
                    </span>
                    <span className="px-2.5 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 font-bold border border-green-500/15 rounded text-[11px]">
                      {edu.score}
                    </span>
                  </div>
                </div>

                {/* Narrative highlight summary */}
                <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed mt-4 pt-4 border-t border-slate-200/50 dark:border-white/5">
                  {idx === 0 
                    ? "Currently covering computer engineering domains, specializing in object-oriented programming, data structures, and database query optimization."
                    : "Focused coursework covering advanced science foundations and technical mathematics, graduating with high distinction."
                  }
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

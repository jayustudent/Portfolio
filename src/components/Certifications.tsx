import React from 'react';
import { CERTIFICATIONS_DATA } from '../data';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Verification Records
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tighter">
            Professional Certifications & Accreditations
          </h3>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
            Simulations and hands-on modules designed by globally recognized industry leaders to build commercial expertise.
          </p>
        </div>

        {/* Certifications cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div
              id={`cert-card-${idx}`}
              key={idx}
              className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 hover:border-purple-500/30 dark:hover:border-purple-500/20 shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Badge layout */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <Award size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  
                  {cert.badge && (
                    <span className="px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase border border-blue-500/10 bg-blue-500/5 text-blue-600 dark:text-blue-400 rounded">
                      {cert.badge}
                    </span>
                  )}
                </div>

                {/* Info titles */}
                <div className="space-y-2">
                  <h4 className="font-display text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                    {cert.title}
                  </h4>
                  <p className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-405">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Bottom verify actions panel */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                  <Calendar size={12} /> {cert.date}
                </div>

                {cert.verifyUrl && (
                  <a
                    id={`cert-verify-${idx}`}
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors font-sans"
                  >
                    Verify Credential <ExternalLink size={11} className="ml-0.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

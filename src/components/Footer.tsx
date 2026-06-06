import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Heart, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const Footer: React.FC = () => {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const toggleToTop = () => {
      setShowToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleToTop);
    return () => window.removeEventListener('scroll', toggleToTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="bg-transparent border-t border-slate-200/50 dark:border-white/5 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand label */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center font-mono font-bold">
            <Terminal size={14} />
          </div>
          <div>
            <span className="font-display font-extrabold text-slate-800 dark:text-slate-200 text-sm tracking-tight pr-1">
              Jaya Pandey
            </span>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest pl-1 bg-slate-200/40 dark:bg-white/5 rounded p-1">
              v2.5.0
            </span>
          </div>
        </div>

        {/* Action statements footer text */}
        <div className="text-xs text-slate-450 dark:text-slate-500 font-sans flex items-center justify-center gap-1.5 flex-wrap">
          <span>&copy; {new Date().getFullYear()} Jaya Pandey. All rights reserved.</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="flex items-center gap-1">
            Engineered with <Heart size={11} className="text-red-500 animate-[pulse_1s_infinite]" /> for recruiter analysis
          </span>
        </div>

        {/* Back to top toggle */}
        <div className="flex gap-4">
          <button
            id="back-to-top"
            onClick={scrollToTop}
            style={{ opacity: showToTop ? 1 : 0, pointerEvents: showToTop ? 'auto' : 'none' }}
            className="p-3 bg-white hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 hover:shadow-lg rounded-full border border-slate-200 dark:border-white/10 text-slate-650 dark:text-slate-300 transition-all duration-300 cursor-pointer"
            title="Return to peak"
          >
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
};

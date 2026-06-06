import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { useTheme } from './ThemeContext';
import { JayaProfilePhoto } from './JayaProfilePhoto';
import { Github, Linkedin, Mail, FileText, ArrowDown, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [typedText, setTypedText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const roles = [
    'Python Developer',
    'C++ Programmer',
    'AI Enthusiast',
    'Future Software Engineer',
    'Tech Community Leader',
    'Problem Solver'
  ];

  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const DELAY_BETWEEN_WORDS = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = roles[wordIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length - 1));
      }, DELETING_SPEED);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, TYPING_SPEED);
    }

    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), DELAY_BETWEEN_WORDS);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6"
    >
      {/* Background spot spotlights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Floating tech badges */}
        <div className="mb-6 flex gap-2 justify-center items-center">
          <span className="px-3 py-1 text-[11px] font-mono font-bold tracking-widest text-purple-400 bg-purple-500/5 border border-purple-400/10 rounded-full uppercase flex items-center gap-1.5">
            Class of 2027
          </span>
        </div>
 
        {/* Profile Image representation */}
        <div className="relative mb-8 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-xl opacity-35 animate-pulse" />
          
          <div className="relative w-48 h-48 rounded-full p-2 bg-slate-900/40 backdrop-blur-xl border border-white/20 flex items-center justify-center overflow-hidden z-10 shadow-xl">
            <JayaProfilePhoto 
              rounded="rounded-full"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 animate-fade-in" 
            />
          </div>
        </div>
 
        {/* Name is styled to be brilliantly visible as bold white */}
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-2">
          {PERSONAL_INFO.name}
        </h1>
        
        {/* Typing text container */}
        <div className="h-8 mb-4 flex items-center justify-center">
          <p className="font-mono text-sm sm:text-base text-slate-500 dark:text-slate-400">
            <span>I am a </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-bold">
              {typedText}
            </span>
            <span className="inline-block w-[2px] h-[1em] ml-1 bg-blue-600 dark:bg-blue-400 animate-[pulse_0.8s_infinite]" />
          </p>
        </div>
 
        {/* Introduction Bio */}
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8 italic font-sans">
          "{PERSONAL_INFO.bio}"
        </p>
 
        {/* Button Actions */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
          <a
            id="hero-view-projects"
            href="#projects"
            className="px-6 py-3 bg-gradient-to-tr from-blue-500 to-purple-600 hover:opacity-90 rounded-full text-xs font-semibold hover:shadow-lg transition-all text-white uppercase tracking-wider"
          >
            Projects
          </a>
 
          <button
            id="hero-download-resume"
            onClick={() => setIsResumeOpen(true)}
            className="px-6 py-3 bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-xs font-semibold hover:bg-slate-150 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 flex items-center gap-2 transition-all uppercase tracking-wider cursor-pointer"
          >
            <span className="flex items-center gap-1.5"><FileText size={14} /> Resume</span>
          </button>
 
          <a
            id="hero-contact cursor-pointer"
            href="#contact"
            className="px-6 py-3 bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-xs font-semibold hover:bg-slate-150 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 flex items-center gap-2 transition-all uppercase tracking-wider cursor-pointer"
          >
            Contact
          </a>
        </div>
 
        {/* Social Icons */}
        <div className="flex gap-4 items-center justify-center">
          {[
            { id: 'hero-social-github', href: PERSONAL_INFO.github, label: 'GitHub', icon: Github },
            { id: 'hero-social-linkedin', href: PERSONAL_INFO.linkedin, label: 'LinkedIn', icon: Linkedin },
            { id: 'hero-social-email', href: `mailto:${PERSONAL_INFO.email}`, label: 'Email', icon: Mail }
          ].map((soc) => {
            const Icon = soc.icon;
            return (
              <a
                id={soc.id}
                key={soc.id}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-650 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full border border-slate-200/50 dark:border-slate-800/50 transition-all"
                title={soc.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
 
        {/* Scrolling indicator */}
        <div className="mt-12 animate-bounce">
          <a href="#about" className="text-slate-450 dark:text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
  
      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            id="resume-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              id="resume-modal-container"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                id="resume-close-trigger"
                onClick={() => setIsResumeOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                Close
              </button>
 
              {/* Resume Design inside Modal */}
              <div className="space-y-6 pt-4 text-left">
                <div className="border-b pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-slate-200 dark:border-slate-800">
                  <div>
                    <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white">{PERSONAL_INFO.name}</h2>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mt-1">{roles[roles.length-2]}</p>
                  </div>
                  <div className="text-sm space-y-1 font-mono text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1.5"><Mail size={13} /> {PERSONAL_INFO.email}</div>
                    <div className="flex items-center gap-1.5"><MapPin size={13} /> {PERSONAL_INFO.location}</div>
                  </div>
                </div>
 
                {/* Resume Sections */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2 border-l-2 pl-2 border-blue-600 text-slate-900 dark:text-white">
                    Education Summary
                  </h3>
                  <div className="pl-3 py-1 space-y-2">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.degree}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{PERSONAL_INFO.college}</p>
                      <p className="text-xs font-mono mt-1 text-slate-400">2023 - 2027 | CGPA: {PERSONAL_INFO.cgpa}</p>
                    </div>
                  </div>
                </div>
 
                <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2 border-l-2 pl-2 border-blue-600 text-slate-900 dark:text-white">
                    Core Technical Experience
                  </h3>
                  <div className="space-y-3 pl-3">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Social Media Head & Team Lead</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Nexus Tech Community - SRMCEM</p>
                      <p className="text-xs font-mono text-slate-400">2024 - Present</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Python Full-Stack Summer Training Intern</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">SRDT Pvt. Ltd.</p>
                      <p className="text-xs font-mono text-slate-400">Summer 2024</p>
                    </div>
                  </div>
                </div>
 
                <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2 border-l-2 pl-2 border-blue-600 text-slate-900 dark:text-white">
                    Primary Core Skills
                  </h3>
                  <div className="flex flex-wrap gap-2 pl-3">
                    {['Python', 'C++', 'C', 'JavaScript', 'Django', 'SQL / MySQL', 'Git & GitHub', 'Tableau', 'Technical Leadership'].map((skill, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg border-transparent">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
 
                {/* Download Actions */}
                <div className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4 border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-mono text-slate-400">Saved formatting verified for ATS guidelines</span>
                  <button
                    id="resume-simulated-pdf-download"
                    onClick={() => {
                      window.print();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl shadow-md font-bold flex items-center gap-2 justify-center cursor-pointer"
                  >
                    Print or Save as PDF
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Menu, X, Terminal, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-clean-bg/80 backdrop-blur-md py-3 shadow-lg border-b border-slate-200/50 dark:border-white/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a id="nav-brand-logo" href="#" className="flex items-center gap-3.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-mono font-bold shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
            <span className="text-sm font-extrabold tracking-tighter">JP</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold tracking-tight text-slate-900 dark:text-white leading-none">
              Jaya Pandey
            </span>
            <span className="font-mono text-[9px] text-blue-500 mt-1 uppercase tracking-widest font-semibold">
              Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              id={`nav-link-${link.name.toLowerCase()}`}
              key={idx}
              href={link.href}
              className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-clean-bg border-b border-slate-200 dark:border-white/10 shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, idx) => (
                <a
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  key={idx}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 border-b border-slate-100 dark:border-white/5 flex justify-between items-center"
                >
                  {link.name}
                  <span className="text-xs text-slate-400">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { ParticleBg } from './components/ParticleBg';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function PortfolioApp() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);

  // Simulated professional console upstart sequence
  useEffect(() => {
    let currentPercent = 0;
    const interval = setInterval(() => {
      currentPercent += Math.floor(Math.random() * 15) + 5;
      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 300);
      }
      setLoadPercentage(currentPercent);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Background style - defaults to the dark mode theme colors
  const bgClass = theme === 'dark' 
    ? 'bg-clean-bg text-slate-200 selection:bg-blue-600/30 selection:text-blue-200' 
    : 'bg-slate-50 text-slate-800 selection:bg-blue-100 selection:text-blue-900';

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          id="global-portal-loader"
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center text-white z-50 p-6"
        >
          <div className="max-w-md w-full text-left space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Terminal size={22} className="animate-pulse" />
              </div>
              <div>
                <h2 className="font-display font-extrabold text-lg tracking-tight">Jaya Pandey</h2>
                <p className="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-widest leading-none mt-1">
                  Secure Developer Terminal
                </p>
              </div>
            </div>

            {/* Console Log Lines */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl font-mono text-xs text-slate-400 space-y-1.5 shadow-xl">
              <div className="flex items-center gap-1.5">
                <span className="text-blue-500">[SYS]</span>
                <span>Initializing portfolio bootloader...</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500">[OK]</span>
                <span>Responsive framework assets connected.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-purple-500">[SYS]</span>
                <span>Applying active layout preferences...</span>
              </div>
              <div className="text-slate-500 mt-2">
                &gt; Build status: {loadPercentage}%
              </div>
            </div>

            {/* Progress loadbar style */}
            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
               <div
                style={{ width: `${loadPercentage}%` }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-100 ease-out"
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          id="main-app-portfolio-frame"
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`min-h-screen relative overflow-hidden transition-all duration-500 ${bgClass}`}
        >
          {/* Ambient Particles Layer */}
          <ParticleBg />
          
          {/* Clean Minimalism Background Spotlights */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Cursor Glow effect */}
          <CursorGlow />
 
          {/* Sticky Header block */}
          <Navbar />
 
          {/* Core Page Modules stack */}
          <main className="relative z-10">
            {/* Hero Splash screen */}
            <Hero />
            
            {/* Grid-based custom split dividers */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
 
            {/* About Narrative timeline */}
            <About />
 
            <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
 
            {/* Custom Skills gauges */}
            <Skills />
 
            <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
 
            {/* Work experience timelines */}
            <Experience />
 
            <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
 
            {/* Completed & Blueprint projects grids */}
            <Projects />
 
            <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
 
            {/* Verification cert cards */}
            <Certifications />
 
            <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
 
            {/* Count up counters grids */}
            <Achievements />
 
            <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
 
            {/* Academic studies schedules */}
            <Education />
 
            <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
 
            {/* Contact maps and lead sheets */}
            <Contact />
          </main>
 
          {/* Footer containing scroll anchor triggers */}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

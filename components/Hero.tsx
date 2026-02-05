import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-36 flex flex-col items-center text-center px-4">
      {/* Current Status Pill - High Fidelity Match */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0a101f] border border-white/5 mb-14 shadow-lg"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
        <span className="text-[11px] font-medium text-emerald-500 tracking-tight">
          Currently building: <span className="opacity-80">Personal AI Voice Agent</span>
        </span>
      </motion.div>

      {/* Main Title - High Fidelity Match */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[42px] leading-[1.05] sm:text-6xl md:text-7xl font-bold tracking-tight mb-12 max-w-4xl text-white"
      >
        I build systems <span className="text-blue-500">that</span> <br className="hidden sm:block" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">compound with time.</span>
      </motion.h1>

      {/* Sub-heading - Exactly as requested */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-slate-400 text-base md:text-[19px] max-w-[580px] mb-14 leading-relaxed font-medium opacity-90"
      >
        Ayush M. — entrepreneur & product builder focused on technology, finance, AI and scalable systems.
      </motion.p>

      {/* Improved Buttons - Matching Screenshot Styling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-[460px]"
      >
        <button 
          onClick={() => scrollToSection('projects')}
          className="flex-1 py-5 rounded-[1.25rem] bg-[#2563eb] text-white font-bold text-[15px] hover:bg-blue-500 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-900/20 active:scale-[0.98]"
        >
          View Projects
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="flex-1 py-5 rounded-[1.25rem] bg-[#020617] border border-white/10 text-white font-bold text-[15px] hover:bg-slate-900 transition-all active:scale-[0.98] shadow-lg shadow-black/40"
        >
          Contact Me
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
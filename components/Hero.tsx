
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
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8 text-[10px] sm:text-xs font-medium text-emerald-400"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Currently building: Personal AI Voice Agent
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
      >
        I build systems <br className="hidden sm:block" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          that compound with time.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mb-10 px-2"
      >
        Ayush M. — entrepreneur & product builder focused on technology, finance, AI and scalable systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <button 
          onClick={() => scrollToSection('projects')}
          className="px-8 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          View Projects
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="px-8 py-3 rounded-xl glass text-slate-200 font-medium hover:bg-white/10 transition-all cursor-pointer"
        >
          Contact Me
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;

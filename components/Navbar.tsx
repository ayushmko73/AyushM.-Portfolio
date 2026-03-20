import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', id: 'projects' },
    { name: 'Core', id: 'core' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6">
      <div className="max-w-5xl mx-auto glass rounded-[1.8rem] px-6 py-3.5 flex items-center justify-between border border-white/10 shadow-2xl bg-[#020617]/50 backdrop-blur-xl">
        <div 
          className="flex items-center gap-3.5 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-[0.8rem] bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center font-bold text-[16px] text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-105 transition-transform shrink-0">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-white leading-none tracking-tight">Ayush M.</span>
            <span className="text-[8px] font-black text-blue-400 uppercase tracking-[0.2em] mt-1 opacity-90">Founder @ Wealth Sprint</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile-focused menu trigger */}
        <button 
          className="md:hidden text-slate-400 hover:text-white p-2 transition-colors relative z-[70]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 9, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
              className="h-0.5 bg-current rounded-full"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0, width: '70%' }}
              className="h-0.5 bg-current rounded-full"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -9, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
              className="h-0.5 bg-current rounded-full"
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl z-[55] h-screen w-screen"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm glass z-[60] shadow-2xl border-l border-white/10 flex flex-col p-10 pt-32"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.button 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    key={link.name} 
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-4xl font-bold text-white hover:text-blue-400 transition-colors tracking-tighter"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto"
              >
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-center py-5 rounded-2xl bg-blue-600 text-white font-bold uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-blue-900/40"
                >
                  Get in Touch
                </button>
                <div className="mt-8 flex flex-col gap-2">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Contact</span>
                  <a href="mailto:ayushxma@gmail.com" className="text-sm text-slate-400 font-medium">ayushxma@gmail.com</a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
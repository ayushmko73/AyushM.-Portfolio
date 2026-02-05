import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', id: 'projects' },
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6">
      <div className="max-w-4xl mx-auto glass rounded-[1.8rem] px-6 py-4 flex items-center justify-between border border-white/10 shadow-2xl bg-[#020617]/50">
        <div 
          className="flex items-center gap-3.5 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-11 h-11 rounded-[0.9rem] bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center font-bold text-[18px] text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] group-hover:scale-105 transition-transform shrink-0">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-white leading-none tracking-tight">Ayush M.</span>
            <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.25em] mt-1.5 opacity-90">Founder @ Wealth Sprint</span>
          </div>
        </div>

        {/* Mobile-focused menu trigger exactly like the icon in screenshot */}
        <button 
          className="text-slate-400 hover:text-white p-2.5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
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
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-[55] h-screen w-screen"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-28 left-4 right-4 glass rounded-[2.2rem] p-10 z-[60] shadow-2xl border-white/10 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button 
                    key={link.name} 
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-3xl font-bold text-slate-300 py-2 hover:text-blue-400 transition-colors tracking-tight"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-6 w-full text-center py-5 rounded-[1.2rem] bg-blue-600 text-white font-bold uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-blue-900/40"
              >
                Get in Touch
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
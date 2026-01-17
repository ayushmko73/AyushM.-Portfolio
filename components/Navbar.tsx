import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Work', id: 'work' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="max-w-6xl mx-auto glass rounded-2xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
            A
          </div>
          <span className="font-semibold text-lg tracking-tight hidden sm:block">Ayush M.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.id)}
              className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer shadow-md"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-400 hover:text-white z-50 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Background Overlay to close on outside click/tap/slide */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-40 md:hidden h-screen w-screen cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              key="mobile-nav-panel"
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(_, info) => {
                // Close if swiped up enough
                if (info.offset.y < -50) setIsOpen(false);
              }}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-20 left-4 right-4 glass rounded-3xl p-6 md:hidden flex flex-col gap-4 z-50 shadow-2xl border-blue-500/10"
            >
              {/* Swipe handle indicator */}
              <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mb-2" />
              
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button 
                    key={link.name} 
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-lg text-slate-300 py-3 border-b border-white/5 hover:text-white hover:pl-2 transition-all cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-2 w-full text-center py-4 rounded-2xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-900/40 active:scale-95 transition-all cursor-pointer"
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
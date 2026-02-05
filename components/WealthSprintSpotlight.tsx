import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const WealthSprintSpotlight: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] overflow-hidden border-white/10 shadow-2xl bg-slate-900/10 relative"
        >
          {/* Removed the grid and the right-side graphic column to eliminate the "Logo design Card" appearance on mobile */}
          <div className="p-10 md:p-20 space-y-8 max-w-3xl relative z-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                <Sparkles size={12} /> The Primary Project
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Wealth Sprint
              </h2>
              
              <p className="text-slate-400 text-lg leading-relaxed">
                The central mission of my career. A unified financial architecture designed to improve financial learning by integrating <span className="text-white font-semibold">Finance</span>, <span className="text-white font-semibold">Human Behavior</span>, and <span className="text-white font-semibold">Logic</span>.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="https://wealthsprint.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-bold text-sm transition-all hover:bg-slate-100 active:scale-[0.98] shadow-xl"
              >
                Visit the Product
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Subtle decorative glow to maintain premium aesthetic without the bulky graphic */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default WealthSprintSpotlight;
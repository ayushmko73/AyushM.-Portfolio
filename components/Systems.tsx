
import React from 'react';
import { motion } from 'framer-motion';
import { SYSTEMS } from '../constants.tsx';
import { Zap } from 'lucide-react';

const Systems: React.FC = () => {
  return (
    <section id="work" className="py-20 border-t border-white/5 overflow-hidden">
      <div className="relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
        
        <div className="mb-12 relative z-10">
          <h2 className="text-3xl font-bold mb-4">Automation & Systems I Build</h2>
          <p className="text-slate-400 max-w-xl">Removing friction through intelligent workflows and data logic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {SYSTEMS.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border-l-4 border-l-emerald-500/50 hover:border-l-emerald-500 transition-all duration-300"
            >
              <div className="mb-6 flex items-center gap-2">
                <Zap className="text-emerald-400 w-5 h-5 fill-emerald-400/20" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Efficiency Protocol</span>
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight">{system.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{system.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Systems;

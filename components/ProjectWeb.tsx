
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Bot, Zap, Heart, Lock, ArrowUpRight } from 'lucide-react';

const ProjectWeb: React.FC = () => {
  const blueprintLink = "https://drive.google.com/file/d/1b560M9jk_fqhkAC9axU-WPGL9qgyz9IY/view?usp=drivesdk";

  const nodes = [
    { id: 'genapp', label: 'GenApp Builder', sub: 'Engine', icon: <Bot size={14} />, color: 'blue', x: -140, y: -70 },
    { id: 'tracker', label: 'Money Tracker', sub: 'Data', icon: <Database size={14} />, color: 'emerald', x: 140, y: -70 },
    { id: 'agent', label: 'Voice Agent', sub: 'UX', icon: <Zap size={14} />, color: 'blue', x: 140, y: 70 },
    { id: 'book', label: 'Behavioral Study', sub: 'Logic', icon: <Heart size={14} />, color: 'emerald', x: -140, y: 70 },
  ];

  return (
    <section className="py-16 border-t border-white/5 relative overflow-hidden">
      <div className="text-center mb-16 relative z-10 px-4">
        <h2 className="text-2xl font-bold mb-3 tracking-tight">Strategic Architecture</h2>
        <p className="text-slate-500 max-w-lg mx-auto text-xs font-medium leading-relaxed uppercase tracking-widest">
          Modular components engineered to power a <span className="text-blue-400 font-bold">single compounding nexus</span>.
        </p>
      </div>

      <div className="relative h-[400px] flex items-center justify-center mb-12">
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          {nodes.map((node) => (
            <motion.path
              key={`path-${node.id}`}
              d={`M 50% 50% L ${50 + (node.x / 4)}% ${50 + (node.y / 4)}%`}
              stroke="rgba(59,130,246,0.1)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              className="hidden sm:block"
            />
          ))}
        </svg>

        {/* Central Core */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-30"
        >
          <div className="w-28 h-28 rounded-[2rem] glass border border-blue-500/40 flex flex-col items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)]">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Database size={16} />
            </div>
            <div className="text-center">
              <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest block">Nexus</span>
              <span className="text-xs font-bold text-white block">W.S. Core</span>
            </div>
          </div>
        </motion.div>

        {/* Satellite Nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{ opacity: 1, x: node.x, y: node.y }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + (i * 0.05), type: 'spring', damping: 20 }}
            className="absolute z-20 hidden sm:block"
          >
            <div className="flex flex-col items-center group">
              <div className={`w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-white transition-all`}>
                {node.icon}
              </div>
              <div className="mt-2 text-center">
                <span className="text-[10px] font-bold text-white block leading-none">{node.label}</span>
                <span className="text-[8px] font-medium text-slate-500 uppercase tracking-tight block mt-1">{node.sub}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Blueprint Card */}
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl border border-white/5 overflow-hidden bg-slate-900/10 p-8 flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
            <Lock size={24} />
          </div>
          
          <div className="flex-grow text-center sm:text-left">
            <h4 className="text-white font-bold text-lg mb-1 tracking-tight">Ecosystem Blueprint</h4>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Confidential scaling logic, market positioning, and architectural compounding strategies for the Wealth Sprint vision.
            </p>
            <a 
              href={blueprintLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
            >
              Visit Site <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectWeb;

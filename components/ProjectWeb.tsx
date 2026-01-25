
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Heart, Database, Bot, ChevronRight, Lock, ArrowRight } from 'lucide-react';

const ProjectWeb: React.FC = () => {
  const blueprintLink = "https://drive.google.com/file/d/1b560M9jk_fqhkAC9axU-WPGL9qgyz9IY/view?usp=drivesdk";

  const nodes = [
    { id: 'genapp', label: 'GenApp Builder', sub: 'Autonomous Engine', icon: <Bot className="w-5 h-5" />, color: 'blue', x: -160, y: -80 },
    { id: 'tracker', label: 'Money Tracker', sub: 'Data Infrastructure', icon: <Database className="w-5 h-5" />, color: 'emerald', x: 160, y: -80 },
    { id: 'agent', label: 'Voice Agent', sub: 'Interactive Layer', icon: <Zap className="w-5 h-5" />, color: 'blue', x: 160, y: 80 },
    { id: 'book', label: 'Behavioral Study', sub: 'Psychological Core', icon: <Heart className="w-5 h-5" />, color: 'emerald', x: -160, y: 80 },
  ];

  return (
    <section className="py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="text-center mb-20 relative z-10 px-4">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Strategic Ecosystem</h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
          I don't build isolated tools. I engineer a modular <span className="text-white font-medium">Enterprise Web</span> designed to power the central vision.
        </p>
      </div>

      <div className="relative h-[500px] flex items-center justify-center mb-20">
        {/* Animated Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {nodes.map((node) => (
            <React.Fragment key={`path-${node.id}`}>
              <motion.path
                d={`M 50% 50% Q ${50 + node.x / 2}% ${50 + node.y / 2}% ${50 + node.x}% ${50 + node.y}%`}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.circle
                r="3"
                fill="#3b82f6"
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{ 
                  offsetDistance: ["0%", "100%"],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: Math.random() * 2 
                }}
                style={{ offsetPath: `path("M ${node.x} ${node.y} Q ${node.x / 2} ${node.y / 2} 0 0")` }}
              />
            </React.Fragment>
          ))}
        </svg>

        {/* Central Core: Wealth Sprint */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-30"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2.5rem] glass border border-blue-500/30 flex flex-col items-center justify-center gap-3 shadow-[0_0_60px_-15px_rgba(59,130,246,0.3)] group hover:border-blue-500 transition-all cursor-default">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Database className="w-6 h-6" />
            </div>
            <div className="text-center">
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em] block mb-1">Nexus Core</span>
              <span className="text-sm font-bold text-white block">Wealth Sprint</span>
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
            transition={{ delay: 0.3 + (i * 0.1), type: 'spring', damping: 25 }}
            className="absolute z-20 group hidden sm:block"
          >
            <div className="flex flex-col items-center">
              <div className={`w-14 h-14 rounded-2xl glass border border-white/5 flex items-center justify-center text-white/40 group-hover:text-${node.color}-400 group-hover:border-${node.color}-500/40 transition-all group-hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]`}>
                {node.icon}
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs font-bold text-white block mb-0.5">{node.label}</span>
                <span className="text-[9px] font-medium text-slate-500 uppercase tracking-wide block">{node.sub}</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Mobile Mobile Nodes Layout */}
        <div className="sm:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
           {nodes.map((node, i) => {
              const rad = (node.x > 0 ? 0 : 180) + (node.y > 0 ? 45 : -45);
              const distance = 140;
              const x = Math.cos((rad * Math.PI) / 180) * distance;
              const y = Math.sin((rad * Math.PI) / 180) * distance;
              return (
                <motion.div
                  key={`mobile-${node.id}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, x, y }}
                  viewport={{ once: true }}
                  className="absolute"
                >
                  <div className={`w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/30`}>
                    {node.icon}
                  </div>
                </motion.div>
              );
           })}
        </div>
      </div>

      {/* Confidential Startup Blueprint Section - REDESIGNED BLUE/BLACK */}
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] border border-blue-500/20 overflow-hidden group hover:border-blue-500/40 transition-all shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] bg-slate-950/40"
        >
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="bg-blue-500/5 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-blue-500/10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 mx-auto md:mx-0">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-blue-100 text-center md:text-left">Confidential Strategy</h3>
              <p className="text-[10px] text-blue-500/60 font-black uppercase tracking-[0.2em] text-center md:text-left mt-1">Level 4 Access Required</p>
            </div>
            
            <div className="p-8 flex-grow flex flex-col justify-center bg-black/20">
              <h4 className="text-white font-semibold mb-3">Startup Ecosystem Blueprint</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Deep-dive into the confidential financial architecture, market positioning, and long-term scaling logic of the Wealth Sprint startup vision.
              </p>
              
              <a 
                href={blueprintLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 hover:scale-[1.01] transition-all active:scale-[0.98] shadow-lg shadow-blue-900/40"
              >
                Access Strategic Document
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[9px] text-center text-slate-500 mt-4 font-medium">
                * Internal Document • Authorized Collaborators Only
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectWeb;

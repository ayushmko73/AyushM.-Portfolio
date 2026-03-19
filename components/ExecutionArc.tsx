import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, Hammer } from 'lucide-react';

const ExecutionArc: React.FC = () => {
  const milestones = [
    {
      title: 'Legacy Hardware Constraints',
      description: 'Developed early prototypes on a legacy system with severe performance lag and thermal issues. This forced a shift toward high-efficiency cloud-based development environments like Replit and Google AI Studio.',
      icon: <Cpu className="w-5 h-5 text-slate-400" />,
      tag: 'HARDWARE'
    },
    {
      title: 'The AI-Driven Pivot',
      description: 'Transitioned from academic science to mastering autonomous AI orchestration. Leveraged LLMs to bridge the gap between complex requirements and production-ready code, focusing on rapid iteration over theory.',
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      tag: 'STRATEGY'
    },
    {
      title: 'GenApp Builder: Self-Healing Logic',
      description: 'Architected an autonomous system with a "Self-Healing Process." Implemented logic where the AI detects deployment errors on Vercel, auto-corrects the codebase, and triggers a redeploy without manual intervention.',
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      tag: 'ENGINEERING'
    },
    {
      title: 'Build-First Philosophy',
      description: 'Standardized a workflow where learning is secondary to execution. Every new tool or framework is mastered through the immediate building of functional prototypes, ensuring a constant ROI on time spent.',
      icon: <Hammer className="w-5 h-5 text-amber-400" />,
      tag: 'MINDSET'
    }
  ];

  return (
    <section id="execution-arc" className="py-24 border-t border-white/5">
      <div className="mb-16">
        <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Technical Evolution</span>
        <h2 className="text-3xl font-bold mb-4 tracking-tight">The Execution Arc</h2>
        <p className="text-slate-400 max-w-2xl leading-relaxed">
          A professional breakdown of the technical challenges and architectural pivots encountered while building the Wealth Sprint ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl">
        {milestones.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-950 p-8 sm:p-10 flex flex-col gap-6 hover:bg-white/[0.02] transition-colors group"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest border border-white/10 px-2 py-1 rounded-md">
                {item.tag}
              </span>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExecutionArc;

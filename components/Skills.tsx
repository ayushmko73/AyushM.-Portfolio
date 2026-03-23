import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS, ICON_MAP } from '../constants.tsx';
import { X, CheckCircle2 } from 'lucide-react';
import { Skill } from '../types.ts';

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="py-20 border-t border-white/5">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
        <p className="text-slate-400 max-w-xl">Technical skills paired with a strategic product lens.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedSkill(skill)}
            className="glass p-6 rounded-2xl group hover:border-white/20 transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-[8px] font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">DETAILS</div>
            </div>

            <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {ICON_MAP[skill.icon]}
            </div>
            <h3 className="font-semibold text-lg mb-3">{skill.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {skill.description}
            </p>
            {skill.proofOfWork && (
              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1 h-1 rounded-full bg-blue-500" />
                  <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em]">Proof of Execution</span>
                </div>
                <p className="text-[10px] text-slate-300 font-semibold leading-tight">
                  {skill.proofOfWork}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {ICON_MAP[selectedSkill.icon]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedSkill.title}</h3>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-1">Execution Portfolio</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedSkill(null)}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>

                <div className="space-y-6">
                  {selectedSkill.executions?.map((item, idx) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex gap-4 group"
                    >
                      <div className="mt-1">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{item.name}</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-white/5">
                  <p className="text-[10px] text-slate-500 font-medium leading-relaxed italic">
                    * These items represent verified execution milestones within the Wealth Sprint ecosystem and associated technical experiments.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
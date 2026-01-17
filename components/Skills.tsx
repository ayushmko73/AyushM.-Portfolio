import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, ICON_MAP } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-white/5">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
        <p className="text-slate-400 max-w-xl">Technical skills paired with a strategic product lens.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-2xl group hover:border-white/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {ICON_MAP[skill.icon]}
            </div>
            <h3 className="font-semibold text-lg mb-3">{skill.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
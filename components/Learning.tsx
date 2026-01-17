import React from 'react';
import { motion } from 'framer-motion';
import { LEARNING_ITEMS, ICON_MAP } from '../constants';

const Learning: React.FC = () => {
  return (
    <section id="learning" className="py-20 border-t border-white/5">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Currently Learning</h2>
        <p className="text-slate-400 max-w-xl">Deepening my expertise and building future-ready systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LEARNING_ITEMS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-2xl flex items-start gap-5 hover:border-blue-500/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 shrink-0 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
              {ICON_MAP[item.icon]}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Learning;
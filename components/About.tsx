import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-white/5 px-4 sm:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Mindset</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I design systems at the intersection of logic, finance, human behavior, and AI — that’s why I call myself as a FinTech entrepreneur.
            </p>
            <p>
              I don’t write code — I build simple, scalable systems that create long-term leverage.
            </p>
            <p>
              Whether it’s a finance tracking MVP or an AI automation workflow, I prioritize clarity, simplicity, and real-world execution over unnecessary complexity.
            </p>
            <p className="text-white font-medium">
              My goal is to build products that make money decisions more clearer and faster.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6 sm:p-8 aspect-auto sm:aspect-square flex flex-col justify-center gap-8 glow-blue"
        >
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold shrink-0">01</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Systems Thinking</h3>
              <p className="text-sm text-slate-400">Architecting solutions where every component contributes to a larger, compounding outcome.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold shrink-0">02</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Leverage</h3>
              <p className="text-sm text-slate-400">Focusing effort on high-impact bottlenecks that move the needle for the product and the financial systems.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold shrink-0">03</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Speed</h3>
              <p className="text-sm text-slate-400">Shipping early, gathering data, and pivoting fast. Momentum is a founder's greatest asset.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
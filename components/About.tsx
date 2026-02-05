import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-white/5 px-4 sm:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Foundational Thesis</span>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">The Founder Mindset</h2>
            <div className="inline-block px-4 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-400 font-bold text-sm tracking-tight italic">
                Where Emotion meets Finance.
              </span>
            </div>
          </div>
          
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              As the Founder of <span className="text-white font-semibold">Wealth Sprint</span>, I design systems at the intersection of logic, finance, human behavior, and AI.
            </p>
            <p>
              I don’t just build <span className="text-white">Things</span>. I build <span className="text-white font-semibold underline decoration-blue-500/50">systems</span>. My primary goal is to improve financial learning by integrating decision making of money with the emotional triggers that drive real-world consequences.
            </p>
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 italic text-blue-200/80">
              "True leverage isn't just in the code you write, but in the systems you design that understand how humans think about their wealth."
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-8 sm:p-12 flex flex-col justify-center gap-10 glow-blue border-white/10"
        >
          <div className="flex gap-6 items-start group">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0 group-hover:scale-110 transition-transform">01</div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-white">Systems Thinking</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Architecting Wealth Sprint as a modular nexus where every satellite experiment (Voice AI, Trackers) feeds into a central ROI core.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold shrink-0 group-hover:scale-110 transition-transform">02</div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-white">Leverage & Speed</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Shipping early, gathering behavioral data, and pivoting fast. Momentum is the ultimate leverage for any product founder.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start group">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0 group-hover:scale-110 transition-transform">03</div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-white">Behavioral Logic</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Bridging the gap between cold financial numbers and warm human emotions. Psychology is the hidden layer of every successful product.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
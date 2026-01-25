
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Layers, Target, TrendingUp } from 'lucide-react';

const WealthSprintSpotlight: React.FC = () => {
  return (
    <section className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] overflow-hidden border-blue-500/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] bg-slate-950/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Content Area */}
            <div className="lg:col-span-7 p-6 md:p-10 space-y-6 flex flex-col justify-center">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[9px] font-black text-blue-400 uppercase tracking-[0.2em]">
                  <Sparkles size={10} /> Featured Nexus
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  Wealth Sprint
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                  The central nexus where all technical experiments merge into a single, high-leverage market solution. A unified financial architecture combining AI orchestration and behavioral logic.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Layers size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white uppercase tracking-tight">Modular Core</h4>
                    <p className="text-[10px] text-slate-500">Integrated system architecture.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white uppercase tracking-tight">Compound ROI</h4>
                    <p className="text-[10px] text-slate-500">Maximum decision leverage.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="https://wealthsprint.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-500 transition-all active:scale-[0.98] shadow-2xl shadow-blue-900/40"
                >
                  Visit Site
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right: Abstract Graphic Area */}
            <div className="lg:col-span-5 relative min-h-[260px] bg-slate-900/40 flex items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-emerald-600/5"></div>
              
              <div className="relative z-10 flex flex-col items-center scale-90 sm:scale-100">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-44 h-44 rounded-full border border-dashed border-blue-500/20 flex items-center justify-center"
                >
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-28 h-28 rounded-[2.5rem] bg-slate-950 border border-blue-500/30 flex items-center justify-center shadow-2xl relative"
                  >
                    <Target className="w-10 h-10 text-blue-400/80" />
                    <div className="absolute inset-0 rounded-[2.5rem] bg-blue-500/5 animate-pulse"></div>
                  </motion.div>
                </motion.div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
              </div>

              {/* Status indicators */}
              <div className="absolute bottom-6 right-6 flex flex-col gap-2 items-end">
                <div className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[8px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Status: Optimized
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WealthSprintSpotlight;

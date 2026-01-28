import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS, ICON_MAP } from '../constants';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-t border-white/5 relative">
      <div className="mb-10 relative z-10">
        <h2 className="text-2xl font-bold mb-3 tracking-tight">Certifications & Credentials</h2>
        <p className="text-slate-400 max-w-xl text-xs sm:text-sm leading-relaxed font-medium">
          Professional validation in business logic & AI implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="glass group p-5 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.03] transition-all duration-300 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-slate-900/50 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300 shrink-0">
                <div className="scale-90 opacity-80 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  {cert.icon && ICON_MAP[cert.icon]}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-500/5 border border-blue-500/10 text-[9px] font-bold text-blue-400 tracking-wide uppercase">
                    {cert.level}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500 truncate">{cert.issuer}</span>
                </div>
                <h3 className="font-bold text-base text-white group-hover:text-blue-400 transition-colors tracking-tight truncate">
                  {cert.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 shrink-0">
              <span className="hidden sm:inline">Verify</span>
              <ExternalLink size={12} className="opacity-70 group-hover:opacity-100" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
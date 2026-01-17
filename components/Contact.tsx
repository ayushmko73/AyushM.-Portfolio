
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "ayushxma@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Let's connect.</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            I'm always looking for builders, collaborators, and high-intensity teams. 
            Whether you want to discuss a fintech system or an AI workflow, my door is open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative glass p-10 md:p-16 rounded-[2.5rem] border border-white/10 flex flex-col items-center gap-8 transition-all duration-500 hover:border-blue-500/30">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center text-blue-400">
              <Mail size={40} strokeWidth={1.5} />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">Direct Communication</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{email}</h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <a 
                href={`mailto:${email}`}
                className="flex-1 py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all active:scale-[0.98]"
              >
                Send Message
                <ArrowUpRight size={18} />
              </a>
              
              <button 
                onClick={copyToClipboard}
                className="flex-1 py-4 rounded-2xl glass text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-[0.98]"
              >
                {copied ? (
                  <>
                    <Check size={18} className="text-emerald-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={18} className="text-slate-400" />
                    Copy Email
                  </>
                )}
              </button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-slate-500 font-medium italic">
                Average response time: &lt; 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

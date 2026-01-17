
import React from 'react';
import { Mail, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center font-bold text-xs">A</div>
            <span className="font-semibold text-slate-300">Ayush M.</span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
            © 2026 Ayush M. Built with intent, not noise.
          </p>
        </div>

        <div className="flex gap-6">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-500 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronRight, User, AlertCircle, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project, ProjectStatus } from '../types';
import SEO from './SEO';

const ProjectCard: React.FC<{ project: Project; onOpen: (p: Project) => void }> = ({ project, onOpen }) => {
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.LIVE: return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20';
      case ProjectStatus.PROTOTYPE: return 'bg-blue-500/20 text-blue-400 border-blue-500/20';
      case ProjectStatus.IN_PROGRESS: return 'bg-slate-500/20 text-slate-400 border-slate-500/20';
      default: return 'bg-white/10 text-white border-white/10';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass p-6 sm:p-8 rounded-3xl flex flex-col h-full group hover:border-blue-500/30 transition-all cursor-pointer relative"
      onClick={() => onOpen(project)}
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
        <div className="text-slate-500 group-hover:text-blue-400 transition-colors">
          <ChevronRight size={18} />
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">{project.title}</h3>
      <p className="text-slate-400 text-xs sm:text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-[9px] text-slate-500 uppercase font-semibold whitespace-nowrap border border-white/5">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-2 py-0.5 rounded-md bg-white/5 text-[9px] text-slate-500 uppercase font-semibold">
            +{project.tags.length - 3}
          </span>
        )}
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
        <div className="text-[10px] text-slate-400 font-medium flex items-center gap-1.5">
          <User size={12} className="text-blue-400 shrink-0" />
          <span className="truncate max-w-[80px] sm:max-w-none">{project.role}</span>
        </div>
        
        <div className="flex justify-end">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 text-[10px] font-bold text-white transition-all active:scale-95 shadow-lg shadow-blue-900/20 hover:bg-blue-500"
            >
              Visit Site <ArrowUpRight size={12} />
            </a>
          ) : (
            <button 
              disabled
              className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-500 text-[10px] font-bold cursor-not-allowed border border-white/5"
            >
              Coming soon
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <>
      <SEO 
        title={`${project.title} Project`} 
        description={project.seoDescription || project.description}
        keywords={project.seoKeywords || project.tags}
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div 
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="glass w-full max-w-sm rounded-[2rem] relative shadow-2xl flex flex-col max-h-[90vh]"
          onClick={e => e.stopPropagation()}
        >
          {/* Header with Fixed Close Button */}
          <div className="absolute top-4 right-4 z-[90]">
            <button 
              onClick={onClose} 
              className="p-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-slate-400 hover:text-white transition-all shadow-xl"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          <div className="overflow-y-auto modal-content p-6 sm:p-8 pt-12 custom-scrollbar">
            <div className="relative z-10">
              <div className="mb-2">
                <span className="text-[8px] font-bold text-blue-400 uppercase tracking-[0.2em]">{project.status}</span>
              </div>
              <h3 className="text-xl font-bold mb-5 pr-6 leading-tight">{project.title}</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Core Outcome</h4>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">{project.outcome}</p>
                </div>

                <div>
                  <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Detailed Insight</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">My Role</h4>
                    <div className="flex items-center gap-2 text-slate-300 text-[11px] font-medium">
                      <User size={10} className="text-blue-400" />
                      {project.role}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Core Requirements</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[8px] text-slate-400 uppercase font-bold">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {project.leftToIntegrate && project.leftToIntegrate.length > 0 && (
                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
                    <h4 className="text-[9px] font-bold text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <AlertCircle size={12} />
                      Integrations Needed
                    </h4>
                    <ul className="space-y-1">
                      {project.leftToIntegrate.map((item, idx) => (
                        <li key={idx} className="text-[10px] text-slate-400 flex items-start gap-2">
                          <div className="w-1 h-1 shrink-0 rounded-full bg-amber-500/40 mt-1"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Fixed Footer with Actions */}
          <div className="p-6 sm:p-8 border-t border-white/5 bg-slate-900/20 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              {project.link ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-all active:scale-[0.98] shadow-lg shadow-blue-900/40"
                >
                  Visit Site <ExternalLink size={14} />
                </a>
              ) : (
                <span className="text-center py-3 rounded-xl bg-white/5 text-slate-500 font-bold text-xs border border-white/10">
                  Coming soon
                </span>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass text-white font-bold text-xs hover:bg-white/10 transition-all active:scale-[0.98]"
                >
                  GitHub <Github size={14} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-slate-400 max-w-xl text-sm">A selection of tools, systems, and creative experiments.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onOpen={setSelectedProject} 
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectModal 
            key={`modal-${selectedProject.id}`}
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
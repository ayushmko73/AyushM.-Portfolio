
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ChevronRight, User, ArrowUpRight, Lock, Sparkles, EyeOff, Check, AlertCircle } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project, ProjectStatus } from '../types';
import SEO from './SEO';

const ProjectCard: React.FC<{ project: Project; onOpen: (p: Project) => void }> = ({ project, onOpen }) => {
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.PROTOTYPE: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
      case ProjectStatus.LIVE: return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case ProjectStatus.IN_PROGRESS: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
      case ProjectStatus.COMPLETED: return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-white/5 text-white border-white/10';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="glass p-5 sm:p-6 rounded-[2rem] flex flex-col h-full group hover:border-blue-500/30 transition-all cursor-pointer relative overflow-hidden"
      onClick={() => onOpen(project)}
    >
      <div className="flex justify-between items-center mb-5">
        <span className={`px-2.5 py-0.5 rounded-lg text-[8.5px] font-bold uppercase tracking-wider border ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
        <div className="text-slate-600 group-hover:text-blue-400 transition-colors">
          <ChevronRight size={16} />
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-1">{project.title}</h3>
      <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed opacity-80">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-[8px] text-slate-500 uppercase font-bold whitespace-nowrap border border-white/5">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="text-[10px] text-slate-500 font-medium flex items-center gap-1.5">
          <User size={10} className="text-slate-600" />
          <span className="truncate max-w-[80px]">{project.role}</span>
        </div>
        
        <div>
          {project.id === 'ai-voice-agent' ? (
            <span className="text-[9px] text-slate-600 uppercase font-bold tracking-tight">Coming Soon</span>
          ) : project.isPrivate ? (
            <div className="flex items-center gap-1 text-[9px] text-slate-600 uppercase font-bold tracking-tight">
              <Lock size={10} /> Restricted
            </div>
          ) : (
            <div className="px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors shadow-lg bg-blue-600 text-white hover:bg-blue-500 shadow-blue-900/20">
              Visit Site <ArrowUpRight size={10} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const isGenApp = project.id === 'genapp-builder';
  const hasIntegrations = project.leftToIntegrate && project.leftToIntegrate.length > 0;

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
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-slate-950/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="glass w-full max-w-md rounded-[2.2rem] relative shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border-white/10"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 pb-2 flex items-start justify-between">
            <div className="space-y-0.5">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-400 block">{project.status}</span>
              <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={16} />
            </button>
          </div>

          <div className="overflow-y-auto p-6 pt-2 space-y-8 custom-scrollbar">
            <div className="space-y-6">
              {/* Core Outcome Box */}
              <div className="p-4 rounded-[1.2rem] bg-blue-500/5 border border-blue-500/10 shadow-inner">
                <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em] mb-2">Core Outcome</h4>
                <p className="text-white text-[13px] leading-relaxed font-medium">{project.outcome}</p>
              </div>

              {/* Detailed Insight Section */}
              <div className="space-y-2">
                <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em]">Detailed Insight</h4>
                <p className="text-slate-400 text-[12px] leading-relaxed font-normal">{project.description}</p>
              </div>

              {/* Project Assets Section - Compact Profile Maintained */}
              {project.subLinks && project.subLinks.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em] flex items-center gap-1.5">
                    <Sparkles size={10} className="text-blue-500/60" /> 
                    {isGenApp ? 'Proof' : 'Project Assets & Proofs'}
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    {project.subLinks.map((sub, i) => (
                      <a 
                        key={i} 
                        href={sub.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-1.5 px-2 rounded-[0.7rem] bg-blue-900/10 border border-blue-500/10 hover:border-blue-500/30 transition-all group/sub shadow-lg shadow-black/20 w-full max-w-[95%]"
                      >
                        <div className="w-6 h-6 shrink-0 rounded-[0.5rem] bg-blue-500/10 flex items-center justify-center text-blue-400/80 group-hover/sub:text-blue-400 transition-colors">
                          {isGenApp ? (
                            <Check size={12} strokeWidth={3} />
                          ) : (
                            <EyeOff size={12} strokeWidth={2} />
                          )}
                        </div>
                        <div className="flex-grow min-w-0">
                          <span className="text-[12px] font-bold text-white block truncate leading-none mb-0.5">{sub.name}</span>
                          <span className="text-[8px] text-blue-400/60 font-black uppercase tracking-wider block leading-none">
                            {sub.description || (isGenApp ? 'Verified' : 'Restricted')}
                          </span>
                        </div>
                        <div className="shrink-0 text-slate-600 group-hover/sub:text-white transition-colors">
                          <ArrowUpRight size={12} />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Details */}
              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em]">My Role</h4>
                  <div className="flex items-start gap-2 text-white text-[12px] font-bold">
                    <User size={12} className="text-blue-500/60 mt-0.5" />
                    <span className="leading-tight">{project.role}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em]">Core Requirements</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[7.5px] text-slate-400 uppercase font-black tracking-tight">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Integrations Needed Section */}
              {hasIntegrations && (
                <div className="p-4 rounded-[1.2rem] bg-amber-500/[0.03] border border-amber-500/10 shadow-inner">
                  <div className="flex items-center gap-1.5 mb-3 text-amber-500/80">
                    <AlertCircle size={12} />
                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em]">Integrations Needed</h4>
                  </div>
                  <ul className="space-y-2">
                    {project.leftToIntegrate?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-400 text-[11px] leading-snug">
                        <span className="text-amber-500/40 text-[14px] leading-none">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="p-6 pt-2">
            {project.id === 'ai-voice-agent' ? (
              <div className="w-full py-3.5 rounded-xl bg-white/5 text-slate-500 font-bold text-[10px] text-center border border-white/10 uppercase tracking-[0.2em] shadow-inner">
                Coming soon
              </div>
            ) : project.isPrivate ? (
              <div className="w-full py-3.5 rounded-xl bg-slate-800/50 text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em] text-center border border-white/5 flex items-center justify-center gap-2">
                Restricted Access <Lock size={12} />
              </div>
            ) : project.link ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all shadow-xl bg-blue-600 text-white hover:bg-blue-700 shadow-blue-900/40"
              >
                Visit Site <ExternalLink size={12} />
              </a>
            ) : (
              <div className="w-full py-3.5 rounded-xl bg-white/5 text-slate-600 font-bold text-[10px] text-center border border-white/10 uppercase tracking-[0.2em]">
                Deployment Pending
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectStatus | 'All'>('All');

  const filters: (ProjectStatus | 'All')[] = [
    'All',
    ProjectStatus.PROTOTYPE,
    ProjectStatus.LIVE,
    ProjectStatus.IN_PROGRESS,
  ];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.status === activeFilter);

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
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-14">
        <div>
          <h2 className="text-3xl font-bold mb-3 tracking-tight">Projects</h2>
          <p className="text-slate-400 max-w-xl">A selection of tools, systems, and creative experiments.</p>
        </div>

        <div className="flex items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/5 self-start lg:self-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all ${
                activeFilter === f
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpen={setSelectedProject} 
            />
          ))}
        </AnimatePresence>
      </motion.div>

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

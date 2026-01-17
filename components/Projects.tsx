
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronRight, User, AlertCircle } from 'lucide-react';
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
      className="glass p-8 rounded-3xl flex flex-col h-full group hover:border-white/20 transition-all cursor-pointer"
      onClick={() => onOpen(project)}
    >
      <div className="flex justify-between items-start mb-6">
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
        <div className="text-slate-500 group-hover:text-white transition-colors">
          <ChevronRight size={20} />
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
      <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-500">
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-white/5 text-xs text-slate-400 font-medium flex items-center gap-2">
        <User size={12} className="text-blue-400" />
        {project.role}
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
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="glass w-full max-w-2xl rounded-3xl p-8 relative overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors cursor-pointer">
            <X size={24} />
          </button>

          <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
          <p className="text-blue-400 text-sm font-medium mb-6">{project.status}</p>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Outcome</h4>
              <p className="text-slate-200">{project.outcome}</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Description</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Role</h4>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <User size={14} className="text-blue-400" />
                  {project.role}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Core Requirements</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-400">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {project.leftToIntegrate && project.leftToIntegrate.length > 0 && (
              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
                <h4 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <AlertCircle size={14} />
                  Things Left to Integrate
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {project.leftToIntegrate.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-amber-500/40"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              {project.link ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-colors"
                >
                  Visit Live <ExternalLink size={16} />
                </a>
              ) : (
                <span className="px-6 py-2.5 rounded-xl bg-white/5 text-slate-500 font-semibold text-sm cursor-not-allowed">
                  Coming Soon
                </span>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl glass text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  GitHub <Github size={16} />
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

  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-slate-400 max-w-xl">A selection of tools, systems, and creative experiments.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

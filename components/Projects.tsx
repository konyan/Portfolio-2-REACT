import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { X, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = PROJECTS.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="py-24 bg-neutral-100 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
           <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Selected Work</h2>
            <p className="text-neutral-600 dark:text-neutral-400">Highlights from my recent development journey.</p>
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              layoutId={`card-container-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group cursor-pointer bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-accent/50 dark:hover:border-accent/50 transition-all shadow-md dark:shadow-none hover:shadow-xl dark:hover:shadow-none"
              whileHover={{ y: -5 }}
            >
              <motion.div layoutId={`card-image-${project.id}`} className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </motion.div>
              <div className="p-6">
                <motion.h3 layoutId={`card-title-${project.id}`} className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{project.title}</motion.h3>
                <motion.p layoutId={`card-category-${project.id}`} className="text-sm text-accent mb-3">{project.category}</motion.p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2">{project.description}</p>
                
                <div className="flex gap-2 mt-4 flex-wrap">
                    {project.tags.slice(0,3).map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded">{tag}</span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-neutral-900/80 dark:bg-black/80 backdrop-blur-sm"
              />
              
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className="relative w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 z-10 max-h-[90vh] overflow-y-auto"
              >
                <button 
                   onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                   className="absolute top-4 right-4 z-20 p-2 bg-neutral-900/50 dark:bg-black/50 rounded-full text-white hover:bg-accent hover:text-black transition-colors"
                >
                  <X size={20} />
                </button>

                <motion.div layoutId={`card-image-${selectedId}`} className="aspect-video w-full">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </motion.div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-2">
                    <motion.h3 layoutId={`card-title-${selectedId}`} className="text-3xl font-bold text-neutral-900 dark:text-white">
                      {selectedProject.title}
                    </motion.h3>
                    <a href={selectedProject.link} className="flex items-center gap-2 text-accent hover:underline text-sm font-medium">
                      Visit Site <ExternalLink size={14} />
                    </a>
                  </div>
                  
                  <motion.p layoutId={`card-category-${selectedId}`} className="text-accent font-medium mb-6">
                    {selectedProject.category}
                  </motion.p>

                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
                    {selectedProject.longDescription}
                  </p>

                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    const newSet = new Set(expandedIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedIds(newSet);
  };

  return (
    <section id="experience" className="py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-neutral-900 dark:text-white">Work History</h2>
        
        <div className="relative border-l border-neutral-300 dark:border-neutral-800 ml-4 md:ml-6 space-y-16">
          {EXPERIENCE.map((job, index) => {
            const isExpanded = expandedIds.has(job.id);
            const hasAchievements = job.achievements && job.achievements.length > 0;

            return (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-neutral-400 dark:bg-neutral-600 group-hover:bg-accent transition-colors duration-300 ring-4 ring-neutral-50 dark:ring-neutral-950" />
                
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-accent transition-colors duration-300">
                    {job.role}
                  </h3>
                  <span className="text-sm font-mono text-neutral-500 whitespace-nowrap mt-1 sm:mt-0">{job.period}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <h4 className="text-lg text-neutral-700 dark:text-neutral-300 font-medium">{job.company}</h4>
                  {job.location && (
                    <div className="flex items-center text-sm text-neutral-500">
                      <MapPin size={14} className="mr-1" />
                      {job.location}
                    </div>
                  )}
                </div>

                {/* Short Description */}
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-4">
                  {job.description}
                </p>

                {/* Expanded Content (Achievements) */}
                <AnimatePresence>
                  {isExpanded && hasAchievements && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="list-disc list-outside ml-4 mb-6 space-y-2 text-neutral-600 dark:text-neutral-400 marker:text-accent/50">
                        {job.achievements?.map((achievement, i) => (
                          <li key={i} className="pl-2">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Toggle Button */}
                {hasAchievements && (
                  <button
                    onClick={() => toggleExpand(job.id)}
                    className="flex items-center text-sm font-medium text-accent hover:text-accent-dark transition-colors mb-4 focus:outline-none"
                  >
                    {isExpanded ? (
                      <>
                        Show Less <ChevronUp size={16} className="ml-1" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown size={16} className="ml-1" />
                      </>
                    )}
                  </button>
                )}

                {/* Technologies Used */}
                {job.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs font-medium rounded bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 group-hover:border-neutral-400 dark:group-hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
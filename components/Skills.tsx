import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-neutral-100 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">Tech Stack</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            A curated list of tools and technologies I use to build performant, scalable applications.
          </p>
        </div>

        <motion.div 
          className="flex flex-wrap gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: '#8b5cf6' }}
              className="px-6 py-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium cursor-default transition-all duration-300 hover:text-neutral-900 dark:hover:text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] shadow-sm dark:shadow-none"
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
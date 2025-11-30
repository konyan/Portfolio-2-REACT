import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Check, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'done'>('idle');

  const handleDownload = () => {
    setDownloadState('downloading');
    // Simulate download delay
    setTimeout(() => {
      setDownloadState('done');
      // Reset after 3 seconds
      setTimeout(() => setDownloadState('idle'), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 pt-24 pb-12 relative overflow-hidden transition-colors duration-300">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8">Ready to build something?</h2>
          
          <button 
            onClick={handleDownload}
            disabled={downloadState !== 'idle'}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] disabled:cursor-default"
          >
             <span className="relative z-10 flex items-center gap-2">
                {downloadState === 'idle' && (
                    <>
                        Download Resume <Download size={18} />
                    </>
                )}
                {downloadState === 'downloading' && "Downloading..."}
                {downloadState === 'done' && (
                    <>
                        Downloaded <Check size={18} />
                    </>
                )}
             </span>
             
             {/* Wipe Effect */}
             <div className={`absolute inset-0 bg-accent transition-transform duration-500 origin-left ease-out ${downloadState === 'idle' ? 'scale-x-0 group-hover:scale-x-100' : 'scale-x-100'}`} />
             
             {/* Small size text */}
             <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-neutral-500 w-full">PDF (200kb)</span>
          </button>
        </motion.div>

        <div className="border-t border-neutral-300 dark:border-neutral-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-neutral-500 text-sm">
                © {new Date().getFullYear()} Konyan. All rights reserved.
            </div>

            <div className="flex gap-6">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all"><Github size={20} /></a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all"><Linkedin size={20} /></a>
                <a href={SOCIAL_LINKS.email} className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all"><Mail size={20} /></a>
                <a href={SOCIAL_LINKS.phone} className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all"><Phone size={20} /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
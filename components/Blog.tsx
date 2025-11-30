import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { useNavigate } from 'react-router-dom';

const Blog: React.FC = () => {
  const navigate = useNavigate();

  // Show only latest 3 posts on the home page
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-12 flex justify-between items-end">
           <div>
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">Thoughts</h2>
             <p className="text-neutral-600 dark:text-neutral-400">Insights on engineering, architecture, and developer experience.</p>
           </div>
           <button 
             onClick={() => navigate('/blog')}
             className="hidden md:flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors group"
           >
             View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
        
        <ul className="space-y-8">
          {latestPosts.map((post) => (
            <motion.li 
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <div className="block p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-accent/50 dark:hover:border-accent/50 transition-all hover:shadow-lg dark:hover:shadow-none">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <ArrowUpRight 
                    size={20} 
                    className="text-neutral-400 dark:text-neutral-600 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </div>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-500">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
        
        <button 
             onClick={() => navigate('/blog')}
             className="md:hidden w-full mt-8 flex items-center justify-center gap-2 py-3 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
           >
             View All Posts <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default Blog;
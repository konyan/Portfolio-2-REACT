import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import GithubStats from '../components/GithubStats';
import Blog from '../components/Blog';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there is a hash or state indicating a scroll target
    const state = location.state as { scrollTo?: string } | null;
    const targetId = state?.scrollTo;

    if (targetId) {
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          const offset = 80;
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay to ensure DOM is ready
    } else {
        window.scrollTo(0,0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <GithubStats />
      <Blog />
    </>
  );
};

export default Home;
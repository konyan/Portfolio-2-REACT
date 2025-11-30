import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const CursorGlow: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics configuration for the "wave" like fluid movement
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Create a dynamic radial gradient based on mouse position
  // The color is the accent purple (rgba(139, 92, 246)) with low opacity
  const background = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(139, 92, 246, 0.15), transparent 80%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[60] hidden md:block transition-opacity duration-300"
      style={{ background }}
    />
  );
};

export default CursorGlow;
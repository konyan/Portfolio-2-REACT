import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Code } from 'lucide-react';

const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Use MotionValues for high-performance direct updates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Slight spring for a smoother feel, but tight enough to feel responsive
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] text-accent hidden md:flex items-center justify-center mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%', // Center the icon on the cursor tip
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <Code size={24} strokeWidth={2.5} />
    </motion.div>
  );
};

export default CustomCursor;
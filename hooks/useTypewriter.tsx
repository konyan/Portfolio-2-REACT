import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50, startDelay: number = 500) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    
    const startTyping = () => {
      let index = 0;
      
      const typeChar = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
          timeoutId = setTimeout(typeChar, speed);
        } else {
          setIsComplete(true);
        }
      };

      typeChar();
    };

    const initialTimeout = setTimeout(startTyping, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialTimeout);
    };
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
};
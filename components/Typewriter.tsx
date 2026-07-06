import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
}
const Typewriter = ({ text, speed = 35 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    const words = text.split(' ');
    let currentWordIndex = 0;
    setDisplayedText(''); 
    const interval = setInterval(() => {
      if (currentWordIndex < words.length) {
        const nextWord = words[currentWordIndex];
        const isFirstWord = currentWordIndex === 0;

        setDisplayedText((prev) =>
          prev + (isFirstWord ? '' : ' ') + nextWord
        );
        currentWordIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <>{displayedText}</>;
};

export default Typewriter;
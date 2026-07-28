import { useEffect, useRef, useState } from 'react';
import LetterGlitch from './LetterGlitch.jsx';
import './CursorGlitchBackground.css';

export default function CursorGlitchBackground() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      containerRef.current.style.setProperty('--cursor-x', `${e.clientX}px`);
      containerRef.current.style.setProperty('--cursor-y', `${e.clientY}px`);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleTouchMove = (e) => {
      if (!containerRef.current || !e.touches[0]) return;
      const touch = e.touches[0];
      containerRef.current.style.setProperty('--cursor-x', `${touch.clientX}px`);
      containerRef.current.style.setProperty('--cursor-y', `${touch.clientY}px`);
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`cursor-glitch-container ${isVisible ? 'is-visible' : ''}`}
      aria-hidden="true"
    >
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={false}
        outerVignette={false}
        smooth={true}
        glitchColors={['#2E7088', '#61dca3', '#61b3dc', '#82B4C9']}
      />
    </div>
  );
}

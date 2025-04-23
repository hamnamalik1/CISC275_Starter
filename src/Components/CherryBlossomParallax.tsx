import React, { useEffect, useState } from 'react';
import './CherryBlossomParallax.css';

interface CherryBlossomParallaxProps {
  children?: React.ReactNode;
}

const CherryBlossomParallax: React.FC<CherryBlossomParallaxProps> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      {/* Background layer - slowest moving */}
      <div 
        className="parallax-layer background-layer"
        style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}
      />
      
      {/* Middle layer - medium speed */}
      <div 
        className="parallax-layer middle-layer"
        style={{ transform: `translateY(${scrollPosition * 0.3}px)` }}
      />
      
      {/* Foreground layer - fastest moving */}
      <div 
        className="parallax-layer foreground-layer"
        style={{ transform: `translateY(${scrollPosition * 0.6}px)` }}
      />
      

      
      {/* Content container */}
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default CherryBlossomParallax;
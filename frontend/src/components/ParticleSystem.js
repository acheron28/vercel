import React, { useEffect, useRef } from 'react';

const ParticleSystem = ({ intensity = 50, colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899'] }) => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';
    particlesRef.current = [];

    // Create 3D particles
    for (let i = 0; i < intensity; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle-3d';
      
      // Random properties
      const size = Math.random() * 120 + 40;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = Math.random() * 0.4 + 0.1;
      const duration = Math.random() * 20 + 15;
      const delay = Math.random() * 10;
      
      // Random position
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const startZ = Math.random() * 500 - 250;
      
      // Random end position
      const endX = Math.random() * 100;
      const endY = Math.random() * 100;
      const endZ = Math.random() * 500 - 250;
      
      // Set styles
      Object.assign(particle.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.8), ${color}40, ${color}20)`,
        borderRadius: '50%',
        filter: 'blur(2px)',
        opacity: opacity,
        left: `${startX}%`,
        top: `${startY}%`,
        transform: `translateZ(${startZ}px)`,
        animation: `
          particle-float-3d-${i} ${duration}s ease-in-out infinite,
          particle-rotate-3d ${duration * 0.7}s linear infinite,
          particle-scale-3d ${duration * 0.5}s ease-in-out infinite alternate
        `,
        animationDelay: `${delay}s`,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${color}30`,
        boxShadow: `
          0 0 ${size * 0.3}px ${color}40,
          inset 0 0 ${size * 0.2}px rgba(255,255,255,0.3)
        `,
        willChange: 'transform, opacity'
      });

      // Create dynamic keyframes
      const keyframes = `
        @keyframes particle-float-3d-${i} {
          0%, 100% {
            transform: translate3d(0, 0, ${startZ}px) rotateX(0deg) rotateY(0deg);
            opacity: ${opacity};
          }
          25% {
            transform: translate3d(${(endX - startX) * 0.3}vw, ${(endY - startY) * 0.3}vh, ${startZ + 100}px) rotateX(90deg) rotateY(45deg);
            opacity: ${opacity * 1.5};
          }
          50% {
            transform: translate3d(${(endX - startX) * 0.7}vw, ${(endY - startY) * 0.7}vh, ${endZ}px) rotateX(180deg) rotateY(90deg);
            opacity: ${opacity * 0.7};
          }
          75% {
            transform: translate3d(${(endX - startX) * 0.9}vw, ${(endY - startY) * 0.9}vh, ${startZ - 50}px) rotateX(270deg) rotateY(135deg);
            opacity: ${opacity * 1.2};
          }
        }
      `;

      // Add keyframes to head
      const style = document.createElement('style');
      style.textContent = keyframes;
      document.head.appendChild(style);

      container.appendChild(particle);
      particlesRef.current.push({ element: particle, style });
    }

    // Cleanup function
    return () => {
      particlesRef.current.forEach(({ style }) => {
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      });
    };
  }, [intensity, colors]);

  return (
    <div 
      ref={containerRef}
      className="particle-system-3d"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    />
  );
};

export default ParticleSystem;
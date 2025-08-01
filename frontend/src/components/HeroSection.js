import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Globe, Zap, Code, Cpu } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const particlesRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || !logoRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 30;
      const yPos = (clientY / innerHeight - 0.5) * 30;
      
      setMousePosition({ x: xPos, y: yPos });
      
      logoRef.current.style.transform = `
        translateX(${xPos}px) 
        translateY(${yPos}px) 
        rotateY(${xPos}deg) 
        rotateX(${-yPos}deg)
        translateZ(20px)
      `;

      // Update particle positions based on mouse
      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        Array.from(particles).forEach((particle, index) => {
          const offset = (index + 1) * 0.1;
          particle.style.transform = `
            translateX(${xPos * offset}px) 
            translateY(${yPos * offset}px) 
            translateZ(${10 * offset}px)
            rotateZ(${xPos * 2}deg)
          `;
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden perspective-2000" ref={heroRef}>
      {/* Advanced 3D Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Large 3D Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/20 rounded-full blur-3xl animate-3d-float-slow transform-gpu preserve-3d shadow-3d-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-3d-float-delayed transform-gpu preserve-3d shadow-3d-glow-purple"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500/25 to-blue-500/15 rounded-full blur-3xl animate-3d-float-reverse transform-gpu preserve-3d shadow-3d-glow-cyan"></div>
        
        {/* 3D Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 transform rotate-12 scale-150"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent transform -rotate-12 scale-150"></div>
        </div>
      </div>

      {/* 3D Floating Particles System */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none transform-gpu">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-3d-particle-float opacity-60 transform-gpu preserve-3d`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 transform-gpu preserve-3d">
        {/* Enhanced 3D Floating Badge */}
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 rounded-full px-8 py-4 mb-12 backdrop-blur-xl shadow-3d-card hover:shadow-3d-card-hover transform hover:scale-110 hover:rotateX-5 hover:translateZ-10 transition-all duration-700 preserve-3d group">
          <Globe className="h-5 w-5 text-blue-400 animate-3d-spin-slow group-hover:animate-3d-spin-fast" />
          <span className="text-blue-400 text-sm font-medium bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Connecting the Unconnected
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Advanced 3D Logo/Icon */}
        <div className="mb-12 perspective-2000">
          <div 
            ref={logoRef}
            className="inline-block transform-gpu transition-transform duration-500 ease-out preserve-3d"
          >
            <div className="relative">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto shadow-3d-logo hover:shadow-3d-logo-hover transition-all duration-700 transform hover:scale-125 hover:rotateX-15 hover:rotateY-15 preserve-3d group animate-3d-pulse-glow">
                <Code className="h-20 w-20 text-white animate-3d-float-icon group-hover:animate-3d-spin-icon" />
              </div>
              {/* 3D Ring Effects */}
              <div className="absolute inset-0 border-2 border-blue-400/30 rounded-3xl animate-3d-ring-pulse transform scale-110"></div>
              <div className="absolute inset-0 border border-purple-400/20 rounded-3xl animate-3d-ring-pulse-delayed transform scale-125"></div>
            </div>
          </div>
        </div>

        {/* Ultra 3D Main Heading */}
        <div className="perspective-2000 mb-8">
          <h1 className="text-7xl md:text-9xl font-bold text-white leading-tight transform hover:rotateX-10 hover:rotateY-5 hover:translateZ-20 transition-all duration-700 preserve-3d cursor-default group">
            <span className="inline-block transform group-hover:translateZ-10 group-hover:rotateY-5 transition-all duration-500 preserve-3d">
              Verse
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 via-cyan-400 to-pink-500 animate-3d-gradient-shift inline-block transform group-hover:translateZ-15 group-hover:rotateY--5 group-hover:scale-110 transition-all duration-500 preserve-3d">
              OS
            </span>
          </h1>
        </div>

        {/* 3D Subtitle with Effects */}
        <div className="perspective-1000 mb-6">
          <p className="text-2xl md:text-3xl text-gray-300 transform hover:translateZ-15 hover:rotateX-3 transition-all duration-500 preserve-3d font-light tracking-wide">
            Internet Where It's Never Been
          </p>
        </div>

        {/* Enhanced 3D Description */}
        <div className="perspective-1000 mb-16">
          <p className="text-xl text-gray-400 max-w-5xl mx-auto leading-relaxed transform hover:translateZ-10 hover:rotateX-2 transition-all duration-500 preserve-3d">
            Revolutionary operating system built on Raspberry Pi technology. 
            Delivering reliable internet connectivity and essential services to remote and underserved areas, 
            bringing the power of knowledge and communication to every corner of the world.
          </p>
        </div>

        {/* Ultra Enhanced 3D CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center perspective-2000">
          <Button 
            onClick={scrollToAbout}
            className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 hover:from-blue-600 hover:via-purple-700 hover:to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-700 transform hover:scale-125 hover:translateY-5 hover:rotateX-15 hover:rotateY-5 hover:translateZ-10 preserve-3d group shadow-3d-button hover:shadow-3d-button-hover"
          >
            <span className="relative z-10 group-hover:translateZ-5 transition-transform duration-500 flex items-center">
              Discover More
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translateX-3 group-hover:rotateZ-12 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-110"></div>
          </Button>
          
          <Button 
            variant="outline"
            className="relative border-2 border-gray-500 text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400 hover:text-blue-400 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-700 transform hover:scale-125 hover:translateY-5 hover:rotateX-15 hover:rotateY--5 hover:translateZ-10 preserve-3d group backdrop-blur-xl shadow-3d-button-outline hover:shadow-3d-button-outline-hover"
          >
            <span className="relative z-10 group-hover:translateZ-5 transition-transform duration-500 flex items-center">
              <Cpu className="mr-3 h-6 w-6 group-hover:rotateZ-45 group-hover:scale-125 transition-transform duration-500" />
              See Technology
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-110"></div>
          </Button>
        </div>

        {/* Advanced 3D Floating Elements */}
        <div className="absolute inset-0 pointer-events-none transform-gpu">
          <div className="absolute top-32 left-32 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-3d-orbit opacity-70 shadow-glow-blue"></div>
          <div className="absolute top-56 right-40 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-3d-orbit-reverse opacity-80 shadow-glow-purple"></div>
          <div className="absolute bottom-48 left-1/4 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-3d-orbit-vertical opacity-60 shadow-glow-cyan"></div>
          <div className="absolute bottom-32 right-32 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-3d-orbit-diagonal opacity-75 shadow-glow-pink"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Globe, Zap } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const heroRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || !logoRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      logoRef.current.style.transform = `translateX(${xPos}px) translateY(${yPos}px) rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden" ref={heroRef}>
      {/* 3D Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float-slow transform-gpu perspective-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed transform-gpu perspective-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl animate-float-reverse transform-gpu perspective-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* 3D Floating Badge */}
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-md shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-500 hover:rotate-1 perspective-1000">
          <Globe className="h-4 w-4 text-blue-400 animate-spin-slow" />
          <span className="text-blue-400 text-sm font-medium">Connecting the Unconnected</span>
        </div>

        {/* 3D Logo/Icon */}
        <div className="mb-8 perspective-1000">
          <div 
            ref={logoRef}
            className="inline-block transform-gpu transition-transform duration-300 ease-out"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/30 hover:shadow-purple-500/40 transition-all duration-500 transform hover:scale-110 hover:rotate-12 preserve-3d">
              <Globe className="h-16 w-16 text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* 3D Main Heading */}
        <div className="perspective-1000 mb-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight transform hover:rotateX-5 transition-transform duration-500 preserve-3d">
            Verse<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-gradient-x">Zero</span>
          </h1>
        </div>

        {/* 3D Subtitle */}
        <div className="perspective-1000 mb-4">
          <p className="text-xl md:text-2xl text-gray-300 transform hover:translateZ-10 transition-transform duration-300 preserve-3d">
            Internet Where It's Never Been
          </p>
        </div>

        {/* 3D Description */}
        <div className="perspective-1000 mb-12">
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed transform hover:translateZ-5 transition-transform duration-300 preserve-3d">
            Bridging the digital divide with innovative Raspberry Pi technology. 
            Delivering reliable internet connectivity to remote and underserved areas, 
            bringing the power of knowledge and communication to every corner of the world.
          </p>
        </div>

        {/* 3D CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center perspective-1000">
          <Button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-110 hover:translateY-2 hover:rotateX-10 hover:shadow-2xl hover:shadow-blue-500/40 preserve-3d group"
          >
            <span className="group-hover:translateZ-10 transition-transform duration-300">Discover More</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translateX-2 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-gray-600 text-gray-300 hover:bg-white/10 hover:border-blue-400 hover:text-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-110 hover:translateY-2 hover:rotateX-10 hover:shadow-2xl hover:shadow-gray-500/20 preserve-3d group backdrop-blur-sm"
          >
            <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="group-hover:translateZ-10 transition-transform duration-300">See Technology</span>
          </Button>
        </div>

        {/* 3D Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-float-particle opacity-60"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-float-particle-delayed opacity-70"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-particle-reverse opacity-50"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-float-particle opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
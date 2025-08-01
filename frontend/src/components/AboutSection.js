import React, { useEffect, useRef } from 'react';
import { Shield, Zap, BookOpen, Wrench, Lightbulb, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const piDeviceRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!piDeviceRef.current) return;
      
      const scrollY = window.scrollY;
      const rotation = scrollY * 0.1;
      
      piDeviceRef.current.style.transform = `rotateY(${rotation}deg) rotateX(${rotation * 0.5}deg)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Offline-First Design",
      description: "Complete educational and communication resources available without internet dependency. Perfect for remote areas with limited connectivity."
    },
    {
      icon: Zap,
      title: "Plug & Play Setup", 
      description: "Simple deployment with minimal technical expertise required. Auto-configuring access point with user-friendly interface."
    },
    {
      icon: BookOpen,
      title: "Rich Content Library",
      description: "Curated educational materials, Wikipedia archives, medical resources, and communication tools all accessible locally."
    },
    {
      icon: Wrench,
      title: "Low Maintenance",
      description: "Robust, energy-efficient design built for continuous operation in challenging environments with minimal upkeep."
    },
    {
      icon: Lightbulb,
      title: "Scalable Solution",
      description: "Easily expandable network that can grow with community needs. Multiple units can be linked for broader coverage."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Designed for deployment in schools, clinics, community centers, and disaster relief areas worldwide."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* 3D Section Header */}
        <div className="text-center mb-16 perspective-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 transform hover:rotateX-5 transition-all duration-500 preserve-3d">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-x">VerseZero</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto transform hover:translateZ-10 transition-transform duration-300 preserve-3d">
            Revolutionary Raspberry Pi technology that brings internet connectivity to the most remote corners of the world
          </p>
        </div>

        {/* 3D Raspberry Pi Showcase */}
        <div className="text-center mb-16 perspective-1000">
          <div className="relative inline-block">
            <div 
              ref={piDeviceRef}
              className="w-80 h-60 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl border border-blue-400/30 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/40 transition-all duration-700 transform hover:scale-110 hover:rotateY-12 preserve-3d group"
            >
              <div className="text-6xl group-hover:scale-110 transition-transform duration-500">📟</div>
              
              {/* 3D Status Indicators */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50 transform hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-1000 shadow-lg shadow-blue-400/50 transform hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute top-4 -left-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500 shadow-lg shadow-purple-400/50 transform hover:scale-125 transition-transform duration-300"></div>
              
              {/* 3D Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl transform group-hover:scale-125 transition-transform duration-700"></div>
            </div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto transform hover:translateZ-5 transition-transform duration-300 preserve-3d">
            This compact Raspberry Pi device may look ordinary, but it delivers Wi-Fi connectivity 
            where traditional internet infrastructure fails. Meet the silent hero of offline connectivity.
          </p>
        </div>

        {/* 3D Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group transform hover:scale-105 hover:translateY-4 hover:rotateX-5 hover:shadow-2xl hover:shadow-blue-500/20 preserve-3d"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardContent className="p-6 relative">
                {/* 3D Icon Container */}
                <div className="flex items-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 preserve-3d shadow-lg">
                    <feature.icon className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                </div>
                
                {/* 3D Text Content */}
                <h3 className="text-xl font-semibold text-white mb-3 transform group-hover:translateZ-10 transition-transform duration-300 preserve-3d">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed transform group-hover:translateZ-5 transition-transform duration-300 preserve-3d">
                  {feature.description}
                </p>
                
                {/* 3D Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 3D Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float-slow transform-gpu"></div>
          <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-float-delayed transform-gpu"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
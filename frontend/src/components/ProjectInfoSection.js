import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Users, Target, Award, Cpu, Trophy, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockProjectData } from '../data/mock';

const ProjectInfoSection = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      },
      { threshold: 0.1 }
    );

    statsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const infoItems = [
    {
      icon: Calendar,
      label: "Project Timeline",
      value: mockProjectData.timeline,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      label: "Institution",
      value: mockProjectData.institution,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      label: "Team Size",
      value: mockProjectData.teamSize,
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Target,
      label: "Primary Goal",
      value: mockProjectData.goal,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="project-info" className="py-20 px-4 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* 3D Section Header */}
        <div className="text-center mb-16 perspective-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 transform hover:rotateX-5 transition-all duration-500 preserve-3d">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-x">Information</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto transform hover:translateZ-10 transition-transform duration-300 preserve-3d">
            Comprehensive details about the VerseZero capstone project
          </p>
        </div>

        {/* 3D Project Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 perspective-1000">
          {infoItems.map((item, index) => (
            <Card 
              key={index} 
              ref={(el) => (statsRef.current[index] = el)}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-700 group text-center transform hover:scale-110 hover:translateY-6 hover:rotateX-10 hover:shadow-2xl preserve-3d"
              style={{
                animationDelay: `${index * 100}ms`,
                animationPlayState: 'paused'
              }}
            >
              <CardContent className="p-8 relative">
                {/* 3D Icon */}
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mb-6 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-12 preserve-3d shadow-2xl">
                  <item.icon className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* 3D Text */}
                <h3 className="text-lg font-semibold text-white mb-3 transform group-hover:translateZ-10 transition-transform duration-300 preserve-3d">
                  {item.label}
                </h3>
                <p className="text-gray-300 font-medium transform group-hover:translateZ-8 transition-transform duration-300 preserve-3d">
                  {item.value}
                </p>
                
                {/* 3D Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-lg blur-xl transition-opacity duration-700 pointer-events-none transform group-hover:scale-110`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 3D Technology Stack */}
        <div className="mb-16 perspective-1000">
          <h3 className="text-3xl font-bold text-white text-center mb-10 transform hover:rotateX-5 transition-transform duration-500 preserve-3d">
            Technology Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {mockProjectData.technologies.map((tech, index) => (
              <Card 
                key={index} 
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group transform hover:scale-110 hover:translateY-4 hover:rotateY-10 preserve-3d"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <CardContent className="p-6 text-center relative">
                  {/* 3D Tech Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 preserve-3d">
                    {tech.icon}
                  </div>
                  <p className="text-sm text-gray-300 font-medium transform group-hover:translateZ-10 transition-transform duration-300 preserve-3d">
                    {tech.name}
                  </p>
                  
                  {/* 3D Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform group-hover:scale-105"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 3D Project Overview Card */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-700 transform hover:scale-[1.02] hover:translateY-2 hover:shadow-2xl preserve-3d group">
          <CardContent className="p-10 relative">
            {/* 3D Header */}
            <div className="flex items-start space-x-6 mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 preserve-3d shadow-xl">
                <Award className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="transform group-hover:translateZ-10 transition-transform duration-300 preserve-3d">
                <h3 className="text-3xl font-bold text-white mb-2">Capstone Project 2025</h3>
                <p className="text-blue-400 font-medium text-lg">Southern Alberta Institute of Technology (SAIT)</p>
              </div>
            </div>
            
            {/* 3D Description */}
            <div className="prose prose-invert max-w-none transform group-hover:translateZ-5 transition-transform duration-300 preserve-3d">
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                VerseZero represents the culmination of months of research, development, and innovation. 
                Our capstone project addresses one of the most pressing challenges of our time: the digital divide 
                that separates connected and unconnected communities worldwide.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                By leveraging Raspberry Pi technology, we've created a portable, affordable solution that can 
                be deployed anywhere to provide essential digital services. Our system operates independently 
                of traditional internet infrastructure, making it perfect for remote areas, disaster zones, 
                and underserved communities.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                The project showcases advanced skills in network engineering, system administration, 
                web development, and project management - representing the diverse expertise of our 
                Cyber Crusaders team.
              </p>
            </div>

            {/* 3D Key Achievements */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
              {mockProjectData.achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-400/20 backdrop-blur-sm transform hover:scale-105 hover:translateY-2 hover:rotateX-5 transition-all duration-500 preserve-3d group-achievement hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2 transform group-achievement-hover:scale-110 transition-transform duration-300">
                    {achievement.metric}
                  </div>
                  <div className="text-sm text-gray-300 transform group-achievement-hover:translateZ-5 transition-transform duration-300 preserve-3d">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>

            {/* 3D Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform group-hover:scale-105"></div>
          </CardContent>
        </Card>

        {/* 3D Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float-slow transform-gpu"></div>
          <div className="absolute bottom-1/4 right-16 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-float-delayed transform-gpu"></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl animate-float-reverse transform-gpu"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfoSection;
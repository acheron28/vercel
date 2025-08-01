import React, { useEffect, useRef } from 'react';
import { Users, Code, Database, FileText, Settings } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockTeamData } from '../data/mock';

const TeamSection = () => {
  const sectionRef = useRef(null);

  const getTeamIcon = (role) => {
    if (role.includes('Network') || role.includes('System')) return Settings;
    if (role.includes('Developer') || role.includes('Frontend')) return Code;
    if (role.includes('Quality') || role.includes('Research')) return Database;
    return FileText;
  };

  return (
    <section id="team" className="py-20 px-4 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* 3D Section Header */}
        <div className="text-center mb-16 perspective-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 transform hover:rotateX-5 transition-all duration-500 preserve-3d">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-x">Cyber Crusaders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto transform hover:translateZ-10 transition-transform duration-300 preserve-3d">
            The brilliant minds behind VerseZero's revolutionary technology
          </p>
        </div>

        {/* 3D Team Groups */}
        <div className="space-y-16 perspective-1000">
          {mockTeamData.teams.map((team, teamIndex) => (
            <div key={teamIndex} className="relative">
              {/* 3D Team Group Header */}
              <div className="text-center mb-10 perspective-1000">
                <div className="inline-block transform hover:rotateY-5 transition-all duration-500 preserve-3d">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transform hover:translateZ-10 transition-transform duration-300 preserve-3d">
                    {team.name}
                  </h3>
                  <p className="text-blue-400 font-medium bg-blue-500/10 px-6 py-2 rounded-full border border-blue-500/20 backdrop-blur-sm shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    {team.description}
                  </p>
                </div>
              </div>

              {/* 3D Team Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {team.members.map((member, memberIndex) => {
                  const IconComponent = getTeamIcon(member.role);
                  return (
                    <Card 
                      key={memberIndex} 
                      className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-700 group transform hover:scale-105 hover:translateY-4 hover:rotateY-5 hover:shadow-2xl hover:shadow-blue-500/20 preserve-3d"
                      style={{
                        animationDelay: `${memberIndex * 150}ms`
                      }}
                    >
                      <CardContent className="p-8 relative">
                        <div className="flex items-start space-x-6">
                          {/* 3D Avatar */}
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-2xl hover:shadow-blue-500/40 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 preserve-3d group-member">
                              <span className="group-member-hover:translateZ-10 transition-transform duration-300">
                                {member.initials}
                              </span>
                            </div>
                          </div>
                          
                          {/* 3D Member Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xl font-semibold text-white mb-2 transform group-hover:translateZ-10 transition-transform duration-300 preserve-3d">
                              {member.name}
                            </h4>
                            <p className="text-blue-400 font-medium mb-4 transform group-hover:translateZ-8 transition-transform duration-300 preserve-3d">
                              {member.role}
                            </p>
                            
                            {/* 3D Skills List */}
                            <div className="space-y-2">
                              {member.skills.map((skill, skillIndex) => (
                                <div 
                                  key={skillIndex} 
                                  className="flex items-center text-sm text-gray-300 transform group-hover:translateX-2 transition-all duration-300 preserve-3d hover:text-white"
                                  style={{
                                    transitionDelay: `${skillIndex * 50}ms`
                                  }}
                                >
                                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 shadow-lg hover:shadow-blue-400/40 transform hover:scale-125 transition-all duration-300"></div>
                                  <span className="hover:translateZ-5 transition-transform duration-300 preserve-3d">
                                    {skill}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* 3D Role Icon */}
                          <div className="flex-shrink-0">
                            <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 preserve-3d shadow-lg">
                              <IconComponent className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                            </div>
                          </div>
                        </div>

                        {/* 3D Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform group-hover:scale-105"></div>
                        
                        {/* 3D Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform group-hover:scale-110"></div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* 3D Decorative Separator */}
              {teamIndex < mockTeamData.teams.length - 1 && (
                <div className="mt-16 flex justify-center perspective-1000">
                  <div className="relative">
                    <div className="w-48 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transform hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3D Background Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-float-particle opacity-60 transform-gpu"></div>
          <div className="absolute top-1/3 right-32 w-1 h-1 bg-purple-400 rounded-full animate-float-particle-delayed opacity-70 transform-gpu"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-particle-reverse opacity-50 transform-gpu"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-float-particle opacity-60 transform-gpu"></div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
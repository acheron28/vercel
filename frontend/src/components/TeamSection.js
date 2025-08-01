import React from 'react';
import { Users, Code, Database, FileText, Settings } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockTeamData } from '../data/mock';

const TeamSection = () => {
  const getTeamIcon = (role) => {
    if (role.includes('Network') || role.includes('System')) return Settings;
    if (role.includes('Developer') || role.includes('Frontend')) return Code;
    if (role.includes('Quality') || role.includes('Research')) return Database;
    return FileText;
  };

  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Cyber Crusaders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The brilliant minds behind VerseZero's revolutionary technology
          </p>
        </div>

        {/* Team Groups */}
        <div className="space-y-12">
          {mockTeamData.teams.map((team, teamIndex) => (
            <div key={teamIndex} className="relative">
              {/* Team Group Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{team.name}</h3>
                <p className="text-blue-400 font-medium">{team.description}</p>
              </div>

              {/* Team Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {team.members.map((member, memberIndex) => {
                  const IconComponent = getTeamIcon(member.role);
                  return (
                    <Card key={memberIndex} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          {/* Avatar */}
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-white text-xl">
                              {member.initials}
                            </div>
                          </div>
                          
                          {/* Member Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xl font-semibold text-white mb-1">{member.name}</h4>
                            <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                            
                            {/* Skills */}
                            <div className="space-y-1">
                              {member.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="flex items-center text-sm text-gray-300">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                                  {skill}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Role Icon */}
                          <div className="flex-shrink-0">
                            <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                              <IconComponent className="h-5 w-5 text-blue-400" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Decorative line between teams */}
              {teamIndex < mockTeamData.teams.length - 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
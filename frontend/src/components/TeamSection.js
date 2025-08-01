import React from 'react';
import { Users, Code, Database, FileText, Settings, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockTeamData } from '../data/mock';

const TeamSection = () => {
  const getTeamIcon = (role) => {
    if (role.includes('Network') || role.includes('System')) return Settings;
    if (role.includes('Developer') || role.includes('Frontend')) return Code;
    if (role.includes('Quality') || role.includes('Research')) return Database;
    return FileText;
  };

  const getTeamColor = (teamIndex) => {
    const colors = ['blue', 'green', 'purple'];
    return colors[teamIndex % colors.length];
  };

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      text: 'text-blue-600',
      icon: 'bg-blue-100 text-blue-600'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-100', 
      text: 'text-green-600',
      icon: 'bg-green-100 text-green-600'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      text: 'text-purple-600', 
      icon: 'bg-purple-100 text-purple-600'
    }
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-blue-600">Cyber Crusaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated team of 7 professionals bringing diverse expertise to revolutionize connectivity for underserved communities.
          </p>
        </div>

        {/* Team Groups */}
        <div className="space-y-16">
          {mockTeamData.teams.map((team, teamIndex) => {
            const colors = colorClasses[getTeamColor(teamIndex)];
            
            return (
              <div key={teamIndex}>
                {/* Team Group Header */}
                <div className="text-center mb-8">
                  <Card className={`${colors.bg} ${colors.border} border inline-block`}>
                    <CardContent className="px-6 py-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{team.name}</h3>
                      <p className={`${colors.text} font-medium`}>{team.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {team.members.map((member, memberIndex) => {
                    const IconComponent = getTeamIcon(member.role);
                    return (
                      <Card key={memberIndex} className="bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg">
                                {member.initials}
                              </div>
                            </div>
                            
                            {/* Member Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
                                <div className={`p-2 rounded-lg ${colors.icon}`}>
                                  <IconComponent className="h-4 w-4" />
                                </div>
                              </div>
                              <p className={`${colors.text} font-medium mb-4`}>{member.role}</p>
                              
                              {/* Skills */}
                              <div className="space-y-2">
                                {member.skills.slice(0, 3).map((skill, skillIndex) => (
                                  <div key={skillIndex} className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                    <span>{skill}</span>
                                  </div>
                                ))}
                                {member.skills.length > 3 && (
                                  <div className="text-sm text-gray-400 mt-2">
                                    +{member.skills.length - 3} more skills
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
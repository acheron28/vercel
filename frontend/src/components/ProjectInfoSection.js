import React from 'react';
import { Calendar, MapPin, Users, Target, Award, Cpu } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockProjectData } from '../data/mock';

const ProjectInfoSection = () => {
  const infoItems = [
    {
      icon: Calendar,
      label: "Project Timeline",
      value: mockProjectData.timeline
    },
    {
      icon: MapPin,
      label: "Institution",
      value: mockProjectData.institution
    },
    {
      icon: Users,
      label: "Team Size",
      value: mockProjectData.teamSize
    },
    {
      icon: Target,
      label: "Primary Goal",
      value: mockProjectData.goal
    }
  ];

  return (
    <section id="project-info" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Information</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive details about the VerseZero capstone project
          </p>
        </div>

        {/* Project Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {infoItems.map((item, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-center">
              <CardContent className="p-6">
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                <p className="text-gray-300">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mockProjectData.technologies.map((tech, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <p className="text-sm text-gray-300 font-medium">{tech.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                <Award className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Capstone Project 2025</h3>
                <p className="text-blue-400 font-medium">Southern Alberta Institute of Technology (SAIT)</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                VerseZero represents the culmination of months of research, development, and innovation. 
                Our capstone project addresses one of the most pressing challenges of our time: the digital divide 
                that separates connected and unconnected communities worldwide.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                By leveraging Raspberry Pi technology, we've created a portable, affordable solution that can 
                be deployed anywhere to provide essential digital services. Our system operates independently 
                of traditional internet infrastructure, making it perfect for remote areas, disaster zones, 
                and underserved communities.
              </p>

              <p className="text-gray-300 leading-relaxed">
                The project showcases advanced skills in network engineering, system administration, 
                web development, and project management - representing the diverse expertise of our 
                Cyber Crusaders team.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {mockProjectData.achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-400/20">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{achievement.metric}</div>
                  <div className="text-sm text-gray-300">{achievement.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectInfoSection;
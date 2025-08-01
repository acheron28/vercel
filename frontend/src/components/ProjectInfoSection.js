import React from 'react';
import { Calendar, MapPin, Users, Target, Award, TrendingUp, CheckCircle, BarChart3 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockProjectData } from '../data/mock';

const ProjectInfoSection = () => {
  const infoItems = [
    {
      icon: Calendar,
      label: "Timeline",
      value: mockProjectData.timeline,
      color: "blue"
    },
    {
      icon: MapPin,
      label: "Institution",
      value: "SAIT",
      subValue: "Southern Alberta Institute of Technology",
      color: "green"
    },
    {
      icon: Users,
      label: "Team Size",
      value: mockProjectData.teamSize,
      color: "purple"
    },
    {
      icon: Target,
      label: "Mission",
      value: "Digital Inclusion",
      subValue: "Connecting Underserved Communities",
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    green: "bg-green-50 text-green-600 border-green-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    orange: "bg-orange-50 text-orange-600 border-orange-100"
  };

  return (
    <section id="project-info" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BarChart3 className="h-4 w-4" />
            <span>Project Overview</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            VerseOS <span className="text-blue-600">Project Information</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive details about our capstone project and the technology behind VerseOS.
          </p>
        </div>

        {/* Project Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {infoItems.map((item, index) => (
            <Card key={index} className="bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group text-center">
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${colorClasses[item.color]}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-1">{item.value}</p>
                {item.subValue && (
                  <p className="text-sm text-gray-500">{item.subValue}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-gray-50 to-blue-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {mockProjectData.technologies.map((tech, index) => (
                  <Card key={index} className="bg-white border border-gray-100 hover:shadow-md transition-all duration-300 group">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <p className="text-sm font-medium text-gray-700">{tech.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Description */}
          <div className="lg:col-span-2">
            <Card className="bg-white border border-gray-100 h-full">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Capstone Project 2025</h3>
                    <p className="text-blue-600 font-medium">Southern Alberta Institute of Technology (SAIT)</p>
                  </div>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    VerseOS represents the culmination of months of research, development, and innovation. 
                    Our capstone project addresses the digital divide that separates connected and 
                    unconnected communities worldwide.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    By leveraging Raspberry Pi technology, we've created a portable, affordable solution 
                    that can be deployed anywhere to provide essential digital services. Our system operates 
                    independently of traditional internet infrastructure.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    The project showcases advanced skills in network engineering, system administration, 
                    web development, and project management across our diverse Cyber Crusaders team.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Achievements */}
          <div>
            <Card className="bg-white border border-gray-100 h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                  Key Achievements
                </h3>
                <div className="space-y-4">
                  {mockProjectData.achievements.map((achievement, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {achievement.metric}
                      </div>
                      <div className="text-sm text-gray-600">
                        {achievement.description}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Timeline */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">Project Timeline</h4>
                  <div className="space-y-3">
                    {[
                      { phase: "Research & Planning", month: "May 2025", status: "completed" },
                      { phase: "Development", month: "Jun-Jul 2025", status: "in-progress" },
                      { phase: "Testing & Deployment", month: "August 2025", status: "planned" }
                    ].map((phase, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className={`h-4 w-4 ${
                          phase.status === 'completed' ? 'text-green-500' : 
                          phase.status === 'in-progress' ? 'text-blue-500' : 'text-gray-300'
                        }`} />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">{phase.phase}</div>
                          <div className="text-xs text-gray-500">{phase.month}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfoSection;
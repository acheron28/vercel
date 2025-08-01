import React from 'react';
import { Shield, Zap, BookOpen, Wrench, Lightbulb, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Offline-First Design",
      description: "Complete educational and communication resources available without internet dependency. Perfect for remote areas with limited connectivity.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Plug & Play Setup", 
      description: "Simple deployment with minimal technical expertise required. Auto-configuring access point with user-friendly interface.",
      color: "green"
    },
    {
      icon: BookOpen,
      title: "Rich Content Library",
      description: "Curated educational materials, Wikipedia archives, medical resources, and communication tools all accessible locally.",
      color: "purple"
    },
    {
      icon: Wrench,
      title: "Low Maintenance",
      description: "Robust, energy-efficient design built for continuous operation in challenging environments with minimal upkeep.",
      color: "orange"
    },
    {
      icon: Lightbulb,
      title: "Scalable Solution",
      description: "Easily expandable network that can grow with community needs. Multiple units can be linked for broader coverage.",
      color: "cyan"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Designed for deployment in schools, clinics, community centers, and disaster relief areas worldwide.",
      color: "pink"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    green: "bg-green-50 text-green-600 border-green-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    orange: "bg-orange-50 text-orange-600 border-orange-100",
    cyan: "bg-cyan-50 text-cyan-600 border-cyan-100",
    pink: "bg-pink-50 text-pink-600 border-pink-100"
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="h-4 w-4" />
            <span>About VerseOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Technology for
            <span className="text-blue-600"> Underserved Communities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VerseOS brings internet connectivity and essential digital services to remote areas using innovative Raspberry Pi technology and offline-first architecture.
          </p>
        </div>

        {/* Device Showcase */}
        <div className="mb-20">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="relative inline-block mb-8">
                <div className="w-64 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-6xl">📟</div>
                </div>
                {/* Status indicators */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Raspberry Pi Network Hub</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                This compact device delivers Wi-Fi connectivity where traditional internet infrastructure fails. 
                The silent hero of offline connectivity for underserved communities worldwide.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:border-gray-200">
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${colorClasses[feature.color]}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 text-white inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Deploy VerseOS?</h3>
              <p className="text-blue-100 mb-6 max-w-md">
                Join the mission to connect underserved communities worldwide with our revolutionary operating system.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
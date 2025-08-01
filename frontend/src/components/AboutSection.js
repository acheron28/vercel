import React from 'react';
import { Shield, Zap, BookOpen, Wrench, Lightbulb, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
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
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">VerseZero</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revolutionary Raspberry Pi technology that brings internet connectivity to the most remote corners of the world
          </p>
        </div>

        {/* Raspberry Pi Showcase */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="w-80 h-60 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/30 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <div className="text-6xl">📟</div>
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            This compact Raspberry Pi device may look ordinary, but it delivers Wi-Fi connectivity 
            where traditional internet infrastructure fails. Meet the silent hero of offline connectivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
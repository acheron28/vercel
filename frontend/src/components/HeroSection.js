import React from 'react';
import { ArrowRight, Play, CheckCircle, Users, Globe, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import ParticleSystem from './ParticleSystem';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, value: "100+", label: "Connected Communities" },
    { icon: Globe, value: "24/7", label: "System Uptime" },
    { icon: Zap, value: "50ms", label: "Response Time" }
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-16 relative overflow-hidden">
      {/* Advanced 3D Particle System */}
      <ParticleSystem 
        intensity={60} 
        colors={['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b', '#10b981']} 
      />
      
      {/* Glass Morphism Overlay Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating glass orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float-glass-1 backdrop-blur-sm"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-pink-600/20 rounded-full blur-3xl animate-float-glass-2 backdrop-blur-sm"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-orange-600/20 rounded-full blur-3xl animate-float-glass-3 backdrop-blur-sm"></div>
        
        {/* Medium glass particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-particle-drift backdrop-blur-sm border border-white/20"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2))`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              filter: 'blur(1px)',
              boxShadow: `0 0 ${Math.random() * 30 + 10}px rgba(255,255,255,0.3)`
            }}
          />
        ))}
        
        {/* Small sparkling particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`spark-${i}`}
            className="absolute w-2 h-2 rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(255,255,255,0.9), rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6))`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255,255,255,0.8)`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-lg text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-blue-200/50 shadow-lg">
              <CheckCircle className="h-4 w-4" />
              <span>Revolutionary Operating System</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Verse<span className="text-blue-600">OS</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Internet Where It's Never Been
              </p>
              <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                Revolutionary operating system built on Raspberry Pi technology. Delivering reliable internet connectivity and essential services to remote and underserved areas.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToAbout}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-white/80 backdrop-blur-lg px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg border border-blue-100/50">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <Card className="bg-white/90 backdrop-blur-xl shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">VerseOS Dashboard</h3>
                      <p className="text-blue-100 text-sm">System Status Overview</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Online</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50/80 backdrop-blur-lg p-4 rounded-lg border border-gray-100/50">
                      <div className="text-2xl font-bold text-gray-900">24/7</div>
                      <div className="text-sm text-gray-500">Uptime</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-green-500 h-2 rounded-full w-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="bg-gray-50/80 backdrop-blur-lg p-4 rounded-lg border border-gray-100/50">
                      <div className="text-2xl font-bold text-gray-900">100+</div>
                      <div className="text-sm text-gray-500">Active Users</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-500 h-2 rounded-full w-4/5 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Activity List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Recent Activity</h4>
                    {[
                      { status: "success", text: "System initialization complete", time: "2 min ago" },
                      { status: "info", text: "New device connected", time: "5 min ago" },
                      { status: "success", text: "Content library updated", time: "10 min ago" }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          activity.status === 'success' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                        <span className="text-gray-700 flex-1">{activity.text}</span>
                        <span className="text-gray-400">{activity.time}</span>
                      </div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-lg p-4 rounded-lg border border-blue-100/30">
                    <div className="text-sm font-medium text-gray-700 mb-3">Network Performance</div>
                    <div className="flex items-end space-x-2 h-20">
                      {[40, 60, 45, 80, 65, 90, 75].map((height, index) => (
                        <div 
                          key={index}
                          className="bg-blue-500 rounded-t flex-1 animate-pulse"
                          style={{ 
                            height: `${height}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Glass Elements around Dashboard */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-2xl opacity-60 transform rotate-12 backdrop-blur-lg animate-float-dashboard-1 border border-white/20"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-indigo-400/30 to-pink-600/30 rounded-full opacity-40 backdrop-blur-lg animate-float-dashboard-2 border border-white/20"></div>
            <div className="absolute top-1/2 -right-6 w-16 h-16 bg-gradient-to-br from-cyan-400/40 to-yellow-600/40 rounded-xl opacity-70 transform -rotate-45 backdrop-blur-lg animate-float-dashboard-3 border border-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
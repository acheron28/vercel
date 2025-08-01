import React from 'react';
import { ArrowRight, Play, CheckCircle, Users, Globe, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

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
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
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
                    <div className="p-2 bg-blue-100 rounded-lg">
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
            <Card className="bg-white shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">VerseOS Dashboard</h3>
                      <p className="text-blue-100 text-sm">System Status Overview</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm">Online</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">24/7</div>
                      <div className="text-sm text-gray-500">Uptime</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-green-500 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">100+</div>
                      <div className="text-sm text-gray-500">Active Users</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
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
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'success' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                        <span className="text-gray-700 flex-1">{activity.text}</span>
                        <span className="text-gray-400">{activity.time}</span>
                      </div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-gray-700 mb-3">Network Performance</div>
                    <div className="flex items-end space-x-2 h-20">
                      {[40, 60, 45, 80, 65, 90, 75].map((height, index) => (
                        <div 
                          key={index}
                          className="bg-blue-500 rounded-t flex-1"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-20 transform rotate-12"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { ArrowRight, Globe, Zap } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Floating badge */}
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
          <Globe className="h-4 w-4 text-blue-400" />
          <span className="text-blue-400 text-sm font-medium">Connecting the Unconnected</span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Verse<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Zero</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
          Internet Where It's Never Been
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          Bridging the digital divide with innovative Raspberry Pi technology. 
          Delivering reliable internet connectivity to remote and underserved areas, 
          bringing the power of knowledge and communication to every corner of the world.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Discover More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-white/5 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <Zap className="mr-2 h-5 w-5" />
            See Technology
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
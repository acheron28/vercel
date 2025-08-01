import React from 'react';
import { Github, Linkedin, Twitter, Heart, Code, Cpu } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-gradient-to-br from-black/60 via-blue-900/40 to-purple-900/40 backdrop-blur-2xl border-t border-white/20 relative overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-3d-float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-3d-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content with 3D Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 perspective-1000">
          {/* 3D Logo and Description */}
          <div className="space-y-6 transform hover:translateZ-5 hover:rotateY-3 transition-all duration-500 preserve-3d group">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/30 backdrop-blur-sm transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Code className="h-8 w-8 text-blue-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <span className="text-3xl font-bold text-white">
                Verse<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">OS</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed transform group-hover:translateZ-3 transition-transform duration-500 preserve-3d">
              Revolutionary operating system built on Raspberry Pi technology. 
              Connecting the unconnected, one community at a time through innovative offline-first solutions.
            </p>
          </div>

          {/* 3D Project Info */}
          <div className="space-y-6 transform hover:translateZ-5 hover:rotateX-3 transition-all duration-500 preserve-3d group">
            <h3 className="text-xl font-bold text-white mb-4 transform group-hover:translateZ-5 transition-transform duration-500 preserve-3d">Project Details</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center space-x-2 transform hover:translateX-2 transition-transform duration-300">
                <Cpu className="h-4 w-4 text-blue-400" />
                <span>SAIT Capstone Project 2025</span>
              </p>
              <p className="flex items-center space-x-2 transform hover:translateX-2 transition-transform duration-300">
                <Code className="h-4 w-4 text-purple-400" />
                <span>Team: Cyber Crusaders</span>
              </p>
              <p className="flex items-center space-x-2 transform hover:translateX-2 transition-transform duration-300">
                <Heart className="h-4 w-4 text-pink-400" />
                <span>Duration: May - August 2025</span>
              </p>
            </div>
          </div>

          {/* 3D Social Links */}
          <div className="space-y-6 transform hover:translateZ-5 hover:rotateY--3 transition-all duration-500 preserve-3d group">
            <h3 className="text-xl font-bold text-white mb-4 transform group-hover:translateZ-5 transition-transform duration-500 preserve-3d">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-4 bg-gradient-to-r from-white/10 to-blue-500/10 rounded-2xl hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-500 group-social transform hover:scale-125 hover:translateY-3 hover:rotateZ-12 preserve-3d border border-white/10 backdrop-blur-sm"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <social.icon className="h-6 w-6 text-gray-400 group-social-hover:text-blue-400 transition-all duration-500 transform group-social-hover:rotate-12 group-social-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-social-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced 3D Bottom Bar */}
        <div className="pt-12 border-t border-gradient-to-r from-transparent via-white/20 to-transparent">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 perspective-1000">
            <div className="flex items-center space-x-3 text-gray-400 transform hover:translateZ-5 hover:rotateX-3 transition-all duration-500 preserve-3d group">
              <span>&copy; 2025 VerseOS Team. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400 transform hover:translateZ-5 hover:rotateX--3 transition-all duration-500 preserve-3d group">
              <span>Made with</span>
              <Heart className="h-5 w-5 text-red-400 animate-3d-pulse-heart" />
              <span>and Raspberry Pi technology</span>
              <Cpu className="h-5 w-5 text-blue-400 animate-3d-spin-slow" />
            </div>
          </div>
        </div>
      </div>

      {/* Additional 3D Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 blur-sm"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;
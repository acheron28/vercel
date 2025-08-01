import React from 'react';
import { Github, Linkedin, Twitter, Heart, Wifi } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wifi className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">VerseZero</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Bridging the digital divide with innovative Raspberry Pi technology. 
              Connecting the unconnected, one community at a time.
            </p>
          </div>

          {/* Project Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Project Details</h3>
            <div className="space-y-2 text-gray-400">
              <p>SAIT Capstone Project 2025</p>
              <p>Team: Cyber Crusaders</p>
              <p>Technology: Raspberry Pi Network</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; 2025 VerseZero Team. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>and Raspberry Pi technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
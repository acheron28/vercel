import React from 'react';
import { Github, Linkedin, Twitter, Mail, Code } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                Verse<span className="text-blue-400">OS</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Revolutionary operating system built on Raspberry Pi technology. 
              Connecting the unconnected, one community at a time through innovative offline-first solutions.
            </p>
          </div>

          {/* Project Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Project</h3>
            <div className="space-y-2 text-gray-400">
              <p>SAIT Capstone 2025</p>
              <p>Team: Cyber Crusaders</p>
              <p>Duration: May - August</p>
              <p>Technology: Raspberry Pi</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              <p>&copy; 2025 VerseOS Team. All rights reserved.</p>
            </div>
            <div className="text-gray-400">
              <p>Made with ❤️ and Raspberry Pi technology</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
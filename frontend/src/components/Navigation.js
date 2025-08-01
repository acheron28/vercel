import React, { useState, useEffect } from 'react';
import { Menu, X, Wifi } from 'lucide-react';

const Navigation = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
    { id: 'project-info', label: 'Project Info' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform-gpu ${
      scrolled 
        ? 'bg-black/30 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
        : 'bg-black/10 backdrop-blur-lg border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 3D Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer transform hover:scale-105 transition-all duration-300 preserve-3d">
            <div className="relative">
              <Wifi className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 transform group-hover:rotate-12 group-hover:scale-110" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300 transform group-hover:translateZ-5 preserve-3d">
              VerseZero
            </span>
          </div>

          {/* 3D Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 perspective-1000">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg transform hover:scale-105 hover:translateY-1 preserve-3d group ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-blue-400/10 shadow-lg shadow-blue-400/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="relative z-10 group-hover:translateZ-5 transition-transform duration-300 preserve-3d">
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm transform scale-110"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"></div>
              </button>
            ))}
          </div>

          {/* 3D Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all duration-300 transform hover:scale-110 hover:rotate-6 preserve-3d group"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="h-6 w-6 transform group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                )}
                <div className="absolute inset-0 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </button>
          </div>
        </div>

        {/* 3D Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden transform transition-all duration-500 ease-out">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-xl rounded-2xl mt-2 border border-white/10 shadow-2xl perspective-1000">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:translateX-2 preserve-3d group ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-400/10 shadow-lg shadow-blue-400/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transform: `translateY(${isMenuOpen ? 0 : -20}px)`,
                    opacity: isMenuOpen ? 1 : 0
                  }}
                >
                  <span className="group-hover:translateZ-5 transition-transform duration-300 preserve-3d">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"></div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3D Navigation Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    </nav>
  );
};

export default Navigation;
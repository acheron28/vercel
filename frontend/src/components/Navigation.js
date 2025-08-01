import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Code } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 transform-gpu perspective-1000 ${
      scrolled 
        ? 'bg-black/40 backdrop-blur-2xl border-b border-white/30 shadow-3d-nav' 
        : 'bg-black/20 backdrop-blur-xl border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Advanced 3D Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer transform hover:scale-110 hover:translateZ-5 hover:rotateY-5 transition-all duration-500 preserve-3d perspective-1000">
            <div className="relative">
              <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                <Code className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-all duration-500 transform group-hover:rotateZ-45 group-hover:scale-125" />
              </div>
              <div className="absolute inset-0 bg-blue-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-110"></div>
            </div>
            <div className="transform group-hover:translateZ-10 transition-transform duration-500 preserve-3d">
              <span className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-500">
                Verse<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">OS</span>
              </span>
            </div>
          </div>

          {/* Ultra 3D Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 perspective-1000">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-3 text-sm font-semibold transition-all duration-500 rounded-xl transform hover:scale-110 hover:translateY-2 hover:rotateX-5 hover:translateZ-5 preserve-3d group ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-gradient-to-r from-blue-400/20 to-purple-400/20 shadow-3d-nav-active border border-blue-400/30'
                    : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-blue-500/10'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="relative z-10 group-hover:translateZ-5 transition-transform duration-500 preserve-3d">
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-sm transform scale-110 animate-3d-pulse"></div>
                    <div className="absolute -inset-1 border border-blue-400/50 rounded-xl animate-3d-border-glow"></div>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105 blur-sm"></div>
              </button>
            ))}
          </div>

          {/* Enhanced 3D Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-3 rounded-xl hover:bg-gradient-to-r hover:from-white/10 hover:to-blue-500/10 transition-all duration-500 transform hover:scale-125 hover:rotate-12 hover:translateZ-5 preserve-3d group border border-white/10 backdrop-blur-sm"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="h-6 w-6 transform group-hover:rotate-180 group-hover:scale-125 transition-transform duration-500" />
                ) : (
                  <Menu className="h-6 w-6 transform group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500" />
                )}
                <div className="absolute inset-0 bg-white/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-150"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Ultra 3D Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden transform transition-all duration-700 ease-out perspective-1000">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-gradient-to-br from-black/60 to-blue-900/40 backdrop-blur-2xl rounded-3xl mt-4 border border-white/20 shadow-3d-mobile-menu">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-6 py-4 rounded-2xl text-sm font-semibold transition-all duration-500 transform hover:scale-105 hover:translateX-4 hover:rotateY-5 hover:translateZ-5 preserve-3d group ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-gradient-to-r from-blue-400/20 to-purple-400/20 shadow-3d-nav-active border border-blue-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-blue-500/10'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: `translateY(${isMenuOpen ? 0 : -30}px) rotateX(${isMenuOpen ? 0 : -15}deg)`,
                    opacity: isMenuOpen ? 1 : 0
                  }}
                >
                  <span className="group-hover:translateZ-5 transition-transform duration-500 preserve-3d">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105 blur-sm"></div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Advanced 3D Navigation Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none transform hover:scale-105"></div>
      <div className="absolute inset-0 border-b border-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
    </nav>
  );
};

export default Navigation;
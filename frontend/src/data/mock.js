// Mock data for VerseZero project
export const mockTeamData = {
  teams: [
    {
      name: "System Configuration Team",
      description: "OS Setup & Access Point Configuration",
      members: [
        {
          name: "Moksh Garg",
          initials: "MG",
          role: "Network Architect & Project Lead",
          skills: [
            "Access Point Configurations",
            "Project Management & Leadership", 
            "Network Security Implementation",
            "DHCP/DNS Setup & Management",
            "Traffic Optimization & Monitoring"
          ]
        },
        {
          name: "Rishav Sharma", 
          initials: "RS",
          role: "System Engineer & Infrastructure Specialist",
          skills: [
            "Operating System & Server Setup",
            "Python Scripting & Automation",
            "System Architecture Design", 
            "Network Configuration & Optimization",
            "Hardware Integration & Testing"
          ]
        }
      ]
    },
    {
      name: "Content & Web Development Team",
      description: "Website Development & Resource Curation", 
      members: [
        {
          name: "Navdeep Kaur",
          initials: "NK", 
          role: "Frontend Developer & UI/UX Specialist",
          skills: [
            "Full-Stack Web Development",
            "User Interface & Experience Design",
            "Project Management & Coordination",
            "Content Strategy & Implementation",
            "Cross-Platform Development"
          ]
        },
        {
          name: "Rahmatu Abdullahi Liman",
          initials: "RL",
          role: "Resource Curator & Quality Assurance Lead", 
          skills: [
            "Search Engine Optimization (SEO)",
            "Quality Assurance & Testing",
            "Content Strategy & Management",
            "Website Documentation & Guides",
            "Digital Resource Organization"
          ]
        },
        {
          name: "Simran Simran",
          initials: "SS",
          role: "Research Analyst & Content Strategist",
          skills: [
            "Research & Data Analysis",
            "Digital Resource Management", 
            "Content Strategy Development",
            "Market Research & User Studies",
            "Information Architecture"
          ]
        }
      ]
    },
    {
      name: "Documentation & Project Management Team",
      description: "Project Documentation, Planning & Coordination",
      members: [
        {
          name: "Ryan Johnson",
          initials: "RJ",
          role: "Project Coordinator & Asset Manager",
          skills: [
            "Asset Acquisition & Management",
            "Project Design & Strategic Planning",
            "Task Planning & Resource Allocation", 
            "Version Control & Repository Management",
            "Team Coordination & Communication"
          ]
        },
        {
          name: "Destiny Cooper",
          initials: "DC", 
          role: "Documentation Lead & Ethics Specialist",
          skills: [
            "Ethical & Legal Analysis",
            "Comprehensive Documentation",
            "Project Management & Oversight",
            "Content Strategy & Guidelines",
            "Compliance & Standards Management"
          ]
        }
      ]
    }
  ]
};

export const mockProjectData = {
  timeline: "2024-2025 Academic Year",
  institution: "Southern Alberta Institute of Technology (SAIT)",
  teamSize: "7 Members",
  goal: "Bridge Digital Divide with Raspberry Pi Technology",
  technologies: [
    { name: "Raspberry Pi 4", icon: "🍓" },
    { name: "Linux OS", icon: "🐧" }, 
    { name: "Access Point", icon: "📡" },
    { name: "Python Scripts", icon: "🐍" },
    { name: "Local Storage", icon: "💾" },
    { name: "Web Interface", icon: "🌐" }
  ],
  achievements: [
    { metric: "100%", description: "Offline Functionality" },
    { metric: "50+", description: "Connected Devices" },
    { metric: "24/7", description: "Uptime Reliability" }
  ]
};
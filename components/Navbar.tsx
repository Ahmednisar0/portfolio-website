// components/Navbar.js
'use client'
import { useState } from 'react';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState(null);

    const scrollToSection = (sectionId:any) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(sectionId); // Update active section state
    };

    return (
      <div className="bg-black w-full h-16 flex items-center justify-between px-8">
        
        {/* Left side: Name */}
        <div className="text-3xl font-bold text-white">
          <span style={{ color: '#ffa500' }}>Ahmed</span>
          <span> Raza</span>
        </div>
  
        {/* Center: Skills, Certifications, Projects */}
        <div className="flex space-x-8 font-bold">
          <div 
            onClick={() => scrollToSection('skills')} 
            className={`text-white text-xl cursor-pointer hover:text-[#ff4500] hover:underline 
                        ${activeSection === 'skills' ? 'text-[#ff4500] underline' : ''}`}>
            Skills
          </div>
          <div 
            onClick={() => scrollToSection('certifications')} 
            className={`text-white text-xl cursor-pointer hover:text-[#ff4500] hover:underline 
                        ${activeSection === 'certifications' ? 'text-[#ff4500] underline' : ''}`}>
            Certifications
          </div>
          <div 
            onClick={() => scrollToSection('cards')} 
            className={`text-white text-xl cursor-pointer hover:text-[#ff4500] hover:underline 
                        ${activeSection === 'projects' ? 'text-[#ff4500] underline' : ''}`}>
            Projects
          </div>
        </div>
  
        {/* Right side: Contact Me link */}
        <div 
          onClick={() => scrollToSection('contact')} 
          className="bg-white text-black border border-black px-6 py-2 rounded-lg cursor-pointer text-sm font-medium">
          Contact Me
        </div>
      </div>
    );
}

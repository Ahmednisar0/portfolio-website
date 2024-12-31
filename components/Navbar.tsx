'use client'
import { useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId:any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <div className="bg-black w-full h-16 flex items-center justify-between px-3 md:px-12 lg:px-16">
      {/* Left side: Name */}
      <div className="text-3xl font-bold text-white">
        <span style={{ color: '#ffa500' }}>Ahmed</span>
        <span> Raza</span>
      </div>

      {/* Hamburger Menu Icon for smaller screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Center: Skills, Certifications, Projects */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col absolute top-16 left-0 w-full h-[200px] lg:h-auto justify-center items-center lg:items-start lg:justify-normal bg-black md:flex md:flex-row md:relative md:top-0 md:w-auto md:space-x-8`}
      >
        <div
          onClick={() => scrollToSection('skills')}
          className={`text-white text-2xl lg:text-xl cursor-pointer px-4 py-2 hover:text-[#ff4500] hover:underline ${
            activeSection === 'skills' ? 'text-[#ff4500] underline' : ''
          }`}
        >
          Skills
        </div>
        <div
          onClick={() => scrollToSection('certifications')}
          className={`text-white text-2xl lg:text-xl cursor-pointer px-4 py-2 hover:text-[#ff4500] hover:underline ${
            activeSection === 'certifications' ? 'text-[#ff4500] underline' : ''
          }`}
        >
          Certifications
        </div>
        <div
          onClick={() => scrollToSection('projects')}
          className={`text-white text-2xl lg:text-xl cursor-pointer px-4 py-2 hover:text-[#ff4500] hover:underline ${
            activeSection === 'projects' ? 'text-[#ff4500] underline' : ''
          }`}
        >
          Projects
        </div>
      </div>

      {/* Right side: Contact Me link */}
      <div
        onClick={() => scrollToSection('contact')}
        className="hidden md:block bg-white text-black border border-black px-6 py-2 rounded-lg cursor-pointer text-sm font-medium"
      >
        Contact Me
      </div>
    </div>
  );
}

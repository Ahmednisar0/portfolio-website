// pages/index.js
'use client'

import { useState } from 'react';
import Skills from '@/components/Skills';
import Navbar from '@/components/Navbar';
import Certifications from '@/components/Certificates';
import Cards from '@/components/Portfoliocards';
import Footer from '@/components/footer';
import Contact from '@/components/contact';


export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (sectionId:any) => {
      const section = document.getElementById(sectionId);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveSection(sectionId); // Update active section state
  };
  return (<div> 
    
     <Navbar/>
     <div className="font-sans bg-gray-100 text-gray-900 flex">

{/* Left Side - Text Content */}
<section id="main" className="flex flex-col justify-center items-start text-left px-16 w-1/2 py-16">
  {/* Name: Ahmed Raza */}
  <div className="text-5xl font-bold mb-6">
    <span>Hi,</span>
  </div>

  {/* Greeting Text */}
  <h2 className="text-5xl font-bold mb-6">I'm <span className="text-5xl font-bold mb-6" style={{ color: '#ffa500' }}>Ahmed</span></h2>
  <p className="text-5xl font-bold mb-6">A Front-End Developer</p>

  {/* Description */}
  <p className="text-lg max-w-3xl mx-auto mb-8">
    I'm passionate about building modern, dynamic websites and applications. I specialize in front-end technologies like React, TypeScript, and Next.js to deliver seamless user experiences and performance optimization.
  </p>

  {/* Buttons */}
  <div className="flex space-x-6">
    <div onClick={() => scrollToSection('contact')} 
            className={`bg-black text-white px-6 py-3 rounded-lg cursor-pointer text-xl font-semibold hover:bg-gray-700
                        ${activeSection === 'skills' ? 'text-[#ff4500] underline' : ''}`}> 
      Contact Me
    </div>
    <div onClick={() => scrollToSection('cards')} 
            className={`bg-[#ffa500] text-white px-6 py-3 rounded-lg cursor-pointer text-xl font-semibold hover:bg-orange-600
                        ${activeSection === 'skills' ? 'text-[#ff4500] underline' : ''}`}>
      Projects
    </div>
  </div>
</section>

{/* Right Side - Owl Image */}
<section className="w-1/2 py-8 flex justify-center items-center">
  <img
    src="/images/pic.jpeg"  // Correct path to your image in the public folder
    alt="Owl"
    className="w-96 h-96 rounded-full shadow-xl"
  />
</section>

</div>

    <Skills />
    <Certifications />
    <Cards />
    <Contact />
    <Footer />
    </div>
  );
}

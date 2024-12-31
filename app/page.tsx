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
     <div className="font-sans bg-gray-100 h-[1100px] lg:h-screen w-[414px] lg:w-full text-gray-900 flex-col lg:flex-row  flex">

{/* Left Side - Text Content */}
<section id="main" className="flex flex-col justify-center w-[414px]  items-start text-left px-[15px] lg:px-16 lg:w-1/2 py-16">
  {/* Name: Ahmed Raza */}
  <div className="text-5xl font-bold mb-6">
    <span>Hi,</span>
  </div>

  {/* Greeting Text */}
  <h2 className="text-5xl font-bold mb-6">I'm <span className="text-5xl font-bold mb-6" style={{ color: '#ffa500' }}>Ahmed</span></h2>
  <p className="text-5xl w-[370px] font-bold mb-6">A Front-End Developer</p>

  {/* Description */}
  <p className="text-lg   mx-auto mb-8">
    I'm passionate about building modern, dynamic websites and applications. I specialize in front-end technologies like React, TypeScript, and Next.js to deliver seamless user experiences and performance optimization.
  </p>

  {/* Buttons */}
  <div className="flex space-x-6">
    <div onClick={() => scrollToSection('contact')} 
            className={`bg-black text-white  px-6 py-3 rounded-lg cursor-pointer text-xl font-semibold hover:bg-gray-700
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
<section className="lg:w-1/2  items-center py-8 flex justify-center ">
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

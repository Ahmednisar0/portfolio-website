// components/Skills.js

import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'; // React Icons
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiDigitalocean } from 'react-icons/si';

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-800 py-20">
      
      {/* Skills Section Heading and Paragraph */}
      <div className="mb-8 ml-6 px-8">
        <h2 className="text-5xl font-bold text-white">Skills</h2> {/* Orange color for heading */}
        <p className="text-lg text-white mt-4 max-w-3xl">
          More to come! I'll be learning Python to make Ai bots, and also improving my skills in UI/UX design.
        </p>
      </div>

      {/* Skills Grid with Icons and Text on the Right */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 ml-6 gap-12 px-8">
        
        {/* Skill Icons with Text on the Right */}
        <div className="flex items-center text-[#FF4500] text-3xl">
          <FaReact />
          <p className="ml-2 text-white text-lg font-semibold">React</p> {/* Text to the right */}
        </div>
        
        <div className="flex items-center text-[#FF4500] text-3xl">
          <FaHtml5 />
          <p className="ml-2 text-white text-lg font-semibold">HTML</p>
        </div>

        <div className="flex items-center text-[#FF4500] text-3xl">
          <FaCss3Alt />
          <p className="ml-2 text-white text-lg font-semibold">CSS</p>
        </div>

        <div className="flex items-center text-[#FF4500] text-3xl">
          <FaJs />
          <p className="ml-2 text-white text-lg font-semibold">JavaScript</p>
        </div>

        <div className="flex items-center text-[#FF4500] text-3xl">
          <SiTypescript />
          <p className="ml-2 text-white text-lg font-semibold">TypeScript</p>
        </div>

        <div className="flex items-center text-[#FF4500] text-3xl">
          <SiNextdotjs />
          <p className="ml-2 text-white text-lg font-semibold">Next.js</p>
        </div>

        <div className="flex items-center text-[#FF4500] text-3xl">
          <SiTailwindcss />
          <p className="ml-2 text-white text-lg font-semibold">Tailwind CSS</p>
        </div>

        <div className="flex items-center text-[#FF4500] text-3xl">
          <SiDigitalocean />
          <p className="ml-2 text-white text-lg font-semibold">Digital Marketing</p>
        </div>

      </div>
    </section>
  );
}

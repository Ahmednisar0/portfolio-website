// pages/index.js

// pages/index.js

import Image from 'next/image';

export default function Cards() {
  return (
    <div id="cards" className="text-center my-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Portfolio</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/griill.png" // Replace with your image path
            alt="Portfolio Image 1"
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <p className="text-gray-500 text-sm font-bold mb-2">NextJs | Tailwind CSS</p> {/* Tech stack section */}
            <p className="text-gray-700 mb-4 text-left">Grilll n Grind is a concept for an online platform I created to easily order pizzas and burgers. Built using Tailwind CSS, the site features a sleek, user-friendly design</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-blue-500">
              View More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/resume.png" // Replace with your image path
            alt="Portfolio Image 2"
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <p className="text-gray-500 text-sm font-bold mb-2">HTML | CSS | JAVASCRIPT</p> {/* Tech stack section */}
            <p className="text-gray-700 text-left mb-10">Resume Builder is a tool I made using HTML, CSS, and JavaScript that allows users to easily create and download professional resumes.
</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-blue-500">
              View More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/diner-web-image.png" // Replace with your image path
            alt="Portfolio Image 3"
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <p className="text-gray-500 text-sm font-bold mb-2">NextJs | Tailwind CSS</p> {/* Tech stack section */}
            <p className="text-gray-700 text-left mb-4">Diners Builder and Developers is a construction website I built for a client using Next.js and Tailwind CSS. The site features a clean, modern design with easy navigation</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-blue-500">
              View More
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/figmareplica.png" // Replace with your image path
            alt="Portfolio Image 4"
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <p className="text-gray-500 text-sm font-bold mb-2">NextJs | Tailwind CSS</p> {/* Tech stack section */}
            <p className="text-gray-700 mb-4">Figma Design is a design concept I created using Next.js and Tailwind CSS. The design features a clean, modern layout with a focus on usability and responsiveness.</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-blue-500">
              View More
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
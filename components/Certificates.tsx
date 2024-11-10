// components/Certifications.js

export default function Certifications() {
  return (
    <section id="certifications" className="bg-gray-100 py-20">
      {/* Certifications Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-[#FFA500]">Certifications</h2> {/* Orange color */}
        <p className="text-lg mt-4 text-gray-600">More certifications to come. Stay tuned!</p>
      </div>

      {/* Certifications Cards */}
      <div className="flex flex-col items-center gap-12 px-8">

        {/* Card 1: Google AI Essentials */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h3 className="text-3xl font-semibold text-[#FF4500] mb-4">Google AI Essentials</h3>
          <p className="text-gray-700 text-lg mb-6">
           Google AI Essentials is a self-paced course designed to help people across roles and industries get essential AI skills to boost their productivity, zero experience required. The course is taught by AI experts at Google who are working to make the technology helpful for everyone.   </p>
          <button className="bg-black text-white px-6 py-2 rounded-lg">View Certificate</button>
        </div>

        {/* Card 2: UX/UI Design Fundamentals */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h3 className="text-3xl font-semibold text-[#FF4500] mb-4">Digital Marketing & E-comerce  </h3>
          <p className="text-gray-700 text-lg mb-6">
            Throughout this program, you will gain in-demand skills that prepare you for an entry-level job and learn how to use tools and platforms like Canva, Constant Contact, Google Ads, Google Analytics, Hootsuite, HubSpot, Mailchimp, Shopify, and Twitter. You will learn from subject-matter experts at Google and have a chance to build your own portfolio with projects like customer personas and social media calendars to show to potential employers.
            <br/><span className="font-semibold mt-4">All of them have been completed. This is a series of 7 courses.</span>   </p>
        <button className="bg-black text-white px-6 py-2 rounded-lg">View Certificate</button>
        </div>

        {/* Card 3: UX Design Professional Certificate */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h3 className="text-3xl font-semibold text-[#FF4500] mb-4">UX/UI Design Professional Certificate</h3>
          <p className="text-gray-700 text-lg mb-6">
            Over 7 courses, gain in-demand skills that will prepare you for an entry-level job. 

            You will create designs on paper and in digital design tools like Figma. By the end of the certificate program, you will have a professional UX portfolio that includes three end-to-end projects, so that you’re ready to apply for jobs. Upon completion, you can directly apply for jobs with Google and over 150 U.S. employers, including Deloitte, Target, Verizon, and of course, Google.  
            <br />
            <span className="font-semibold mt-4">Completed 3 courses so far. This is also a series of 7 courses.</span>
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-lg">View Certificate</button>
        </div>

      </div>
    </section>
  );
}

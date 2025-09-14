import React from 'react'
function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          About <span className="text-indigo-600">Myself</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
              i am a full stack developer using MERN from Kolkata. My interest in web development started from my college days. I have been working in this field since my college days. I enjoy creating things that live on the internet.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
              My journey started with basic HTML/CSS, and i am working with modern 
              frameworks like React, Vite.js, and Node.js. I believe in continuous learning and 
              always try to expand my knowledge.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              When I'm not coding, you can find me reading books, traveling, and exploring new technologies.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Personal Info</h3>
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Name:</span> Parwej Alam </p>
                <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Location:</span> Kolkata,India</p>
                <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Education:</span> B.Tech in Computer Science</p>
                <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Email:</span> alamprawej895@gmail.com</p>
                <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Freelance:</span> Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
  )
}
export default About

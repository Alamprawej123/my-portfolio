// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Hello, I'm <span className="text-indigo-600">Parwej Alam</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer & UI/UX Enthusiast
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I create amazing web experiences using modern technologies. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md">
              My Projects
            </a>
            <a href="#contact" className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg">
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-200 dark:bg-indigo-800 rounded-full overflow-hidden shadow-xl">
            <img 
              src='./IMG20250122133005.jpg' 
              alt="Parwej Alam" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
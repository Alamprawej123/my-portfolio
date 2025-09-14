// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-indigo-400">My Portfolio</a>
            <p className="mt-2 text-gray-400">Building amazing web experiences since 2025</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Parwej Alam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
// src/components/Header.jsx
import  { useState } from 'react'

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          My Portfolio
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">About</a>
          <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Skills</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Projects</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">About</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Skills</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
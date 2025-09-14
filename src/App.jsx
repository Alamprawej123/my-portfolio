import { useState } from 'react'
import './App.css'
import Header from '../public/Header'
import Hero from '../public/Hero'
import About from '../public/About'
import Skills from '../public/Skills'
import Projects from '../public/Projects'
import Contact from '../public/Contact'
import Footer from '../public/Footer'
function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
export default App

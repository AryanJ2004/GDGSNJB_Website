import React, { useState, useEffect } from 'react'
import logo from "../assets/logo.png"
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="GDSC Logo" className="h-8 w-auto mr-2" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold dark:text-white">Google Developer Group (GDG On Campus)</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">SNJB's Late Sau K.B. Jain College Of Engineering Chandwad</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 sm:hidden">SNJB's College Of Engineering, Chandwad</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-4">
            <ul className="flex space-x-4">
              {[
                { name: "Home", id: "home" },
                { name: "About GDG", id: "about-gdg" },
                { name: "Technologies", id: "technologies" },  
                { name: "Events", id: "events" },
                { name: "Team", id: "team" },
                { name: "Contact", id: "contact" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.id}`} 
                    className="flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 ease-in-out"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Custom Toggle Button for Mobile and Tablet */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-3xl bg-white dark:bg-gray-700 p-2 hover:bg-slate-200 dark:hover:bg-gray-600"
            >
              <div className="space-y-2">
                <span className={`block h-1 w-10 origin-center rounded-full bg-slate-500 dark:bg-gray-300 transition-transform ease-in-out ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
                <span className={`block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out ${isMenuOpen ? 'w-10 -translate-y-1.5 -rotate-45' : ''}`}></span>
              </div>
            </div>
          </div>
        </div>

        <nav
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden transform ${
            isMenuOpen ? "max-h-screen opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 mt-4">
            {[
              { name: "Home", id: "home" },
              { name: "About GDG", id: "about-gdg" },
              { name: "Technologies", id: "technologies" },    
              { name: "Events", id: "events" },
              { name: "Team", id: "team" },
              { name: "Contact", id: "contact" }
            ].map((item, index)=> (
              <li key={index}>
                <a 
                  href={`#${item.id}`} 
                  className="flex items-center justify-center block py-2 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 ease-in-out"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
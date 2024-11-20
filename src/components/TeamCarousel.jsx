import React, { useState, useEffect, useRef, useCallback } from 'react'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import img from "../assets/aryan.jpeg"
import { useTheme } from '../context/ThemeContext'

const teamMembers = [
  {
    name: "Gunjan Bhansali",
    role: "GDSC Lead",
    image: "/placeholder.svg?height=150&width=150",
    color: "bg-red-200",
    darkColor: "bg-red-200",
  },
  {
    name: "Aryan Jain",
    role: "Web Development Lead",
    image: img,
    color: "bg-blue-200",
    darkColor: "bg-blue-200",
  },
  {
    name: "TEST NAME",
    role: "Management Lead",
    image: "/placeholder.svg?height=150&width=150",
    color: "bg-green-200",
    darkColor: "bg-green-200",
  },
  {
    name: "TEST NAME",
    role: "Social Lead",
    image: "/placeholder.svg?height=150&width=150",
    color: "bg-yellow-200",
    darkColor: "bg-yellow-200",
  },
]

function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const carouselRef = useRef(null)
  const timerRef = useRef(null)
  const { isDarkMode } = useTheme()

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
  }, [])

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    if (isPlaying) {
      timerRef.current = setInterval(nextSlide, 2500)
    }
  }, [isPlaying, nextSlide])

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPlaying, resetTimer])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (carouselRef.current && !carouselRef.current.contains(event.target)) {
        setIsPlaying(true)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const handleCardClick = (event) => {
    event.stopPropagation()
    setIsPlaying(false)
  }

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} id='team'>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Leadership Team</h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Vision and Courage to Create</p>
        </div>
        <div 
          className="relative w-full max-w-5xl mx-auto" 
          ref={carouselRef}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div 
                    className={`${isDarkMode ? member.darkColor : member.color} rounded-lg shadow-lg p-6`}
                    onClick={handleCardClick}
                  >
                    <div className="flex flex-col md:flex-row items-center">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6 object-cover"
                      />
                      <div className="text-center md:text-left">
                        <h3 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white-800' : 'text-gray-800'}`}>{member.name}</h3>
                        <p className={`mb-4 ${isDarkMode ? 'text-black-300' : 'text-gray-600'}`}>{member.role}</p>
                        <div className="flex justify-center md:justify-start space-x-4">
                          <a href="#" className={`${isDarkMode ? 'text-gray-600 hover:text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}>
                            <FaLinkedin size={24} />
                          </a>
                          <a href="#" className={`${isDarkMode ? 'text-gray-600 hover:text-blue-400' : 'text-gray-600 hover:text-blue-400'}`}>
                            <FaTwitter size={24} />
                          </a>
                          <a href="#" className={`${isDarkMode ? 'text-gray-600 hover:text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}>
                            <FaGithub size={24} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={prevSlide}
            className={`absolute top-1/2 left-4 transform -translate-y-1/2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-full p-2 shadow-md`}
          >
            &#10094;
          </button>
          <button 
            onClick={nextSlide}
            className={`absolute top-1/2 right-4 transform -translate-y-1/2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-full p-2 shadow-md`}
          >
            &#10095;
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-blue-500' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamCarousel
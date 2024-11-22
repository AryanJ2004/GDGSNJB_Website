import React, { useState, useEffect, useRef, useCallback } from 'react'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import img from "../assets/Members/aryan.jpeg"
import lead from "../assets/Members/lead.png"
import web_co from "../assets/Members/web_co.png"
import web_co1 from "../assets/Members/web_co1.png"
import tejasb from "../assets/Members/tejasb.png"
import durgesh from "../assets/Members/durgesh.png"
import sanmati from "../assets/Members/sanmati.png"
import swami from "../assets/Members/swami.png"
import siddesh from "../assets/Members/siddesh.png"
import anuja from "../assets/Members/anuja.png"
import { useTheme } from '../context/ThemeContext'

const teamMembers = [
  {
    name: "Gunjan Bhansali",
    role: "GDG Lead",
    image: lead,
    color: "bg-red-200",
    darkColor: "bg-red-200",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/gunjan-bhansali-516774256/",
      twitter: "https://x.com/Gunj1n_Bhansali?t=Ss4qXVVHmS3-7XPI5NAOdg&s=09",
      github: "https://github.com/gunj1njain/"
    }
  },
  {
    name: "Aryan Jain",
    role: "Web Development Lead",
    image: img,
    color: "bg-blue-200",
    darkColor: "bg-blue-200",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/aryanj2004",
      twitter: "https://twitter.com/aryanj2004",
      github: "https://github.com/aryanj2004"
    }
  },
  {
    name: "Sarthak Katare",
    role: "Web Development Co-Lead",
    image: web_co,
    color: "bg-green-200",
    darkColor: "bg-green-200",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sarthak-katare-547809282/",
      twitter: "https://twitter.com/",
      github: "https://github.com/kataresarthak"
    }
  },
  {
    name: "Yash Jagtap",
    role: "Web Development Co-Lead",
    image: web_co1,
    color: "bg-yellow-200",
    darkColor: "bg-yellow-200",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/"
    }
  },
  {
    name: "Krutik Murbade ",
    role: "Web Development Co-Ordinator",
    image: "",
    color: "bg-pink-200",
    darkColor: "bg-yellow-200",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      github: "https://github.com/"
    }
  },
  {
    "name": "Vaibhav Sonawane",
    "role": "AI/ML Lead",
    "image": "",
    "color": "bg-red-200",
    "darkColor": "bg-red-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Mohak Khabiya",
    "role": "AI/ML Co-Lead",
    "image": "",
    "color": "bg-blue-200",
    "darkColor": "bg-blue-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Rohak Bora",
    "role": "AI/ML Co-Lead",
    "image": "",
    "color": "bg-green-200",
    "darkColor": "bg-green-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/rohak-bora/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/rohakbora"
    }
  },
  {
    "name": "Janvi Khichecha",
    "role": "AI/ML Co-Ordinator",
    "image": "",
    "color": "bg-yellow-200",
    "darkColor": "bg-yellow-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Khemraj Parate",
    "role": "Cloud Lead",
    "image": "",
    "color": "bg-red-200",
    "darkColor": "bg-red-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Mangesh Aher",
    "role": "Cloud Co-Lead",
    "image": "",
    "color": "bg-blue-200",
    "darkColor": "bg-blue-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Siddhesh Nikumb",
    "role": "Cloud Co-Lead",
    "image": siddesh,
    "color": "bg-green-200",
    "darkColor": "bg-green-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/siddhesh-nikumb-7884392b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Swami Kshatriya",
    "role": "Open-Source Lead",
    "image": swami,
    "color": "bg-yellow-200",
    "darkColor": "bg-yellow-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/swami-kshatriya-59ba29213/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Anuja Dahale",
    "role": "Open-Source Co-Lead",
    "image": anuja,
    "color": "bg-red-200",
    "darkColor": "bg-red-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/anujadahale",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/Anuja008"
    }
  },
  {
    "name": "Sanmati Ukhalkar",
    "role": "Open-Source Co-Lead",
    "image": sanmati,
    "color": "bg-blue-200",
    "darkColor": "bg-blue-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Durgesh Hyalij",
    "role": "Open-Source Co-Ordinator",
    "image": durgesh,
    "color": "bg-green-200",
    "darkColor": "bg-green-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/durgesh-hyalij-b97a772b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Krishna Tapdiya",
    "role": "Event and Operations Lead",
    "image": "",
    "color": "bg-yellow-200",
    "darkColor": "bg-yellow-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Nisha Kotecha",
    "role": "Event and Operations Co-Lead",
    "image": "",
    "color": "bg-red-200",
    "darkColor": "bg-red-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Rajwardhan Bagawade",
    "role": "Event and Operations Co-Lead",
    "image": "",
    "color": "bg-blue-200",
    "darkColor": "bg-blue-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Harsh Sharma",
    "role": "Event and Operations Co-Ordinator",
    "image": "",
    "color": "bg-green-200",
    "darkColor": "bg-green-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Chirag Shah",
    "role": "Event and Operations Co-Ordinator",
    "image": "",
    "color": "bg-yellow-200",
    "darkColor": "bg-yellow-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Prathamesh Suryawanshi",
    "role": "Social Media Lead",
    "image": "",
    "color": "bg-red-200",
    "darkColor": "bg-red-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Prem Chaudhari",
    "role": "Social Media Co-Lead",
    "image": "",
    "color": "bg-blue-200",
    "darkColor": "bg-blue-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Prerna Gosaliya",
    "role": "Social Media Co-Lead",
    "image": "",
    "color": "bg-green-200",
    "darkColor": "bg-green-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/prerna-gosaliya-646244228",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/prernagosaliya"
    }
  },
  {
    "name": "Tirthraj Pawale",
    "role": "Social Media Co-Ordinator",
    "image": "",
    "color": "bg-yellow-200",
    "darkColor": "bg-yellow-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Lekanksha Jain",
    "role": "Creative Design and Content Lead",
    "image": "",
    "color": "bg-red-200",
    "darkColor": "bg-red-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/lekanksha-jain-919531282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  },
  {
    "name": "Tejas Bhansali",
    "role": "Creative Design and Content Co-Lead",
    "image": tejasb,
    "color": "bg-blue-200",
    "darkColor": "bg-blue-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/tejas-b-0a80332a4/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/Tej07-hub"
    }
  },
  {
    "name": "Aakanksha Wagh",
    "role": "Creative Design and Content Co-Lead",
    "image": "",
    "color": "bg-green-200",
    "darkColor": "bg-green-200",
    "socialLinks": {
      "linkedin": "https://www.linkedin.com/in/",
      "twitter": "https://twitter.com/",
      "github": "https://github.com/"
    }
  }
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
      timerRef.current = setInterval(nextSlide, 3000)
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
                          <a 
                            href={member.socialLinks.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`${isDarkMode ? 'text-gray-600 hover:text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
                          >
                            <FaLinkedin size={24} />
                          </a>
                          
                          <a 
                            href={member.socialLinks.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`${isDarkMode ? 'text-gray-600 hover:text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}
                          >
                            <FaGithub size={24} />
                          </a>

                          <a 
                            href={member.socialLinks.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`${isDarkMode ? 'text-gray-600 hover:text-blue-400' : 'text-gray-600 hover:text-blue-400'}`}
                          >
                            <FaTwitter size={24} />
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

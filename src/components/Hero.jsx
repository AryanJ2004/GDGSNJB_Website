// import React from 'react'
//  import logo from "../assets/logo.png"
//  import backgroundImage from "../assets/homepage.svg"

// export default function Hero() {
//   return (
//     <>
//       <section className="h-screen bg-white relative overflow-hidden flex flex-col justify-center items-center">
//         <div 
//           className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         ></div>
       
        
//         <div className="container mx-auto px-4 relative z-10 text-center">
//           <h1 className="text-5xl font-bold mb-4">Google Developer Group</h1>
//           <p className="text-xl text-gray-600 mb-8">SNJB's Late Sau K.B. Jain College Of Engineering, Chandwad</p>
          
//           <button className="bg-blue-500 text-white font-medium py-3 px-8 rounded-full transform transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105">
//   Join Community
// </button>

//         </div>
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//             <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//           </svg>
//         </div>
//       </section>
      
//     </>
//   )
// }



import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { useTheme } from '../context/ThemeContext'; // Assuming you have a ThemeContext for dark/light mode
import logo from '../assets/logo.png';
import backgroundImageLight from '../assets/homepage.svg';
import backgroundImageDark from '../assets/homepage1.svg';

export default function Hero() {
  const { isDarkMode } = useTheme(); // Access the theme mode

  // Function to scroll to the next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about-gdg');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        className={`h-screen relative overflow-hidden flex flex-col justify-center items-center ${
          isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}
        id="home"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${
              isDarkMode ? backgroundImageDark : backgroundImageLight
            })`,
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="mb-8">
            <img
              src={logo}
              alt="GDG Logo"
              className="mx-auto h-24 w-auto"
            />
          </div>
          <ReactTypingEffect
            text={['Welcome to GDG OnCampus SNJB!', 'Scroll Down to Know More!']}
            speed={50}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={1000}
            cursorRenderer={(cursor) => (
              <h1
                className={`text-5xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {cursor}
              </h1>
            )}
            displayTextRenderer={(text, i) => {
              return (
                <h1
                  className={`text-5xl font-bold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {text}
                </h1>
              );
            }}
          />
          <p
            className={`text-xl mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            SNJB's Late Sau K.B. Jain College Of Engineering, Chandwad
          </p>

          <button
            className={`py-3 px-8 rounded-full transform transition duration-300 ease-in-out ${
              isDarkMode
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            onClick={() =>
              window.open(
                'https://gdg.community.dev/gdg-on-campus-snjbs-late-sau-kantabai-bhavarlalji-jain-college-of-engineering-nashik-india/',
                '_blank'
              )
            }
          >
            Join Community
          </button>
        </div>

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToNextSection}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke={isDarkMode ? 'white' : 'currentColor'}
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>
    </>
  );
}

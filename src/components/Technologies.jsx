import React from 'react';
import webdev from "../assets/webDev.gif";
import { useTheme } from '../context/ThemeContext';

const technologies = [
  {
    name: "Web Development",
    description: "Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience.",
    image: webdev,
    color: "bg-yellow-100",
    darkColor: "bg-yellow-900/30",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600",
    darkButtonColor: "bg-yellow-600 hover:bg-yellow-700",
  },
  {
    name: "Cloud Computing",
    description: "Understand the core concepts of cloud services and how to leverage them in your applications.",
    image: webdev,
    color: "bg-blue-100",
    darkColor: "bg-blue-900/30",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    darkButtonColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    name: "Cloud Computing (To be Updated)",
    description: "Understand the core concepts of cloud services and how to leverage them in your applications.",
    image: webdev,
    color: "bg-green-100",
    darkColor: "bg-green-900/30",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    darkButtonColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    name: "Cloud Computing (To be Updated)",
    description: "Understand the core concepts of cloud services and how to leverage them in your applications.",
    image: webdev,
    color: "bg-red-100",
    darkColor: "bg-red-900/30",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    darkButtonColor: "bg-purple-600 hover:bg-purple-700",
  },
];

export default function Technologies() {
  const { isDarkMode } = useTheme();

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedTechnologies = chunkArray(technologies, 2);

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`} id='technologies'>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Technologies We are Interested about
        </h2>
        <div className="space-y-8">
          {groupedTechnologies.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
              {group.map((tech, index) => (
                <div 
                  key={index} 
                  className={`${isDarkMode ? tech.darkColor : tech.color} rounded-2xl overflow-hidden flex-1 transition-colors duration-300`}
                >
                  <div className="flex flex-col md:flex-row items-center p-8">
                    <img src={tech.image} alt={tech.name} className="w-48 h-48 object-contain mb-6 md:mb-0 md:mr-8" />
                    <div>
                      <h3 className="text-3xl font-bold mb-4">
                        <span className={`text-green-500 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`}>
                          {tech.name.split(' ')[0]}
                        </span>{' '}
                        <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                          {tech.name.split(' ').slice(1).join(' ')}
                        </span>
                      </h3>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                        {tech.description}
                      </p>
                      <button 
                        className={`${
                          isDarkMode ? tech.darkButtonColor : tech.buttonColor
                        } text-white font-medium py-2 px-6 rounded transition duration-300 flex items-center`}
                      >
                        CodeLabs
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import webdev from "../assets/webDev.gif";
import { useTheme } from '../context/ThemeContext';
import cc from "../assets/cc.gif";
import aiml from "../assets/aiml.gif";
import os from "../assets/os.svg";

const technologies = [
  {
    name: "Web Development",
    description: "Master the essential skills for creating dynamic and user-friendly web applications. Learn the core foundations of web development, from front-end design to back-end architecture, ensuring a seamless experience for both users and developers. Stay up to date with the latest trends and technologies in the field, including HTML, CSS, JavaScript, and frameworks like React and Node.js. Gain hands-on experience through guided tutorials and coding exercises, building real-world projects that improve both your technical skills and your ability to create responsive, interactive websites.",
    image: webdev,
    color: "bg-yellow-100",
    darkColor: "bg-yellow-900/30",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600",
    darkButtonColor: "bg-yellow-600 hover:bg-yellow-700",
  },
  {
    name: "Cloud Computing",
    description: "Explore the transformative power of Cloud Computing, where resources like servers, storage, databases, networking, and software are delivered over the internet. Learn how to harness the scalability, flexibility, and cost-effectiveness of the cloud for building robust, reliable, and high-performance AI/ML models. Gain practical experience through tutorials and hands-on projects, mastering cloud-based solutions for deploying, scaling, and managing machine learning models seamlessly across the cloud.",
    image: cc,
    color: "bg-blue-100",
    darkColor: "bg-blue-900/30",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    darkButtonColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    name: "AI & Machine Learning",
    description: "Dive into the world of Artificial Intelligence (AI) and Machine Learning (ML) to understand the core principles behind intelligent systems. Explore key concepts like data processing, algorithms, and model training to create predictive models and smart applications. Stay updated with the latest trends in AI and ML, including deep learning, natural language processing, computer vision, and reinforcement learning. Access hands-on tutorials, coding exercises, and real-world projects to sharpen your skills and apply AI/ML techniques to solve complex problems and drive innovation.",
    image: aiml,
    color: "bg-green-100",
    darkColor: "bg-green-900/30",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    darkButtonColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    name: "Open Source",
    description: "Embrace the power of Open Source technologies, where collaboration, transparency, and community-driven development take center stage. Learn how to contribute to and utilize open-source projects across various domains. Stay informed about popular open-source tools, frameworks, and libraries, and gain hands-on experience by contributing to real-world projects. Whether you're enhancing existing codebases or building new solutions, open-source involvement fosters creativity, innovation, and global collaboration.",
    image: os,
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
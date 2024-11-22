import React from 'react';
import { socialMediaIcons, GDSCInfo } from './GDSCConstants.jsx';
import { useTheme } from '../context/ThemeContext';

export default function WhatIsGDSC() {
  const { isDarkMode } = useTheme();

  // Card color mapping for light and dark modes
  const cardColors = {
    'bg-green-100': {
      light: 'bg-green-100 text-gray-800',
      dark: 'bg-green-900/30 text-gray-100'
    },
    'bg-orange-100': {
      light: 'bg-orange-100 text-gray-800',
      dark: 'bg-orange-900/30 text-gray-100'
    },
    'bg-blue-100': {
      light: 'bg-blue-100 text-gray-800',
      dark: 'bg-blue-900/30 text-gray-100'
    },
    'bg-yellow-100': {
      light: 'bg-yellow-100 text-gray-800',
      dark: 'bg-yellow-900/30 text-gray-100'
    }
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300" id='about-gdg'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          {GDSCInfo.title}
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              {GDSCInfo.description}
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              {socialMediaIcons.map(({ icon, key, link }) => (
                <a 
                  key={key}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GDSCInfo.cards.map(({ title, content, bgColor }) => (
                <div 
                  key={title}
                  className={`p-6 rounded-lg transition-colors duration-300 ${
                    isDarkMode ? cardColors[bgColor].dark : cardColors[bgColor].light
                  }`}
                >
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm opacity-90">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

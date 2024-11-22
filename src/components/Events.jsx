import React, { useState } from 'react';
import { CalendarIcon, MapPinIcon, ClockIcon, ExternalLinkIcon } from 'lucide-react';
import backgroundImage from '../assets/background.png';
import eventData from './eventData'; // Adjust the path based on your project structure
import { useTheme } from '../context/ThemeContext';

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const { isDarkMode } = useTheme();

  const EventCard = ({ event }) => (
    <div className={`mb-6 overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${isDarkMode ? 'bg-gray-800' : event.color} rounded-xl shadow-md`}>
      <div className="p-6">
        <h3 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{event.title}</h3>
        <div className={`flex items-center mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {event.date}
        </div>
        <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{event.description}</p>
        <div className={`flex items-center text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <ClockIcon className="mr-2 h-4 w-4" />
          {event.time}
        </div>
        <div className={`flex items-center text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <MapPinIcon className="mr-2 h-4 w-4" />
          {event.location}
        </div>
        <button
  onClick={() => window.open(event.learnMoreLink, '_blank')}
  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition-all duration-300"
>
  Learn More
  <ExternalLinkIcon className="ml-2 h-4 w-4" />
</button>
      </div>
    </div>
  );

  return (
    <section className={`py-16 bg-cover bg-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`} id='events'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: isDarkMode ? "rgba(17, 24, 39, 0.8)" : "rgba(128, 128, 128, 0.5)"
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>Our Events</h2>
        <div className="w-full max-w-3xl mx-auto">
          <div className={`flex mb-10 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full p-1 overflow-hidden shadow-inner`}>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`w-1/2 py-3 font-semibold rounded-full transition-all duration-500 ${
                activeTab === "upcoming" ? "bg-green-500 text-white shadow" : isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`w-1/2 py-3 font-semibold rounded-full transition-all duration-500 ${
                activeTab === "past" ? "bg-green-500 text-white shadow" : isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Past Events
            </button>
          </div>
          <div className={`transition-opacity duration-500 ${activeTab === "upcoming" ? "opacity-100" : "opacity-0 hidden"}`}>
            {eventData.upcoming.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className={`transition-opacity duration-500 ${activeTab === "past" ? "opacity-100" : "opacity-0 hidden"}`}>
            {eventData.past.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react'
import { useTheme } from '../context/ThemeContext'

export default function FAQ() {
  const { isDarkMode } = useTheme()

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-grey-900' : 'bg-green-100'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Who can become a member?</h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>The club is open to all students, from novice developers who are just starting their coding journey to advanced developers looking to enhance their skills. Whether you're new to tech or an experienced developer, there's always something to learn and contribute.</p>
          </div>
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>How frequently do events and workshops occur?</h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>We host hands-on sessions frequently. Additionally, we organize various workshops, showcases, and other events throughout the year. To stay updated with upcoming events, we recommend joining our community.</p>
          </div>
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>What should I carry when attending a workshop?</h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>For a productive workshop experience, please bring Notebook and pen for jotting down key takeaways. Laptop for hands-on coding activities. Most importantly, bring along a healthy dose of curiosity and enthusiasm!</p>
          </div>
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Who should I reach out to if I have any questions?</h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>If you have any questions or comments, feel free to contact us by clicking the button below. We're happy to engage with you and stay connected via email, even after the event.</p>
          </div>
        </div>
        <div className="text-center mt-8">
        <button 
        className="bg-blue-500 text-white font-medium py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
        onClick={() => window.location.href = "mailto:gdg.oncampussnjb@gmail.com"}
        >
        Send Us an Email
        </button>
        </div>
      </div>
    </section>
  )
}
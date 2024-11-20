import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaFacebookF,
  FaMediumM,
} from 'react-icons/fa';
import logo from '../assets/logo.png';
// import smallScreenBg from '../assets/footerBgMobile.svg';
// import largeScreenBg from '../assets/footerBg.svg';
// import logo from '/logo.png'; // Assuming logo.png is in the public folder
const smallScreenBg = '/footerBgMobile.svg';
const largeScreenBg = '/footerBg.svg';

export default function Footer() {
  return (
    <footer
      className="text-white py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${largeScreenBg})`,
        backgroundColor: '#4F504E',
      }}
    >
      <div className="container mx-auto px-4" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <img src={logo} alt="GDSC Logo" className="h-8 w-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Google Developer Student Clubs</h2>
            <p className="text-sm text-gray-400">
              SNJB's Late Sau K.B. Jain College Of Engineering
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contribute</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  File a Bug
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  View Source
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Google Developer Experts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Google Developer Groups
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Firebase Console
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Google Cloud Platform
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Action on Google
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; 2024 GDG SNJB's Late Sau K.B. Jain College Of Engineering. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2">Made with ❤️ by Aryan</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-blue-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-blue-700 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-red-600 hover:text-white">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-pink-600 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-indigo-500 hover:text-white">
              <FaDiscord size={24} />
            </a>
            <a href="#" className="text-blue-600 hover:text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaMediumM size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Responsive background image adjustment */}
      <style jsx>{`
        @media (min-width: 768px) {
          footer {
            background-image: url(${smallScreenBg});
          }
        }
      `}</style>
    </footer>
  );
}

// GDSCConstants.js
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord, FaYoutube, FaTwitter } from 'react-icons/fa';

export const socialMediaIcons = [
  { icon: <FaInstagram className="text-2xl text-gray-600 hover:text-pink-500" />, key: 'instagram' },
  { icon: <FaLinkedin className="text-2xl text-gray-600 hover:text-blue-700" />, key: 'linkedin' },
  { icon: <FaGithub className="text-2xl text-gray-600 hover:text-gray-900" />, key: 'github' },
  { icon: <FaDiscord className="text-2xl text-gray-600 hover:text-indigo-500" />, key: 'discord' },
  { icon: <FaYoutube className="text-2xl text-gray-600 hover:text-red-600" />, key: 'youtube' },
  { icon: <FaTwitter className="text-2xl text-gray-600 hover:text-blue-400" />, key: 'twitter' },
];

export const GDSCInfo = {
  title: "What is GDG? 🤔",
  description: "Google Developer Group is a student-led program supported by Google. It's a dynamic platform for students to learn, collaborate on web development, cloud computing, and more. GDG fosters skill-building, networking, and grants access to Google's resources and expertise, making it an invaluable opportunity for tech enthusiasts.",
  cards: [
    {
      title: "Concept of GDG",
      content: "GDG provides a space for students to explore diverse tech fields, focusing on skill development and networking, ideal for tech enthusiasts and aspiring developers.",
      bgColor: "bg-green-100",
    },
    {
      title: "Target Audience",
      content: "GDG is tailored for tech-savvy university students seeking to improve coding skills, collaborate on projects, and gain real-world tech experience.",
      bgColor: "bg-orange-100",
    },
    {
      title: "Why GDG?",
      content: "GDG is a smart choice for students to focus on practical tech skill development through real-world projects and networking for professional growth.",
      bgColor: "bg-blue-100",
    },
    {
      title: "Other Concept",
      content: "GDG fosters community and student leadership, inspiring collaboration on tech events and initiatives. It's a hub for growth, learning, and connections.",
      bgColor: "bg-yellow-100",
    },
  ],
};

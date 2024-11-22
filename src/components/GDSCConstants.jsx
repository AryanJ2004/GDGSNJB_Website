// GDSCConstants.js
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp  } from 'react-icons/fa';
import { MdOutlinePeopleOutline } from 'react-icons/md';

export const socialMediaIcons = [
  { 
    icon: <FaInstagram className="text-2xl text-gray-600 hover:text-pink-500" />, 
    key: 'instagram',
    link: 'https://www.instagram.com/gdgc_snjb/' 
  },
  { 
    icon: <FaLinkedin className="text-2xl text-gray-600 hover:text-blue-700" />, 
    key: 'linkedin',
    link: 'https://www.linkedin.com/company/gdgoncampus-snjb/'
  },
  { 
    icon: <FaGithub className="text-2xl text-gray-600 hover:text-gray-900" />, 
    key: 'github',
    link: 'https://github.com/gdg-snjb' 
  },
  { 
    icon: <FaWhatsapp  className="text-2xl text-gray-600 hover:text-green-900" />, 
    key: 'whatsapp',
    link: 'https://chat.whatsapp.com/ETqtRXTWqNm1p4qzjwnnQR' 
  },
  { 
    icon: <MdOutlinePeopleOutline  className="text-2xl text-gray-600 hover:text-blue-900" />, 
    key: 'community',
    link: 'https://gdg.community.dev/gdg-on-campus-snjbs-late-sau-kantabai-bhavarlalji-jain-college-of-engineering-nashik-india/'
  },
  

 
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

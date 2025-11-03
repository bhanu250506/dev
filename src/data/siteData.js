// all the data
import desktopImg from "../assets/images/desktop.WebP";
import mentalImg from "../assets/images/mental.WebP";
import chatImg from "../assets/images/chat.WebP";
import socialImg from "../assets/images/social_2.WebP";
import portfolioImg from "../assets/images/port.WebP";
import digiImg from "../assets/images/digi.WebP";
import ashok from '../assets/images/ashok.jpeg';
import amar from '../assets/images/amar.jpeg';
import shub from '../assets/images/shub.jpeg'



export const personalInfo ={
    name : "Bhanu Pratap Singh",
    email : "bhanupratap2556@gmail.com",
    linkedin : "https://www.linkedin.com/in/bhanupratapsn/",
    github : "https://github.com/bhanu250506",
    phone : "+919783271934",
};

export const serviceData = [
     { title: 'Mobile Apps', description: 'Cross-platform apps with Flutter for a native feel on both iOS and Android.' , Imageurl : "./mobile.WebP"},
{ title: 'Web Development', description: 'Full-stack applications built with React, Node.js, and the MERN stack for modern, scalable solutions.' , Imageurl : "./web.WebP"}
, { title: 'Backend & APIs', description: 'Robust and secure backend systems and RESTful APIs with Node.js & Express.' , Imageurl : "./backend.WebP"},
    { title: 'UI/UX Design', description: 'Intuitive and beautiful user interfaces that provide an amazing user experience.' , Imageurl : "./UiUx.WebP"},
];

export const techStackData = [
  // --- Frontend ---
  { name: 'Next.js', icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' },
  { name: 'React', icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
  { name: 'HTML5', icon: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg' },
  { name: 'CSS3', icon: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg' },
  { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },

  // --- Mobile ---
  { name: 'Flutter', icon: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg' },

  // --- Backend ---
  { name: 'Node.js', icon: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
  { name: 'Express.js', icon: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg' },
  { name: 'Spring Boot', icon: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
  { name: 'Go (Golang)', icon: 'https://www.vectorlogo.zone/logos/golang/golang-icon.svg' },
  { name: 'MongoDB', icon: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' },
  { name: 'MySQL', icon: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg' },
  { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },

  // --- Cybersecurity / DevOps ---
  { name: 'Linux', icon: 'https://www.vectorlogo.zone/logos/linux/linux-icon.svg' },
  { name: 'Wireshark', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg' },
  { name: 'Docker', icon: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg' },
  { name: 'GitHub', icon: 'https://www.vectorlogo.zone/logos/github/github-icon.svg' },

  // --- Tools & Design ---
  { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
];

export const testimonialsData = [
    { name: 'Ashok Chouchan', role: 'Teacher', review: 'Working with Bhanu was a fantastic experience. The final product exceeded our expectations, and the communication throughout was excellent.', avatar: ashok },
{
  name: 'Amar Singh',
  role: 'Owner, Amar Groceries',
  review: 'Working with Bhanu was a game-changer for my grocery business. The custom dashboard he built is fantastic and has completely streamlined how I operate my store. Managing inventory, tracking daily sales, and handling online orders has become incredibly simple. Our efficiency has skyrocketed!',
  avatar: amar
}  ,  
{
  name: 'Shubham Sharma',
  role: 'Owner, Sharma\'s Kitchen (Cloud Kitchen)',
  review: 'Bhanu built us more than just a website; he built our independence. We were losing so much money in commissions to Zomato and Swiggy. Our new site with its own ordering system has been a game-changer, helping us capture more direct orders and significantly boost our profits. It\'s fast, easy for customers to use, and finally gives us direct control over our brand.',
  avatar: shub
}];

export const portfolioData = [
  { 
    id: 1, 
    category: 'web', 
    title: 'Blog Platform', 
    image: desktopImg, 
    tags: ['React', 'Spring Boot', 'MySQL'] 
  },
  { 
    id: 2, 
    category: 'mobile', 
    title: 'Mental Health Chatbot', 
    image: mentalImg, 
    tags: ['Flutter', 'Google Gemini API', 'Express.js'] 
  },
  { 
    id: 3, 
    category: 'web', 
    title: 'Real-time Chat App', 
    image: chatImg, 
    tags: ['React', 'Node.js', 'Figma'] 
  },
  { 
    id: 4, 
    category: 'mobile', 
    title: 'Social Media App', 
    image: socialImg, 
    tags: ['Flutter', 'Express.js', 'MongoDB', 'Cloudinary'] 
  },
  { 
    id: 5, 
    category: 'web', 
    title: 'Creative Portfolio Website', 
    image: portfolioImg, 
    tags: ['React', 'Node.js', 'Tailwind CSS'] 
  },
  { 
    id: 6, 
    category: 'mobile', 
    title: 'SecureVault (DigiLocker Alternative)', 
    image: digiImg, 
    tags: ['Flutter', 'Node.js', 'Cloudinary'] 
  },
];
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/siteData';
import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="relative bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 py-16 overflow-hidden">
    <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

    <div className="container mx-auto px-6 text-center relative z-10">
      {/* Logo */}
      <motion.a
        href="#home"
        className="font-poppins font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6 inline-block transition-transform hover:scale-105"
        whileHover={{ scale: 1.1 }}
      >
        DevStack.
        <motion.span
          className="block h-1 w-16 mx-auto bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mt-2 rounded-full"
          layoutId="underline"
        />
      </motion.a>

      {/* Social Icons */}
      <div className="flex justify-center space-x-8 mb-8">
        {[
          { icon: <Github />, href: personalInfo.github, gradient: 'from-gray-400 to-white' },
          { icon: <Linkedin />, href: personalInfo.linkedin, gradient: 'from-blue-400 to-indigo-500' },
          { icon: <Mail />, href: `mailto:${personalInfo.email}`, gradient: 'from-pink-400 to-purple-500' },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className={`text-slate-400 hover:text-white transition-colors duration-300 relative group`}
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r blur opacity-0 group-hover:opacity-20 transition-all duration-500"></span>
            <span className="relative">{item.icon}</span>
          </motion.a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-slate-500 text-sm md:text-base">
        &copy; {new Date().getFullYear()} DevStack. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

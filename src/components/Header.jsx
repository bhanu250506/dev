import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["about", "service", "portfolio", "contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <motion.a
          href="#home"
          className="font-extrabold text-2xl md:text-3xl tracking-tight text-white"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          Dev<span className="text-indigo-500">Stack</span>
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link}`}
              className="capitalize text-base font-medium text-slate-300 relative group transition-all"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link}
              {/* Fancy underline on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              {/* Glow on hover */}
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur-md bg-indigo-500/20"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white z-50"
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </motion.button>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-lg absolute top-full left-0 right-0 rounded-b-2xl shadow-xl"
          >
            <div className="flex flex-col py-6 space-y-3 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="capitalize py-3 px-4 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition-all shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

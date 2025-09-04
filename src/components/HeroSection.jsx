import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import space from "../assets/space.json"

const HeroSection = () => {
  // Title Animation
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const title = "We Build Web & Mobile Applications";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Decorative Background Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-8">
          {/* Title */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight"
          >
            {title.split("").map((char, i) => (
              <motion.span key={i} variants={item}>
                {char}
              </motion.span>
            ))}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-500 animate-gradient-x drop-shadow-lg">
              {" "}
              🚀
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            We help{" "}
            <span className="text-indigo-400 font-medium">businesses</span> and{" "}
            <span className="text-purple-400 font-medium">startups</span> bring
            their ideas to life with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400 font-semibold">
              modern & scalable
            </span>{" "}
            applications.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center md:justify-start gap-5 flex-wrap"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/60 transition-transform transform hover:scale-105 hover:-translate-y-1"
            >
              See Our Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-800/40 backdrop-blur-md text-slate-200 font-semibold hover:bg-slate-700/50 transition-transform transform hover:scale-105 hover:-translate-y-1"
            >
              Get a Free Quote
            </a>
          </motion.div>
        </div>

        {/* Animation Section */}
        <motion.div
          className="hidden md:flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          whileHover={{ rotate: 3, scale: 1.05 }}
        >
          <Lottie
            animationData={space}
            loop
            className="w-full h-full max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

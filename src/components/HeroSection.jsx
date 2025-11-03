import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import space from "../assets/space.json";

const HeroSection = () => {
  const title = "Student Developer | Web, Mobile & Cybersecurity Enthusiast";

  // Variants for staggered letter animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, rotateX: 45 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 140, damping: 12 },
    },
  };

  // Floating orbs animation
  const float = {
    y: [0, -25, 0],
    x: [0, 15, 0],
    transition: { repeat: Infinity, duration: 8, ease: "easeInOut" },
  };

  const rotate = {
    rotate: [0, 360],
    transition: { repeat: Infinity, duration: 80, ease: "linear" },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 
                 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* === Floating Gradient Orbs === */}
      <motion.div
        className="absolute top-10 left-5 w-64 h-64 sm:w-80 sm:h-80 
                   bg-indigo-500/20 rounded-full blur-3xl"
        animate={float}
      />
      <motion.div
        className="absolute bottom-10 right-5 w-80 h-80 sm:w-96 sm:h-96 
                   bg-fuchsia-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          transition: { repeat: Infinity, duration: 10, ease: "easeInOut" },
        }}
      />

      {/* Rotating Glow Background Aura */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-gradient-to-tr 
                   from-indigo-600/10 via-purple-600/10 to-pink-600/10 
                   rounded-full blur-3xl"
        animate={rotate}
      />

      {/* === Main Content === */}
      <div className="container mx-auto px-6 sm:px-10 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT: Text Section */}
        <div className="text-center md:text-left space-y-8">
          {/* Intro Tag */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-5 py-2 rounded-full bg-slate-800/50 
                       border border-slate-700 text-indigo-300 text-sm 
                       font-medium tracking-wide shadow-md shadow-indigo-500/20"
          >
            👋 Hi, I’m <span className="font-semibold text-indigo-400">a Student Developer</span>
          </motion.span>

          {/* Title */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-outfit text-5xl sm:text-6xl lg:text-3xl xl:text-5xl 
                       font-extrabold leading-[1.1] text-white tracking-tight"
          >
            {title.split("").map((char, i) => (
              <motion.span key={i} variants={item}>
                {char}
              </motion.span>
            ))}
            <motion.span
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="bg-clip-text text-transparent bg-gradient-to-r 
                         from-indigo-400 via-fuchsia-400 to-purple-500 
                         animate-gradient-x drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]"
            >
              ⚡
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-slate-300 text-lg sm:text-xl md:text-2xl 
                       max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            I build{" "}
            <span className="text-indigo-400 font-semibold">modern web</span> and{" "}
            <span className="text-purple-400 font-semibold">mobile applications</span>, 
            blending{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r 
                             from-indigo-300 to-purple-400 font-semibold">
              innovation with cybersecurity
            </span>{" "}
            to craft <span className="text-fuchsia-400 font-bold">secure & scalable</span> digital experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center md:justify-start gap-5 flex-wrap"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 
                         text-white font-semibold shadow-lg shadow-indigo-500/30 
                         hover:shadow-indigo-500/60 transition-transform transform 
                         hover:scale-110 hover:-translate-y-1"
            >
              🚀 View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-800/40 
                         backdrop-blur-md text-slate-200 font-semibold 
                         hover:bg-slate-700/50 hover:text-white transition-transform transform 
                         hover:scale-110 hover:-translate-y-1"
            >
              🤝 Let’s Connect
            </a>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex justify-center md:justify-start flex-wrap gap-3 mt-8"
          >
            {[
              { name: "React", color: "from-sky-400 to-blue-600" },
              { name: "Flutter", color: "from-cyan-400 to-blue-500" },
              { name: "Node.js", color: "from-green-500 to-emerald-700" },
              { name: "Spring Boot", color: "from-lime-500 to-green-600" },
              { name: "Cybersecurity", color: "from-purple-500 to-pink-600" },
            ].map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.15, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold text-white 
                            bg-gradient-to-r ${tech.color} shadow-md shadow-black/30`}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Animation Visual */}
        <motion.div
          className="flex justify-center items-center mt-10 md:mt-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
          whileHover={{ rotate: 2, scale: 1.05 }}
        >
          <motion.div
            className="absolute w-72 h-72 rounded-full border border-purple-500/20"
            animate={rotate}
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <Lottie
              animationData={space}
              loop
              className="w-64 sm:w-80 md:w-full max-w-lg"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Glowing Gradient Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-[2px] 
                   bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500"
      />
    </section>
  );
};

export default HeroSection;

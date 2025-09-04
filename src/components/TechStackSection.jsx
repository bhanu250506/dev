import React from 'react';
import { motion } from 'framer-motion';
import { techStackData } from '../data/siteData';
import AnimatedSection from './AnimatedSection';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const TechStackSection = () => (
  <AnimatedSection>
    <section
      id="tech-stack"
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.12)_0,transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            My Tech Arsenal
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 mb-6"></div>
          <p className="text-slate-300 text-lg leading-relaxed">
            Powering ideas into{' '}
            <span className="text-indigo-400 font-semibold">scalable</span>,{' '}
            <span className="text-pink-400 font-semibold">modern</span>, and{' '}
            <span className="text-purple-400 font-semibold">robust</span> digital products.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 md:gap-14"
        >
          {techStackData.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: 2 }}
              className="relative flex flex-col items-center group cursor-pointer"
            >
              {/* Glowing Card */}
              <div
                className="relative p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md shadow-lg transition-all duration-300
                group-hover:border-transparent group-hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.7)]
                group-hover:bg-gradient-to-r group-hover:from-indigo-600/30 group-hover:to-pink-600/30"
              >
                <motion.img
                  src={tech.icon}
                  alt={tech.name}
                  className="
                    h-14 w-14 md:h-20 md:w-20 mx-auto transition duration-300
                    grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100
                    max-sm:grayscale-0 max-sm:opacity-100
                  "
                />
              </div>

              {/* Tech Name */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="
                  mt-4 text-slate-300 text-sm md:text-base font-medium
                  group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:via-pink-400 group-hover:to-purple-400
                  group-hover:bg-clip-text group-hover:text-transparent transition-all
                  max-sm:bg-gradient-to-r max-sm:from-indigo-400 max-sm:via-pink-400 max-sm:to-purple-400 
                  max-sm:bg-clip-text max-sm:text-transparent
                "
              >
                {tech.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </AnimatedSection>
);

export default TechStackSection;

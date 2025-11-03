import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/siteData';
import AnimatedSection from './AnimatedSection';
import about from '../assets/about.png';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const AboutSection = () => (
  <AnimatedSection>
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-b from-slate-950 via-black to-slate-950 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT - Image / Visual */}
          <div className="flex justify-center order-1 md:order-none">
            <motion.div
              className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              {/* Glowing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-3xl"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              />

              {/* Inner circle */}
              <motion.div
                className="w-full h-full bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center shadow-2xl shadow-purple-800/30"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              >
                <img
                  src={about}
                  alt="Developer Profile"
                  className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 object-cover rounded-full shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT - Text Content */}
          <div className="text-center md:text-left">
            <motion.h2
              className="font-poppins text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              About{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                Me
              </span>
            </motion.h2>

            <motion.p
              className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Hi, I'm{' '}
              <span className="font-semibold text-indigo-300">
                {personalInfo.name}
              </span>
              , a full-stack developer passionate about building{' '}
              <span className="text-purple-300">secure, scalable, and smart</span>{' '}
              digital solutions across both{' '}
              <span className="text-indigo-300">web</span> and{' '}
              <span className="text-purple-300">mobile</span> platforms.
            </motion.p>

            <motion.p
              className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto md:mx-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              I specialize in creating products that merge performance with trust —
              from responsive web apps and high-quality mobile experiences to
              <span className="text-indigo-300"> security-driven architectures</span>.
              My goal is to deliver technology that not only works — but protects and scales with confidence.
            </motion.p>

            {/* Tech stack badges */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {[
                { name: 'React', color: 'from-sky-400 to-blue-600' },
                { name: 'Flutter', color: 'from-cyan-400 to-blue-500' },
                { name: 'Node.js', color: 'from-green-500 to-emerald-700' },
                { name: 'Express', color: 'from-gray-700 to-gray-900' },
                { name: 'Spring Boot', color: 'from-lime-500 to-green-600' },
                { name: 'Cyber Security', color: 'from-purple-500 to-pink-600' },
              ].map((tech, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  custom={i + 4}
                  whileHover={{ scale: 1.1 }}
                  className={`px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${tech.color} shadow-md shadow-black/30`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  </AnimatedSection>
);

export default AboutSection;

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/siteData';
import AnimatedSection from './AnimatedSection';
import about from '../assets/about.png'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' }
  }),
};

const AboutSection = () => (
  <AnimatedSection>
    <section 
      id="about" 
      className="py-24 md:py-32 bg-gradient-to-b from-slate-950 via-black to-slate-950"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT - Text Content */}
          <div className="text-center md:text-left">
            <motion.h2 
              className="font-poppins text-5xl md:text-6xl font-extrabold leading-tight text-white mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">DevStack</span>
            </motion.h2>

            <motion.p 
              className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Hi, I'm <span className="font-semibold text-indigo-300">{personalInfo.name}</span>, a passionate developer dedicated to crafting 
              <span className="text-purple-300"> world-class digital experiences</span>.  
              My mission is to empower businesses with applications that are not only 
              <span className="text-indigo-300"> scalable</span> but also <span className="text-purple-300">delightful to use</span>.
            </motion.p>

            <motion.p 
              className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto md:mx-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              With expertise in both <span className="text-indigo-300">mobile</span> and <span className="text-purple-300">web development</span>, 
              I transform ideas into reality using modern frameworks and cutting-edge technologies.
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
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              {[
                { name: 'React', color: 'from-sky-400 to-blue-600' },
                { name: 'Flutter', color: 'from-cyan-400 to-blue-500' },
                { name: 'Node.js', color: 'from-green-500 to-emerald-700' },
                { name: 'Express', color: 'from-zinc-800 to-gray-900' },
                { name: 'Spring Boot', color: 'from-lime-500 to-green-600' },
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

          {/* RIGHT - Visual / Avatar */}
          <div className="flex justify-center relative">
            <motion.div
              className="w-80 h-80 md:w-[22rem] md:h-[22rem] rounded-full flex items-center justify-center relative"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              {/* Glowing ring effect */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-3xl"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              />

              {/* Inner circle */}
              <motion.div 
                className="w-full h-full bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center shadow-2xl shadow-purple-800/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
              <img 
  src={about} 
  alt="DevBhanu Profile" 
  className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full shadow-xl"
/>
           
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  </AnimatedSection>
);

export default AboutSection;

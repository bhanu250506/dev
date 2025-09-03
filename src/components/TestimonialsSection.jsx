import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../data/siteData';
import AnimatedSection from './AnimatedSection';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 120 },
  }),
};

const TestimonialsSection = () => (
  <AnimatedSection>
    <section
      id="testimonials"
      className="relative py-24 md:py-36 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background decorative circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
          >
            What Clients Say ✦
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-slate-300 text-lg leading-relaxed"
          >
            Real feedback from clients I've had the pleasure to work with.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(79,70,229,0.3)",
              }}
              className="relative group p-8 rounded-3xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-2xl shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center mb-6">
                <img
                  className="w-14 h-14 rounded-full mr-4 border-2 border-indigo-500"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <h4 className="font-poppins font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-indigo-300">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-slate-200 mb-6 italic text-sm md:text-base">
                "{testimonial.review}"
              </p>

              {/* Animated Star Ratings */}
              <div className="flex gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="text-yellow-400"
                    >
                      ⭐
                    </motion.span>
                  ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-indigo-400 opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </AnimatedSection>
);

export default TestimonialsSection;

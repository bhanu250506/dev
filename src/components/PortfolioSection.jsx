import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/siteData';
import AnimatedSection from './AnimatedSection';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  }),
};

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPortfolio =
    activeFilter === 'all'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <AnimatedSection>
      <section
        id="portfolio"
      className="min-h-screen flex items-center pt-28 pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 via-slate-900/60 to-slate-950 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="font-mono text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 mb-4"
            >
              Proof of Work ✦
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              custom={2}
              variants={textVariants}
              className="text-slate-300 text-lg leading-relaxed"
            >
              A curated showcase of projects where I blend <span className="text-indigo-400">design</span>,{' '}
              <span className="text-pink-400">development</span>, and{' '}
              <span className="text-purple-400">innovation</span> to deliver impactful solutions.
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="flex justify-center flex-wrap gap-4 mb-14"
          >
            {['all', 'web', 'mobile'].map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setActiveFilter(filter)}
                className={`capitalize px-6 py-2.5 rounded-xl font-semibold shadow-md transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-indigo-500/40'
                    : 'bg-slate-800/60 border border-slate-700 text-slate-300 hover:bg-slate-700/80 hover:text-white'
                }`}
              >
                {filter === 'all' ? 'All Projects' : `${filter} Apps`}
              </motion.button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence>
              {filteredPortfolio.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
                  className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-indigo-500/40 bg-slate-800/40 backdrop-blur-sm border border-slate-700/60"
                >
                  {/* Project Image */}
                  <motion.img
                    src={item.image}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/600x600/1e293b/ffffff?text=${item.title.replace(/\s/g, '+')}`;
                    }}
                    alt={item.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <motion.h3
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-2xl font-bold text-white mb-3"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {item.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.1 }}
                          className="bg-white/20 text-white text-xs px-3 py-1 rounded-full shadow-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default PortfolioSection;

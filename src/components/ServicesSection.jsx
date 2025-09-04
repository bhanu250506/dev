import React from "react";
import { motion } from "framer-motion";
import { serviceData } from "../data/siteData";
import AnimationSection from "./AnimatedSection";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, type: "spring", stiffness: 120 },
  }),
};

const ServiceSection = () => (
  <AnimationSection>
    <section
      id="service"
      className="py-24 md:py-32 bg-gradient-to-b from-slate-950 via-black to-slate-950"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Delivering{" "}
            <span className="text-indigo-400 font-semibold">end-to-end</span> digital
            solutions with{" "}
            <span className="text-purple-400 font-semibold">creativity</span> and{" "}
            <span className="text-cyan-400 font-semibold">innovation</span>.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -12, scale: 1.05, rotate: -0.5 }}
              className="group relative p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50
                         backdrop-blur-xl shadow-lg hover:shadow-indigo-500/30 
                         transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Service Image */}
              <div
                className="w-24 h-24 mb-6 rounded-full bg-gradient-to-tr from-indigo-500/40 via-purple-500/40 to-cyan-500/40 
                           flex items-center justify-center group-hover:scale-110 
                           transition-all duration-300 shadow-inner"
              >
                <motion.img
                  src={service.Imageurl}
                  alt={service.title}
                  className="w-14 h-14 object-contain drop-shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>

              {/* Service Title */}
              <h3 className="font-poppins text-xl font-semibold text-indigo-300 group-hover:text-white transition-colors mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-200 transition-colors">
                {service.description}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-auto font-medium bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text hover:from-cyan-400 hover:to-indigo-400 transition-all"
              >
                Hire for this →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </AnimationSection>
);

export default ServiceSection;

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Phone } from "lucide-react";
import { personalInfo } from "../data/siteData";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const serviceID = "service_y3lhabg";
    const templateID = "template_goqac9p";
    const publicKey = "7jbACqmr7LY_hCb-B";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setFormStatus("success");
        form.current.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      }, () => {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      });
  };

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } } };

  return (
    <AnimatedSection>
      <section id="contact"       className="relative min-h-screen flex items-center pt-28 pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
>
        {/* Floating Decorations */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-10 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -top-10 right-1/2 w-64 h-64 rounded-full bg-pink-500/20 blur-2xl animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 variants={item} className="font-poppins text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4">
              Let's Build Together
            </motion.h2>
            <motion.p variants={item} className="text-slate-300 text-lg md:text-xl leading-relaxed">
              Have a project in mind? Reach out and let's create something amazing!
            </motion.p>
          </motion.div>

          {/* Grid: Contact Info + Form */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={container} initial="hidden" whileInView="show" className="flex flex-col justify-center space-y-6">
              {[
                { icon: <Mail className="w-6 h-6" />, text: personalInfo.email, href: `mailto:${personalInfo.email}`, gradient: "from-indigo-500 to-purple-500" },
                { icon: <Linkedin className="w-6 h-6" />, text: "Connect on LinkedIn", href: personalInfo.linkedin, gradient: "from-blue-500 to-indigo-500" },
                { icon: <Phone className="w-6 h-6" />, text: personalInfo.phone, href: `tel:${personalInfo.phone}`, gradient: "from-green-400 to-emerald-500" },
              ].map((info, i) => (
                <motion.a key={i} variants={item} href={info.href} target={info.icon.type === Linkedin ? "_blank" : "_self"} rel="noopener noreferrer"
                  className={`flex items-center space-x-4 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md shadow-lg hover:scale-105 hover:bg-gradient-to-r ${info.gradient} hover:text-white transition-all duration-300`}>
                  {info.icon}<span className="font-medium">{info.text}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form ref={form} onSubmit={sendEmail} variants={container} initial="hidden" whileInView="show"
              className="space-y-6 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl shadow-xl relative overflow-hidden">
              {/* Floating glow inside form */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-blob animation-delay-4000"></div>

              {[{ id: "user_name", type: "text", label: "Full Name" }, { id: "user_email", type: "email", label: "Email Address" }].map((field, i) => (
                <motion.div key={i} variants={item}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-slate-300 mb-2">{field.label}</label>
                  <input type={field.type} name={field.id} id={field.id} required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
                </motion.div>
              ))}

              <motion.div variants={item}>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea name="message" id="message" rows="5" required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"></textarea>
              </motion.div>

              <motion.div variants={item}>
                <button type="submit" disabled={formStatus === "sending"}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 shadow-lg transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
                {formStatus === "success" && <p className="text-green-400 mt-4 text-center">Message sent successfully!</p>}
                {formStatus === "error" && <p className="text-red-400 mt-4 text-center">Something went wrong. Please try again.</p>}
              </motion.div>
            </motion.form>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ContactSection;

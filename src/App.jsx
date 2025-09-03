import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServiceSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import TechStackSection from './components/TechStackSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-[#0A0A0A] text-slate-300 font-inter">
      <Header/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <ServiceSection/>
        <PortfolioSection/>
        <TechStackSection/>
          <ContactSection/>
        <TestimonialsSection/>
      
      </main>
      <Footer/>
      </div>
  )
}

export default App
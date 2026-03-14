import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

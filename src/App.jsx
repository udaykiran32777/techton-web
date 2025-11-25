import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <ParticlesBackground />
      <Navbar scrollY={scrollY} />
      <Hero />
      <Solutions />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

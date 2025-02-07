import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Programs from './components/Programs'
import Gallery from './components/Gallery'

function App() {
  

  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Programs />
      <Gallery />
    </>
  )
}

export default App

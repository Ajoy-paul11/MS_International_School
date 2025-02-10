import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  

  return (
    <>
    <MantineProvider>
      <Navbar />
      <HeroSection />
      <About />
      <Programs />
      <Gallery />
      <Reviews />
    </MantineProvider>
    </>
  )
}

export default App

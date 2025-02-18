import React from 'react'
import HeroSection from './HeroSection';
import CountSection from './CountSection';
import AboutSection from './AboutSection';
import ChairmanSection from './ChairmanSection';
import ProgrammeSection from './ProgrammeSection';
import GallerySection from './GallerySection';
import ContactComponent from './ContactComponent';

function Home() {
  return (
    <main>
      <HeroSection />
      <CountSection />
      <AboutSection />
      <ChairmanSection />
      <ProgrammeSection />
      <GallerySection />
      <ContactComponent />
    </main>
  )
}

export default Home
import React from 'react'
import HeroSection from './HeroSection.jsx';
import CountSection from './CountSection.jsx';
import AboutSection from './AboutSection.jsx';
import ChairmanSection from './ChairmanSection.jsx';
import ProgrammeSection from './ProgrammeSection.jsx';
import GallerySection from './GallerySection.jsx';
import ContactComponent from './ContactComponent.jsx';

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
import React from "react";
const HeroSection = React.lazy(() => import("./HeroSection.jsx"));
const CountSection = React.lazy(() => import("./CountSection.jsx"));
const AboutSection = React.lazy(() => import("./AboutSection.jsx"));
const ChairmanSection = React.lazy(() => import("./ChairmanSection.jsx"));
const ProgrammeSection = React.lazy(() => import("./ProgrammeSection.jsx"));
const GallerySection = React.lazy(() => import("./GallerySection.jsx"));
import ContactComponent from "./ContactComponent.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

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
  );
}

export default Home;

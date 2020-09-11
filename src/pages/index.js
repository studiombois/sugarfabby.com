import SEO from '@components/elements/SEO/SEO';
import Navbar from '@components/modules/Navbar/Navbar';
import Footer from '@components/templates/Footer/Footer';
import IntroSection from '@components/templates/IntroSection/IntroSection';
import ProjectsSection from '@components/templates/ProjectsSection/ProjectsSection';
import React from 'react';

const App = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <IntroSection />
      <ProjectsSection id="projects" />
      <Footer />
    </>
  );
};

export default App;

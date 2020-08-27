import SEO from '@components/elements/SEO/SEO';
import IntroSection from '@components/templates/IntroSection/IntroSection';
import ProjectsSection from '@components/templates/ProjectsSection/ProjectsSection';
import React from 'react';

const App = () => {
  return (
    <>
      <SEO />
      <IntroSection />
      <ProjectsSection id="projects" />
    </>
  );
};

export default App;

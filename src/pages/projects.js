import SEO from '@components/elements/SEO/SEO';
import Navbar from '@components/modules/Navbar/Navbar';
import Footer from '@components/templates/Footer/Footer';
import ProjectsSection from '@components/templates/ProjectsSection/ProjectsSection';
import React from 'react';

const ProjectsPage = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <ProjectsSection id="projects" />
      <Footer />
    </>
  );
};

export default ProjectsPage;

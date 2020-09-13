import SEO from '@components/elements/SEO/SEO';
import Navbar from '@components/modules/Navbar/Navbar';
import Footer from '@components/templates/Footer/Footer';
import IntroSection from '@components/templates/IntroSection/IntroSection';
import SummarySection from '@components/templates/SummarySection/SummarySection';
import React from 'react';

const App = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <IntroSection />
      <SummarySection />
      <Footer />
    </>
  );
};

export default App;

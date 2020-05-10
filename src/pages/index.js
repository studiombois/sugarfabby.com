import SEO from '@components/atoms/SEO/SEO';
import Navbar from '@components/organisms/Navbar/Navbar';
import AboutMeSection from '@components/templates/AboutMeSection/AboutMeSection';
import GetInTouchSection from '@components/templates/GetInTouchSection/GetInTouchSection';
import IntroSection from '@components/templates/IntroSection/IntroSection';
import ProjectsSection from '@components/templates/ProjectsSection/ProjectsSection';
import { ThemeContext } from '@context';
import useDarkMode from '@hooks/useDarkMode';
import GlobalStyles from '@lib/theme/GlobalStyles';
import 'circular-std';
import { graphql } from 'gatsby';
import React from 'react';

const App = ({ data }) => {
  const [theme, avatar, toggleTheme] = useDarkMode();
  const { blogUrl } = data.site.siteMetadata;

  return (
    <main>
      <SEO />
      <GlobalStyles />
      <ThemeContext.Provider value={{ theme, avatar, toggleTheme }}>
        <Navbar {...{ blogUrl }} />
        <IntroSection />
        <ProjectsSection id="projects" />
        <AboutMeSection id="about-me" />
        <GetInTouchSection />
      </ThemeContext.Provider>
    </main>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        blogUrl
      }
    }
  }
`;

export default App;

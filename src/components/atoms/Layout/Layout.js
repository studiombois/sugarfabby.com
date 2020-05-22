import Navbar from '@components/organisms/Navbar/Navbar';
import Footer from '@components/templates/Footer/Footer';
import useDarkMode from '@hooks/useDarkMode';
import GlobalStyles from '@lib/theme/GlobalStyles';
import { theme } from '@lib/theme/theme';
import { MDXProvider } from '@mdx-js/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import mdxComponents from '../MDX/Mdx';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          blogUrl
        }
      }
    }
  `);
  const { blogUrl } = data.site.siteMetadata;
  const [mode, avatar, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={{ mode, avatar, toggleTheme, ...theme }}>
      <Main>
        <GlobalStyles />
        <Navbar {...{ blogUrl }} />
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        <Footer />
      </Main>
    </ThemeProvider>
  );
};

export default Layout;

import Navbar from '@components/modules/Navbar/Navbar';
import Footer from '@components/templates/Footer/Footer';
import ThemeProvider from '@components/templates/ThemeProvider';
import GlobalStyles from '@lib/theme/GlobalStyles';
import { MDXProvider } from '@mdx-js/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
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

  return (
    <ThemeProvider>
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

import Video from '@components/elements/Video/Video';
import Navbar from '@components/modules/Navbar/Navbar';
import GlobalStyles from '@lib/theme/GlobalStyles';
import ThemeProvider from '@lib/theme/ThemeProvider';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import styled from 'styled-components';
import mdxComponents from '../MDX/Mdx';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const customComponents = { Video };

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Main>
        <GlobalStyles />
        <Navbar />
        <MDXProvider components={{ ...mdxComponents, ...customComponents }}>
          {children}
        </MDXProvider>
      </Main>
    </ThemeProvider>
  );
};

export default Layout;

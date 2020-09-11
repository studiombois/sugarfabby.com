import Video from '@components/elements/Video/Video';
import ThemeProvider from '@components/templates/ThemeProvider';
import GlobalStyles from '@lib/theme/GlobalStyles';
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
        <MDXProvider components={{ ...mdxComponents, ...customComponents }}>
          {children}
        </MDXProvider>
      </Main>
    </ThemeProvider>
  );
};

export default Layout;

import Navbar from '@components/organisms/Navbar/Navbar';
import { ThemeContext } from '@context';
import useDarkMode from '@hooks/useDarkMode';
import 'circular-std';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import './styles.scss';

const Layout = () => {
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
  const [theme, avatar, toggleTheme] = useDarkMode();

  // Todo: MDX Blog
  return (
    <ThemeContext.Provider value={{ theme, avatar, toggleTheme }}>
      <main className="App">
        <Navbar {...{ blogUrl }} />
        {/* <MDXProvider components={mdxComponents}>
          <Container>{children}</Container>
        </MDXProvider> */}
      </main>
    </ThemeContext.Provider>
  );
};

export default Layout;

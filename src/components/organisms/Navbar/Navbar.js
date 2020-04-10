import Layout from '@components/atoms/Layout/Layout';
import Switch from '@components/atoms/Switch/Switch';
import { ThemeContext } from '@context';
import React, { useContext } from 'react';
import './styles.scss';

const Navbar = ({ blogUrl }) => {
  const themeContext = useContext(ThemeContext);
  const { theme, toggleTheme } = themeContext;
  const logoSrc = require(`@components/atoms/Icon/icons/icon-logo.svg`);
  return (
    <Layout innerClassName="Navbar__Wrapper">
      <nav className="Navbar">
        <img className="Navbar__Logo" src={logoSrc} alt="icon-logo" />
        <ul className="Navbar__NavItems">
          <a href="#projects" className="Navbar__NavItem">
            Projects
          </a>
          <a href="#about-me" className="Navbar__NavItem">
            About Me
          </a>
          <a href={blogUrl} className="Navbar__NavItem">
            Blog
          </a>
          <Switch
            className="Navbar__Switch"
            onChange={(e) => toggleTheme(e.target.checked)}
            checked={theme === 'dark'}
          />
        </ul>
      </nav>
    </Layout>
  );
};

export default Navbar;

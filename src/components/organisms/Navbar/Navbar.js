import Container from '@components/atoms/Container/Container';
import Switch from '@components/atoms/Switch/Switch';
import { ThemeContext } from '@context';
import React, { useContext } from 'react';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  > div {
    max-width: 1440px;
    padding: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  background: var(--color-background);
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const NavItem = styled.a`
  margin-right: 20px;
  display: none;
  cursor: pointer;
  &:hover {
    color: var(--color-hover);
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 100%;
`;

const Navbar = ({ blogUrl }) => {
  const themeContext = useContext(ThemeContext);
  const { theme, toggleTheme } = themeContext;
  const logoSrc = require(`@components/atoms/Icon/icons/icon-logo.svg`);
  return (
    <StyledContainer>
      <Nav>
        <Logo src={logoSrc} alt="icon-logo" />
        <NavItems>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#about-me">About Me</NavItem>
          <NavItem href={blogUrl}>Blog</NavItem>
          <Switch
            onChange={(e) => toggleTheme(e.target.checked)}
            checked={theme === 'dark'}
          />
        </NavItems>
      </Nav>
    </StyledContainer>
  );
};

export default Navbar;

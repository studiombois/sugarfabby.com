import Container from '@components/atoms/Container/Container';
import Switch from '@components/atoms/Switch/Switch';
import { Link } from 'gatsby';
import React from 'react';
import styled, { useTheme } from 'styled-components';

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
  * {
    font-size: 16px;
  }
`;

const NavItem = styled.li`
  :not(:first-child) {
    margin-left: 5px;
  }
  > a {
    padding: 8px 10px;
    border-radius: 5px;

    &:hover {
      color: var(--color-hover);
    }
  }
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 100%;
`;

const Navbar = ({ blogUrl }) => {
  const { mode, toggleTheme } = useTheme();
  const logoSrc = require(`@components/atoms/Icon/icons/icon-logo.svg`);
  return (
    <StyledContainer>
      <Nav>
        <Link to="/">
          <Logo src={logoSrc} alt="icon-logo" />
        </Link>
        <NavItems>
          {/* <NavItem>
            <Link to="/projects">Projects</Link>
          </NavItem> */}
          <NavItem>
            <a href={blogUrl}>Blog</a>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <Switch
            onChange={(e) => toggleTheme(e.target.checked)}
            checked={mode === 'dark'}
          />
        </NavItems>
      </Nav>
    </StyledContainer>
  );
};

export default Navbar;

import Container from '@components/elements/Container/Container';
import NewSwitch from '@components/elements/Switch/NewSwitch';
import { useTheme } from '@components/templates/ThemeProvider';
import debounce from '@lib/utils/debounce';
import { Link } from 'gatsby';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { navbarPadding } from './utils';

const StyledContainer = styled(Container)`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;

  > div {
    max-width: 1200px;
    padding: 20px;
  }

  ${navbarPadding}
`;

const Nav = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  * {
    font-size: 16px;
  }

  > :last-child {
    margin-left: 20px;
  }
`;

const NavItem = styled.li`
  margin: 0 5px;

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
  width: 50px;
  height: 100%;
  transition: width 100ms ease-out;

  @media screen and (min-width: 768px) {
    width: 60px;
  }
`;

const logoSrc = require(`@components/elements/Icon/icons/icon-logo.svg`);

const Navbar = () => {
  const { mode, toggleTheme } = useTheme();
  const [inProp, setInProp] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setInProp(true);
    } else if (window.scrollY === 0) {
      setInProp(false);
    }
  };

  React.useLayoutEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', debounce(handleScroll));
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inProp]);

  return (
    <CSSTransition in={inProp} timeout={200} classNames="alert" appear>
      <StyledContainer>
        <Nav>
          <Link to="/">
            <Logo src={logoSrc} alt="icon-logo" />
          </Link>
          <NavItems>
            {/* <NavItem>
            <Link to="/projects">Projects</Link>
          </NavItem> */}
            {/* <NavItem>
              <Link to="/blog">Blog</Link>
            </NavItem> */}
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            <NewSwitch
              onChange={(e) => toggleTheme(e.target.checked)}
              checked={mode === 'dark'}
            />
          </NavItems>
        </Nav>
      </StyledContainer>
    </CSSTransition>
  );
};

export default Navbar;

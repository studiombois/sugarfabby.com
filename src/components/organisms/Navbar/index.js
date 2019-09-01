import React, { useContext } from 'react'
import Switch from '../../atoms/Switch'
import Layout from '../../atoms/Layout'
import { ThemeContext } from '../../../context'
import './styles.scss'

const Navbar = () => {
  const themeContext = useContext(ThemeContext)
  const { theme, toggleTheme } = themeContext
  const logoSrc = require(`../../atoms/Icon/icons/icon-logo.svg`)
  return (
    <Layout innerClassName="Navbar__Wrapper">
      <nav className="Navbar">
        <img className="Navbar__Logo" src={logoSrc} alt="icon-logo" />
        <ul className="Navbar__NavItems">
          <a href="#projects" className="Navbar__NavItem">Projects</a>
          <a href="#about-me" className="Navbar__NavItem">About Me</a>
          <Switch 
            className="Navbar__Switch"
            onChange={e => toggleTheme(e.target.checked)}
            checked={theme === 'dark'}
          />
        </ul>
      </nav>
    </Layout>
  )
}

export default Navbar
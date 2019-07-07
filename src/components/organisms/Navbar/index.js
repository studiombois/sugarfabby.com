import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import './styles.scss'

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)

  return (
    <nav className="Navbar">
      <Icon className="Navbar__Logo" icon="logo" />
      <ul className="Navbar__NavItems">
        <a href="#projects" className="Navbar__NavItem">Projects</a>
        <a href="#about-me" className="Navbar__NavItem">About Me</a>
        <Button link={`mailto:${data.site.siteMetadata.email}`}>Email Me</Button>
      </ul>
    </nav>
  )
}

export default Navbar
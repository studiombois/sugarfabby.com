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
        <li className="Navbar__NavItem">Projects</li>
        <li className="Navbar__NavItem">About Me</li>
        <Button><a href={`mailto:${data.site.siteMetadata.email}`}>Email Me</a></Button>
      </ul>
    </nav>
  )
}

export default Navbar
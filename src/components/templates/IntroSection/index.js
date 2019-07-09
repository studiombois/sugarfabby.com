import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Button from '../../atoms/Button'
import Layout from '../../atoms/Layout'
import avatar from '../../../assets/images/avatar.svg'
import avatarDark from '../../../assets/images/avatar-dark.svg'
import { ThemeContext } from '../../context'
import './styles.scss'

const IntroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          email
        }
      }
      contentfulAsset (title: { eq: "resume" }) {
        file {
          url
        }
      }
    }
  `)
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext
  const { author, email } = data.site.siteMetadata
  const { url: resumeUrl } = data.contentfulAsset.file
  return (
    <Layout innerClassName="IntroSection">
      <div className="IntroSection__Headline">
        <h1 className="IntroSection__Title">{author}</h1>
        <p className="IntroSection__Subtitle">Software Engineer based in Hong Kong with focus on Front-end Dev and Human-centered Design.</p>
        <div className="IntroSection__Buttons">
          <Button link={`mailto:${email}`} target="_self">Email Me</Button>
          <Button link={resumeUrl} fill>View Resume</Button>
        </div>
      </div>
      <img className="IntroSection__Avatar" src={theme === 'dark' ? avatarDark : avatar} alt="fabian-avatar"/>
    </Layout>
  )
}

export default IntroSection
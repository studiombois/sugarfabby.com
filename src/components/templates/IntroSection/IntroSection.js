import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Button from '@components/atoms/Button/Button'
import Layout from '@components/atoms/Layout/Layout'
import { ThemeContext } from '../../../context'
import './styles.scss'

const IntroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          email
          description
        }
      }
      contentfulAsset(title: { eq: "resume" }) {
        file {
          url
        }
      }
    }
  `)
  const themeContext = useContext(ThemeContext)
  const { avatar } = themeContext
  const { author, email, description } = data.site.siteMetadata
  const { url: resumeUrl } = data.contentfulAsset.file
  return (
    <Layout innerClassName="IntroSection">
      <div className="IntroSection__Headline">
        <h1 className="IntroSection__Title">{author}</h1>
        <p className="IntroSection__Subtitle">{description}</p>
        <div className="IntroSection__Buttons">
          <Button link={`mailto:${email}`} target="_self">
            Email Me
          </Button>
          <Button link={resumeUrl} fill>
            View Resume
          </Button>
        </div>
      </div>
      {avatar ? (
        <img
          className="IntroSection__Avatar"
          src={avatar}
          alt="fabian-avatar"
        />
      ) : (
        <div className="IntroSection__Avatar" />
      )}
    </Layout>
  )
}

export default IntroSection

import Icon from '@components/atoms/Icon/Icon'
import Layout from '@components/atoms/Layout/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import './styles.scss'

const GetInTouchSection = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialMedia {
            link
            platform
          }
          blogUrl
        }
      }
    }
  `)
  const { socialMedia, blogUrl } = data.site.siteMetadata
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    if (typeof window !== 'undefined' && window.scroll) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Layout
      className="GetInTouchSection"
      innerClassName="GetInTouchSection__Wrapper"
    >
      <div className="GetInTouchSection__LinkWrapper">
        <div className="GetInTouchSection__SocialMediaButtons">
          {socialMedia.map((media) => (
            <Icon
              key={media.platform}
              className="GetInTouchSection__SocialMediaButton"
              icon={media.platform}
              link={media.link}
            />
          ))}
        </div>
        <div className="GetInTouchSection__Links">
          <a href="#projects">Projects</a>
          <a href={blogUrl}>Blog</a>
          <p className="GetInTouchSection__ScrollToTop" onClick={scrollToTop}>
            Back To Top
          </p>
        </div>
      </div>
      <p className="GetInTouchSection__Text">
        © {year} Fabian Lee. All Rights Reserved.
      </p>
    </Layout>
  )
}

export default GetInTouchSection

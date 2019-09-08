import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../../atoms/Layout'
import Icon from '../../atoms/Icon'
import './styles.scss'

const GetInTouchSection = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          socialMedia {
            link
            platform
          }
        }
      }
    }
  `)
  const { email, socialMedia } = data.site.siteMetadata
  return (
    <Layout
      className="GetInTouchSection"
      innerClassName="GetInTouchSection__Wrapper"
    >
      <h2 className="GetInTouchSection__Title">Get In Touch</h2>
      <p className="GetInTouchSection__Text">
        Shoot me an email at{' '}
        <span className="GetInTouchSection__Email">{email}</span> if you have
        anything in mind.
        <br />
        You can also visit me on other platforms:
      </p>
      <div className="GetInTouchSection__SocialMediaButtons">
        {socialMedia.map(media => (
          <Icon
            key={media.platform}
            className="GetInTouchSection__SocialMediaButton"
            icon={media.platform}
            link={media.link}
          />
        ))}
      </div>
    </Layout>
  )
}

export default GetInTouchSection

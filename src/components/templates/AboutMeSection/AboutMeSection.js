import React from 'react'
import Layout from '@components/atoms/Layout/Layout'
import './styles.scss'

const AboutMeSection = ({ ...props }) => {
  return (
    <Layout innerClassName="AboutMeSection__Wrapper" {...props}>
      <h2>About Me</h2>
      <p className="AboutMeSection__Description">
        My name is Fabian Lee. I am a software engineer from Hong Kong who likes
        doing design and front-end development. I believe our world needs more
        people with compassion and inspire others to be better.
        <br />
        <br />
        I&apos;m not the most logical engineer you&apos;ll meet. But I&apos;m
        proud to be someone that sees the world in a humanistic perspective.
        This helps us understand and build meaningful relationship all other
        living beings.
      </p>
    </Layout>
  )
}

export default AboutMeSection

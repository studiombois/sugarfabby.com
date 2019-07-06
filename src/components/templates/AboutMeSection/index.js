import React from 'react'
import Layout from '../../atoms/Layout'
import './styles.scss'

const AboutMeSection = () => {
  return (
    <Layout innerClassName="AboutMeSection__Wrapper">
      <h2>About Me</h2>
      <p className="AboutMeSection__Description">
        My name is Fabian Lee. I am a software engineer from Hong Kong who likes doing design and front-end development.
        <br />
        <br />
        I'm not the most logical engineer you'll meet. But I'm proud to be someone that sees the world in a humanistic perspective. This helps us understand and build meaningful relationship with users, colleagues and all other living beings.
      </p>
    </Layout>
  )
}

export default AboutMeSection
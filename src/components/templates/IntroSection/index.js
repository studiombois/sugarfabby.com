import React from 'react'
import Button from '../../atoms/Button'
import Layout from '../../atoms/Layout'
import avatar from '../../../assets/images/avatar.svg'
import './styles.scss'

const IntroSection = () => {
  return (
    <Layout innerClassName="IntroSection">
      <div className="IntroSection__Headline">
        <h1 className="IntroSection__Title">Fabian Lee</h1>
        <p className="IntroSection__Subtitle">Software Engineer based in Hong Kong with focus on Front-end Dev and Human-centered Design.</p>
        <div className="IntroSection__Buttons">
          <Button>View Projects</Button>
          <Button fill>View Resume</Button>
        </div>
      </div>
      <img className="IntroSection__Avatar" src={avatar} alt="fabian-avatar"/>
    </Layout>
  )
}

export default IntroSection
import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/organisms/Navbar'
import IntroSection from '../components/templates/IntroSection'
import ProjectsSection from '../components/templates/ProjectsSection'
import AboutMeSection from '../components/templates/AboutMeSection'
import './styles.scss'

const App = () => (
  <main className="App">
    <Helmet>
      <meta
        name="description"
        content="Personal Website of Fabian Lee, Software Engineer from Hong Kong"
      />
      <title>Fabian Lee | Software Engineer from Hong Kong</title>
      <link rel="canonical" href="https://sugarfabby.com/"></link>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Navbar />
    <IntroSection />
    <ProjectsSection />
    <AboutMeSection />
    <div>Get In Touch</div>
  </main>
)

export default App

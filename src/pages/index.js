import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/organisms/Navbar'
import IntroSection from '../components/templates/IntroSection'
import ProjectsSection from '../components/templates/ProjectsSection'
import AboutMeSection from '../components/templates/AboutMeSection'
import GetInTouchSection from '../components/templates/GetInTouchSection';
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
    </Helmet>
    <Navbar />
    <IntroSection />
    <ProjectsSection />
    <AboutMeSection />
    <GetInTouchSection />
  </main>
)

export default App

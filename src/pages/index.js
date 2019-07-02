import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/organisms/Navbar";
import IntroSection from '../components/templates/IntroSection'
import ProjectsSection from '../components/templates/ProjectsSection'
import './styles.scss'

const App = () => (
  <main className="App">
    <Helmet>
      <title>Fabian Lee | Software Engineer from Hong Kong</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap" rel="stylesheet" />
    </Helmet>
    <Navbar />
    <IntroSection />
    <ProjectsSection />
    <div>About Me</div>
    <div>Get In Touch</div>
  </main>
)

export default App

import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Navbar from '../components/organisms/Navbar'
import IntroSection from '../components/templates/IntroSection'
import ProjectsSection from '../components/templates/ProjectsSection'
import AboutMeSection from '../components/templates/AboutMeSection'
import GetInTouchSection from '../components/templates/GetInTouchSection';
import './styles.scss'

const App = ({ data }) => {
  const { title, author, description, url } = data.site.siteMetadata
  const { url: openGraphImage } = data.contentfulAsset.file
  return (
    <main className="App">
      <Helmet>
        <meta name="author" content={author} />
        <meta name="description" content={description} />
        <meta property="og:image" content={openGraphImage} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title}></meta>
        <title>{title}</title>
        <link rel="canonical" href={url}></link>
      </Helmet>
      <Navbar />
      <IntroSection />
      <ProjectsSection id="projects" />
      <AboutMeSection id="about-me" />
      <GetInTouchSection />
    </main>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
        url
      }
    }
    contentfulAsset (title: { eq: "fabian-portfolio-open-graph" }) {
      file {
        url
      }
    }
  }
`

export default App

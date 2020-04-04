import Navbar from '@components/organisms/Navbar/Navbar'
import AboutMeSection from '@components/templates/AboutMeSection/AboutMeSection'
import GetInTouchSection from '@components/templates/GetInTouchSection/GetInTouchSection'
import IntroSection from '@components/templates/IntroSection/IntroSection'
import ProjectsSection from '@components/templates/ProjectsSection/ProjectsSection'
import { ThemeContext } from '@context'
import useDarkMode from '@hooks/useDarkMode'
import 'circular-std'
import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import './styles.scss'

const App = ({ data }) => {
  const [theme, avatar, toggleTheme] = useDarkMode()
  const {
    title,
    author,
    description,
    siteUrl,
    blogUrl,
  } = data.site.siteMetadata
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
        <link rel="canonical" href={siteUrl}></link>
      </Helmet>
      <ThemeContext.Provider value={{ theme, avatar, toggleTheme }}>
        <Navbar {...{ blogUrl }} />
        <IntroSection />
        <ProjectsSection id="projects" />
        <AboutMeSection id="about-me" />
        <GetInTouchSection />
      </ThemeContext.Provider>
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
        siteUrl
        blogUrl
      }
    }
    contentfulAsset(title: { eq: "fabian-portfolio-open-graph" }) {
      file {
        url
      }
    }
  }
`

export default App

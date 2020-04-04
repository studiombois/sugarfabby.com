import Layout from '@components/atoms/Layout/Layout'
import ProjectCard from '@components/organisms/ProjectCard/ProjectCard'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import './styles.scss'

const ProjectsSection = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: publishedDate, order: DESC }) {
        totalCount
        nodes {
          title
          demoLink
          sourceLink
          techUsed
          description {
            childMarkdownRemark {
              excerpt
            }
          }
          screenshot {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  const projects = data.allContentfulProject.nodes

  return (
    <Layout className="ProjectsSection" {...props}>
      <h2>Projects</h2>
      <div className="ProjectsSection__Projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Layout>
  )
}

export default ProjectsSection

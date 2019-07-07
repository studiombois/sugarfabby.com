import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../../atoms/Layout';
import ProjectCard from '../../organisms/ProjectCard';
import './styles.scss'

const ProjectsSection = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
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
              file {
                url
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
          <ProjectCard key={index} project={project}/>
        ))}
      </div>
    </Layout>
  )
}

export default ProjectsSection
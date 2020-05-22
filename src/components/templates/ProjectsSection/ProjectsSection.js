import Container from '@components/atoms/Container/Container';
import Heading from '@components/atoms/Text/Heading';
import ProjectCard from '@components/organisms/ProjectCard/ProjectCard';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  background: var(--color-background-dark);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
  }
`;

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
  `);
  const projects = data.allContentfulProject.nodes;

  return (
    <StyledContainer {...props}>
      <Heading size="h2" style={{ marginTop: 0 }}>
        Projects
      </Heading>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsGrid>
    </StyledContainer>
  );
};

export default ProjectsSection;

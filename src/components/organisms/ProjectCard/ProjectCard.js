import Box from '@components/atoms/Box/Box';
import Button from '@components/atoms/Button/Button';
import Heading from '@components/atoms/Text/Heading';
import Text from '@components/atoms/Text/Text';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled(Box)`
  background: var(--color-background);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ContentContainer = styled(Box)`
  text-align: left;
`;

const ButtonsContainer = styled(Box)`
  margin-top: auto;
  > :first-child {
    margin-right: 10px;
  }
`;

const SkillsUsedText = styled(Text)`
  color: var(--color-text-secondary);
`;

const ProjectCard = ({ project }) => {
  const {
    title,
    demoLink,
    sourceLink,
    techUsed,
    description: {
      childMarkdownRemark: { excerpt },
    },
    screenshot: { fluid },
  } = project;

  return (
    <ProjectContainer flexDirection="column">
      <Img
        objectFit="cover"
        objectPosition="center"
        fluid={fluid}
        alt={title}
        style={{
          width: '100%',
          height: '250px',
          borderRadius: '10px 10px 0px 0px',
        }}
      />
      <ContentContainer p="20px" flex={1} flexDirection="column">
        <Heading size="h5" style={{ margin: 0 }}>
          {title}
        </Heading>
        <Heading size="h6" style={{ margin: '5px 0 15px' }}>
          {excerpt}
        </Heading>
        <Box flexDirection="column" mb="40px">
          <SkillsUsedText size="small" fontWeight="600">
            Skills Used:
          </SkillsUsedText>
          <SkillsUsedText size="small">{techUsed.join(', ')}</SkillsUsedText>
        </Box>
        <ButtonsContainer justifyContent="center">
          <Button link={sourceLink} disabled={!sourceLink}>
            View Source
          </Button>
          <Button link={demoLink} disabled={!demoLink} fill>
            View Demo
          </Button>
        </ButtonsContainer>
      </ContentContainer>
    </ProjectContainer>
  );
};

export default ProjectCard;

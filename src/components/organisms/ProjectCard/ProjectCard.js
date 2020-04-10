import Button from '@components/atoms/Button/Button';
import Img from 'gatsby-image';
import React from 'react';
import './styles.scss';

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
    <div className="ProjectCard__Project">
      <Img className="ProjectCard__Screenshot" fluid={fluid} alt={title} />
      <div className="ProjectCard__Content">
        <p className="ProjectCard__Title">{title}</p>
        <p className="ProjectCard__Description">{excerpt}</p>
        <p className="ProjectCard__SkillsUsed">
          Skills Used: <br />
          <span>{techUsed.join(', ')}</span>
        </p>
        <div className="ProjectCard__Buttons">
          <Button link={sourceLink} disabled={!sourceLink}>
            View Source
          </Button>
          <Button link={demoLink} disabled={!demoLink} fill>
            View Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

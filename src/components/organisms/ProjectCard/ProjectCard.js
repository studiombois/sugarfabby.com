import React from 'react'
import Button from '@components/atoms/Button/Button'
import './styles.scss'

const ProjectCard = ({ project }) => {
  const {
    title,
    demoLink,
    sourceLink,
    techUsed,
    description: {
      childMarkdownRemark: { excerpt },
    },
    screenshot: {
      file: { url },
    },
  } = project

  return (
    <div className="ProjectCard__Project">
      <img className="ProjectCard__Screenshot" src={url} alt={title} />
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
  )
}

export default ProjectCard

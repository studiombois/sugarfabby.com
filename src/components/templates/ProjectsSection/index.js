import React from 'react'
import dummy from '../../../assets/images/dummy-site.jpg'
import './styles.scss'
import Button from '../../atoms/Button';

const ProjectsSection = () => {
  const projects = [
    { title: 'Test Project', description: 'Site for nothing but testing.' },
    { title: 'Test Project', description: 'Site for nothing but testing.' },
    { title: 'Test Project', description: 'Site for nothing but testing.' },
    { title: 'Test Project', description: 'Site for nothing but testing.' },
  ]
  return (
    <section className="ProjectsSection">
      <div className="ProjectsSection__Wrapper">
        <h2>Projects</h2>
        <div className="ProjectsSection__Projects">
          {projects.map((project, index) => (
            <div key={index} className="ProjectsSection__Project">
              <img src={dummy} style={{ width: '100%' }} />
              <div className="ProjectsSection__Content">
                <p className="ProjectsSection__Title">{`${project.title} ${index + 1}`}</p>
                <p className="ProjectsSection__Description">{project.description}</p>
                <div className="ProjectsSection__Buttons">
                  <Button>View Source</Button>
                  <Button fill>View Demo</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
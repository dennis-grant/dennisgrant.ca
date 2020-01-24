import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Projects.scss';

class Projects extends Component {
  render() {
    let projects = this.props.projectsInfo;

    return (
      <div className="projects">
        <header>Projects</header>
        <section>
          {projects.map( (project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <div className="project-link">{project.displayName}</div>
            </Link>
          ))}
        </section>
      </div>
    );
  }
}

export default Projects;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Resume.scss';

class Resume extends Component {
  render() {
    let contactInfo = this.props.resumeInfo.contact;
    let professionalInfo = this.props.resumeInfo.professional;

    return (
      <div className="resume">
        <header>
          <div className="contact">
            <div className="name">{contactInfo.firstName} {contactInfo.middleInitial} {contactInfo.lastName}</div>
            <div className="address">{contactInfo.address}</div>
            <div className="phone">{contactInfo.phone}</div>
          </div>
          <nav>
            <div className="col1"><a href={`http://www.github.com/${contactInfo.githubUser}`} target="_blank">www.github.com/{contactInfo.githubUser}</a></div>
            <div className="col2">{contactInfo.email}</div>
            <div className="col3"><Link to="/">{contactInfo.website}</Link></div>
          </nav>
        </header>
        <div className="details">
          <section className="skills">
            <header>Skills</header>
            <ul>
              {Object.entries(professionalInfo.skills).map(([skillCategory, names], index) => (
                <li key={index}><span className="skill-category">{skillCategory}</span> - {names.join(", ")}</li>
              ))}
            </ul>
          </section>
          <section className="experiences">
            <header>Work Experience</header>
            {professionalInfo.workExperiences.map( (experience, index) => (
              <div key={index} className="experience">
                <header>
                  <div className="col1">{experience.position}</div>
                  <div className="col2">{experience.company}</div>
                  <div className="col3">{experience.start} - {experience.end}</div>
                </header>
                <ul>
                  {experience.highlights.map( (highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section className="software-projects">
            <header>Software Projects</header>
            {professionalInfo.softwareProjects.map( (project, index) => (
              <div key={index} className="project">
                <header>{project.name}</header>
                <ul>
                  {project.highlights.map( (highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section>
            <header>Education</header>
            <ul>
              {professionalInfo.education.map( (item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Resume;

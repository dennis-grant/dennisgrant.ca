import React, {Component} from 'react';
import './App.scss';
import Nav from './Nav';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "resume": {
        "contact": {
          "firstName": "",
          "middleInitial": "",
          "lastName": "",
          "address": "",
          "phone": "",
          "email": "",
          "githubUser": "",
          "website": ""
        },
        "professional": {
          "skills": {
          },
          "workExperiences": [
          ],
          "softwareProjects": [
          ],
          "education": [
          ]
        }
      },
      projects: []
    };
  }

  componentDidMount() {
    fetch("/resume-info.json")
      .then(resp => resp.json())
      .then(info => {
        this.setState((prevState, props) => Object.assign(prevState, {"resume": info}));
      })
      .catch(err => {
        console.log(err)
      });

    fetch("/projects-info.json")
      .then(resp => resp.json())
      .then(info => {
        this.setState((prevState, props) => Object.assign(prevState, {"projects": info}));
      })
      .catch(err => {
        console.log(err)
      });
  }

  getProject(id) {
    let project = this.state.projects.find((project) => project.id === id);
    return (project !== undefined) ? project : {id: "unknown-project"};
  }

  render() {
    return (
      <Router>
        <div className="main-display">
          <Nav />
          <div className="details-display">
            <Switch>
              <Route path="/projects" exact render={(props) => <Projects projectsInfo={this.state.projects} />} />
              <Route
                path="/projects/:id" 
                render={
                  (props) => (
                    <ProjectDetails
                      key={this.getProject(props.match.params.id).id}
                      project={this.getProject(props.match.params.id)} />
                  )
                } />
              <Route path="/about" component={About} />
              <Route path="/" exact render={(props) => <Resume resumeInfo={this.state.resume} />} />
              <Route path="/resume" render={(props) => <Resume resumeInfo={this.state.resume} />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <Link className="link" to="/about">
          <li>About</li>
        </Link>
        <Link className="link" to="/resume">
          <li>Resume</li>
        </Link>
        <a className="link" href="/resume.pdf" download="/dennis_grant_resume.pdf">Download</a>
        <Link className="link" to="/projects">
          <li>Projects</li>
        </Link>
      </ul>
    );
  }
}

export default Nav;

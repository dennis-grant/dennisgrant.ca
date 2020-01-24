import React, {Component} from 'react';
import './About.scss';

class About extends Component {
  render() {
    return (
      <div className="about">
        <header>Dennis Grant</header>
        <section>
          <p>I am a software developer with over 15 experience. My passions include learning about new technologies
          and using structured code to solve complex user problems.</p>

          <p>When I am not programming I like playing soccer, writing poems and discussing philosophical ideas.</p>
        </section>
      </div>
    );
  }
}

export default About;

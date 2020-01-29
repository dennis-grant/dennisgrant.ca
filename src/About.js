import React, {Component} from 'react';
import './About.scss';

class About extends Component {
  render() {
    return (
      <div className="about">
        <header>Dennis Grant</header>
        <section>
          <p>
          I am a software developer with a passion for writing clean, structured code and a deep desire to make a difference in users' lives.
          </p>

          <p>
          With over 15 years experience, I am more prepared and feel more excited to contribute than ever before. My software development skills are at their best,
          the lives of more people are being affected by IT in a deeper way than ever before and software development has never been more dynamic.
          </p>

          <p>
          Please review some of my projects' source code on <a href="http://www.github.com/dennis-grant" target="_blank">Github</a> and my&nbsp; 
          <a href="/resume">resume</a> to see some of my top skills.
          </p>

          <p>
          When I am not programming, I like playing soccer, writing poems and discussing philosophical ideas.
          </p>
        </section>
      </div>
    );
  }
}

export default About;

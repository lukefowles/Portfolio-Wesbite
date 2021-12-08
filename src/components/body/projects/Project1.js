import React from 'react';
import './Projects.css';
import Github from '../../contactIcons/github';

function Project1() {
    return (
        <div>
          <h2>SoundCrowd Client Side Project | BNTA Group Project</h2>
          <a href="https://www.linkedin.com/in/luke-fowles-b66886167/">
              <Github/>
          </a>
          <p>Worked in a team of four to develop a front-end which utilised API calls from another BNTA group’s server side project. Using the framework React alongside CSS styling, we produced a multi-page web application that allows users to generate music playlists according to a randomly generated quiz.</p>
        </div>
    )
}

export default Project1

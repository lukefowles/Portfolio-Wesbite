import React from 'react'
import './Projects.css'
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

function Projects() {
    return (
        <div className="project-section">
            <div className="individual-project">
             <Project1></Project1>  
            </div>
            <div className="individual-project">
             <Project2></Project2>  
            </div>
            <div className="individual-project">
             <Project3></Project3>  
            </div>
        </div>
    )
}

export default Projects
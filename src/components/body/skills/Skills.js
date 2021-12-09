import React from 'react'
import './skills.css'

function Skills() {
    return (
        <div className="skills-section">
            <h2>Tech Stack</h2>
            <div className="skills">
                <img className="skillsIcon" id="js" src="../../../../java-script.svg" alt="JavaScript Icon"></img>
                <img className="skillsIcon" id="java" src="../../../../java.svg" alt="Java Icon"></img>
                <img className="skillsIcon" id="c" src="../../../../c.svg" alt="C language Icon"></img>
                <img className="skillsIcon" id="html" src="../../../../html.svg" alt="HTML Icon"></img>
                <img className="skillsIcon" id="css3" src="../../../../css3.svg" alt="CSS3 Icon"></img>
                <img className="skillsIcon" id="react" src="../../../../react.svg" alt="React Icon"></img>
                <img className="skillsIcon" id="psql" src="../../../../postgresql.svg" alt="PostgreSQL Icon"></img>
                <img className="skillsIcon" id="spring" src="../../../../spring.svg" alt="Spring Icon"></img>
                <img className="skillsIcon" id="git" src="../../../../git.svg" alt="Git Icon"></img>
            </div>
        </div>
    )
}

export default Skills

import React from 'react';
import './Body.css';
import AboutMe from './aboutMe/AboutMe';
import Projects from './projects/Projects';
import Skills from './skills/Skills';

function Body() {
    return (
        <div className="body">
            <section id = 'aboutMe'>
                <AboutMe>
                </AboutMe>
            </section> 
            <section id= 'projects'>
                <Projects>
                </Projects>
            </section> 
            <section id = 'skills'>
                <Skills>
                </Skills>
            </section>  
        </div>
    )
}

export default Body

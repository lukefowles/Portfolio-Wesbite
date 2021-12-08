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
            <hr/>
            <section id= 'projects'>
                <Projects>
                </Projects>
            </section> 
            <hr/>
            <section id = 'skills'>
                <Skills>
                </Skills>
            </section>  
            <hr/>
        </div>
    )
}

export default Body

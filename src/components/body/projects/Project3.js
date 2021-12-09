import React from 'react';
import Github from '../../contactIcons/github'

function Project3() {
    return (
        <div>
            <div className="project-title">
                <h2>Flight Booking System | BNTA Group Project</h2>
                <a href="https://github.com/lukefowles/Nelson_Air">
                    <Github/>
                </a>
            </div>
            <p>Worked as a team of four to develop a command line interface which allows customers to book, cancel and search for flights, utilising OOP techniques in Java. Part of my role within the team was to write an implementation of a simple DAO interface that allows customer information to be added and removed from a text file, thus enabling the storage of information.</p>
        </div>
    )
}

export default Project3

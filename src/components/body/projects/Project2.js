import React from 'react';
import Github from '../../contactIcons/github'

function Project2() {
    return (
        <div>
           <h2>Average Connoisseurs Server Side Project | BNTA Group Project</h2>
           <a href="https://github.com/lukefowles/AverageConnoisseursServerSideProject">
              <Github/>
          </a>
           <p>Developed an API which allowed for CRUD operations to a PostgresSQL database. Within my team, we implemented functionality that allowed users to create a new customer, add a review to a restaurant (subsequently updating the restaurant’s average rating), add a restaurant to the database, search for restaurants by criteria, and add restaurants to their favourites/Wishlist. The back-end was implemented using Java and Spring Boot, with Junit and Mockito used for unit-testing.</p>
        </div>
    )
}

export default Project2

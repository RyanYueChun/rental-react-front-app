import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoggedUser } from '../users/loggedUserSlice';
import { selectFavouriteRents } from './favouriteRentsSlice';

import { selectRents } from './rentsSlice';

export const RentsList = () => {
    const currentUser = useSelector(selectLoggedUser);
    const rents = useSelector(selectRents);
    
    // Check if a user is currently logged in
    if (currentUser.id === 'default') {
        return  (
        <section>
            <h2>You must be logged In</h2>
            <Link to="/">Connection page</Link>
        </section>)
    }


    const renderedRents = rents.map(rent => (
        <article className="user-excerpt" key={rent.id}>
            <h3>{rent.title}</h3>
            <p>{rent.price}</p>
            <p>{rent.address}</p>
            <p>{rent.availability}</p>
            <Link to={`/rent/${rent.id}`} className="button muted-button">
                View Rent
            </Link>
        </article>
    ));

    return (
        <section className="users-list">
            <h2>Rents</h2>
            {renderedRents}
        </section>
    )
}
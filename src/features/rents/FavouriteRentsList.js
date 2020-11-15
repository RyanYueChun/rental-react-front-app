import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoggedUser } from '../users/loggedUserSlice';
import { favouriteRentRemoved, selectFavouriteRents } from './favouriteRentsSlice';

import { selectRents } from './rentsSlice';

export const FavouriteRentsList = () => {
    const currentUser = useSelector(selectLoggedUser);
    const rents = useSelector(selectRents);
    const favouriteRentsId = useSelector(selectFavouriteRents);
    const dispatch = useDispatch();
    
    // Check if a user is currently logged in
    if (currentUser.id === 'default') {
        return (
            <section>
                <h2>You must be logged In</h2>
                <Link to="/">Connection page</Link>
            </section>)
    };

    if (favouriteRentsId.length < 1) {
        return (
            <section>
                <h2>You have no favourites yet</h2>
            </section>
        )
    };

    const favouriteRents = rents.map(rent => {
        if (favouriteRentsId.includes(rent.id)) {
            return rent
        }
    });

    const onRemoveFromFavouriteClicked = id => {
        dispatch(favouriteRentRemoved(id))
    };
    
    const renderedFavouriteRents = favouriteRents.map(rent => {
        if (rent) {
            return (
                <article className="user-excerpt" key={rent.id}>
                    <h3>{rent.title}</h3>
                    <p>{rent.price}</p>
                    <p>{rent.address}</p>
                    <p>{rent.availability}</p>
                    <Link to={`/rent/${rent.id}`} className="button muted-button">
                        View Rent
                    </Link>
                    <div></div>
                    <button type="button" onClick={() => onRemoveFromFavouriteClicked(rent.id)}>
                        Remove from Favourite
                    </button>
                </article>)
            }
    });
    
    return (
        <section className="users-list">
            <h2>Favourite Rents</h2>
            <div>{renderedFavouriteRents}</div>
        </section>
    );
}
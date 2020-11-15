import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoggedUser } from '../users/loggedUserSlice';
import { favouriteRentAdded, selectFavouriteRents } from './favouriteRentsSlice';
import { available, selectRents } from './rentsSlice';

export const SingleRentPage = ({ match }) => {
    const [message, setMessage] = useState('');
    const currentUser = useSelector(selectLoggedUser);
    const rents = useSelector(selectRents);
    const favouriteRentsId = useSelector(selectFavouriteRents);
    const dispatch = useDispatch();
    
    // Check if a user is currently logged in
    if (currentUser.id === 'default') {
        return  (
        <section>
            <h2>You must be logged In</h2>
            <Link to="/">Connection page</Link>
        </section>)
    }
    
    const { rentId } = match.params;
    const rent = rents.find(rent => rent.id === rentId);

    if (!rent) {
        return (
            <section>
                <h2>Rent not found</h2>
            </section>
        )
    }
    
    const onAddToFavouriteClicked = () => {
        if (rent.availability === available) {
            const favouriteRent = favouriteRentsId.find(id => id === rent.id);
            if (favouriteRent) {
                setMessage('Already in favourites')
            } else {
                dispatch(favouriteRentAdded(rent.id))
                setMessage('Added in favourites')
            };
        } else {
            setMessage('Not yet available')
        }
    };

    return (
        <section>
            <article className="post">
                <h3>{rent.title}</h3>
                <p>{rent.price}</p>
                <p>{rent.address}</p>
                <p>{rent.availability}</p>
                <button type="button" onClick={() => onAddToFavouriteClicked()}>
                    Add to Favourite
                </button>
                <p>{message}</p>
            </article>
        </section>
    )
}
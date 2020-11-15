import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectRents } from './rentsSlice';

export const RentsList = () => {
    const rents = useSelector(selectRents);

    const renderedRents = rents.map(rent => (
        <article className="user-excerpt" key={rent.id}>
            <h3>{rent.title}</h3>
            <p>{rent.price}</p>
            <p>{rent.address}</p>
            <p>{rent.availability}</p>
        </article>
    ));

    return (
        <section className="users-list">
            <h2>Rents</h2>
            {renderedRents}
        </section>
    )
}
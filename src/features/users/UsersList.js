import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isLoggedIn, selectLoggedUser } from './loggedUserSlice';

import { selectUsers } from './usersSlice';

export const UsersList = () => {
    const currentUser = useSelector(selectLoggedUser);
    isLoggedIn(currentUser);
    const users = useSelector(selectUsers);

    const renderedUsers = users.map(user => (
        <article className="user-excerpt" key={user.id}>
            <h3>{user.username}</h3>
            <p>{user.password}</p>
        </article>
    ));

    return (
        <section className="users-list">
            <h2>Users</h2>
            {renderedUsers}
        </section>
    )
}
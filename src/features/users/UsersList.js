import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoggedUser } from './loggedUserSlice';

import { selectUsers } from './usersSlice';

export const UsersList = () => {
    const currentUser = useSelector(selectLoggedUser);
    const users = useSelector(selectUsers);
    
    // Check if a user is currently logged in
    if (currentUser.id === 'default') {
        return  (
        <section>
            <h2>You must be logged In</h2>
            <Link to="/">Connection page</Link>
        </section>)
    }


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
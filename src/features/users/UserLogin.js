import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { selectUsers } from './usersSlice';

import { isLoggedIn, loggedIn, selectLoggedUser } from './loggedUserSlice';

export const UserLogin = () => {
    const users = useSelector(selectUsers);
    const [username, setUsername] = useState('username');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('Enter a username and password');

    const dispatch = useDispatch();
    const history = useHistory();

    const onUsernameChanged = e => setUsername(e.target.value);
    const onPasswordChanged = e => setPassword(e.target.value);

    const onLoginClicked = () => {
        if (username && password) {
            const userFound = users.find(user => 
                    user.username===username &&
                    user.password===password);
            
            if (userFound) {
                dispatch(loggedIn(userFound));
                setMessage('Successfully Logged in!');
                setTimeout(history.push(`/RentsList`), 1000);
            } else {
                setMessage('Username or Password is wrong!');
            }
        }
    }

    return (
        <section>
            <h2>Login</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={onUsernameChanged}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onPasswordChanged}
                    required
                />
                <button type="button" onClick={onLoginClicked}>
                    Login
                </button>
                <p>{message}</p>
            </form>
        </section>
    )
}
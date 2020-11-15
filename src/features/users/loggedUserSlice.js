import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const initialState = { id: 'default', username: '', password: '' };

const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState,
    reducers: {
        loggedIn (state, action) {
            const { id, username, password } = action.payload;
            state.id = id;
            state.username = username;
            state.password = password;
        },
        loggedOut (state, action) {
            const { id, username, password } = initialState;
            state.id = id;
            state.username = username;
            state.password = password;
        },
    }
});

export const { loggedIn, loggedOut } = loggedUserSlice.actions;

/** 
 * If the current user equals the initial defaut user redirect to the login screen.
 */
export const isLoggedIn = (currentUser) => {
    if (currentUser !== initialState) {
        return  <Redirect  to="/UserLogin" />
    }
};

export const selectLoggedUser = state => state.loggedUser;

export default loggedUserSlice.reducer;
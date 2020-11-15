import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', username: 'user1', password: 'pass1' },
    { id: '2', username: 'user2', password: 'pass2' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded (state, action) {
            state.push(action.payload)
        },
    }
});

export const { userAdded } = usersSlice.actions;

export const selectUsers = state => state.users;

export default usersSlice.reducer;
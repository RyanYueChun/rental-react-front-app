import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', username: 'user1', password: 'pass1' },
    { id: '2', username: 'user2', password: 'pass2' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
});

export const selectUsers = state => state.users;

export default usersSlice.reducer;
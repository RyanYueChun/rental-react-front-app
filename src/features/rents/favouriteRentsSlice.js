import { createSlice } from '@reduxjs/toolkit';

const initialState = [ ]

const favouriteRentsSlice = createSlice({
    name: 'rents',
    initialState,
    reducers: {
        favouriteRentAdded (state, action) {
            state.push(action.payload);
        },
        favouriteRentRemoved (state, action) {
            return state.filter(e => e !== action.payload);
        },
    }
});

export const { favouriteRentAdded, favouriteRentRemoved } = favouriteRentsSlice.actions;

export const selectFavouriteRents = state => state.favouriteRents;

export default favouriteRentsSlice.reducer;
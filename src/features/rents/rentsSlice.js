import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'Paris boys', price: 550, address: '10 Avenue de Paris', availability: 'Available' },
    { id: '2', title: 'Paris girls', price: 350, address: '12 Avenue de Paris', availability: '12/12/2021' },
]

const rentsSlice = createSlice({
    name: 'rents',
    initialState,
    reducers: {

    }
});

export const selectRents = state => state.rents;

export default rentsSlice.reducer;
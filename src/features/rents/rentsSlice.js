import { createSlice } from '@reduxjs/toolkit';

export const available = 'Available';

const initialState = [
    { id: '1', title: 'Paris boys', price: 550, address: '10 Avenue de Paris', availability: available },
    { id: '2', title: 'Paris girls', price: 350, address: '12 Avenue de Paris', availability: '12/12/2021' },
    { id: '3', title: 'Bordeaux boys', price: 550, address: '10 Avenue de Bordeaux', availability: available },
    { id: '4', title: 'Bordeaux girls', price: 350, address: '12 Avenue de Bordeaux', availability: '12/12/2021' },
]

const rentsSlice = createSlice({
    name: 'rents',
    initialState,
    reducers: {
        rentUpdated (state, action) {
            const { id, title, price, address, availability } = action.payload;
            const existingRent = state.find(rent => rent.id === id);
            if (existingRent) {
                existingRent.title = title;
                existingRent.price = price;
                existingRent.address = address;
                existingRent.availability = availability;
            }
        }
    }
});

export const { rentUpdated } = rentsSlice.actions;

export const selectRents = state => state.rents;

export default rentsSlice.reducer;
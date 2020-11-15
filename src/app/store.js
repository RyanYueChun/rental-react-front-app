import { configureStore } from '@reduxjs/toolkit'

import usersReducer from '../features/users/usersSlice';

import loggedUserReducer from '../features/users/loggedUserSlice';

import rentsReducer from '../features/rents/rentsSlice';

import favouriteRentsReducer from '../features/rents/favouriteRentsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    loggedUser: loggedUserReducer,
    rents: rentsReducer,
    favouriteRents: favouriteRentsReducer,
  },
})

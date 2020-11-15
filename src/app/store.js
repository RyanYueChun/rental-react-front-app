import { configureStore } from '@reduxjs/toolkit'

import usersReducer from '../features/users/usersSlice';

import loggedUserReducer from '../features/users/loggedUserSlice';

import rentsReducer from '../features/rents/rentsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    loggedUser: loggedUserReducer,
    rents: rentsReducer,
  },
})

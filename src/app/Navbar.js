import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectLoggedUser, loggedOut } from '../features/users/loggedUserSlice'

export const Navbar = () => {
  const currentUser = useSelector(selectLoggedUser);

  const dispatch = useDispatch();

  let disconnectLink = (<p>Not logged in</p>);

  const logOut = () => {
    dispatch(loggedOut())
  }

  if (currentUser.id !== 'default') {
    disconnectLink = (<Link to="/" onClick={logOut}>Disconnect</Link>);
  }

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks"></div>
          {disconnectLink}
        </div>
      </section>
    </nav>
  )
}

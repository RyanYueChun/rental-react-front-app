import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';

import { UsersList } from './features/users/UsersList';

import { UserLogin } from './features/users/UserLogin';

import { RentsList } from './features/rents/RentsList';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (<UserLogin />)}
          />
          <React.Fragment>
            <Route exact path="/UsersList" component={UsersList} />
            <Route exact path="/RentsList" component={RentsList} />
          </React.Fragment>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App

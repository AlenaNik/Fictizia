import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserDetail from './UserDetail';
import User from './Users';
import Error from './Error';

function App() {
  
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/user">Users</Link>
          </li>
          <li>
            <Link to="/userdetails">User detail</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/userdetails">
          <UserDetail />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  </Router>

  );
}

export default App;

import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './InstagramProject/Login'
import Posts from './InstagramProject/Posts'

function App() {
  
  return (
     <Router>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route path='/posts'>
            <Posts/>
          </Route>
        </Switch>
     </Router>
  );
}

export default App;

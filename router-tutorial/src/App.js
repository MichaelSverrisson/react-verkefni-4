import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from 'Dashboard';
import Preferences from 'Preferences';
import { Login } from '../components/Login';

function App() {
  return (
    const [token, setToken] = useState();
  
    if(!token){
      return <Login setToken={setToken} />
    }
  
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/Preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
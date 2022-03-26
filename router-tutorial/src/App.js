import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { Index } from "./sidur/Index";
import { EventsPage } from "./sidur/Event";
import { LoginPage } from "./sidur/Login";
import { use } from "browser-sync";

export default function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [username, setUsername] = useState('');

  return(
    <Layout
          loggedIn={isLoggedIn}
          title='viðburðir'
          footer={
            <p>
              viðburðir frá{' '}
              <a href="https://vef2-20222-v3-synilausn.herokuapp.com/">
                Mömmu þinni
              </a>
            </p>
          }
    >
      <Routes>
        <Route exact path="/" element={<Index isLog={isLoggedIn} updLog={setLogin} isNam={username} updNam={setUsername}/>} />
        <Route exact path="/:id" element={<EventsPage isLog={isLoggedIn} updLog={setLogin} isNam={username} updNam={setUsername}/>} />
        <Route exact path="/login" element={<LoginPage isLog={isLoggedIn} updLog={setLogin} isNam={username} updNam={setUsername}/>} />
        <Route exact path="/logout" element={<LoginPage logginOut={true} isLog={isLoggedIn} updLog={setLogin} isNam={username} updNam={setUsername} />} />
      </Routes>
    </Layout>
  );
}

/*import React, { useState } from 'react';
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
import './App.css';
import Navbar from './Pages/navbar';
import { BrowserRouter as Redirect, Route, Switch } from 'react-router-dom';

import Home from "./Pages/Home";
import Helpme from './Pages/ListOfUsers';
import React from 'react';
import AddUserOrg from './Pages/AddUserOrg';
import { Router } from 'react-router-dom';

function App() {
  return (
    //<Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <Switch>
          <Route path="/list" component={Helpme} /> 
          <Route path="/" exact component={Home} />
          <Route path="/adduserOrg" component={AddUserOrg} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    </div>
    //</Router>
  );
} 
export default App;


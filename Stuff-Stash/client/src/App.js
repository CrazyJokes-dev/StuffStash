import './App.css';
import Navbar from './Pages/navbar';
import { BrowserRouter as Redirect, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import CreateOrg from "./Pages/CreateOrg";
import React from 'react';

function App() {
  return (
   //<Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Org" component={CreateOrg} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    </div>
    //</Router>
  );
} 
export default App;


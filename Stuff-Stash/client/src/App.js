import './App.css';
import Navbar from './Pages/navbar';
import { BrowserRouter as Redirect, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Helpme from "./Pages/ListOfUsers"
import React from 'react';
import { ReactSession } from 'react-client-session';
import CreateOrg from "./Pages/CreateOrg";
import RenameOrgPage from "./Pages/RenameOrg"

ReactSession.setStoreType('localStorage');



function App() {
  return (
   //<Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <Switch>
        <Route path="/list" component={Helpme} /> 
          <Route path="/Org" component={CreateOrg} />
          <Route path="/RenameOrg" component={RenameOrgPage} />
          <Route path="/" component={Home} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    </div>
    //</Router>
  );
} 
export default App;


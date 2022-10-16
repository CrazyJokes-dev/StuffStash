import "./App.css";
import Navbar from "./Pages/navbar";
import { ReactSession } from 'react-client-session';
import { BrowserRouter as Redirect, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Helpme from "./Pages/ListOfUsers";
import UserLogin from "./Pages/login";
import React from "react";

// sets storage type for session variables
ReactSession.setStoreType('localStorage');

function App() {
  return (
    //<Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <Switch>
          <Route path="/login" component={UserLogin} />
          <Route path="/list" component={Helpme} />
          <Route path="/" component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
    //</Router>
  );
}
export default App;
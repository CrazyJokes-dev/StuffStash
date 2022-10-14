/**
 * TODO:
 *  > Import correct components for user registration and login
 *  > Add routes that call those components
 */
import Navbar from "./components/common/navbar";
import { BrowserRouter as Redirect, Route, Switch } from "react-router-dom";
import welcome from "./components/welcome";
import Dashboard from "./components/dashboard";
import UserLogin from "./Pages/login";
import React from "react";

function App() {
  return (
    //<Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <Switch>
          <Route path="/" exact component={welcome} />
          <Route path="/login" exact component={UserLogin} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
    //</Router>
  );
}
export default App;

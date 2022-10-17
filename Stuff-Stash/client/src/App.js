import "./App.css";
import Navbar from "./Pages/navbar";
import { BrowserRouter as Redirect, Route, Switch } from "react-router-dom";


import Home from "./Pages/Home";
import Helpme from "./Pages/ListOfUsers";
import UserLogin from "./Pages/login";
import React from "react";
import RegForm from "./components/registrationform";
import { ReactSession } from 'react-client-session';
import CreateOrg from "./Pages/CreateOrg";
import RenameOrgPage from "./Pages/RenameOrg"

// sets storage type for session variables
ReactSession.setStoreType("localStorage");

function App() {
  return (
   //<Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <Switch>
          <Route path="/list" component={Helpme} />
          <Route path="/reg" component={RegForm} />
          <Route path="/" exact component={welcome} />
          <Route path="/login" exact component={UserLogin} />
          <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/Org" component={CreateOrg} />
          <Route path="/RenameOrg" component={RenameOrgPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
    //</Router>
  );
}
export default App;

//import "./App.css";
import Navbar from "./components/common/navbar";
import {
  BrowserRouter as Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Helpme from "./Pages/ListOfUsers";
import UserLogin from "./Pages/login";
import React, { useState } from "react";
import RegForm from "./components/registrationform";
import welcome from "./components/welcome2";
import Dashboard from "./Pages/dashboard";
import { ReactSession } from "react-client-session";
import CreateOrg from "./components/CreateOrg";
import CreateStockroom from "./Pages/CreateStockRoom";
import RenameOrgPage from "./components/RenameOrg";
import { Router } from "react-router-dom";
import AddUserOrg from "./Pages/AddUserOrg";
import viewstockroomFrontend from "./Pages/viewstockroomFrontend";
import AssetForm from "./Pages/addAssetForm";
// sets storage type for session variables
ReactSession.setStoreType("localStorage");

const user = ReactSession.get("username");

function App() {
  let pathname = window.location.pathname;
  let history = useHistory();

  function checkRefresh() {
    console.log(pathname);
    history.push("/");
    window.location.reload();
  }

  // when this constant is called, it checks if there is a username stored in the session variables
  const isLoggedIn = () => {
    if (user != null) {
      console.log(user);
      return true;
    } else {
      return false;
    }
  };

  return (
    //<Router>
    <div className="App">
      {!isLoggedIn() &&
      pathname !== "/" &&
      pathname !== "/reg" 
        ? (checkRefresh(), (pathname = window.location.pathname))
        : console.log("Rerouting")}
      <div className="content">
        <Switch>
          <Route path="/list" exact component={Helpme} />
          <Route
            path="/viewstockroomFrontend"
            exact
            component={viewstockroomFrontend}
          />
          <Route path="/reg" exact component={RegForm} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/Org" exact component={CreateOrg} />
          <Route path="/RenameOrg" exact component={RenameOrgPage} />
          <Route path="/createStockRoom" exact component={CreateStockroom} />
          <Route path="/adduserOrg" exact component={AddUserOrg} />
          <Route path="/addAssetForm" exact component={AssetForm} />

          <Route path="/" exact component={welcome} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
    //</Router>
  );
}
export default App;

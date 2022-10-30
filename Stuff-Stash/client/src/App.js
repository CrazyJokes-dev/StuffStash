//import "./App.css";
import Navbar from "./components/common/navbar";
import { BrowserRouter as Redirect, Route, Switch } from "react-router-dom";
import Helpme from "./Pages/ListOfUsers";
import UserLogin from "./Pages/login";
import React from "react";
import RegForm from "./components/registrationform";
import welcome from "./components/welcome";
import Dashboard from "./components/dashboard";
import { ReactSession } from "react-client-session";
import CreateOrg from "./components/CreateOrg";
import CreateStockroom from "./Pages/CreateStockRoom";
import RenameOrgPage from "./components/RenameOrg";
import { Router } from "react-router-dom";
import AddUserOrg from "./Pages/AddUserOrg";
import OrgViewDashboard from "./components/orgView";
import viewstockroomFrontend from "./Pages/viewstockroomFrontend";
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
          <Route
            path="/viewstockroomFrontend"
            component={viewstockroomFrontend}
          />
          <Route path="/reg" component={RegForm} />
          <Route path="/login" exact component={UserLogin} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/Org" component={CreateOrg} />
          <Route path="/RenameOrg" component={RenameOrgPage} />
          <Route path="/createStockRoom" component={CreateStockroom} />
          <Route path="/OrgViewDashboard" component={OrgViewDashboard} />
          <Route path="/adduserOrg" component={AddUserOrg} />
          <Route path="/" exact component={welcome} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
    //</Router>
  );
}
export default App;

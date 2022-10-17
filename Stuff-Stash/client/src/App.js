import "./App.css";
import Navbar from "./Pages/navbar";
import { BrowserRouter as Redirect, Route, Switch } from "react-router-dom";
import { ReactSession } from "react-client-session";

import Home from "./Pages/Home";
import viewstockroomFrontend from "./Pages/viewstockroomFrontend";
import Helpme from "./Pages/ListOfUsers";
import React from "react";

ReactSession.setStoreType("localStorage");

function App() {
  return (
    //<Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <Switch>
          <Route path="/list" component={Helpme} />
          <Route path="/viewstockroom" component={viewstockroomFrontend} />
          <Route path="/" component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
    //</Router>
  );
}
export default App;

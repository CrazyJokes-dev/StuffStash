import Navbar from "./components/common/navbar";
import { BrowserRouter as Redirect, Route, Switch } from "react-router-dom";
import welcome from "./components/welcome";
import React from "react";

function App() {
  return (
    //<Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <Switch>
          <Route path="/" exact component={welcome} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
    //</Router>
  );
}
export default App;

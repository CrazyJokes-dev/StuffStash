import React from "react";
import "./styles/welcome.css";
import "./styles/bg.css";

const welcome = () => {
  return (
    <React.Fragment>
      <div className="bg fill d-flex align-items-center justify-content-center area">
        <div className="row">
          <div className="col d-flex align-items-center text-center justify-content-center">
            <div className="jumbotron">
              <h1 className="display-1">Welcome to Stuff Stash</h1>
              <p className="lead">The all in one Asset Manager</p>
            </div>
          </div>
          <div className="col m-5"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default welcome;

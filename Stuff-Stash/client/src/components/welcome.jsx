import React from "react";
import "./styles/welcome.css";

const welcome = () => {
  return (
    <React.Fragment>
      <div className="container-fluid bg-warning h-100 green">
        <div className="row bg-danger">
          <div className="col d-flex align-items-center text-center justify-content-center bg-primary">
            <div className="jumbotron">
              <h1 className="display-4">Welcome to Stuff Stash</h1>
              <p className="lead">The all in one Asset Manager</p>
            </div>
          </div>
          <div className="col bg-secondary m-5"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default welcome;

import React from "react";


const welcome = () => {
  return (
    <div className="container-fluid bg-warning">
      <div className="row bg-danger text-center">
        <div className="col">
          <div className="jumbotron bg-primary h-100">
            <h1 className="display-4">Welcome to Stuff Stash</h1>
            <p className="lead">The all in one Asset Manager</p>
          </div>
        </div>
        <div className="col bg-secondary">
          <h1>LOGIN COMPONENT GOES HERE (MAYBE?)</h1>
        </div>
      </div>
    </div>
  );
};

export default welcome;

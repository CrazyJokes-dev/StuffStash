import React, { Component } from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid p-5">
        <div className="row text-center">
          <header className="p-2">Welcome to your Dashboard!</header>
          <div className="col">{/** EMPTY SPACING COLUMN */}</div>
          <div className="col">
            {/** CONTENT */}
            <button type="button" className="btn btn-success m-1">
              Create Organization
            </button>
            <button type="button" className="btn btn-danger m-1">
              Log Out
            </button>
            <div className="btn btn-warning m-1">
              <Link to="/" exact style={linkStyle}>
                Home
              </Link>
            </div>
          </div>
          <div className="col">{/** EMPTY SPACING COLUMN */}</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

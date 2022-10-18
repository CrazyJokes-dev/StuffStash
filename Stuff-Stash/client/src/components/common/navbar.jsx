import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
        <span className="navbar-brand mx-2">Stuff Stash</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/reg" className="nav-link">
                Register User
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                to="/login"
                className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/RenameOrg" className="nav-link">
                Rename Org
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/viewstockroomFrontend" className="nav-link">
                View StockRoom
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/adduserOrg" className="nav-link">
                Add users to org
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

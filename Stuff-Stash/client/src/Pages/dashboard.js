import React, { Component } from "react";
import { ReactSession } from "react-client-session";
import { Link } from "react-router-dom";
import "./styles/dashboardStyles.css";
import OrgViewDashboard from "../components/orgView";

import UserProfile from "../components/UserProfile";
//styles -----------------------------

const styling = {
  width: "300px",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

//-------------------------------------

const logoutUser = async (e) => {
  ReactSession.remove("username");
  ReactSession.remove("orgID");
  alert("You are now logged out!");
};

const username = ReactSession.get("username");

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="back container-fluid d-flex m-0 p-0">
        {/** COL 1 -- LEFT SIDE */}
        <div className="leftDisplay">
          <div className="container-fluid userDisplay d-flex justify-content-center shadow">
            {/** Div for welcoming user. Will house any relelvent user info (username, num of orgs in??, num of items checked out??) */}
            <UserProfile />
          </div>
          <div className="container-fluid orgDisplay p-1 justify-content-center">
            {/** Div for displaying the orgs relating to user that is signed in. Should be in some sort of scrollable list. Each item will be clickable*/}
            <OrgViewDashboard />
          </div>
          <div className="d-flex buttonDisplay p-2 justify-content-center">
            {/** Div for displaying the buttons to create an org or join existing or via orgID */}
            <div className="btn btn-success m-1 button button1">
              <Link to="/adduserOrg" exact style={linkStyle}>
                Join Existing Organization
              </Link>
            </div>
            <div className="btn btn-success m-1 button button2">
              <Link to="/org" exact style={linkStyle}>
                Create Organization
              </Link>
            </div>
            <div
              className="btn btn-success m-1 button button1"
              onClick={logoutUser}
            >
              <Link to="/#" exact style={linkStyle}>
                Logout
              </Link>
            </div>
          </div>
        </div>
        {/** COL 2 -- RIGHT SIDE */}
        <div className="container-fluid rightDisplay col">
          <div className="d-flex stckRoomDisplay justify-content-center">
            {/** Div for displaying stockrooms of org when org button or link is clicked*/}
            STOCKROOM DISPLAY
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
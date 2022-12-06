import React, { Component } from "react";

import { ReactSession } from "react-client-session";
import { Link } from "react-router-dom";
import "./styles/dashboardStyles.css";
import "./styles/scrollbarStyle.css";
import OrgViewDashboard from "../components/orgView";
import StockRoomViewDashboard from "../components/StockRoomViewDashboard";
import UserProfile from "../components/UserProfile";
import ViewMembers from "../components/ViewMembers";
import Assetcard from "../components/assetCard";

//styles -----------------------------
const linkStyle = {
  textDecoration: "none",
  color: "white",
};
//-------------------------------------

const logoutUser = async (e) => {
  ReactSession.remove("username");
  ReactSession.remove("orgID");
  ReactSession.remove("selectedOrg");
  alert("You are now logged out!");
  window.location.reload();
};

const username = ReactSession.get("username");

//const currentOrg = ReactSession.get("selectedOrg");
//console.log(currentOrg);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { org: " " };
  }
  toggleOrg = (orgname) => {
    this.setState((state) => ({ org: orgname }));
    document.getElementById("AssetList").setAttribute("hidden", "hidden");
  };

  render() {
    return (
      <React.Fragment>
        <div className="b2">
          <div className="back-ground container-fluid d-flex m-0 p-0">
            {/** COL 1 -- LEFT SIDE */}
            <div className="leftDisplay">
              <div className="container-fluid userDisplay d-flex justify-content-center">
                {/** Div for welcoming user. Will house any relelvent user info (username, num of orgs in??, num of items checked out??) */}
                <UserProfile />
              </div>

              <div className="container-fluid orgDisplay p-1 justify-content-center">
                {/** Div for displaying the orgs relating to user that is signed in. Should be in some sort of scrollable list. Each item will be clickable*/}
                <span className="display-5 p-3" style={{ color: "white" }}>
                  Current
                </span>{" "}
                <br />
                <span className="display-6 p-3" style={{ color: "white" }}>
                  Organizations
                </span>
                <OrgViewDashboard onClick={this.toggleOrg} />
              </div>
              <div className="d-flex flex-column buttonDisplay p-2 justify-content-center">
                {/** Div for displaying the buttons to create an org or join existing or via orgID */}
                <div className="btn btn-success m-1 button button1 btn-color">
                  <Link to="/adduserOrg" exact style={linkStyle}>
                    Join Existing Organization
                  </Link>
                </div>
                <div className="btn btn-success m-1 button button2 btn-color">
                  <Link to="/org" exact style={linkStyle}>
                    Create Organization
                  </Link>
                </div>
                <div className="btn btn-success m-1 button button1 btn-color">
                  <Link to="/createStockRoom" exact style={linkStyle}>
                    Create Stockroom
                  </Link>
                </div>
                <div
                  className="btn btn-success m-1 button button1 btn-color"
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
              <div className="stckRoomDisplay justify-content-center">
                <span className="display-3">
                  Current Stockrooms In {this.state.org}
                </span>
                {/** Div for displaying stockrooms of org when org button or link is clicked*/}
                <ul className="stockroom-list list-group list-group-flush">
                  <StockRoomViewDashboard orgName={this.state.org} />
                </ul>
              </div>
            </div>
            {/** COL 3 -- RIGHT SIDE */}
            <div>
              <div className="orgMembersDisplay justify-content-center white">
                <span className="display-7">
                  <b>Organization Members</b>
                </span>
                {/** Div for displaying stockrooms of org when org button or link is clicked*/}
                <ul className="stockroom-list list-group list-group-flush white">
                  <ViewMembers orgName={this.state.org} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;

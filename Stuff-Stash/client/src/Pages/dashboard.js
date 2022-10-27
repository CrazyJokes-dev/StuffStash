import React, { Component } from "react";
import { ReactSession } from "react-client-session";
import { Link } from "react-router-dom";
import "./styles/dashboardStyles.css";

import UserProfile from "../components/UserProfile";

//styles -----------------------------
const styling = {
  width: "300px",
};
//-------------------------------------

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const logoutUser = async (e) => {
  ReactSession.remove("username");
  ReactSession.remove("orgID");
  alert("You are now logged out!");
};

//this returns undefined when logged in ??? -Matt
const username = ReactSession.get("username");
console.log(username);

class Dashboard extends Component {
  state = {};
  render() {
    return (
      // <div className="container-fluid p-5">
      //   <div className="row text-center">
      //     <header className="p-2">Welcome to your Dashboard!</header>
      //     <div className="col">{/** EMPTY SPACING COLUMN */}</div>
      //     <div className="col">
      //       {/** CONTENT */}
      //       <div className="btn btn-success m-1">
      //         <Link to="/org" exact style={linkStyle}>
      //           Create Organization
      //         </Link>
      //       </div>
      //       <div className="btn btn-success m-1">
      //         <Link to="/org" exact style={linkStyle}>
      //           Join Existing Organization
      //         </Link>
      //       </div>
      //       {/* <div className="btn btn-primary m-1">
      //         <Link to="/createStockRoom" exact style={linkStyle}>
      //           Create Stockroom
      //         </Link>
      //       </div> */}
      //       <hr></hr>
      //       <button onClick={logoutUser} type="button" className="btn btn-danger m-1">
      //         Log Out
      //       </button>
      //       {/* <div className="btn btn-warning m-1">
      //         <Link to="/" exact style={linkStyle}>
      //           Home
      //         </Link>
      //       </div> */}
      //     </div>
      //     <div className="col">{/** EMPTY SPACING COLUMN */}</div>
      //   </div>
      // </div>

      <div className="back container-fluid d-flex m-0 p-0">
        {/** COL 1 -- LEFT SIDE */}
        <div className="leftDisplay bg-info p-2 ">
          <div className="userDisplay d-flex bg-danger justify-content-center">
            {/** Div for welcoming user. Will house any relelvent user info (username, num of orgs in??, num of items checked out??) */}

            <UserProfile />
          </div>
          <div className="container-fluid orgDisplay p-1 justify-content-center">
            {/** Div for displaying the orgs relating to user that is signed in. Should be in some sort of scrollable list. Each item will be clickable*/}
            {/** --- FOR EXAMPLE ONLY -- REMEMBER TO REMOVE --- */}
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent">
                <div className="btn btn-primary">
                  <Link to="#" exact style={linkStyle}>
                    Example Org 1
                  </Link>
                </div>
              </li>
              <li className="list-group-item bg-transparent">
                <div className="btn btn-primary">
                  <Link to="#" exact style={linkStyle}>
                    Example Org 2
                  </Link>
                </div>
              </li>
            </ul>
            {/** --- */}
          </div>
          <div className="d-flex buttonDisplay bg-success p-2 justify-content-center sticky-bottom">
            {/** Div for displaying the buttons to create an org or join existing or via orgID */}
            BUTTON DISPLAY
          </div>
        </div>
        {/** COL 2 -- RIGHT SIDE */}
        <div className="container-fluid rightDisplay p-0 col-md">
          <div className="d-flex stckRoomDisplay justify-content-center">
            {/** Div for displaying stockrooms of org when org button or link is clicked*/}
            STOCK ROOM DISPLAY
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

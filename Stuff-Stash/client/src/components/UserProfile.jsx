import { useState } from "react";
import { ReactSession } from "react-client-session";
import { useHistory } from "react-router-dom";
import React, { Component } from "react";

// <img src={require("./sour_patch.jpg")/>
const user = ReactSession.get("username");
//for debug will display name of user currently logged in
console.log(user);

class UserProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="userDiv">
          <p>Welcome {user}</p>
        </div>
        <div class="col-sm">
          <div class="container-sm">
            <img className="imgDiv" src={require("./sour_patch.jpg")} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserProfile;

import { useState } from "react";
import { ReactSession } from "react-client-session";
import { useHistory } from "react-router-dom";
import React, { Component } from "react";

function getUsername() {
  window.location.reload();
  return ReactSession.get("username");
}

class UserProfile extends Component {
  render() {
    const user = ReactSession.get("username");
    console.log(user);
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

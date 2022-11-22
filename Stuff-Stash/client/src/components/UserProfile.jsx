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
        <div className="userDiv display-6">
          <p>Welcome {user}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default UserProfile;

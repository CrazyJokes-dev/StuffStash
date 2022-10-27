import { useState } from "react";
import { ReactSession } from "react-client-session";
import { useHistory } from "react-router-dom";
import React, { Component } from "react";

const user = ReactSession.get("username");
//for debug will display name of user currently logged in
console.log(user);

class UserProfile extends Component {
  render() {
    return (
      <div className="userDiv">
        <p>Welcome {user}</p>
      </div>
    );
  }
}

export default UserProfile;

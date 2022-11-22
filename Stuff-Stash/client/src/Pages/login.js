import React, { useState } from "react";
import { ReactSession } from "react-client-session"; // client session chocolate chip cookies ( yum! -matt )
import { useHistory } from "react-router-dom"; // This allows you to send people to another page

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory(); //must be declared like this inside of the function

  const loginUser = async (e) => {
    e.preventDefault();
    // const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/login', {
    const res = await fetch(
      "http://localhost:3000/api/v1/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );
    const data = res.json();
    console.log("data -- ", data);
    console.log(res.status);
    if (res.status === 200) {
      data.then((vars) => {
        ReactSession.set("username", vars.user.username);
        ReactSession.set("orgID", vars.user.organizationID);
      });
      history.push("/dashboard"); //sends the user to the home page if the login information is authenticated
      window.location.reload();
    } else {
      data.then((response) => {
        alert(response.msg);
      }); //This pops up an alert box on screen with the response's json msg we sent in server/index.js
    }

    // setUsername("");
    // setPassword("");
  };

  return (
    <React.Fragment>
      <div className="col m-5  ">
        <div className="row">
          <div className="col-sm m-5 ">
            <h2>User Login</h2>
            <form onSubmit={loginUser} className="justify-content-center">
              <div className="form-group">
                <label htmlFor="Username" className="text-white">
                  Username:
                </label>
                <input
                  type="Username"
                  className="form-control"
                  id="Username"
                  placeholder="Enter username"
                  name="Username"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pwd" className="text-white">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="pwd"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>

              <div className="checkbox-inline ">
                <input
                  className="form-check-label col-sm-1  "
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="stay logged in">
                  Remember Me
                </label>
              </div>
              <div className="container">
                <div className="col-md-12 text-center">
                  <button type="login" className="btn btn-primary  m-2 p-1">
                    Login
                  </button>

                  <a href="/reg" className="btn btn-primary  m-3 p-1 ">
                    Sign up
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserLogin;

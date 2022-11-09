import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function RegForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [organizationID, setOrganizationID] = useState("");

  let history = useHistory();

  const createUser = async (e) => {
    e.preventDefault();
    // const res = await fetch(
    // "https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/createUser",
    // {
    const res = await fetch("https://stuffstash-a8fm9.ondigitalocean.app/api/v1/users/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password2,
        organizationID,
      }),
    });

    const data = res.json();
    console.log("data -- ", data);
    console.log(res.status);

    //Alerts
    if (res.status === 200) {
      alert("Registration Successful");
      history.push("/");
    } else if (res.status === 400 || 401) {
      alert("Correct errors");
    }

    //Error labels for inputs
    if (res.status === 400) {
      // alert("User already exists");
      document.getElementById("id1").innerHTML = "User already exists";
      document.getElementById("id1").style.color = "#Ff0000";
    }
    if (username.length < 6) {
      // alert("Username must be longer then 6 chars");
      document.getElementById("id1").innerHTML =
        "Username must be longer then 6 chars";
      document.getElementById("id1").style.color = "#Ff0000";
    }
    if (password.length < 6 || password.search(/\d/) == -1) {
      // alert("password must be longer then 6 chars");
      document.getElementById("id2").innerHTML =
        "password must be longer then 6 characters and contain a dight";
      document.getElementById("id2").style.color = "#Ff0000";
    }
    if (password != password2) {
      // alert("Password does not match");
      document.getElementById("id3").innerHTML = "Password does not match";
      document.getElementById("id3").style.color = "#Ff0000";
    }
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <h2>Create an Account</h2>
          <form onSubmit={createUser}>
            <div class="form-group m-3">
              <label for="Username">Username:</label>
              <input
                type="Username"
                required
                class="form-control"
                id="Username"
                placeholder="Enter username"
                name="Username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <label id="id1"></label>
            </div>

            <div class="form-group m-3">
              <label for="pwd">Password:</label>
              <input
                type="password"
                required
                class="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pwd"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <label id="id2"></label>
            </div>

            <div class="form-group m-3">
              <label class="form-label" for="repeat password">
                Repeat Password
              </label>
              <input
                type="repeat password"
                required
                id="repeat password"
                class="form-control"
                placeholder="Enter password again"
                onChange={(event) => {
                  setPassword2(event.target.value);
                }}
              />
              <label id="id3"></label>
            </div>
            <div class="form-group m-3">
              <label class="form-label" for="organization ID">
                Organization ID (Optional)
              </label>
              <input
                type="Organization ID"
                id="Organization ID"
                class="form-control"
                placeholder="Enter organization ID"
                onChange={(event) => {
                  setOrganizationID(event.target.value);
                }}
              />
              <label id="id4"></label>
            </div>
            <button type="submit" class="btn btn-primary m-3">
              Submit
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  );
}

export default RegForm;

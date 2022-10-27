import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom"

function RegForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [organizationID, setOrganizationID] = useState("");

  let history = useHistory();

  const createUser = async (e) => {
    e.preventDefault();
     const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/createUser', {
    //const res = await fetch('http://localhost:3000/api/v1/users/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        organizationID
      })
    })
    
    const data = res.json();
    console.log('data -- ', data);
    console.log(res.status);
    if (res.status === 200 ) {
      history.push("/");
    } else if (res.status === 399) {
      alert("Please enter a username and a password");
    } else if (res.status === 400) {
      alert("User already exists");
    }
    setUsername('');
    setPassword('');
    setOrganizationID('');
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
                class="form-control"
                id="Username"
                placeholder="Enter username"
                name="Username"
                onChange={(event) => {setUsername(event.target.value);}}
              />
            </div>

            <div class="form-group m-3">
              <label for="pwd">Password:</label>
              <input
                type="password"
                class="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pwd"
                onChange={(event) => {setPassword(event.target.value);}}
              />
            </div>

            <div class="form-group m-3">
              <label class="form-label" for="repeat password">
                Repeat Password
              </label>
              <input
                type="repeat password"
                id="repeat password"
                class="form-control"
                placeholder="Enter password again"
              />
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
                onChange={(event) => {setOrganizationID(event.target.value);}}
              />
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

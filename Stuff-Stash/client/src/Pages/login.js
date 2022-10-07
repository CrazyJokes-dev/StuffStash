import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // This allows you to send people to another page


function UserLogin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory(); //must be declared like this inside of the function

  const loginUser = async (e) => {
    e.preventDefault();
    // const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/users/login', {
    const res = await fetch('http://localhost:3000/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    const data = res.json();
    console.log('data -- ', data);
    console.log(res.status);
    if (res.status !== 400 ) {
      history.push("/"); //sends the user to the home page if the login information is authenticated
    }
    setUsername("");
    setPassword("");
  };


  return (
    <React.Fragment>
      <span class="border border-1">
        <div class="container-sm bg-secondary text-light">
          <img
            src="https://img.icons8.com/bubbles/100/000000/user.png"
            class="img-thumbnail"
            alt="user"
          />

          <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
              <h2>User Login</h2>
              <form onSubmit={loginUser} class="justify-content-center">
                <div class="form-group">
                  <label for="Username" class="text-white">
                    Username:
                  </label>
                  <input
                    type="Username"
                    class="form-control"
                    id="Username"
                    placeholder="Enter username"
                    name="Username"
                    onChange={(event) => {setUsername(event.target.value);}}
                  />
                </div>

                <div class="form-group">
                  <label for="pwd" class="text-white">
                    Password:
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="pwd"
                    onChange={(event) => {setPassword(event.target.value);}}
                  />
                </div>

                <div class="form-check">
                  <input
                    class="form-check-label col-sm-1"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="stay logged in">
                    Remember Me
                  </label>
                </div>

                <button type="login" class="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
            <div class="col-sm"></div>
          </div>
        </div>
      </span>
    </React.Fragment>
  );
}

export default UserLogin;

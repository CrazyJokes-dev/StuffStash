import React from "react";

function UserLogin() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <h2>User Login</h2>
          <form action="/action_page.php">
            <div class="form-group">
              <label for="Username" class="text-primary">
                Username:
              </label>
              <input
                type="Username"
                class="form-control"
                id="Username"
                placeholder="Enter username"
                name="Username"
              />
            </div>

            <div class="form-group">
              <label for="pwd" class="text-primary">
                Password:
              </label>
              <input
                type="password"
                class="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pwd"
              />
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
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
  );
}

export default UserLogin;

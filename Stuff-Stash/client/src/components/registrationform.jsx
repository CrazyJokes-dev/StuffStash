import React from "react";

function RegForm() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <h2>Create an Account</h2>
          <form>
            <div class="form-group m-3">
              <label for="Username">Username:</label>
              <input
                type="Username"
                class="form-control"
                id="Username"
                placeholder="Enter username"
                name="Username"
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

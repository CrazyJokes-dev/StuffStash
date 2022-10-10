import React from "react";
import { Button, Form } from "react-bootstrap";

function LoginUser() {
  return (
    <React.Fragment>
      <div className="container-fluid bg-warning">
        <div className="row bg-danger text-center">
          <div className="col">
            <div className="jumbotron bg-primary h-100">
              <h1 className="display-4">Welcome to Stuff Stash</h1>
              <p className="lead">The all in one Asset Manager</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col bg-secondary">
        <div className="col">
          <h1>LOGIN COMPONENT GOES HERE (MAYBE?)</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formKeepLoggedIn">
              <Form.Check type="checkbox" label="Remeber Me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginUser;

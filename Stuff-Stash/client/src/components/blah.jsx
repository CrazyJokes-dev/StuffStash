import React from "react";
import { Button, Form } from "react-bootstrap";

function LoginUser() {
  return (
    //We still need to make sure we understand how to pass data with the React Forms
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default LoginUser;

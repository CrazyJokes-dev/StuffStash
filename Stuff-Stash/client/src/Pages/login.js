import { Button, Form } from "react-bootstrap";

function UserLogin() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
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
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  );
}

export default UserLogin;

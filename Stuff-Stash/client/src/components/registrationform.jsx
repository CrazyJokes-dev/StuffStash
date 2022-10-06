import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RegForm() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <Form>
            <fieldset disabled>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="Username">Username</Form.Label>
                <Form.Control id="Username" placeholder="Enter username" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="Password">New Password</Form.Label>
                <Form.Control id="Password" placeholder="Enter new password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="Repeat Password">
                  Retype Password
                </Form.Label>
                <Form.Control
                  id="Repeat Password"
                  placeholder="Enter password again"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="Organization ID">
                  Organization ID (Optional)
                </Form.Label>
                <Form.Control
                  id="Organization ID"
                  placeholder="Enter Organization ID"
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </fieldset>
          </Form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  );
}

export default RegForm;

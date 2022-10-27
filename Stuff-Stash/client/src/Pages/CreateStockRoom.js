import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function AddOrgUser() {
  const [stockRoom, setStockRoom] = useState("");
  const [userID, setUserID] = useState("");
  function validateForm() {
    return userID.length > 0 || stockRoom.lengh > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="addCreateStockRoom container">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <Form onSubmit="{handleSubmit}">
            <Form.Group size="sm" controlId="stockRoom orgID">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
              />
              <Form.Label>Enter Stockroom</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={stockRoom}
                onChange={(e) => setStockRoom(e.target.value)}
              />
            </Form.Group>

            <Button
              className="m-3"
              block
              size="sm"
              type="submit"
              disabled="{!validateForm()}"
            >
              Create Stockroom
            </Button>
          </Form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

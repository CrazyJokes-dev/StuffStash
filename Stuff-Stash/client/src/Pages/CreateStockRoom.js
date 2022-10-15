import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function AddStockroom() {
    const [stockRoomName, setStockRoomName] = useState("");
    // const [userID, setUserID] = useState("");

    const addStockroom = async (e) => {
      e.preventDefault();
      console.log("got here");
      const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/addStockroom/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          stockRoomName,
          "org":"A123"
          // SESSION STUFF GOES HERE!
        })
      })
      setStockRoomName('');
    };


    return (
    <div className="addCreateStockRoom container">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <Form onSubmit={addStockroom}>
            <Form.Group size="sm" controlId="stockRoom orgID">
              <Form.Label>Enter Stockroom Name</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={stockRoomName}
                onChange={(e) => setStockRoomName(e.target.value)}
              />
            </Form.Group>

            <Button
              className="m-3"
              block
              size="sm"
              type="submit"
              // disabled="{!validateForm()}"
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

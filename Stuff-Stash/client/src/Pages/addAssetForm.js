import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ReactSession } from 'react-client-session';
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default function AssetForm() {
  const [stockRoomName, setStockRoomName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [category, setCategory] = useState("");

  const addAsset = async (e) => {
    
  }






//rendering
  return (
    <React.Fragment>
          <div className="bg fill d-flex align-items-center justify-content-center area p-5">
          <div className="col d-flex align-items-center text-center justify-content-center">
              <div className="col"></div>
              <div className="col">
                <Form onSubmit={addAsset}>
                  <Form.Group size="sm" controlId="stockroomName">
                    <Form.Label>Enter Stockroom Name</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      value={stockRoomName}
                      onChange={setStockRoomName}
                    />
                  </Form.Group>
                  <Form.Group size = "sm" controlId="assetIdentifier">
                    <Form.Label>Enter Asset Identifier</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      value={identifier}
                      onChange={setIdentifier}
                    />
                  </Form.Group>
                  <Form.Group size = "sm" controlId="assetCategory">
                    <Form.Label>Enter Asset Category</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      value={category}
                      onChange={setCategory}
                    />
                  </Form.Group>
                  <Button
                    className="m-3"
                    block
                    size="sm"
                    type="submit"
                  >
                    Add Asset
                  </Button>

                </Form>
              </div>
              <div className="col"></div>
            </div>
          </div>
      </React.Fragment>
  );
}


import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function AssetForm() {
  const [stockroomName, setStockRoomName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [category, setCategory] = useState("");
  let history = useHistory();

  const addAsset = async (e) => {
    e.preventDefault();
    //const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/addStockroom/', {
    const res = await fetch("https://stuffstash-a8fm9.ondigitalocean.app/api/v1/addAsset", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stockroomName: stockroomName,
        asset:{
          identifier: identifier,
          category: category,
          isAvailable: "true"
        }
      })
    })
    const data = res.json();
    if (res.status == 200) {
      alert("Successfully created " + identifier + " under the Stockroom named " + stockroomName + "!");
    }
    history.push("/dashboard");
  }

  const handleStockName = (e) => {
    setStockRoomName(e.target.value);
  }

  const handleIdentifier = (e) => {
    setIdentifier(e.target.value);
  }

  const handleCategory = (e) => {
    setCategory(e.target.value);
  }

  function checkSubmission()
  {
    if (!stockroomName || !category || !identifier)
      return true;
    else
      return false;
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
                      value={stockroomName}
                      onChange={handleStockName}
                    />
                  </Form.Group>
                  <Form.Group size = "sm" controlId="assetIdentifier">
                    <Form.Label>Enter Asset Identifier</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      value={identifier}
                      onChange={handleIdentifier}
                    />
                  </Form.Group>
                  <Form.Group size = "sm" controlId="assetCategory">
                    <Form.Label>Enter Asset Category</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      value={category}
                      onChange={handleCategory}
                    />
                  </Form.Group>
                  <Button
                    className="m-3"
                    block
                    size="sm"
                    type="submit"
                    disabled={checkSubmission()}
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


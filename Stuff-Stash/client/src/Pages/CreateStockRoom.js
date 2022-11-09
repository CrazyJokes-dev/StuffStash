import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ReactSession } from 'react-client-session';
import { useHistory } from "react-router-dom";
import Axios from "axios";



export default function AddStockroom() {
  const [stockRoomName, setStockRoomName] = useState("");
  const [listOfOrgs, setListOfOrgs] = useState([]);
  const [orgName, setOrgName] = useState("");
  const [error, setError] = useState();
  const username = ReactSession.get("username");
  let history = useHistory();

  useEffect(() => {
    Axios.get(`https://stuffstash-a8fm9.ondigitalocean.app/api/v1/orgs/OrgView/${username}`)
      .then((response) => {
        setListOfOrgs(response.data.organizationID.map(organizationID => organizationID.name));
      })
      .catch((err) => {
        setError(err);
      });
  }, [username]);

  const addStockroom = async (e) => {
    e.preventDefault();
    //const res = await fetch('https://api-dot-techstack-demo-deployment.ue.r.appspot.com/api/v1/addStockroom/', {
    const res = await fetch("https://stuffstash-a8fm9.ondigitalocean.app/api/v1/addStockroom", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: stockRoomName,
        org: orgName
      })
    })

    const data = res.json();
    if (res.status == 200) {
      alert("Successfully created " + stockRoomName + " under the Organization named " + orgName + "!");
    }
    history.push("/dashboard");
  }


const handleStockName = (e) => {
  setStockRoomName((e.target.value).trimStart());
}

const handleOrgName = (e) => {
  setOrgName(e.target.value);
}


function checkSubmission()
{
  if (!stockRoomName || (!orgName || orgName == "..."))
    return true;
  else
    return false;
}


return (
  <React.Fragment>
      <div className="bg fill d-flex align-items-center justify-content-center area p-5">
      <div className="col d-flex align-items-center text-center justify-content-center">
          <div className="col"></div>
          <div className="col">
            <Form onSubmit={addStockroom}>
              <Form.Group size="sm" controlId="stockRoom orgID">
                <Form.Label>Enter Stockroom Name</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  value={stockRoomName}
                  onChange={handleStockName}
                />
              </Form.Group>
              <br></br>

              <Form.Label>Select an Organization to Create the Stockroom In</Form.Label>
              <Form.Select aria-label="Default select example" onChange={handleOrgName}>
                <option>...</option>
                {listOfOrgs.map(name=> (
                    <option value = {name}>{name}</option>
                ))}
              </Form.Select>

              <Button
                className="m-3"
                block
                size="sm"
                type="submit"
                disabled={checkSubmission()}
              >
                Create Stockroom
              </Button>

            </Form>
          </div>
          <div className="col"></div>
        </div>
      </div>
  </React.Fragment>
 )
};
import React, { useState } from "react";
import "./styles/assetCard.css";
import UpdateForm from "../utils/UpdateForm";
import { ReactSession } from "react-client-session";

const Assetcard = (props) => {
  const [flip, setFlip] = useState(false);
  var stockroom=ReactSession.get("selectedStockroom");
  var identifier =props.name;
  ReactSession.set("identiferName", identifier);
  
  function test() {
    return (
      <span className="edit-opt" onClick={() => setFlip(!flip)}>
        EDIT
        <span className="edit-ico">&#8594;</span>
      </span>
    );
  }
  const deleteAsset = async (event) => {
   try {
    const response = await fetch("http://localhost:3000/api/v1/deleteAsset", {
      method: "POST",
      body: JSON.stringify({
        stockroomName:stockroom,
        identifier:identifier,
        
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    
    const result = await response.json();

    console.log("result is: ", JSON.stringify(result, null, 4));
  } catch (err) {
  } finally {
    window.location.reload();
  }
  };


  return (
    <React.Fragment>
      {/** overall container for card */}
      <div className={`card-grid card ${flip ? "flip" : ""}`}>
        <div className="front row">
          <div className="edit-btn">
            <div className="edit-icon black" onClick={() => setFlip(!flip)}>
              &#9998;
            </div>
          </div>
          {/** left side container -- has static img and avail, warrenty, condition */}
          <div className="left__card col">
            {/** contains img and avail */}
            <div className="img-container">
              <img
                src="https://media.istockphoto.com/id/1165294902/vector/desktop-computer-icon-flat-led-screen-monitor-pc-modern-personal-monitor-office-and-home.jpg?s=612x612&w=0&k=20&c=YtP0P84oPncvlV0JNTb2xNUWJ3lFoZwb03gsWwpLrW8="
                alt="comp-icon"
                className="product-img"
              />
              <div className="img-info ">
                <div className="name black">
                  <span>Name: {props.name}</span>
                </div>
                <div className="avail black">
                  <span>Availibility: {props.avail}</span>
                </div>
                <div className="category black">
                  <span>Category: {props.category}</span>
                </div>
              </div>
            </div>
            <hr />
            {/** contains condition and warrenty date */}
            <div className="asset-info">
              <p className="cond-text">Condition: {props.cond}</p>
              <p className="cond-text">Warranty Date: {props.date}</p>
              <p className="cond-text">Serial No.: {props.serialCode}</p>
            </div>
          </div>
          {/** contains name, product type, etc... TBD */}
          <div className="delete-btn" onClick={ () => {deleteAsset(); alert("Asset has been deleted"); }}>
            <div className="delete-icon">&#128465;</div>
          </div>
        </div>
        <div className="back row">
          <div className="col">
            <UpdateForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Assetcard;

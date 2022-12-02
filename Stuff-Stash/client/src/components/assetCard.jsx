import React, { useState } from "react";
import "./styles/assetCard.css";
import UpdateForm from "../utils/UpdateForm";

// function handleClick() {
//   console.log(classes);
//   if(classes !== "card__base row flipped") {
//     classes += " flipped";
//   } else {
//     classes = "card__base row";
//   }
//   console.log(classes);
//   //this.setState({classes: "card__base row flipped"});
//   console.log("Click Handled");
// }

const Assetcard = (props) => {
  const [flip, setFlip] = useState(false);

  function test() {
    return (
      <span className="edit-opt" onClick={() => setFlip(!flip)}>
        EDIT
        <span className="edit-ico">&#8594;</span>
      </span>
    );
  }

  return (
    <React.Fragment>
      {/** overall container for card */}
      <div className={`card-grid card ${flip ? "flip" : ""}`}>
        <div className="front row">
          <div className="edit-btn">
            <div className="edit-icon" onClick={() => setFlip(!flip)}>
              &#9998;
            </div>
          </div>
          {/** left side container -- has static img and avail, warrenty, condition */}
          <div className="left__card col">
            {/** contains img and avail */}
            <div className="img-container">
              <img
                src="https://i.pinimg.com/originals/f1/d2/fe/f1d2fe7bafb49df1e6a17cd43d1cc7e1.gif"
                alt="cheems-pets"
                className="product-img"
              />
              <div className="img-info">
                <div className="name">
                  <span>Name: {props.name}</span>
                </div>
                <div className="avail">
                  <span>Availibility: {props.avail}</span>
                </div>
              </div>
            </div>
            <hr />
            {/** contains condition and warrenty date */}
            <div className="asset-info">
              <span className="">Asset Info</span>
              <p className="cond-text">Condition: {props.cond}</p>
              <p className="cond-text">Warranty Date: {props.date}</p>
            </div>
          </div>
          {/** contains name, product type, etc... TBD */}
          <div className="delete-btn">
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

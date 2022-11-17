import React, { Component } from "react";
import "./styles/assetCard.css";

export default class assetCard extends Component {
  state = {};
  render() {
    return (
      <>
        {/** overall container for card */}
        <div className="card__base row">
          <div className="overlay"></div>
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
                  <span>Name: Cool Asset</span>
                </div>
                <div className="avail">
                  <span>Availibility: Checked Out</span>
                </div>
              </div>
              <hr />
            </div>
            {/** contains condition and warrenty date */}
            <div className="asset-info">
              <span className="">Asset Info</span>
              <p className="cond-text">Condition: Mint</p>
              <p className="cond-text">Warrenty Date: 12/12/2022</p>
            </div>
          </div>
          {/** contains name, product type, etc... TBD */}
          <div className="right__card col">
            <span>More Info Here</span>
          </div>
        </div>
      </>
    );
  }
}

import React from "react";
import "./styles/welcome.css";
import "./styles/bg.css";
import UserLogin from "../Pages/login";

//Styles
const textStyle = {
  color: "white",
};

const boxShadow = {
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  boxShadow: "5px 5px 50px 5px rgba(0, 0, 0, 0.4)",
  borderRadius: "10px",
};

const welcome2 = () => {
  return (
    <React.Fragment>
      <div className="bg fill d-flex align-items-center justify-content-center area p-5">
        <div className="row p-5" style={boxShadow}>
          <div className="col d-flex align-items-center text-center justify-content-center">
            <div className="jumbotron">
              <h1 className="display-1">Welcome to Stuff Stash</h1>
              <p className="lead">The all in one Asset Manager</p>
            </div>
          </div>
          <div className="col m-5 ">
            <UserLogin />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default welcome2;

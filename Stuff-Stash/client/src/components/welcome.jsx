import React from "react";
import "./styles/welcome.css";
import "./styles/bg.css";

//Styles
const textStyle = {
  color: "white",
};

const boxShadow = {
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  boxShadow: "5px 5px 50px 5px rgba(0, 0, 0, 0.4)",
  borderRadius: "10px",
};

//Placeholder text -- remove later
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const welcome = () => {
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
          <div className="col m-5 text-center" style={textStyle}>
            Detailed description goes here <br />
            {text}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default welcome;

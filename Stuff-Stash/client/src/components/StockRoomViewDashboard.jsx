import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import React from "react";
import Axios from "axios";

const StockRoomViewDashboard = () => {
  const [listOfStockRoom, setListOfStockRoom] = useState([]);
  //const [orgName, setOrgName] = useState({});
  const [error, setError] = useState();
  let history = useHistory();
  const userid = ReactSession.get("username");

  const orgName = ReactSession.get("selectedOrg");

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  useEffect(() => {
    Axios.get(
      `http://localhost:3000/api/v1/users/viewstock/${orgName}`
    )
      .then((response) => {
        setListOfStockRoom(response.data);
      })
      .catch((err) => {
        setListOfStockRoom("");
        setError(err);
      });
  }, [orgName]);

  return (
    <React.Fragment>
      {Object.entries(listOfStockRoom).map(([key, value]) => {
        return (
          <li className="list-group-item bg-transparent" key={value.name}>
            {Object.entries(value).map((name, key) => {
              return (
                <div
                  className="container-fluid buttonItem shadowbtn"
                  key={name[1]}
                >
                  <button className="toggle-btn" data-active="inactive">
                    <span className="btnLabel">{name[1]}</span>
                  </button>
                </div>
              );
            })}
          </li>
        );
      })}
    </React.Fragment>
  );
};
export default StockRoomViewDashboard;

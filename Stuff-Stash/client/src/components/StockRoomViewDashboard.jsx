import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
//import Axios from "axios";
import React from "react";
import Axios from "axios";



const StockRoomViewDashboard = () => {
  const [listOfStockRoom, setListOfStockRoom] = useState([]);
  //const [orgName, setOrgName] = useState({});
  const [error, setError] = useState();
  let history = useHistory();
  const userid = ReactSession.get("username");

  const orgName = ReactSession.get("selectedOrg"); // This will eventually pull from a react session variable set when a particular org is clicked

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  useEffect(() => {
    Axios.get(`https://stuffstash-a8fm9.ondigitalocean.app/api/v1/users/viewstock/${orgName}`)
      .then((response) => {
        //console.log("RESPONSE: ", response.data);
        //console.log("OBJ MAP:", Object.entries(response.data)); // => [ ["0", {name}], ["1", {name}], ["2", {name}] ]
        setListOfStockRoom(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [orgName]);

  return (
    <React.Fragment>
      {Object.entries(listOfStockRoom).map(([key, value]) => {
        //FOR DEBUG
        //console.log("key: ", key);
        //console.log("value: ", value);
        return (
          <li className="list-group-item bg-transparent" key={value.name}>
            {Object.entries(value).map((name, key) => {
              //console.log("el", name);
              return (
                <div className="container-fluid buttonItem shadowbtn" key={name[1]}>
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

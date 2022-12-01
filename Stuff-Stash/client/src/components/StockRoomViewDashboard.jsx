import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import React from "react";
import Axios from "axios";

const StockRoomViewDashboard = () => {
  const [listOfStockRoom, setListOfStockRoom] = useState([]);
  const [org, setOrg] = useState("");
  const [stockroomName, setStockroomName] = useState("");
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
    Axios.get(`http://localhost:3000/api/v1/users/viewstock/${orgName}`)
      .then((response) => {
        setListOfStockRoom(response.data);
      })
      .catch((err) => {
        setListOfStockRoom("");
        setError(err);
      });
  }, [orgName]);

  var check = false;
  const handleClick = async (event) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/deleteStockroom", {
        method: "POST",
        body: JSON.stringify({
          org,
          stockroomName,
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

  const setsessions = (event) => {
    setOrg(orgName);
    console.log(event.currentTarget.id);
    setStockroomName(event.currentTarget.id);
    document.getElementById("stock" + event.currentTarget.id).hidden = false;
  };

  return (
    <React.Fragment>
      {Object.entries(listOfStockRoom).map(([key, value]) => {
        return (
          <li className="list-group-item bg-transparent" key={value.name}>
            {Object.entries(value).map((name, key) => {
              return (
                <div>
                  <div className="container-fluid buttonItem shadowbtn" key={name[1]}>
                    <button
                      className="toggle-btn"
                      data-active="inactive"
                      id={name[1]}
                      onClick={setsessions}
                    >
                      <span className="btnLabel">{name[1]}</span>
                    </button>
                  </div>
                  <button id={"stock" + name[1]} onClick={handleClick} type="hidden" hidden="true">
                    Delete
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
